// =============================================================================
// POS — People of Spain
// TEAM / ABOUT PAGE DATA
// =============================================================================
// HOW TO EDIT
// All text on the About page comes from this file.
// Change names, titles, bios and photo paths here — no need to touch any HTML.
//
// PHOTOS
// Place photo files in the  photos/  folder (create it at project root).
// Reference them as  "photos/your-filename.jpg"
// Recommended dimensions: 400×400px minimum, square crop, face centred.
// If a photo path is missing or the file doesn't exist, a placeholder
// gradient is shown automatically.
// =============================================================================

// To edit on GitHub: open this file, click the pencil icon, make changes,
// click "Commit changes". The site redeploys automatically in ~30 seconds.
export const POS_TEAM = {

  // ─── PRESIDENT ─────────────────────────────────────────────────────────────
  president: {
    name:   "Ryan Spanhoff",               // ← EDIT: full name
    title:  "President, People of Spain",  // ← EDIT: title shown under name
    photo:  "photos/ryan-spanhoff.jpg",    // ← EDIT: path to photo file
    bio:    [
      // ← EDIT: each string is one paragraph. Add or remove paragraphs freely.
      "Ryan Spanhoff has spent twenty years working in civic infrastructure — organising workers, running municipal campaigns, and sitting across the table from mayors who refused to listen. He founded People of Spain because he ran out of patience with movements that were content to protest without proposing.",
      "Born in Valencia to a Spanish mother and a Dutch father, Ryan has lived in eight of Spain's seventeen autonomous communities. He speaks Spanish, Catalan, and enough Galician to get himself in trouble at a Saturday market. He believes the only political unit worth caring about is the neighbourhood — and that a country is just a neighbourhood that got ambitious.",
      "His programme is simple: ten promises, written down, publicly measurable, with a calendar attached. He will not ask for your trust. He will ask for your scrutiny."
    ]
  },

  // ─── VICE PRESIDENTS ───────────────────────────────────────────────────────
  vicePresidents: [
    {
      name:      "Alicja Jelonek",                         // ← EDIT
      title:     "1st Vice President · Immigration & Borders", // ← EDIT
      photo:     "photos/alicja-jelonek.jpg",              // ← EDIT
      manifesto: "immigration",   // links to manifesto page (use the id from data.js)
      bio: [
        // ← EDIT
        "Alicja Jelonek arrived in Spain from Kraków at age nineteen with a scholarship, a suitcase, and a conviction that belonging is earned, not granted. She went on to complete a doctorate in migration law at the Universidad Autónoma de Madrid, then spent a decade as a legal advocate for migrant workers in Almería, Murcia, and the Canary Islands.",
        "She wrote POS's immigration manifesto after realising that every politician who spoke about migration had either never met a migrant worker or had spent so long meeting them professionally that they had forgotten what it felt like to be one."
      ]
    },
    {
      name:      "Denys Kushnirchuk",                      // ← EDIT
      title:     "2nd Vice President · Economic Policies", // ← EDIT
      photo:     "photos/denys-kushnirchuk.jpg",           // ← EDIT
      manifesto: "economy",
      bio: [
        // ← EDIT
        "Denys Kushnirchuk grew up in Kharkiv and moved to Barcelona in 2010, where he built a small logistics company from a cargo van and a spreadsheet into a 40-person firm. He sold it in 2019, spent two years studying Spain's regional economic data, and arrived at a conclusion he couldn't shake: Spain's economy is not underperforming because its people lack initiative. It is underperforming because its institutions reward consolidation over competition.",
        "His manifesto for economic policy is the result of three years of conversations with small-business owners, factory workers, farmers and economists across six autonomous communities. He is suspicious of anyone who discusses the economy without mentioning a wage."
      ]
    }
  ],

  // ─── CAMPAIGN TEAM ─────────────────────────────────────────────────────────
  // 9 slots. Add name, title, and photo path for each team member.
  // Bio is intentionally omitted here — only shown for President and VPs.
  // You can add more than 9, or fewer — the grid adjusts to 3 columns.
  team: [
    { name: "María García",        title: "Head of Outreach",           photo: "photos/team-1.jpg"  }, // ← EDIT
    { name: "Javi Morales",        title: "Communications Director",     photo: "photos/team-2.jpg"  }, // ← EDIT
    { name: "Sara Quintero",       title: "Policy Researcher",           photo: "photos/team-3.jpg"  }, // ← EDIT
    { name: "Tomás Perea",         title: "Regional Coordinator — South",photo: "photos/team-4.jpg"  }, // ← EDIT
    { name: "Elena Vidal",         title: "Events & Mobilisation",       photo: "photos/team-5.jpg"  }, // ← EDIT
    { name: "Ander Goikoetxea",    title: "Digital Strategy",            photo: "photos/team-6.jpg"  }, // ← EDIT
    { name: "Noa Ferreira",        title: "Legal Affairs",               photo: "photos/team-7.jpg"  }, // ← EDIT
    { name: "Carlos Ibáñez",       title: "Finance & Transparency",      photo: "photos/team-8.jpg"  }, // ← EDIT
    { name: "Priya Nair",          title: "International Liaison",        photo: "photos/team-9.jpg"  }  // ← EDIT
  ]

};
