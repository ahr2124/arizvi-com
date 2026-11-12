// A section of MGSC 3010 on its current outline, with a service project, laid out the way it would sit in Canvas
// (Ali, 12 Nov 2026: "At least use the same information architecture when you click into the course as Canvas, while
// keeping my theme"). The panels follow Canvas's course navigation for students: Home, Announcements, Syllabus, Modules,
// Assignments, Discussions, Grades, People, and one assignment opened up. Rendered by src/components/CourseShell.astro on
// /tulane. The partner is a placeholder: the Center for Public Service would find it. One section works with one
// partner, and each team takes a different question for it. Due dates are weeks of the term; points are the number of
// specs, each 1 or 0. Copy follows the site rules (no contractions; numbers up to two digits in words, except data,
// points and week labels).

export type ItemType = 'Page' | 'File' | 'External URL' | 'Quiz' | 'Assignment' | 'Discussion';
export interface Item { type: ItemType; title: string; week?: number; pts?: number; group?: string; href?: string; note?: string }
export interface Module { name: string; weeks: string; text: string; items: Item[] }

export const partner = '[Community partner]';

export const course = {
  code: 'MGSC 3010',
  title: 'Introduction to Business Analytics',
  section: 'One section',
  term: 'Fall or spring term',
  line: 'Business modeling on the computer, from data models in Excel to linear programming and simulation, used on one real project for a nonprofit in New Orleans.',
  project: `${partner}, through Tulane's Center for Public Service. The whole section works with this one partner, and each team takes a different question for it. For example, a food bank that runs mobile pantries might need to decide where and when to stop next season, and how to staff each stop with its volunteers. One team could take where the pantry stops, and another the volunteer schedule.`,
};

