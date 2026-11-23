// ANOP 102 laid out the way it would sit in Moodle (here Meowdle, the mock's own name), built around one class: week
// 11, class 2, "Who gets the credit?", the multiple regression class Ali teaches on his Bucknell campus visit (Ali, 17
// Nov 2026: "For Bucknell, focus on building out a mock LMS around the one lesson that I am teaching"). The lesson
// was rebuilt on 20 Nov 2026 around his simulated data in Google Sheets (the deck "Who gets the credit?", 250 artist
// eras: radio, then teen exposure, then fan base, and the $5 million call), and Meowdle followed on 22 Nov before going
// live (Ali: "Update class 2 first"). Until then class 2 was "Playlists or radio?" on 150 real songs in Excel. Rendered by
// src/components/MoodleShell.astro. The 14 weeks, their topics and the labs come from the course pack
// (src/data/packs/anop-102.ts), so the shell and the course pack agree (the pack's own page stays hidden). Week 11 is the week built
// out in full: before class, the 2 classes, and after. The completion marks, the check's attempt and the grades are one
// student's, on the morning of class 2 in week 11; nothing on the page says so (below).
// After the cold reads of 19 Nov 2026, at Ali's word that night:
// 1. Class 2's plan follows the deck he teaches from on the visit ("Follow the deck in the plan only"): minutes 5 to 35
//    are the deck's 30. Since 22 Nov that is the 20 Nov deck (plan and warm-up, reading a line, the $5 million vote,
//    steps 1 and 2 in pairs, the fan base turn, who gets the credit and the cautions, back to the clues), and Try it
//    runs the same three steps (CreditDemo.astro, on src/data/eras250.ts).
// 2. Nothing in the course speaks to the committee ("Remove them all"): no visit marking, no shared-outline or
//    sample-student notes, no term line.
// 3. The teaching suggestions are in: the test is designed after the cautions, a 0/1 input before lab 11, and the exit
//    ticket at the end of class, collected at the door (so lab 11 no longer asks for a photo of it). The 19 Nov "how
//    sure we can be" step (a P-value, adjusted R squared) left class 2 on 22 Nov: the 20 Nov deck says at 1:30 that
//    P-values and checking the model come next class, and the class Sheet marks those rows "(next class)".
// 4. The errors are fixed: the rubric's reading row, resubmits through week 13, "goes with" for the check's profit line,
//    one due-date wording ("before week 12", as the pack has it).
// The data are in src/data/eras250.ts (scripts/eras250.py: numpy, seed 42, the same eras as the class Sheet): radio's
// slope 3.02, then 1.99 with teen exposure, then 1.08 with fan base (the recipe's 1.1); R squared 0.34, 0.69, 0.96.
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
  { type: 'Page', title: 'Class 2: who gets the credit?', href: '#mdl-class2' },
  { type: 'URL', title: 'Google Sheet: Who gets the credit? 250 artist eras', text: 'Make a copy before class 2. Weekly streams, fan base, teen exposure, and radio spend for each era.' },
  { area: 'Exit ticket: at the end of class 2, one sentence on a card about what radio\'s coefficient means. Cards are collected at the door.' },
  { label: 'After class' },
  { type: 'Forum', title: 'One more input', note: 'Due before week 12', text: 'Name one more input you would add to the model, which way you think it would move radio\'s coefficient, and why. Reply to one classmate who picked a different input.' },
  { type: 'Assignment', title: 'Lab 11: What is a promotion worth?', href: '#mdl-lab11', note: 'Due before week 12' },
];

