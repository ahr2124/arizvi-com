// ANOP 102 laid out the way it would sit in Moodle (here Meowdle, the mock's own name), built around one class: week
// 11, class 2, "Playlists or radio?", the multiple regression class Ali teaches on his Bucknell campus visit (Ali, 17
// Nov 2026: "For Bucknell, focus on building out a mock LMS around the one lesson that I am teaching"). Rendered by
// src/components/MoodleShell.astro. The 14 weeks, their topics and the labs come from the course pack
// (src/data/packs/anop-102.ts), so the shell and the course page (/bucknell/anop-102/) agree. Week 11 is the week built
// out in full: before class, the 2 classes, and after. The completion marks, the check's attempt and the grades are one
// student's, on the morning of class 2 in week 11; nothing on the page says so (below).
// After the cold reads of 19 Nov 2026, at Ali's word that night:
// 1. Class 2's plan follows the deck he teaches from on the visit ("Follow the deck in the plan only"): minutes 5 to 35
//    are the deck's 30 (guess who, the line, the vote, radio alone then both, what it says, the cautions, the YouTube
//    turn, back to the clues). Try it keeps months since release. The YouTube result is the deck's, from the same Kaggle
//    file (songs150.ts has no YouTube column), so the page gives it in words.
// 2. Nothing in the course speaks to the committee ("Remove them all"): no visit marking, no shared-outline or
//    sample-student notes, no term line.
// 3. The teaching suggestions are in: how sure we can be before round two, round two ends on why age stays in, the test
//    is designed from what hits-only data leaves out, a 0/1 input before lab 11, and the exit ticket at the end of
//    class, collected at the door (so lab 11 no longer asks for a photo of it).
// 4. The errors are fixed: the rubric's reading row, resubmits through week 13, "goes with" for the check's profit line,
//    one due-date wording ("before week 12", as the pack has it).
// The data are in src/data/songs150.ts (cleaned on 17 Nov at his word: radio 0.83 -> 0.23 once playlists are in; song
// age P 0.09).
// Copy follows the site rules: no contractions, American English, serial comma, numbers up to two digits in words in
// prose, digits for data, minutes, weeks, lab numbers and points.

export type ActivityType = 'Page' | 'File' | 'URL' | 'Quiz' | 'Assignment' | 'Forum';
export interface Activity { type: ActivityType; title: string; href?: string; note?: string; text?: string; done?: boolean }
// A Label is a heading inside a section, and an Area is a Text and media area with text in it, as Moodle has them.
export interface Label { label: string }
export interface Area { area: string }

export const course = {
  code: 'ANOP 102',
  title: 'Spreadsheet Modeling & Data Analysis',
  line: 'Students learn to build a spreadsheet model a manager could audit, to say how sure they are, and to write the memo that says what to do.',
  project: 'Teams of four, from week 4, take one decision a real organization faces. They build the model through the term and end with a two-page memo and an 8-minute presentation in week 14.',
};

// The week the student's view is taken in (the morning of class 2).
export const now = 11;

// Week 11, in full.
export const week11: (Activity | Label | Area)[] = [
  { label: 'Before class 1' },
  { type: 'URL', title: 'Video: a line through the data (18 minutes)', text: 'The slope, the intercept, R squared, and the Analysis ToolPak.', done: true },
  { type: 'Page', title: 'Turn on the Analysis ToolPak', href: '#mdl-toolpak', done: true },
  { label: 'Class 1' },
  { type: 'Page', title: 'Class 1: fitting a line to 12 weeks of ad spend', href: '#mdl-class1', text: 'The bike shop, fitted three ways.', done: true },
  { type: 'Quiz', title: 'Check: three questions on class 1', href: '#mdl-check', note: 'Closed the night before class 2', done: true },
  { label: 'Class 2' },
  { type: 'Page', title: 'Class 2: playlists or radio?', href: '#mdl-class2' },
  { type: 'File', title: 'songs.xlsx', text: 'Spotify streams, Spotify playlists, AirPlay radio plays, YouTube views, and months since release, for 150 of the top songs released from January 2023 to early June 2024.' },
  { area: 'Exit ticket: at the end of class 2, one sentence on a card about what radio\'s coefficient means. Cards are collected at the door.' },
  { label: 'After class' },
  { type: 'Forum', title: 'One more input', note: 'Due before week 12', text: 'Name one more input you would add to the model, which way you think it would move radio\'s coefficient, and why. Reply to one classmate who picked a different input.' },
  { type: 'Assignment', title: 'Lab 11: What is a promotion worth?', href: '#mdl-lab11', note: 'Due before week 12' },
];

