// ANOP 102 laid out the way it would sit in Moodle, built around one class: week 11, class 2, "Playlists or radio?",
// the multiple regression class Ali teaches on his Bucknell campus visit (Ali, 17 Nov 2026: "For Bucknell, focus on
// building out a mock LMS around the one lesson that I am teaching"). Rendered by src/components/MoodleShell.astro.
// The 14 weeks, their topics and the labs come from the course pack (src/data/packs/anop-102.ts), so the shell and the
// course page (/bucknell/anop-102/) agree. Week 11 is the week built out in full: before class, the 2 classes, and
// after. Completion marks and grades are a sample student's, on the morning of class 2 in week 11.
// The class follows his lesson plan of 17 Nov 2026 (intro, example, graph, build; the recap ends on LLMs); the 30
// minutes he teaches on the visit are marked `core`. The data are in src/data/songs150.ts.
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
  { type: 'Page', title: 'Class 1: one weekend flips the slope', href: '/bucknell/anop-102/#regression', text: 'The bike shop\'s 12 weeks of ad spend and sales, fitted 3 ways. On the course page.', done: true },
  { type: 'Quiz', title: 'Check: 3 questions on class 1', href: '#mdl-check', note: 'Closes when class 2 starts', done: true },
  { label: 'Class 2 (today)' },
  { type: 'Page', title: 'Class 2: playlists or radio?', href: '#mdl-class2', note: 'Today' },
  { type: 'File', title: 'Songs 2023-24, 150 rows.xlsx', text: 'Spotify streams, Spotify playlists, AirPlay radio plays and months since release, for 150 of the most streamed songs released from January 2023 to early June 2024.' },
  { type: 'Feedback', title: 'Exit ticket (on paper, at the end of class)', text: 'Two sentences. First, radio\'s coefficient from the model with both inputs, as a sentence a label could act on. Second, one thing that is still not clear. It becomes the first page of lab 11.' },
  { label: 'After class' },
  { type: 'Forum', title: 'Where does it break?', note: 'Before week 12', text: 'Post one reason radio\'s number could still be wrong, and the experiment that would settle it. Reply to one classmate.' },
  { type: 'Assignment', title: 'Lab 11: what is a promotion worth?', href: '#mdl-lab11', note: 'Due before week 12 · Pass or redo' },
];

export const announcements = [
  { title: 'Class 2: bring a laptop with the ToolPak on', week: 'Week 11', body: 'In class 2 we run regressions in pairs, so one laptop in each pair needs desktop Excel with the Analysis ToolPak turned on. The steps are in this week\'s section. Excel on the web does not have the ToolPak built in, so if that is all you have, pair with someone who has the desktop version.' },
  { title: 'Lab 10 is graded', week: 'Week 10', body: 'Feedback is on each submission. If yours says redo, the feedback says what to fix, and you have a week to resubmit.' },
];

export const people = [
  { name: 'Ali Rizvi', role: 'Teacher', note: 'Office hours twice a week, one in the office and one on Zoom.' },
  { name: 'Students (20)', role: 'Student', note: 'In pairs in class, and in project teams of four from week 4.' },
];

// The check before class 2, on class 1's bike shop. Without the race weekend, its line is $1,983 + $2.87 per $1 of
// ads (R² 0.86), fitted on spend from $0 to $280 (src/components/RegressionDemo.astro).
export const check = {
  title: 'Check: 3 questions on class 1',
  intro: 'Three questions on the bike shop from class 1. The check closes when class 2 starts. I read the answers before I walk in, and class 2 starts from the question the room found hardest.',
  questions: [
    {
      q: 'Without the race weekend, the bike shop\'s line is: weekly sales = $1,983 + 2.87 × ad spend. Which sentence reads the 2.87 correctly?',
      options: ['Each extra $1 of ads goes with $2.87 more in weekly sales.', 'Ads cause 2.87% of weekly sales.', 'Each $1 of ads brings in $2.87 of profit.', 'The shop sells 2.87 more bikes for every ad.'],
      right: 0,
      feedback: 'It is sales, before costs. At a 40% margin, $1 of ads brings back about $1.15.',
    },
    {
      q: 'R squared for that line is 0.86. What does it say?',
      options: ['There is an 86% chance the line is right.', 'The line accounts for 86% of the week-to-week swing in sales.', 'Ads cause 86% of sales.', '86% of the weeks sit on the line.'],
      right: 1,
      feedback: 'R squared is how much of the swing the line accounts for. It says nothing about cause.',
    },
    {
      q: 'The line was fitted on weeks with ad spend from $0 to $280. Can it predict sales at $1,000 of ads?',
      options: ['Yes: $1,983 + 2.87 × 1,000 = $4,853.', 'Yes, because R squared is above 0.8.', 'Not from this line. $1,000 is far outside the spend in the data.'],
      right: 2,
      feedback: 'The line only knows $0 to $280. Past that, the shop could run out of bikes, or of customers.',
    },
  ],
};

