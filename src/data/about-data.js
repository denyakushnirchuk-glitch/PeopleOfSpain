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
    name:   "Ryan Alexander Spänhoff",               // ← EDIT: full name
    title:  "President, People of Spain",  // ← EDIT: title shown under name
    photo:  "photos/ryanpres.jpg",    // ← EDIT: path to photo file
    bio:    [
      // ← EDIT: each string is one paragraph. Add or remove paragraphs freely.
      "Ryan Spanhoff has spent twenty years working in civic infrastructure — organising workers, running municipal campaigns, and sitting across the table from mayors who refused to listen. He founded People of Spain because he ran out of patience with movements that were content to protest without proposing.",
      "Born in Germany to German parents, Ryan grew up between cultures and communities, shaping his belief that politics should serve ordinary people first. He believes the only political unit worth caring about is the neighbourhood — and that a country is just a neighbourhood that got ambitious.",
      "His programme is simple: ten promises, written down, publicly measurable, with a calendar attached. He will not ask for your trust. He will ask for your scrutiny."
    ]
  },

  // ─── VICE PRESIDENTS ───────────────────────────────────────────────────────
  vicePresidents: [
    {
      name:      "Ala Jelonek",                         // ← EDIT
      title:     "VP · Immigration & Borders", // ← EDIT
      photo:     "photos/alicja-jelonek.jpg",              // ← EDIT
      manifesto: "immigration",   // links to manifesto page (use the id from data.js)
      bio: [
        // ← EDIT
        "TAla Jelonek is the Vice President of People of Spain (POS), a political movement committed to representing citizens and promoting positive change across Spain. She works closely with party leadership to help shape policy, coordinate campaign efforts, and engage with communities nationwide.",
        "Known for her dedication, leadership, and strong communication skills, Ala is committed to building a future that prioritizes opportunity, unity, and practical solutions for all Spaniards."
      ]
    },
    {
      name:      "Denys Kushnirchuk",                      // ← EDIT
      title:     "CO-VP · Economic Policies", // ← EDIT
      photo:     "photos/denys-kushnirchuk.jpg",           // ← EDIT
      manifesto: "economy",
      bio: [
        // ← EDIT
        "Denys Kushnirchuk’s politics were shaped less by ideology than by experience — unemployment, unstable work, rising housing costs and watching talented people struggle to build secure lives. Having lived between Ukraine and Spain, he became deeply skeptical of economic systems that reward consolidation while ordinary workers absorb the risk.",
        "He believes politics only matters if it improves material conditions: wages, housing, energy costs and opportunity. He is suspicious of anyone who talks about the economy without talking about how people actually live."
        
      ]
    }
  ],

  // ─── CAMPAIGN TEAM ─────────────────────────────────────────────────────────
  // 9 slots. Add name, title, and photo path for each team member.
  // Bio is intentionally omitted here — only shown for President and VPs.
  // You can add more than 9, or fewer — the grid adjusts to 3 columns.
  team: [
    { name: "Noah B.",        title: "Technology And Privacy",           photo: "photos/team-1.jpg"  }, // ← EDIT
    { name: "Freddie W.",        title: "Communications Director",     photo: "photos/team-2.jpg"  }, // ← EDIT
    { name: "Margo A.",       title: "Climate change & Environment",           photo: "photos/team-3.jpg"  }, // ← EDIT
    { name: "Fred C.",         title: "Crime And Security"               ,photo: "photos/team-4.jpg"  }, // ← EDIT
    { name: "Deni A.",         title: "Department of Healthcare",       photo: "photos/team-5.jpg"  }, // ← EDIT
    { name: "Olivia I.",    title: "Equality And Human Rights",            photo: "photos/team-6.jpg"  }, // ← EDIT
    { name: "Maksim S.",        title: "Foreign Policies",               photo: "photos/team-7.jpg"  }, // ← EDIT
    { name: "Tatiana T.",       title: "Housing And Urban Development",      photo: "photos/team-8.jpg"  }, // ← EDIT
  ]

};