export const announcements = [
  { title: 'Class 2: bring a laptop with the ToolPak on', week: 'Week 11', body: 'In class 2 we run regressions in pairs, so one laptop in each pair needs desktop Excel with the Analysis ToolPak turned on. The steps are in this week\'s section. Excel on the web does not have the ToolPak built in, so if that is all you have, pair with someone who has the desktop version.' },
  { title: 'Lab 10 is graded', week: 'Week 11', body: 'Feedback is on each submission. If yours says redo, the feedback says what to fix, and you can resubmit until it passes, up to the last day of week 13.' },
];

// Participants, as Moodle lists them: everyone in the course, one row each.
export const people: [string, string, string, string][] = [
  ['Ali Rizvi', 'Teacher', 'No groups', '4 mins'],
  ['Ava Thompson', 'Student', 'Team 1', '1 hour 12 mins'],
  ['Ben Okafor', 'Student', 'Team 1', '9 hours 3 mins'],
  ['Chloe Martinez', 'Student', 'Team 1', '2 hours 40 mins'],
  ['Daniel Kim', 'Student', 'Team 1', '1 day 2 hours'],
  ['Emma Walsh', 'Student', 'Team 2', '35 mins'],
  ['Ethan Patel', 'Student', 'Team 2', '11 hours 18 mins'],
  ['Grace Liu', 'Student', 'Team 2', '3 hours 5 mins'],
  ['Henry Adeyemi', 'Student', 'Team 2', '14 hours 51 mins'],
  ['Isabel Romero', 'Student', 'Team 3', '58 mins'],
  ['Jack Sullivan', 'Student', 'Team 3', '1 day 6 hours'],
  ['Julia Nowak', 'Student', 'Team 3', '7 hours 26 mins'],
  ['Liam Chen', 'Student', 'Team 3', '22 mins'],
  ['Maya Brooks', 'Student', 'Team 4', '10 hours 2 mins'],
  ['Noah Fischer', 'Student', 'Team 4', '2 days 1 hour'],
  ['Olivia Grant', 'Student', 'Team 4', '1 hour 47 mins'],
  ['Owen Reyes', 'Student', 'Team 4', '12 hours 30 mins'],
  ['Priya Shah', 'Student', 'Team 5', '16 mins'],
  ['Ryan Murphy', 'Student', 'Team 5', '20 hours 8 mins'],
  ['Sofia Rossi', 'Student', 'Team 5', '5 hours 54 mins'],
  ['Tyler Jackson', 'Student', 'Team 5', '1 day 9 hours'],
];

// The check between class 1 and class 2, on class 1's bike shop (src/components/RegressionDemo.astro): with the gran
// fondo weekend in, the slope is $1.70 per $1 of ads (R² 0.14); without it, $1,983 + $2.87 per $1 (R² 0.86). It closed
// the night before class 2, so the page is Moodle's view of a closed quiz: the student's one attempt (2 of 3, question 2
// missed, as on Grades), reviewed with Moodle's own wording. `picked` is the student's answer.
export const check = {
  title: 'Check: three questions on class 1',
  intro: 'Three questions on the bike shop from class 1. I read the answers before I walk in, and class 2 starts from the question the room found hardest.',
  closed: 'The night before class 2, 11:59 PM',
  submitted: 'Submitted the evening after class 1',
  overall: 'Good. Look again at the question you missed: class 2 starts from the one the room found hardest.',
  questions: [
    {
      q: 'Without the gran fondo weekend, the bike shop\'s line is: weekly sales = $1,983 + 2.87 × ad spend. Which sentence reads the 2.87 correctly?',
      options: ['Each extra $1 of ads goes with $2.87 more in weekly sales.', 'Ads cause 2.87% of weekly sales.', 'Each $1 of ads brings in $2.87 of profit.', 'The shop sells 2.87 more bikes for every ad.'],
      right: 0,
      picked: 0,
      feedback: 'The 2.87 is dollars of sales for each dollar of ads. It is sales before costs (at a 40% margin, each $1 of ads goes with about $1.15 of gross profit), and on its own it says nothing about cause.',
    },
    {
      q: 'With the gran fondo weekend in, the slope is $1.70 per $1 of ads. Without it, $2.87. What should the owner\'s memo do?',
      options: ['Use $1.70, since every week is real data.', 'Use $2.87, and say nothing about the weekend.', 'Use $2.87, and name the weekend it left out and why.', 'Average the two: $2.29.'],
      right: 2,
      picked: 0,
      feedback: 'The regression cannot know a week was a race, but the person who was there can. Leave it out, and say so in the memo.',
    },
    {
      q: 'Without that weekend, R squared is 0.86. What does it say?',
      options: ['There is an 86% chance the line is right.', 'The line accounts for 86% of the week-to-week swing in sales.', 'Ads cause 86% of sales.', '86% of the weeks sit on the line.'],
      right: 1,
      picked: 1,
      feedback: 'R squared is how much of the swing the line accounts for. It says nothing about cause, or about whether the line is right.',
    },
  ],
};

