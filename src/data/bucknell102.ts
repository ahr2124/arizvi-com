// ANOP 102 laid out the way it would sit in Moodle, built around one class: week 11, class 2, "Playlists or radio?",
// the multiple regression class Ali teaches on his Bucknell campus visit (Ali, 17 Nov 2026: "For Bucknell, focus on
// building out a mock LMS around the one lesson that I am teaching"). Rendered by src/components/MoodleShell.astro.
// The 14 weeks, their topics and the labs come from the course pack (src/data/packs/anop-102.ts), so the shell and the
// course page (/bucknell/anop-102/) agree. Week 11 is the week built out in full: before class, the 2 classes, and
// after. Completion marks and grades are a sample student's, on the morning of class 2 in week 11.
// The class follows his lesson plan of 17 Nov 2026 (intro, example, graph, build, then a recap; he took the chatbot out
// of the recap that evening: "I don't think the chatbot recap is required"); the 30 minutes he teaches on the visit
// are marked `core`. The data are in src/data/songs150.ts (cleaned on 17 Nov at his
// word, after the cold reads: radio 0.83 -> 0.23 once playlists are in; song age P 0.09).
// After the cold reads of 17 Nov: the model "points to" playlists and does not settle the budget (playlist counts
// follow streams too, and neither input comes with a cost); round two is a judgement call on a P-value of 0.09; the
// check covers class 1's weekend; the forum asks for another input; lab 11 names the numbers it wants read.
// Copy follows the site rules: no contractions, American English, numbers up to two digits in words in prose, digits
// for data, minutes, weeks, lab numbers and points.

export type ActivityType = 'Page' | 'File' | 'URL' | 'Quiz' | 'Assignment' | 'Forum' | 'Feedback';
export interface Activity { type: ActivityType; title: string; href?: string; note?: string; text?: string; done?: boolean }
export interface Label { label: string }

export const course = {
  code: 'ANOP 102',
  title: 'Spreadsheet Modeling & Data Analysis',
  section: 'One section',
  term: 'A sample term',
  line: 'Students learn to build a spreadsheet model a manager could audit, to say how sure they are, and to write the memo that says what to do.',
  project: 'Teams of four, from week 4, take one decision a real organization faces. They build the model through the term and end with a two-page memo and an eight-minute presentation in week 14.',
  // From the course pack's standing line: the department's own outline comes first.
  standing: 'ANOP 102 runs in several sections a term. Where the department has a shared outline and exams, those come first, and this is a sample of how one week could run inside them.',
};

// The week the sample student's view is taken in, and the moment.
export const now = 11;
export const moment = 'The completion marks are a sample student\'s, on the morning of class 2 in week 11.';

// Week 11, in full. A Label is a heading inside the section, as Moodle's text-and-media areas are used.
export const week11: (Activity | Label)[] = [
  { label: 'Before class 1' },
  { type: 'URL', title: 'Video: a line through the data (18 minutes)', text: 'The slope, the intercept, R squared, and the Analysis ToolPak.', done: true },
  { type: 'Page', title: 'Turn on the Analysis ToolPak', href: '#mdl-toolpak', done: true },
  { label: 'Class 1' },
  { type: 'Page', title: 'Class 1: fitting a line to 12 weeks of ad spend', href: '/bucknell/anop-102/#regression', text: 'The bike shop, fitted three ways. On the course page.', done: true },
  { type: 'Quiz', title: 'Check: three questions on class 1', href: '#mdl-check', note: 'Closes the night before class 2', done: true },
  { label: 'Class 2 (today)' },
  { type: 'Page', title: 'Class 2: playlists or radio?', href: '#mdl-class2', note: 'Today' },
  { type: 'File', title: 'Songs 2023-24, 150 rows.xlsx', text: 'Spotify streams, Spotify playlists, AirPlay radio plays, and months since release, for 150 of the top songs released from January 2023 to early June 2024.' },
  { type: 'Feedback', title: 'Exit ticket (on paper, at the end of class)', text: 'Two sentences. First, radio\'s coefficient from the model with both inputs, as a sentence that says what is held constant. Second, one thing that is still not clear. Hand in a photo of it as the first page of lab 11.' },
  { label: 'After class' },
  { type: 'Forum', title: 'One more input', note: 'Before week 12', text: 'Name one more input you would add to the model, which way you think it would move radio\'s coefficient, and why. Reply to one classmate who picked a different input.' },
  { type: 'Assignment', title: 'Lab 11: What is a promotion worth?', href: '#mdl-lab11', note: 'Due before week 12 · Pass or redo' },
];

