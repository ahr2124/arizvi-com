// A section of ANOP 270 on its current outline, taught in Tableau, laid out the way it would sit in Moodle
// (Ali, 13 Nov 2026: "Let's build this like we built Tulane and only keep the data visualization course and put it
// into a shell that feels like moodle"). The panels follow what a student sees in a Moodle course: the course index
// down the side, the Course, Participants and Grades tabs, the General section and one section per topic with its
// activities (Page, File, URL, Quiz, Assignment, Forum, Workshop, Feedback), each with its completion mark, plus one
// page and one assignment opened up. Rendered by src/components/MoodleShell.astro on /bucknell.
// Due dates are weeks of the term; points are the number of specs, each 1 or 0. Completion marks and grades are a
// sample student's, at week ten. Copy follows the site rules (no contractions; numbers up to two digits in words,
// except data, points and week labels).
// The project follows the Tableau deliverable Ali set in MSCI 630 at Waterloo (two dashboards of four worksheets,
// with filters, parameters, drill-down and an analysis in the view; drawings on paper first; a .twbx with the data
// embedded). The clients and the guest judge are placeholders.
// Voice (13 Nov 2026, voice read): the words are his where he has given them. "Dirty data" and the path from it
// to a dashboard are how he described MSCI 630 in the Bucknell interview; "low-fidelity drawings", "a person not
// familiar with the data" and the filters, parameters, drill-down and trendline-or-median line are from his MSCI 630
// Tableau brief; "client" and "charter" are his capstone's words; "In industry" opens a purpose as on /tulane.

export type ActivityType = 'Page' | 'File' | 'URL' | 'Quiz' | 'Assignment' | 'Forum' | 'Workshop' | 'Feedback';
export interface Activity { type: ActivityType; title: string; week?: number; pts?: number; group?: string; href?: string; note?: string; text?: string }
export interface Topic { id: string; short: string; name: string; weeks: string; text: string; items: Activity[] }

export const course = {
  code: 'ANOP 270',
  title: 'Data Visualization for Business Analytics',
  section: 'One section',
  term: 'Fall or spring term',
  line: 'The principles of data visualization and data preparation, taught in Tableau. Students start with dirty data, clean it, and build a dashboard that a client can use to make a decision.',
  project: 'Each team builds two Tableau dashboards for one client who has a decision to make. The client can be a campus office, a student club, or a local business, and the data can be theirs or public. Teams hand in low-fidelity drawings of both dashboards first, test them with a person not familiar with the data, and present with the client in the room.',
};

// The week the sample student's view is taken at.
export const now = 10;