export const toolpak = {
  windows: ['File → Options → Add-ins.', 'At the bottom, next to Manage, pick Excel Add-ins, then Go.', 'Select the Analysis ToolPak check box, then OK.', 'Data Analysis now sits at the right end of the Data tab.'],
  mac: ['Tools (in the menu bar at the top of the screen) → Excel Add-ins.', 'Select the Analysis ToolPak check box, then OK.', 'Data Analysis now sits on the Data tab.'],
  run: ['Data → Data Analysis → Regression.', 'Input Y Range: the column you want to predict, with its header.', 'Input X Range: the input columns, with their headers. They have to sit side by side, so move a column if you need to.', 'Select Labels, pick New Worksheet Ply, then OK.'],
};

// Class 1, 75 minutes, from the pack's week 11 (19 Nov 2026: inside Meowdle, so the course never sends a student to a
// page outside it). The regression to try is the bike shop's (src/components/RegressionDemo.astro).
export const class1 = {
  title: 'Class 1: fitting a line to 12 weeks of ad spend',
  meta: 'Week 11 · class 1 · 75 minutes · in pairs, one laptop per pair',
  intro: 'A bike shop spent different amounts on Instagram ads over 12 weeks. How much more does it sell for each extra dollar of ads, and what should it spend next week?',
  steps: [
    { min: 20, who: 'me', title: 'The bike shop.', text: 'Its 12 weeks of ad spend and sales on one chart, and the question the owner asks: what is a dollar of ads worth?' },
    { min: 25, who: 'you', title: 'Fit it three ways.', text: 'In Excel, in pairs: the chart\'s trendline, SLOPE and INTERCEPT, and the ToolPak. All three give the same line.' },
    { min: 20, who: 'you', title: 'Read it.', text: 'The ToolPak\'s output line by line, each number written as a sentence.' },
    { min: 10, who: 'room', title: 'The weekend that was different.', text: 'One week does not fit the others. What happened, and what the owner\'s memo should do about it.' },
  ] as { min: number; who: 'me' | 'you' | 'room'; title: string; text: string }[],
};

