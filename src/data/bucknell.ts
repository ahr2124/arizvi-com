// Shared by the school pages. /bucknell is one course in a Moodle-shaped shell since 13 Nov 2026 (its content is in
// src/data/bucknell270.ts), with ANOP 330 on its own page beside it (Ali, 13 Nov 2026: "can you put the ML course
// back?"). The ANOP 330 page, its pack and the course nav read the course from here.
// Code, title, offering line and prerequisites are from Bucknell's 2026-27 catalogue (the Business Analytics major page).
export const catalogue = 'https://coursecatalog.bucknell.edu/courses/anop/';

export interface Course {
  code: string;
  slug: string;
  title: string;
  line: string;       // what students leave with (the card on /bucknell, and the course page unless pageLine is set)
  pageLine?: string;  // the course page's line under the title, where it says more than the card
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
];

export const course = (slug: string) => courses.find((c) => c.slug === slug)!;
// Text arrows: → in display type (as in titles), and -> kept in one piece in body text.
export const arrows = (s: string, display = false) => s.replace(/->/g, display ? '→' : '-\u2060>');
// Who takes it, then how many. Numbers and course codes stay on the same line as the word after them.
export const students = (c: Course) => `${c.who} ${c.seats}.`.replace(/(\d|[A-Z]{4}) (?=\w)/g, '$1\u00a0');

export const bucknellColours: [string, string] = ['#003865', '#E87722']; // Bucknell blue (text), Bucknell orange (rule)
