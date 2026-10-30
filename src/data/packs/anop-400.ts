// The ANOP 400 course pack: the practicum, as I'd run a section. No labs and no exam; the term is the project.
import type { Pack } from './types';
import type { Assignment } from '../assignments';
import { a400 } from '../assignments';
import type { Criterion } from '../../components/Assignment.astro';

const L = (a: [number, string], b: [number, string], c: [number, string]): Criterion['levels'] => [{ pts: a[0], text: a[1] }, { pts: b[0], text: b[1] }, { pts: c[0], text: c[1] }];

const contract: Assignment = {
  title: 'The team contract',
  meta: 'Week 1, signed by every member · amended in week 7 · part of the 20% for stand-ups and peer evaluation',
  prompt: [
    'Before the client, the team. One page, written in the first team time and signed by everyone, on how the 4 or 5 of you will work. It is the page we open when someone goes quiet, so write it for that day.',
    'In week 7, with the first peer evaluation back, the team rewrites it: what changed, who does what in the second half, and how decisions get made now. Signed again.',
  ],
  stepsLabel: 'What is on the page',
  steps: [
    'Roles: who owns the data, the model, the memo and the client, and who runs the stand-up.',
    'How decisions get made when 2 of you disagree, and who breaks a tie.',
    'The weekly rhythm: when you meet, where the work lives, how fast you reply.',
    'What happens when someone misses a commitment: the first conversation, the second, and when it comes to me.',
    'What each of you wants out of this term, in 1 sentence each.',
  ],
  rubric: [
    { name: 'Usable on a bad day', levels: L([2, 'Names a person for every role and a step for every failure.'], [1, 'Roles named, failures vague.'], [0, 'Good intentions.']) },
    { name: 'Amended in week 7', levels: L([2, 'Rewritten against what happened, and signed again.'], [1, 'Re-signed without changes a stand-up record would support.'], [0, 'Not revisited.']) },
  ],
  rubricLabel: 'Marked complete, half or not done, like a stand-up',
  note: 'This is the piece of the practicum I borrowed most directly from Waterloo, where every capstone team signed one in week 1 and amended it at mid-term.',
};

const checkin: Assignment = {
  title: 'The mid-term check-in',
  meta: 'Check-in · 15% · week 8, client meeting 3 · 15 minutes and a 4-page pack',
  prompt: [
    'The client hears what its data can and cannot support, what the team does today, and the plan to week 14. It is the meeting where a project changes shape if it has to, and it is better to change it here than in week 13.',
    'Materials to me by 5 pm the day before. Another team sits in as the client in the dry run in class 1 and marks it on this rubric.',
  ],
  stepsLabel: 'The 4 pages',
  steps: [
    'The data audit: rows, period, keys, missing values, and the 3 things the data cannot answer.',
    'The baseline: what the client does today, as a number on the backtest period.',
    'The first result, with its backtest, against the baseline.',
    'The plan to week 14, the risks, and the 1 ask of the client.',
  ],
  rubric: [
    { name: 'The audit', levels: L([4, 'Counts, coverage and gaps, with the 3 questions the data cannot answer named.'], [2, 'Counts without the gaps.'], [0, '"The data looks fine."']) },
    { name: 'The baseline', levels: L([3, 'What the client does today, as a number on the backtest period.'], [1.5, 'Described, with no number.'], [0, 'Missing.']) },
    { name: 'The first result', levels: L([4, 'A result on the backtest period, honest about where it is weak.'], [2, 'A result on the training period, or no comparison with the baseline.'], [0, 'None yet.']) },
    { name: 'The plan and the ask', levels: L([2, 'Weeks 9 to 14 with names on them; 1 specific ask the client can grant in the room.'], [1, 'A plan without names, or an ask the client cannot act on.'], [0, 'Missing.']) },
    { name: 'The meeting', levels: L([2, '15 minutes, the client asked questions and got answers, and the materials arrived the day before.'], [1, 'Over time, or materials late.'], [0, 'Read from slides.']) },
  ],
  note: 'Marked within a week. The client\'s own notes from the meeting come to me and shape the feedback, and the classmates who sat in give the team 3 written sentences.',
};

