# Prompt: bring the SLFRF Project Planning Guide current

Copy everything below the line into your coding agent, with this repo open.

---

You are updating a static web page that helps program staff plan projects under the Coronavirus State and Local
Fiscal Recovery Funds (SLFRF, Assistance Listing 21.027). The page is `index.html`; its content is `data.js`.

The guide was built in 2021 under the Interim Final Rule (86 FR 26786, May 17, 2021). Treasury has since issued a
Final Rule and further rules and guidance. Your job is to bring `data.js` current, keep the page working, and record
the source of every change.

## Rules

1. **Work only from primary sources.** Read the current documents: Treasury's SLFRF pages, the Federal Register,
   eCFR (31 CFR Part 35 and 2 CFR Part 200), and Treasury's current Compliance and Reporting Guidance, including its
   expenditure category appendix. Do not rely on what you remember about SLFRF. If you cannot reach a source, stop
   and say so; do not guess.
2. **Cite every change.** For each eligible use, category, requirement, field or link you add, change or remove,
   record the document, its version or date, and the section or page in `CHANGELOG.md`.
3. **Change the data, not the structure,** unless current rules require a new kind of field. Keep the shape of
   `window.GUIDE` in `data.js`; if you must change it, update `index.html` to match and say why in `CHANGELOG.md`.
4. **Flag what you cannot resolve.** Where guidance conflicts, is unclear, or depends on the recipient's award,
   write it in `OPEN-QUESTIONS.md` for a person to decide. Do not pick an answer.
5. **Keep it generic.** Do not add any recipient's names, amounts or systems unless the person running you asks.

## What to check

This list is where to start, not a summary of the rules. Verify each item against the current documents.

- **Statutory eligible uses.** Later legislation added eligible uses after 2021 (check the Consolidated
  Appropriations Act, 2023 and Treasury's rules implementing it).
- **Expenditure categories.** Names, numbering, and categories added or retired between the Interim Final Rule
  and the current reporting guidance.
- **Reporting flags per category.** Which categories require project demographic distribution, evidence-based
  intervention reporting and programmatic data, and the current data points for each.
- **Who counts as impacted or disproportionately impacted.** The Final Rule changed the presumptions from the
  Interim Final Rule's approach; update the PDD section to match.
- **Infrastructure reporting.** Required fields, labor-practice certifications and their dollar thresholds.
- **Revenue loss.** The Final Rule's options for calculating revenue loss.
- **Reporting.** Tiers, frequency and due dates.
- **Deadlines.** The obligation and expenditure deadlines and Treasury's definition of obligation.
- **Subawards.** Which version of 2 CFR Part 200 applies to SLFRF awards and subawards (the Uniform Guidance was
  revised in 2024); update thresholds and section citations to match, and flag the question in `OPEN-QUESTIONS.md`
  if it depends on award dates.
- **Links.** Replace any that no longer resolve. The 2019 Census poverty thresholds file in the PDD section returned
  404 in October 2026.

## Deliverables

1. An updated `data.js` (and `index.html` only where a change requires it).
2. `CHANGELOG.md`: every change with its source.
3. `OPEN-QUESTIONS.md`: anything a person must decide.
4. The banner line "Built under the Interim Final Rule, 2021" rewritten to name the rules and guidance versions
   your update reflects, and the date.
5. A check: open `index.html`, select every eligible use and a sample of categories in each, and confirm there are
   no console errors.

When you finish, tell the person running you, in plain words: this update is a starting point. Every change must be
checked against the statute, 31 CFR Part 35, 2 CFR Part 200, Treasury's current guidance and their own award terms
before anyone relies on it. The authors of this repo provide no assurances or guarantees about the accuracy of what
you generated.
