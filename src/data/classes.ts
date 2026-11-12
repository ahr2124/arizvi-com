// The classes you can try on the /bucknell course pages, as they run: the 75 minutes step by step (who has the floor),
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
  pivot: {
    week: 3,
    before: 'Video (14 min): a pivot table from a clean table; average, spread and total by group. 1 page on what a "what happened" brief is. A 3-question check.',
    steps: [
      { min: 20, who: 'me', title: 'Try the class.', text: 'Count the coffee export, clean it, count it again. This widget, on the projector, with the room calling the fixes.' },
      { min: 25, who: 'you', title: 'Pivots in pairs.', text: 'Sales by cart, by cart and day, by item.' },
      { min: 15, who: 'me', title: 'Average, median and the spread.', text: 'And when the average lies.' },
      { min: 15, who: 'room', title: 'Debrief.', text: '3 pivots that answer the manager\'s question and 3 that decorate.' },
    ],
    lab: 'Lab 3, What happened last week: the same job on 2,000 rows with 3 problems to find, a pivot by cart and day, and a 1-page brief.',
    tries: [
      { do: 'Count first.', see: 'The pivot says 5 locations and Union on top at $81.50. The cart has 2.' },
      { do: 'Match the names.', see: '4 spellings of the library cart become 1, at $51. Union still leads.' },
      { do: 'Drop the duplicate, then fix the $45 latte.', see: 'Union falls to $33.50 and the library wins the week. That matches the till.' },
    ],
  },
  breakeven: {
    week: 6,
    before: 'Video (18 min): a 1-way Data Table, a 2-way Data Table, scenarios, Goal Seek. A 3-question check.',
    steps: [
      { min: 20, who: 'me', title: 'Try the class.', text: 'The 2-way Data Table on the taco truck, price by volume. This widget.' },
      { min: 25, who: 'you', title: 'Build it yourselves.', text: 'The profit formula in the corner; Excel fills the 36 cells.' },
      { min: 20, who: 'you', title: 'Scenarios, in pairs.', text: 'A wet summer, a rival truck, a rent rise, each with its profit.' },
      { min: 10, who: 'room', title: 'Debrief.', text: 'The 1 cell the owner should watch.' },
    ],
    lab: 'Lab 6: the week 5 model with a 2-way Data Table, 3 named scenarios and 1 Goal Seek, and half a page on how wrong the forecast can be before the plan loses money.',
    tries: [
      { do: 'Find the plan.', see: '$8 and 140 tacos, the outlined cell: $100 a week. The $0 cell is 1 column to the left, at 120 tacos. 20 tacos of room.' },
      { do: 'Push ingredients to $4.', see: 'The plan loses $40 a week, and Goal Seek says $8.29 is the lowest price that works at 140.' },
      { do: 'Put ingredients back and cut the fixed cost to $450.', see: 'The plan clears $250 and breakeven falls to 90 tacos.' },
    ],
  },
  llm: {
    week: 8,
    before: 'Video (15 min): a forecast with odds, expected value as a SUMPRODUCT, and the newsvendor problem in plain words. A 3-question check.',
    steps: [
      { min: 10, who: 'room', title: 'The midterm form.', text: 'What it said, and what changes from today.' },
      { min: 25, who: 'me', title: 'Try the class.', text: 'The café asks a chatbot for tomorrow\'s croissant demand and gets 20, 45 and 35 percent. This widget.' },
      { min: 25, who: 'you', title: 'Build the bake decision, in pairs.', text: '3 bakes, 3 demands, 9 profits, 1 SUMPRODUCT each.' },
      { min: 15, who: 'room', title: 'Debrief.', text: 'The bake with the best expected profit, and why it is not the most likely demand.' },
    ],
    lab: 'Lab 8: the market stall, modeled 2 ways, best expected profit and smallest worst case, with a paragraph on which you would pick for an owner who cannot afford a bad week.',
    tries: [
      { do: 'Read the bars.', see: '20, 45 and 35 percent, and they do not move. That is the forecast.' },
      { do: 'Ask 20 times.', see: 'Press it a few times and the count moves around. Set the temperature to 0 and ask again: medium, 20 times out of 20.' },
      { do: 'Compare the 3 ways to use it.', see: 'Weighing the probabilities wins at $310 whatever the temperature. Asking once and baking what it says is $267 at temperature 1.' },
    ],
  },
  regression: {
    week: 11,
    before: 'Video (18 min): a line through the data; the slope, the intercept, R squared; the Analysis ToolPak. A 3-question check.',
    steps: [
      { min: 20, who: 'me', title: 'Try the class.', text: 'The bike shop\'s 12 weeks of ad spend and sales. This widget.' },
      { min: 25, who: 'you', title: 'Fit it in Excel 3 ways.', text: 'The chart trendline, SLOPE and INTERCEPT, the Analysis ToolPak.' },
      { min: 20, who: 'you', title: 'Read the output line by line, in pairs.', text: 'Each number written as a sentence.' },
      { min: 10, who: 'room', title: 'Debrief.', text: 'The weekend that was different, and what to do about it.' },
    ],
    lab: 'Lab 11: 2 years of the chain\'s weekly sales against temperature and a promotion flag. Fit it, read it, predict next month, and say which of the 3 doubts applies.',
    tries: [
      { do: 'Read the slope with all 12 weeks in.', see: '$1.70 of sales per $1 of ads, R² 0.14. At a 40% margin that is 68 cents back on the dollar.' },
      { do: 'Turn off the gran fondo weekend, the orange point.', see: 'Slope $2.87, R² 0.86, $1.15 back on the dollar. The same spreadsheet now says yes.' },
      { do: 'Slide next week\'s spend.', see: 'With the weekend out, a $200 week clears about $30 after the ads. Worth doing, and only just.' },
    ],
  },
  overtime: {
    week: 12,
    before: 'Video (14 min): decision variables, an objective and constraints; Solver in 4 clicks. A 3-question check. This write-up is for after class 1, so the guess stays a guess.',
    steps: [
      { min: 5, who: 'room', title: 'Guess first.', text: 'Which bike do you build more of? The Trail earns more per bike, so it is the tempting answer.' },
      { min: 15, who: 'you', title: 'On paper, in pairs.', text: 'The decision variables, the objective and the constraints, before anyone opens Excel.' },
      { min: 25, who: 'you', title: 'Build and solve.', text: 'The model in Solver, and the figure below drawn on the board as the room reads the answer.' },
      { min: 20, who: 'room', title: 'The real decision.', text: 'The owner can buy overtime: an assembler at $30 an hour or a painter at $25. Which is worth it?' },
      { min: 10, who: 'you', title: 'Exit ticket.', text: 'Tell the owner what to do in 2 sentences, and what would change your answer.' },
    ],
    lab: 'Lab 12: the bike shop with a third bike and a materials budget. Solve it, read the sensitivity report, and write the owner 3 sentences.',
    triesLabel: 'Read the figure',
    tries: [
      { do: 'The shaded region is every plan the crew can build.', see: 'Under the assembly line, under the painting line, and under 30 Trails.' },
      { do: 'The best plan is the corner where assembly and painting both run out.', see: '48 Commuters and 24 Trails, $10,080 a week. Twice as many Commuters, even though the Trail earns more per bike.' },
      { do: 'The dashed line is every plan worth $10,080.', see: 'An extra assembly hour moves it by $36, an extra painting hour by $12. So take the $30 assembler and turn down the $25 painter.' },
    ],
  },
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
  option: {
    week: 12,
    before: 'Video (18 min): a call option\'s payoff, a stock path, and why the average payoff is a price. A 3-question check.',
    steps: [
      { min: 5, who: 'room', title: 'Guess first.', text: 'A call on a $100 stock, strike $100, 1 year, 20% volatility, 5% rates. Worth more or less than $10?' },
      { min: 20, who: 'me', title: 'Try the class.', text: 'Simulate paths, average the payoffs, watch the estimate close in on Black-Scholes. This widget.' },
      { min: 30, who: 'you', title: 'Build it, in pairs.', text: '1,000 paths, the discounted average, the standard error.' },
      { min: 20, who: 'room', title: 'Debrief.', text: 'The runs it takes to get within 10 cents, and what that costs for an option no formula can check.' },
    ],
    lab: 'Lab 12: the European call checked against Black-Scholes and put-call parity, then an Asian call priced the same way, with the standard error and 3 sentences to the treasurer.',
    tries: [
      { do: 'Guess first.', see: 'More or less than $10? Black-Scholes says $10.45, and that is the dashed line the estimate has to find.' },
      { do: 'Press +1,000 paths.', see: 'The estimate usually lands within about 90 cents of it (19 times in 20), with a wide band either side.' },
      { do: 'Keep pressing +10,000.', see: 'The band narrows with the square root of the paths: 4 times the paths, half the width. How many until it is within 10 cents? Guess, then open the answer under the chart.' },
    ],
  },
};