// Class 2, 75 minutes. who: me (at the front), you (working, in pairs or teams), room (the room, laptops closed).
// Minutes 5 to 35 follow the deck's 30 (19 Nov 2026), on its clock: warm-up and what regression does 0:30-4:00, the
// line and its numbers 4:00-7:45, the vote 7:45-9:15, radio alone then both 9:15-14:15, reading it and why it shrank
// 14:15-17:15, the cautions 17:15-18:45, the YouTube turn and its answer 18:45-26:30, back to the clues 26:30-28:30.
export const class2 = {
  title: 'Class 2: playlists or radio?',
  meta: 'Week 11 · class 2 · 75 minutes · in pairs, one laptop per pair',
  intro: 'You run promotion at a record label, and you have one budget for the next single. Do you pay for a radio campaign, or pitch the song to playlists? Today we look at it with 150 real songs, first one input at a time and then both together.',
  bring: 'A laptop with desktop Excel and the Analysis ToolPak turned on (pairs are set in class, and each pair needs one), songs.xlsx from this week\'s section, and a pen.',
  after: 'Lab 11, and a post in One more input with one reply, both due before week 12.',
  outcomes: [
    'Run a regression with two inputs in Excel, and read each coefficient as a sentence that says what is held constant.',
    'Explain why a coefficient changes when a second input comes in.',
    'Say what this kind of data cannot tell you, and what test would.',
  ],
  data: 'The 150 top-ranked songs released from January 2023 to early June 2024 in the Kaggle dataset Most Streamed Spotify Songs 2024 (Nidula Elgiriyewithana), with data to mid-June 2024. The dataset ranks songs by a score across platforms. Rows with a blank count, or under a million Spotify streams, are left out, since they look like gaps in the data. Streams and YouTube views are in millions, and playlists and radio plays in thousands. Every count runs to mid-June 2024, so an older song has had longer to collect all of them.',
  source: 'https://www.kaggle.com/datasets/nelgiriyewithana/most-streamed-spotify-songs-2024',
  steps: [
    { min: 5, who: 'me', title: 'From the check.', text: 'The question the room found hardest, worked through at the board.' },
    { min: 4, who: 'room', title: 'Guess who.', text: 'Four clues that fit two pop stars, then a fifth that settles it. That was a prediction, and a regression does the same thing with numbers: it predicts one value from others. Then the plan for today: one input, then two, then how sure we can be.' },
    { min: 4, who: 'me', title: 'The line.', text: 'Excel\'s straight line for streams against radio plays, and the three numbers that describe it: the slope (1,000 more radio plays go with about 830,000 more streams), the intercept (329 million), and R squared (23%).' },
    { min: 2, who: 'room', title: 'The decision.', text: 'Flowers had 2.03 billion streams, about 270,000 playlists, and 1.47 million radio plays. One budget for the next single: radio or playlists? Hands up for each.' },
    { min: 5, who: 'you', title: 'Build it.', text: 'In pairs, run Regression in the ToolPak with radio alone. Guess before the next run: will radio\'s coefficient go up, go down, or stay the same? Then run it with radio and playlists together. No ToolPak? LINEST gives the same numbers.' },
    { min: 3, who: 'me', title: 'What it says.', text: 'Among songs on the same number of playlists, 1,000 more radio plays go with about 233,000 more streams, about a quarter of what radio alone said. Hit songs get both (radio and playlists have a correlation of 0.49), so on its own, radio got credit for streams that come with playlists.' },
    { min: 2, who: 'me', title: 'Before you spend the budget.', text: 'The numbers point to playlists: alone they account for 59% of the swing in streams, and adding radio lifts that to 60%. Three reasons to be careful: stations add songs that are already hits, playlists fill up with songs people already stream, and we do not know what either one costs. A test would settle it.' },
    { min: 7, who: 'you', title: 'Your turn: YouTube.', text: 'The label\'s video team says music videos drive streams. Guess first: will YouTube\'s coefficient shrink as much as radio\'s? Then run YouTube alone, and YouTube with playlists. YouTube moves with playlists less than radio does, so it keeps most of its coefficient.' },
    { min: 3, who: 'me', title: 'Back to the clues.', text: 'Four clues fit both stars, and only the fifth told them apart. A regression works the same way: each input only gets credit for what it adds. Then three things to take from today.' },
    { min: 5, who: 'me', title: 'How sure we can be.', text: 'What a coefficient\'s P-value tests, and why adjusted R squared charges for each input that comes in.' },
    { min: 12, who: 'you', title: 'Round two.', text: 'Predict first: does a song\'s age add anything once radio and playlists are in? Then add months since release, read its P-value and adjusted R squared, and decide in pairs: keep it or drop it? We end on why it stays in. Every count runs to mid-June 2024, so an older song has had longer to collect all three, and a P-value alone does not show that age adds nothing.' },
    { min: 12, who: 'you', title: 'Design the test.', text: 'In project teams, on paper: the experiment a label could run to settle radio against playlists. Start from what this data leaves out: all 150 songs are hits, so a song that got a radio campaign and flopped is not in it. Then which songs, which ones get the radio campaign, what you measure, what each option costs, and when you look.' },
    { min: 6, who: 'me', title: 'A 0/1 input.', text: 'Lab 11 asks the same question of a coffee chain: what is a promotion worth? A promotion week is a 1 and any other week a 0, so its coefficient is how much more a promotion week sells than another week at the same temperature.' },
    { min: 5, who: 'you', title: 'Exit ticket.', text: 'On a card, one sentence on what radio\'s 0.23 means, starting "Among songs with the same number of playlists". Cards are collected at the door.' },
  ] as { min: number; who: 'me' | 'you' | 'room'; title: string; text: string }[],
  tries: [
    { do: 'Start with radio alone.', see: 'The line climbs fast: 0.83 million streams for every 1,000 radio plays.' },
    { do: 'Switch to playlists alone.', see: 'R squared jumps from 0.227 to 0.585.' },
    { do: 'Now pick Both, and move the slider.', see: 'The line moves up and down with playlists, and its slope stays the same, much flatter than radio alone. That is what holding playlists constant means.' },
    { do: 'Add months since release.', see: 'Its P-value is 0.09, and adjusted R squared goes up a little. It stays in all the same: an older song has had longer to collect all three counts.' },
  ],
};

