// The ANOP 302 course pack. The course page is the draft syllabus; this is the whole term.
import type { Pack } from './types';
import type { Assignment } from '../assignments';
import { a302 } from '../assignments';
import type { Criterion } from '../../components/Assignment.astro';

const L = (a: [number, string], b: [number, string], c: [number, string]): Criterion['levels'] => [{ pts: a[0], text: a[1] }, { pts: b[0], text: b[1] }, { pts: c[0], text: c[1] }];

const midterm: Assignment = {
  title: 'The midterm case',
  meta: 'Midterm · 20% · week 7, class 2 · 75 minutes',
  prompt: [
    'A financial decision you have not seen, its numbers on 1 page, and 4 questions: formulate, solve, read the sensitivity report, recommend. The practice case in class 1 that week has the same shape, and we mark it together before you leave.',
    'Open book: your labs, your notes and the texts. Closed internet, no AI tools. In a workbook, because Solver is the point; the formulation is written on paper first and handed in with it.',
  ],
  stepsLabel: 'The 4 questions, every time',
  steps: [
    'Formulate: decision variables, objective and constraints, on paper, in words and in algebra.',
    'Solve: the model in Excel, Solver set up, the answer.',
    'Read: the sensitivity report, with 2 shadow prices and their ranges as sentences.',
    'Recommend: 3 sentences to the CFO, with the number that decides it and what would flip it.',
  ],
  rubric: [
    { name: 'Formulation', levels: L([6, 'Variables, objective and every constraint, in words and algebra, matching the case.'], [3, 'A constraint missing or a sign wrong.'], [0, 'Straight to Solver.']) },
    { name: 'The model', levels: L([4, 'Inputs apart from formulas; Solver finds the optimum; the model matches the formulation.'], [2, 'Solves, with numbers typed into formulas or a mislabelled constraint.'], [0, 'Does not solve.']) },
    { name: 'The report', levels: L([5, '2 shadow prices with ranges, read as sentences a CFO could use.'], [2.5, 'Prices read, ranges ignored.'], [0, 'Misread.']) },
    { name: 'The recommendation', levels: L([5, 'What to do, the number that decides it, what would flip it.'], [2.5, 'A decision without the number.'], [0, 'Missing.']) },
  ],
  note: 'Marked within a week, with the practice case as the key for the method. Grades are final a week after they come back.',
};

const project: Assignment = {
  title: 'The decision and the model behind it',
  meta: 'Team project · 30% · weeks 4 to 14',
  prompt: [
    'A financial decision a real organization faces, built from its public filings, or with the organization itself where we can arrange it: a capital budget, a financing plan, a portfolio mandate, a hedge. The team builds the model that informs it and writes the 2-page memo a CFO could act on.',
    'Built in pieces: teams form in week 4, the decision is chosen by week 6, the model is reviewed with me in week 10, and the team presents in week 14 with the memo and the model attached.',
  ],
  stepsLabel: 'The pieces',
  steps: [
    'Week 4: a team of 3 or 4.',
    'Week 6: the decision in 1 paragraph I sign off: who decides, between which options, by when, and the public numbers it rests on.',
    'Week 10: the model review: 20 minutes with me, the model open, the sensitivity or simulation output on the screen.',
    'Week 14: 8 minutes to present, then the memo and the workbook handed in.',
  ],
  handIn: ['The memo: 2 pages, PDF.', 'The workbook, with the source filings cited on the inputs sheet.', 'One slide per member on what they did.', 'The peer evaluation, in private.'],
  rubric: [
    { name: 'The decision', levels: L([4, 'One sentence: who decides, between which options, by when; the public numbers it rests on cited.'], [2, 'Stated, but vague, or several decisions at once.'], [0, 'Not stated.']) },
    { name: 'The model', levels: L([6, 'The right method (optimise, or a portfolio, or a simulation) for the decision; inputs apart; someone else could audit it.'], [3, 'The right method, hard to follow, or an assumption hidden in a formula.'], [0, 'The method does not fit, or the model cannot be checked.']) },
    { name: 'The risk', levels: L([4, 'A sensitivity report, a frontier or a simulation that says how wrong the inputs can be before the answer changes.'], [2, 'Some sensitivity, with no link to the answer.'], [0, 'None.']) },
    { name: 'The recommendation', levels: L([4, 'What to do, by when, what it is worth and what would change it; the numbers support the words.'], [2, 'What to do without what would change it, or numbers and words that disagree.'], [0, 'No recommendation.']) },
    { name: 'Writing and presentation', levels: L([2, '2 pages a CFO reads in 5 minutes; 8 minutes, on time; every member spoke.'], [1, 'Over length, or 1 member carried it.'], [0, 'Hard to follow.']) },
  ],
  note: "The peer evaluation at week 14 moves each member's share of the 20 points up or down by up to 2.",
};

