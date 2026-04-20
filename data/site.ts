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
  slug: string;
  country: string;
  region: string;
  base: string;
  summary: string;
  whyItWorks: string;
  watchOutFor: string;
  idealTiming: string;
  internet: string;
  cost: string;
  stay: string;
  bestFor: string;
  score: string;
  image: string;
  tags: string[];
};

export type ContinentGuide = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  image: string;
  countries: string[];
};

export type ServiceItem = {
  title: string;
  body: string;
  forWho: string;
  includes: string[];
  deliverable: string;
  turnaround: string;
  price: string;
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/remote-work-travel", label: "Remote Work Travel" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const primaryCta = {
  href: "/contact#contact-form",
  label: "Book a Planning Call",
};

export const secondaryCta = {
  href: "/contact#newsletter",
  label: "Get Destination Updates",
};

export const ctaTrustCopy =
  "Reply within 48 hours. Best for remote workers, couples, and people planning longer, work-friendly stays.";

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
    slug: "portugal",
    country: "Portugal",
    region: "Europe",
    base: "Lisbon",
    summary: "One of the easiest entries into remote-work travel: strong infrastructure, layered neighborhoods, and enough energy to feel inspiring without becoming chaotic.",
    whyItWorks: "Portugal is one of the cleanest all-round options for remote workers because the infrastructure is dependable, the rhythm is easy to settle into, and the neighborhoods give you both workability and quality of life.",
    watchOutFor: "The strongest neighborhoods and apartments go fast, and the most obvious central areas can feel overpriced or over-exposed if you stay too close to the tourist flow.",
    idealTiming: "March to June, or September to November",
    internet: "9.4/10",
    cost: "Mid",
    stay: "4 to 10 weeks",
    bestFor: "First long remote stay",
    score: "94",
    image: "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1400&q=80",
    tags: ["Walkable", "Reliable Wi-Fi", "Cafes", "Good for couples"],
  },
  {
    slug: "spain",
    country: "Spain",
    region: "Europe",
    base: "Valencia",
    summary: "A softer landing than Barcelona or Madrid, with coast access, calmer neighborhoods, and a strong balance between daily life and productivity.",
    whyItWorks: "Spain works especially well when you want good weather, strong urban structure, and a more relaxed emotional tempo without giving up city convenience.",
    watchOutFor: "August can distort the experience depending on the city, and some beach-oriented areas are better for short holidays than focused working weeks.",
    idealTiming: "April to June, or September to October",
    internet: "9.0/10",
    cost: "Mid",
    stay: "1 to 3 months",
    bestFor: "Sun, city structure, balance",
    score: "91",
    image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1400&q=80",
    tags: ["Sea access", "Lower pressure", "Great weather", "Long-stay friendly"],
  },
  {
    slug: "italy",
    country: "Italy",
    region: "Europe",
    base: "Puglia",
    summary: "Best for people who want beauty and slower rhythm, but are willing to be more selective about housing and backup work setups.",
    whyItWorks: "Italy is strongest for travelers who want atmosphere, design, food, and slower living to matter as much as the work itself.",
    watchOutFor: "The tradeoff is consistency. Housing quality, desk setup, and internet reliability need much closer checking before you commit.",
    idealTiming: "May to June, or September",
    internet: "7.6/10",
    cost: "Mid to high",
    stay: "2 to 6 weeks",
    bestFor: "Slow travel and design lovers",
    score: "84",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1400&q=80",
    tags: ["Beautiful stays", "Slower pace", "Food", "More variable logistics"],
  },
  {
    slug: "indonesia",
    country: "Indonesia",
    region: "Asia",
    base: "Canggu",
    summary: "A highly optimized nomad base with strong coworking infrastructure, social density, and easy routine-building if you choose your area carefully.",
    whyItWorks: "Indonesia is ideal when you want convenience, warm weather, and an ecosystem already optimized around remote work and flexible stays.",
    watchOutFor: "Some areas are too noisy or over-social if you need quiet concentration, so the exact neighborhood choice matters more than the country label.",
    idealTiming: "May to September",
    internet: "9.2/10",
    cost: "Low to mid",
    stay: "1 to 4 months",
    bestFor: "Community and convenience",
    score: "92",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    tags: ["Coworking", "Surf", "Social", "Tropical"],
  },
  {
    slug: "mexico",
    country: "Mexico",
    region: "North America",
    base: "Mexico City",
    summary: "One of the richest urban options for remote workers who want food, culture, and serious city life without losing access to strong work infrastructure.",
    whyItWorks: "Mexico is compelling when you want a destination with real cultural depth, strong food, serious city life, and enough infrastructure to support demanding weeks.",
    watchOutFor: "Neighborhood choice changes everything. Some areas feel ideal for long stays, others are too hectic, noisy, or expensive to justify.",
    idealTiming: "October to April",
    internet: "8.8/10",
    cost: "Mid",
    stay: "1 to 3 months",
    bestFor: "Big-city energy",
    score: "90",
    image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1400&q=80",
    tags: ["Culture", "Food", "Neighborhood depth", "Urban"],
  },
];

