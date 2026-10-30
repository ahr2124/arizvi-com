// Assignments for the /bucknell course pages: the prompt, the steps, what is handed in, and the rubric.
// Rubric levels run best first; the first level's points are the criterion's worth.
import type { Criterion } from '../components/Assignment.astro';

export interface Assignment { title: string; meta: string; prompt: string[]; steps?: string[]; stepsLabel?: string; handIn?: string[]; rubric: Criterion[]; note?: string; rubricLabel?: string; heads?: [string, string, string] }
const L = (a: [number, string], b: [number, string], c: [number, string]): Criterion['levels'] => [{ pts: a[0], text: a[1] }, { pts: b[0], text: b[1] }, { pts: c[0], text: c[1] }];

export const a102: Assignment[] = [
  {
    title: 'What happened last week',
    meta: 'Lab 3 · one of the weekly labs · due before week 4',
    prompt: [
      "A campus coffee chain with 3 carts sends you its till export for last week: 2,000 rows, one per order, with the cart, the day, the item, the quantity and the price. The manager has one question: which cart sold the most, and is it the one she thinks?",
      'The export has at least 3 problems of the kind you met in class. Find them before you count.',
    ],
    steps: [
      'Clean the export on a copy. Keep the raw sheet untouched, and a Fixes sheet that lists each fix, how many rows it touched, and how you found it.',
      'Build a pivot table: sales by cart, then by cart and day.',
      "Write a 1-page brief: what happened last week in 3 sentences at most, what you had to fix to find out, and one thing the manager should check in the till's settings.",
    ],
    handIn: ['The workbook, with Raw, Clean, Fixes and Pivot sheets.', 'The brief, as the first sheet or a PDF.', 'The chat, if you used an AI tool.'],
    rubric: [
      { name: 'Found the problems', levels: L([2, 'All 3 found and fixed on a copy; each fix counted and explained on the Fixes sheet.'], [1, 'Some found, or fixes made on the raw sheet, or the counts missing.'], [0, 'The export used as it came.']) },
      { name: 'The pivot', levels: L([2, 'Right totals by cart and by day, labelled, readable at a glance.'], [1, 'Right totals in a cluttered or unlabelled layout, or one total wrong.'], [0, 'Wrong totals, or no pivot.']) },
      { name: 'The brief', levels: L([2, 'Says what happened in a sentence a manager could act on, names the fixes, and one thing to check.'], [1, 'Describes the table instead of the week, or skips the fixes.'], [0, 'Missing, or longer than a page.']) },
      { name: 'Spreadsheet hygiene', levels: L([2, 'Inputs, formulas and outputs kept apart; no numbers typed over formulas; someone else could follow it.'], [1, 'Mostly, with a few numbers typed into formulas.'], [0, 'A sheet only its author can read.']) },
    ],
    note: 'Every weekly lab is marked on 4 rows like these, out of 8, within a week. The lowest lab is dropped.',
  },
  {
    title: 'The decision memo',
    meta: 'Team project · 30% · weeks 4 to 14',
    prompt: [
      'Pick a decision a real organization faces: a club, a campus business, a company with public numbers, or one of the cases from the course. Build the model that informs it, and write the 2-page memo a manager could act on.',
      'The memo is built in pieces through the term, one per unit, and presented in week 14.',
    ],
    stepsLabel: 'The pieces',
    steps: [
      'Week 4: a team of 4 and the decision, in one paragraph I sign off.',
      'Week 6: the first model, with every assumption on one sheet.',
      'Week 10: how sure you are: a data table or a sample, and what it says.',
      'Week 12: what would change the answer.',
      'Week 14: 8 minutes to present, then the memo and the model handed in.',
    ],
    handIn: ['The memo: 2 pages, PDF.', 'The workbook.', 'One slide per member on what they did.', 'The peer evaluation, in private.'],
    rubric: [
      { name: 'The decision', levels: L([4, 'One sentence: who decides, between which options, by when.'], [2, 'Stated, but vague, or several decisions at once.'], [0, 'Not stated.']) },
      { name: 'The model', levels: L([4, 'The right method for the decision; assumptions in one place; someone else could audit it.'], [2, 'The right method, hard to follow, or an assumption hidden in a formula.'], [0, 'The method does not fit the decision, or the model cannot be checked.']) },
      { name: 'How sure', levels: L([4, 'A what-if or a sample that says how wrong the inputs can be before the answer changes.'], [2, 'Some sensitivity, not tied to the answer.'], [0, 'None.']) },
      { name: 'The recommendation', levels: L([4, 'What to do, by when, and what would change it; the numbers support the words.'], [2, 'What to do without what would change it, or numbers and words that disagree.'], [0, 'No recommendation.']) },
      { name: 'Writing and presentation', levels: L([4, '2 pages a manager reads in 5 minutes; charts carry the numbers; 8 minutes, on time.'], [2, 'Over length, or charts that decorate instead of inform.'], [0, 'Hard to follow.']) },
    ],
    note: "The peer evaluation at week 14 moves each member's share of the 20 points up or down by up to 2.",
  },
];

