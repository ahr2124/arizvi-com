// The ANOP 330 course pack. The course page shows the term and 2 assignments; this is all of it.
import type { Pack } from './types';
import type { Assignment } from '../assignments';
import { a330 } from '../assignments';
import type { Criterion } from '../../components/Assignment.astro';

const L = (a: [number, string], b: [number, string], c: [number, string]): Criterion['levels'] => [{ pts: a[0], text: a[1] }, { pts: b[0], text: b[1] }, { pts: c[0], text: c[1] }];

const pitch: Assignment = {
  title: 'The pitch video',
  meta: 'Project, piece 1 · 2 of the 30 · week 4 · individual · 2 minutes',
  prompt: [
    'Each member records a 2-minute selfie-style video pitching a decision a model could change. Phone camera, 1 take, no editing; the idea is what I mark. Teams form in week 4 and pick from the pitches I recommended, so bring one worth picking.',
    'I mark each pitch on a reviewer scale and write 1 line of recommendation: strong accept, accept, weak accept, weak reject, reject. You don\'t have to tell your team your mark, only whether I recommended it.',
  ],
  stepsLabel: 'Say, in this order',
  steps: [
    'The decision: who makes it, how often, and what they do today without a model.',
    'What the model would predict, and when it would have to know.',
    'The data: where it is, roughly how many rows, and whether we can get it by week 6.',
    'What a wrong prediction costs, in each direction.',
    'Why you: what you know about this business that the rest of us don\'t.',
  ],
  rubric: [
    { name: 'The decision', levels: L([1, 'A named decider and options that differ. Acting on the prediction changes something.'], [0.5, 'A prediction with no decision behind it.'], [0, 'A topic.']) },
    { name: 'The data and the costs', levels: L([1, 'Data we can get by week 6, and a cost for each kind of mistake.'], [0.5, 'Data that might exist; costs guessed at.'], [0, 'Neither.']) },
  ],
  rubricLabel: 'Marked out of 2, with a recommendation on the reviewer scale',
  note: 'Strong accept 2 · accept 1.5 · weak accept 1 · weak reject 0.5 · reject 0. A team needs 2 recommended pitches to choose between; a team with none picks from my list of public-data decisions.',
};

const midterm: Assignment = {
  title: 'The midterm notebook',
  meta: 'Midterm · 20% · week 7 · 2 timed hours in a booked room, or a 24-hour take-home',
  prompt: [
    'A dataset you haven\'t seen, a decision it could inform, and a notebook with 5 empty sections. You fill them in 2 hours with the course notebooks and the scikit-learn docs open and nothing else. It covers weeks 1 to 6.',
    '2 timed hours in a booked room or a 24-hour take-home: the class chose on day one. Either way it\'s your own work, and the notebook has to run top to bottom.',
  ],
  stepsLabel: 'The 5 sections, every time',
  steps: [
    'Frame it: what\'s predicted, when it must be known, and what the baseline predicts.',
    'Prepare it: the holdout set aside first, and the 2 features you dropped for leakage, with why.',
    'Fit 2 models and cross-validate them.',
    'Pick one, score it once on the holdout, and read its confusion matrix.',
    'Tell the decision-maker, in a paragraph, what it predicts, how often it\'s wrong, and whether to use it.',
  ],
  rubric: [
    { name: 'Framing and baseline', levels: L([4, 'A decision, a time the prediction is needed, and a baseline error to beat.'], [2, 'A prediction without the decision, or no baseline.'], [0, 'Straight to model.fit().']) },
    { name: 'Holdout and leakage', levels: L([4, 'Holdout from a later period, set aside first; the leaking features found and named.'], [2, 'A random split, or 1 leak missed.'], [0, 'The holdout used for fitting.']) },
    { name: 'Models and validation', levels: L([4, '2 models cross-validated; the pick made on CV error.'], [2, 'Validated once, or picked on training error.'], [0, 'No validation.']) },
    { name: 'The read', levels: L([4, 'The confusion matrix read as costs; the holdout scored once.'], [2, 'Accuracy only.'], [0, 'Not scored on the holdout.']) },
    { name: 'The paragraph and the code', levels: L([4, 'A decision-maker could act on it; the notebook runs top to bottom.'], [2, 'Technical but complete, or runs with a fix.'], [0, 'Missing or does not run.']) },
  ],
  note: 'Marked within a week, with my own notebook on the same data posted as the answer key. Grades are final a week after they come back.',
};