export const pack: Pack = {
  slug: 'anop-302',
  code: 'ANOP 302',
  title: 'ANOP 302, in full',
  standing: "ANOP 302 is the course I'd most like to build, and the one that isn't in the posting, so it takes a slot in year 1 or 2 at the department's call. This is the whole term as I'd run it: every week, every lab with what passes, the project in pieces, the rubrics up front and a sample of the final.",
  description: [
    'The catalogue describes ANOP 302 as optimisation in finance and accounting, portfolio and risk management, and Monte Carlo pricing of derivatives. The course teaches students to formulate a financial decision as a model, solve it, say what a constraint is worth, measure the risk, and write the recommendation a CFO could act on. Every week ends in that recommendation.',
    "What's in the pack: the syllabus, all 14 weeks (before class, both classes with timings, the lab), the 12 labs with what passes, the midterm, the project, and a sample final on portfolios, risk and simulation.",
  ],
  outcomes: [
    { id: 'O1', text: 'Formulate: turn a finance or accounting decision into a spreadsheet model with clear inputs, decisions, constraints and an objective.' },
    { id: 'O2', text: 'Optimise: solve linear, integer and nonlinear models, and read the sensitivity output to say what a constraint is worth.' },
    { id: 'O3', text: 'Manage risk: build and defend a mean-variance portfolio, and measure its risk with value at risk.' },
    { id: 'O4', text: 'Simulate: price options with Monte Carlo simulation, and check the answer against a closed-form price.' },
    { id: 'O5', text: 'Recommend: write a recommendation a manager can act on, including what would change it.' },
  ],
  runs: [
    ['Format', '14 weeks · 2 classes of 75 minutes a week · a weekly lab finished on your own time'],
    ['Before class', 'A 10-to-20-minute video or a short reading from Winston and Albright or Benninga, and a 3-question check that closes when class starts. Class starts from what the check says the room got wrong.'],
    ['In class', 'Guess first: every case opens with a guess before any modelling, and we come back to it once the model is solved. Then pairs build the model, and the room debriefs it. Laptops open while we build, closed for the debrief. Every class ends with an exit ticket: 2 sentences, what to do and what would change it, marked 0, 1 or 2 for whether a manager could act on it.'],
    ['The lab', 'One a week, started in class 2 and finished on your own, due before the next class 1. Each ends with a 3-sentence recommendation.'],
    ['Tools', 'Excel with Solver, and the Analysis ToolPak for the simulation weeks. ANOP 102 is the prerequisite, so the modelling rules are assumed from week 1 and the finance is taught.'],
    ['Text', 'No required text. Recommended: Winston and Albright, Practical Management Science, for the optimisation weeks, and Benninga, Financial Modeling, for portfolios and options. Public data: Treasury yields, 5 years of monthly stock returns from a public source, Fed H.10 exchange rates, and filings from EDGAR for the project.'],
    ['Help', '2 office hours a week, plus time by appointment. Come with a half-built model; that is the best time to talk. Course questions go on the forum so the answer helps everyone.'],
    ['Day one', "I ask the class how it wants to be graded. The weights are fixed. What's open: whether the final is 2 hours or 3, and whether week 13 covers hedging foreign exchange (my pick) or a commodity, which the class votes on in week 7 with the anonymous mid-term form."],
  ],
  grading: [
    ['Weekly labs', '25%', '12 labs (weeks 1 to 6 and 8 to 13), marked pass or redo on a rubric you see before you start. A lab that does not pass comes back within a week with feedback, and you resubmit until it does, up to the last day of week 13. Each lab passed is worth 25/12 of the 25.'],
    ['Midterm', '20%', 'Week 7. Optimisation: formulate, solve, read, recommend. Rubric below.'],
    ['Team project', '30%', 'Weeks 4 to 14. A financial decision a real organization faces, from its filings or with the organization. Rubric below. Peer evaluation moves each member\'s share by up to 2 points.'],
    ['Final exam', '15%', 'On paper, 2 or 3 hours. Portfolios, risk and simulation, with the outputs printed. Attempt up to 30 marks. Sample below.'],
    ['Exit tickets', '10%', 'Every class. 2 sentences: what to do, and what would change it. Marked 0, 1 or 2 in the room. The best 20 count.'],
  ],
  policies: [
    {
      title: 'Pass or redo',
      body: [
        'Labs are satisfactory or they come back. A lab passes at 6 of its 8 rubric points with no row at 0. Anything else comes back with feedback within a week, and you resubmit until it passes, until the last day of week 13. Full marks for every lab you bring to a pass.',
      ],
    },
    {
      title: 'Late work',
      body: [
        '5 late days for the term, spent on labs 1 day at a time, no reason needed; weekends and holidays do not count. The project pieces, the midterm and the final have fixed dates. A lab handed in late with no late day left is a 0. Extensions beyond that are for illness or a family emergency, with a note from the appropriate office. Keep your workbooks in OneDrive from week 1.',
      ],
    },
    {
      title: 'Working together',
      body: [
        'Discuss every lab with anyone. You may not give or take answers, and a workbook sent "to look at" is an answer. Talk at a whiteboard, nobody writes anything down, erase it, then build your own from a blank sheet. Name everyone you talked to on the inputs sheet of the lab, and sign the line under it: this is my work, except as stated above.',
      ],
    },
    {
      title: 'AI tools',
      body: [
        'Allowed for checking formulas and debugging. Submit the prompts with the lab. Off limits: the formulation and the recommendation, which are the parts I am marking. You stay responsible for every cell, and there is no AI in the midterm or the final.',
      ],
    },
    {
      title: 'Marks and attendance',
      body: [
        'Labs and the midterm are marked within a week; exit tickets in the room. Grades are final 1 week after the work comes back; if a mark looks wrong, email me inside that week with the cell you mean. Exit tickets cannot be made up, which is why only the best 20 count.',
      ],
    },
    {
      title: 'Sources',
      body: [
        'Project models rest on public filings, and every number on the inputs sheet cites the filing and the page it came from. Where an organization gives a team its own numbers, the ANOP 400 data agreement applies: IDs replaced, nothing into a chatbot, and what the team keeps written down.',
      ],
    },
  ],
  weeks: [
    {
      w: 1, topic: 'From spreadsheets to finance',
      before: 'Video (15 min): a linear program in plain words: decisions, an objective, constraints. Read the 1-page case: a bakery\'s 6-month financial plan. Check: 3 questions, one is "which of these 4 lines is a constraint?"',
      c1: 'How this runs and the day-one poll (15). Guess first: the bakery\'s plan, which month runs out of cash (5). The LP from scratch for anyone who has not met one: a 2-product mix on paper, by hand, then with Solver (30). Pairs: the bakery plan as an LP, with the 3 modelling rules from ANOP 102 assumed (20). Exit ticket.',
      c2: 'Model hygiene for finance: inputs, decisions and outputs on separate sheets, every rate named, every period a column (15). Pairs rebuild the bakery plan to the rules and add a borrowing line (35). Debrief: 2 models on the screen, the room finds the typed-in rate (15). Exit ticket, and the lab starts.',
      lab: 'Lab 1: the bakery\'s 6-month plan as an LP, to the rules, with the month it borrows and the 3 sentences to the owner.',
    },
    {
      w: 2, topic: 'Short-term financing',
      before: 'Read Winston and Albright on multi-period cash models (6 pages). Check: 3 questions, one is the cash balance identity.',
      c1: 'Guess first: a small manufacturer with a $100,000 credit line at 1% a month, a shortfall in months 2 to 4, a surplus after, and the option to delay suppliers at a 2% penalty. Borrow, invest or hold? (5). The balance identity, month by month, on the board (15). Pairs build it: 6 months, 3 decisions a month (40). Debrief: the month everyone got wrong (15).',
      c2: 'Solve it (10). What the optimum does that the guess did not (15). In threes, 3 variations: a cheaper line with a fee, a supplier who will not be delayed, a bonus month (35). Exit ticket. The lab starts (15).',
      lab: 'Lab 2: the manufacturer\'s 6-month cash plan, solved, with a chart of the balance and the 3 sentences.',
    },
    {
      w: 3, topic: 'Sensitivity analysis',
      before: 'Video (16 min): the Solver sensitivity report, line by line: shadow prices, reduced costs, allowable ranges. Check: 3 questions on a printed report.',
      c1: 'Guess first: what is 1 more dollar of credit line worth to the week 2 model? (5). The report generated and read, line by line, as sentences (25). Pairs: raise the line by $25,000, re-solve, and compare the gain with the shadow price (25). Debrief: when the shadow price stops being right, and the allowable range that said so (20).',
      c2: 'Reduced costs: the product you do not make and what its price would have to be (20). In threes, the bank\'s 3 offers, each priced with the report before re-solving, then checked (40). Exit ticket. The lab starts (15).',
      lab: 'Lab 3: What is an extra dollar of credit line worth? In full under Assignments.',
    },
    {
      w: 4, topic: 'Multi-period models',
      before: 'Read Benninga on bond basics (4 pages) and the Treasury yield page from last Friday. Check: 3 questions, one is a bond\'s cash flows written out.',
      c1: 'Guess first: a pension fund owes $1 million a year for 5 years; which bonds, and how many, at the lowest cost today? (5). Dedication: match every year\'s liability with coupons and principal, as constraints (20). Pairs build it with 6 Treasuries from the public price list (35). Debrief: the bond nobody bought, and its reduced cost (15).',
      c2: 'Reinvestment and the surplus that carries forward (15). In threes, the same fund with a 7th bond and a cash account (35). Teams form for the project, from a list I post (10). Exit ticket. The lab starts (15).',
      lab: 'Lab 4: the 5-year liability stream dedicated with 7 bonds and a cash account, with the report read and the 3 sentences to the trustees.',
      memo: 'Teams of 3 or 4 form.',
    },
    {
      w: 5, topic: 'Integer models',
      before: 'Video (14 min): when a decision is yes or no; binary variables; why integer models are harder. Check: 3 questions, one is a budget constraint with binaries.',
      c1: 'Guess first: 8 projects, a $5 million budget, which to fund? (5). The knapsack on paper, by hand, and why the greedy answer is wrong (20). Pairs: the capital budget with binary variables and Solver\'s integer option (30). Debrief: the project the greedy rule picked and the model dropped (20).',
      c2: 'Logical constraints: if A then B, at most 2 of these 3, either or (25). In threes, the capital budget with 3 such rules and a second year (35). Exit ticket. The lab starts (15).',
      lab: 'Lab 5: a 2-year capital budget with 10 projects, 3 logical constraints and the 3 sentences to the board, including which rule cost the most.',
    },
    {
      w: 6, topic: 'Accounting applications',
      before: 'Read the 2-page case: a 3-product plant with allocated overhead, and a manager who wants to drop the "unprofitable" product. Check: 3 questions, one is contribution margin from the case.',
      c1: 'Guess first: drop the product? (5). Contribution margin against allocated cost, on the board, with the case\'s numbers (20). Pairs: the product mix as an LP with the machine hours as constraints, and what happens to profit when the product is dropped (35). Debrief: the allocation that misled the manager, in 1 sentence (15).',
      c2: 'Transfer prices and the division that looks bad on paper (20). In threes, 3 decisions where allocated costs mislead, each modelled (35). Practice for the midterm: a formulation, on paper, timed, 15 minutes (15). Exit ticket.',
      lab: 'Lab 6: the 3-product plant: the mix, the dropped-product scenario, and a memo paragraph to the manager on what the allocation hid.',
      memo: 'The decision is due: 1 paragraph I sign off, with the public numbers it rests on.',
    },
    {
      w: 7, topic: 'Review and midterm',
      before: 'Nothing new. Read your labs 1 to 6 and the feedback on them.',
      c1: 'The practice case, timed, 60 minutes: formulate, solve, read, recommend (60). Marked together against the rubric (15).',
      c2: 'The midterm (75). The anonymous mid-term form and the week 13 vote go out the same evening.',
      lab: 'No lab. Office hours in the lab hour for anyone who wants the practice case again.',
    },
    {
      w: 8, topic: 'Nonlinear models',
      before: 'Video (18 min): return, variance and covariance; a portfolio\'s variance; Markowitz in plain words. Check: 3 questions, one is a 2-asset variance by hand.',
      c1: 'What the form said and what changes (10). Guess first: 2 stocks, one safe and one risky; what mix has the least risk? (5). Covariance from 5 years of monthly returns for 10 stocks, with the public file (20). Pairs: the minimum-variance portfolio with Solver\'s GRG engine (30). Debrief: the mix the room guessed and the mix Solver found (10).',
      c2: 'Target return as a constraint, and the portfolio that meets it at least risk (20). Short sales allowed and not, and what the constraint costs (20). In threes, 3 investors with 3 targets (25). Exit ticket. The lab starts (10).',
      lab: 'Lab 8: the 10-stock minimum-variance portfolio at 3 target returns, long only, with the covariance matrix built from the public file and the 3 sentences to the client.',
    },
    {
      w: 9, topic: 'The efficient frontier',
      before: 'Read Benninga on the efficient frontier (6 pages). Check: 3 questions, one is reading a frontier chart.',
      c1: 'Guess first: where on the frontier does a 30-year-old sit, and where a 65-year-old? (5). The frontier traced with 10 Solver runs and a chart (30). The constraints real investors face: position limits, sectors, turnover, and what each does to the frontier (25). Debrief: the constraint that cost the most return (15).',
      c2: 'Index tracking: the 10 stocks that follow an index best, as a minimisation of tracking error (30). In threes, a mandate with 3 constraints, built and charted against the unconstrained frontier (30). Exit ticket. The lab starts (15).',
      lab: 'Lab 9: the frontier with and without a 20% position limit, charted, and a tracking portfolio for an index, with the 3 sentences to the investment committee.',
    },
    {
      w: 10, topic: 'Monte Carlo fundamentals',
      before: 'Video (16 min): a random draw, a distribution, the law of large numbers, and the standard error of a simulated mean. Check: 3 questions, one is how many more draws halve the error.',
      c1: 'Guess first: a project with 3 uncertain inputs; what is the chance it loses money? (5). RAND and NORM.INV, and a Data Table that runs the model 1,000 times (25). Pairs: the project simulated, the histogram, the chance of a loss (30). Debrief: how the answer moved between 100, 1,000 and 10,000 runs, and the standard error that predicted it (15).',
      c2: 'Choosing a distribution: what the data says, and the 3 you will use most (20). Correlated inputs, and the simulation that ignored them (20). Model reviews: 20 minutes a team with me, the model open, while the rest of the class works on the lab (35).',
      lab: 'Lab 10: a capital project with 3 uncertain inputs, 2 of them correlated, simulated 5,000 times, with the chance of a loss, its standard error, and the 3 sentences to the CFO.',
      memo: 'The model review: 20 minutes with me, the sensitivity or simulation output on the screen.',
    },
    {
      w: 11, topic: 'Risk management',
      before: 'Video (15 min): value at risk, in words and as a percentile; historical and simulated. Check: 3 questions, one is reading a 5% VaR off a histogram.',
      c1: 'Guess first: the week 8 portfolio, $1 million invested; how much could it lose in a bad month? (5). Historical VaR from the 60 months (20). Simulated VaR with the covariance matrix (25). Debrief: the 2 numbers disagree, and which to believe (25).',
      c2: 'Expected shortfall, and why the regulators moved to it (15). In threes, 3 portfolios and their VaR at 2 horizons (35). The VaR that was wrong in 2008, in 1 chart (10). Exit ticket. The lab starts (15).',
      lab: 'Lab 11: VaR and expected shortfall for the week 8 portfolio, historical and simulated, at 1 month and 1 year, with the 3 sentences to the risk committee.',
    },
    {
      w: 12, topic: 'Pricing derivatives',
      before: 'Video (18 min): a call option\'s payoff, a stock path, and why the average payoff is a price. Read: the "price an option by simulation" class on the course page. Check: 3 questions, one is a payoff at expiry.',
      c1: 'Guess first: a call on a $100 stock, strike $100, 1 year, 20% volatility, 5% rates; worth more or less than $10? (5). Try the class: simulate paths, average the payoffs, watch the estimate close in on Black-Scholes (the demo from the course page) (20). Pairs build it: 1,000 paths, the discounted average, the standard error (30). Debrief: the runs it takes to get within 10 cents (20).',
      c2: 'Black-Scholes in a cell, and put-call parity as the check (20). A path-dependent option: an Asian call, which no formula prices, by the same method (35). Exit ticket. The lab starts (20).',
      lab: 'Lab 12: the European call checked against Black-Scholes, then an Asian call priced the same way, with the standard error and the 3 sentences to the treasurer on what the check proves.',
    },
    {
      w: 13, topic: 'Hedging',
      before: 'Read the 2-page case: a Canadian exporter owed $2 million US in 6 months. The Fed H.10 rate history for the last 5 years. Check: 3 questions, one is the payoff of a forward.',
      c1: 'Guess first: hedge with a forward, a put, or not at all? (5). The 3 outcomes drawn by hand for 3 exchange rates (15). Pairs: the exposure simulated 5,000 times under each choice, with the histogram of the 6-month cash flow (40). Debrief: the choice each pair would make, and for which treasurer (15).',
      c2: 'The topic the class voted for in week 7: foreign exchange continued, or a commodity hedge, same method (40). Dry runs: each team presents for 8 minutes to another team, which marks it on the rubric (35).',
      lab: 'Lab 13: the exporter\'s 3 choices simulated and compared, with the 3 sentences to the treasurer that name which risk each choice removes and which it leaves.',
    },
    {
      w: 14, topic: 'Project presentations',
      before: 'Nothing. Sleep.',
      c1: 'Presentations: 8 minutes a team and 4 of questions. The room marks the presentation row; I mark the rest. Slides go up the evening before.',
      c2: 'The rest of the presentations, then the memo and the workbook handed in by midnight, and the peer evaluation in private.',
      lab: 'No lab. Office hours for the final.',
      memo: 'The memo, the workbook, 1 slide per member, and the peer evaluation.',
    },
  ],
  labs: [
    { n: 1, title: 'The bakery\'s 6 months', due: 'before week 2', prompt: 'The bakery\'s 6-month plan as an LP, to the modelling rules, with a borrowing line: the month it borrows, how much, and the 3 sentences to the owner.', handIn: 'The workbook, with the 3 sentences on the inputs sheet. The chat, if you used an AI tool.', passes: 'Inputs, decisions and outputs on separate sheets; every rate named; Solver finds the plan; the 3 sentences name the month and the amount.' },
    { n: 2, title: 'Borrow, invest or hold', due: 'before week 3', prompt: 'The manufacturer\'s 6-month cash plan with a credit line, a supplier-delay option and a surplus to invest. Solve it, chart the balance, and tell the owner what to do in 3 sentences.', handIn: 'The workbook with the chart and the 3 sentences.', passes: 'The balance identity holds every month; the optimum beats the guess and the 3 sentences say by how much; the penalty is used only when the model says so.' },
    { n: 3, title: 'What is an extra dollar of credit line worth?', due: 'before week 4', prompt: 'The week 2 model with the credit line as an input; the shadow price and its range; the $25,000 offer taken or left. In full under Assignments.', handIn: 'The workbook with the sensitivity report pasted in and the 3 sentences.', passes: '6 of 8 on the rubric, no row at 0.' },
    { n: 4, title: 'Dedicate the liabilities', due: 'before week 5', prompt: 'A 5-year liability stream met with 7 Treasuries and a cash account, from the public price list, at the lowest cost today.', handIn: 'The workbook with the report and the 3 sentences to the trustees.', passes: 'Every year\'s liability covered by coupons, principal and cash; the cheapest set found; the bond not bought explained by its reduced cost.' },
    { n: 5, title: 'The 2-year capital budget', due: 'before week 6', prompt: '10 projects, 2 years, a budget each year, and 3 logical rules (if A then B; at most 2 of 3; either or). Which to fund, and which rule cost the most.', handIn: 'The workbook and the 3 sentences to the board.', passes: 'Binaries used for every project; the 3 rules written as constraints that work; the cost of each rule found by re-solving without it.' },
    { n: 6, title: 'The product the manager wanted to drop', due: 'before week 7', prompt: 'The 3-product plant: the optimal mix, profit with and without the "unprofitable" product, and a paragraph to the manager on what the overhead allocation hid.', handIn: 'The workbook with the paragraph on the inputs sheet.', passes: 'The mix uses contribution margins; the dropped-product scenario is solved and compared; the paragraph names the allocation and its effect in dollars.' },
    { n: 8, title: 'Three investors, one frontier', due: 'before week 9', prompt: 'The 10-stock minimum-variance portfolio at 3 target returns, long only, with the covariance matrix built from the public return file.', handIn: 'The workbook and the 3 sentences to the client.', passes: 'Covariances computed from the file; the GRG solver finds each portfolio; the 3 weights add to 1 with no shorts; the sentences say what the extra return costs in risk.' },
    { n: 9, title: 'The constraint that cost the most', due: 'before week 10', prompt: 'The frontier with and without a 20% position limit, charted together, and a tracking portfolio for an index.', handIn: 'The workbook with the chart and the 3 sentences to the investment committee.', passes: 'Both frontiers traced from at least 8 points; the gap read in return at a fixed risk; the tracking error defined and minimised.' },
    { n: 10, title: 'The chance of a loss', due: 'before week 11', prompt: 'A capital project with 3 uncertain inputs, 2 of them correlated, simulated 5,000 times. The chance of a loss, its standard error, and what the correlation did to the answer.', handIn: 'The workbook with the histogram and the 3 sentences to the CFO.', passes: 'Distributions chosen with a reason each; the correlation built in and its effect shown; the standard error reported and read.' },
    { n: 11, title: 'How much could it lose?', due: 'before week 12', prompt: 'VaR and expected shortfall for the week 8 portfolio, historical and simulated, at 1 month and 1 year.', handIn: 'The workbook and the 3 sentences to the risk committee.', passes: 'Both methods right; the 2 answers compared and the difference explained; the horizon scaling done and defended.' },
    { n: 12, title: 'Check it, then price what has no formula', due: 'before week 13', prompt: 'The European call by simulation checked against Black-Scholes and put-call parity, then an Asian call priced the same way.', handIn: 'The workbook with the standard errors and the 3 sentences to the treasurer.', passes: 'The simulated price within 2 standard errors of Black-Scholes; parity holds; the Asian call priced with its error reported.' },
    { n: 13, title: 'Forward, put, or nothing', due: 'before week 14', prompt: 'The exporter\'s $2 million US in 6 months under 3 choices, simulated 5,000 times from the H.10 history.', handIn: 'The workbook with the 3 histograms and the 3 sentences to the treasurer.', passes: 'Each choice\'s cash flow right in all 3 rate scenarios; the histograms compared on the same axis; the sentences name the risk each choice removes and the one it leaves.' },
  ],
  labsNote: 'Every lab is marked pass or redo on 4 rubric rows out of 8, and passes at 6 with no row at 0. Lab 3 is shown in full below with its rubric; the others are the same shape. Every lab ends with 3 sentences to the person who decides.',
  assignments: [a302[0], midterm, project],
  exam: {
    title: 'A sample final',
    meta: 'Final · 15% · on paper · 2 hours, or 3 if the class chose 3 on day one · portfolios, risk and simulation',
    rules: [
      'Attempt up to 30 marks. If you attempt more, only the first 30 count.',
      'Show your work. A number with no sentence after it is half a number.',
      'You may have a pen, a calculator and this paper. The charts and reports you need are printed on it.',
      'Each question names the outcome it tests, from the syllabus.',
      'Best of luck. Every chart on this paper is one you built in a lab.',
    ],
    note: 'This paper goes out in week 12. Do any 3 questions and hand them in with lab 12; I mark them for feedback, and it is the closest thing to a mock exam the course has.',
    questions: [
      {
        tag: 'O3 · Portfolios',
        text: 'Two stocks: A returns 6% a year with a standard deviation of 10%, B returns 12% with 25%, and their correlation is 0.2. A client has $500,000.',
        parts: [
          { text: 'The return and standard deviation of a 50/50 mix. Show the variance arithmetic.', marks: 2 },
          { text: 'Would the minimum-variance mix hold more or less of B than 50%? Say why without solving.', marks: 1 },
          { text: 'The client wants 9% a year. Write the Solver set-up: variables, objective, constraints.', marks: 2 },
        ],
      },
      {
        tag: 'O3 · The frontier',
        text: 'Two efficient frontiers are printed below for the same 10 stocks, one unconstrained and one with a 20% position limit, with a 65-year-old client\'s current portfolio marked as a point under both.',
        parts: [
          { text: 'Read the return the limit costs at the client\'s level of risk.', marks: 1 },
          { text: 'The client\'s point sits below both frontiers. Say what that means and the 2 things it could be.', marks: 2 },
          { text: 'Welcome to the investment committee. Your manager hears you took ANOP 302 and asks whether to drop the 20% limit. Answer in 3 sentences, with what would change your answer.', marks: 2 },
        ],
      },
      {
        tag: 'O3 · Value at risk',
        text: 'A histogram of 5,000 simulated 1-month returns for a $1 million portfolio is printed below, with the 5th percentile at a loss of $62,000 and the average loss beyond it at $88,000. The historical 5% VaR from the last 60 months is $41,000.',
        parts: [
          { text: 'State the 1-month 5% VaR and the expected shortfall, as sentences a risk committee would use.', marks: 2 },
          { text: 'Give 2 reasons the simulated and historical numbers disagree, and say which you would report.', marks: 2 },
          { text: 'Roughly, the 1-year VaR, and the assumption that scaling leans on.', marks: 1 },
        ],
      },
      {
        tag: 'O4 · Simulation',
        text: 'A capital project was simulated 1,000 times: the chance of a loss came out at 18%, and a second run of 1,000 gave 21%.',
        parts: [
          { text: 'The standard error of a proportion near 0.2 from 1,000 runs, and whether the 2 runs disagree.', marks: 2 },
          { text: 'How many runs to get the error under 0.5 of a percentage point?', marks: 1 },
          { text: 'The 3 inputs were simulated as independent; 2 of them move together. Which way does the chance of a loss move when that is fixed, and why?', marks: 2 },
        ],
      },
      {
        tag: 'O4 · Pricing',
        text: 'A call on a $100 stock, strike $100, 1 year, 20% volatility, 5% rates. Black-Scholes gives $10.45. Your simulation of 2,000 paths gives $10.90 with a standard error of $0.35.',
        parts: [
          { text: 'Is the simulation consistent with the formula? Show the test.', marks: 1 },
          { text: 'Write the steps of the simulation: the path, the payoff, the discount, the average, in order.', marks: 2 },
          { text: 'The treasurer asks why you bother simulating when the formula exists. Answer in 2 sentences, naming the option from week 12 that has no formula.', marks: 1 },
          { text: 'The put with the same strike and expiry: its price from parity, with the arithmetic.', marks: 1 },
        ],
      },
      {
        tag: 'O4 · Hedging',
        text: 'A Canadian exporter is owed $2 million US in 6 months. Three histograms of the 6-month cash flow in Canadian dollars are printed below: unhedged, a forward at 1.36, and a put with a strike of 1.34 costing 2 cents a dollar.',
        parts: [
          { text: 'Read the worst case and the best case of each choice off the histograms.', marks: 2 },
          { text: 'Which choice would a treasurer who must make payroll pick, and which would one who is paid on upside pick? A sentence each.', marks: 2 },
          { text: 'You have run a hipster coffee importer on the side, against my advice, and it owes euros in 6 months. Which of the 3 choices changes, and why?', marks: 1 },
        ],
      },
      {
        tag: 'O5 · The recommendation',
        text: 'A 2-page memo is printed below. It recommends that a company fund 6 of its 10 projects, based on a model whose optimum is 7, and its first paragraph gives no number, no date and no condition.',
        parts: [
          { text: 'Find the contradiction between the memo and its model.', marks: 1 },
          { text: 'Rewrite the first paragraph so that a CFO could act on it: what to do, by when, what it is worth, and what would change it.', marks: 2 },
          { text: 'Name the 1 sensitivity the writer should have run before sending it.', marks: 1 },
        ],
      },
    ],
  },
};
