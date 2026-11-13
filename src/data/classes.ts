// The 2 classes you can try on the ANOP 330 page (/bucknell/anop-330), as they run: the 75 minutes step by step (who has the floor),
// the pre-class work, the lab that follows, and 3 things to try in the widget. The minutes match class 1 of the same
// week in the course pack (src/data/packs), which stays the reference.
export type Who = 'me' | 'you' | 'room';
export interface Step { min: number; who: Who; title: string; text: string }
export interface Try { do: string; see: string }
export interface ClassPlan {
  week: number;            // the week in the pack, for the link
  before: string;          // the pre-class work
  steps: Step[];           // class 1, in order; the minutes add to 75
  lab: string;             // the lab that follows
  tries: Try[];            // what to do in the widget, and what you should see
  triesLabel?: string;     // replaces "Try it"
}

export const classes: Record<string, ClassPlan> = {
  threshold: {
    week: 8,
    before: 'Video (16 min): the cutoff as a business choice; precision-recall curves; uplift in plain words. A 3-question check.',
    steps: [
      { min: 10, who: 'room', title: 'The midterm form.', text: 'What it said, and what changes.' },
      { min: 20, who: 'me', title: 'Try the class.', text: '1,000 customers, 100 about to cancel, a $20 offer worth $200. This widget.' },
      { min: 25, who: 'you', title: 'Find the cutoff, in pairs.', text: 'Pick the cutoff on the training data, then see what it makes on held-out data.' },
      { min: 10, who: 'me', title: 'The precision-recall curve.', text: 'As a menu of cutoffs.' },
      { min: 10, who: 'room', title: 'Debrief.', text: 'Accuracy against net value, and which one the decision needs.' },
    ],
    lab: 'Lab 8: Telco churn with the case\'s cost matrix. The cutoff chosen on validation data and checked on held-out data, the money it makes against the default cutoff, and the ranked call list for a $2,000 budget.',
    tries: [
      { do: 'Start at nobody.', see: '90% accurate, because the model is right about the 900 who stay. Net value $0.' },
      { do: 'Press Most valuable.', see: '270 offers: 65 of the 100 cancellations kept, 205 offers wasted, $7,600 net, 76% accurate. Slide on to 380: still $7,600, at 67% accurate.' },
      { do: 'Change the offer to $100, then to $2.', see: 'The most valuable cutoff moves from nobody to everyone, while the accuracy at each cutoff stays the same. At $2 the best plan is 10% accurate.' },
    ],
  },

  overfit: {
    week: 4,
    before: 'Video (15 min): training error and test error part ways; k-fold cross-validation. A 3-question check. This write-up is for after class 1; the drawer is the lesson.',
    steps: [
      { min: 20, who: 'me', title: 'Try the class.', text: 'The ice-cream stand, 16 days on the chart and 8 in the drawer. This widget.' },
      { min: 20, who: 'you', title: 'Pick a degree, in pairs.', text: 'Fit 1 to 10, pick by the error on the days you can see, then open the drawer.' },
      { min: 25, who: 'you', title: '5-fold cross-validation.', text: 'Built by hand with a loop before anyone calls cross_val_score.' },
      { min: 10, who: 'room', title: 'Debrief.', text: 'The degree the room picked before, and after.' },
    ],
    lab: 'Lab 4, Hold it out: the stand\'s 2 summers, 3 models of rising complexity, 5-fold cross-validation, 1 pick, scored once on the last 30 days.',
    tries: [
      { do: 'Degree 1 is a straight line.', see: 'It misses the 16 days by $56 a day (root-mean-square error).' },
      { do: 'Push the degree to 10.', see: 'The training error falls to $20 and the curve bends to chase every point.' },
      { do: 'Reveal the 8 held-out days.', see: 'Degree 10 misses them by $2,916 a day, nearly all of it on the 34 °C day, 1 degree hotter than anything it was fitted to. Degrees 2 to 4 miss by about $30, and that is the curve to ship.' },
    ],
  },
};