export const announcements = [
  { title: 'Class 2: bring a laptop signed in to Google', week: 'Week 11', body: 'In class 2 we run regressions in pairs in Google Sheets, so each pair needs one laptop signed in to a Google account. Make a copy of the class Sheet from this week\'s section before class. Sheets runs in any browser, so any laptop works.' },
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
// Minutes 5 to 35 follow the deck's 30 (20 Nov 2026), on its clock: plan, objectives and the warm-up 0:00-4:00, reading
// a line 4:00-8:30, the $5 million vote 8:30-9:30, steps 1 and 2 9:30-14:00, the fan base turn and its answer
// 14:00-18:45, why the slopes shrank, reading 1.08, the budget answer and the cautions 18:45-24:00, back to the clues,
// the zoom-out and what you learned 24:00-26:45, then the deck's buffer. The exit ticket is the deck's sentence, at the
// end of the 75 minutes.
export const class2 = {
  title: 'Class 2: who gets the credit?',
  meta: 'Week 11 · class 2 · 75 minutes · in pairs, one laptop per pair',
  intro: 'You have $5 million for Miley\'s comeback album. Do you put it all into radio? Today we test that on 250 artist eras in Google Sheets, adding one input at a time, and watch which input gets the credit. We use Google Sheets today so that every laptop runs the same thing; LINEST works the same way in Excel 365 and Excel for the web.',
  bring: 'A laptop signed in to a Google account (pairs are set in class, and each pair needs one), your copy of the class Sheet from this week\'s section, and a pen.',
  after: 'Lab 11, and a post in One more input with one reply, both due before week 12.',
  outcomes: [
    'Read a regression line: its slope, its intercept, and R squared.',
    'Run a regression in Google Sheets with one input, then two, then three.',
    'Explain what a slope means, and why it can change when you add an input.',
  ],
  data: '250 artist eras, simulated in Python for this class, so that at the end we can check our answers against the truth. An era is one album cycle for one artist. Each has its weekly streams (millions), a fan base score (how big the artist\'s following already was), a teen exposure score (the artist\'s teen TV and pop following), and its radio spend ($100k). A few scores fall below zero, since the simulation draws them from bell curves. The note on the Sheet\'s first cell says how the eras were made.',
  source: '',
  steps: [
    { min: 5, who: 'me', title: 'From the check.', text: 'The question the room found hardest, worked through at the board.' },
    { min: 4, who: 'room', title: 'Guess who.', text: 'The plan for today, then four clues that fit two pop stars and a fifth that settles it. That was a prediction, and a regression does the same thing with numbers: it predicts one value from others. Use several inputs at once, and it is called multiple regression.' },
    { min: 4, who: 'me', title: 'Reading a line.', text: 'What a slope is, then radio\'s line on the 250 eras: it climbs 3.02 million weekly streams for each $100k of radio, and with no radio it starts at about 21 million. R squared (0.34) is how much of the spread the line explains.' },
    { min: 1, who: 'room', title: 'The decision.', text: '$5 million for Miley\'s comeback album. Put it all into radio? Hands up: all of it, some of it, or none until we check.' },
    { min: 5, who: 'you', title: 'Build it.', text: 'In pairs, in the Sheet: step 1, radio alone, with one LINEST formula. Guess before the next run: will radio\'s slope go up, go down, or stay the same? Then step 2, with teen exposure added: one letter changes in the formula.' },
    { min: 5, who: 'you', title: 'Your turn: fan base.', text: 'Add fan base, how big the artist\'s following already was. Guess first, then step 3. Each time we added an input, radio\'s slope shrank: 3.02, then 1.99, then 1.08.' },
    { min: 5, who: 'me', title: 'Who gets the credit.', text: 'Leave fan base out, and radio and teen exposure take its credit: labels spend more on radio for artists who are already big, and those artists stream more anyway. Among artist eras with the same teen exposure and fan base, each extra $100k of radio comes with about 1.1 million more weekly streams. So all $5 million into radio? No: step 1 promised almost three times what radio delivers. Three reasons to be careful, and the test that would settle it.' },
    { min: 6, who: 'me', title: 'Back to the clues.', text: 'Four clues fit both stars, and only the fifth told them apart: each input only gets credit for what it adds. This is the first step into predictive analytics and AI: recommendation engines and the models behind chatbots also give each input a weight and make their errors as small as they can, with millions of inputs. Then what you learned today.' },
    { min: 12, who: 'you', title: 'Use it.', text: 'In pairs, the Use it box in the Sheet: the same plan ($1.5 million of radio, teen exposure 8.5) for Miley (fan base 9.5) and for a newcomer (fan base 2), with the step 2 model and the step 3 model. Then radio at $5 million, and why every answer here is a stretch: no era spent more than about $1.15 million on radio, so even the $1.5 million plan is past the data.' },
    { min: 15, who: 'you', title: 'Design the test.', text: 'In project teams, on paper: the test a label could run to find what radio is worth. These eras are simulated, so we know radio\'s true slope (1.1), and step 3 found it; with real data, nobody tells you. Which releases get radio, which similar ones are held back, what you measure, what it costs, and when you look. Two teams share theirs.' },
    { min: 8, who: 'me', title: 'A 0/1 input.', text: 'Lab 11 asks the same question of a coffee chain: what is a promotion worth? A promotion week is a 1 and any other week a 0, so its coefficient is how much more a promotion week sells than another week at the same temperature.' },
    { min: 5, who: 'you', title: 'Exit ticket.', text: 'On a card, one sentence on what radio\'s 1.08 means, starting "Among artist eras with the same teen exposure and fan base". Cards are collected at the door.' },
  ] as { min: number; who: 'me' | 'you' | 'room'; title: string; text: string }[],
  tries: [
    { do: 'Start at step 1.', see: 'Radio\'s line climbs 3.02 million weekly streams for each $100k, and R squared is 0.34.' },
    { do: 'Pick step 2.', see: 'With teen exposure in, radio\'s slope shrinks to 1.99.' },
    { do: 'Pick step 3, and move the slider.', see: 'With fan base in, radio\'s slope shrinks again, to 1.08. The line moves up and down with fan base, and its slope stays the same. That is what holding fan base constant means.' },
    { do: 'Look at the two artists.', see: 'Leave fan base out, and Miley and a newcomer get the same prediction. Put it in, and they come apart.' },
  ],
};

export const lab11 = {
  title: 'Lab 11: What is a promotion worth?',
  opened: 'Week 11, class 2',
  due: 'Before week 12',
  file: 'coffee.xlsx',
  purpose: 'In industry, someone always asks what a promotion is worth. The first answer is usually too big, because promotions tend to run in busy weeks, and at this chain the busy weeks are the warm ones. This lab is that conversation, in the coffee chain\'s data, and it is the same question as class 2: which input is really earning the credit.',
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
