// The courses on the /bucknell pages. The hub, the course pages and the course nav all read from here.
// Codes, titles and prerequisites are from Bucknell's 2026-27 catalogue.
export const catalogue = 'https://coursecatalog.bucknell.edu/courses/anop/';

export interface Course {
  code: string;
  slug: string;
  title: string;
  line: string;       // what students leave with
  where: string;      // where it sits in the major
  who: string;        // who takes it, from the catalogue
  prereqs?: string;
  leadsTo?: string;
  sample: string;     // the class or artefact its page shows
  pack: string;       // what the full course pack holds
}

export const courses: Course[] = [
  {
    code: 'ANOP 102',
    slug: 'anop-102',
    title: 'Spreadsheet Modeling & Data Analysis',
    line: 'Students leave able to build a spreadsheet model of a managerial decision, test the assumptions behind it, and defend the business case.',
    where: 'Freeman College core · offered every term',
    who: 'Every Freeman College student, usually in first year.',
    leadsTo: 'Most ANOP courses after it',
    sample: 'The term week by week, 4 classes to try and a 5th to read',
    pack: 'The full pack: syllabus, 14 weeks, 12 labs, the rubrics and a sample final',
  },
  {
    code: 'ANOP 330',
    slug: 'anop-330',
    title: 'Predictive Analytics: Machine Learning Fundamentals for Business',
    line: 'Students understand the technology, then build models that can thoughtfully answer business problems.',
    where: 'Required for the Business Analytics major and minor',
    who: 'Business Analytics majors and minors, usually in sophomore spring or junior year.',
    prereqs: 'ANOP 102 (or a statistics course) and ANOP 203 (or CSCI 203)',
    leadsTo: 'ANOP 400',
    sample: 'The term week by week, and 2 classes to try',
    pack: 'The full pack: syllabus, 14 weeks, 10 labs, the project in pieces and a sample final',
  },
  {
    code: 'ANOP 400',
    slug: 'anop-400',
    title: 'Business Analytics Practicum',
    line: 'A real client, a working model by midterm, and grades for the plan, the delivery, and what the team learned when the plan met reality.',
    where: 'Capstone for Business Analytics majors',
    who: 'Junior and senior Business Analytics majors. Others by permission.',
    prereqs: 'ANOP 330, and ANOP 350 or 370 (or MATH 358)',
    sample: 'The term, the clients, the grading, and the week 9 playbook',
    pack: 'The full pack: 14 weeks, every deliverable with its rubric, and the forms the course runs on',
  },
  {
    code: 'ANOP 302',
    slug: 'anop-302',
    title: 'Financial Decision Modeling using Spreadsheets',
    line: 'Optimisation, portfolios and simulation in a spreadsheet. Every week ends with a decision written up for a manager.',
    where: 'Elective · counts toward the Business Analytics minor',
    who: 'Anyone past corporate finance and ANOP 102.',
    prereqs: 'ACFM 124 or ACFM 203, and ANOP 102 (or equivalents)',
    sample: 'The term week by week, and an option you can price by simulation',
    pack: 'The full pack: 14 weeks, 12 labs, the midterm, the project and a sample final',
  },
];

export const course = (slug: string) => courses.find((c) => c.slug === slug)!;
// Text arrows: → in display type (as in titles), and -> kept in one piece in body text.
export const arrows = (s: string, display = false) => s.replace(/->/g, display ? '→' : '-\u2060>');
// Who takes it. Numbers and course codes stay on the same line as the word after them.
export const students = (c: Course) => c.who.replace(/(\d|[A-Z]{4}) (?=\w)/g, '$1\u00a0');
