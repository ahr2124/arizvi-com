// The courses on the /bucknell pages. The hub, the course pages and the course nav all read from here.
// Codes, titles, offering lines and prerequisites are from Bucknell's 2026-27 catalogue (the Business Analytics major page).
export const catalogue = 'https://coursecatalog.bucknell.edu/courses/anop/';

export interface Course {
  code: string;
  slug: string;
  title: string;
  line: string;       // what students leave with (hub row, and the course page unless pageLine is set)
  pageLine?: string;  // the course page's line under the title, where it says more than the hub row
  where: string;      // where it sits in the major (the catalog's own requirement groups)
  offered: string;    // the catalog's offering line
  restriction?: string; // the catalog's enrollment restriction, where it has one
  who: string;        // who takes it, from the catalog
  seats: string;      // my share of it in year 1
  when: string;       // when I could teach it in year 1
  prereqs?: string;
  leadsTo?: string;
  sample: string;     // the class or artifact its page shows
  pack: string;       // what the full course pack holds
}

export const courses: Course[] = [
  {
    code: 'ANOP 102',
    slug: 'anop-102',
    title: 'Spreadsheet Modeling & Data Analysis',
    line: 'Students finish the class able to build a spreadsheet model of a managerial decision, test its assumptions and defend the business case.',
    pageLine: 'Students finish the class able to build a spreadsheet model of a managerial decision, test its assumptions and defend the business case in a 2-page memo.',
    where: 'Freeman College core, and required for the Business Analytics minor',
    offered: 'Offered Both Fall and Spring; Lecture hours: 3, Other: 1',
    who: 'Every Freeman student, usually in first year.',
    seats: 'Up to 2 sections a term',
    when: 'Fall 2027 and Spring 2028',
    leadsTo: 'Most ANOP courses after it',
    sample: 'The term, and 5 classes',
    pack: 'The full pack: syllabus, 14 weeks, 12 labs, the rubrics and a sample final',
  },
  {
    code: 'ANOP 330',
    slug: 'anop-330',
    title: 'Predictive Analytics: Machine Learning Fundamentals for Business',
    line: 'Students understand the technology, then build models that can thoughtfully answer business problems.',
    where: 'Business Analytics Major Requirements, and required for the minor',
    offered: 'Offered Either Fall or Spring; Lecture hours: 3',
    who: 'Business Analytics majors and minors.',
    seats: '1 section',
    when: 'Whenever the department needs a section',
    prereqs: '(ANOP 102 or ENGR 226 or MATH 216 or PSYC 215) and (ANOP 203 or CSCI 203)',
    leadsTo: 'ANOP 400',
    sample: 'The term, and 2 classes',
    pack: 'The full pack: syllabus, 14 weeks, 10 labs, the project in pieces and a sample final',
  },
  {
    code: 'ANOP 400',
    slug: 'anop-400',
    title: 'Business Analytics Practicum',
    line: 'Students work on a client\'s problem under a charter. They have a working model by midterm and present the final one with the client in the room.',
    where: 'Business Analytics Major Requirements, and the Culminating Experience (CE)',
    offered: 'Offered Both Fall and Spring; Lecture hours: 3',
    restriction: 'Open to junior and senior Business Analytics majors. Others by permission of instructor.',
    who: 'Junior and senior Business Analytics majors.',
    seats: '1 section, in client teams of 4 or 5',
    when: 'Whenever the department needs a section',
    prereqs: 'ANOP 330 and (ANOP 350 or ANOP 370 or MATH 358)',
    sample: 'The term, the clients and the grading',
    pack: 'The full pack: 14 weeks, every deliverable with its rubric, and the forms the course runs on',
  },
  {
    code: 'ANOP 302',
    slug: 'anop-302',
    title: 'Financial Decision Modeling using Spreadsheets',
    line: 'Students work through optimization, risk and simulation in Excel, and each week ends in a decision for a manager.',
    where: 'One of the 2 electives for the Business Analytics minor',
    offered: 'Offered Either Fall or Spring; Lecture hours: 3',
    who: 'Students who have taken corporate finance and ANOP 102.',
    seats: '1 section',
    when: 'My first or second year',
    prereqs: 'ACFM 124 or ACFM 203 and ANOP 102, or equivalents',
    sample: 'The term, and an option to price',
    pack: 'The full pack: 14 weeks, 12 labs, the midterm, the project and a sample final',
  },
];

export const course = (slug: string) => courses.find((c) => c.slug === slug)!;
// Text arrows: → in display type (as in titles), and -> kept in one piece in body text.
export const arrows = (s: string, display = false) => s.replace(/->/g, display ? '→' : '-\u2060>');
// Who takes it, then how many. Numbers and course codes stay on the same line as the word after them.
export const students = (c: Course) => `${c.who} ${c.seats}.`.replace(/(\d|[A-Z]{4}) (?=\w)/g, '$1\u00a0');