export const announcements = [
  { title: 'Class 2: bring a laptop with the ToolPak on', week: 'Week 11', body: 'In class 2 we run regressions in pairs, so one laptop in each pair needs desktop Excel with the Analysis ToolPak turned on. The steps are in this week\'s section. Excel on the web does not have the ToolPak built in, so if that is all you have, pair with someone who has the desktop version.' },
  { title: 'Lab 10 is graded', week: 'Week 10', body: 'Feedback is on each submission. If yours says redo, the feedback says what to fix, and you have a week to resubmit.' },
];

export const people = [
  { name: 'Ali Rizvi', role: 'Teacher', note: 'Office hours twice a week, one in the office and one on Zoom.' },
  { name: 'Students (20)', role: 'Student', note: 'In pairs in class, and in project teams of four from week 4.' },
];

// The check between class 1 and class 2, on class 1's bike shop (src/components/RegressionDemo.astro): with the gran
// fondo weekend in, the slope is $1.70 per $1 of ads (R² 0.14); without it, $1,983 + $2.87 per $1 (R² 0.86).
export const check = {
  title: 'Check: three questions on class 1',
  intro: 'Three questions on the bike shop from class 1. The check closes the night before class 2. I read the answers before I walk in, and class 2 starts from the question the room found hardest.',
  questions: [
    {
      q: 'Without the gran fondo weekend, the bike shop\'s line is: weekly sales = $1,983 + 2.87 × ad spend. Which sentence reads the 2.87 correctly?',
      options: ['Each extra $1 of ads goes with $2.87 more in weekly sales.', 'Ads cause 2.87% of weekly sales.', 'Each $1 of ads brings in $2.87 of profit.', 'The shop sells 2.87 more bikes for every ad.'],
      right: 0,
      feedback: 'The 2.87 is dollars of sales for each dollar of ads. It is sales before costs (at a 40% margin, $1 of ads brings back about $1.15), and on its own it says nothing about cause.',
    },
    {
      q: 'With the gran fondo weekend in, the slope is $1.70 per $1 of ads. Without it, $2.87. What should the owner\'s memo do?',
      options: ['Use $1.70, since every week is real data.', 'Use $2.87, and say nothing about the weekend.', 'Use $2.87, and name the weekend it left out and why.', 'Average the two: $2.29.'],
      right: 2,
      feedback: 'The regression cannot know a week was a race, but the person who was there can. Leave it out, and say so in the memo.',
    },
    {
      q: 'Without that weekend, R squared is 0.86. What does it say?',
      options: ['There is an 86% chance the line is right.', 'The line accounts for 86% of the week-to-week swing in sales.', 'Ads cause 86% of sales.', '86% of the weeks sit on the line.'],
      right: 1,
      feedback: 'R squared is how much of the swing the line accounts for. It says nothing about cause, or about whether the line is right.',
    },
  ],
};

export const toolpak = {
  windows: ['File → Options → Add-ins.', 'At the bottom, next to Manage, pick Excel Add-ins, then Go.', 'Select the Analysis ToolPak check box, then OK.', 'Data Analysis now sits at the right end of the Data tab.'],
  mac: ['Tools → Excel Add-ins.', 'Select the Analysis ToolPak check box, then OK.', 'Data Analysis now sits on the Data tab.'],
  run: ['Data → Data Analysis → Regression.', 'Input Y Range: the streams column, with its header.', 'Input X Range: the radio and playlists columns, with their headers. They have to sit side by side, so move a column if you need to.', 'Select Labels, pick New Worksheet Ply, then OK.'],
};