export const continents: ContinentGuide[] = [
  {
    slug: "africa",
    name: "Africa",
    kicker: "From Atlantic islands to East African bases",
    description:
      "Browse countries where the rhythm is slower, the culture is layered, and the remote-work setup depends heavily on choosing the right base.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=80",
    countries: ["Morocco", "Kenya", "Cape Verde", "Egypt", "South Africa", "Tunisia", "Mauritius"],
  },
  {
    slug: "asia",
    name: "Asia",
    kicker: "Remote-work ecosystems, tropical hubs, and deep contrasts",
    description:
      "A mix of highly optimized nomad infrastructure, major cultural capitals, and lower-cost long-stay options with very different day-to-day rhythms.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    countries: ["Indonesia", "Thailand", "Vietnam", "Japan", "Sri Lanka", "Malaysia", "Singapore", "United Arab Emirates"],
  },
  {
    slug: "europe",
    name: "Europe",
    kicker: "Reliable infrastructure and easy long-stay living",
    description:
      "The strongest all-round region for balanced routines, strong transport links, and destinations that support both demanding workweeks and good daily life.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80",
    countries: ["Portugal", "Spain", "Italy", "France", "Greece", "Croatia", "Germany", "Malta"],
  },
  {
    slug: "north-america",
    name: "North America",
    kicker: "Big-city depth, coast access, and strong urban bases",
    description:
      "Ideal when you want serious infrastructure, cultural density, and a broad range of urban or nature-adjacent setups across the continent.",
    image:
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1400&q=80",
    countries: ["Mexico", "Canada", "United States", "Costa Rica", "Panama", "Dominican Republic"],
  },
  {
    slug: "south-america",
    name: "South America",
    kicker: "Creative cities, mountain bases, and lower-cost depth",
    description:
      "A strong region for travelers who want atmosphere, cultural immersion, and more emotional texture in everyday life without giving up adventure.",
    image:
      "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1400&q=80",
    countries: ["Colombia", "Brazil", "Argentina", "Peru", "Ecuador", "Chile", "Uruguay"],
  },
  {
    slug: "oceania",
    name: "Oceania",
    kicker: "Island living, English-speaking ease, and slower pace",
    description:
      "Smaller in coverage but compelling for people who want nature, surf, and a more spacious lifestyle with dependable daily logistics.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    countries: ["Australia", "New Zealand", "Fiji", "French Polynesia"],
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
  {
    value: "40+",
    label: "nations lived through",
    body: "Practical guidance to make every stay smoother, smarter, and more rewarding.",
  },
  {
    value: "2",
    label: "perspectives on every place",
    body: "Traveling solo or as a couple, you get advice shaped by both points of view.",
  },
  {
    value: "100%",
    label: "immersed in local culture",
    body: "Beyond the trip itself, we help you experience a place with real cultural depth.",
  },
];

export const destinationFilters = [
  "Best for couples",
  "Fast Wi-Fi",
  "Month-long stays",
  "Warm weather",
  "Lower-cost options",
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Destination Advisory",
    body: "We help you choose the right country, region, and base city for your workload, travel style, budget, and timing.",
    forWho: "Best for remote workers or couples who are comparing a few destinations and need a clear recommendation before booking anything.",
    includes: [
      "A focused review of your work schedule, travel style, budget, and timing",
      "Shortlist of the strongest country and city options",
      "Clear tradeoffs on internet, housing, walkability, and day-to-day rhythm",
    ],
    deliverable: "A destination recommendation with the best-fit base city and a concise decision brief.",
    turnaround: "2 to 4 business days",
    price: "Starting from $190",
  },
  {
    title: "Personalized Remote Plan",
    body: "A tailored route with recommended stays, work-friendly neighborhoods, pacing advice, and practical logistics for each stop.",
    forWho: "Best for people planning a multi-week or multi-stop remote-work trip and wanting the whole structure mapped out before they go.",
    includes: [
      "Recommended route and pacing for the trip",
      "Neighborhood and stay guidance for each stop",
      "Advice on work setup, transition days, and trip flow",
    ],
    deliverable: "A custom remote-work travel plan with route, recommended bases, and planning notes.",
    turnaround: "4 to 6 business days",
    price: "Starting from $390",
  },
  {
    title: "Booking Support",
    body: "Guidance on apartments, hotels, transfer flow, and the setup details that reduce friction once the trip becomes real.",
    forWho: "Best for travelers who already know where they want to go but want help pressure-testing accommodation and logistics decisions.",
    includes: [
      "Review of shortlisted stays or booking options",
      "Feedback on neighborhood fit, workability, and tradeoffs",
      "Practical advice on arrival flow and local setup details",
    ],
    deliverable: "A refined booking shortlist and clear recommendations on what to book next.",
    turnaround: "2 to 3 business days",
    price: "Starting from $140",
  },
  {
    title: "Couples Travel Strategy",
    body: "Recommendations built around two schedules, two work styles, and a shared plan that still leaves room for enjoyment.",
    forWho: "Best for couples balancing different work rhythms, energy levels, or expectations about what the trip should feel like.",
    includes: [
      "A two-person planning lens for destination and stay selection",
      "Recommendations built around overlapping calendars and work styles",
      "Guidance on pacing, routines, and shared decision points",
    ],
    deliverable: "A couples-focused travel strategy that supports both productivity and enjoyment.",
    turnaround: "3 to 5 business days",
    price: "Starting from $240",
  },
];