export const modules: Module[] = [
  { name: 'Data modeling: a worked example on public data', weeks: 'Weeks 1-2',
    text: 'The first class works one question through together in Excel: in the CFPB\'s consumer complaints from Louisiana, which problems do people report, and from which ZIP codes?',
    items: [
      { type: 'Page', title: 'Start here: how this course works', href: '#lms-syllabus' },
      { type: 'Page', title: 'Worked example: complaints by ZIP code' },
      { type: 'External URL', title: 'CFPB Consumer Complaint Database' },
      { type: 'File', title: 'Louisiana complaints and a ZIP-to-parish table.xlsx' },
      { type: 'Quiz', title: 'Lookups practice', note: 'Practice' },
      { type: 'Assignment', title: 'The lookups lab', week: 2, pts: 4, group: 'Labs' },
    ] },
  { name: 'The partner\'s decision', weeks: 'Weeks 3-4',
    text: 'The Center introduces the partner, and the Service Learning Assistant runs the orientation. A guest from the partner explains the decision in class. Teams visit the site, with transport from the Center, and each team writes its question down as a decision.',
    items: [
      { type: 'Page', title: `Meet ${partner}` },
      { type: 'Page', title: 'Site visit: orientation and site rules' },
      { type: 'Discussion', title: 'After the site visit', week: 4, href: '#lms-discussions' },
      { type: 'Assignment', title: 'Team charter', week: 4, pts: 4, group: 'Project' },
      { type: 'Assignment', title: 'The dashboard lab', week: 4, pts: 5, group: 'Labs' },
    ] },
  { name: 'Deterministic modeling', weeks: 'Weeks 5-6',
    text: 'Linear programming with Solver, on practice numbers first, then the sensitivity report read the way a manager would: what one more volunteer hour is worth.',
    items: [
      { type: 'Page', title: 'Linear programming with Solver' },
      { type: 'File', title: 'Practice model: volunteer hours.xlsx' },
      { type: 'Quiz', title: 'Reading a sensitivity report', note: 'Practice' },
      { type: 'Assignment', title: 'The Solver lab', week: 6, pts: 4, group: 'Labs' },
      { type: 'Assignment', title: 'First paper check (in class, on paper)', week: 6, pts: 3, group: 'Paper checks' },
    ] },
  { name: 'Midway: the partner\'s data', weeks: 'Weeks 7-8',
    text: 'Each team builds a first model on the partner\'s own data and walks the partner through it. The walkthrough is the formative check, and the feedback goes into the project.',
    items: [
      { type: 'Page', title: 'The midway check: what we look for' },
      { type: 'File', title: 'Partner data, shared under the charter.xlsx' },
      { type: 'Assignment', title: 'Midway model and walkthrough', week: 7, pts: 2, group: 'Project' },
      { type: 'Quiz', title: 'Mid-course feedback (anonymous survey)', week: 8, note: 'Ungraded' },
    ] },
  { name: 'Spreadsheet automation, with generative AI', weeks: 'Weeks 9-10',
    text: 'Students record a macro that builds the partner\'s monthly update, then edit its code with a generative AI tool, as they would at work.',
    items: [
      { type: 'Page', title: 'Generative AI in this course: how to disclose', href: '#lms-syllabus-ai' },
      { type: 'Discussion', title: 'Same prompt, different temperatures', week: 9, href: '#lms-discussions' },
      { type: 'Assignment', title: 'The macro lab, with the AI disclosure', week: 10, pts: 6, group: 'Labs', href: '#lms-a-macro' },
    ] },
  { name: 'Probabilistic modeling: simulation and decision analysis', weeks: 'Weeks 11-12',
    text: 'Simulation of random walk-ins over a thousand Saturdays, then a decision tree. The in-class case comes from my own industry work: how much should a personal care products company refund when a customer passes away? Students break it into numbers (how many customers pass away, how long until the company finds out, what they pay, and what a refund costs) and reach a bottom line.',
    items: [
      { type: 'Page', title: 'In-class case: the refund question' },
      { type: 'File', title: 'Simulation template.xlsx' },
      { type: 'Assignment', title: 'The simulation lab', week: 12, pts: 4, group: 'Labs' },
      { type: 'Assignment', title: 'Second paper check (in class, on paper)', week: 12, pts: 3, group: 'Paper checks' },
    ] },
  { name: 'The project, handed over', weeks: 'Weeks 13-15',
    text: 'Each team decides what the partner needs for its question (a model, a dashboard, or both) and how to build it, and meets with me every week. In the last week, teams present with the partner in the room and hand over the working file with a one-page guide.',
    items: [
      { type: 'Page', title: 'Final project brief' },
      { type: 'Assignment', title: 'Presentation, with the partner in the room', week: 15, pts: 3, group: 'Project' },
      { type: 'Assignment', title: 'Memo to the partner\'s director, and the working file', week: 15, pts: 5, group: 'Project' },
      { type: 'Assignment', title: 'Service reflection', week: 15, pts: 3, group: 'Service' },
      { type: 'Assignment', title: 'Service hours: twenty logged, complete or incomplete', week: 15, pts: 1, group: 'Service' },
      { type: 'Assignment', title: 'Extension (for the A bundle)', week: 15, pts: 2, group: 'Extension' },
    ] },
];

// Canvas's assignment groups, in the order of the bundles.
export const groups = [
  { name: 'Labs', bundle: 'C bundle' },
  { name: 'Project', bundle: 'C bundle' },
  { name: 'Service', bundle: 'C bundle' },
  { name: 'Paper checks', bundle: 'B bundle' },
  { name: 'Extension', bundle: 'A bundle' },
];

export const bundles = [
  { g: 'C', line: 'All five labs, all four project pieces, twenty hours of service, and the service reflection.' },
  { g: 'B', line: 'The C bundle, plus both paper checks.' },
  { g: 'A', line: 'The B bundle, plus one extension the team chooses: for example, a what-if sheet the partner can run on its own, or a second dashboard for the partner\'s board.' },
];