// Class 2, 75 minutes. who: me (at the front), you (working, in pairs or threes), room (the room, laptops closed).
// core: the 30 minutes taught on the campus visit.
export const class2 = {
  title: 'Class 2: playlists or radio?',
  meta: 'Week 11 · class 2 · 75 minutes · in pairs, one laptop per pair',
  intro: 'You run promotion at a record label, and you have one budget for the next single. Do you pay for a radio campaign, or pitch the song to playlists? Today we look at it with 150 real songs, first one input at a time and then both together.',
  bring: 'Bring a laptop with desktop Excel and the Analysis ToolPak turned on, one per pair. The file is in this week\'s section.',
  outcomes: [
    'Run a regression with two inputs in Excel, and read each coefficient as a sentence that says what is held constant.',
    'Explain why a coefficient changes when a second input comes in.',
    'Say what this kind of data cannot tell you, and what test would.',
  ],
  data: 'The 150 top-ranked songs released from January 2023 to early June 2024 in the Kaggle dataset Most Streamed Spotify Songs 2024 (Nidula Elgiriyewithana), with data to mid-June 2024. The dataset ranks songs by a score across platforms. Rows with a blank count, or under a million Spotify streams, are left out, since they look like gaps in the data. Streams are in millions, and playlists and radio plays in thousands.',
  source: 'https://www.kaggle.com/datasets/nelgiriyewithana/most-streamed-spotify-songs-2024',
  steps: [
    { min: 5, who: 'me', title: 'From the check.', text: 'The question the room found hardest, worked through at the board.' },
    { min: 3, who: 'room', core: true, title: 'Guess who.', text: 'Four clues that fit two pop stars. The room guesses, and a fifth clue settles it.' },
    { min: 5, who: 'room', core: true, title: 'The decision.', text: 'One budget: radio or playlists? Hands up for each. Our example is Flowers (2.03 billion streams, about 270,000 playlists, and 1.47 million radio plays).' },
    { min: 7, who: 'me', core: true, title: 'The graphs.', text: 'Three scatter charts in Excel, each with a trendline: streams by radio plays, streams by playlists, and radio plays by playlists. Radio seems to work. So do playlists. And the two rise together.' },
    { min: 12, who: 'you', core: true, title: 'Build it.', text: 'In pairs, run Regression in the ToolPak with radio and playlists together. Radio\'s coefficient falls from 0.83 to 0.23, and we read it as a sentence: holding playlists constant, 1,000 more radio plays go with about 230,000 more streams. So far, the model points to playlists. Then where it breaks: stations add songs that are already hits, playlists fill up with songs people already stream, and neither number comes with a cost. What would settle it is an experiment, like the one in week 10.' },
    { min: 3, who: 'me', core: true, title: 'Recap.', text: 'What the second input did: each coefficient is read holding the other input constant, and radio\'s shrank once playlists came in, because the two rise together.' },
    { min: 15, who: 'you', title: 'Round two.', text: 'Predict first: does a song\'s age add anything once playlists are in? Then add months since release. Its P-value is 0.09, and adjusted R squared goes up a little. Keep it or drop it? Pairs decide and say why, and we hear both sides.' },
    { min: 15, who: 'you', title: 'Design the test.', text: 'In threes, on paper: the experiment a label could run to settle radio against playlists. Which songs, which ones get the radio campaign, what you measure, what each option costs, and when you look.' },
    { min: 5, who: 'you', title: 'Exit ticket.', text: 'Two sentences on paper, as set out in the exit ticket in this week\'s section.' },
    { min: 5, who: 'me', title: 'Lab 11.', text: 'The same question in the coffee chain\'s data: what is a promotion worth, holding temperature constant?' },
  ] as { min: number; who: 'me' | 'you' | 'room'; core?: boolean; title: string; text: string }[],
  // What the 30 minutes on the visit cover, said to the room up front (Bucknell asked for this).
  scope: 'The 30 minutes cover what a second input does to a coefficient. P-values, adjusted R squared and checking the model come after.',
  tries: [
    { do: 'Start with radio alone.', see: 'The line climbs fast: 0.83 million streams for every 1,000 radio plays.' },
    { do: 'Switch to playlists alone.', see: 'R squared jumps from 0.227 to 0.585.' },
    { do: 'Now pick Both, and move the slider.', see: 'The line moves up and down with playlists, and its slope stays the same, much flatter than radio alone. That is what holding playlists constant means.' },
    { do: 'Add months since release.', see: 'Its P-value is 0.09, and adjusted R squared goes up a little. Is that enough to keep it?' },
  ],
};

