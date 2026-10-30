// A course pack: the syllabus, every week, every lab, the big assignments and a sample exam for one /bucknell course.
// The course pages show the term and 2 assignments; the pack is the whole thing, as I'd hand it to a department.
import type { Assignment } from '../assignments';

export interface Outcome { id: string; text: string }
export interface Week {
  w: number;
  topic: string;
  before: string;   // the pre-work: a short video or reading and a 3-question check
  c1: string;       // class 1, 75 minutes, with the timings
  c2: string;       // class 2
  lab: string;      // the lab session and what it hands in
  memo?: string;    // the piece of the term project this week adds, where there is one
}
export interface Lab { n: number; title: string; due: string; prompt: string; handIn: string; passes: string }
export interface ExamPart { text: string; marks: number }
export interface ExamQ { tag: string; text: string; parts: ExamPart[] }
export interface Exam { title: string; meta: string; rules: string[]; questions: ExamQ[]; note?: string }
export interface Extra { label: string; title: string; body: string[]; list?: string[]; listLabel?: string }

export interface Pack {
  slug: string;
  code: string;
  title: string;
  standing: string;              // one sentence on where this pack stands next to the department's own outline
  description: string[];
  outcomes: Outcome[];
  runs: [string, string][];      // how the class runs: label, text
  grading: [string, string, string][];   // item, weight, how it is marked
  policies: { title: string; body: string[] }[];
  weeks: Week[];
  labLabel?: string;             // the 4th row of each week: 'Lab' unless the course calls it something else
  weeksNote?: string;
  labs: Lab[];
  labsNote?: string;
  assignments: Assignment[];
  exam?: Exam;
  extras?: Extra[];
}