// The Business Analytics major page, 2026-27 catalogue: its requirement groups, in its order and words.
// teach: a course I could teach (it links to its page here).
export interface ReqRow { code: string; title: string; or?: string; teach?: string }
export const requirements: { group: string; note?: string; rows: ReqRow[] }[] = [
  { group: 'Business Analytics Core Requirements', rows: [
    { code: 'MATH 201', title: 'Calculus I', or: 'MATH 192 Topics in Calculus' },
    { code: 'STAT 216', title: 'Statistics I' },
    { code: 'ANOP 203', title: 'Introduction to Programming for Business Analytics', or: 'CSCI 203 Introduction to Computer Science' },
  ] },
  { group: 'Business Analytics Major Requirements', rows: [
    { code: 'ANOP 270', title: 'Data Visualization for Business Analytics', or: 'HUMN 270 Data Visualization for the Digital Humanities' },
    { code: 'ANOP 330', title: 'Predictive Analytics: Machine Learning Fundamentals for Business', teach: 'anop-330' },
    { code: 'ANOP 350', title: 'Predictive Analytics: Forecasting & Simulation' },
    { code: 'ANOP 370', title: 'Prescriptive Analytics: Decision Modeling & Optimization', or: 'MATH 358 Topics in Operations Research' },
    { code: 'ANOP 400', title: 'Business Analytics Practicum', teach: 'anop-400' },
  ] },
  { group: 'Culminating Experience (CE)', note: 'Business Analytics majors fulfill the CE with ANOP 400.', rows: [
    { code: 'ANOP 400', title: 'Business Analytics Practicum', teach: 'anop-400' },
  ] },
  { group: 'Business Analytics Minor: required courses', rows: [
    { code: 'ANOP 102', title: 'Spreadsheet Modeling & Data Analysis', teach: 'anop-102' },
    { code: 'ANOP 270', title: 'Data Visualization for Business Analytics' },
    { code: 'ANOP 330', title: 'Predictive Analytics: Machine Learning Fundamentals for Business', teach: 'anop-330' },
  ] },
  { group: 'Business Analytics Minor: 2 courses from the following list', rows: [
    { code: 'ANOP 203', title: 'Introduction to Programming for Business Analytics' },
    { code: 'ANOP 242', title: 'Database Management and Applied Data Analysis' },
    { code: 'ANOP 302', title: 'Financial Decision Modeling using Spreadsheets', teach: 'anop-302' },
    { code: 'ANOP 311', title: 'Supply Chain Analytics' },
    { code: 'ANOP 350', title: 'Predictive Analytics: Forecasting & Simulation' },
    { code: 'ANOP 370', title: 'Prescriptive Analytics: Decision Modeling & Optimization' },
  ] },
];

// Freeman College's learning goals and the Business Analytics major's outcomes, in the catalogue's words,
// with where each is taught in the courses on these pages.
export const goals: { name?: string; goal: string; where: string }[] = [
  { name: 'Analysis', goal: 'Students will demonstrate the ability to understand organizations and analyze them rigorously.', where: 'ANOP 102: a model a manager can audit, and a 2-page memo.' },
  { name: 'Integrity', goal: 'Students will possess the judgment, vision and integrity necessary to serve society and their professions.', where: 'ANOP 102, week 11: the memo says which data it left out, and why.' },
  { name: 'Morality', goal: 'Students will identify creative and morally responsible solutions to organizational and societal issues.', where: 'ANOP 400: non-profit clients, and customer data kept anonymous.' },
];
export const outcomes: { goal: string; where: string }[] = [
  { goal: 'Understand and critically apply the concepts and methods of the discipline to support predictions and decisions in real-world situations.', where: 'ANOP 330, weeks 4 and 8: testing on unseen data, and pricing a cutoff.' },
  { goal: 'Foster the ability to bridge the gap between technical teams and stakeholders by working effectively as a member or leader of an interdisciplinary team and communicate the outcomes to the relevant decision makers.', where: 'ANOP 400: client teams, a signed charter, and a final presentation to the client.' },
  { goal: 'Learn how to evaluate and quantify uncertainty and risk, incorporating their inherent influence on both the decision process and the outcomes.', where: 'ANOP 102, week 6: breakeven ranges. ANOP 302, week 12: simulation.' },
  { goal: 'Commit to ethical decision-making and the long-run welfare of both organizations and the communities they serve.', where: 'ANOP 102, week 8, and ANOP 330: who signs off on a model\'s decision.' },
  { goal: 'Develop an appreciation and dedication for personal continuous improvement, leading to a long-lasting and relevant knowledge base and skill set.', where: 'Pass-or-redo labs, and graded reflection in ANOP 400.' },
];

export const bucknellColours: [string, string] = ['#003865', '#E87722']; // Bucknell blue (text), Bucknell orange (rule)