const paper: Assignment = {
  title: 'The paper report',
  meta: 'Lab 11 · pass or redo · due before week 13 · individual · 3 to 5 minutes',
  prompt: [
    'Pick 1 of 2 kinds of thing: a research paper from the last 3 years that applies a model to a business decision, or a write-up by a company of a model it has deployed (engineering blogs are full of them). Email me the title by week 10; no 2 people do the same one, so pick quickly.',
    'Make a 3-to-5-minute video with 5 to 10 slides. Pick a concentration: research (what the work adds, what came before, the method, its limits, where it goes next) or industry (what decision it feeds, what it replaced, what it cost to run, what you would copy and what you wouldn\'t). Both cover the contribution, the method and the data.',
  ],
  handIn: ['The video link and the slides as a PDF.', 'The title you were approved for, in the first slide.'],
  rubric: [
    { name: 'The read', levels: L([2, 'You can say what the model predicts, on what data, and how it was validated.'], [1, 'The abstract, retold.'], [0, 'Could have been written from the title.']) },
    { name: 'The judgment', levels: L([2, 'Research: a limit the authors did not state. Industry: a thing you would not copy, and why.'], [1, 'Strengths only.'], [0, 'No view.']) },
    { name: 'The connection', levels: L([2, 'Ties it to a week of the course and to the decision it feeds.'], [1, 'One of the 2.'], [0, 'Neither.']) },
    { name: 'The video', levels: L([2, 'In the time; clear; 5 to 10 slides that carry numbers.'], [1, 'Over or under time, or slides of prose.'], [0, 'Hard to follow.']) },
  ],
  note: 'Passes at 6 of 8 with no row at 0, like every lab. The best 3 go up on the course site, with permission, for next year.',
};

const card: Assignment = {
  title: 'The model card',
  meta: 'Model card · 5% · week 12 · 1 page · with the project model',
  prompt: [
    "One page that travels with the model. If someone picks up your model in 2 years, this is the page that stops them using it for the wrong thing. It's also the week 12 lab.",
  ],
  stepsLabel: 'The 8 headings',
  steps: [
    'What it predicts, for whom, and the decision it feeds.',
    'The data: source, period, rows, and what was dropped.',
    'The features, and the 2 that matter most.',
    'How it was validated, and the held-out error.',
    'The cutoff, and the cost of each kind of mistake that chose it.',
    'Where it fails: the groups or periods it\'s worse on.',
    'Who is harmed when it\'s wrong, and who signs off before it acts.',
    'Where AI tools were used in building it, and when to retrain.',
  ],
  rubric: [
    { name: 'Complete and honest', levels: L([3, 'All 8 headings, with numbers; the failure modes are specific.'], [2, '6 or 7, or the failures vague.'], [0, 'A description of the method.']) },
    { name: 'Fit for a stranger', levels: L([2, 'Someone who has never seen the notebook could decide whether to use the model.'], [1, 'They would have to ask.'], [0, 'Only the team could read it.']) },
  ],
};

