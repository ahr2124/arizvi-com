---
title: Experimentation on small traffic
role: Product manager and part-owner; author; instructor
years: 2023–2026
track: research
order: 4
featured: false
image: /media/work/experimentation.jpg
summary: A/B testing as it is actually done, inside a small e-commerce retailer, written up as a textbook chapter and taught at Waterloo.
outcome: A Springer chapter (forthcoming), a CSCW 2023 workshop paper, and a Waterloo course, Analytics and User Experience (eighty-seven students).
path:
  - { year: "2023", stage: "Question", detail: "Why do so many A/B tests produce quick wins that never show up in revenue?" }
  - { year: "2023", stage: "Workshop", detail: "Considerations for experimental design within funnels. CSCW 2023 workshop." }
  - { year: "2023", stage: "Course", detail: "MSCI 543, Analytics and User Experience, at Waterloo." }
  - { year: "2024–25", stage: "Field", detail: "A year of live experiments at a healthcare e-commerce retailer, run and documented from the inside." }
  - { year: "2026", stage: "Chapter", detail: "A|B Testing, IRL: What Really Works (and Doesn't). Textbook chapter, Springer, forthcoming." }
papers:
  - { title: "A|B Testing, IRL: What Really Works (and Doesn't)", venue: "Textbook chapter, Springer, forthcoming 2026" }
  - { title: "Considerations for experimental design within funnels", venue: "CSCW 2023 workshop" }
---

## The setting

- A small healthcare e-commerce retailer, about 10,000 transactions a year, with an analytics team of a product manager, a UX designer, and a data analyst.
- Shopify, Amplitude, and LaunchDarkly for funnels, cohorts, and feature flags. The tools every small retailer has.
- I was the product manager and a part-owner, so the account is autoethnographic: the experiments as they were actually run, warts and all.

## The experiments

- Five families: cohort-based retention, funnel friction reduction, device-specific optimization, personalized engagement, and content and trust building.
- Localized wins were real. Checkout abandonment fell 8–12% in the best cases.
- Most of them did not move revenue or repeat purchase.

## Five tensions

- Friction vs. engagement: removing steps speeds people up, and some of those steps are what make people trust you.
- Short-term wins vs. long-term impact: a better checkout rate did not bring more repeat purchases.
- Personalization vs. experiment integrity: the recommender keeps learning while you are trying to hold it still.
- Funnel-stage optimization vs. holistic gains: fixing one stage moves the drop-off to the next.
- Experiment volume vs. data reliability: with modest traffic, every extra concurrent test costs you statistical power.

## What it argues

- Customer paths are not linear, so funnel diagrams mislead. Interventions have to be pathway-specific.
- Structured experiment tracking, holdout groups, and adaptive funnel strategies make small-traffic experimentation trustworthy.
- Experimentation is organizational learning, so I teach it that way.

## The course

- Experimentation taught from the funnels and instrumentation I used in industry, with the failure modes included (Spring 2023).