export const serviceProcess = [
  {
    title: "Tell Us Your Trip",
    body: "Share the destinations you are considering, your timeline, your work setup, and the tradeoffs that matter most.",
  },
  {
    title: "We Build the Plan",
    body: "We review the brief, shape the best route or destination recommendation, and organize it into something practical and actionable.",
  },
  {
    title: "You Book With Confidence",
    body: "You move forward with a clearer destination decision, stronger booking judgment, and fewer expensive mistakes.",
  },
];

export const serviceFaqs = [
  {
    question: "How fixed is the pricing?",
    answer:
      "The prices shown are starting points for the most common scope. If the trip is more complex, multi-stop, or needs deeper booking support, we will clarify that before any work begins.",
  },
  {
    question: "How quickly do you reply and deliver?",
    answer:
      "We aim to reply to new inquiries within 48 hours. Turnaround depends on the service, but most planning work is delivered within 2 to 6 business days.",
  },
  {
    question: "How does support actually work?",
    answer:
      "Everything starts with the contact form. Once we understand the brief, we reply by email with the next step, scope, and what we need from you to complete the work.",
  },
  {
    question: "Do you handle the bookings directly?",
    answer:
      "We guide the decision-making and can review options, but this page positions the service as advisory support rather than a full-service travel agency booking desk.",
  },
];