export const pack: Pack = {
  slug: 'anop-330',
  code: 'ANOP 330',
  title: 'ANOP 330, in full',
  standing: "ANOP 330 already runs in the department, and whatever outline it runs on comes first. This is a term as I'd plan it if asked: every week, every lab with what passes, the project in pieces, the rubrics up front and a sample of the final. Where the department's outline covers the same week, the class and the lab drop in as they're.",
  description: [
    'The course teaches students to build a model that would change a decision, to validate it on data it never saw, to choose its cutoff by what mistakes cost, and to say who signs off before it acts. By week 14 every team has done all of that for a real organization, or for public data where we couldn\'t get one.',
    "What's in the pack: the syllabus, all 14 weeks (before class, both classes with timings, the lab), the 10 labs with what passes, the midterm, the project in 4 pieces, the paper report, the model card, and a sample final on paper.",
  ],
  outcomes: [
    { id: 'O1', text: 'Frame a prediction as a decision: what\'s predicted, when it must be known, and what changes if it\'s right or wrong.' },
    { id: 'O2', text: 'Prepare data without leakage: features that exist at decision time, and a holdout from a later period, set aside first.' },
    { id: 'O3', text: 'Fit and validate regression, logistic regression, trees and ensembles, with cross-validation, against a baseline you show.' },
    { id: 'O4', text: 'Judge a classifier by cost: the confusion matrix, precision and recall, a cutoff chosen on held-out data, and uplift.' },
    { id: 'O5', text: 'Find groups without labels with k-means, choose k, and say in words what each group is.' },
    { id: 'O6', text: 'Say who\'s harmed when a model is wrong, what a person signs off on, and when to stop trusting it.' },
    { id: 'O7', text: 'Pitch a model to a decision-maker: what it predicts, what acting on it costs, and when to retrain it.' },
  ],
  runs: [
    ['Format', '14 weeks · 2 classes of 75 minutes a week · a weekly lab started in class 2 and finished on your own'],
    ['Before class', 'A 10-to-20-minute video or reading and a 3-question check that closes when class starts. The check usually includes 5 lines of code with a bug in them; class starts from the bug most people missed.'],
    ['In class', 'Notebooks open, in pairs or threes, in timed steps. Every model gets built 3 ways in the room: on paper first, then as a baseline, then with scikit-learn. Each class 2 ends with an exit ticket, 2 sentences on paper, which is the first cell of that week\'s lab.'],
    ['The lab', 'One a week, started in class 2 and finished on your own, on a public dataset or one of the course\'s 2 running cases (an ice-cream stand, a subscription business). A TA help hour each week for anyone who wants it. Due before the next week\'s class 1.'],
    ['Hand-in format', 'The notebook and its PDF export. It runs top to bottom in under a minute after Restart and run all. A heading per question (# Q1, # Q2). Follow every number with a sentence in English that says what it means; a bare number gets half marks.'],
    ['Tools', 'Python in Jupyter: pandas and scikit-learn, with matplotlib for the pictures. ANOP 203 is the prerequisite, so code from week 1. GitHub for the project, with the organization\'s say-so where there\'s one.'],
    ['Text', "The department's text where there's one. Otherwise Géron, Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, as an optional reference; we use its first 9 chapters."],
    ['Help', '2 office hours a week, 1 in the office and 1 on Zoom. Course questions go on the forum so the answer helps everyone. A practitioner guest in week 10 where I can get one; questions for the guest are collected the week before in a shared sheet.'],
    ['Day one', "I ask the class how it wants to be graded. The weights are fixed. What's open: whether the midterm is 2 timed hours in the lab or a 24-hour take-home, and whether the class wants week 11 on LLMs in the workflow (my pick) or on time series. In week 7 an anonymous form asks what to change, and I change it."],
  ],
  grading: [
    ['Weekly labs', '30%', '10 labs (weeks 1 to 6 and 8 to 11), marked pass or redo on a rubric you see before you start. A lab that doesn\'t pass comes back within a week with feedback, and you resubmit until it does, up to the last day of week 13. Each lab passed is worth 3 of the 30.'],
    ['Midterm', '20%', 'Week 7: a timed notebook on a dataset you haven\'t seen, 2 hours. Rubric below.'],
    ['Team project', '30%', 'Teams of 3 or 4 from week 4. The pitch video (2), the charter (4), a first model against a baseline (4), and the final notebook, memo and 8-minute pitch (20, rubric below). Peer evaluation moves each member\'s share of the 20 by up to 2.'],
    ['Final', '15%', 'On paper, 2 hours. Model outputs are printed and you read them and decide. Attempt up to 30 marks. Sample below.'],
    ['Model card', '5%', 'Week 12. 1 page that travels with the project model. Rubric below.'],
  ],
  policies: [
    {
      title: 'Pass or redo',
      body: [
        'Labs are satisfactory or they come back. A lab passes at 6 of its 8 rubric points with no row at 0. Anything else comes back with feedback within a week, and you resubmit until it passes, until the last day of week 13. Full marks for every lab you bring to a pass.',
        'The midterm and the final are where I find out whether the method stuck, so they\'re marked on points.',
      ],
    },
    {
      title: 'Late work',
      body: [
        '5 late days for the term, spent on labs 1 day at a time, no reason needed; weekends and holidays don\'t count. They cover labs only; the project pieces, the midterm, the model card and the final have fixed dates.',
        'A lab handed in late with no late day left is a 0. Extensions beyond that are for illness or a family emergency, with a note from the appropriate office. A notebook that won\'t run on the day isn\'t an extension; commit early.',
      ],
    },
    {
      title: 'Working together',
      body: [
        'Discuss every lab with anyone, at the level of pseudocode and ideas. Your notebook may not contain another person\'s code, from a classmate, a book or a website, beyond the course notebooks and the library docs. If Dana sends Omar her cell for the cross-validation loop and Omar pastes it, both have broken the rule.',
        'Talk at a whiteboard, nobody writes anything down, erase it, then write your own. Name everyone you talked to in the first cell of the lab, and sign the line under it: this is my work, except as stated above.',
      ],
    },
    {
      title: 'AI tools',
      body: [
        'Allowed for code and debugging. Hand in the prompts with the notebook, and say in the model card where AI was used. Off limits: the paragraphs that say what the numbers mean, which are the part I\'m marking. No AI in the midterm or the final.',
      ],
    },
    {
      title: 'Data',
      body: [
        'Project data from an organization comes with a 1-page data agreement: what the team gets, who may see it, what the team keeps and may show afterwards. Customer IDs are replaced before the file reaches the team. Nothing from an organization\'s file goes into a chatbot unless the agreement says it can.',
      ],
    },
    {
      title: 'Marks and attendance',
      body: [
        'Labs and the midterm are marked within a week. Grades are final 1 week after the work comes back; if a mark looks wrong, email me inside that week with the cell you mean. Class exercises are done in the room; if you miss a class, do the exit ticket from the slides before the lab.',
      ],
    },
  ],
  weeks: [
    {
      w: 1, topic: 'Framing a prediction',
      before: 'Video (14 min): what a model is for, and the 3 questions to ask before fitting one. Read the 1-page case: a subscription business with 1,000 customers, 100 of whom cancel next month. Check: 3 questions, one is 5 lines of pandas with a bug.',
      c1: 'Who I am, how this runs, and the day-one poll on grading (15). Model in a day, in threes: the decision the subscription business faces (10); what we would do differently with a perfect prediction (10); what we would need to know, and by when (10); pandas refresher on the customer table: load, describe, group (20); the first split, and why it comes before anything else (10).',
      c2: 'Could we know it in time? 12 features on cards, sorted into "known at decision time" and "not", with the arguments (20). Baselines: predict the majority, predict the mean, predict last month, and their errors (20). Pairs: a first model on the ice-cream stand data against its baseline (25). Exit ticket: the decision your model would change, in 1 sentence.',
      lab: 'Lab 1: the ice-cream stand, 180 days. Frame it, split it, build the baseline and 1 model, and write the paragraph.',
      memo: 'Each student writes 1 sentence: a decision a model could change, who makes it, and the data it would need. It becomes the pitch in week 4.',
    },
    {
      w: 2, topic: 'Data preparation and leakage',
      before: 'Video (16 min): missing values, categories, scaling, and the feature that knows the future. Check: 3 questions, one is "which of these 4 columns leaks?"',
      c1: 'The leak hunt: a notebook with 98% accuracy on the subscription data, on everyone\'s screen (5). In threes, find out why (20). The 4 ways a feature leaks: it\'s the label in disguise, it\'s set after the decision, it\'s only filled in for one class, it comes from the holdout (20). Fix the notebook and watch the accuracy fall to something true (20). Debrief: which leak each team found first (10).',
      c2: 'Preparation in pairs: missing values 3 ways, one-hot encoding, scaling, and when each matters (30). The pipeline: fit the preparation on the training data only, and why (20). Build a Pipeline object that does it right (20). Exit ticket: the feature you would ask the business about before using it.',
      lab: 'Lab 2: a customer table with 3 leaks hidden in it. Find them, build the pipeline, and show the before and after accuracy.',
    },
    {
      w: 3, topic: 'Regression, revisited',
      before: 'Video (18 min): linear regression with many features; coefficients, their units, and what they do and don\'t mean. Check: 3 questions, one asks what a coefficient of 12.4 means in a sentence.',
      c1: 'Ames housing, 80 features, on everyone\'s screen (5). Pairs fit a line with 1 feature, then 5, then 40, and watch the training error fall (20). Reading coefficients as sentences, and the 2 that make no sense (20). Correlated features and the coefficient that flips sign (15). Debrief: reading it and predicting with it are different jobs, with the evidence from the room (15).',
      c2: 'Residuals: plot them, read them, and the pattern that says the line is wrong (20). Transformations: the log of a price (15). In threes, the 3 questions a realtor would ask, each answered from the model with a sentence and a caveat (30). Exit ticket: the 1 coefficient you would never quote to a client, and why.',
      lab: 'Lab 3: Ames housing. A model to predict sale price for a realtor, with the 5 coefficients she can quote and the 3 she can\'t, and the residual plot that says where the model is wrong.',
    },
    {
      w: 4, topic: 'Overfitting and cross-validation',
      before: 'Video (15 min): training error and test error part ways; k-fold cross-validation. Check: 3 questions, one is reading a table of train and test errors by degree. The written-up class on the course page is for after class 1; the drawer is the lesson.',
      c1: 'Try the class: the ice-cream stand, 16 days on the chart and 8 in the drawer (the demo from the course page) (20). Pairs fit degree 1 to 10 and pick by the error on the days they can see, then open the drawer (20). 5-fold cross-validation, built by hand with a loop before cross_val_score (25). Debrief: the degree the room picked before and after (10).',
      c2: 'Model selection with CV in pairs: 3 models, 5 folds, 1 table (25). The holdout that stays shut until the end, and the 1 time you open it (10). Regularisation in plain words: ridge and lasso as a tax on coefficients (20). Teams form, from the pitches I recommended (20). Exit ticket: the CV error of your pick and what it would be on a bad fold.',
      lab: 'Lab 4: Hold it out. In full under Assignments.',
      memo: 'The pitch video is due before class 1. Teams of 3 or 4 form in class 2 from the recommended pitches.',
    },
    {
      w: 5, topic: 'Logistic regression',
      before: 'Video (16 min): a probability instead of a label; the sigmoid; the confusion matrix. Check: 3 questions, one is filling a 2 by 2 matrix from 10 predictions.',
      c1: 'The subscription business again: predict who cancels (5). Pairs fit logistic regression and look at predict_proba before predict (20). The confusion matrix on paper, from 20 customers, by hand (15). Precision and recall as sentences a manager would say (15). Debrief: the customer with a 0.49 and the one with 0.51 (10). Odds ratios, and the coefficient read as "each extra support ticket multiplies the odds by 1.3" (10).',
      c2: 'The cost of each cell: what a missed canceller costs and what a wasted offer costs, on the board (15). In threes, 3 businesses, 3 cost matrices, and which cell each business fears (30). Calibration: are the 0.7s right 70% of the time? A reliability plot (20). Exit ticket: your business\'s expensive cell.',
      lab: 'Lab 5: the IBM Telco churn data, 7,000 customers. Logistic regression, the confusion matrix at the default cutoff, and the paragraph on what each cell costs the company.',
      memo: 'The charter is due: the decision, the cost of each kind of mistake, the data and the held-out plan. 4 of the 30.',
    },
    {
      w: 6, topic: 'Decision trees',
      before: 'Video (14 min): how a tree splits, impurity in plain words, depth. Check: 3 questions, one is following a printed tree to a leaf.',
      c1: 'Low-fi first: in threes, draw a tree on paper with 3 splits for the churn data, from the summary table alone (20). Fit one with depth 3 and compare it with the drawings (15). Depth 3, 6, 12, and the CV error at each (20). Debrief: the depth where the tree stops being a model a manager can read (10). The tree printed as rules, read out loud (10).',
      c2: 'Trees for the realtor: the Ames tree against the week 3 line, on CV (25). Where trees win (interactions, thresholds) and where they lose (smooth trends, extrapolation) (20). In pairs, the 1 rule from your tree you would put in the staff handbook (20). Exit ticket: the split at the root of your tree, as a sentence.',
      lab: 'Lab 6: Telco churn as a tree. Depth chosen by CV, the tree printed as rules, and the 3 rules the retention team could act on tomorrow.',
    },
    {
      w: 7, topic: 'Ensembles',
      before: 'Video (18 min): many trees; random forests average, gradient boosting corrects. Check: 3 questions, one is "which of these 2 models overfits more at depth 20?"',
      c1: 'What the week 7 form will ask, and the vote on week 11 (10). Random forests in pairs: 10 trees, 100, 500, and the CV error curve (25). Feature importance and its traps: the correlated pair that splits the credit (20). Gradient boosting: small trees, one at a time, each fixing what the last ones missed; the learning rate as a dial (20).',
      c2: 'Review for the midterm: the 5 sections on a fresh dataset, in pairs, timed, 50 minutes (50). Marked together against the rubric (25). The anonymous form goes out the same evening.',
      lab: 'The midterm: a timed notebook, 2 hours, in a booked room, or the 24-hour take-home if the class chose that. Covers weeks 1 to 6.',
    },
    {
      w: 8, topic: 'Evaluation and thresholds',
      before: 'Video (16 min): the cutoff as a business choice; precision-recall curves; uplift in plain words. Check: 3 questions, one is picking a cutoff from a cost table.',
      c1: 'What the form said and what changes (10). Try the class: the most accurate cutoff earns nothing. 1,000 customers, 100 about to cancel, a $20 offer worth $200 (the demo from the course page) (20). Pairs find the cutoff that makes the most money on held-out data, then on the training data, and see the difference (25). The precision-recall curve as a menu of cutoffs (10). Debrief: why accuracy was the wrong yardstick all along (10).',
      c2: 'Uplift: the customers an offer would change, against the ones who would stay anyway or leave anyway (20). In threes, a retention budget of $2,000 and a ranked list: who gets it (25). The ROC curve and when it misleads with rare events (15). Exit ticket: your cutoff, in dollars.',
      lab: 'Lab 8: Telco churn with a cost matrix from the case. The cutoff chosen on held-out data, the money it makes against the default cutoff, and the ranked call list for a $2,000 budget.',
    },
    {
      w: 9, topic: 'Clustering',
      before: 'Video (15 min): k-means, choosing k, and why a cluster is a question. Check: 3 questions, one is reading an elbow plot.',
      c1: 'Online Retail II, 2 years of orders from a UK gift retailer, on everyone\'s screen (5). Recency, frequency and money per customer, built with groupby (20). k-means with k from 2 to 10, and the elbow (20). In pairs, name each cluster in 3 words a marketer would use (15). Debrief: the cluster that\'s 2 clusters, and the 1 that\'s an outlier with friends (15).',
      c2: 'Scaling before clustering, and the cluster that\'s only big because of the units (15). Groups we didn\'t define: what the business would do differently for each (20). In threes, the email each cluster gets, 1 sentence each (20). The questions for next week\'s guest, collected in the shared sheet (10). Exit ticket: your k, and the sentence that explains it.',
      lab: 'Lab 9: Online Retail II. RFM segments, k chosen and defended, each segment named, and the 1 action per segment the retailer could take.',
      memo: 'The first model is due: a model with its CV error against a simple baseline, on the project data. 4 of the 30.',
    },
    {
      w: 10, topic: 'Fairness and the loop',
      before: 'Video (18 min): error rates by group; the 3 definitions of fair that can\'t all hold; who signs off. Read: 2 pages from a model card for a deployed model. Check: 3 questions, one is reading error rates for 2 groups.',
      c1: 'The German credit data: 1,000 loans, with age and sex in the features (5). Fit the week 5 model and measure error rates by group, in pairs (25). The 3 definitions, and the one your model fails (20). Drop the attribute and watch the proxy carry it anyway (15). Debrief: what the bank should do on Monday, in 2 sentences (10).',
      c2: 'The guest, where I have one, with the questions from the sheet (40), then in threes the 1 sign-off a person must make before your project model acts (25). With no guest: the loop drawn on the board, where the model proposes, a person decides and the decision feeds the next model (20), the sign-off exercise (25), and class 1\'s proxy problem revisited on your project data (25). Exit ticket: who\'s harmed when your project model is wrong.',
      lab: 'Lab 10: German credit. The fairness audit: error rates by group, the definition you chose and why, what the proxy did, and the sign-off a person would make.',
    },
    {
      w: 11, topic: 'LLMs in the workflow',
      before: 'Video (16 min): an embedding is a position; zero-shot classification; where a model drafts and a person decides. Read: the week 8 LLM class on the ANOP 102 page. Check: 3 questions, one is "what does a temperature of 0 do?"',
      c1: 'A public set of 2,000 customer reviews, on everyone\'s screen (5). Pairs embed them and cluster the embeddings; the clusters are topics nobody labelled (25). Zero-shot classification of each review into 4 complaint types, and a spot check of 20 against your own reading (25). The embedding as a feature in the week 5 model, and what it adds on CV (20).',
      c2: 'Where the model drafts and a person decides: the support reply, the loan note, the call list, and which of the 3 a person must read first (20). In threes, the project team adds 1 LLM-built feature to its model and measures whether it helped, with CV (35). The cost per call, and the day the API price changes (10). Exit ticket: the 1 place in your project where a person must stay in the loop.',
      lab: 'Lab 11: the paper report. In full under Assignments. Due before week 13; the in-class LLM notebook is handed in as the exit ticket.',
    },
    {
      w: 12, topic: 'Deployment and monitoring',
      before: 'Video (15 min): drift; the model that quietly stopped working; what to monitor and how often. Check: 3 questions, one is reading a chart of weekly error for 6 months.',
      c1: 'The Telco model, scored month by month on a year the model never saw, on everyone\'s screen (5). Pairs find the month it broke and argue about why (20). Drift of the inputs against drift of the labels, and which you can see sooner (20). The retraining rule, written in 1 sentence, and the sentence that says when to pull it (15). Debrief: the dashboard a retention manager would need, sketched on paper (15).',
      c2: 'The model card, built in class for the project model, heading by heading (45). Peer review: swap cards, read the other team\'s cold, write the 1 question it doesn\'t answer (20). Exit ticket: the month your project model should be retrained, and how you would know.',
      lab: 'Lab 12 is the model card, 5%. In full under Assignments.',
      memo: 'The cutoff chosen by cost, and the model card, are due.',
    },
    {
      w: 13, topic: 'Project work',
      before: 'Nothing new. Bring the notebook and the memo draft.',
      c1: 'Workshop: teams at tables, me at each for 12 minutes with the rubric. The held-out term of data is scored for every team in the room; the number goes in the memo.',
      c2: 'Workshop, continued. Dry runs: each team pitches for 8 minutes to another team, which marks it on the rubric and says the 1 thing it didn\'t understand.',
      lab: 'Workshop time. Last day of week 13: the last day to resubmit any lab.',
    },
    {
      w: 14, topic: 'Project presentations',
      before: 'Nothing to read. Sleep.',
      c1: 'Pitches: 8 minutes a team and 4 of questions, to the person who would act on the model where we have one, and to me where we don\'t. Slides go up on the course site the evening before.',
      c2: 'The rest of the pitches. Then the notebook, card and memo handed in by midnight, and the peer evaluation in private.',
      lab: 'No lab. Office hours for the final.',
      memo: 'The pitch, then the notebook, the card and the memo. 20 of the 30.',
    },
  ],
  labs: [
    { n: 1, title: 'The ice-cream stand, framed', due: 'before week 2', prompt: 'The stand\'s 180 days: temperature, day of the week, school holidays, sales. Frame the decision the owner makes the night before, split the data, build the baseline and 1 model.', handIn: 'The notebook and its PDF, with a heading per question and a sentence per number.', passes: 'The decision named; the split made before anything else; the baseline error shown next to the model\'s; the paragraph says how far off the model is.' },
    { n: 2, title: 'Find the 3 leaks', due: 'before week 3', prompt: 'A customer table with 3 leaking features hidden in it and an accuracy that\'s too good. Find them, build the pipeline that prepares the data on the training rows only, and show the accuracy before and after.', handIn: 'The notebook and its PDF, with a cell that names each leak and how you found it.', passes: 'All 3 found; the preparation lives in a Pipeline fitted on training data; the after accuracy is the honest one.' },
    { n: 3, title: 'A model the realtor can quote', due: 'before week 4', prompt: 'Ames housing. Predict sale price. Give the realtor 5 coefficients she can quote and 3 she can\'t, with why, and the residual plot that says where the model is wrong.', handIn: 'The notebook and its PDF.', passes: 'The coefficients read in their units as sentences; the 3 unquotable ones have a reason each; the residual plot is read, with the pattern named.' },
    { n: 4, title: 'Hold it out', due: 'before week 5', prompt: 'The stand\'s 2 summers. 3 models of rising complexity, 5-fold CV, 1 pick, scored once on the last 30 days. In full under Assignments.', handIn: 'The notebook and its PDF, with the paragraph as the last cell.', passes: '6 of 8 on the rubric, no row at 0.' },
    { n: 5, title: 'Who cancels', due: 'before week 6', prompt: 'IBM Telco churn, 7,000 customers. Logistic regression, the confusion matrix at the default cutoff, and the paragraph that prices each of the 4 cells for the company.', handIn: 'The notebook and its PDF.', passes: 'Probabilities looked at before labels; the matrix on held-out data; each cell given a cost in dollars with the reasoning; 2 coefficients read as odds.' },
    { n: 6, title: 'Three rules for the retention team', due: 'before week 7', prompt: 'Telco churn as a tree. Pick the depth by CV, print the tree as rules, and give the retention team the 3 rules it could act on tomorrow.', handIn: 'The notebook and its PDF, with the 3 rules in a cell of their own.', passes: 'Depth chosen on CV with the table shown; the rules are readable by someone who hasn\'t seen the tree; each rule says what the team would do.' },
    { n: 8, title: 'The cutoff, in dollars', due: 'before week 9', prompt: 'Telco churn with the case\'s cost matrix. Choose the cutoff on held-out data, show what it earns against the default, and rank a call list for a $2,000 retention budget.', handIn: 'The notebook and its PDF, with the ranked list as a CSV.', passes: 'The cutoff chosen on held-out data, with the training-data cutoff shown for contrast; the earnings arithmetic shown; the list fits the budget.' },
    { n: 9, title: 'Name the segments', due: 'before week 10', prompt: 'Online Retail II. Build recency, frequency and money per customer, cluster, choose k and defend it, name each segment, and give the retailer 1 action per segment.', handIn: 'The notebook and its PDF.', passes: 'Features scaled before clustering; k defended with a plot and a sentence; each segment named in words a marketer would use; each action follows from the segment.' },
    { n: 10, title: 'The fairness audit', due: 'before week 11', prompt: 'German credit. Error rates by group for the week 5 model, the definition of fair you chose and why, what happened when you dropped the attribute, and the sign-off a person would make before the model acts.', handIn: 'The notebook and its PDF, with the sign-off as its last cell.', passes: 'Error rates by group on held-out data; the definition chosen with a reason; the proxy effect shown; the sign-off is a sentence a bank could use.' },
    { n: 11, title: 'The paper report', due: 'before week 13', prompt: 'A paper or a company write-up of a deployed model, in a 3-to-5-minute video with 5 to 10 slides, on a research or an industry track. In full under Assignments.', handIn: 'The video link and the slides as a PDF.', passes: '6 of 8 on the rubric, no row at 0.' },
  ],
  labsNote: 'Every lab is marked pass or redo on 4 rubric rows out of 8, and passes at 6 with no row at 0. Lab 4 is shown in full below with its rubric; the others are the same shape. Week 7\'s lab is the midterm and week 12\'s is the model card, so there are 10 labs.',
  assignments: [a330[0], pitch, midterm, a330[1], card, paper],
  exam: {
    title: 'A sample final',
    meta: 'Final · 15% · on paper · 2 hours',
    rules: [
      'Attempt up to 30 marks. If you attempt more, only the first 30 count.',
      'Show your work, and follow every number with a sentence that says what it means. A bare number gets half marks.',
      'You may have a pen, a calculator and this paper. The model outputs you need are printed on it.',
      'Each question names the outcome it tests, from the syllabus.',
      'Best of luck. Every output on this paper is one you have read before, in a lab.',
    ],
    note: 'This paper goes out in week 12. Do any 3 questions and hand them in with the model card; I mark them for feedback, and it\'s the closest thing to a mock exam the course has.',
    questions: [
      {
        tag: 'O1 · Framing',
        text: 'Welcome to the retention team at a streaming service. Your manager hears you took ANOP 330 and asks for "a churn model by Friday". Before you open a notebook:',
        parts: [
          { text: 'Write the decision the model would feed, who makes it, and how often.', marks: 1 },
          { text: 'Name the moment the prediction must be known, and 2 features that wouldn\'t exist by then.', marks: 2 },
          { text: 'What would you do differently with a perfect prediction? If the answer is nothing, say what to tell your manager.', marks: 2 },
        ],
      },
      {
        tag: 'O2 · Leakage',
        text: 'A notebook is printed below. It predicts whether a loan defaults with 97% accuracy. The features include months_since_last_payment, collections_flag and loan_amount.',
        parts: [
          { text: 'Find the leak and say how it leaks.', marks: 2 },
          { text: 'The holdout is a random 20% of the same 2 years. Say what\'s wrong with that for a bank, and what to do instead.', marks: 2 },
          { text: 'What accuracy would you expect after the fix, roughly, and why is "lower" the right answer?', marks: 1 },
        ],
      },
      {
        tag: 'O3 · Validation',
        text: 'A table is printed below: training and 5-fold CV error for polynomial degrees 1 to 10 on an ice-cream stand\'s sales, with the degree-8 model showing a training RMSE of 26 and a CV RMSE of 141.',
        parts: [
          { text: 'Which degree would you ship, and from which column?', marks: 1 },
          { text: 'Explain the degree-8 row to the stand\'s owner in 2 sentences, without the word overfitting.', marks: 2 },
          { text: 'The owner has 8 more days in a drawer. When do you look at them, and how many times?', marks: 1 },
        ],
      },
      {
        tag: 'O4 · Thresholds and cost',
        text: 'Two confusion matrices for the same churn model are printed below, at cutoffs of 0.5 and 0.3, on 1,000 held-out customers. A retention offer costs $20 and keeps a would-be canceller worth $200. Sent to a customer who was staying anyway, it costs the $20 for nothing.',
        parts: [
          { text: 'Precision and recall at each cutoff.', marks: 2 },
          { text: 'The money each cutoff makes. Which do you choose?', marks: 2 },
          { text: 'Your manager wants the cutoff with the best accuracy. In 2 sentences, why that\'s the wrong yardstick here.', marks: 1 },
          { text: 'Name the kind of customer the offer wastes money on even at the right cutoff, and the method from week 8 that finds them.', marks: 1 },
        ],
      },
      {
        tag: 'O3 · Reading a tree and a forest',
        text: 'A depth-3 decision tree for the same churn data is printed below as rules, and next to it the feature importances from a 500-tree forest, where 2 correlated features (monthly_charges and total_charges) sit at the top.',
        parts: [
          { text: 'Write the root split as a sentence the retention team could act on.', marks: 1 },
          { text: 'Why might the forest be splitting the credit between those 2 features, and what would you do about it?', marks: 2 },
          { text: 'The forest has lower CV error than the tree. Give 1 reason to ship the tree anyway.', marks: 1 },
        ],
      },
      {
        tag: 'O6 · Fairness and the loop',
        text: 'A bank\'s credit model has error rates by group printed below: it declines 12% of creditworthy applicants under 25 and 5% of those over 25. The attribute age isn\'t in the model.',
        parts: [
          { text: 'Name 2 features that could be carrying age into the model.', marks: 1 },
          { text: 'Which definition of fairness does the model fail, and which could it pass at the same time?', marks: 2 },
          { text: 'Write the sign-off a loan officer must make before a decline goes out, in 1 sentence.', marks: 1 },
          { text: 'The model is retrained each quarter on the loans the bank approved. What goes wrong over 3 years?', marks: 2 },
        ],
      },
      {
        tag: 'O6 · Monitoring',
        text: 'A chart is printed below: the weekly error of a demand model over 9 months, flat for 6 and rising since. A second chart shows the average of its main input over the same period, which jumped 3 months ago.',
        parts: [
          { text: 'Which drifted first, the inputs or the labels, and which could you have seen sooner?', marks: 2 },
          { text: 'Write the retraining rule in 1 sentence, and the rule for pulling the model in another.', marks: 2 },
        ],
      },
      {
        tag: 'O6 · A model inside a system',
        text: 'A voice assistant hears a word in German that means "continue". On a TV it should play the next episode; on a speaker it should resume the audiobook. The language model returns 0.55 for "next" and 0.45 for "resume".',
        parts: [
          { text: 'Should the system act on 0.55? Say what else it should look at first.', marks: 2 },
          { text: 'Name the cost of each kind of mistake on each device, in a sentence each.', marks: 2 },
          { text: 'Propose the 1 rule you would put around the model, and the data you would log to check it.', marks: 1 },
        ],
      },
      {
        tag: 'O7 · The pitch',
        text: 'A 2-page memo is printed below. It recommends that a credit union call the 300 members its model flags. It reports an accuracy of 91%, no baseline, no cutoff, and no cost of a wrong call.',
        parts: [
          { text: 'List the 3 numbers the memo needs before the head of lending should act on it.', marks: 2 },
          { text: 'Rewrite the first paragraph so that it says what to do, what acting costs, and when to stop trusting the model.', marks: 2 },
        ],
      },
    ],
  },
};