export const lab11 = {
  title: 'Lab 11: What is a promotion worth?',
  opened: 'Week 11, class 2',
  due: 'Before week 12, class 1',
  grading: 'Pass or redo',
  types: '.xlsx, and a photo of the exit ticket',
  purpose: 'In industry, someone always asks what a promotion is worth. The first answer is usually too big, because promotions tend to run in busy weeks. This lab is that conversation, in the coffee chain\'s data, and it is the same question as radio and playlists.',
  task: [
    'A photo of your exit ticket from class 2 is the first page.',
    'Two years of the chain\'s weekly sales (104 weeks), with the temperature and a 0/1 flag for promotion weeks. Run the regression with the promotion flag alone, then with the flag and temperature together.',
    'In the second model, read the intercept, both coefficients and R squared as sentences, one each, and say what is held constant.',
    'Predict sales for a promotion week next month at the forecast temperature, or say why the model should not be used there.',
    'Name the doubt that fits this data, and the test that would settle it.',
  ],
  criteria: 'The lab passes at 6 of 8 points with no row at 0. Anything else comes back with feedback within a week, and you resubmit until it passes, up to the last day of week 13.',
  rubric: [
    { name: 'The model', levels: ['Both regressions run in the ToolPak, with the output pasted in and the right columns as inputs.', 'One of the two models, or the wrong columns.', 'No ToolPak output.'] },
    { name: 'Reading it', levels: ['The four numbers read as sentences, each with what is held constant.', 'The right numbers, with sentences that leave out what is held constant.', 'Numbers without sentences.'] },
    { name: 'The prediction', levels: ['The arithmetic is right, and the week is inside the range of the data, or it says why the model should not be used there.', 'The arithmetic is right, and the range is not checked.', 'Wrong or missing.'] },
    { name: 'The doubt', levels: ['Names the doubt that fits this data, with the reason, and the test that would settle it.', 'Names a doubt, without the test.', 'No doubt named.'] },
  ],
};

// The sample student's grades, weeks 9 to 11, and the categories from the course pack.
export const grades = [
  { name: 'Lab 9: Design the A/B test', cat: 'Weekly labs', week: 9, grade: 'Pass', range: 'Pass or redo', feedback: 'One metric, fixed in advance, and the sample size follows from it.' },
  { name: 'Lab 10: Write up the test', cat: 'Weekly labs', week: 10, grade: 'Pass', range: 'Pass or redo', feedback: 'The first version did not say what the test cannot show. The second one does.' },
  { name: 'Check: three questions on class 1', cat: 'Checks (not counted)', week: 11, grade: '2 / 3', range: '0-3', feedback: 'Question 2: keep the line without the weekend, and name the weekend in the memo.' },
  { name: 'Lab 11: What is a promotion worth?', cat: 'Weekly labs', week: 11, grade: '-', range: 'Pass or redo', feedback: 'Due before week 12, class 1.' },
];
export const gradesNote = 'Weekly labs so far: ten of ten passed, one of them after a redo. Each lab passed is worth 2.5 of the 30.';