export const a330: Assignment[] = [
  {
    title: 'Hold it out',
    meta: 'Lab 4 · one of the weekly labs · due before week 5',
    prompt: [
      "The ice-cream stand from class, with its full record: 2 summers, 180 days, with the day's temperature, the day of the week, whether school was out, and sales.",
      "Fit a model that predicts sales from what you would know the night before, and say how far off it will be on days it has not seen.",
    ],
    steps: [
      'Hold out the last 30 days before you look at anything else.',
      'Fit at least 3 models of rising complexity: a line, a curve, a model with the extra features.',
      "Run 5-fold cross-validation on the training days and report each model's held-out error.",
      'Pick one. Score it once on the 30 days.',
      "Write 1 paragraph: which model you'd ship, what it's off by, and what would make you change it.",
    ],
    handIn: ['The notebook, which runs top to bottom in under a minute, with the paragraph as its last cell.', 'The chat, if you used an AI tool.'],
    rubric: [
      { name: 'Validation done right', levels: L([2, 'The 30 days untouched until the end; folds set before any fitting; no feature that leaks tomorrow.'], [1, 'Cross-validation used, but the holdout was peeked at, or a feature leaks.'], [0, 'Scored on the training days.']) },
      { name: 'The choice', levels: L([2, 'Picked by held-out error, and the error numbers are in the paragraph.'], [1, 'Picked by training error, or by taste.'], [0, 'No choice made.']) },
      { name: 'The code', levels: L([2, 'Runs top to bottom; named steps; nothing hard-coded that should be a variable.'], [1, 'Runs with fixes, or a wall of cells.'], [0, 'Does not run.']) },
      { name: 'The paragraph', levels: L([2, 'A manager could read it: which model, how far off, what would change it.'], [1, 'Technical but complete.'], [0, 'Missing.']) },
    ],
    note: 'Every weekly lab is marked on 4 rows like these, out of 8, within a week. The lowest lab is dropped.',
  },
  {
    title: 'The model card and the memo',
    meta: 'Team project · 30% · weeks 5 to 14',
    prompt: [
      'Your team builds one model that would change a decision for a real organization, or on public data where we cannot get one. The model is scored on a term of data the team never sees.',
      'What you hand in is a notebook, a 1-page model card and a 2-page memo, and an 8-minute pitch to the person who would act on it.',
    ],
    stepsLabel: 'The pieces',
    steps: [
      'Week 5: the charter: the decision, what a wrong prediction costs in each direction, the data, and the held-out plan.',
      'Week 9: a first model with its cross-validated error, against a simple baseline.',
      'Week 12: the cutoff chosen by cost, and the model card.',
      'Week 14: the pitch, then the notebook, card and memo.',
    ],
    handIn: ['The notebook, on GitHub where the organization allows it.', 'The model card, 1 page.', 'The memo, 2 pages.', 'The peer evaluation, in private.'],
    rubric: [
      { name: 'The decision and the costs', levels: L([4, 'The decision named; the cost of each kind of mistake stated and used to choose the cutoff.'], [2, 'The decision named; costs guessed; the cutoff left at the default.'], [0, 'Accuracy is the only yardstick.']) },
      { name: 'Data and leakage', levels: L([4, 'Every feature exists at decision time; the holdout is a later period.'], [2, 'One leak I can find, or a holdout that is a random split of the same period.'], [0, 'Leaks throughout.']) },
      { name: 'The model and its validation', levels: L([4, 'Cross-validated; error reported on held-out data; a simpler baseline beaten and shown.'], [2, 'Validated, but no baseline.'], [0, 'Scored on the training data.']) },
      { name: 'The model card', levels: L([4, 'What it predicts, what it is for, where it fails, who is harmed when it is wrong, and where AI tools were used.'], [2, 'Half of those.'], [0, 'Missing.']) },
      { name: 'The memo and the pitch', levels: L([4, 'A decision-maker could act on it: what to do, what acting costs, and when to stop trusting the model.'], [2, 'Describes the model instead of the decision.'], [0, 'Hard to follow.']) },
    ],
    note: "The peer evaluation at week 14 moves each member's share of the 20 points up or down by up to 2.",
  },
];

