// =============================================================================
// POS — People of Spain
// MANIFESTO DATA FILE
// =============================================================================
// HOW TO EDIT MANIFESTOS
// Each entry in the array below is one manifesto page.
// Fields you will want to change most often are marked with ← EDIT
//
// STRUCTURE OF ONE MANIFESTO:
// {
//   id:          URL slug. Keep lowercase, no spaces (e.g. "immigration"). ← EDIT
//   num:         Display number, two digits (e.g. "01"). ← EDIT
//   es:          Spanish-language title. Shown as the eyebrow. ← EDIT
//   title:       English-language title. Shown as the big headline. ← EDIT
//   authors:     Optional. Array of strings. Shown as a byline on the page. ← EDIT
//   lede:        One paragraph. Sets up the manifesto before the policies. ← EDIT
//   policies:    Array of 4 policy objects (see below). ← EDIT
//   pullQuote:   A single sentence. Shown large + italic at the end. ← EDIT
//   numberBand:  Exactly 3 items. The big number bar above the policies. ← EDIT
// }
//
// STRUCTURE OF ONE POLICY:
// {
//   num:    e.g. "1.1" — shown as an eyebrow
//   title:  Short policy name (shown as h3)
//   body:   One or two sentences of explanation
// }
//
// TO ADD A NEW MANIFESTO: duplicate any entry and change all ← EDIT fields.
// TO REORDER:  drag the whole object earlier or later in the array.
// TO REMOVE:   delete the entire { ... } block (and its trailing comma).
// =============================================================================