export const outcomes = [
  'Turn a decision into a question that a model can answer.',
  'Clean and join data in Excel, and show it in a dashboard that someone new to it can read.',
  'Build an optimization model with Solver, and read its sensitivity report.',
  'Automate a report so that someone else can run it.',
  'Simulate what is uncertain, and use the result in a decision.',
  'Write a two-page memo to a manager, and present it.',
];

export const announcements = [
  { title: 'Welcome to MGSC 3010', week: 'Week 1', body: `Welcome! This term you will learn the course's four modules in Excel, then use them on a real project for ${partner}. Start with the Start here page and the syllabus. In the first class we work through one question together, so bring a laptop with Excel.` },
  { title: 'Mid-course feedback, in class this week', week: 'Week 8', body: 'In class this week you get fifteen minutes to answer three questions: what should I start, continue, and stop doing? The survey is anonymous, and I will leave the room while you answer.' },
];

export const discussions = [
  { title: 'After the site visit', week: 'Week 4', body: `What does ${partner} do, and for whom? What did you see on the visit that the data will not show? Post before your team writes its charter, and reply to one teammate.` },
  { title: 'Same prompt, different temperatures', week: 'Week 9', body: 'Send the same prompt for your macro to a generative AI tool at two temperature settings. Post both answers and one line on what changed. Which one would you trust, and how would you check it?' },
];

// A sample student's grades at week ten. Canvas would hide the running percent; the bundle so far is shown instead.
export const grades = [
  { name: 'The lookups lab', week: 2, status: 'Complete', score: '4/4' },
  { name: 'Team charter', week: 4, status: 'Complete', score: '4/4' },
  { name: 'The dashboard lab', week: 4, status: 'Complete (revised)', score: '5/5' },
  { name: 'The Solver lab', week: 6, status: 'Complete', score: '4/4' },
  { name: 'First paper check', week: 6, status: 'Complete', score: '3/3' },
  { name: 'Midway model and walkthrough', week: 7, status: 'Complete', score: '2/2' },
  { name: 'The macro lab, with the AI disclosure', week: 10, status: 'Submitted', score: '-/6' },
  { name: 'Service hours', week: 15, status: '12 of 20 logged', score: '-/1' },
];

export const people = [
  { name: 'Ali Rizvi', role: 'Teacher' },
  { name: '[Service Learning Assistant]', role: 'Service Learning Assistant, from the Center for Public Service. Runs the site orientation and collects the service timesheets.' },
  { name: '[Partner contact]', role: `Observer, from ${partner}` },
];

// The assignment opened up: Canvas's assignment page, with the TILT brief and a rubric of 1-or-0 rows.
export const macro = {
  title: 'The macro lab, with the AI disclosure',
  due: 'Week 10',
  points: 6,
  submitting: 'a file upload',
  types: 'xlsm, pdf',
  purpose: `${partner} needs its monthly update to run without your team. In industry, a lot of code like this is now written with generative AI, so you will use it here and show how you used it.`,
  task: [
    'Record a macro that builds the monthly update from the partner\'s sample export.',
    'Edit its code with a generative AI tool of your choice. Test it on a month where you already know the answer.',
    'Write the disclosure (one page, PDF): the tools, the prompts, how you checked the output, and a short reflection on what changed.',
  ],
  criteria: 'Each row of the rubric is 1 or 0, and the lab is complete when all six rows are 1. A row at 0 can be revised once, within a week.',
  rubric: [
    ['The macro runs', 'It builds the monthly update from the sample export, with no manual steps.'],
    ['The code reads', 'Each step has a plain-English comment.'],
    ['Tools', 'Each generative AI tool you used is named.'],
    ['Prompts', 'Every prompt, in full.'],
    ['Check', 'A test on a month with a known answer, and its result.'],
    ['Reflection', 'One paragraph on what changed with AI, including one thing it got wrong and how you caught it.'],
  ],
};
