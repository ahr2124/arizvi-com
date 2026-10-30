// The four courses on the /bucknell pages. The hub, the course pages and the course nav all read from here.
// Codes, titles and prerequisites are from Bucknell's 2026-27 catalogue.
export const catalogue = 'https://coursecatalog.bucknell.edu/courses/anop/';

export interface Course {
  code: string;
  slug: string;
  title: string;
  line: string;       // what students leave with
  where: string;      // where it sits in the major
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
    where: 'Core · offered every term',
    when: 'Fall 2027 (2 sections) and Spring 2028',
    leadsTo: 'Every ANOP course after it',
    sample: 'Sample class: which overtime is worth paying for?',
  },
  {
    code: 'ANOP 302',
    slug: 'anop-302',
    title: 'Financial Decision Modeling using Spreadsheets',
    line: 'Optimisation -> portfolios -> simulation, built on the decision models course I took at Columbia.',
    where: 'Elective',
    when: 'Fall 2027',
    prereqs: 'ACFM 124 or ACFM 203, and ANOP 102 (or equivalents)',
    sample: 'Full syllabus, and an option you can price by simulation',
  },
  {
    code: 'ANOP 330',
    slug: 'anop-330',
    title: 'Predictive Analytics: Machine Learning Fundamentals for Business',
    line: 'Every model is a decision tool, so we judge models by what their mistakes cost - and decide who stays in the loop.',
    where: 'Business Analytics major requirement',
    when: 'Spring 2028',
    prereqs: 'ANOP 102 (or a statistics course) and ANOP 203 (or CSCI 203)',
    leadsTo: 'ANOP 400',
    sample: 'Try a class: the most accurate model earns nothing',
  },
  {
    code: 'ANOP 400',
    slug: 'anop-400',
    title: 'Business Analytics Practicum',
    line: 'Scope -> data -> model -> recommendation -> delivery. A signed project charter by week 3, and the client in the room at the end.',
    where: 'Capstone for Business Analytics majors',
    when: 'Spring 2028',
    prereqs: 'ANOP 330, and ANOP 350 or 370 (or MATH 358)',
    sample: 'The term, week by week',
  },
];

export const course = (slug: string) => courses.find((c) => c.slug === slug)!;