export const topics: Topic[] = [
  { id: 'mdl-s1', short: 'A worked example', name: 'A worked example: which market day to give up', weeks: 'Weeks 1-2',
    text: 'The first class works one question through together in Tableau. A flower farm sells at three farmers\' markets, and its owner has to give up one market day a week. Which one? The first chart says Mill Street. After we fix the chart, the answer is Tuesdays at Riverside.',
    items: [
      { type: 'Page', title: 'Start here: how this course works', href: '#mdl-syllabus' },
      { type: 'URL', title: 'Tableau Desktop and Tableau Prep, on the student license' },
      { type: 'Page', title: 'Worked example: which market day to give up', href: '#mdl-worked', note: 'You can try it' },
      { type: 'File', title: 'The flower farm in June, 16 market days.xlsx' },
      { type: 'Quiz', title: 'Dimensions, measures, and aggregation', note: 'Practice' },
      { type: 'Assignment', title: 'The first views lab', week: 2, pts: 4, group: 'Labs' },
    ] },
  { id: 'mdl-s2', short: 'Data preparation', name: 'Data preparation', weeks: 'Weeks 3-4',
    text: 'Students get the farm\'s till export as dirty data: a title row, a total row, months across the top, and dates stored as text. They clean it in Tableau Prep and keep a list of every fix. Then they join it to a product list and find out why the total went up.',
    items: [
      { type: 'Page', title: 'Tidy data, and a list of fixes' },
      { type: 'File', title: 'The till export, as it came.xlsx' },
      { type: 'Quiz', title: 'Is this table tidy?', note: 'Practice' },
      { type: 'Assignment', title: 'The preparation lab', week: 4, pts: 4, group: 'Labs' },
      { type: 'Assignment', title: 'Team charter: the client and the question', week: 4, pts: 4, group: 'Project' },
    ] },
  { id: 'mdl-s3', short: 'Choosing the chart', name: 'Choosing and designing the chart', weeks: 'Weeks 5-6',
    text: 'Students start from the question, then pick the chart. They learn how people read position, length, and color, why bars start at zero, and how a headline makes the claim. They draw each chart on paper before they open Tableau.',
    items: [
      { type: 'Page', title: 'Which chart for which question' },
      { type: 'Workshop', title: 'Critique: two classmates\' charts', week: 5, note: 'Ungraded', text: 'You hand in one chart, then read two classmates\' charts cold. For each, write what you think it says and one thing you would change.' },
      { type: 'Assignment', title: 'The chart makeover lab', week: 6, pts: 5, group: 'Labs', href: '#mdl-a-makeover' },
      { type: 'Assignment', title: 'First paper check (in class, on paper)', week: 6, pts: 3, group: 'Paper checks' },
    ] },
  { id: 'mdl-s4', short: 'Midway: a case competition', name: 'Midway: a case competition on real data', weeks: 'Weeks 7-8',
    text: 'Every team gets the same real data and the same question: in five years of the CFPB\'s consumer complaints, where should a regulator look first? I coach each team on how to prepare and how to present, and a guest judges the first dashboards. The competition is the formative check, and the feedback goes into the project.',
    items: [
      { type: 'URL', title: 'CFPB Consumer Complaint Database' },
      { type: 'Page', title: 'Time, maps, and rates per person' },
      { type: 'File', title: 'Complaints and state populations.csv' },
      { type: 'Assignment', title: 'Midway dashboard and presentation', week: 7, pts: 2, group: 'Project' },
      { type: 'Feedback', title: 'Mid-course feedback (anonymous)', week: 8, note: 'Ungraded', text: 'In class, fifteen minutes, three questions: what should I start, continue, and stop doing? I leave the room while you answer.' },
    ] },
  { id: 'mdl-s5', short: 'Calculations, with generative AI', name: 'Calculations and parameters, with generative AI', weeks: 'Weeks 9-10',
    text: 'Students write calculated fields and a parameter the client can change. They use a generative AI tool for the syntax, as they would at work, and check each result against a number worked out by hand.',
    items: [
      { type: 'Page', title: 'Generative AI in this course: how to disclose', href: '#mdl-syllabus-ai' },
      { type: 'Forum', title: 'Ask it for the chart', week: 9, text: 'Ask a generative AI tool which chart to use for your team\'s question. Post its answer, the chart your team chose, and one line on where they differ. Reply to one other team.' },
      { type: 'Assignment', title: 'The calculations lab, with the AI disclosure', week: 10, pts: 6, group: 'Labs' },
    ] },
  { id: 'mdl-s6', short: 'Dashboards for a client', name: 'Dashboards for a client', weeks: 'Weeks 11-12',
    text: 'Each dashboard is for one client and answers one question, and teams start with low-fidelity drawings. The in-class case comes from my own research on school reports for parents: a well-being score on its own reads as a label on the child, and the same score inside a whole picture of the child reads as information. Then each team runs a usability test with a person not familiar with the data.',
    items: [
      { type: 'Page', title: 'In-class case: the same score, two reports' },
      { type: 'Assignment', title: 'The dashboard lab, with the low-fidelity drawings', week: 12, pts: 4, group: 'Labs' },
      { type: 'Workshop', title: 'Usability test: watch someone use it', week: 12, note: 'Ungraded', text: 'A person from another team gets your dashboard and three questions. You watch without helping, and write down where they got stuck.' },
      { type: 'Assignment', title: 'Second paper check (in class, on paper)', week: 12, pts: 3, group: 'Paper checks' },
    ] },
  { id: 'mdl-s7', short: 'The project, presented', name: 'The project, presented', weeks: 'Weeks 13-14',
    text: 'Each team finishes two dashboards for its client and meets with me every week. In the last week, teams present with the client in the room and hand over the Tableau file with a one-page guide.',
    items: [
      { type: 'Page', title: 'Final project brief' },
      { type: 'Assignment', title: 'Presentation, with the client in the room', week: 14, pts: 3, group: 'Project' },
      { type: 'Assignment', title: 'Two dashboards and the one-page guide', week: 14, pts: 5, group: 'Project' },
      { type: 'Assignment', title: 'Extension (for the A bundle)', week: 14, pts: 2, group: 'Extension' },
    ] },
];

// The gradebook's categories, in the order of the bundles.
export const groups = [
  { name: 'Labs', bundle: 'C bundle' },
  { name: 'Project', bundle: 'C bundle' },
  { name: 'Paper checks', bundle: 'B bundle' },
  { name: 'Extension', bundle: 'A bundle' },
];

export const bundles = [
  { g: 'C', line: 'All five labs and all four project pieces.' },
  { g: 'B', line: 'The C bundle, plus both paper checks.' },
  { g: 'A', line: 'The B bundle, plus one extension the team chooses: for example, a phone layout of one dashboard, or a third dashboard.' },
];

export const outcomes = [
  'Turn a client\'s decision into a question that a chart can answer.',
  'Clean dirty data in Tableau Prep, and keep a list of every fix.',
  'Choose the aggregation and the level of detail that answer the question.',
  'Choose the chart for the question, and design it with an axis that does not exaggerate.',
  'Build a dashboard with filters, a parameter, and a drill-down that a person not familiar with the data can use without help.',
  'Write the headline, and present the dashboard in five minutes.',
];

