// SLFRF Project Planning Guide: the guide's content as data. index.html renders it.
// As built under the Interim Final Rule (2021). See README.md before relying on any of it.
window.GUIDE = {
 "resources": [
  {
   "label": "US Dept. Of Treasury Website - Coronavirus State and Local Fiscal Recovery Funds",
   "url": "https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/state-and-local-fiscal-recovery-funds"
  },
  {
   "label": "Section 603, Social Security Act",
   "url": "https://www.govinfo.gov/content/pkg/COMPS-15671/pdf/COMPS-15671.pdf"
  },
  {
   "label": "Interim Final Rule (as of May 17, 2021)",
   "url": "https://www.govinfo.gov/content/pkg/FR-2021-05-17/pdf/2021-10283.pdf"
  },
  {
   "label": "SLFRF Compliance and Reporting Guidance (updated June 24, 2021)",
   "url": "https://home.treasury.gov/system/files/136/SLFRF-Compliance-and-Reporting-Guidance.pdf"
  },
  {
   "label": "Frequently Asked Questions (as of July 19, 2021)",
   "url": "https://home.treasury.gov/system/files/136/SLFRPFAQ.pdf"
  },
  {
   "label": "Webinar: Overview of SLFRF Compliance and Reporting Guidance",
   "url": "https://www.youtube.com/watch?v=HINNcZtccko"
  },
  {
   "label": "Presentation: Overview of SLFRF Compliance and Reporting Guidance",
   "url": "https://home.treasury.gov/system/files/136/SLFRP-Reporting-Guidance-Webinar-Counties-Cities-under-250k-over-5m.pdf"
  },
  {
   "label": "Subscribe to receive updates about Treasury's COVID-19 Economic Relief Programs",
   "url": "https://public.govdelivery.com/accounts/USTREAS/subscriber/new?category_id=USTREAS_C55"
  },
  {
   "label": "Uniform Guidance (2 CFR 200)",
   "url": "https://ecfr.federalregister.gov/current/title-2/subtitle-A/chapter-II/part-200?toc=1"
  }
 ],
 "form": [
  {
   "field": "Project Name",
   "note": null,
   "group": "project"
  },
  {
   "field": "Expenditure Category",
   "note": null,
   "group": "project"
  },
  {
   "field": "Description",
   "note": "Project descriptions must describe the project in sufficient detail to provide understanding of the major activities that will occur, and will be required to be between 50 and 250 words. Projects should be defined to include only closely related activities directed toward a common purpose. In particular, recipients should review the Required Programmatic Data described below and define their projects at a sufficient level of granularity to report these metrics for a reasonably specific activity or set of activities in each project. Note: For each project, the recipient will be asked to select the appropriate Expenditure Category based on the scope of the project (see Appendix 1). Projects should be scoped to align to a single Expenditure Category. For select Expenditure Categories, the recipient will also be asked to provide additional programmatic data (described further below).",
   "group": "project"
  },
  {
   "field": "Budget Amount",
   "note": null,
   "group": "project"
  },
  {
   "field": "Appropriation Date",
   "note": "The budgeted amount for this project must have governing-body approval via a specific agenda item or inclusion in the annual budget or department-specific agenda items.",
   "group": "project"
  },
  {
   "field": "Project Start Date",
   "note": "Project start and end dates should align with the period of performance for any subawards.",
   "group": "project"
  },
  {
   "field": "Project End Date",
   "note": null,
   "group": "project"
  },
  {
   "field": "Project Manager",
   "note": null,
   "group": "project"
  },
  {
   "field": "Department ID",
   "note": null,
   "group": "project"
  },
  {
   "field": "Subrecipient? (Yes/No)",
   "note": null,
   "group": "project"
  },
  {
   "field": "PDD? (Yes/No)",
   "note": null,
   "group": "reporting"
  },
  {
   "field": "EBI? (Yes/No)",
   "note": null,
   "group": "reporting"
  },
  {
   "field": "Programmatic? (Yes/No)",
   "note": null,
   "group": "reporting"
  }
 ],
 "uses": [
  {
   "n": "1",
   "text": "To respond to the COVID-19 public health emergency or its negative economic impacts, including assistance to households, small businesses, and nonprofits, or aid to impacted industries such as tourism, travel, and hospitality.",
   "groups": [
    "1: Public Health",
    "2: Negative Economic Impacts",
    "3: Services to Disproportionately Impacted Communities"
   ]
  },
  {
   "n": "2",
   "text": "To respond to workers performing essential work during the COVID-19 public health emergency by providing premium pay to such eligible workers of the recipient, or by providing grants to eligible employers that have eligible workers who performed essential work.",
   "groups": [
    "4: Premium Pay"
   ]
  },
  {
   "n": "3",
   "text": "For the provision of government services, to the extent of the reduction in revenue of such recipient due to the COVID-19 public health emergency.",
   "groups": [
    "6: Revenue Replacement"
   ]
  },
  {
   "n": "4",
   "text": "To make necessary investments in water, sewer, or broadband infrastructure.",
   "groups": [
    "5: Infrastructure"
   ]
  },
  {
   "n": "Administrative Costs",
   "text": "Recipients may use funds for administering the CSLFRF program, including costs to support effective management and oversight. Direct and indirect costs may be charged to the CSLFRF award as administrative costs",
   "groups": [
    "7: Administrative"
   ]
  }
 ],
 "categories": [
  {
   "group": "1: Public Health",
   "code": "1.1",
   "name": "COVID-19 Vaccination",
   "eligible": "Expenses related to COVID-19 vaccination programs and sites, including staffing, acquisition of equipment or supplies, facilities costs, and information technology or other administrative expenses",
   "pdd": true,
   "ebi": false,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.2",
   "name": "COVID-19 Testing",
   "eligible": "Costs of providing COVID-19 testing",
   "pdd": true,
   "ebi": false,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.3",
   "name": "COVID-19 Contact Tracing",
   "eligible": "Costs of contact tracing and public health surveillance (e.g., monitoring of case trends and genomic sequencing for variants)",
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.4",
   "name": "Prevention in Congregate Settings (Nursing Homes, Prisons/Jails, Dense Work Sites, Schools, etc.)",
   "eligible": "COVID-19 related expenses for prevention, mitigation, or other services in congregate living facilities, incarceration settings, homeless shelters, residential foster care, and other group facilities.",
   "pdd": false,
   "ebi": true,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.5",
   "name": "Personal Protective Equipment",
   "eligible": "Expenses for acquisition and distribution of medical and protective supplies, including sanitizing products and personal protective equipment.",
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.6",
   "name": "Medical Expenses (including Alternative Care Facilities)",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.7",
   "name": "Capital Investments or Physical Plant Changes to Public Facilities that respond to the COVID-19 public health emergency",
   "eligible": "Capital investments in public facilities to meet pandemic operational needs, such as physical plant improvements to public hospitals and health clinics or adaptions to public buildings to implement COVID-19 mitigation tactics.",
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.8",
   "name": "Other COVID-19 Public Health Expenses (including Communications, Enforcement, Isolation/Quarantine)",
   "eligible": "Expenses for public communication efforts related to COVID-19 such as vaccination programs and public health orders; enforcement by recipients of public health orders related to COVID-19; expenses for quarantining or isolation of individuals.",
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.9",
   "name": "Payroll Costs for Public Health, Safety, and Other Public Sector Staff Responding to COVID-19",
   "eligible": "Payroll and covered benefit expenses for public safety, public health, health care, human services, and similar employees to the extent that the employee's time is spent mitigating or responding to the COVID-19 public health emergency.",
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "1: Public Health",
   "code": "1.10",
   "name": "Mental Health Services",
   "eligible": "Mental health treatment or other behavioral health services hotlines or warmlines; crisis intervention, infectious disease prevention, and services or outreach to promote access to physical or behavioral health primary care and preventative medicine; expenses for the treatment of long-term symptoms or effects of COVID-19",
   "pdd": false,
   "ebi": true,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.11",
   "name": "Substance Use Services",
   "eligible": "Substance misuse treatment; overdose prevention.",
   "pdd": false,
   "ebi": true,
   "prog": false
  },
  {
   "group": "1: Public Health",
   "code": "1.12",
   "name": "Other Public Health Services",
   "eligible": "Expenses related to establishing or enhancing public health data systems.",
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.1",
   "name": "Household Assistance: Food Programs",
   "eligible": null,
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.2",
   "name": "Household Assistance: Rent, Mortgage, and Utility Aid",
   "eligible": null,
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.3",
   "name": "Household Assistance: Cash Transfers",
   "eligible": "Cash transfers must be reasonably proportional to the negative economic impact they are intended to address.  In particular, when considering the appropriate size of permissible cash transfers made in response to the COVID–19 public health emergency, State, local and Tribal governments may consider and take guidance from the per person amounts previously provided by the Federal Government in response to the COVID–19 crisis. Cash transfers that are grossly in excess of such amounts would be outside the scope of eligible uses under sections 602(c)(1)(A) and 603(c)(1)(A) and could be subject to recoupment. In addition, a recipient could provide survivor’s benefits to surviving family members of COVID–19 victims, or cash assistance to widows, widowers, and dependents of eligible COVID–19 victims.",
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.4",
   "name": "Household Assistance: Internet Access Programs",
   "eligible": null,
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.5",
   "name": "Household Assistance: Eviction Prevention",
   "eligible": "Counseling and legal aid to prevent eviction or homelessness",
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.6",
   "name": "Unemployment Benefits or Cash Assistance to Unemployed Workers",
   "eligible": null,
   "pdd": false,
   "ebi": true,
   "prog": false
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.7",
   "name": "Job Training Assistance (e.g., Sectoral job-training, Subsidized Employment, Employment Supports or Incentives)",
   "eligible": null,
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.8",
   "name": "Contributions to UI Trust Funds",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.9",
   "name": "Small Business Economic Assistance (General)",
   "eligible": "Assistance to small businesses, including loans, grants, in-kind assistance, technical assistance or other services, that responds to the negative impacts of COVID-19 public health emergency.",
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.10",
   "name": "Aid to Nonprofit Organizations",
   "eligible": "Assistance to nonprofit organizations, including loans, grants, in-kind assistance, technical assistance or other services, that responds to the negative economic impacts of the COVID-19 public health emergency.",
   "pdd": false,
   "ebi": true,
   "prog": false
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.11",
   "name": "Aid to Tourism, Travel, or Hospitality",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.12",
   "name": "Aid to Other Impacted Industries",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.13",
   "name": "Other Economic Support",
   "eligible": null,
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "2: Negative Economic Impacts",
   "code": "2.14",
   "name": "Rehiring Public Sector Staff",
   "eligible": "Payroll, covered benefit, and other costs associated with increasing the number of employees up to the number of employees on January 27, 2020.",
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.1",
   "name": "Education Assistance: Early Learning",
   "eligible": "New, expanded, or enhanced early learning services, including PreK and Head Start.",
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.2",
   "name": "Education Assistance: Aid to High-Poverty Districts",
   "eligible": "Assistance to high-poverty school districts to advance equitable funding across districts and geographies",
   "pdd": false,
   "ebi": true,
   "prog": true
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.3",
   "name": "Education Assistance: Academic Services",
   "eligible": "Educational and evidence-based services to address the academic needs of students",
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.4",
   "name": "Education Assistance: Social, Emotional, and Mental Health Services",
   "eligible": "Educational and evidence-based services to address the social, emotional, and mental health needs of students programs or services that address or mitigate the impacts of the COVID-19 public health emergency on childhood health or welfare.",
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.5",
   "name": "Education Assistance: Other",
   "eligible": null,
   "pdd": true,
   "ebi": true,
   "prog": true
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.6",
   "name": "Healthy Childhood Environments: Child Care",
   "eligible": "New or expanded high-quality childcare to provide safe and supportive care for children.",
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.7",
   "name": "Healthy Childhood Environments: Home Visiting",
   "eligible": "Programs to provide home visits by health professionals, parent educations, and social service professionals to individuals with young children to provide education and assistance for economic support, health needs, or child development.",
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.8",
   "name": "Healthy Childhood Environments: Services to Foster Youth or Families Involved in Child Welfare System",
   "eligible": "Services for child welfare-involved families and foster youth to provide support and education on child development, positive parenting, coping skills, or recovery for mental health and substance abuse.",
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.9",
   "name": "Healthy Childhood Environments: Other",
   "eligible": null,
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.10",
   "name": "Housing Support: Affordable Housing",
   "eligible": "Development of affordable housing to increase supply of affordable and high-quality living units",
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.11",
   "name": "Housing Support: Services for Unhoused Persons",
   "eligible": "Supportive housing or other programs or services to improve access to stable, affordable housing among individuals who are homeless.",
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.12",
   "name": "Housing Support: Other Housing Assistance",
   "eligible": "Housing vouchers and assistance relocating to neighborhoods with higher levels of economic opportunity and to reduce concentrated areas of low economic opportunity.",
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.13",
   "name": "Social Determinants of Health: Other",
   "eligible": null,
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.14",
   "name": "Social Determinants of Health: Community Health Workers or Benefits Navigators",
   "eligible": "Programs or services that facilitate access to health and social services.",
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.15",
   "name": "Social Determinants of Health: Lead Remediation",
   "eligible": null,
   "pdd": true,
   "ebi": false,
   "prog": false
  },
  {
   "group": "3: Disproportionately Impacted Communities",
   "code": "3.16",
   "name": "Social Determinants of Health: Community Violence Interventions",
   "eligible": null,
   "pdd": true,
   "ebi": true,
   "prog": false
  },
  {
   "group": "4: Premium Pay",
   "code": "4.1",
   "name": "Public Sector Employees",
   "eligible": "Provide premium pay to eligible workers performing essential work during the COVID-19 health emergency.",
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "4: Premium Pay",
   "code": "4.2",
   "name": "Private Sector: Grants to Other Employers",
   "eligible": "In responding to the needs of essential workers, a grant to an employer may provide premium pay to eligible workers performing essential work.",
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.1",
   "name": "Clean Water: Centralized Wastewater Treatment",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.2",
   "name": "Clean Water: Centralized Wastewater Collection and Conveyance",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.3",
   "name": "Clean Water: Decentralized Wastewater",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.4",
   "name": "Clean Water: Combined Sewer Overflows",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.5",
   "name": "Clean Water: Other Sewer Infrastructure",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.6",
   "name": "Clean Water: Stormwater",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.7",
   "name": "Clean Water: Energy Conservation",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.8",
   "name": "Clean Water: Water Conservation",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.9",
   "name": "Clean Water: Nonpoint Source",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.10",
   "name": "Drinking water: Treatment",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.11",
   "name": "Drinking water: Transmission & Distribution",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.12",
   "name": "Drinking water: Transmission & Distribution: Lead Remediation",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.13",
   "name": "Drinking water: Source",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.14",
   "name": "Drinking water: Storage",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.15",
   "name": "Drinking water: Other water infrastructure",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.16",
   "name": "Broadband: “Last Mile” projects",
   "eligible": "Projects must be designed to serve unserved or underserved households and businesses, defined as those that are not currently served by a wireline connection that reliably delivers at least 25 Mbps download speed and 3Mbps upload speed; eligible projects must reliably deliver at least 100Mbps download speed and 20 Mbps upload speed.",
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "5: Infrastructure",
   "code": "5.17",
   "name": "Broadband: Other projects",
   "eligible": "Assistance to households facing negative economic impacts due to COVID-19, including digital literacy training and other programs that promote access to the internet; \"middle-mile projects\"; and pre-project development; Recipients may use funds for modernization of cybersecurity, including hardware, software, and protection of critical infrastructure, as part of provisions of government services up to the amount of revenue lost.",
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "6: Revenue Replacement",
   "code": "6.1",
   "name": "Provision of Government Services",
   "eligible": "Government services can include, but are not limited to, maintenance of infrastructure or pay-go spending for building new infrastructure, including roads; modernization of cybersecurity, including hardware, software, and protection of critical infrastructure; health services; environmental remediation; school or educational services; and the provision of police, fire, and other public safety services.",
   "pdd": false,
   "ebi": false,
   "prog": true
  },
  {
   "group": "7: Administrative",
   "code": "7.1",
   "name": "Administrative Expenses",
   "eligible": "Recipients may use funds for administering the SLFRF program, including costs of consultants to support effective management and oversight, such as consultation for ensuring compliance with legal, regulatory, and other requirements. Pursuant to the SLFRF Award Terms and Conditions, recipients are permitted to charge both direct and indirect costs to their SLFRF award as administrative costs. Direct costs are those that are identified specifically as costs of implementing the SLFRF program objectives, such as contract support, materials, and supplies for a project. Indirect costs are general overhead costs of an organization where a portion of such costs are allocable to the SLFRF award such as the cost of facilities or administrative functions like a director’s office. If a recipient has a current Negotiated Indirect Costs Rate Agreement (NICRA) established with a Federal cognizant agency then the recipient may use its current NICRA. Alternatively, if the recipient does not have a NICRA, the recipient may elect to use the de minimis rate of 10 percent of the modified total direct costs pursuant to 2 CFR 200.414(f).",
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "7: Administrative",
   "code": "7.2",
   "name": "Evaluation and Data Analysis",
   "eligible": "Expenses to improve efficacy of public health or economic relief programs through the use of data analysis, targeted consumer outreach, improvements to data or technology infrastructure, and impact evaluations.",
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "7: Administrative",
   "code": "7.3",
   "name": "Transfers to Other Units of Government",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": false
  },
  {
   "group": "7: Administrative",
   "code": "7.4",
   "name": "Transfers to Non-entitlement Units (States and territories only)",
   "eligible": null,
   "pdd": false,
   "ebi": false,
   "prog": false
  }
 ],
 "programmatic": {
  "1.9": [
   "Number of government FTEs responding to COVID-19 supported under this authority"
  ],
  "2.1 - 2.5": [
   "1. Brief description of the structure and objectives of assistance program(s) (e.g., nutrition assistance for low-income households)",
   "2. Number of individuals served (by program if recipient establishes multiple separate household assistance programs)",
   "3. Brief description of recipient’s approach to ensuring that aid to households responds to a negative economic impact of Covid-19, as described in the Interim Final Rule"
  ],
  "2.9": [
   "1. Brief description of the structure and objectives of assistance program(s) (e.g., grants for additional costs related to COVID-19 mitigation)",
   "2. Number of small businesses served (by program if recipient establishes multiple separate small business assistance programs)",
   "3. Brief description of recipient's approach ensuring that aid to small businesses responds to a negative economic impact of COVID-19, as described in the Interim Final Rule."
  ],
  "2.11 - 2.12": [
   "1. If aid is provided to industries other than travel, tourism, and hospitality, a description of pandemic impact on the industry and rationale for providing aid to the industry",
   "2. Brief narrative description of how the assistance provided responds to negative economic impacts of the COVID-19 pandemic",
   "3. For each subaward: sector of employer and purpose of funds"
  ],
  "2.14": [
   "Number of FTEs rehired by governments under this authority"
  ],
  "3.1 - 3.5": [
   "The National Center for Education Statistics (NCES) School ID or NCES District ID"
  ],
  "4.1 - 4.2": [
   "List of sectors designated as critical to the health and well-being of residents by the chief executive of the jurisdiction",
   "Number of workers to be served",
   "Employer sector for all subawards to third-party employers",
   "For groups of workers, or to the extent applicable, individual workers, for whom premium pay would increase total pay above 150 percent of their residing state's average annual wage: a brief written narrative justification of how the premium pay or grant is responsive to workers performing essential work during the pandemic."
  ]
 },
 "subawards": [
  {
   "req": "Subrecipient vs. Contractor Determination",
   "items": [],
   "tool": "Subrecipient vs. Contractor checklist",
   "desc": "The recipient must make case-by-case determinations whether each agreement it makes for the disbursement of Federal program funds casts the party receiving the funds in the role of a subrecipient or a contractor."
  },
  {
   "req": "Federal Award Identification",
   "items": [
    "Federal statutes, regulations and the terms and conditions applicable to the Federal award",
    "Indirect Cost Rate",
    "Audit Access",
    "Closeout Terms & Conditions"
   ],
   "tool": "Agreement Exhibit Template",
   "tools": [
    "SLFRF Terms and Conditions"
   ]
  },
  {
   "req": "Subrecipient Risk Assessment",
   "items": [],
   "tool": "Risk Assessment Tool",
   "desc": "The recipient must evaluate each subrecipient's risk of noncompliance with Federal statutes, regulations, and the terms and conditions of the subaward for purposes of determining the appropriate subrecipient monitoring"
  },
  {
   "req": "Monitoring",
   "items": [],
   "tool": null,
   "desc": "Ongoing monitoring of any given subrecipient should reflect its assessed risk and include monitoring, identification of deficiencies, and follow-up to ensure appropriate remediation."
  }
 ],
 "pdd": {
  "intro": [
   "Recipients must report whether projects are targeted to economically disadvantaged communities (EDC) as defined by HUD's Qualified Census Tract (QCT).",
   "If a recipient is unable to measure economic characteristics of the primary intended beneficiaries of a program or service due to data limitations or for other reasons, that program or service may not be counted as targeted to EDC."
  ],
  "criteria": [
   {
    "text": "1. Program or service is provided in a physical location in a QCT;",
    "help": "To determine the 2010 Census Tract number or the ZCTA (ZIP code) for a particular address, visit the HUD User GIS Service -- Low-Income Housing Tax Credit Qualified Census Tract (QCT) and Small Difficult Development Area (SDDA) Locator.",
    "url": "https://www.huduser.gov/portal/sadda/sadda_qct.html"
   },
   {
    "text": "2. Program or service where the primary beneficiaries live within a QCT;",
    "help": "2021 QCT; Effective January 1, 2021",
    "url": "https://www.huduser.gov/portal/Datasets/qct/QCT2021M.PDF"
   },
   {
    "text": "3. Program or service for which the eligibility criteria are such that the primary intended beneficiaries earn less than 60 percent of the median income of the jurisdiction; or",
    "help": "To view median income area for their jurisdiction, recipients may visit the U.S. Census website on median incomes and select the geography for their jurisdiction and relevant unit of measurement (household or individual) for the project.",
    "url": "https://data.census.gov/cedsci/table?q=ACSST1Y2019.S1903&tid=ACSST1Y2019.S1903&hidePreview=true&moe=false."
   },
   {
    "text": "4. Program or service for which the eligibility criteria are such that 25 percent of the intended beneficiaries are below the federal poverty line.",
    "help": "U.S. Census Poverty Thresholds 2019",
    "url": "https://www2.census.gov/programs-surveys/cps/tables/time-series/historical-poverty-thresholds/thresh19.xls"
   }
  ]
 },
 "ebi": {
  "definition": "Preliminary evidence means that the evidence base can support conclusions about the  program’s contribution to observed outcomes. The evidence base consists of at least one nonexperimental study. A study that demonstrates improvement in program beneficiaries over time on one or more intended outcomes OR an implementation (process evaluation) study used to learn and improve program operations would constitute preliminary evidence. Examples of research that meet the standards include: (1) outcome studies that track program  beneficiaries through a service pipeline and measure beneficiaries’ responses at the end of  the program; and (2) pre- and post-test research that determines whether beneficiaries have  improved on an intended outcome.",
  "reporting": "Briefly describe the goals of the project, and whether SLFRF funds are being used for evidence-based interventions, the evidence base for the interventions, and/or if projects are being evaluated through rigorous program evaluations that are designed to build evidence. If a recipient is conducting a program evaluation in lieu of reporting the amount of spending on evidence-based interventions, they must describe the evaluation design",
  "fields": [
   "Project Goals",
   "Evidence Base"
  ]
 },
 "infrastructure": {
  "intro": "For all projects listed under the Water, Sewer, and Broadband expenditure categories (EC 5), more detailed project-level information is required.",
  "all": [
   "Projected/actual construction start date (month/year)",
   "Projected/actual initiation of operations date (month/year)",
   "Location (for broadband, geospatial data)"
  ],
  "over10m": [
   "For projects over $10 million:",
   "a. Davis-Bacon Act Certification",
   "b. Project Labor Agreement Certification",
   "c. Whether project prioritizes local hires",
   "d. Whether project has a Community Benefit Agreement"
  ],
  "water": [
   "National Pollutant Discharge Elimination System (NPDES) Permit Number (if applicable)",
   "Public Water System (PWS) ID number (if applicable)"
  ],
  "broadband": [
   "Speeds/pricing tiers to be offered, including the speed/pricing of its affordability offering",
   "Technology to be deployed",
   "Miles of fiber",
   "Cost per mile",
   "Cost per passing",
   "Number of households projected to have increased access to broadband meeting minimum speed standards",
   "Number of institutions and businesses projected to have increased access to broadband meeting the minimum speed standards"
  ]
 },
 "instructions": {
  "intro": [
   "Enacting legislation for the Coronavirus State and Local Fiscal Recovery Fund (SLFRF) defines four statutory eligible uses. As a recipient of an SLFRF award, the recipient is responsible for complying with the requirements for use of these funds.",
   "The recipient is required to submit project and expenditure reports on a quarterly basis. Each quarter, the recipient will report to the Treasury project expenses by Expenditure Category and data on compliance requirements such as serving economically disadvantaged communities and evidence-based interventions.",
   "The SLFRF Project Planning Guide is designed to facilitate determinations of project eligibility and expenditure category. Utilizing this planning guide can also help mitigate the risk of noncompliance with SLFRF terms and conditions by identifying reporting requirements prior to the execution of agreements or other obligations of funding."
  ],
  "steps": [
   "On the 1-Statutory Eligible Uses tab, click the link for the eligible use most closely related to the planned scope of services or activity. This link will take you to the summary level of the related expenditure categories. Expenditure categories relate to specific activities (COVID testing) or expenses (PPE) within an eligible use (Public Health).",
   "On the 2-Expenditure Categories tab, the Eligible Uses column (column C) includes a non-exclusive list of eligible uses as provided in available SLFRF guidance. These provisions and examples are intended to help evaluate whether the potential project (scope of services, deliverables) meets the criteria of the defined eligible use.",
   "Once an expenditure category has been identified, columns D thru F identify applicable compliance requirements for expenses in that category. Clicking on a ‘Yes’ will provide additional details on the requirement.",
   "Tip: Filter by Summary Level to see only expenditure categories within that eligible use.",
   "A Project Request Form must be completed and electronically submitted to obtain a project number in the financial system. Enter the applicable expenditure category on the project request form and complete the required project information.",
   "The recipient is required to clearly identify any and all compliance requirements for the use of funds and reporting requirements for the expenditure of funds. The recipient is also required to manage and monitor subrecipients to ensure compliance with the requirements of the SLFRF award. The 3-Subawards tab provides more detailed information on these requirements.",
   "Note: For the purposes of establishing a project in the financial system, the project manager need only complete the subrecipient vs contractor determination."
  ]
 },
 "exhibit": {
  "lists": [
   "The following 2 CFR Part 200 Policy requirements also apply to the federal resources awarded pursuant to this agreement:",
   "Subpart B, General provisions",
   "Subpart C, Pre-Federal Award Requirements and Contents of Federal Awards",
   "Subpart D, Post Federal; Award Requirements",
   "Subpart E, Cost Principles",
   "Subpart F, Audit Requirements",
   "The following 2 CFR Policy requirements also apply to the federal resources awarded pursuant to this agreement:",
   "2 C.F.R. Part 25, Universal Identifier and System for Award Management;",
   "2 C.F.R. Part 170, Reporting Subaward and Executive Compensation Information; and",
   "2 C.F.R. Part 180, OMB Guidelines to Agencies on Governmentwide Debarment and Suspension (Non-procurement)."
  ],
  "fields": [
   [
    "Agency’s DUNS Registered Name",
    ""
   ],
   [
    "Agency’s DUNS Number",
    ""
   ],
   [
    "Subaward Period of Performance Start and End Date",
    ""
   ],
   [
    "Amount of Federal Funds Obligated by this action by the pass-through entity to the subrecipient",
    ""
   ],
   [
    "Total Amount of Federal Funds Obligated to the subrecipient by the pass-through entity including the current financial obligation",
    ""
   ],
   [
    "Total Amount of the Federal Award committed to the subrecipient by the pass-through entity",
    ""
   ],
   [
    "Federal award project description, as required to be responsive to the Federal Funding Accountability and Transparency Act (FFATA)",
    ""
   ],
   [
    "Federal Awarding Agency",
    "U.S. Department of Treasury"
   ],
   [
    "Pass-Through Entity",
    ""
   ],
   [
    "Contact Information for Awarding Official of Pass-Through Entity",
    ""
   ],
   [
    "Federal Award Identification Number",
    ""
   ],
   [
    "Federal Award Date",
    ""
   ],
   [
    "Assistance Listing Number",
    "21.027"
   ],
   [
    "Assistance Listing Title",
    "Coronavirus State & Local Fiscal Recovery Funds"
   ],
   [
    "Research and Development Award",
    ""
   ],
   [
    "Indirect Cost Rate",
    ""
   ]
  ]
 }
};
