/**
 * The class sheet for arizvi.com/tulane (the A/B testing class at Tulane, 1 December 2026).
 *
 * The page sends each answer here, and this script adds it as a row to the right tab of the sheet
 * ("A/B testing class at Tulane: the room's answers" in Ali's Google Drive). The "Our numbers" tab works out
 * everything with formulas; doGet reads those cells back so the page can show them.
 *
 * To set it up once, from the sheet: Extensions > Apps Script, paste this file over the empty one, save, then
 * Deploy > New deployment > Select type: Web app > Execute as: Me > Who has access: Anyone > Deploy, and
 * allow access when Google asks. Copy the web app address it gives (it ends in /exec) into ENDPOINT on the page.
 * After a change, Deploy > Manage deployments > Edit > Version: New version keeps the same address.
 * The class workbook (its room tab) and the class notebook read the room's gifts from the same address with ?rows=give.
 */
/** @OnlyCurrentDoc  Asks Google only for access to this one sheet. */
var TABS = { q1: 'Question 1', q2: 'Question 2', give: 'Give', exit: 'Exit ticket', vote: 'Keep or switch' };
var ANSWERS = ['Yes', 'Roughly', 'Not yet'];   // question 1
var Q2 = ['Our new donation page is better.', 'Preselecting $100 once will get more visitors to give.', 'Donors should give monthly.'];   // question 2, a quiz; the second is testable
var VOTES = ['Keep page A', 'Switch to page B'];   // button 4: asked after the result (vote 1) and again after lifetime value (vote 2)

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActive().getSheetByName(TABS[d.activity]);
    if (!sheet) return reply({ ok: false });
    var visitor = String(d.visitor || '').slice(0, 40);
    var now = new Date();
    if (d.activity === 'give') {
      var page = d.page === 'B' ? 'B' : 'A';
      if (d.gave) {
        var amount = Math.max(1, Math.min(10000, Math.round(Number(d.amount) || 0)));
        sheet.appendRow([now, visitor, page, 'Yes', d.type === 'Monthly' ? 'Monthly' : 'One-time', amount]);
      } else {
        sheet.appendRow([now, visitor, page, 'No', '', '']);
      }
    } else if (d.activity === 'vote') {
      if (VOTES.indexOf(d.answer) < 0) return reply({ ok: false });
      sheet.appendRow([now, visitor, d.round === 2 ? 2 : 1, d.answer]);
    } else if (d.activity === 'exit') {
      sheet.appendRow([now, visitor, String(d.text || '').slice(0, 2000)]);
    } else {
      if ((d.activity === 'q2' ? Q2 : ANSWERS).indexOf(d.answer) < 0) return reply({ ok: false });
      sheet.appendRow([now, visitor, d.answer]);
    }
    return reply({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  if (e && e.parameter && e.parameter.rows === 'give') return giveCsv();
  var s = SpreadsheetApp.getActive().getSheetByName('Our numbers');
  var pages = s.getRange('B4:C13').getValues();   // visitors to value per visitor; page A in column B, page B in C
  var test = s.getRange('B20:B24').getValues();   // shared rate, standard error, gap, z, p-value
  var hands = s.getRange('B27:B29').getValues();  // question 1: Yes, Roughly, Not yet
  var quiz = s.getRange('F27:F29').getValues();   // question 2: the three statements in E27:E29, in Q2's order
  var votes = s.getRange('B34:C35').getValues();  // keep or switch: vote 1 in B, vote 2 in C
  var keys = ['visitors', 'donors', 'conversion', 'monthly', 'onetime', 'monthlyGifts', 'onetimeGifts', 'given', 'ltv', 'vpv'];
  var out = { A: {}, B: {}, test: {}, q1: {}, q2: {}, vote: { 1: {}, 2: {} }, exits: s.getRange('B31').getValue() };
  keys.forEach(function (k, i) { out.A[k] = pages[i][0]; out.B[k] = pages[i][1]; });
  ['shared', 'se', 'gap', 'z', 'p'].forEach(function (k, i) { out.test[k] = test[i][0]; });
  ANSWERS.forEach(function (a, i) { out.q1[a] = hands[i][0]; });
  Q2.forEach(function (a, i) { out.q2[a] = quiz[i][0]; });
  VOTES.forEach(function (a, i) { out.vote[1][a] = votes[i][0]; out.vote[2][a] = votes[i][1]; });
  return reply(out);
}

// The room's gifts as a table for the class notebook, in the same columns as the farm's data (arizvi.com/tulane/farm.csv)
function giveCsv() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Give');
  var last = sheet.getLastRow();
  var rows = last > 1 ? sheet.getRange(2, 3, last - 1, 4).getValues() : [];   // Page, Gave, Type, Gift
  var lines = ['visitor,page,gave,type,gift'];
  var n = 0;
  rows.forEach(function (r) {
    if (r[0] !== 'A' && r[0] !== 'B') return;
    n += 1;
    lines.push([n, r[0], r[1] === 'Yes' ? 'Yes' : 'No', r[1] === 'Yes' ? r[2] : '', r[1] === 'Yes' ? Number(r[3]) : ''].join(','));
  });
  return ContentService.createTextOutput(lines.join('\n') + '\n').setMimeType(ContentService.MimeType.CSV);
}

function reply(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