const final: Assignment = {
  title: 'The final report and presentation',
  meta: 'Final · 45% · week 14, client meeting 5 · 20 minutes, a 10-page report and the handover',
  prompt: [
    'The client in the room, the model attached, and a recommendation the client can act on the week after. The presentation is 20 minutes with 10 of questions, and the strongest ones show what the client would do on Monday with the numbers behind it.',
    'The report is 10 pages with the memo as its first 2; the appendix holds the model, the backtest and the handover notes. Materials to me by 5 pm the day before, and the report by midnight on the day.',
  ],
  stepsLabel: 'The report',
  steps: [
    'The memo, 2 pages: what to do, what acting on it costs, and what would change the answer.',
    'The decision and the question, with what changed since the charter and why.',
    'The data: the audit, what was dropped, and what the client should collect next year.',
    'The model and its backtest against the baseline, with where it is weak.',
    'The handover: what the client keeps, how to run it, and when to retrain or stop.',
  ],
  rubric: [
    { name: 'The decision and the question', levels: L([5, 'Matches the signed charter, or says what changed and why, with the re-signed version attached.'], [2.5, 'Drifted from the charter without saying so.'], [0, 'A different project.']) },
    { name: 'The data', levels: L([5, 'The audit, what was dropped, and the 3 things to collect next year.'], [2.5, 'The audit alone.'], [0, 'Not discussed.']) },
    { name: 'The model and the backtest', levels: L([10, 'Validated on a period the client lived through, against the client\'s baseline; weak spots named.'], [5, 'Validated, but no baseline or no weak spots.'], [0, 'Scored on the training period.']) },
    { name: 'The recommendation', levels: L([10, 'What to do, what it costs, what it is worth and what would change it; the numbers support the words.'], [5, 'What to do without the cost, or the words and the numbers disagree.'], [0, 'A description of the model.']) },
    { name: 'The handover', levels: L([5, 'The client could run it next month without the team: files, steps, and the retraining rule.'], [2.5, 'Files without steps.'], [0, 'Nothing the client keeps.']) },
    { name: 'The presentation', levels: L([10, '20 minutes, the client\'s questions answered with numbers, every member spoke, materials in the day before.'], [5, 'Over time, or 1 member carried it, or materials late.'], [0, 'Read from slides.']) },
  ],
  note: 'The client fills in the feedback form below after the meeting; it shapes my mark and it is attached to the team\'s report. Peer evaluation at week 14 moves each member\'s share of the team marks by up to 10 points out of 100.',
};

const reflection: Assignment = {
  title: 'The reflection',
  meta: 'Reflection · 10% · week 14 · 2 pages · individual',
  prompt: [
    'Written alone in class 2 of week 14, after the presentations, with the stand-up record open. It is marked for specifics and honesty, which means the marks are easy to get and impossible to fake.',
  ],
  stepsLabel: 'The 4 questions',
  steps: [
    'Your role: what you owned, what you did well, and the week you let the team down, with what it cost.',
    'The project: what you would do differently from week 1, knowing what you know in week 14.',
    'The client: the moment the project nearly went wrong, and what the playbook got right or wrong about it.',
    'Next year: what you would tell the team that gets this client, in 5 sentences they could pin above a desk.',
  ],
  rubric: [
    { name: 'Specifics', levels: L([5, 'Weeks, meetings and files named; I could check it against the stand-up record.'], [2.5, 'True in general, thin on detail.'], [0, 'Could have been written in week 2.']) },
    { name: 'Honesty', levels: L([3, 'Owns a failure and prices it.'], [1.5, 'Failures happened to other people.'], [0, 'Nothing went wrong.']) },
    { name: 'For next year', levels: L([2, '5 sentences a new team could act on.'], [1, 'Advice in general.'], [0, 'Missing.']) },
  ],
  note: 'The 4th answers go, with permission and the client\'s name removed, into the pack for next year\'s class.',
};

