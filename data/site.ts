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
  avoidIf: string;
  topAreas: string[];
  internetNotes: string;
  housingAdvice: string;
  coupleNotes: string;
  realisticBudget: string;
  commonMistakes: string[];
  stayByTraveler: { traveler: string; length: string }[];
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
  accent: string;
  highlights: string[];
  featuredLabel: string;
  countries: string[];
};

export type BrowseDestination = {
  name: string;
  continent: string;
  continentSlug: string;
  status: "published" | "upcoming";
  contentType: string;
  budget: "low" | "mid" | "high";
  bestForCouples: boolean;
  bestForDeepWork: boolean;
  image: string;
  positioning: string;
  stayStyle: string;
  workability: string;
  guideSlug?: string;
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

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type GuideHubItem = {
  title: string;
  description: string;
  category: string;
  readingTime?: string;
  featured?: boolean;
};

export type GuideHubCategory = {
  title: string;
  description: string;
  guides: string[];
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/remote-work-guides", label: "Remote Work Guides" },
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

export const authorProfile = {
  name: "Matteo & Alexandra",
  title: "Founders of Remote Together",
  bio: "A couple building remote-work trips around real deadlines, shared routines, and the lived details that decide whether a destination feels sustainable after week one.",
  yearsRemote: "6+ years",
  countries: "40+ countries",
  cities: "70+ cities",
};

export const aboutStats = [
  { label: "Working remotely while traveling", value: "6+ years" },
  { label: "Countries lived through or tested", value: "40+" },
  { label: "Cities and bases experienced", value: "70+" },
  { label: "Perspective used in every recommendation", value: "Solo + couple" },
];

export const destinationMethodology = [
  "Internet quality, backup options, and call reliability",
  "Housing comfort, desk setup, and neighborhood noise",
  "Walkability, transport friction, and day-to-day convenience",
  "Cost realism after the first week, not just headline prices",
  "Emotional fit: whether the place still feels good after real workdays",
];

export const trustProofPoints = [
  {
    title: "Remote-tested, not list-compiled",
    body: "Every guide is written from real workweeks, not quick stopovers or generic destination roundup research.",
  },
  {
    title: "Built from two perspectives",
    body: "Recommendations are shaped through both solo and couple travel dynamics, which changes how we rate space, pacing, and routine.",
  },
  {
    title: "Focused on workability",
    body: "We pay close attention to Wi-Fi, desk setup, backup cafés, noise, walkability, and how a place performs under actual deadlines.",
  },
  {
    title: "Tradeoff-aware guidance",
    body: "We deliberately document friction, not just highlights, so decisions are grounded before money is committed.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Remote Together gave us the kind of recommendation we were actually missing: not just where to go, but where we could work well for six weeks without burning out.",
    name: "Placeholder Client",
    role: "Couple planning a 6-week stay",
  },
  {
    quote:
      "What stood out was the realism. The advice covered Wi-Fi, housing, work rhythm, and neighborhood fit in a way most travel content never does.",
    name: "Placeholder Client",
    role: "Solo remote worker",
  },
  {
    quote:
      "The guidance felt editorial in taste but operational in detail. That made it easier to book with confidence instead of second-guessing everything.",
    name: "Placeholder Client",
    role: "Long-stay traveler",
  },
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
    avoidIf: "You want ultra-low housing costs or completely quiet central neighborhoods.",
    topAreas: ["Lisbon", "Porto", "Ericeira"],
    internetNotes:
      "Internet is generally strong in Lisbon and Porto, and coworking options are easy to find. The main risk is apartment-specific setup, not citywide connectivity.",
    housingAdvice:
      "Prioritize apartments with explicit desk photos, heating clarity for cooler months, and walking-distance groceries. Good long-stay inventory moves fast in the best neighborhoods.",
    coupleNotes:
      "Portugal works especially well for couples because it balances ease, beauty, and routine. Shared workweeks feel manageable when you choose a calmer neighborhood instead of the most obvious tourist core.",
    realisticBudget: "$2,200 to $3,800 per month for a couple, depending on season and city.",
    commonMistakes: [
      "Booking too centrally and paying a premium for noise and tourist spillover.",
      "Assuming every stylish apartment has a workable desk setup.",
      "Underestimating how fast strong long-stay inventory disappears in spring and autumn.",
    ],
    stayByTraveler: [
      { traveler: "Solo remote worker", length: "4 to 6 weeks" },
      { traveler: "Couple", length: "1 to 3 months" },
      { traveler: "First-time long-stay traveler", length: "1 month" },
    ],
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
    avoidIf: "You dislike summer heat, seasonal crowds, or cities that slow down sharply in August.",
    topAreas: ["Valencia", "Madrid", "Malaga"],
    internetNotes:
      "Spain is reliably strong for home internet and urban coworking, especially in larger cities. Backup cafés are easy to find, but neighborhood noise still matters.",
    housingAdvice:
      "Check insulation, air conditioning, and street noise carefully. Ground-floor flats and older buildings can feel charming online and exhausting in practice.",
    coupleNotes:
      "Spain suits couples who want climate, city energy, and a social rhythm without the intensity of faster-moving hubs. Valencia is often the best balance point.",
    realisticBudget: "$2,300 to $4,000 per month for a couple, with major variation between cities and seasons.",
    commonMistakes: [
      "Booking beach-first areas that work for holidays but not for focused weekdays.",
      "Choosing August without accounting for local closures and heat.",
      "Assuming all coastal cities have the same workability level.",
    ],
    stayByTraveler: [
      { traveler: "Solo remote worker", length: "3 to 6 weeks" },
      { traveler: "Couple", length: "1 to 2 months" },
      { traveler: "Slow traveler seeking sun", length: "2 to 3 months" },
    ],
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
    avoidIf: "You need frictionless logistics, highly consistent internet, or efficient last-minute booking options.",
    topAreas: ["Puglia", "Florence", "Milan"],
    internetNotes:
      "Internet quality varies more than in the strongest European remote-work markets. Coworking is limited outside major cities, so apartment Wi-Fi has to be checked more carefully.",
    housingAdvice:
      "Look hard at heating, air conditioning, building age, stairs, and workspace photos. Beautiful apartments often hide the exact practical problems that affect a real workweek.",
    coupleNotes:
      "Italy is excellent for couples who care about beauty, food, and slower living, but it works best when both people are comfortable with a bit more planning friction.",
    realisticBudget: "$2,500 to $4,500 per month for a couple, often higher in the most desirable periods.",
    commonMistakes: [
      "Choosing for atmosphere alone and ignoring internet or workspace quality.",
      "Assuming smaller towns will be as easy operationally as larger Italian cities.",
      "Booking shoulder-season stays without checking heating and humidity details.",
    ],
    stayByTraveler: [
      { traveler: "Solo remote worker", length: "2 to 4 weeks" },
      { traveler: "Couple", length: "3 to 6 weeks" },
      { traveler: "Design and food-focused traveler", length: "1 month" },
    ],
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
    avoidIf: "You want quiet, low-stimulation living or strongly dislike heavily optimized nomad hubs.",
    topAreas: ["Canggu", "Ubud", "Sanur"],
    internetNotes:
      "Coworking infrastructure is one of Indonesia's strengths in the main Bali hubs. The issue is less speed than choosing a neighborhood where noise and traffic do not sabotage the workday.",
    housingAdvice:
      "Pick your exact area before your villa. A beautiful stay in the wrong part of Canggu can destroy your focus with traffic, construction noise, and poor walkability.",
    coupleNotes:
      "Indonesia can work very well for couples when one person wants community and the other wants routine, but only if the neighborhood is calm enough to support both.",
    realisticBudget: "$1,700 to $3,200 per month for a couple, depending on villa standards and transport habits.",
    commonMistakes: [
      "Booking based on aesthetics without understanding neighborhood noise.",
      "Staying too far from your daily work and food loop.",
      "Assuming every Bali area offers the same balance of calm, convenience, and social life.",
    ],
    stayByTraveler: [
      { traveler: "Solo remote worker", length: "1 to 2 months" },
      { traveler: "Couple", length: "1 to 3 months" },
      { traveler: "Community-seeking nomad", length: "2 to 4 months" },
    ],
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
    avoidIf: "You need calm by default, dislike urban intensity, or want a destination with minimal neighborhood tradeoffs.",
    topAreas: ["Mexico City", "Oaxaca", "Playa del Carmen"],
    internetNotes:
      "Strong internet is available in major urban bases, and coworking is well established in Mexico City. Reliability depends heavily on the exact building and neighborhood.",
    housingAdvice:
      "Prioritize neighborhood fit over apartment aesthetics. A good apartment in the wrong area can mean noise, safety stress, and a daily rhythm that never settles.",
    coupleNotes:
      "Mexico works well for couples who enjoy real city life, food culture, and strong emotional texture, but it requires more active filtering to find the right base together.",
    realisticBudget: "$2,100 to $3,900 per month for a couple, depending on city, safety preferences, and housing quality.",
    commonMistakes: [
      "Choosing a neighborhood based on hype instead of day-to-day livability.",
      "Underestimating commute time and noise levels in bigger cities.",
      "Treating Mexico as one uniform experience instead of a set of very different city options.",
    ],
    stayByTraveler: [
      { traveler: "Solo remote worker", length: "3 to 6 weeks" },
      { traveler: "Couple", length: "1 to 2 months" },
      { traveler: "Urban culture-focused traveler", length: "1 month" },
    ],
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
    accent: "Layered culture, slower rhythm, stronger base selection",
    highlights: ["Couples", "Island bases", "Cultural depth"],
    featuredLabel: "Best when you want texture, warmth, and a more selective setup.",
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
    accent: "Nomad infrastructure, tropical living, strong range of tradeoffs",
    highlights: ["Deep work", "Lower cost", "Coworking hubs"],
    featuredLabel: "Best when you want infrastructure, value, and varied energy levels.",
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
    accent: "Reliable logistics, easier long stays, stronger all-round workability",
    highlights: ["Long stays", "Walkability", "Easy logistics"],
    featuredLabel: "Best when you want the safest all-round choice for longer work trips.",
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
    accent: "Urban depth, coast access, serious infrastructure",
    highlights: ["City energy", "Reliable internet", "Couple-friendly"],
    featuredLabel: "Best when you want confident logistics with bigger-city optionality.",
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
    accent: "Creative cities, emotional texture, lower-cost depth",
    highlights: ["Lower budget", "Cultural immersion", "Adventure"],
    featuredLabel: "Best when you want more feeling, more contrast, and stronger everyday character.",
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
    accent: "Nature-led living, surf culture, spacious rhythms",
    highlights: ["English-speaking ease", "Nature", "Slower pace"],
    featuredLabel: "Best when you want a calmer, outdoors-led long-stay base.",
    countries: ["Australia", "New Zealand", "Fiji", "French Polynesia"],
  },
];

const browseDestinationVisuals: Record<
  string,
  Pick<BrowseDestination, "image" | "positioning" | "stayStyle" | "workability">
> = {
  Morocco: {
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80",
    positioning: "Color, design, and cultural depth with a more selective remote-work setup.",
    stayStyle: "Culture-rich city base",
    workability: "Base-dependent",
  },
  Kenya: {
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80",
    positioning: "East African energy with business hubs and nature access in the same trip.",
    stayStyle: "Urban plus safari contrast",
    workability: "Strong in key hubs",
  },
  "Cape Verde": {
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    positioning: "Atlantic island living for slower weeks, ocean air, and lighter routines.",
    stayStyle: "Island work-and-reset",
    workability: "Selective but promising",
  },
  Egypt: {
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f2f?auto=format&fit=crop&w=1400&q=80",
    positioning: "Historic density, low costs, and high contrast between beauty and friction.",
    stayStyle: "City tradeoff choice",
    workability: "Variable",
  },
  "South Africa": {
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=80",
    positioning: "One of the most compelling lifestyle mixes for work, scenery, and urban depth.",
    stayStyle: "Long-stay city rotation",
    workability: "High with caveats",
  },
  Tunisia: {
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=80",
    positioning: "Mediterranean ease with lower-cost living and a more research-heavy setup.",
    stayStyle: "Value-led coastal base",
    workability: "Emerging",
  },
  Mauritius: {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    positioning: "Premium island living with stronger comfort, cleaner logistics, and slower pacing.",
    stayStyle: "Refined island stay",
    workability: "Comfort-first",
  },
  Indonesia: {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    positioning: "A highly optimized remote-work base with tropical lifestyle and social density.",
    stayStyle: "Coworking-led tropical base",
    workability: "Excellent in hubs",
  },
  Thailand: {
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=80",
    positioning: "Strong value, proven nomad infrastructure, and easier transitions between bases.",
    stayStyle: "Flexible long-stay circuit",
    workability: "Very strong",
  },
  Vietnam: {
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80",
    positioning: "Fast-moving city energy and strong value if you want focus with intensity.",
    stayStyle: "Urban value play",
    workability: "Best for deep work",
  },
  Japan: {
    image:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1400&q=80",
    positioning: "Precision, design, and calm efficiency with a higher-cost, high-reward feel.",
    stayStyle: "Premium city rhythm",
    workability: "High-end reliable",
  },
  "Sri Lanka": {
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=80",
    positioning: "Coastal beauty and lower-cost living with more variable practical infrastructure.",
    stayStyle: "Surf-and-reset base",
    workability: "Selective",
  },
  Malaysia: {
    image:
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=1400&q=80",
    positioning: "An underrated balance of infrastructure, city ease, and everyday comfort.",
    stayStyle: "Comfortable urban base",
    workability: "Quietly excellent",
  },
  Singapore: {
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
    positioning: "One of the cleanest deep-work environments if budget matters less than precision.",
    stayStyle: "Premium business base",
    workability: "Exceptional",
  },
  "United Arab Emirates": {
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    positioning: "High-comfort infrastructure and sharp convenience with a polished urban feel.",
    stayStyle: "High-efficiency city base",
    workability: "Very strong",
  },
  Portugal: {
    image:
      "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1400&q=80",
    positioning: "One of the easiest all-round choices for long stays, routine, and daily quality.",
    stayStyle: "Balanced long stay",
    workability: "Outstanding",
  },
  Spain: {
    image:
      "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1400&q=80",
    positioning: "Sun, city structure, and a calmer emotional tempo without losing convenience.",
    stayStyle: "Climate-led city balance",
    workability: "Very strong",
  },
  Italy: {
    image:
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1400&q=80",
    positioning: "Beauty and slower living for people willing to be more selective about logistics.",
    stayStyle: "Atmosphere-first stay",
    workability: "Variable but rewarding",
  },
  France: {
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=80",
    positioning: "Design, food, and urban depth with stronger pricing and city-specific tradeoffs.",
    stayStyle: "City-culture long stay",
    workability: "Strong in major bases",
  },
  Greece: {
    image:
      "https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1400&q=80",
    positioning: "Light, islands, and shoulder-season magic when you choose around the crowds.",
    stayStyle: "Seasonal coastal base",
    workability: "Best selectively",
  },
  Croatia: {
    image:
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=1400&q=80",
    positioning: "Adriatic beauty and digital-nomad momentum with stronger summer tradeoffs.",
    stayStyle: "Coastal work base",
    workability: "Strong outside peak",
  },
  Germany: {
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80",
    positioning: "Efficient infrastructure and serious deep-work conditions in bigger urban hubs.",
    stayStyle: "City deep-work base",
    workability: "Excellent",
  },
  Malta: {
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80",
    positioning: "Compact island living with English-speaking ease and a seasonal social pulse.",
    stayStyle: "Accessible island stay",
    workability: "Good with caveats",
  },
  Mexico: {
    image:
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1400&q=80",
    positioning: "Strong city choice, food, culture, and enough infrastructure for longer stays.",
    stayStyle: "Culture-rich urban base",
    workability: "Very strong",
  },
  Canada: {
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=80",
    positioning: "Clean logistics and strong urban comfort for longer, higher-budget work trips.",
    stayStyle: "High-comfort city stay",
    workability: "Reliable",
  },
  "United States": {
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
    positioning: "Huge range, strong city infrastructure, and very wide variation by base choice.",
    stayStyle: "Flexible city rotation",
    workability: "High in major hubs",
  },
  "Costa Rica": {
    image:
      "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1400&q=80",
    positioning: "Nature, surf, and lifestyle value when work expectations are calibrated well.",
    stayStyle: "Nature-forward reset stay",
    workability: "Good selectively",
  },
  Panama: {
    image:
      "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?auto=format&fit=crop&w=1400&q=80",
    positioning: "A practical bridge between city efficiency and easier Central American logistics.",
    stayStyle: "Practical urban base",
    workability: "Strong",
  },
  "Dominican Republic": {
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    positioning: "Caribbean access with more variability between resort imagery and real workability.",
    stayStyle: "Island lifestyle choice",
    workability: "More selective",
  },
  Colombia: {
    image:
      "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?auto=format&fit=crop&w=1400&q=80",
    positioning: "Creative city energy, stronger value, and emotionally rich daily life.",
    stayStyle: "Value-led city base",
    workability: "Strong in core cities",
  },
  Brazil: {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80",
    positioning: "High-energy urban life and coast access with bigger differences between destinations.",
    stayStyle: "City-and-coast split",
    workability: "Strong selectively",
  },
  Argentina: {
    image:
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1400&q=80",
    positioning: "A compelling value and culture play for people who want city depth and character.",
    stayStyle: "Urban value stay",
    workability: "Best for independent planners",
  },
  Peru: {
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1400&q=80",
    positioning: "History, altitude, and contrast for people who want texture over frictionless ease.",
    stayStyle: "Adventure-leaning base",
    workability: "Variable",
  },
  Ecuador: {
    image:
      "https://images.unsplash.com/photo-1442544213729-6a15f1611937?auto=format&fit=crop&w=1400&q=80",
    positioning: "An appealing middle ground of value, mountains, and city balance.",
    stayStyle: "Balanced mountain-city stay",
    workability: "Promising",
  },
  Chile: {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    positioning: "Long-distance geography, stronger costs, and a more orderly deep-work feel.",
    stayStyle: "Structured city base",
    workability: "Good for focus",
  },
  Uruguay: {
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    positioning: "Calmer, cleaner urban living with a more understated coastal rhythm.",
    stayStyle: "Refined slow stay",
    workability: "Quietly strong",
  },
  Australia: {
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=80",
    positioning: "Big skies, high comfort, and strong daily infrastructure for longer bases.",
    stayStyle: "Outdoor-led city stay",
    workability: "High-comfort",
  },
  "New Zealand": {
    image:
      "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1400&q=80",
    positioning: "Nature, calm, and cleaner lifestyle pacing if you are comfortable with distance.",
    stayStyle: "Nature-first long stay",
    workability: "Reliable but remote",
  },
  Fiji: {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    positioning: "A reset-oriented island choice for slower weeks and premium tropical atmosphere.",
    stayStyle: "Island recharge stay",
    workability: "Limited",
  },
  "French Polynesia": {
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    positioning: "A dreamier premium island option for people optimizing around beauty and pace.",
    stayStyle: "Premium island escape",
    workability: "Low-pressure best",
  },
};

type BrowseDestinationSeed = Omit<
  BrowseDestination,
  "image" | "positioning" | "stayStyle" | "workability"
>;

export const browseDestinations: BrowseDestination[] = ([
  {
    name: "Morocco",
    continent: "Africa",
    continentSlug: "africa",
    status: "upcoming",
    contentType: "Country guide + base-city shortlist",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "Kenya",
    continent: "Africa",
    continentSlug: "africa",
    status: "upcoming",
    contentType: "Country guide + remote-work setup notes",
    budget: "mid",
    bestForCouples: false,
    bestForDeepWork: true,
  },
  {
    name: "Cape Verde",
    continent: "Africa",
    continentSlug: "africa",
    status: "upcoming",
    contentType: "Country guide + island base comparison",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Egypt",
    continent: "Africa",
    continentSlug: "africa",
    status: "upcoming",
    contentType: "Country guide + city tradeoff review",
    budget: "low",
    bestForCouples: false,
    bestForDeepWork: false,
  },
  {
    name: "South Africa",
    continent: "Africa",
    continentSlug: "africa",
    status: "upcoming",
    contentType: "Country guide + long-stay city ranking",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Tunisia",
    continent: "Africa",
    continentSlug: "africa",
    status: "upcoming",
    contentType: "Country guide + month-stay feasibility notes",
    budget: "low",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "Mauritius",
    continent: "Africa",
    continentSlug: "africa",
    status: "upcoming",
    contentType: "Country guide + island workability review",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Indonesia",
    continent: "Asia",
    continentSlug: "asia",
    status: "published",
    contentType: "Published country guide",
    budget: "low",
    bestForCouples: true,
    bestForDeepWork: true,
    guideSlug: "indonesia",
  },
  {
    name: "Thailand",
    continent: "Asia",
    continentSlug: "asia",
    status: "upcoming",
    contentType: "Country guide + nomad-base comparison",
    budget: "low",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Vietnam",
    continent: "Asia",
    continentSlug: "asia",
    status: "upcoming",
    contentType: "Country guide + city shortlist",
    budget: "low",
    bestForCouples: false,
    bestForDeepWork: true,
  },
  {
    name: "Japan",
    continent: "Asia",
    continentSlug: "asia",
    status: "upcoming",
    contentType: "Country guide + lifestyle fit review",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Sri Lanka",
    continent: "Asia",
    continentSlug: "asia",
    status: "upcoming",
    contentType: "Country guide + coastal base notes",
    budget: "low",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "Malaysia",
    continent: "Asia",
    continentSlug: "asia",
    status: "upcoming",
    contentType: "Country guide + city comparison",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Singapore",
    continent: "Asia",
    continentSlug: "asia",
    status: "upcoming",
    contentType: "Country guide + premium workability review",
    budget: "high",
    bestForCouples: false,
    bestForDeepWork: true,
  },
  {
    name: "United Arab Emirates",
    continent: "Asia",
    continentSlug: "asia",
    status: "upcoming",
    contentType: "Country guide + city tradeoff review",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Portugal",
    continent: "Europe",
    continentSlug: "europe",
    status: "published",
    contentType: "Published country guide",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: true,
    guideSlug: "portugal",
  },
  {
    name: "Spain",
    continent: "Europe",
    continentSlug: "europe",
    status: "published",
    contentType: "Published country guide",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: true,
    guideSlug: "spain",
  },
  {
    name: "Italy",
    continent: "Europe",
    continentSlug: "europe",
    status: "published",
    contentType: "Published country guide",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: false,
    guideSlug: "italy",
  },
  {
    name: "France",
    continent: "Europe",
    continentSlug: "europe",
    status: "upcoming",
    contentType: "Country guide + city shortlist",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Greece",
    continent: "Europe",
    continentSlug: "europe",
    status: "upcoming",
    contentType: "Country guide + seasonal base review",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "Croatia",
    continent: "Europe",
    continentSlug: "europe",
    status: "upcoming",
    contentType: "Country guide + coastal workability notes",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Germany",
    continent: "Europe",
    continentSlug: "europe",
    status: "upcoming",
    contentType: "Country guide + deep-work city ranking",
    budget: "high",
    bestForCouples: false,
    bestForDeepWork: true,
  },
  {
    name: "Malta",
    continent: "Europe",
    continentSlug: "europe",
    status: "upcoming",
    contentType: "Country guide + long-stay island review",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "Mexico",
    continent: "North America",
    continentSlug: "north-america",
    status: "published",
    contentType: "Published country guide",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: true,
    guideSlug: "mexico",
  },
  {
    name: "Canada",
    continent: "North America",
    continentSlug: "north-america",
    status: "upcoming",
    contentType: "Country guide + city fit breakdown",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "United States",
    continent: "North America",
    continentSlug: "north-america",
    status: "upcoming",
    contentType: "Country guide + remote-work city review",
    budget: "high",
    bestForCouples: false,
    bestForDeepWork: true,
  },
  {
    name: "Costa Rica",
    continent: "North America",
    continentSlug: "north-america",
    status: "upcoming",
    contentType: "Country guide + surf-and-work base notes",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "Panama",
    continent: "North America",
    continentSlug: "north-america",
    status: "upcoming",
    contentType: "Country guide + practical setup review",
    budget: "mid",
    bestForCouples: false,
    bestForDeepWork: true,
  },
  {
    name: "Dominican Republic",
    continent: "North America",
    continentSlug: "north-america",
    status: "upcoming",
    contentType: "Country guide + resort-vs-base analysis",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "Colombia",
    continent: "South America",
    continentSlug: "south-america",
    status: "upcoming",
    contentType: "Country guide + city shortlist",
    budget: "low",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Brazil",
    continent: "South America",
    continentSlug: "south-america",
    status: "upcoming",
    contentType: "Country guide + coastal base comparison",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "Argentina",
    continent: "South America",
    continentSlug: "south-america",
    status: "upcoming",
    contentType: "Country guide + city value review",
    budget: "low",
    bestForCouples: false,
    bestForDeepWork: true,
  },
  {
    name: "Peru",
    continent: "South America",
    continentSlug: "south-america",
    status: "upcoming",
    contentType: "Country guide + long-stay feasibility notes",
    budget: "mid",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "Ecuador",
    continent: "South America",
    continentSlug: "south-america",
    status: "upcoming",
    contentType: "Country guide + city balance review",
    budget: "low",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Chile",
    continent: "South America",
    continentSlug: "south-america",
    status: "upcoming",
    contentType: "Country guide + city tradeoff review",
    budget: "high",
    bestForCouples: false,
    bestForDeepWork: true,
  },
  {
    name: "Uruguay",
    continent: "South America",
    continentSlug: "south-america",
    status: "upcoming",
    contentType: "Country guide + calm-base shortlist",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Australia",
    continent: "Oceania",
    continentSlug: "oceania",
    status: "upcoming",
    contentType: "Country guide + city comparison",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "New Zealand",
    continent: "Oceania",
    continentSlug: "oceania",
    status: "upcoming",
    contentType: "Country guide + lifestyle fit review",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: true,
  },
  {
    name: "Fiji",
    continent: "Oceania",
    continentSlug: "oceania",
    status: "upcoming",
    contentType: "Country guide + island stay notes",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: false,
  },
  {
    name: "French Polynesia",
    continent: "Oceania",
    continentSlug: "oceania",
    status: "upcoming",
    contentType: "Country guide + premium island review",
    budget: "high",
    bestForCouples: true,
    bestForDeepWork: false,
  },
 ] as BrowseDestinationSeed[]).map((item) => {
  const visual = browseDestinationVisuals[item.name]!;

  return {
    ...item,
    image: visual.image,
    positioning: visual.positioning,
    stayStyle: visual.stayStyle,
    workability: visual.workability,
  };
});

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

export const guideHubFeatured: GuideHubItem[] = [
  {
    title: "How to Choose Where to Live and Work Remotely",
    description:
      "A practical framework for judging countries, cities, and bases around workload, housing, rhythm, and how daily life actually feels after week one.",
    category: "Choosing destinations",
    readingTime: "6 min read",
    featured: true,
  },
  {
    title: "What Actually Matters When Working Abroad",
    description:
      "The filters that matter more than atmosphere: internet reliability, desk setup, neighborhood friction, and how a place holds up under real deadlines.",
    category: "Setting up your life",
    readingTime: "5 min read",
    featured: true,
  },
  {
    title: "Mistakes That Ruin Remote Work Travel",
    description:
      "The expensive planning errors that create avoidable stress once the booking is locked in, from weak apartments to bad pacing and poor base selection.",
    category: "Costs & logistics",
    readingTime: "5 min read",
    featured: true,
  },
  {
    title: "How to Build a Sustainable Remote Lifestyle",
    description:
      "How to structure movement, routines, and recovery so travel still feels expansive without collapsing your focus or your energy.",
    category: "Work & lifestyle balance",
    readingTime: "7 min read",
    featured: true,
  },
];

export const guideHubCategories: GuideHubCategory[] = [
  {
    title: "Choosing destinations",
    description: "How to compare places before the shortlist becomes expensive.",
    guides: [
      "How to Choose Where to Live and Work Remotely",
      "How to pick a city for a month, not a weekend",
      "What we test before recommending a destination",
    ],
  },
  {
    title: "Setting up your life",
    description: "How to make the apartment, neighborhood, and daily loop actually work.",
    guides: [
      "What Actually Matters When Working Abroad",
      "Apartment filters that prevent productivity mistakes",
      "How to settle into a new base without losing a week",
    ],
  },
  {
    title: "Work & lifestyle balance",
    description: "How to protect focus without turning the trip into a grind.",
    guides: [
      "How to Build a Sustainable Remote Lifestyle",
      "How to protect deep work while still enjoying the place",
      "When a destination is beautiful but operationally wrong",
    ],
  },
  {
    title: "Couples remote travel",
    description: "How shared routines, space, and expectations affect the trip.",
    guides: [
      "Working as a couple while constantly moving",
      "How to align two work rhythms in one destination",
      "Shared travel decisions that reduce friction later",
    ],
  },
  {
    title: "Costs & logistics",
    description: "How to avoid expensive planning errors before they compound.",
    guides: [
      "Mistakes That Ruin Remote Work Travel",
      "How to budget for longer stays more realistically",
      "Booking sequences that reduce friction on arrival",
    ],
  },
];

export const guideHubAll: GuideHubItem[] = [
  ...guideHubFeatured,
  {
    title: "Apartment filters that prevent productivity mistakes",
    description:
      "How to screen listings for desk setup, noise, Wi-Fi risk, and the invisible details that affect a full workweek.",
    category: "Setting up your life",
    readingTime: "4 min read",
  },
  {
    title: "How to settle into a new base without losing a week",
    description:
      "A practical arrival sequence for testing calls, locating backups, and building a reliable daily loop quickly.",
    category: "Setting up your life",
    readingTime: "4 min read",
  },
  {
    title: "How to protect deep work while still enjoying the place",
    description:
      "How to structure mornings, calls, and exploration so the trip supports focus instead of constantly interrupting it.",
    category: "Work & lifestyle balance",
    readingTime: "5 min read",
  },
  {
    title: "When a destination is beautiful but operationally wrong",
    description:
      "How to identify places that look ideal online but break down under noise, weak housing, transport friction, or poor pace.",
    category: "Work & lifestyle balance",
    readingTime: "5 min read",
  },
  {
    title: "How to align two work rhythms in one destination",
    description:
      "How couples can choose a place that works for different focus styles, schedules, and energy levels.",
    category: "Couples remote travel",
    readingTime: "5 min read",
  },
  {
    title: "Shared travel decisions that reduce friction later",
    description:
      "The conversations couples should have before choosing a base, booking a stay, or setting trip expectations.",
    category: "Couples remote travel",
    readingTime: "4 min read",
  },
  {
    title: "How to budget for longer stays more realistically",
    description:
      "A better way to estimate real monthly costs beyond headline rent, including work setup, transit, and convenience spending.",
    category: "Costs & logistics",
    readingTime: "4 min read",
  },
  {
    title: "Booking sequences that reduce friction on arrival",
    description:
      "How to order bookings, transfers, and setup decisions so the first days feel controlled instead of chaotic.",
    category: "Costs & logistics",
    readingTime: "4 min read",
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
    title: "Personalised Remote Plan",
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
    title: "Couple travel strategy",
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