export const a400: Assignment[] = [
  {
    title: 'The charter',
    meta: 'Charter · 10% · week 3, signed by the client and every member',
    prompt: [
      'One page. It is the contract for the term, and the thing we come back to when something goes wrong.',
    ],
    stepsLabel: 'What is on the page',
    steps: [
      'The decision, in one sentence, and who makes it.',
      'The question the model answers.',
      'The data: what, how many rows, who owns it, when it arrives (by week 4), and the plan B dataset if it does not.',
      'The success measure, checkable by week 14 with data the team will have.',
      'Deliverables and dates: weeks 8, 11 and 14.',
      "The 5 meetings, with the client's named contact.",
      'Roles: who owns the data, the model, the memo and the client.',
      'The data agreement, attached: what the team gets, who may see it, what it keeps and may show afterwards.',
    ],
    rubric: [
      { name: 'The decision', levels: L([2, 'One sentence, a named decider, options that differ.'], [1, 'Vague, or several decisions.'], [0, 'Missing.']) },
      { name: 'The success measure', levels: L([2, 'Checkable by week 14 with data the team will have.'], [1, 'Needs data that arrives later, or has no number.'], [0, 'Missing.']) },
      { name: 'The data', levels: L([2, 'Named, counted, dated and owned, with plan B named.'], [1, 'Named, without a date or an owner.'], [0, '"The client will send something."']) },
      { name: 'Scope', levels: L([2, 'A model and a memo that 4 people can deliver in 11 weeks.'], [1, 'Ambitious, with no fallback.'], [0, 'A platform.']) },
      { name: 'Signatures and roles', levels: L([2, 'Client, contact and every member signed; roles assigned.'], [1, 'Signed late: marked on the draft, as the playbook says.'], [0, 'Unsigned and unassigned.']) },
    ],
  },
  {
    title: 'The peer evaluation',
    meta: 'Weeks 7 and 14 · in private · part of the 20% for stand-ups and peer evaluation',
    prompt: [
      'Each member rates every teammate on 4 things, 1 to 5, with a comment required for any 1 or 5. I see the numbers; teammates see only their own average. At week 7 it is a warning and a conversation. At week 14 it moves marks.',
      "How it moves marks: a member's score is their average across teammates. The adjustment is 5 points for every point they sit above or below the team's average score, capped at 10 points out of 100 either way, applied to their share of the team marks. A team that rates everyone the same moves nobody.",
    ],
    rubric: [
      { name: 'Shows up', levels: L([5, 'At every stand-up and meeting; replies within a day.'], [3, 'Misses some; replies eventually.'], [1, 'The team works around them.']) },
      { name: 'Delivers', levels: L([5, 'What they committed to, when they said.'], [3, 'Most of it, late.'], [1, 'Others redo it.']) },
      { name: 'Quality', levels: L([5, 'Work others could use as it came.'], [3, 'Work that needed a pass.'], [1, 'Work that had to be replaced.']) },
      { name: 'Team', levels: L([5, 'Shares the work, raises problems early, treats people well.'], [3, 'Fine, and quiet about problems.'], [1, 'Makes the work harder.']) },
    ],
    rubricLabel: 'The 4 things · each rated 1 to 5',
    heads: ['A 5', 'A 3', 'A 1'],
    note: '4 and 2 sit in between.',
  },
];

export const a302: Assignment[] = [
  {
    title: 'What is an extra dollar of credit line worth?',
    meta: 'Lab 3 · one of the weekly labs · due before week 4',
    prompt: [
      "The 6-month cash plan from week 2: a small manufacturer with a $100,000 credit line at 1% a month, a cash shortfall in months 2 to 4 and a surplus after, and the option to delay paying suppliers at a 2% penalty.",
      'The bank offers to raise the line by $25,000 for a $1,500 fee. Take it or leave it?',
    ],
    steps: [
      'Rebuild the week 2 model with the credit line as a named input.',
      'Solve it. Record the shadow price on the credit-line constraint and its allowable range.',
      'Re-solve at $125,000 and compare: did the shadow price predict the gain?',
      'The decision in 3 sentences: take it or not, the number that decides it, and what would flip it.',
    ],
    handIn: ['The workbook, with the Solver sensitivity report pasted in and the 3 sentences on the first sheet.', 'The chat, if you used an AI tool.'],
    rubric: [
      { name: 'The model', levels: L([2, 'Matches week 2; the credit line is an input; Solver set up right.'], [1, 'Solves, with a hard-coded line or a mislabelled constraint.'], [0, 'Does not solve.']) },
      { name: 'Reading the report', levels: L([2, 'Shadow price and allowable range read correctly and explained in words.'], [1, 'The price read, the range ignored.'], [0, 'Misread.']) },
      { name: 'The check', levels: L([2, 'Re-solved at $125,000; the gain compared with shadow price × $25,000, and any difference explained.'], [1, 'Re-solved, no comparison.'], [0, 'Not done.']) },
      { name: 'The decision', levels: L([2, 'Take or leave, with the number that decides it and what would flip it.'], [1, 'A decision without the number.'], [0, 'Missing.']) },
    ],
    note: "Every weekly lab is marked on 4 rows like these, out of 8, within a week. The lowest lab is dropped. The team project is marked on the same 5 rows as ANOP 102's decision memo.",
  },
];
