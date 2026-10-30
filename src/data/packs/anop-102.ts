// The ANOP 102 course pack. The course page shows the term and 2 assignments; this is all of it.
import type { Pack } from './types';
import type { Assignment } from '../assignments';
import { a102 } from '../assignments';
import type { Criterion } from '../../components/Assignment.astro';

const L = (a: [number, string], b: [number, string], c: [number, string]): Criterion['levels'] => [{ pts: a[0], text: a[1] }, { pts: b[0], text: b[1] }, { pts: c[0], text: c[1] }];

const midterm: Assignment = {
  title: 'The midterm case',
  meta: 'Midterm · 20% · week 7, class 2 · 75 minutes',
  prompt: [
    'A business you haven\'t seen, its numbers on 1 page, and 4 questions. You build the model and answer them. The practice case in class 1 that week is the same shape with different numbers, and we mark it together before you leave.',
    'Open book: your own labs, your notes and the course text. Closed internet and no AI tools. On paper or in a workbook, whichever the class chose on day one. My last class asked for paper at mid-term, and got it.',
  ],
  stepsLabel: 'The 4 questions, every time',
  steps: [
    'Build it: the model with inputs, formulas and outputs apart.',
    'Breakeven: how many, and at what price.',
    'What-if: a Data Table or Goal Seek, and what it says in a sentence.',
    'The call: what you would tell the owner, in 3 sentences, and the one assumption you would check first.',
  ],
  rubric: [
    { name: 'The model', levels: L([6, 'Right structure; every assumption named and in one place; the formulas reference inputs.'], [3, 'Right answers from a model with numbers typed into formulas.'], [0, 'Numbers without a model.']) },
    { name: 'Breakeven', levels: L([4, 'Right, with the formula shown.'], [2, 'Right number, no working, or the working with a slip.'], [0, 'Missing or wrong without working.']) },
    { name: 'What-if', levels: L([4, 'The table or Goal Seek set up right and read in a sentence a manager could use.'], [2, 'Set up right, read wrong, or the reverse.'], [0, 'Missing.']) },
    { name: 'The call', levels: L([4, 'A decision, the number behind it, and the assumption to check first.'], [2, 'A decision without the number, or the number without the decision.'], [0, 'Missing.']) },
    { name: 'Hygiene under time', levels: L([2, 'Labelled, readable, someone else could follow it.'], [1, 'Readable with effort.'], [0, 'Only you could follow it.']) },
  ],
  note: 'Marked within a week, with the practice case as the answer key for the method. Grades are final a week after they come back.',
};

const reflection: Assignment = {
  title: 'The reflection',
  meta: 'Reflection · 5% · week 14 · 1 page',
  prompt: [
    'One page, written alone, after the presentations. It\'s marked for honesty and specifics, and the marks are easy to get. I read every one before I plan the next term.',
  ],
  stepsLabel: 'The 3 questions',
  steps: [
    'What did your team get wrong first, and how did you find out?',
    'Which week changed how you look at a number, and why that one?',
    'What would you tell a student starting this course in January?',
  ],
  rubric: [
    { name: 'Specifics', levels: L([3, 'Names the week, the mistake, the cell. I could check it against the model.'], [2, 'True in general, thin on detail.'], [0, 'Could have been written before the course.']) },
    { name: 'Honesty', levels: L([2, 'Owns a mistake and what it cost.'], [1, 'Mistakes happened to other people.'], [0, 'Nothing went wrong.']) },
  ],
  note: "The 3rd answer, with the student's say-so, goes on the course site for next term's class to read.",
};

