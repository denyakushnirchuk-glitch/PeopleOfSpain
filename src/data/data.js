// =============================================================================
// POS — People of Spain
// MANIFESTO DATA FILE
// =============================================================================
// HOW TO EDIT MANIFESTOS
// Each entry in the array below is one manifesto page.
// Fields you will want to change most often are marked with ← EDIT
//
// THE MANIFESTO PAGE LAYOUT
//   Hero (number, Spanish title, English title, byline, lede)
//   → Paragraphs on the left, one photo on the right
//   → Prev / next links to neighbouring manifestos
//
// FIELDS YOU FILL IN:
// {
//   id:           URL slug. Keep lowercase, no spaces (e.g. "immigration"). ← EDIT
//   num:          Display number, two digits (e.g. "01"). ← EDIT
//   es:           Spanish-language title. Shown as the eyebrow. ← EDIT
//   title:        English-language title. Shown as the big headline. ← EDIT
//   authors:      Optional. Array of strings. Shown as a byline on the page. ← EDIT
//   lede:         One paragraph under the headline. Sets up the manifesto. ← EDIT
//   body:         Array of content items. Each item is one of:
//
//                   1. A STRING  → becomes a <p> paragraph.
//
//                   2. A HEADING → becomes a section heading with a small
//                      red-to-purple bar beneath. Write it as:
//                        { heading: "The Problem" }
//
//                   3. A LIST    → becomes a bulleted list with red dashes.
//                      Write it as:
//                        { list: [
//                          "First bullet",
//                          "Second bullet",
//                          "Third bullet"
//                        ]}
//
//                 Example mixing all three:
//                   body: [
//                     "Opening paragraph.",
//                     { heading: "The Problem" },
//                     "A paragraph describing the problem.",
//                     "We will collaborate with:",
//                     { list: ["Local communities", "Unions", "Schools"] },
//                     "A closing paragraph."
//                   ]                                                  ← EDIT
//   photo:        Path to the photo shown on the right.
//                 Place files in  public/manifestos/  and reference them
//                 as  "manifestos/your-filename.jpg".
//                 Recommended dimensions: 800×1000px (4:5 portrait).
//                 If empty or the file is missing, a gradient placeholder
//                 with the manifesto number is shown instead.            ← EDIT
//   photoCaption: Optional. Small caption under the photo.               ← EDIT
// }
//
// TO ADD A NEW MANIFESTO: duplicate any entry and change all ← EDIT fields.
// TO REORDER:  drag the whole object earlier or later in the array.
// TO REMOVE:   delete the entire { ... } block (and its trailing comma).
//
// NOTE: some entries below still contain `policies`, `numberBand`, and
// `pullQuote` fields from the original schema. These are now ignored —
// the page no longer renders them. You can safely leave them or delete
// them as you replace each manifesto with your real content.
// =============================================================================