export const announcements = [
  { title: 'Welcome to ANOP 270', week: 'Week 1', body: 'Welcome! This term you will start with dirty data, clean it, and build dashboards out of it in Tableau. Then your team builds two dashboards for a client of its own. Start with the Start here page and the syllabus. In the first class we work through one question together, so bring a laptop with Tableau installed.' },
  { title: 'Mid-course feedback, in class this week', week: 'Week 8', body: 'In class this week you get fifteen minutes to answer three questions: what should I start, continue, and stop doing? The survey is anonymous, and I will leave the room while you answer.' },
];

// A sample student's grades at week ten, as Moodle's user report lists them. The course total is hidden; the bundle
// so far is shown instead.
export const grades = [
  { name: 'The first views lab', cat: 'Labs', week: 2, grade: '4', range: '0-4', feedback: 'Complete' },
  { name: 'The preparation lab', cat: 'Labs', week: 4, grade: '4', range: '0-4', feedback: 'Complete (revised)' },
  { name: 'Team charter', cat: 'Project', week: 4, grade: '4', range: '0-4', feedback: 'Complete' },
  { name: 'The chart makeover lab', cat: 'Labs', week: 6, grade: '5', range: '0-5', feedback: 'Complete' },
  { name: 'First paper check', cat: 'Paper checks', week: 6, grade: '3', range: '0-3', feedback: 'Complete' },
  { name: 'Midway dashboard and presentation', cat: 'Project', week: 7, grade: '2', range: '0-2', feedback: 'Complete' },
  { name: 'The calculations lab, with the AI disclosure', cat: 'Labs', week: 10, grade: '-', range: '0-6', feedback: 'Submitted for grading' },
];

export const people = [
  { name: 'Ali Rizvi', role: 'Teacher', note: '' },
  { name: '[Guest judge]', role: 'Guest', note: 'For the midway case competition: an alum or an analyst who reads dashboards at work.' },
  { name: '[Each team\'s client]', role: 'Guest', note: 'In the room for the presentations in week 14.' },
];

// The assignment opened up: Moodle's assignment page, with the TILT brief, the submission status and a rubric of
// 1-or-0 rows. The lab is the worked example's question again, on the whole year.
export const makeover = {
  title: 'The chart makeover lab',
  opened: 'Week 5',
  due: 'Week 6',
  points: 5,
  types: 'twbx, pdf',
  files: 'A year at the farm.twbx, Three sentences to the owner.pdf',
  purpose: 'In industry, a manager reads a chart in a few seconds, and the first draft often answers a different question from the one the manager asked. You will fix drafts like these before they go out.',
  task: [
    'Open the workbook: a year of the flower farm\'s sales (208 market days) and three charts as Tableau drew them.',
    'For each chart, write one line on what a reader would take from it as it is.',
    'Fix each one: the aggregation, the level of detail, the axis, the sort, the color, and the headline.',
    'Write the owner three sentences: which market day to give up, the number that decides it, and what would change the answer.',
  ],
  criteria: 'Each row of the rubric is 1 or 0, and the lab is complete when all five rows are 1. A row at 0 can be revised once, within a week.',
  rubric: [
    ['The reading', 'For each chart, one line on what a reader would take from it as it came.'],
    ['The measure', 'Each chart uses the aggregation and the level of detail that answer the owner\'s question.'],
    ['The axis', 'Every bar chart starts at zero, and the bars are sorted.'],
    ['The headline', 'Each title makes a claim with a number in it, and one color marks the answer.'],
    ['The decision', 'Three sentences: the market day, the number that decides it, and what would change it.'],
  ],
};

// The worked example, as a page in the first section: the scenario, and three things to try in the widget
// (src/components/MakeoverDemo.astro). June at the farm: Riverside ran 8 market days (Tuesdays $1,600, Fridays
// $2,400), Hilltop 4 ($2,600) and Mill Street 4 ($2,200).
export const worked = {
  title: 'Worked example: which market day to give up',
  intro: [
    'A flower farm sells at three farmers\' markets: Riverside on Tuesdays and Fridays, Hilltop on Saturdays, and Mill Street on Sundays. The owner has to give up one market day a week. Which one?',
    'In the first class the chart goes up as Tableau drew it, and the room picks Mill Street. Then we change the measure from SUM to AVG, and Riverside comes out last. We add the weekday, and the day to give up is Tuesday at Riverside. Last, we untick Include zero, and a gap of 1.6 times is drawn as 13.5 times.',
  ],
  tries: [
    { do: 'Read the first chart.', see: 'June totals by market. Mill Street is the shortest bar at $2,200, so it looks like the day to give up. Riverside ran 8 market days, and the other two ran 4 each.' },
    { do: 'Change SUM to AVG, then add the weekday.', see: 'Per market day, Riverside is last at $500. With the weekday on Rows, Riverside splits into two days: Fridays make $600 and Tuesdays make $400.' },
    { do: 'Untick Include zero.', see: 'The axis starts at $380, and the longest bar is drawn 13.5 times as long as the shortest. The numbers say 1.6 times.' },
  ],
  coda: 'The chart makeover lab in week 6 is the same job on the whole year: 208 market days, three charts to fix, and three sentences to the owner.',
};
