export type Destination = {
  name: string;
  country: string;
  summary: string;
  season: string;
  wifi: string;
  vibe: string;
  image: string;
};

export type CountryGuide = {
  country: string;
  region: string;
  base: string;
  summary: string;
  internet: string;
  cost: string;
  stay: string;
  bestFor: string;
  score: string;
  image: string;
  tags: string[];
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/remote-work-travel", label: "Remote Work Travel" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const featuredDestinations: Destination[] = [
  {
    name: "Lisbon",
    country: "Portugal",
    summary: "A city for long café mornings, layered neighborhoods, and enough infrastructure to keep a demanding workweek calm.",
    season: "Best in shoulder season",
    wifi: "Fast and reliable",
    vibe: "Creative, social, walkable",
    image: "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lake Atitlan",
    country: "Guatemala",
    summary: "Mountain air, lake light, and a slower tempo that rewards people who want depth, routine, and lower-cost living.",
    season: "Best for month-long stays",
    wifi: "Patchy outside key towns",
    vibe: "Reflective, scenic, grounded",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Canggu",
    country: "Indonesia",
    summary: "A high-energy remote-work base with coworking density, surf culture, and enough convenience to make transitions easy.",
    season: "Best outside peak holiday rush",
    wifi: "Excellent in coworking hubs",
    vibe: "Lively, tropical, connected",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const highlightNotes = [
  "Destination guides written from actual workweeks, not quick stopovers.",
  "Advice shaped for remote workers, digital nomads, and travel-minded couples.",
  "Clear reads on internet, routine, cost, housing, and emotional fit.",
];

export const advisoryCountries: CountryGuide[] = [
  {
    country: "Portugal",
    region: "Europe",
    base: "Lisbon",
    summary: "One of the easiest entries into remote-work travel: strong infrastructure, layered neighborhoods, and enough energy to feel inspiring without becoming chaotic.",
    internet: "9.4/10",
    cost: "Mid",
    stay: "4 to 10 weeks",
    bestFor: "First long remote stay",
    score: "94",
    image: "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1400&q=80",
    tags: ["Walkable", "Reliable Wi-Fi", "Cafes", "Good for couples"],
  },
  {
    country: "Spain",
    region: "Europe",
    base: "Valencia",
    summary: "A softer landing than Barcelona or Madrid, with coast access, calmer neighborhoods, and a strong balance between daily life and productivity.",
    internet: "9.0/10",
    cost: "Mid",
    stay: "1 to 3 months",
    bestFor: "Sun, city structure, balance",
    score: "91",
    image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1400&q=80",
    tags: ["Sea access", "Lower pressure", "Great weather", "Long-stay friendly"],
  },
  {
    country: "Italy",
    region: "Europe",
    base: "Puglia",
    summary: "Best for people who want beauty and slower rhythm, but are willing to be more selective about housing and backup work setups.",
    internet: "7.6/10",
    cost: "Mid to high",
    stay: "2 to 6 weeks",
    bestFor: "Slow travel and design lovers",
    score: "84",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1400&q=80",
    tags: ["Beautiful stays", "Slower pace", "Food", "More variable logistics"],
  },
  {
    country: "Indonesia",
    region: "Asia",
    base: "Canggu",
    summary: "A highly optimized nomad base with strong coworking infrastructure, social density, and easy routine-building if you choose your area carefully.",
    internet: "9.2/10",
    cost: "Low to mid",
    stay: "1 to 4 months",
    bestFor: "Community and convenience",
    score: "92",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    tags: ["Coworking", "Surf", "Social", "Tropical"],
  },
  {
    country: "Guatemala",
    region: "Central America",
    base: "Lake Atitlan",
    summary: "Magnetic and reflective, with lower costs and stronger scenery than infrastructure. Better for slower, self-directed workers than high-volume meeting weeks.",
    internet: "7.1/10",
    cost: "Low",
    stay: "3 to 8 weeks",
    bestFor: "Reflection and deep work",
    score: "82",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    tags: ["Lower cost", "Nature", "Slower rhythm", "Patchier Wi-Fi"],
  },
  {
    country: "Mexico",
    region: "North America",
    base: "Mexico City",
    summary: "One of the richest urban options for remote workers who want food, culture, and serious city life without losing access to strong work infrastructure.",
    internet: "8.8/10",
    cost: "Mid",
    stay: "1 to 3 months",
    bestFor: "Big-city energy",
    score: "90",
    image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1400&q=80",
    tags: ["Culture", "Food", "Neighborhood depth", "Urban"],
  },
];

export const principles = [
  {
    title: "Workability first",
    body: "We look at internet quality, practical housing, day-to-day logistics, and whether a destination supports real routines.",
  },
  {
    title: "Honest tradeoffs",
    body: "Beautiful places still have friction. We document what is hard, expensive, crowded, or inconvenient so decisions feel grounded.",
  },
  {
    title: "Made for two lives",
    body: "Remote Together is built around balancing work, rest, and shared travel decisions as a couple rather than chasing a solo nomad fantasy.",
  },
];

export const journalMoments = [
  "Sunrise work sessions with a sea view and a deadline still on track.",
  "Apartment kitchens, neighborhood bakeries, and routines that make a place feel livable.",
  "Notes on weather, transport, coworking, and the subtle details glossy destination lists usually skip.",
];

export const journalEntries = [
  {
    location: "Lisbon",
    date: "April field notes",
    text: "The test is never whether a city photographs well. It is whether Tuesday afternoon still feels good after four calls, errands, and a long walk home.",
  },
  {
    location: "Bali",
    date: "Rainy season notebook",
    text: "A destination can be beautiful and exhausting at the same time. We keep the beauty, but we write down the friction too.",
  },
  {
    location: "Guatemala",
    date: "Lake month",
    text: "The places we recommend most strongly are rarely the loudest ones. They are the ones that let work settle and life open up around it.",
  },
];

export const guideTopics = [
  {
    title: "How to pick a city for a month, not a weekend",
    body: "A practical framework for balancing cost, climate, focus, and everyday convenience.",
  },
  {
    title: "Working as a couple while constantly moving",
    body: "Rituals, boundaries, and setup decisions that make shared travel sustainable.",
  },
  {
    title: "What we test before recommending a destination",
    body: "Internet backup, neighborhood noise, walkability, café culture, and whether the place still feels generous after week three.",
  },
];

export const stats = [
  { value: "20+", label: "destinations lived through" },
  { value: "2", label: "perspectives on every place" },
  { value: "100%", label: "advice shaped by actual workdays" },
];

export const destinationFilters = [
  "Best for couples",
  "Fast Wi-Fi",
  "Month-long stays",
  "Warm weather",
  "Lower-cost options",
];