export const toolpak = {
  windows: ['File → Options → Add-ins.', 'At the bottom, next to Manage, pick Excel Add-ins, then Go.', 'Tick Analysis ToolPak, then OK.', 'Data Analysis now sits at the right end of the Data tab.'],
  mac: ['Tools → Excel Add-ins.', 'Tick Analysis ToolPak, then OK.', 'Data Analysis now sits on the Data tab.'],
  run: ['Data → Data Analysis → Regression.', 'Input Y Range: the streams column, with its header.', 'Input X Range: the radio and playlists columns, with their headers. They have to sit side by side, so move a column if you need to.', 'Tick Labels, pick New Worksheet Ply, then OK.'],
};

// Class 2, 75 minutes. who: me (at the front), you (working, in pairs or threes), room (the room, laptops closed).
// core: the 30 minutes taught on the campus visit.
export const class2 = {
  title: 'Class 2: playlists or radio?',
  meta: 'Week 11 · class 2 · 75 minutes · in pairs, one laptop each',
  intro: 'You run promotion at a record label, and you have one budget for the next single. Do you pay for a radio campaign, or pitch the song to playlists? Today we answer it with 150 real songs, first one input at a time and then both together.',
  outcomes: [
    'Run a regression with two inputs in Excel, and read each coefficient as a sentence that says what is held constant.',
    'Explain why a coefficient changes when a second input comes in.',
    'Say what this kind of data cannot tell you, and what test would.',
  ],
  data: 'The 150 most streamed songs released from January 2023 to early June 2024, from the Kaggle dataset Most Streamed Spotify Songs 2024 (Nidula Elgiriyewithana), with data to mid-June 2024. Streams are in millions, and playlists and radio plays in thousands.',
  source: 'https://www.kaggle.com/datasets/nelgiriyewithana/most-streamed-spotify-songs-2024',
  steps: [
    { min: 5, who: 'me', title: 'From the check.', text: 'The question the room found hardest, worked through at the board.' },
    { min: 3, who: 'room', core: true, title: 'Guess who.', text: 'Four clues that fit two pop stars. The room guesses, and a fifth clue settles it.' },
    { min: 5, who: 'room', core: true, title: 'The decision.', text: 'One budget: radio or playlists? Hands up for each. Our example is Flowers (2.03 billion streams, about 270,000 playlists, and 1.47 million radio plays).' },
    { min: 7, who: 'me', core: true, title: 'The graphs.', text: 'Three scatter charts in Excel, each with a trendline: streams by radio plays, streams by playlists, and radio plays by playlists. Radio looks like it works. So do playlists. And the two rise together.' },
    { min: 12, who: 'you', core: true, title: 'Build it.', text: 'In pairs, run Regression in the ToolPak with radio and playlists together. Radio\'s coefficient falls from 0.87 to 0.23, and we read it as a sentence: holding playlists constant, 1,000 more radio plays go with about 230,000 more streams. The budget goes to playlists. Then where it breaks: stations add songs that are already hits, this is observational data, and the test that would settle it is an experiment, like the one in week 10.' },
    { min: 3, who: 'me', core: true, title: 'Recap.', text: 'A regression fits a weight to each input from examples. A chatbot does the same at a huge scale, fitting weights to predict the next word. Here is what one says when you type in the four clues.' },
    { min: 15, who: 'you', title: 'Round two.', text: 'Predict first: does a song\'s age add anything? Then add months since release. Its P-value is 0.55, and adjusted R squared falls. Once playlists are in, age adds nothing, like a clue that fits both pop stars.' },
    { min: 15, who: 'you', title: 'Design the test.', text: 'In threes, on paper: the experiment a label could run to settle radio against playlists. Which songs, which ones get the radio campaign, what you measure, and when you look.' },
    { min: 5, who: 'you', title: 'Exit ticket.', text: 'Two sentences on paper (below).' },
    { min: 5, who: 'me', title: 'Lab 11.', text: 'The same question in the coffee chain\'s data: what is a promotion worth, holding temperature constant?' },
  ] as { min: number; who: 'me' | 'you' | 'room'; core?: boolean; title: string; text: string }[],
  tries: [
    { do: 'Start with radio alone.', see: 'The line climbs fast: 0.87 million streams for every 1,000 radio plays.' },
    { do: 'Switch to playlists alone.', see: 'R squared jumps from 0.24 to 0.60.' },
    { do: 'Now pick Both, and move the slider.', see: 'Radio\'s line is much flatter at every playlist level. Among songs with about the same number of playlists, radio adds little.' },
    { do: 'Add months since release.', see: 'Its P-value is 0.55, and adjusted R squared goes down.' },
  ],
};