// To edit on GitHub: open this file, click the pencil icon, make changes,
// click "Commit changes". The site redeploys automatically in ~30 seconds.
export const POS_MANIFESTOS = [

  // ─── 01 · IMMIGRATION AND BORDERS ─────────────────────────────────────────
  {
    id:      "immigration",          // ← EDIT: URL slug
    num:     "01",                   // ← EDIT: display number
    es:      "Immigration and Borders",     // ← EDIT: eyebrow label
    title:   "A border built on dignity, not fear.", // ← EDIT: headline
    authors: ["Ryan Spanhoff", "Ala Jelonek"], // ← EDIT: byline (can be empty [])
    lede:    "How would a centre-left political party build stronger borders to ensure the safety of the nation while promoting equality and opportunities?", // ← EDIT

    photo:        "manifestos/immigration.jpg", // ← EDIT (drop the file in public/manifestos/)
    photoCaption: "",                            // ← EDIT (optional small caption under the photo)
    body: [
      // ── THE PROBLEM ──────────────────────────────────────────────────
      { heading: "The Problem" },
      "In recent years, Spain has seen more cases of illegal immigrants, human trafficking, and increased demand for services for immigrants. Poor border management may lead to an increased risk of crime, dangerous migration routes, and doubts over the identity of immigrants. However, many immigrants seek refuge in Spain due to wars, persecution, and humanitarian disasters.",
      "The policy of immigration in our party will be based on three pillars: security, equality, and responsibility. A nation that does not protect its borders cannot guarantee its safety, but a nation that lacks empathy cannot guarantee the preservation of human dignity. In our opinion, legal migration enriches Spain if it is regulated, well-organised, and meets the requirements of society and the economy.",

      // ── OUR PROPOSAL ─────────────────────────────────────────────────
      { heading: "Our Proposal" },
      "The People of Spain (POS) party will implement more effective, smarter border control mechanisms to improve national security and reduce illegal migration. We will strengthen border surveillance, enhance cooperation with European agencies, and develop technologies for detecting human trafficking and organised crime.",
      "In addition, we will protect refugees seeking refuge from wars, persecutions, and humanitarian emergencies by offering them an efficient asylum system. Those who immigrate to Spain legally and make positive contributions by working and studying, and by adhering to the laws, will be provided with an easy route to citizenship.",
      "We will also develop integration programmes such as:",
      { list: [
        "Spanish language classes",
        "Job training programmes",
        "Citizenship education",
        "Help for families migrating to Spain legally"
      ]},
      "Those who have committed serious offences and violated the law repeatedly will be deported.",

      // ── IMPLEMENTATION ───────────────────────────────────────────────
      { heading: "Implementation" },
      "Our policies will be implemented by investing in them from the national government level, as well as collaborating with the European Union regarding border security programmes. Border police and immigration officers will have better training and equipment to make the process more efficient.",
      "The government will collaborate with:",
      { list: [
        "Local communities",
        "Refugee organisations",
        "Law enforcement agencies",
        "Work and education services"
      ]},
      "This will enable Spain to have secure borders and at the same time help those who truly require their assistance. Our political party believes that having secure borders and respecting human rights can go hand-in-hand."
    ],

    // ── STRUCTURED LAYOUT (optional — appears below the prose section) ────
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
    es:      "Economy for Everyone",
    title:   "An economy that works for everyone who works.",
    authors: ["Denys Kushnirchuk"],
    lede:    "To the fellow citizens of Spain. Look around.",

    photo:        "manifestos/economy.jpg",  // ← EDIT (drop the file in public/manifestos/)
    photoCaption: "",                         // ← EDIT (optional caption under the photo)
    body: [
      // ── OPENING DIAGNOSIS ────────────────────────────────────────────
      "The current administration, under the voice of Pedro Sánchez, speaks LOUDLY about the social progress they have made. However, take a look inside the poorly developed regions: the economy is CRUSHING regular families. They do not SEE what is happening. They do not see the crushing price of living in our country. And we are not just short by a few apartments. CaixaBank has revealed that we are facing a deficit of more than 750,000 homes. Imagine this. 750 THOUSAND people are struggling every day to survive in their own country. How can you call this fair?",

      "As usual, the government is throwing small fixes at problems nobody asked them to solve. They are seemingly BLIND to the actual DISASTER going on in our country. If we let this slide even one year longer, we are risking Spain turning into a port for the wealthy, pushing the 25% of the population already in poverty into even higher quarters.",

      "And to make it worse, this is not the only crisis. Our youth generation is already struggling to afford rent, let alone build a sufficient balance for a normal lifestyle. When you pair the lack of housing with the astonishing 24.5% youth unemployment rate, we are effectively building the perfect prison for future generations. More than 50% OF HARD-WORKING young Spaniards are forced to spend more than half of their paycheque SOLELY to keep a roof over their head. They cannot save. They cannot progress. Sometimes it just appears that they are trapped in the endless cycle of Spanish life, forced to delay their lives well into their thirties, which removes all the fun that life is supposed to give you.",

      // ── THE PLAN ─────────────────────────────────────────────────────
      { heading: "The Root's Plan" },
      "We, as People of Spain, will no longer just stand and watch this stagnation continue. We will present the all-new and original Root's Plan. We are going to launch a massive construction of 150,000 local-only youth housing units. We will also break the barrier on housing prices by introducing youth programmes for up to a 95% mortgage on new builds.",

      // ── FUNDING ──────────────────────────────────────────────────────
      { heading: "How We Pay For It" },
      "How are we going to fund this massive project? Most importantly, it is going to be done without placing a single tax increase on the working taxpayer. We will utilise the leftover EU NextGenerationEU funds and implement a targeted 1.5% tax increase on large corporations and the wealthiest people in our country, to introduce equality.",

      // ── CLOSING ──────────────────────────────────────────────────────
      { heading: "Vote" },
      "The current government has given us false hopes, fake solutions, and hollow promises of a better future. We, People of Spain, will replace fake plans with an actual structured and realistic plan. With that said: vote for People of Spain!"
    ],

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
    es:      "Health is a Right",
    title:   "One health card. Forty-seven million citizens.",
    authors: ["Deni"],
    lede:    "Healthcare should never be a privilege for the wealthy. It is a basic human right for all.",

    photo:        "manifestos/healthcare.jpg", // ← EDIT
    photoCaption: "",                           // ← EDIT
    body: [
      // ── OPENING PRINCIPLE ────────────────────────────────────────────
      "Every progressive believes that every person, no matter who they are, the income they earn, or even where they live, should never be denied quality healthcare. Healthcare must not be treated as a privilege for the wealthy. It is a basic human right for all.",

      // ── THE PROBLEM ──────────────────────────────────────────────────
      { heading: "The Reality" },
      "Yet across Spain, especially in Madrid, this is happening in front of our own noses. The growing privatisation of public healthcare is diminishing access to essential medical services. Hospitals are overcrowded. Medical staff are overworked. Patients face longer waiting times, and those waiting times are taking away the crucial minutes that save lives. Instead of improving the public system, funding cuts have left it underfunded and pushed it closer to inequality.",

      // ── THE RESPONSE ─────────────────────────────────────────────────
      { heading: "Already on the Streets" },
      "The consequences are already visible in Madrid, where thousands of healthcare workers and citizens are striking and protesting for more funding. Doctors, nurses, and patients are demanding a system that prioritises people over profits, and guarantees every person an equal healthcare opportunity.",

      // ── OUR PLAN ─────────────────────────────────────────────────────
      { heading: "Our Plan" },
      "A progressive government, such as People of Spain, must fund and expand the public healthcare network. We will invest in hospitals, increase staff levels, reduce waiting times, and guarantee fair pay and working conditions for medical staff. We will reverse the privatisation and dismantlement of public services, and ensure the high quality of healthcare every person deserves."
    ],

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
    es:      "Climate Change and Environment",
    title:   "A greener Spain. A fairer Spain.",
    authors: ["Margo"],
    lede:    "Climate change must be addressed through sustainable policies that protect the planet for future generations — and a just transition that brings every worker and community with us. Sustainability, clean energy, and social fairness are not competing priorities. They are the same priority.",

    photo:        "manifestos/climate.jpg",   // ← EDIT
    photoCaption: "",                          // ← EDIT
    body: [
      // ── SUSTAINABILITY ────────────────────────────────────────────────
      { heading: "Sustainability" },
      "Climate change must be addressed through sustainable policies that protect the planet for future generations. Sustainability means using natural resources responsibly and reducing waste and pollution. Governments should encourage recycling, sustainable farming, and environmentally friendly industries to lower environmental damage. As a result, society can continue developing economically while also protecting ecosystems and improving people's quality of life.",

      // ── CLEAN ENERGY AND GREEN TECHNOLOGY ────────────────────────────
      { heading: "Clean Energy and Green Technology" },
      "A transition to clean energy is necessary to reduce carbon emissions and fight global warming. Renewable energy sources such as solar, wind, and hydropower are cleaner alternatives to fossil fuels. Investing in green technology, including electric vehicles and energy-efficient infrastructure, can create new jobs and modernise the economy. Clean energy policies benefit both the environment and economic growth at the same time.",

      // ── ENVIRONMENTAL CONSERVATION AND FAIR TRANSITION ────────────────
      { heading: "Environmental Conservation and Fair Transition" },
      "Protecting forests, oceans, and biodiversity is essential for maintaining a healthy planet. Strong environmental laws and international cooperation can help conserve nature and reduce pollution. However, environmental changes should also be fair to the workers and communities affected by new climate policies. Governments must provide retraining programmes and new job opportunities for people working in polluting industries. Climate action can and must support both social justice and environmental protection — these are not competing values. They are the same value, seen from two angles."
    ],

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
    es:      "Security and Justice",
    title:   "Safe streets, fair courts, zero tolerance for corruption.",
    authors: ["Fred"],
    lede:    "Every resident of Spain deserves to feel safe in their community, and to be treated fairly by its courts.",

    photo:        "manifestos/security.jpg",  // ← EDIT
    photoCaption: "",                          // ← EDIT
    body: [
      // ── OPENING DIAGNOSIS ────────────────────────────────────────────
      "We believe that every person who is a resident in Spain deserves to feel safe and protected in their communities, while also being treated fairly by the justice system. Many people are concerned about crime, repeat offending, and overcrowded prisons. For too long, governments have focused mainly on punishment, instead of looking at the social causes of crime and helping offenders rejoin society with the right mindset.",

      // ── OUR APPROACH ─────────────────────────────────────────────────
      { heading: "Prevention and Rehabilitation" },
      "We believe that reducing crime in Spain requires both effective policing and strong rehabilitation programmes. Crime should be prevented through improved policing and quicker crime detection, but also through investment in education, mental health, addiction treatment, youth services, and employment opportunities. A fair justice system should punish serious crimes while giving offenders a chance to rebuild their lives and contribute positively to society. By focusing on prevention and rehabilitation alongside law enforcement, we can create safer communities across Spain.",

      // ── IMPLEMENTATION ───────────────────────────────────────────────
      { heading: "How We Will Do It" },
      "Our government will strengthen community policing across Spain, improve police training, and invest in modern technology to help solve crimes. At the same time, we will expand rehabilitation programmes in Spanish prisons by increasing access to education, job training, mental health care, and reintegration support.",

      "Part of Spain's national justice budget will be directed towards prevention and rehabilitation programmes, with additional support coming from European Union justice and security funds. These reforms will be delivered through Spain's Ministry of the Interior, the Ministry of Justice, regional governments, local councils, and NGOs. We will begin with pilot programmes in major Spanish cities before expanding successful policies nationwide, based on reductions in crime and reoffending rates."
    ],

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
    es:      "Technology and Privacy",
    title:   "Digital privacy is a right, not a privilege.",
    authors: ["Noah"],
    lede:    "Technology should be a tool to improve the lives of citizens — not exploit their personal information. POS will make digital privacy a guaranteed right for every person in Spain.",

    photo:        "manifestos/technology.jpg", // ← EDIT
    photoCaption: "",                           // ← EDIT
    body: [
      // ── THE PROBLEM ──────────────────────────────────────────────────
      { heading: "The Problem" },
      "In Spain, citizens heavily rely on technology for education, healthcare, communication, banking, and work. However, the programmes used to accomplish these tasks are owned by large technology companies that collect enormous amounts of personal data — most of the time without users understanding how it is being used. At the same time, cybercrime and online scams have been increasing across Spain. In 2024 alone, Spain detected over 100,000 cyberattacks, showing the growing danger of inadequate cybersecurity systems. If we do not implement stronger protections, citizens risk their privacy, their security, and their trust in technology altogether.",

      // ── OUR COMMITMENT ───────────────────────────────────────────────
      { heading: "Our Commitment" },
      "We believe that digital privacy is a fundamental right for all citizens of Spain. Technology is a tool that was built to serve people fairly and safely — and it must continue to encourage innovation and economic growth while doing so. We want a future where every Spanish citizen can use technology confidently, knowing that their personal information is safe and protected.",
      "When elected, we will introduce stricter regulations on how companies collect and store user data, ensuring that businesses are fully transparent about how personal information is used. Citizens of Spain will have far greater control over their online data, including the right to permanently delete their personal information from any digital platform at will. We will also implement stricter regulations on artificial intelligence and facial recognition technology to prevent abuse and protect civil liberties."
    ],

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
    es:      "Equality and Human Rights",
    title:   "Equality and Human Rights",
    authors: ["Olivia Iqbal"],
    lede:    "This manifesto is being prepared.",

    photo:        "manifestos/equality.jpg",  // ← EDIT
    photoCaption: "",                          // ← EDIT
    body: [],

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
    es:      "Housing and Urban Development",
    title:   "A home is not a commodity. It is a right.",
    authors: ["Tatiana"],
    lede:    "Housing is not merely a commodity; it is the foundation of stability, security, and human dignity. Every person deserves access to safe, affordable, and sustainable housing.",

    photo:        "manifestos/housing.jpg",   // ← EDIT
    photoCaption: "",                          // ← EDIT
    body: [
      // ── CHARACTER AND SOCIETY ────────────────────────────────────────
      { heading: "Character and Society" },
      "We believe that every individual has value, dignity, and the power to improve the world around them. A healthy society begins with responsible, thoughtful, and compassionate people.",
      "Individuals must strive for honesty, self-discipline, curiosity, and courage. Growth should not only be measured by wealth or status, but by wisdom, kindness, and contribution to others. Freedom is important, but freedom without responsibility weakens communities.",
      "Society should encourage cooperation over division, understanding over hatred, and progress over fear. Education must teach people how to think, not simply what to think. Technology should serve humanity rather than control it.",

      // ── HOUSING AS A HUMAN RIGHT ──────────────────────────────────────
      { heading: "Housing as a Human Right" },
      "Housing is not merely a commodity; it is the foundation of stability, security, and human dignity. Every person deserves access to safe, affordable, and sustainable housing. Cities must be designed for people, not only for profit. Urban development should create communities where people can live, work, learn, and connect without isolation or inequality.",
      "We reject systems that turn housing into speculation while millions struggle to afford shelter. Urbanisation should not produce overcrowded neighbourhoods, environmental destruction, or social separation between rich and poor. Instead, modern cities should prioritise public transportation, green spaces, walkable streets, and mixed-income communities that strengthen social bonds.",

      // ── THE CITIES WE BUILD ───────────────────────────────────────────
      { heading: "The Cities We Build" },
      "The future of urban life must balance innovation with humanity. Buildings should serve human well-being, not just economic growth. Rural communities should not be abandoned, and expanding cities must respect environmental limits and cultural identity.",

      // ── OUR COMMITMENT ───────────────────────────────────────────────
      { heading: "Our Commitment" },
      "We reject indifference, greed, and the idea that success belongs only to the powerful. A strong society protects the vulnerable, rewards hard work fairly, and creates opportunities for future generations.",
      "We believe meaningful change begins with everyday actions: listening carefully, speaking truthfully, helping others, and refusing to accept injustice as normal.",
      "The future of society depends on the character of individuals and the design of the communities they inhabit. When people act with integrity and societies invest in fairness, sustainability, and shared purpose, communities become stronger, fairer, and more hopeful.",
      "This manifesto is a call to live consciously, think critically, and build a society based on human dignity, responsibility, sustainable development, and shared progress."
    ],

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
    es:      "Transport and Infrastructure",
    title:   "Green mobility, affordable for all.",
    authors: ["Freddie"],
    lede:    "Transport should be affordable, reliable, and usable for everyone — but many people in Spain struggle with limited access, high ticket prices, and a rural network that leaves whole communities behind. We fix that.",

    photo:        "manifestos/transport.jpg", // ← EDIT
    photoCaption: "",                          // ← EDIT
    body: [
      // ── THE PROBLEM ──────────────────────────────────────────────────
      { heading: "The Problem" },
      "Transport should be affordable, reliable, and usable for everyone — but many people in Spain struggle with limited access to public transport, high ticket prices, heavy traffic, and rising pollution. Rural areas in particular lack adequate bus and train connections, cutting people off from schools, workplaces, hospitals, and other essential services. The communities most affected are students, senior citizens, working families, and people on low incomes.",

      // ── OUR PROPOSAL ─────────────────────────────────────────────────
      { heading: "Our Proposal" },
      "We propose building a better, more sustainable transport system that serves both urban and rural Spain equally. People of Spain will improve access to public transport by making it greener, more reliable, and more affordable. Our goal is cleaner cities, improved roads, lower pollution levels, and an economy that moves people rather than excluding them. No one in a rural community should have less access to transport than someone living in a city.",

      // ── OUR PLAN ─────────────────────────────────────────────────────
      { heading: "Our Plan" },
      "Our plan means investing in electric buses, expanding and improving rail connections for smaller cities and towns, and extending the public transport network into underserved areas. We will lower ticket prices for students, senior citizens, and people on low incomes — so that everyone can reach where they need to go, on time, sustainably, and comfortably. The result will be cleaner roads, reduced congestion, cleaner air, and a better quality of life across Spain's cities and regions."
    ],

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
    es:      "Foreign Policies",
    title:   "Diplomacy first. People over weapons.",
    authors: ["Maksym"],
    lede:    "Too many governments today are choosing military power over meaningful dialogue. People of Spain believes true safety comes from peace talks and international cooperation — not from bigger bombs.",

    photo:        "manifestos/foreign.jpg",   // ← EDIT
    photoCaption: "",                          // ← EDIT
    body: [
      // ── THE PROBLEM ──────────────────────────────────────────────────
      { heading: "The Problem" },
      "Today, there are too many wars in the world — and this is happening because governments are ignoring peaceful talks and investing in weapons instead. According to the Stockholm International Peace Research Institute (SIPRI), countries now spend a record $2.7 trillion every year on armies and missiles.",
      "Too often, countries choose military power instead of dialogue. Governments are cutting funding for peace talks, creating fear and distrust between nations. The people suffering most are innocent civilians and poor families living in war zones — millions of ordinary people who lose their homes and jobs, and many who are forced to flee their countries, driving a growing global refugee crisis.",

      // ── DIPLOMACY FIRST ───────────────────────────────────────────────
      { heading: "Diplomacy First" },
      "People of Spain believes that true safety comes from peace talks and international aid, not from bigger bombs. That is why we are proposing a new Diplomacy First plan:",
      { list: [
        "Reduce spending on offensive weapons",
        "Lead international peace talks to stop disagreements before they become wars",
        "Provide foreign aid to help rebuild schools and hospitals in countries damaged by conflict"
      ]},
      "By choosing dialogue instead of violence, we can save lives, prevent humanitarian crises, and help countries work together in peace and security.",

      // ── HOW WE WILL FUND IT ───────────────────────────────────────────
      { heading: "How We Will Fund It" },
      "We will move 5 per cent of our military budget into a new Peacebuilding Fund, dedicated to conflict prevention and international cooperation. We will also commit 0.7 per cent of our national income (GNI) to international aid — the official target set by the United Nations.",
      "Our Department of Foreign Affairs will manage this plan, working closely with the United Nations and neutral organisations such as the Red Cross to deliver aid safely and without corruption."
    ],

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