export const pack: Pack = {
  slug: 'anop-102',
  code: 'ANOP 102',
  title: 'ANOP 102, in full',
  standing: "ANOP 102 runs in several sections a term on a shared outline, and that outline comes first. This is the course as I'd run it if the department asked, written the way I write a course: every week planned, every lab with what passes, the rubrics up front, and a sample of the final. It's also what I'd bring to a shared-outline section, piece by piece, where the weeks line up.",
  description: [
    'The course teaches students to build a spreadsheet model a manager could audit, to say how sure they are, and to write the 2-page memo that says what to do. By week 14 every team has done all 3 for a decision a real organization faces.',
    "What's in the pack: the syllabus (outcomes, grading, the rules), all 14 weeks (what to do before class, both classes with timings, the lab), the 12 labs with what passes, the 4 big pieces with their rubrics, and a sample final exam in the format the real one uses.",
  ],
  outcomes: [
    { id: 'O1', text: 'Build a spreadsheet model someone else can audit: inputs, formulas and outputs kept apart, every assumption named and in one place.' },
    { id: 'O2', text: 'Clean a data export, summarise it with pivot tables, and say what happened in 1 page.' },
    { id: 'O3', text: 'Pick the chart that answers the question, and write the headline that goes over it.' },
    { id: 'O4', text: 'Run a what-if: breakeven, Data Tables, scenarios and Goal Seek, and read the result the way a manager would.' },
    { id: 'O5', text: 'Say how sure you are: expected value, a sample and its confidence interval, and what an A/B test or a trial can and can\'t tell you.' },
    { id: 'O6', text: 'Fit and read a regression line, solve a small optimisation with Solver, and know when to doubt each.' },
    { id: 'O7', text: 'Write a 2-page decision memo: what to do, by when, and what would change the answer.' },
  ],
  runs: [
    ['Format', '14 weeks · 2 classes of 75 minutes a week · a lab hour a week'],
    ['Before class', 'A 10-to-20-minute video or reading, and a 3-question check on the course site that closes when class starts. I read the answers before I walk in, and class starts from what the check says the room got wrong.'],
    ['In class', 'Exercises, in pairs or threes, in timed steps: build, swap, break, fix, write it up. Laptops open while we build and closed for the debrief. Each class 2 ends with an exit ticket: 2 sentences on paper, which become the first page of that week\'s lab.'],
    ['The lab', 'A lab hour with me or a TA in the room, on a task from one of the course\'s running cases (a coffee chain, a taco truck, a bike shop), which carry through the term. It starts in the hour and is finished on your own, and it\'s due before the next week\'s class 1.'],
    ['Tools', 'Excel, the desktop version. On day one you need sums, averages and copying a formula down; everything else is taught. Solver and the Analysis ToolPak get switched on in week 11.'],
    ['Text', "The department's text where there's one. Otherwise Powell and Baker, Business Analytics: The Art of Modeling with Spreadsheets, as an optional reference; the videos cover what the labs need."],
    ['Help', '2 office hours a week, 1 in the office and 1 on Zoom. Questions about the course go on the course forum so the answer helps everyone; questions about your mark come to me by email.'],
    ['Day one', "I ask the class how it wants to be graded. The weights below are fixed. What's open: whether the midterm is on paper or in a workbook, and whether the final is 2 hours or 3. In week 7 an anonymous form asks what to change, and I change it; in my last course it moved the exams to paper."],
  ],
  grading: [
    ['Weekly labs', '30%', '12 labs, marked pass or redo on a rubric you see before you start. A lab that doesn\'t pass comes back within a week with feedback, and you resubmit until it does, up to the last day of week 13. Each lab passed is worth 2.5 of the 30.'],
    ['Midterm', '20%', 'Week 7. A case you haven\'t seen, 75 minutes, open book, closed internet. Rubric below.'],
    ['Team project and memo', '30%', 'Teams of 4 from week 4. The model, the 2-page memo and an 8-minute presentation in week 14, built in pieces through the term. Peer evaluation moves each member\'s share by up to 2 points.'],
    ['Final', '15%', 'On paper, 2 or 3 hours. Scenarios like the labs, with the outcome each question tests named on the paper. Attempt up to 30 marks. Sample below.'],
    ['Reflection', '5%', 'Week 14. 1 page, 3 questions, marked for specifics and honesty.'],
  ],
  policies: [
    {
      title: 'Pass or redo',
      body: [
        'Labs are either satisfactory or they come back. A lab passes when it reaches 6 of its 8 rubric points with no row at 0. Anything else comes back with feedback within a week, and you resubmit until it passes, as many times as it takes, until the last day of week 13. You earn full marks for every lab you bring to a pass.',
        'In other words: the labs are where you learn the method, and you get full marks once you have. The midterm and the final are where I find out whether it stuck.',
      ],
    },
    {
      title: 'Late work',
      body: [
        'You have 5 late days for the term, to spend on labs as you like, 1 day at a time, with no reason given. Weekends and holidays don\'t count as days. They cover labs only; the project pieces, the midterm and the final have fixed dates.',
        'A lab handed in late with no late day left is a 0 for that lab. Extensions beyond that are for illness or a family emergency, with a note from the appropriate office. A dead laptop isn\'t an extension; keep your work in OneDrive from week 1.',
      ],
    },
    {
      title: 'Working together',
      body: [
        'You may discuss every lab with anyone. You may not give or take answers. If Priya asks Marcus what he got for the breakeven and Marcus tells her, both have broken the rule. Sending someone your workbook "to look at" is the same thing.',
        'The practice that keeps you safe: talk at a whiteboard, nobody writes anything down, erase it, then go and build your own from a blank sheet. If you can\'t build it without looking at the notes, it isn\'t yours yet. Name everyone you talked to at the top of the lab, and sign the line under it: this is my work, except as stated above.',
      ],
    },
    {
      title: 'AI tools',
      body: [
        'Allowed: "explain this error", "check this formula", "what does XLOOKUP do". Hand in the chat with the lab. Off limits: having it build the model or write the memo. You stay responsible for every cell, and the midterm and final have no AI in the room.',
      ],
    },
    {
      title: 'Marks',
      body: [
        'Labs and the midterm are marked within a week. Grades are final 1 week after the work comes back; if a mark looks wrong, email me inside that week with the cell or the line you mean.',
      ],
    },
    {
      title: 'Attendance',
      body: [
        "Class exercises are done in the room and are hard to make up, so come. If you miss a class, get the notes from a classmate and do the exit ticket from the slides before the lab. If you miss a lab, the lab is still due. Doodle, sit on your phone, play games if you want to. Do not disturb the people next to you.",
      ],
    },
  ],
  weeks: [
    {
      w: 1, topic: 'A spreadsheet someone else can read',
      before: 'Video (12 min): inputs, formulas, outputs. Read the 1-page case: a campus print shop deciding what to charge for a colour page. Check: 3 questions, one of them "which cell in the sample model is a typed-in number that should be an input?"',
      c1: 'Who I am and how this runs (10). The day-one poll on how you want to be graded (10). Model in a day, in threes: list every input the print shop decision needs (10), build the 1-tab model with inputs at the top (15), swap laptops and break the next team\'s model by changing one input (10), fix your own (10), tell the room what broke (10).',
      c2: 'Named inputs and absolute references (15). The 3 rules: inputs, formulas and outputs apart; no number typed into a formula; every assumption on the inputs sheet (10). Rebuild the print shop model to the rules, in pairs (30). Debrief: 2 models on the screen, the room finds the typed-in number (15). Exit ticket: the 1 rule you broke today and where.',
      lab: 'Lab 1: the print shop model to the 3 rules, with a second scenario added. Most people finish in the hour.',
      memo: 'Each student writes 1 sentence: a decision someone you know has to make this term, who makes it, and by when. It\'s the seed of the memo.',
    },
    {
      w: 2, topic: 'Lookups and cleaning',
      before: 'Video (15 min): sort, filter, XLOOKUP, and what a tidy table is (1 row per thing, 1 column per fact). Check: 3 questions on a 10-row export with 2 problems in it.',
      c1: 'The coffee chain: 3 carts, a till export of last week, 2,000 rows, on everyone\'s screen (5). Find what\'s wrong with it, in pairs, 1 problem a minute on the board (15). The 5 usual suspects: text that looks like a number, trailing spaces, duplicates, a cart named 2 ways, a date in 2 formats (15). Fix them on a copy with a Fixes sheet (30). Debrief: how many rows each fix touched, and which fix changed the answer (10).',
      c2: 'XLOOKUP in pairs: price list on 1 sheet, orders on another, bring the price across (20). The lookup that silently fails: a missing key and what the formula returns (15). Build the Clean sheet from Raw with formulas only, so the raw stays raw (30). Exit ticket: which fix would you have missed on your own?',
      lab: 'Lab 2: a second export from the same chain, with 4 problems, 2 of them new. Clean it on a copy, keep the Fixes sheet, and bring the prices across with XLOOKUP.',
    },
    {
      w: 3, topic: 'Pivot tables and summaries',
      before: 'Video (14 min): a pivot table from a clean table; average, spread and total by group. Read: 1 page on what a "what happened" brief is. Check: 3 questions, one asks for the median of a 7-number list.',
      c1: 'Try the class: count the coffee export, clean it, count it again (the pivot demo from the course page) (20). Pivots in pairs: sales by cart, by cart and day, by item (25). Average, median and the spread, and when the average lies (15). Debrief: 3 pivots that answer the manager\'s question and 3 that decorate (15).',
      c2: 'The 1-page brief: what happened, in 3 sentences at most, then what you had to fix, then what to check (15). Write one from the pivot in pairs (25). Read 3 out loud; the room says which sentence a manager could act on (20). Exit ticket: the 1 sentence that says what happened last week.',
      lab: 'Lab 3: What happened last week. In full under Assignments.',
      memo: 'The data piece: each student names the data their decision needs, where it lives, and who owns it.',
    },
    {
      w: 4, topic: 'Charts that answer a question',
      before: 'Video (16 min): the 4 charts that cover most business questions (bar, line, scatter, the sorted bar), and the 3 that mislead (pie, 3D anything, a truncated axis). Check: 3 questions, each a question and 4 chart types to choose from.',
      c1: 'Low-fi first: sketch the chart on paper before you touch Excel, in pairs, for 4 questions about the coffee chain (20). Build the 4 (30). The headline over each: a claim, with the number in it (15). Debrief: the sketch on the left, the chart on the right, what changed (10).',
      c2: 'The dashboard prompt, role-framed: you\'re the analyst at the chain and the owner wants 1 page she can read on her phone. Sketch it (15), build it with a slicer and 4 charts (40). Peer review: swap, read the other pair\'s page cold, write the 1 question it doesn\'t answer (15). Exit ticket: the headline on your best chart.',
      lab: 'Lab 4: the 1-page dashboard for the chain, with the low-fi sketch handed in first as a photo.',
      memo: 'Teams of 4 form, from a list I post; each team picks 1 of its members\' decisions and writes the paragraph I sign off: who decides, between which options, by when.',
    },
    {
      w: 5, topic: 'Breakeven',
      before: 'Read the taco truck case (2 pages): $600 a week for the truck, permit and insurance, $3 of ingredients a taco, $8 a taco, last summer\'s truck sold about 140 a week. Check: 3 questions, one is the breakeven in your head.',
      c1: 'Fixed and variable, in the room: the class sorts 20 costs from the case into 2 columns and argues about the 4 that could go either way (20). Build the breakeven model in pairs, assumptions on 1 sheet (30). The chart: cost and revenue lines crossing, built from the model (15). Debrief: what the owner asks next (10).',
      c2: 'Contribution margin and the breakeven formula, derived on the board and checked against the model (15). Cases in threes: a food stall, a tutoring service, an app with a subscription, each with its breakeven and the 1 assumption that drives it (40). Debrief: which business is riskiest, and why the breakeven alone doesn\'t say (20). Exit ticket: your breakeven and the assumption you trust least.',
      lab: 'Lab 5: the breakeven model for a business the team chose in week 4, or the taco truck for teams whose decision isn\'t about selling things. Assumptions on 1 sheet, the chart, and 3 sentences for the owner.',
    },
    {
      w: 6, topic: 'What-if analysis',
      before: 'Video (18 min): a 1-way Data Table, a 2-way Data Table, scenarios, Goal Seek. Check: 3 questions, one asks what a Data Table recalculates when you change an input.',
      c1: 'Try the class: how wrong can the forecast be? The 2-way Data Table on the taco truck, price by volume (the demo from the course page) (20). Build it yourselves (25). Scenarios: a wet summer, a rival truck, a rent rise, each with its profit (20). Debrief: the 1 cell that the owner should watch (10).',
      c2: 'Goal Seek: the price that breaks even at 100 tacos (10). In threes, the owner\'s 5 questions, each answered with a table, a scenario or Goal Seek, and a sentence (40). Sensitivity in words: "profit moves $x for every $1 of price" (10). Practice for the midterm: the 4 questions on a fresh case, timed, 15 minutes (15). Exit ticket: which tool you would reach for first and why.',
      lab: 'Lab 6: the week 5 model with a 2-way Data Table, 3 scenarios and 1 Goal Seek, and a half page that says how wrong the forecast can be before the plan loses money.',
      memo: 'The model piece: the team\'s first model, every assumption on 1 sheet, handed in for comment.',
    },
    {
      w: 7, topic: 'Review and midterm',
      before: 'Nothing new. Read your own labs 1 to 6 and the feedback on them. Check: 3 questions from the practice cases.',
      c1: 'The practice case, timed, 60 minutes: a new business, 1 page of numbers, the 4 questions (60). We mark it together against the rubric before anyone leaves (15).',
      c2: 'The midterm (75). The anonymous mid-term form goes out the same evening: what to keep, what to change, 1 thing you didn\'t understand.',
      lab: 'No lab. The lab hour is office hours, for anyone who wants to go through the practice case again.',
    },
    {
      w: 8, topic: 'Expected value',
      before: 'Video (15 min): a forecast with odds, expected value as a SUMPRODUCT, and the newsvendor problem in plain words. Check: 3 questions, one is an expected value from a 3-row table.',
      c1: 'What the form said, and what changes from today (10). Try the class: an LLM gives you probabilities. The café asks a chatbot for tomorrow\'s croissant demand and gets 20, 45 and 35 percent (the demo from the course page) (25). Build the bake decision in pairs: 3 bakes, 3 demands, 9 profits, 1 SUMPRODUCT each (25). Debrief: the bake with the best expected profit and why it isn\'t the most likely demand (15).',
      c2: 'Decision tables in threes: a market stall deciding how much stock to carry, with 4 weather outcomes and the odds from last year (35). Risk: the bake that wins on average and the one that never loses money, and which owner wants which (20). Where the odds come from, and why a chatbot\'s are a guess dressed up (10). Exit ticket: expected value in your own words, in 1 sentence.',
      lab: 'Lab 8: the market stall decision as a model, 2 ways: best expected profit, and smallest worst case. A paragraph on which you would pick for an owner who can\'t afford a bad week.',
    },
    {
      w: 9, topic: 'Samples and confidence',
      before: 'Video (18 min): a sample mean moves; the standard error; the 95% confidence interval; and how many customers an A/B test needs. Check: 3 questions, one is reading a confidence interval off a chart.',
      c1: 'The A/B test from practice: a retailer with 10,000 orders a year tests a new checkout page (10). The sampling exercise: every pair draws 20 orders from the same 2,000-row export with RANDBETWEEN and reports the average; the 12 averages go on the board and we look at the spread (25). Standard error from the spread, then from the formula, and they agree (20). Confidence intervals in Excel: CONFIDENCE.NORM and what it means in a sentence (20).',
      c2: 'Design an A/B test for the coffee chain\'s loyalty card, in threes: the metric, the 2 versions, who gets which, the sample size from the calculator, and the date you will look (40). The stopping rule, and the test that was stopped early because it looked good (15). Debrief: how long the chain would have to run the test with its traffic, and whether the test is worth running (20). Exit ticket: the sample size your test needs and the 1 number it depends on most.',
      lab: 'Lab 9: the A/B test plan for the chain, as a 1-page design plus the sample-size calculation in the workbook. You design it; you don\'t run it. Hint: keep the design simple.',
    },
    {
      w: 10, topic: 'Testing a claim',
      before: 'Video (16 min): a control group, the success measure fixed before the data, and why. Read: 2 pages on how a clinical trial is written up. Check: 3 questions, one is "which of these 4 claims was fixed in advance?"',
      c1: 'The claim: the chain says the loyalty card raises spend per visit (5). How a trial does it: write the success measure and the threshold before anyone sees a number, in pairs, on paper, and hand it to me (15). The data arrives: 400 customers, half with the card, half without (10). Compare the 2 groups: the difference, its confidence interval, and whether it crosses 0 (30). Debrief: the pairs whose threshold the result met, and the ones that would now like to change their threshold (15).',
      c2: 'Writing it up in plain words: what was tested, on whom, what was measured, what was found, and what it doesn\'t show (20). In threes, 3 write-ups of the same result for 3 readers: the owner, the staff, a customer (30). The claim that doesn\'t hold up: p-hacking and the 20 metrics problem, with the chain\'s own data (15). Exit ticket: the 1 sentence that says what the test found and the 1 that says what it can\'t.',
      lab: 'Lab 10: the loyalty card test written up in 1 page, with the comparison and its confidence interval in the workbook and the pre-registered measure attached.',
      memo: 'The how-sure piece: the team adds a Data Table or a sample to its model and says how wrong the inputs can be before the answer changes.',
    },
    {
      w: 11, topic: 'Regression',
      before: 'Video (18 min): a line through the data; the slope, the intercept, R squared; the Analysis ToolPak. Check: 3 questions, one is reading a slope as a sentence.',
      c1: 'Try the class: one weekend flips the slope. The bike shop\'s 12 weeks of ad spend and sales (the demo from the course page) (20). Fit it in Excel 3 ways: the chart trendline, SLOPE and INTERCEPT, the ToolPak (25). Read the output line by line, in pairs, and write each number as a sentence (20). Debrief: the weekend that was different, and what to do about it (10).',
      c2: 'The 3 doubts: an outlier, a small sample, and a shop that chose its own spend (15). Prediction with a line, and how far out you may go (15). Two inputs at once: temperature plus a 0/1 promotion flag, read from the ToolPak output (10). In threes, 3 datasets from the chain: 1 where the line is fine, 1 where it\'s useless, 1 where it\'s a trap (35). Exit ticket: the slope of your best line, as a sentence a manager could act on.',
      lab: 'Lab 11: 2 years of the chain\'s weekly sales against temperature and a promotion flag. Fit, read, predict next month, and say which of the 3 doubts applies.',
    },
    {
      w: 12, topic: 'Optimisation',
      before: 'Video (14 min): decision variables, an objective and constraints; Solver in 4 clicks. Check: 3 questions, one is "which of these is a constraint?" The written-up class on the course page is for after class 1, so the guess stays a guess.',
      c1: 'Guess first: the bike shop\'s 2 bikes, which to build more of (5). Pairs write the decision variables, objective and constraints on paper (15). Build and solve (25). The real decision: assembler overtime at $30 an hour or a painter at $25 (20). Exit ticket: tell the owner what to do in 2 sentences and what would change your answer (10).',
      c2: 'The sensitivity report, line by line: shadow prices and their ranges, read as sentences (25). In threes, 3 more models of the same shape: a diet, a schedule, a product mix with a demand cap (40). Debrief: the constraint that binds in each, and what loosening it\'s worth (10).',
      lab: 'Lab 12: the bike shop with a third bike and a materials budget. Solve it, read the report, and write the owner the 3 sentences.',
      memo: 'The what-would-change-it piece: the team names the 2 inputs its answer is most sensitive to and shows the numbers.',
    },
    {
      w: 13, topic: 'Project workshop',
      before: 'Nothing new. Bring the model and the memo draft.',
      c1: 'Workshop: teams at tables, me at each one for 12 minutes, with a checklist (the rubric). Random draws for the teams whose decision needs them.',
      c2: 'Workshop, continued. Dry runs: each team presents for 8 minutes to another team, which marks it on the rubric and says the 1 thing it didn\'t understand.',
      lab: 'The lab hour is workshop time. Last day of week 13: the last day to resubmit any lab.',
    },
    {
      w: 14, topic: 'Team presentations',
      before: 'Nothing. Sleep.',
      c1: 'Presentations: 8 minutes a team, then 4 of questions, 5 teams a class. The room marks each one on the presentation row of the rubric; I mark the rest. Slides go up on the course site the evening before.',
      c2: 'The rest of the presentations. Then the reflection, written in the room, 30 minutes, and the memo and workbook handed in by midnight.',
      lab: 'No lab. Office hours for the exam.',
      memo: 'The recommendation: the memo, the workbook, 1 slide per member on what they did, and the peer evaluation, in private.',
    },
  ],
  labs: [
    { n: 1, title: 'The print shop, to the rules', due: 'before week 2', prompt: 'The campus print shop model from class, rebuilt to the 3 rules, with a second scenario: a cheaper paper supplier and a slower machine.', handIn: 'The workbook, 1 tab, inputs at the top. The chat, if you used an AI tool.', passes: 'Inputs, formulas and outputs apart; no number typed into a formula; both scenarios change the answer when their inputs change.' },
    { n: 2, title: 'Clean it on a copy', due: 'before week 3', prompt: 'A second till export from the coffee chain, 1,500 rows, with 4 problems, 2 of them new. Clean it on a copy, keep the raw sheet untouched, bring the prices across with XLOOKUP.', handIn: 'The workbook with Raw, Clean and Fixes sheets. The chat, if you used an AI tool.', passes: 'All 4 problems found and fixed; each fix counted on the Fixes sheet; the lookup returns a visible flag for a missing price instead of 0.' },
    { n: 3, title: 'What happened last week', due: 'before week 4', prompt: 'The chain\'s 2,000-row export, 3 problems to find, a pivot by cart and day, and a 1-page brief. In full under Assignments.', handIn: 'The workbook with Raw, Clean, Fixes and Pivot sheets, the brief, and the chat.', passes: '6 of 8 on the rubric, no row at 0.' },
    { n: 4, title: 'The owner\'s 1 page', due: 'before week 5', prompt: 'A dashboard the chain\'s owner can read on her phone: 4 charts, each with a headline that makes a claim, and a slicer for the cart. Sketch it on paper first.', handIn: 'A photo of the sketch, then the workbook.', passes: 'The sketch came first and the page follows it; each chart answers a question the owner would ask; no pie, no 3D, no truncated axis; the headlines carry numbers.' },
    { n: 5, title: 'Breakeven for your business', due: 'before week 6', prompt: 'The breakeven model for the business your team chose, or the taco truck if your decision isn\'t about selling things. Assumptions on 1 sheet, the crossing-lines chart, and 3 sentences for the owner.', handIn: 'The workbook and the 3 sentences on its first sheet.', passes: 'The breakeven is right and traceable to the inputs; the chart is built from the model; the 3 sentences name the assumption you trust least.' },
    { n: 6, title: 'How wrong can the forecast be?', due: 'before week 7', prompt: 'The week 5 model with a 2-way Data Table, 3 named scenarios and 1 Goal Seek, and half a page on how wrong the forecast can be before the plan loses money.', handIn: 'The workbook with the half page on its first sheet.', passes: 'The Data Table recalculates when an input changes; the scenarios are named and their inputs listed; the half page gives a number, with its direction.' },
    { n: 7, title: 'The practice case, corrected', due: 'before week 8', prompt: 'The practice case from class 1 of week 7, which we marked together, handed back in with your own corrections to the 4 questions and a line on each saying what you got wrong.', handIn: 'The workbook or the paper from class 1, with the corrections marked.', passes: 'All 4 answers corrected to the rubric; each correction says what was wrong, in your words.' },
    { n: 8, title: 'The market stall', due: 'before week 9', prompt: 'A market stall deciding how much stock to carry, with 4 weather outcomes and last year\'s odds. Model it 2 ways: best expected profit, and smallest worst case.', handIn: 'The workbook, with a paragraph on which you would choose for an owner who can\'t afford a bad week.', passes: 'Expected value as a SUMPRODUCT over named odds; both answers right; the paragraph picks one and says why in terms of the owner.' },
    { n: 9, title: 'Design the A/B test', due: 'before week 10', prompt: 'An A/B test of the chain\'s loyalty card: the metric, the 2 versions, who gets which, the sample size and the date you will look. You design it; you don\'t run it. Hint: keep the design simple.', handIn: 'A 1-page design and the sample-size calculation in the workbook.', passes: 'One metric, fixed in advance; the sample size follows from the effect you want to detect and the chain\'s traffic; the design says when you will stop looking.' },
    { n: 10, title: 'Write up the test', due: 'before week 11', prompt: 'The loyalty card result, 400 customers, written up in 1 page: what was tested, on whom, what was measured, what was found, and what it doesn\'t show.', handIn: 'The page, the workbook with the comparison and its confidence interval, and the measure you wrote down in class before the data arrived.', passes: 'The comparison and interval are right; the write-up says what the test can\'t show; the measure on the page matches the one handed in before the data.' },
    { n: 11, title: '2 years of sales', due: 'before week 12', prompt: 'The chain\'s weekly sales for 2 years against temperature and a promotion flag. Fit the line, read it, predict next month, and say which of the 3 doubts applies.', handIn: 'The workbook with the ToolPak output and a paragraph of sentences, 1 per number.', passes: 'The slope and R squared read correctly as sentences; the prediction stays inside the data\'s range or says why not; the right doubt named.' },
    { n: 12, title: 'A third bike', due: 'before week 13', prompt: 'The bike shop with a third bike, a materials budget and the same crew. Solve it, read the sensitivity report, and write the owner 3 sentences.', handIn: 'The workbook with the sensitivity report pasted in and the 3 sentences on the first sheet.', passes: 'Solver finds the optimum; the binding constraint named; the shadow price read as a sentence with its range; the 3 sentences say what to do and what would change it.' },
  ],
  labsNote: 'Every lab is marked pass or redo on 4 rubric rows out of 8, and passes at 6 with no row at 0. Lab 3 is shown in full below with its rubric; the others are the same shape. Each lab starts with the exit ticket from that week\'s class 2 as its first page.',
  assignments: [a102[0], midterm, a102[1], reflection],
  exam: {
    title: 'A sample final',
    meta: 'Final · 15% · on paper · 2 hours, or 3 if the class chose 3 on day one',
    rules: [
      'Attempt up to 30 marks. If you attempt more, only the first 30 count.',
      'Show your work. A right number with no working gets half.',
      'You may have a pen, a calculator and this paper. Nothing else.',
      'Each question names the outcome it tests, from the syllabus, so you know what I\'m looking for.',
      'Best of luck. You have done all of this before, in the labs.',
    ],
    note: 'This paper goes out in week 12. Do any 3 questions and hand them in with lab 12; I mark them for feedback, and it\'s the closest thing to a mock exam the course has.',
    questions: [
      {
        tag: 'O1 · A spreadsheet someone else can read',
        text: 'A friend has built a model for a lemonade stand. The cells are printed below: 12 formulas, 4 of which have a number typed into them, and 1 input that\'s used in 2 places with 2 different values.',
        parts: [
          { text: 'Circle the 4 formulas with a typed-in number, and write the input each one should reference.', marks: 2 },
          { text: 'Find the input used with 2 values and say which answer in the model is wrong because of it.', marks: 1 },
          { text: 'Redraw the inputs block as it should be: every assumption named, in 1 place.', marks: 2 },
        ],
      },
      {
        tag: 'O4 · Breakeven and what-if',
        text: 'You have opened a taco truck, despite everything week 5 said about fixed costs. The truck, permit and insurance come to $650 a week, ingredients are $3.20 a taco, and you charge $8.',
        parts: [
          { text: 'The breakeven, in tacos a week, with the formula.', marks: 1 },
          { text: 'A 1-way Data Table of weekly profit for prices from $6 to $10 in $1 steps, at 140 tacos a week. Write the 5 numbers.', marks: 2 },
          { text: 'Your partner wants to know the price that makes $200 a week at 140 tacos. Which tool, which cell changes, and the answer.', marks: 2 },
          { text: 'Which single input would you check before you trust any of this, and how would you check it?', marks: 1 },
        ],
      },
      {
        tag: 'O2 · Cleaning and summarising',
        text: 'A till export from a coffee cart is printed below: 15 rows, with a duplicated order, a cart named 2 ways, a price stored as text, and 1 row from next year.',
        parts: [
          { text: 'Mark each problem and say what it would do to a total if left in.', marks: 2 },
          { text: 'After cleaning, what were sales by cart? Show the arithmetic.', marks: 1 },
          { text: 'Write the 3 sentences of the brief: what happened, what you fixed, what the owner should check in the till.', marks: 2 },
        ],
      },
      {
        tag: 'O5 · Expected value',
        text: 'A café asks a chatbot how many croissants it will sell tomorrow and gets: 20% chance of 40, 45% chance of 60, 35% chance of 80. Each croissant costs $1 to bake and sells for $2; unsold ones are thrown out.',
        parts: [
          { text: 'The expected demand.', marks: 1 },
          { text: 'The expected profit of baking 60, and of baking 80. Which do you bake?', marks: 2 },
          { text: 'The owner asks why you would ever bake fewer than the expected demand. Answer in 2 sentences.', marks: 1 },
          { text: 'Name 1 reason the chatbot\'s percentages might be wrong, and what you would do about it next week.', marks: 1 },
        ],
      },
      {
        tag: 'O5 · Samples, confidence and tests',
        text: 'Welcome to the loyalty programme team at a grocery chain. Your manager hears you took ANOP 102 and asks you to find out whether the new card raises spend per visit. You get 200 customers with the card and 200 without. The card group spent $31.40 a visit on average and the others $29.80; the standard deviation in both groups is about $12.',
        parts: [
          { text: 'The standard error of each group\'s mean, and of the difference.', marks: 2 },
          { text: 'A 95% confidence interval for the difference. Does it cross 0? What do you tell your manager?', marks: 2 },
          { text: 'Your manager says she looked at the numbers every day for 3 weeks and stopped when the difference looked big. What\'s wrong with that, in 2 sentences?', marks: 1 },
          { text: 'Before the next test, what would you write down in advance, and why?', marks: 1 },
        ],
      },
      {
        tag: 'O6 · Regression',
        text: 'Regression output for a bike shop is printed below: 12 weeks of Instagram ad spend against sales, slope 2.9, intercept 1,840, R squared 0.41, and the scatter plot with one week far above the line, at the low end of the ad spend.',
        parts: [
          { text: 'Write the slope and the intercept as sentences a shop owner could act on.', marks: 1 },
          { text: 'The shop keeps 40 cents of every sales dollar. Does an ad dollar pay for itself? Show the arithmetic.', marks: 1 },
          { text: 'The week above the line was a festival. What happens to the slope if it\'s removed, in direction, and should it be removed?', marks: 1 },
          { text: 'The shop chose its own ad spend each week. Why does that make you doubt the line, and what from weeks 9 and 10 would fix it?', marks: 2 },
        ],
      },
      {
        tag: 'O6 · Optimisation',
        text: 'The bike shop builds a Commuter ($120 over materials, 3 hours of assembly, 1 of painting) and a Trail ($180, 4 and 3). The crew is paid for 240 assembly hours and 120 painting hours a week, and only 30 Trails sell. The Solver sensitivity report is printed below.',
        parts: [
          { text: 'Write the decision variables, the objective and the 3 constraints.', marks: 2 },
          { text: 'From the report, which constraints bind, and what\'s 1 more assembly hour worth?', marks: 1 },
          { text: 'An assembler offers overtime at $30 an hour. Take it? For how many hours? Use the allowable range.', marks: 2 },
        ],
      },
      {
        tag: 'O7 · The memo',
        text: 'A 2-page memo is printed below. It recommends that a campus bookstore stop selling textbooks. It has a model behind it, but the recommendation, the number that supports it and the risk are in different places and disagree with each other.',
        parts: [
          { text: 'Find the number in the memo that contradicts the recommendation.', marks: 1 },
          { text: 'Rewrite the first paragraph so that it says what to do, by when, and what would change the answer.', marks: 2 },
          { text: 'Name the 1 what-if the writer should have run before sending it.', marks: 1 },
        ],
      },
    ],
  },
};