export const lab11 = {
  title: 'Lab 11: what is a promotion worth?',
  opened: 'Week 11, class 2',
  due: 'Before week 12, class 1',
  grading: 'Pass or redo',
  types: '.xlsx',
  purpose: 'In industry, someone always asks what a promotion is worth. The first answer is usually too big, because promotions tend to run in busy weeks. This lab is that conversation, in the coffee chain\'s data, and it is the same question as radio and playlists.',
  task: [
    'Your exit ticket from class 2 is the first page.',
    'Two years of the chain\'s weekly sales (104 weeks), with the temperature and a 0/1 flag for promotion weeks. Run the regression with the promotion flag alone, then with the flag and temperature together.',
    'Read every number in the second model as a sentence, one sentence per number, and say what is held constant.',
    'Predict sales for a promotion week next month at the forecast temperature, or say why the model should not be used there.',
    'Name the doubt that applies (an outlier, a small sample, or a chain that chose when to promote), and the test that would settle it.',
  ],
  criteria: 'The lab passes at 6 of 8 points with no row at 0. Anything else comes back with feedback within a week, and you resubmit until it passes, up to the last day of week 13.',
  rubric: [
    { name: 'The model', levels: ['Both regressions run in the ToolPak, the output pasted in, the flag coded 0 and 1.', 'One of the two models, or the flag coded wrong.', 'No ToolPak output.'] },
    { name: 'Reading it', levels: ['Every number read as a sentence, with what is held constant.', 'The right numbers, with sentences that leave out what is held constant.', 'Numbers without sentences.'] },
    { name: 'The prediction', levels: ['Inside the range of the data, or says why it cannot be.', 'The arithmetic is right, and the range is not checked.', 'Missing.'] },
    { name: 'The doubt', levels: ['Names the chain choosing its promotion weeks, and the test that would settle it.', 'Names a doubt, without the test.', 'No doubt named.'] },
  ],
};

// The sample student's grades, weeks 9 to 11, and the categories from the course pack.
export const grades = [
  { name: 'Lab 9: Design the A/B test', cat: 'Weekly labs', week: 9, grade: 'Pass', range: 'Pass or redo', feedback: 'One metric, fixed in advance, and the sample size follows from it.' },
  { name: 'Lab 10: Write up the test', cat: 'Weekly labs', week: 10, grade: 'Pass', range: 'Pass or redo', feedback: 'The first version did not say what the test cannot show. The second one does.' },
  { name: 'Check: 3 questions on class 1', cat: 'Checks (not counted)', week: 11, grade: '2 / 3', range: '0-3', feedback: 'Question 3: the line was fitted on $0 to $280 of ads, so $1,000 is out of its range.' },
  { name: 'Lab 11: what is a promotion worth?', cat: 'Weekly labs', week: 11, grade: '-', range: 'Pass or redo', feedback: 'Due before week 12, class 1.' },
];
export const gradesNote = 'Weekly labs so far: 10 of 10 passed, one of them after a redo. Each lab passed is worth 2.5 of the 30.';
