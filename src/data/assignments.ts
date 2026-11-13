// Assignments for the ANOP 330 page and pack on /bucknell: the prompt, the steps, what is handed in, and the rubric.
// Rubric levels run best first; the first level's points are the criterion's worth.
import type { Criterion } from '../components/Assignment.astro';

export interface Assignment { title: string; meta: string; prompt: string[]; steps?: string[]; stepsLabel?: string; handIn?: string[]; rubric: Criterion[]; note?: string; rubricLabel?: string; heads?: [string, string, string] }
const L = (a: [number, string], b: [number, string], c: [number, string]): Criterion['levels'] => [{ pts: a[0], text: a[1] }, { pts: b[0], text: b[1] }, { pts: c[0], text: c[1] }];

export const a330: Assignment[] = [
  {
    title: 'Hold it out',
    meta: 'Lab 4 · one of the weekly labs · due before week 5',
    prompt: [
      "The ice-cream stand from class, with its full record: 2 summers, 180 days, with the day's temperature, the day of the week, whether school was out, and sales.",
      "Fit a model that predicts sales from what you would know the night before, and say how far off it will be on days it has not seen.",
    ],
    steps: [
      'Hold out the last 30 days before you look at anything else.',
      'Fit at least 3 models of rising complexity: a line, a curve, a model with the extra features.',
      "Run 5-fold cross-validation on the training days and report each model's held-out error.",
      'Pick one. Score it once on the 30 days.',
      "Write 1 paragraph: which model you would ship, what it is off by, and what would make you change it.",
    ],
    handIn: ['The notebook, which runs top to bottom in under a minute, with the paragraph as its last cell.', 'The chat, if you used an AI tool.'],
    rubric: [
      { name: 'Validation done right', levels: L([2, 'The 30 days untouched until the end; folds set before any fitting; no feature that leaks tomorrow.'], [1, 'Cross-validation used, but the holdout was peeked at, or a feature leaks.'], [0, 'Scored on the training days.']) },
      { name: 'The choice', levels: L([2, 'Picked by held-out error, and the error numbers are in the paragraph.'], [1, 'Picked by training error, or by taste.'], [0, 'No choice made.']) },
      { name: 'The code', levels: L([2, 'Runs top to bottom; named steps; nothing hard-coded that should be a variable.'], [1, 'Runs with fixes, or a wall of cells.'], [0, 'Does not run.']) },
      { name: 'The paragraph', levels: L([2, 'A manager could read it: which model, how far off, what would change it.'], [1, 'Technical but complete.'], [0, 'Missing.']) },
    ],
    note: 'Every weekly lab is graded on 4 rows like these, out of 8, within a week, and passes at 6 with no row at 0. A lab that does not pass comes back with feedback, and you resubmit until it does.',
  },
  {
    title: 'The model card and the memo',
    meta: 'Team project · 30% · weeks 4 to 14',
    prompt: [
      'Your team builds one model that would change a decision for a real organization, or on public data where we cannot get one. The model is scored on a term of data the team never sees.',
      'What you hand in is a notebook, a 1-page model card and a 2-page memo, and an 8-minute pitch to the person who would act on it.',
    ],
    stepsLabel: 'The pieces',
    steps: [
      'Week 4: the pitch video, 2 minutes, 1 per member.',
      'Week 5: the charter: the decision, what a wrong prediction costs in each direction, the data, and the held-out plan.',
      'Week 9: a first model with its cross-validated error, against a simple baseline.',
      'Week 12: the cutoff chosen by cost, and the model card.',
      'Week 14: the pitch, then the notebook, card and memo.',
    ],
    handIn: ['The notebook, on GitHub where the organization allows it.', 'The model card, 1 page.', 'The memo, 2 pages.', 'The peer evaluation, in private.'],
    rubric: [
      { name: 'The decision and the costs', levels: L([4, 'The decision named; the cost of each kind of mistake stated and used to choose the cutoff.'], [2, 'The decision named; costs guessed; the cutoff left at the default.'], [0, 'Accuracy is the only yardstick.']) },
      { name: 'Data and leakage', levels: L([4, 'Every feature exists at decision time; the holdout is a later period.'], [2, 'One leak I can find, or a holdout that is a random split of the same period.'], [0, 'Leaks throughout.']) },
      { name: 'The model and its validation', levels: L([4, 'Cross-validated; error reported on held-out data; a simpler baseline beaten and shown.'], [2, 'Validated, but no baseline.'], [0, 'Scored on the training data.']) },
      { name: 'The held-out term', levels: L([4, 'The score on the term the team never saw is in the memo, against the baseline, with what it means.'], [2, 'The score, with no baseline.'], [0, 'Not scored on the held-out term.']) },
      { name: 'The memo and the pitch', levels: L([4, 'A decision-maker could act on it: what to do, what acting costs, and when to stop trusting the model.'], [2, 'Describes the model instead of the decision.'], [0, 'Hard to follow.']) },
    ],
    note: "The peer evaluation at week 14 moves each member's share of the 20 points up or down by up to 2.",
  },
];