export const pack: Pack = {
  slug: 'anop-400',
  code: 'ANOP 400',
  title: 'ANOP 400, in full',
  standing: "ANOP 400 has a client pipeline and an instructor who runs it, and I'd learn it before I touched it: sit in on the spring 2028 run, help where asked, and teach a section when the department asks. This is the section as I'd run it, with every week, every deliverable and every rubric, translated from the capstone I ran at Waterloo.",
  description: [
    'The practicum is one project, start to finish, for a client: scope it into a decision and a question, audit the data, build the model, backtest it on a period the client has lived through, and hand over a recommendation the client can act on the week after. 5 teams, 5 clients, 14 weeks.',
    "What's in the pack: the syllabus, all 14 weeks (the skills session, the workshop and the stand-up), the charter and the team contract, the mid-term check-in, the final report and presentation, the peer evaluation, the reflection, and the forms the course runs on: the stand-up sheet, the data agreement and the client's feedback form.",
  ],
  outcomes: [
    { id: 'O1', text: 'Scope a client\'s problem into a decision, a question and a success measure, and get it signed by week 3.' },
    { id: 'O2', text: 'Audit a client\'s data and say early what it can and cannot support.' },
    { id: 'O3', text: 'Build the model that answers the question and backtest it against what the client does today, on a period the client has already lived through.' },
    { id: 'O4', text: 'Write the recommendation a client can act on: what to do, what it costs, what it is worth and what would change it.' },
    { id: 'O5', text: 'Run a team for 14 weeks: a contract, stand-ups with a record, and the conversation when a commitment slips.' },
    { id: 'O6', text: 'Present to a client, answer the question you did not expect, and hand over something the client can run without you.' },
  ],
  runs: [
    ['Format', '14 weeks · 2 classes of 75 minutes a week · a 15-minute stand-up per team each week, with team time around it · teams of 4 or 5, assigned by me, a client each'],
    ['Before class', 'A 2-page case most weeks: a project that went wrong at the stage you are at, and the 3 questions it raises. Some are mine from practice with the names removed; the rest are from past teams, with permission.'],
    ['In class', 'Class 1 is a skills session for the stage the projects are at (scoping, the data audit, interviewing, backtesting, writing for the person who decides) with an exercise in it. Class 2 is a workshop: teams at tables on their own project, me and the TA moving between them, and another team playing the client when a dry run is due.'],
    ['Team time', 'The stand-up: 15 minutes per team with me each week, on a 1-page status sheet in a fixed format (done, next, blocked, the ask). The sheet goes in the team repo; the record it builds is what the peer evaluation and the playbook rely on.'],
    ['With the client', '5 meetings: kick-off (week 1), the signed charter (3), the check-in (8), the draft recommendation (11) and the final presentation (14). The client gets a named contact on the team and a weekly 3-line email, and I am copied.'],
    ['Tools', 'Whatever answers the question: Excel, Python, or both. A private GitHub repo per team for the code and the stand-up record. Client data lives on university storage the data agreement names, never on a laptop\'s desktop.'],
    ['Help', '2 office hours a week and the stand-up. Questions for a client are collected in the team\'s shared sheet before each meeting, so the meeting is spent on answers.'],
    ['Day one', "I ask the class how it wants to run. The weights are fixed. What's open: whether the check-in is a presentation or a written pack with a meeting, and the 1 extra skills session the class wants in week 9 (SQL, Tableau, or writing for executives)."],
  ],
  grading: [
    ['Charter', '10%', 'Week 3, signed by the client and every member. Rubric below.'],
    ['Mid-term check-in', '15%', 'Week 8. The data audit, the baseline and the first result, presented to the client. Rubric below.'],
    ['Final presentation and report', '45%', 'Week 14. The client in the room and the model attached. Rubric below.'],
    ['Stand-ups and peer evaluation', '20%', 'Every week. The status sheet is marked complete, half or not done; the team contract and its week 7 amendment count here. Peer evaluation at weeks 7 and 14 moves each member\'s share of the team marks up or down by up to 10 points out of 100.'],
    ['Reflection', '10%', 'Week 14. 2 pages, 4 questions, marked for specifics and honesty.'],
  ],
  policies: [
    {
      title: 'Every piece, to pass',
      body: [
        'A team has to hand in every team deliverable to pass the course; a missing one is an incomplete for everyone on the team until it arrives. Every member is expected to carry an equal share, and the stand-up record and the peer evaluation are how I know.',
      ],
    },
    {
      title: 'Dates',
      body: [
        'There are no late days in the practicum, because the dates are the client\'s. A deliverable to the client that is late costs the team 10% of its mark per day, and I tell the client why it is late. Presentation materials come to me by 5 pm the day before each client meeting.',
        'Illness and family emergencies are handled person by person, with a note from the appropriate office; the team carries on and the record shows who did what.',
      ],
    },
    {
      title: 'Attendance',
      body: [
        'Miss a stand-up and your share of that week\'s 20% is 0. Miss 3 in the term and we have a conversation about whether you are in the course. Class 1 skills sessions are where the methods are taught, so come; class 2 is your own project, so you will want to.',
      ],
    },
    {
      title: 'Data and confidentiality',
      body: [
        'Every client signs the 1-page data agreement below with the charter. Customer and member IDs are replaced before a file reaches students, students sign an NDA where the client asks for one, and nothing from a client file goes into a chatbot unless the agreement says it can. What the team keeps afterwards is written on the agreement: the method and the memo with the numbers replaced, unless the client agrees to more.',
      ],
    },
    {
      title: 'AI tools',
      body: [
        'Allowed on public data and on your own writing, with the prompts kept in the repo. The client\'s data stays out of them. The memo\'s first paragraph is written by a person, because the client will ask that person to defend it.',
      ],
    },
    {
      title: 'Conflicts',
      body: [
        'A company I or AMJ Capital hold a stake in is never a client of a team I grade. A student who has a stake in a client, or a family tie to one, says so in week 1 and joins another team.',
      ],
    },
  ],
  labLabel: 'Team time',
  weeksNote: 'Each week has the same shape: a short case before class, a skills session in class 1, a workshop in class 2, and the stand-up with me in team time. The timings in brackets are the plan for the room; they slip.',
  weeks: [
    {
      w: 1, topic: 'Kick-off',
      before: 'Read the 5 client briefs, 1 page each, and the sample charter. Fill the shared sheet: 3 questions you would ask each client.',
      c1: 'How the term runs and the day-one poll (15). Teams announced, assigned by me from the skills survey, with a client each (10). The team contract, written in the room, 1 page, signed by everyone (35). Reading a brief for the decision hiding in it, in teams (15).',
      c2: 'Kick-off meetings: each client has 25 minutes with its team, in the room, and the class listens in to 1 of them. The questions come from the sheet. The TA takes notes the team gets the same evening.',
      lab: 'Stand-up 1: the status sheet for the first time, mostly "the ask". Then the 3-column worksheet on 1 page: what we know about the decision, what we need to know, and how we would find out. A photo of it goes in the repo.',
    },
    {
      w: 2, topic: 'Scoping',
      before: 'Case: the project that built the wrong thing well. Check: the 3 questions.',
      c1: 'Skills: from a problem to a decision. The 1-sentence decision, the question a model answers, the success measure checkable by week 14, and the 3 ways a success measure cheats (25). In teams, write all 3 for your client, and swap with another team to find the cheat (35). Debrief: the measure each team rewrote (15).',
      c2: 'Workshop: the draft charter, section by section, with me at each table. The plan B dataset found and named before the class ends.',
      lab: 'Stand-up 2. The draft charter goes to the client contact by Friday, with the weekly 3-line email.',
    },
    {
      w: 3, topic: 'The charter',
      before: 'Read the data agreement template and the sample charter again, this time for what is missing from yours.',
      c1: 'Skills: the data agreement. What the team gets, who may see it, where it lives, what the team keeps. The ID replacement, shown on a real file with the names changed (30). In teams, fill the agreement for your client and list what you would want to keep (30). The NDA, and what it does and does not stop you saying in your reflection (15).',
      c2: 'Client meeting 2: the charter walked through and signed, team by team, with me in the room for the signature. A client who cannot sign by Friday triggers the playbook: the charter is marked on the draft and the team starts on plan B.',
      lab: 'Stand-up 3. The signed charter and the agreement go in the repo. The charter is marked within a week.',
      memo: 'The charter, 10%, signed. Rubric below.',
    },
    {
      w: 4, topic: 'The data arrives',
      before: 'Case: the file that was not what the client said it was. Check: the 5 things to count first.',
      c1: 'Skills: the data audit. Rows, period, keys, duplicates, missing values, the column that means 2 things, and time coverage, in that order (25). On a client-shaped file with the names changed, in teams, timed: the audit in 30 minutes (30). Debrief: the problem every team found and the 1 only one team found (20).',
      c2: 'Workshop: the audit on the client file, or on the public stand-in for teams whose file is late (the playbook: the stand-in starts the same day). The 3 questions the data cannot answer, written down and sent to the client.',
      lab: 'Stand-up 4. Then the storyboard: 6 frames on paper of the day the client uses what you deliver: who opens it, what they see, what they do next, what goes wrong. A photo goes in the repo.',
    },
    {
      w: 5, topic: 'Discovery',
      before: 'Case: the model nobody used, because nobody asked the people who do the job. Check: the 3 questions.',
      c1: 'Skills: talking to the people who do the job today. How to ask what they do on a Tuesday; why you avoid the word model with front-line staff; what to write down and what not to (25). Practice interviews in pairs, with the other team\'s storyboard as the script (30). Debrief: the thing each pair learnt that the data did not say (20).',
      c2: 'Workshop: the backtest plan. The period you will test on, what the success measure means on it, what the client did on that period, and what you need from the client to compute it. Written on 1 page and sent to the client.',
      lab: 'Stand-up 5. The 2 interviews each team runs this week go in the record, with the 3 lines from each.',
    },
    {
      w: 6, topic: 'The baseline',
      before: 'Case: the model that beat nothing, because nobody measured nothing. Check: 3 questions, one is "what does the client do today, as a number?"',
      c1: 'Skills: the baseline. What the client does today, computed on the backtest period: the rule of thumb, the last-year number, the manager\'s list (25). In teams, compute yours, or the nearest thing the data allows (35). Debrief: the team whose baseline is hard to beat, and what that means for week 14 (15).',
      c2: 'Workshop: the baseline on the client data, and the first look at what the model would have to beat. Check-in materials planned: 4 pages, who writes which.',
      lab: 'Stand-up 6. The baseline number goes in the record and in the email to the client.',
    },
    {
      w: 7, topic: 'Modelling begins',
      before: 'Case: the team that picked the method before the question. Check: 3 questions, one is matching 5 questions to 5 methods.',
      c1: 'Skills: choosing the method for the question. A menu, with the question each answers: a pivot table, regression, a classifier with a cutoff, an optimisation, a simulation, a ranked list (30). In teams, the 2 methods that fit your question, and the simpler one first (25). Peer evaluation 1 opens, in private (5). Debrief: the team that needs a pivot table and not a model, and why that is fine (15).',
      c2: 'Workshop: the first model, on the training period only. The team contract comes out and is amended: what changed, roles for the second half, how decisions get made now. Signed again.',
      lab: 'Stand-up 7. Peer evaluation 1 closes; I have the conversation with any team where the numbers and the record disagree.',
      memo: 'The team contract, amended and re-signed. Peer evaluation 1, a warning and a conversation.',
    },
    {
      w: 8, topic: 'The check-in',
      before: 'Nothing new. The 4 pages, to me by 5 pm the day before class 2.',
      c1: 'Dry run: each team presents its check-in to another team playing the client, 15 minutes, marked on the rubric, with the 3 written sentences of feedback. The questions the stand-in client asked go on the board; the real client will ask 2 of them.',
      c2: 'Client meeting 3: the check-in, 15 minutes a team and 10 of questions, with the client in the room or on the screen. The project changes shape here if it has to.',
      lab: 'Stand-up 8, short: what the client said, and what changes in the plan. The client\'s notes come to me and shape the feedback.',
      memo: 'The mid-term check-in, 15%. Rubric below.',
    },
    {
      w: 9, topic: 'When it goes wrong',
      before: 'Case: the client who went quiet in week 9. It happens, and usually around now. Check: the playbook, 7 items, which applies.',
      c1: 'Skills: the playbook, walked through with the cases: the quiet client, the late data, the changed question, the teammate who disappeared, the model that says nothing useful. For each, what the charter already says and what the team does this week (35). The extra session the class chose on day one: SQL, Tableau or writing for executives (40).',
      c2: 'Workshop: the model, validated on the backtest period for the first time. The teams on plan B switch at this stand-up without losing the week.',
      lab: 'Stand-up 9. The playbook item each team is running, if any, goes in the record.',
    },
    {
      w: 10, topic: 'Validation',
      before: 'Case: the backtest that was too good, because the period leaked. Check: 3 questions on leakage in a backtest.',
      c1: 'Skills: reading a backtest. The model against the baseline on the period the client lived through; where it is weak, by month and by segment; the 1 chart that shows it (25). In teams, the chart for your project, sketched on paper first, then built (35). Debrief: the team whose model loses to the baseline, and what the memo says then (15).',
      c2: 'Workshop: the classmate test. Another team reads your backtest cold and writes the 3 questions a client would ask. You answer them in the record.',
      lab: 'Stand-up 10. The backtest numbers go in the record and in the weekly email.',
    },
    {
      w: 11, topic: 'The draft recommendation',
      before: 'Read 2 memos from past teams, with permission: 1 the client acted on and 1 it did not. Check: the difference, in 1 sentence.',
      c1: 'Skills: writing for the person who decides. The first paragraph: what to do, what it costs, what it is worth, what would change it. Then the numbers that support each clause, and nothing else on page 1 (25). In teams, the first paragraph, drafted and read aloud to another team as the client (35). Debrief: the clause every draft was missing (15).',
      c2: 'Client meeting 4: the draft recommendation, 10 minutes a team, with the client\'s reaction written down. What the client pushes back on is what weeks 12 and 13 are for.',
      lab: 'Stand-up 11. The client\'s pushback, in the record, with what the team will do about each point.',
    },
    {
      w: 12, topic: 'Hardening and handover',
      before: 'Case: the model the client could not run after the team left. Check: 3 questions, one is "who retrains it?"',
      c1: 'Skills: the handover. What the client keeps, the steps to run it, the retraining rule, the rule for stopping, and the 3 things to collect next year (25). In teams, the handover page, written for a person who was not in the room (35). Debrief: the step every team forgot (15).',
      c2: 'Workshop: the memo tested cold. Another team reads it as the client, in 5 minutes, and writes what it would do on Monday. If that is not what the memo says, the memo changes.',
      lab: 'Stand-up 12. The handover page goes in the repo and to the client for comment.',
    },
    {
      w: 13, topic: 'Rehearsal',
      before: 'Nothing new. The slides, the report draft and the handover, ready to rehearse.',
      c1: 'Full dry runs: 20 minutes and 10 of questions, with me and another team as the client, marked on the rubric. Every member speaks. The question each team could not answer goes on the board.',
      c2: 'Dry runs, continued, with the fixes from class 1. The teams whose client cannot make week 14 plan the recording and the handover meeting instead.',
      lab: 'Stand-up 13, the last. Materials to me by 5 pm the day before each team\'s slot.',
    },
    {
      w: 14, topic: 'Delivery',
      before: 'Nothing. Sleep.',
      c1: 'Final presentations: 20 minutes and 10 of questions, with the client in the room or on the screen, or me in the client\'s chair where the client cannot make it. Classmates give each team 3 written sentences.',
      c2: 'The rest of the presentations. Then the reflection, written in the room with the stand-up record open, 45 minutes, and the peer evaluation in private. The report by midnight.',
      lab: 'The handover meeting with the client, 30 minutes, with the files and the steps. The client\'s feedback form comes to me within the week.',
      memo: 'The final report and presentation, 45%, and the reflection, 10%. Rubrics below.',
    },
  ],
  labs: [],
  assignments: [contract, a400[0], checkin, final, a400[1], reflection],
  extras: [
    {
      label: 'The stand-up',
      title: 'The 1-page status sheet',
      body: [
        'Every team brings the same sheet to the same 15 minutes every week. It takes 10 minutes to write and it is the record the course runs on: when a teammate disappears or a client goes quiet, the sheets say when it started.',
        'Marked complete, half or not done, in the room. Complete means every line is filled and the asks are things I can act on.',
      ],
      listLabel: 'The 4 lines',
      list: [
        'Done since last week: what shipped, with who did it, in 3 bullets at most.',
        'Next: what will be done by next stand-up, with a name on each item.',
        'Blocked: what is stuck, since when, and what has been tried.',
        'The ask: the 1 thing you need from me or the client this week.',
      ],
    },
    {
      label: 'The data agreement',
      title: 'One page, signed with the charter',
      body: [
        'The agreement is the client\'s protection and the team\'s. It is short on purpose, so that a client\'s lawyer can read it in 5 minutes, and it is attached to the charter so that nobody signs one without the other.',
      ],
      listLabel: 'What it says',
      list: [
        'What the team gets: the files, their period, and the date they arrive (by week 4).',
        'Who may see it: the team, me, the TA, and nobody else without the client\'s say-so.',
        'Where it lives: the university storage the agreement names. Never a personal laptop\'s desktop, never a chatbot.',
        'What is removed first: customer and member IDs, names and addresses, replaced by the client before the file is sent.',
        'What the team keeps afterwards: the method and the memo with the numbers replaced, unless the client agrees to more here.',
        'What the team may show: the week 14 presentation to the class, and a 1-paragraph summary on a CV, with the client named only if this box is ticked.',
        'The NDA: attached if the client wants one, signed by every member in week 3.',
        'Who to call: the client\'s named contact and me, with phone numbers, for the day something goes wrong.',
      ],
    },
    {
      label: 'The client feedback form',
      title: '5 questions, after week 14',
      body: [
        'The client answers these within a week of the final meeting. The answers shape my mark on the final presentation and report, they are attached to the team\'s report, and the last one goes into next year\'s pack.',
      ],
      list: [
        'Did the team deliver what the charter said it would? What was missing?',
        'Will you act on the recommendation? If not, what would it have needed?',
        'Can you run what the team handed over without them?',
        'What did the team do best, and what should it have done sooner?',
        'What would you tell the team that gets your project next year?',
      ],
    },
  ],
};
