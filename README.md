# SLFRF Project Planning Guide

An interactive planning guide for projects funded by the Coronavirus State and Local Fiscal Recovery Funds
(SLFRF, Assistance Listing 21.027). Pick a statutory eligible use and an expenditure category, and the page shows
the category's eligible uses and the reporting it triggers: project demographic distribution, evidence-based
interventions, programmatic data, and infrastructure detail. It also covers the project request form and the
subaward steps.

Demo: https://www.camsmith.xyz/slfrf

I built the original as a grant manager in 2021, under the Interim Final Rule, as an Excel workbook. This repo is
that guide as built, with the recipient's details removed, as an interactive page, plus the original workbook to
compare. **It is not current.** Treasury's Final Rule and later rules and guidance
changed eligible uses, expenditure categories, reporting requirements and deadlines.

## Bring it current with your coding agent

Point your coding agent at this repo and have it follow [AGENT_PROMPT.md](AGENT_PROMPT.md). The prompt tells it to
work from Treasury's and the Federal Register's own documents, cite every change, and list anything a person has
to decide.

## Disclaimer

We are just getting you started. This repo is not legal, audit or compliance advice. We make no representations,
assurances or guarantees about the accuracy of this guide or of any code or content your coding agent generates
from it. Check every build against the statute, the regulations (31 CFR Part 35 and 2 CFR Part 200), Treasury's
current guidance, and your own award terms before anyone relies on it.

## What's here

| File | What it is |
|---|---|
| `index.html` | The page. Open it in a browser; no build step. |
| `data.js` | The guide's content as data. The page renders whatever is here. |
| `AGENT_PROMPT.md` | Instructions for a coding agent to bring the guide current. |
| `RESOURCES.md` | Primary sources, checked October 2026. |
| `original/slfrf-project-planning-guide-2021.xlsx` | The original Excel workbook, with the recipient's details, comments and embedded files removed. |
| `LICENSE` | MIT. |

To run it locally, open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
```

## Credits

Built by [Cam Smith, CIA, CGAP](https://www.camsmith.xyz). The page was coded by Claude (Opus 5.5) from the original
workbook. The guide names two AGA tools and Treasury's award terms that the original pointed to; they are not
reproduced here.