// To edit on GitHub: open this file, click the pencil icon, make changes,
// click "Commit changes". The site redeploys automatically in ~30 seconds.
export const POS_MANIFESTOS = [

  // ─── 01 · IMMIGRATION AND BORDERS ─────────────────────────────────────────
  {
    id:      "immigration",          // ← EDIT: URL slug
    num:     "01",                   // ← EDIT: display number
    es:      "La Frontera de la Dignidad", // ← EDIT: Spanish eyebrow
    title:   "A border built on dignity, not fear.", // ← EDIT: headline
    authors: ["Ryan Spanhoff", "Alicja Jelonek"], // ← EDIT: byline (can be empty [])
    lede:    "Spain has always been a country of arrivals — Phoenicians, Romans, Moors, Jews, and every wave of labour that built this country when its own children left. We will not pretend that border policy is simple. But we insist that it begins with a person, not a number.", // ← EDIT
    policies: [
      {
        num:   "1.1",
        title: "A clear legal pathway for economic migrants",
        body:  "A points-based annual permit programme with guaranteed labour rights from day one. No employer-tied visas, no vulnerability. A person who works here is protected here."
      },
      {
        num:   "1.2",
        title: "Asylum decisions in 90 days",
        body:  "Every asylum application resolved within three months — with a dedicated case worker, free legal representation, and a written explanation of any rejection. The current multi-year wait is a system that punishes people for surviving."
      },
      {
        num:   "1.3",
        title: "Integration, not assimilation",
        body:  "Free Spanish language courses, civic orientation, and credential recognition for foreign-trained professionals. We do not ask immigrants to stop being who they are. We ask Spain to be big enough for all of it."
      },
      {
        num:   "1.4",
        title: "End of detention for non-criminal arrivals",
        body:  "Detention centres are not immigration policy — they are a moral failure. Non-criminal migrants awaiting assessment are housed in supervised community settings, not cells."
      }
    ],
    pullQuote: "The people who arrive at our borders with nothing are not a threat to Spain. They are a mirror of what Spain has always done to survive.",
    numberBand: [
      { num: "90",    label: "Days — asylum decision guarantee" },
      { num: "€0",    label: "Cost of Spanish classes for new arrivals" },
      { num: "100%",  label: "Labour rights from day one" }
    ]
  },

  // ─── 02 · ECONOMIC POLICIES ───────────────────────────────────────────────
  {
    id:      "economy",
    num:     "02",
    es:      "Economía Para Todos",
    title:   "An economy that works for everyone who works.",
    authors: ["Denys Kushnirchuk"],
    lede:    "Growth that stays in spreadsheets and never reaches a wage packet is not progress — it is accounting. We build an economy from the floor up: protect the worker first, invest in what Spain makes with its hands, and stop rewarding monopoly over merit.",
    policies: [
      {
        num:   "2.1",
        title: "A wage floor tied to real cost of living",
        body:  "The minimum wage rises every two years, recalculated against actual household expenses — rent, food, energy, transport — not a headline CPI. Work must pay for life. Anywhere in Spain."
      },
      {
        num:   "2.2",
        title: "National investment in strategic industries",
        body:  "€25bn in public-private partnerships over 10 years: green manufacturing, food processing, rail, care infrastructure, digital services. Spain must make things, not just manage them."
      },
      {
        num:   "2.3",
        title: "Support for small business — zero bureaucracy for under-10",
        body:  "Any registered business with fewer than 10 employees gets a single annual tax filing, a dedicated support officer, and a 60-day grace period before any fine is levied for administrative errors."
      },
      {
        num:   "2.4",
        title: "An anti-monopoly commission with real teeth",
        body:  "An independent body — not staffed by former industry executives — with power to break up utilities, supermarket chains or platforms that price out competition and price in consumers."
      }
    ],
    pullQuote: "An economy that concentrates wealth faster than it creates it is not a growing economy. It is a collapsing one with good press.",
    numberBand: [
      { num: "€25B",   label: "Strategic industry investment — 10yr" },
      { num: "1",      label: "Annual filing for businesses under 10" },
      { num: "2yr",    label: "Wage-floor review cycle" }
    ]
  },

  // ─── 03 · HEALTHCARE ──────────────────────────────────────────────────────
  {
    id:      "healthcare",
    num:     "03",
    es:      "Salud es Derecho",
    title:   "One health card. Forty-seven million citizens.",
    authors: [],
    lede:    "The Spanish public health system is among the finest built in the twentieth century. It has been underfunded in the twenty-first. We will reverse that — not with warm words, but with budget lines, headcounts, and measurable targets.",
    policies: [
      {
        num:   "3.1",
        title: "Rural clinic guarantee",
        body:  "Every town of 1,000 or more keeps a working family doctor and a pharmacy open six days a week. Where it has closed, it reopens within 18 months of this manifesto taking effect."
      },
      {
        num:   "3.2",
        title: "Mental health on equal footing",
        body:  "Public mental health receives the same per-capita budget as physical health. The wait for a first appointment is capped at 21 days. Therapists, not waiting lists."
      },
      {
        num:   "3.3",
        title: "Free dental for under-25s and over-65s",
        body:  "Two preventative visits and any needed treatment — fully covered, no contributory requirement, no means test."
      },
      {
        num:   "3.4",
        title: "Prescription ceiling of €240 per household per year",
        body:  "No family pays more than €240 per year for prescribed medication. The state covers the rest. This includes chronic conditions from day one of diagnosis."
      }
    ],
    pullQuote: "We do not measure a health system by its hospitals. We measure it by how long it takes a grandmother in Teruel to see her doctor.",
    numberBand: [
      { num: "21",    label: "Day cap — mental health intake" },
      { num: "€240",  label: "Annual prescription ceiling" },
      { num: "18mo",  label: "Reopened rural clinics" }
    ]
  },

  // ─── 04 · CLIMATE CHANGE AND ENVIRONMENT ──────────────────────────────────
  {
    id:      "climate",
    num:     "04",
    es:      "El Planeta No Espera",
    title:   "Spain's climate plan is its industrial plan.",
    authors: [],
    lede:    "We do not treat the climate transition as a sacrifice. We treat it as the industrial project of our century — job-creating, sovereignty-restoring, and overdue by two decades. Spain has more sun, wind and coastline than almost anywhere in Europe. We have no excuse.",
    policies: [
      {
        num:   "4.1",
        title: "100% renewable public grid by 2035",
        body:  "Solar, wind and tidal built in Spain, partly owned by the public, with profits returned to regional infrastructure budgets. The grid does not belong to a shareholder."
      },
      {
        num:   "4.2",
        title: "High-speed rail connecting every provincial capital",
        body:  "Complete the national rail backbone by 2032. Phase out domestic short-haul flights between cities within rail reach. The train is not the second choice — it is the first."
      },
      {
        num:   "4.3",
        title: "Water as common patrimony",
        body:  "End speculative water-rights trading. A national drought-resilience plan for Andalucía, Murcia and Valencia: desalination investment, irrigation efficiency grants, and a protected river-flow minimum for every major basin."
      },
      {
        num:   "4.4",
        title: "€8bn coastline defence over ten years",
        body:  "Protect, restore and rewild the Spanish coastline against rising seas. A moratorium on new coastal construction within 50 metres of the tideline."
      }
    ],
    pullQuote: "We are not asking the planet for permission. We are asking ourselves whether we still have the nerve.",
    numberBand: [
      { num: "2035",  label: "100% renewable public grid" },
      { num: "€8B",   label: "Coastline defence — 10yr" },
      { num: "47",    label: "Capitals on the rail backbone" }
    ]
  },

  // ─── 05 · CRIME AND SECURITY ENFORCEMENT ──────────────────────────────────
  {
    id:      "security",
    num:     "05",
    es:      "Seguridad con Justicia",
    title:   "Safe streets, fair courts, zero tolerance for corruption.",
    authors: [],
    lede:    "Security is not a right-wing value. It is a basic condition of a free life. We will invest in the police, reform the courts, and pursue corruption — in public office, in finance, and in organised crime — with the same seriousness.",
    policies: [
      {
        num:   "5.1",
        title: "10,000 new frontline police officers in five years",
        body:  "Recruited, trained and deployed where the need is greatest — not where the headlines are. Priority: under-resourced urban districts, coastal provinces, and rural areas currently served by a patrol car twice a day."
      },
      {
        num:   "5.2",
        title: "A serious corruption unit independent of the Ministry of the Interior",
        body:  "Staffed and funded independently, with full subpoena power, and its own secure evidence systems. Its findings go directly to the judiciary — not to a minister's desk."
      },
      {
        num:   "5.3",
        title: "Mandatory body cameras for all uniformed police",
        body:  "Footage stored for 90 days and accessible to the subject of any complaint within 72 hours of filing. Cameras-off during an incident is treated as evidence of misconduct."
      },
      {
        num:   "5.4",
        title: "Rehabilitation over warehousing in prisons",
        body:  "Every person serving more than 12 months in custody has a guaranteed education and skills programme. Recidivism is the number we measure — not bed count."
      }
    ],
    pullQuote: "A state that cannot enforce its own laws equally is not a state. It is a suggestion.",
    numberBand: [
      { num: "10K",   label: "New frontline officers — 5yr" },
      { num: "72hr",  label: "Camera-footage access on complaint" },
      { num: "90",    label: "Days footage retention" }
    ]
  },

  // ─── 06 · TECHNOLOGY AND PRIVACY ──────────────────────────────────────────
  {
    id:      "technology",
    num:     "06",
    es:      "Tu Dato, Tu Derecho",
    title:   "Your data is yours. Your connection is a right.",
    authors: [],
    lede:    "The digital world is now the world. A citizen without reliable internet access is a citizen cut off from healthcare, education, work and public services. Meanwhile, the largest corporations in history have been given the data of millions of Spaniards for free. That ends.",
    policies: [
      {
        num:   "6.1",
        title: "Universal broadband at 100Mbps by 2028",
        body:  "Every household in Spain — including the 4,000 rural municipalities currently without reliable service — connected at a minimum 100Mbps. Treated as a utility, priced as a utility."
      },
      {
        num:   "6.2",
        title: "A real right to data portability and deletion",
        body:  "Any resident can demand the full export of their data from any platform operating in Spain within 30 days. Full deletion within 30 days of request. No dark-pattern exceptions, no 'legitimate interest' loopholes."
      },
      {
        num:   "6.3",
        title: "Public AI transparency register",
        body:  "Any AI system making decisions about a Spanish citizen — in benefits, in hiring, in credit, in policing — must be registered, audited annually, and challengeable in court."
      },
      {
        num:   "6.4",
        title: "Tech investment in public schools and libraries",
        body:  "Every school and public library in Spain equipped with current hardware, maintained on a four-year refresh cycle. Digital literacy from age 7, funded and timetabled."
      }
    ],
    pullQuote: "A country that hands its citizens' data to foreign corporations without asking is not a digital economy. It is a digital colony.",
    numberBand: [
      { num: "2028",  label: "Universal 100Mbps broadband" },
      { num: "30d",   label: "Data deletion guarantee" },
      { num: "4yr",   label: "School hardware refresh cycle" }
    ]
  },

  // ─── 07 · EQUALITY AND HUMAN RIGHTS ──────────────────────────────────────
  {
    id:      "equality",
    num:     "07",
    es:      "Igualdad Sin Excepción",
    title:   "Equal under the law. Equal in practice.",
    authors: [],
    lede:    "Spain legalised same-sex marriage in 2005. That was progress. But legal equality on paper is not equality in life — in the workplace, in the hospital, in the courtroom, in the street. We close the gap between the law as written and the law as lived.",
    policies: [
      {
        num:   "7.1",
        title: "Pay transparency — equal work, equal pay, published",
        body:  "Any company with more than 50 employees must publish average pay by role, gender and contract type. An independent office investigates gaps above 5% within 90 days of publication."
      },
      {
        num:   "7.2",
        title: "A national disability-access audit and retrofit programme",
        body:  "Every public building, transport hub and government website assessed and made fully accessible within five years. Funded, scheduled, monitored — not aspirational."
      },
      {
        num:   "7.3",
        title: "Comprehensive gender-violence response",
        body:  "24-hour specialist support lines and emergency housing in every province. Police gender-violence units staffed at sufficient levels. Cases tracked from report to resolution with independent oversight."
      },
      {
        num:   "7.4",
        title: "Recognition of the historical memory law in schools",
        body:  "Factual, age-appropriate curriculum about the Civil War, the dictatorship, and the transition. Not a political opinion — a historical record that every young Spaniard deserves to know."
      }
    ],
    pullQuote: "Equality is not given. It is built — brick by brick, law by law, budget line by budget line.",
    numberBand: [
      { num: "5%",    label: "Pay gap threshold before investigation" },
      { num: "5yr",   label: "Full public-building accessibility" },
      { num: "24hr",  label: "Gender-violence support — always on" }
    ]
  },

  // ─── 08 · HOUSING AND URBAN DEVELOPMENT ───────────────────────────────────
  {
    id:      "housing",
    num:     "08",
    es:      "Un Hogar Para Cada Familia",
    title:   "Three million homes. One generation.",
    authors: [],
    lede:    "Housing is the most acute injustice of our time. Young Spaniards spend more than 40% of their take-home pay on rent. We build, regulate, and reclaim — at the scale the problem demands. The market has had its turn.",
    policies: [
      {
        num:   "8.1",
        title: "Three million public and cooperative homes by 2035",
        body:  "A national construction programme, run jointly by the Ministry of Housing and the autonomous communities. Public land, public capital, long-term public ownership."
      },
      {
        num:   "8.2",
        title: "Permanent rent regulation in stressed zones",
        body:  "Indexed by neighbourhood, reviewed every three years, enforced with the same seriousness as a tax. Tourist rentals classified and regulated as commercial use."
      },
      {
        num:   "8.3",
        title: "Vacant-property levy",
        body:  "A progressive annual charge on dwellings that have stood empty for more than two years. The proceeds fund the public build. Exemptions for genuine renovation."
      },
      {
        num:   "8.4",
        title: "First-home guarantee for under-35s",
        body:  "A state-backed mortgage at preferential terms. Means-tested, available once in a lifetime, available in any province — not just Madrid and Barcelona."
      }
    ],
    pullQuote: "A door key is not a luxury good. It is the precondition for everything else we are promising you.",
    numberBand: [
      { num: "3M",    label: "Homes by 2035" },
      { num: "—35",   label: "Age — first-home guarantee" },
      { num: "2yr",   label: "Vacancy before the levy" }
    ]
  },

  // ─── 09 · TRANSPORT AND INFRASTRUCTURE ────────────────────────────────────
  {
    id:      "transport",
    num:     "09",
    es:      "Mover España",
    title:   "Every town connected. Every person moving.",
    authors: [],
    lede:    "Infrastructure is the skeleton of a country's ambition. Spain's is ageing, uneven, and too often designed around the assumption that everyone owns a car and lives in a city. We invest in the connections that give people freedom — trains, buses, roads, ports, and digital networks.",
    policies: [
      {
        num:   "9.1",
        title: "Free public transport for under-26s and over-65s",
        body:  "A national transport card covering buses, metro, and regional rail. Funded centrally, honoured locally. Because your age should not determine your mobility."
      },
      {
        num:   "9.2",
        title: "A rural bus guarantee",
        body:  "Every municipality with more than 500 residents is served by at least one daily bus connection to the nearest town with a hospital. Tendered, contracted, and subsidised — not hoped for."
      },
      {
        num:   "9.3",
        title: "€30bn port and logistics modernisation",
        body:  "Spain has five of Europe's twenty busiest ports. We invest to make them its most efficient — reducing freight costs, creating dock-side jobs, and strengthening the supply chains that keep Spanish industry competitive."
      },
      {
        num:   "9.4",
        title: "EV charging network — one charger per 50 residents by 2030",
        body:  "Rolled out by autonomous community, funded by the national plan, operated as public infrastructure. Not dependent on private roll-out timetables or shareholder returns."
      }
    ],
    pullQuote: "A country where a person in Soria cannot reach a hospital without a car is a country that has given up on half its people.",
    numberBand: [
      { num: "€30B",  label: "Port & logistics investment" },
      { num: "500+",  label: "Residents — daily bus guarantee" },
      { num: "2030",  label: "National EV charging network" }
    ]
  },

  // ─── 10 · FOREIGN POLICIES ────────────────────────────────────────────────
  {
    id:      "foreign",
    num:     "10",
    es:      "España en el Mundo",
    title:   "A Spain that leads with values, not just interests.",
    authors: [],
    lede:    "Foreign policy is domestic policy with a passport. The price of energy, the security of supply chains, the rights of Spaniards abroad, the reach of our culture — all of it is shaped by how Spain engages with the world. We will do it openly, consistently, and from a position of principle.",
    policies: [
      {
        num:   "10.1",
        title: "A Mediterranean leadership role on migration",
        body:  "Spain leads a EU coalition to establish a shared, humane Mediterranean rescue-and-reception policy. We will not accept that the choice is between chaos and cruelty."
      },
      {
        num:   "10.2",
        title: "Energy independence from authoritarian suppliers",
        body:  "A ten-year plan to reduce Spain's dependence on energy imports from non-democratic states. Diversified sourcing, strategic reserves, and accelerated domestic renewables."
      },
      {
        num:   "10.3",
        title: "An expanded Spanish cultural diplomacy programme",
        body:  "Double the budget of the Instituto Cervantes. Expand co-production treaties in film, music, and publishing across Latin America. Spain's soft power is its most underused asset."
      },
      {
        num:   "10.4",
        title: "A binding commitment on defence of democratic institutions",
        body:  "Spain will not trade, partner, or provide state hospitality to governments that imprison journalists, rig elections, or systematically persecute minorities. Values-based foreign policy is not naivety — it is strategy."
      }
    ],
    pullQuote: "Spain punches below its weight in the world because it has not yet decided what it stands for. We are deciding now.",
    numberBand: [
      { num: "2×",    label: "Instituto Cervantes budget" },
      { num: "10yr",  label: "Energy independence plan" },
      { num: "27",    label: "EU member states to lead alongside" }
    ]
  }

]; // end POS_MANIFESTOS
