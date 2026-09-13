---
title: Experimentation at scale
role: Product manager and part-owner; author; instructor
years: 2023–2026
kind: research
track: research
order: 4
featured: false
image: /media/work/experimentation.jpg
summary: A/B testing as it is actually done, inside a small e-commerce retailer, written up as a textbook chapter and taught as a graduate course.
outcome: A Springer chapter (forthcoming), a CSCW 2023 workshop paper, and Analytics and User Experience at Waterloo, 87 graduate students.
path:
  - { year: "2023", stage: "Question", detail: "Why do so many A/B tests produce quick wins that never show up in revenue?" }
  - { year: "2023", stage: "Workshop", detail: "Considerations for experimental design within funnels. CSCW 2023 workshop." }
  - { year: "2023", stage: "Course", detail: "MSCI 543, Analytics and User Experience: experimentation taught from live funnels, failure modes included." }
  - { year: "2024–25", stage: "Field", detail: "A year of live experiments inside a healthcare e-commerce retailer, run and documented from the inside." }
  - { year: "2026", stage: "Chapter", detail: "A/B Testing IRL. Textbook chapter, Springer, forthcoming." }
papers:
  - { title: "A/B Testing IRL", venue: "Textbook chapter, Springer, forthcoming 2026" }
  - { title: "Considerations for experimental design within funnels", venue: "CSCW 2023 workshop" }
---

## The setting

- A mid-sized healthcare e-commerce retailer, about 10,000 transactions a year, with an analytics team of a product manager, a UX designer, and a data analyst.
- Shopify, Amplitude, and LaunchDarkly for funnels, cohorts, and feature flags. The tools every small retailer has.
- I was the product manager and a part-owner, so the account is auto-ethnographic: the experiments as they were run, not as they would be described afterwards.

## The experiments

- Five families: cohort-based retention, funnel friction reduction, device-specific optimisation, personalised engagement, and content and trust building.
- Localised wins were real. Checkout abandonment fell 8–12% in the best cases.
- Most of them did not move revenue or repeat purchase. A lot of A/B testing produced quick wins that never became long-term behaviour.

## Five tensions

- Friction versus engagement: removing steps speeds people up; some steps are what make them trust you.
- Short-term wins versus long-term impact: a better checkout number is not a better customer.
- Personalisation versus experiment integrity: the recommender keeps learning while you are trying to hold it still.
- Funnel-stage optimisation versus holistic gains: fixing one stage moves the drop-off to the next.
- Experiment volume versus data reliability: with modest traffic, every extra concurrent test costs you statistical power.

## What it argues

- Customer paths are not linear, so funnel diagrams mislead; interventions have to be pathway-specific.
- Structured experiment tracking, holdout groups, and adaptive funnel strategies make small-traffic experimentation trustworthy.
- Experimentation is organisational learning, and should be taught that way.

## The course

- MSCI 543, Analytics and User Experience, University of Waterloo, Spring 2023. Graduate. 87 students.
- Experimentation taught from the funnels and instrumentation I used in industry, with the failure modes included.
