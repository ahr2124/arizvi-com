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
  seats: string;      // how many students in year 1
  when: string;       // when I'd teach it in year 1
  prereqs?: string;
  leadsTo?: string;
  sample: string;     // the class or artefact its page shows
}

export const courses: Course[] = [
  {
    code: 'ANOP 102',
    slug: 'anop-102',
    title: 'Spreadsheet Modeling & Data Analysis',
    line: 'Students leave with a model a manager could audit and a 1-page memo that says what to do. Every week adds one piece of that memo.',
    where: 'Freeman College core · offered every term',
    who: 'Every Freeman College student, usually in first year.',
    seats: '5 sections in year 1, about 25 in each',
    when: 'Fall 2027 (3 sections) and Spring 2028 (2)',
    leadsTo: 'Most ANOP courses after it',
    sample: 'The term week by week, and 4 classes to try',
  },
  {
    code: 'ANOP 302',
    slug: 'anop-302',
    title: 'Financial Decision Modeling using Spreadsheets',
    line: 'Optimisation -> portfolios -> simulation, built on the decision models course I took at Columbia.',
    where: 'Elective · counts toward the Business Analytics minor',
    who: 'Anyone past corporate finance and ANOP 102.',
    seats: '1 section, about 25 students',
    when: 'Spring 2028',
    prereqs: 'ACFM 124 or ACFM 203, and ANOP 102 (or equivalents)',
    sample: 'The full syllabus, and an option you can price by simulation',
  },
];

export const course = (slug: string) => courses.find((c) => c.slug === slug)!;
// Text arrows: → in display type (as in titles), and -> kept in one piece in body text.
export const arrows = (s: string, display = false) => s.replace(/->/g, display ? '→' : '-\u2060>');
// Who takes it, then how many. Numbers and course codes stay on the same line as the word after them.
export const students = (c: Course) => `${c.who} ${c.seats}.`.replace(/(\d|[A-Z]{4}) (?=\w)/g, '$1\u00a0');