export const lab11 = {
  title: 'Lab 11: What is a promotion worth?',
  opened: 'Week 11, class 2',
  due: 'Before week 12',
  file: 'coffee.xlsx',
  purpose: 'In industry, someone always asks what a promotion is worth. The first answer is usually too big, because promotions tend to run in busy weeks, and at this chain the busy weeks are the warm ones. This lab is that conversation, in the coffee chain\'s data, and it is the same question as radio and playlists.',
  task: [
    'Two years of the chain\'s weekly sales (104 weeks) are in coffee.xlsx, below, with each week\'s average temperature and a 0/1 flag for promotion weeks. Run the regression with the promotion flag alone, then with the flag and temperature together.',
    'In the second model, read the intercept, both coefficients, and R squared as sentences, one each, and say what each coefficient holds constant.',
    'Predict sales for a promotion week next month at the forecast temperature in the file, or say why the model should not be used there.',
    'Say why the first answer, with the flag alone, could be too big, and the test that would settle it.',
  ],
  criteria: 'The lab passes at 6 of 8 points with no row at 0. Anything else comes back with feedback within a week, and you resubmit until it passes, up to the last day of week 13.',
  // Moodle's submission status for the student, on the morning of class 2.
  status: [
    ['Submission status', 'No submissions have been made yet'],
    ['Grading status', 'Not graded'],
    ['Time remaining', '4 days 23 hours remaining'],
    ['Last modified', '-'],
  ],
  rubric: [
    { name: 'The model', levels: ['Both regressions run in the ToolPak, with the output pasted in and the right columns as inputs.', 'One of the two models, or the wrong columns.', 'No ToolPak output.'] },
    { name: 'Reading it', levels: ['Both coefficients read as sentences that say what is held constant, and the intercept and R squared read correctly.', 'The right numbers, with sentences that leave out what is held constant.', 'Numbers without sentences.'] },
    { name: 'The prediction', levels: ['The arithmetic is right, and the week is inside the range of the data, or it says why the model should not be used there.', 'The arithmetic is right, and the range is not checked.', 'Wrong or missing.'] },
    { name: 'The doubt', levels: ['Says why the first answer could be too big, with the reason, and the test that would settle it.', 'Gives a reason, without the test.', 'No reason given.'] },
  ],
};

// The student's user report, as Moodle prints it: the labs from the pack (10 of 10 passed so far, one on a redo; each
// lab is 2.5% of the course, 30% in all), and this week's check (not counted).
export const labFeedback: Record<number, string> = {
  4: 'Passed on the redo: the headlines now say what each chart shows.',
  9: 'One metric, fixed in advance, and the sample size follows from it.',
  10: 'The first version did not say what the test cannot show. The second one does.',
};
export const checkGrade = { grade: '2.00', range: '0–3', feedback: 'Good. Look again at the question you missed: class 2 starts from the one the room found hardest.' };
// The rest of the user report: the weekly checks before week 11 (out of 3 each, not counted), and the midterm (week 7).
// The course total is Moodle's weighted mean over what is graded so far (empty grades left out): labs 30 at 100%,
// midterm 20 at 84%, so 93.60.
export const checkScores = [3, 3, 2, 3, 3, 2, 3, 3, 3, 2];
export const midterm = 84;
