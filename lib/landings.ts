import { extraServices } from "./content";

export type Landing = {
  meta: { title: string; description: string; path: string };
  brandName: string;
  whatsappText: string;
  hero: {
    pill: string;
    title: string;
    highlight: string;
    lead: string;
    callLabel: string;
    quoteLabel: string;
    ticks: string[];
    image: string;
    imageAlt: string;
    badge: string;
  };
  trust: { title: string; sub: string }[];
  quote: {
    eyebrow: string;
    title: string;
    lead: string;
    urgent: string;
    issueLabel: string;
    issues: string[];
    fromLabel: string;
    fromError: string;
    toPlaceholder: string;
    submitLabel: string;
    successNoun: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: { num: string; title: string; body: string }[];
    cta: string;
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { n: string; title: string; body: string }[];
    noteStrong: string;
    noteBody: string;
  };
  why: {
    eyebrow: string;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    reasons: { title: string; body: string }[];
  };
  reviewsTitle: string;
  areas: { eyebrow: string; lead: string; items: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { title: string; lead: string; whatsappLabel: string };
  stickyCallLabel: string;
};

const reviews = [
  { quote: "Hello I was in need of recovery today and within 25 minutes Azad was able to come and tow my vehicle in the middle of the night and he was such a lovely person and very cooperative. Thank you for your service.", name: "Adil Hussain", meta: "Google review · 6 months ago" },
  { quote: "Brilliant service, quick and efficient. Good price and friendly service. Came to me within 30 minutes.", name: "Jodie Jasmin", meta: "Google review · 7 months ago" },
  { quote: "I would highly recommend this recovery, gave me a very good price after hours, late at night. Came on time, was very helpful and polite and assisted with any issues. I was very happy with the service.", name: "Dayal Mankoo", meta: "Google review · 3 months ago" },
  { quote: "Had a great experience with this recovery truck service. They came out promptly to collect my car and were extremely helpful from start to finish. The whole process was handled smoothly and with care.", name: "Mufeed Mohammed", meta: "Google review · 8 months ago" },
  { quote: "1000% recommend — they rescued me at 2am, fast and reliable.", name: "Ikwunze Jessica", meta: "Google review · a year ago" },
  { quote: "They helped us in the middle of the night. Quick service and reasonable price, thanks again.", name: "Student 123", meta: "Google review · 10 months ago" },
  { quote: "Very prompt with getting to me, smooth process and great customer service.", name: "Anil Banga", meta: "Google review · a year ago" },
];
export const googleReviews = reviews;

const baseAreas = [
  "Birmingham City Centre", "Perry Barr", "Aston", "Erdington", "Sutton Coldfield", "Solihull",
  "Bordesley Green", "Small Heath", "Handsworth", "Edgbaston", "Selly Oak", "Kings Heath",
  "West Bromwich", "Walsall", "Dudley", "Wolverhampton",
];

export const carTowing: Landing = {
  meta: {
    title: "Car Towing Birmingham | 24 Hour Tow Truck | ABC",
    description: "Need a tow truck in Birmingham? Call ABC for 24/7 car towing and an upfront quote.",
    path: "/car-towing-birmingham/",
  },
  brandName: "Car Towing",
  whatsappText: "Hi ABC, I need a tow. Pickup:  Destination:",
  hero: {
    pill: "Tow trucks available now",
    title: "Car Towing Birmingham",
    highlight: "24 Hour Tow Truck",
    lead: "Need a tow? ABC is a local Birmingham towing company offering emergency, local and long-distance car towing — to your garage, home or agreed destination. Upfront quote on the phone.",
    callLabel: "Call now to arrange a tow",
    quoteLabel: "Towing quote",
    ticks: ["Upfront towing quotes", "Local & long distance", "Tow to your garage", "24 hour service"],
    image: "/hero-truck1.webp",
    imageAlt: "ABC tow truck towing a car in Birmingham",
    badge: "local towing", // shown as "<RATING> rated local towing"
  },
  trust: [
    { title: "24 hour", sub: "Emergency towing" },
    { title: "Upfront quotes", sub: "Price agreed before we go" },
    { title: "Local company", sub: "Based in Birmingham" },
    { title: "Fully insured", sub: "Your car is covered" },
  ],
  quote: {
    eyebrow: "Upfront towing quote",
    title: "Get a towing quote today.",
    lead: "Share your pickup and destination details and we'll come back with a fixed price — local tows across Birmingham or long distance anywhere in the UK.",
    urgent: "Need a tow right now? Calling is fastest.",
    issueLabel: "Type of tow",
    issues: ["Local tow", "Long distance", "To a garage", "Emergency"],
    fromLabel: "Pickup location",
    fromError: "Please add the pickup location.",
    toPlaceholder: "Garage, home or agreed destination",
    submitLabel: "Get my towing quote",
    successNoun: "towing quote",
  },
  services: {
    eyebrow: "Car towing service",
    title: "Local & long distance towing.",
    items: [
      { num: "01", title: "Emergency Towing", body: "Car won't go? A tow truck is dispatched straight to you, any time of day or night." },
      { num: "02", title: "Local Car Towing", body: "Quick tows across Birmingham and the West Midlands — home, garage or dealer." },
      { num: "03", title: "Long Distance Towing", body: "Car towing to any destination in the UK, with the price agreed up front." },
      { num: "04", title: "Tow To A Garage", body: "MOT, repairs or servicing — we tow your car to your garage and drop the keys." },
      ...extraServices.map(({ title, body }, i) => ({ num: String(5 + i).padStart(2, "0"), title, body })),
    ],
    cta: "Call now to arrange a tow",
  },
  how: {
    eyebrow: "How our towing works",
    title: "A tow truck near you, fast.",
    steps: [
      { n: "1", title: "Call or WhatsApp", body: "Share pickup and destination details, plus your vehicle make and model." },
      { n: "2", title: "Get your upfront quote", body: "We confirm the towing price and ETA, then send the nearest tow truck." },
      { n: "3", title: "Towed to your destination", body: "Your car is secured on a flatbed and delivered to the agreed address." },
    ],
    noteStrong: "Not urgent?",
    noteBody: "We can book a tow for a time that suits you — ideal for garage drop-offs and MOT runs.",
  },
  why: {
    eyebrow: "Towing company Birmingham",
    title: "Birmingham's local 24 hour towing.",
    body: "ABC Car Towing Birmingham isn't a national call centre. You speak directly to the local drivers who'll tow your car — with the price agreed before we set off.",
    image: "/why-driver.webp",
    imageAlt: "Car secured on an ABC flatbed tow truck",
    reasons: [
      { title: "24 hour towing service", body: "A real person answers, day or night, including bank holidays." },
      { title: "Upfront car towing quotes", body: "Fixed price agreed on the phone. No surprises." },
      { title: "Local towing company", body: "Tow trucks based in Birmingham, so we reach you quickly." },
      { title: "Local & long distance", body: "Across the city or across the country." },
      { title: "Safe flatbed towing", body: "Your car is secured properly for the whole journey." },
    ],
  },
  reviewsTitle: "What customers say",
  areas: {
    eyebrow: "Towing near me",
    lead: "Local tow trucks across Birmingham and the West Midlands, plus long-distance towing to any destination in the UK.",
    items: [...baseAreas, "UK-wide long distance"],
  },
  faq: {
    title: "Towing questions",
    items: [
      { q: "How quickly can a tow truck get to me?", a: "For emergency towing in Birmingham we typically arrive in 30–45 minutes. Booked tows arrive at the agreed time." },
      { q: "How much does car towing cost?", a: "It depends on distance and vehicle. You get an upfront towing quote before we dispatch — no hidden fees." },
      { q: "Do you do long-distance towing?", a: "Yes. We tow locally across Birmingham and long distance to anywhere in the UK." },
      { q: "Can you tow my car to my garage?", a: "Yes — to your garage, home, a dealer or any agreed destination. Just tell us the address." },
      { q: "Is your towing service available 24 hours?", a: "Yes. Our 24 hour towing service runs day and night, including weekends and bank holidays." },
    ],
  },
  final: {
    title: "Need a tow truck? Call now.",
    lead: "24 hour car towing in Birmingham. Upfront quote, local tow truck, towed to your garage, home or agreed destination.",
    whatsappLabel: "Or WhatsApp pickup & destination",
  },
  stickyCallLabel: "Call to arrange a tow",
};

export const carBreakdownRecovery: Landing = {
  meta: {
    title: "Car Recovery Birmingham | 24/7 Breakdown Recovery | ABC",
    description: "Car breakdown in Birmingham? Call ABC for 24/7 car, van and accident recovery with an upfront quote.",
    path: "/car-breakdown-recovery-birmingham/",
  },
  brandName: "Car Recovery",
  whatsappText: "Hi ABC, I need a recovery. My location is:",
  hero: {
    pill: "Recovery trucks available now",
    title: "Car Recovery Birmingham",
    highlight: "24/7 Breakdown Recovery",
    lead: "Broken down? Call ABC for emergency car and van recovery anywhere in Birmingham. Upfront quote on the phone, then a local recovery truck heads straight to you.",
    callLabel: "Call now for recovery",
    quoteLabel: "Get a quote",
    ticks: ["Upfront recovery quotes", "Cars & vans", "Accident recovery", "Any destination"],
    image: "/hero-truck222.webp",
    imageAlt: "Recovery truck loading a broken-down car in Birmingham",
    badge: "local recovery", // shown as "<RATING> rated local recovery"
  },
  trust: [
    { title: "24 hour", sub: "Day, night, weekends" },
    { title: "Upfront quotes", sub: "Price agreed before we go" },
    { title: "Local trucks", sub: "Based in Birmingham" },
    { title: "Fully insured", sub: "Your vehicle is covered" },
  ],
  quote: {
    eyebrow: "Upfront recovery quote",
    title: "Get a car recovery quote.",
    lead: "Share your location and vehicle details and we'll come back with a fixed price to take it to your chosen destination — garage, home or anywhere in the UK.",
    urgent: "Stuck right now? Calling is fastest.",
    issueLabel: "What's happened?",
    issues: ["Breakdown", "Accident", "Won't start", "Other"],
    fromLabel: "Where is the vehicle?",
    fromError: "Please add where the vehicle is.",
    toPlaceholder: "Your garage, home or postcode",
    submitLabel: "Get my upfront quote",
    successNoun: "upfront quote",
  },
  services: {
    eyebrow: "Vehicle recovery Birmingham",
    title: "Vehicle unable to move? We'll recover it.",
    items: [
      { num: "01", title: "Breakdown Recovery", body: "Engine, gearbox, electrical or overheating failure — loaded safely and taken where you need." },
      { num: "02", title: "Accident Recovery", body: "Careful recovery of accident-damaged vehicles from the roadside or scene." },
      { num: "03", title: "Van Recovery", body: "Van breakdown recovery for tradespeople and businesses, so you lose as little time as possible." },
      { num: "04", title: "Non-runners", body: "Won't start, no keys, flat tyres or stuck — we recover vehicles that can't move." },
      ...extraServices.map(({ title, body }, i) => ({ num: String(5 + i).padStart(2, "0"), title, body })),
    ],
    cta: "Call to check availability now",
  },
  how: {
    eyebrow: "Broken down? Here's what happens",
    title: "A recovery truck near you, fast.",
    steps: [
      { n: "1", title: "Call or WhatsApp", body: "Share your location and vehicle details — drop a pin if you're unsure where you are." },
      { n: "2", title: "Get your upfront quote", body: "We confirm the price and ETA, then dispatch the nearest recovery truck." },
      { n: "3", title: "Recovered to your destination", body: "Your vehicle is loaded and taken to your chosen garage, home or address." },
    ],
    noteStrong: "On a motorway or busy road?",
    noteBody: "Put your hazards on, get behind the barrier and away from traffic, then call us.",
  },
  why: {
    eyebrow: "Local car recovery service",
    title: "Birmingham's local 24 hour recovery.",
    body: "ABC Car Recovery Birmingham isn't a national call centre. You speak directly to the local team who'll come and recover your vehicle — with the price agreed before we set off.",
    image: "/why-driver.webp",
    imageAlt: "ABC recovery driver with truck",
    reasons: [
      { title: "24/7 breakdown recovery", body: "A real person answers, day or night, including bank holidays." },
      { title: "Upfront recovery quotes", body: "Fixed price agreed on the phone. No surprises." },
      { title: "Local to Birmingham", body: "Trucks based locally, so help reaches you quickly." },
      { title: "Cars, vans & accidents", body: "Breakdowns, non-runners and accident-damaged vehicles." },
      { title: "No membership needed", body: "Pay per job — no breakdown cover required." },
    ],
  },
  reviewsTitle: "Rescued drivers say",
  areas: {
    eyebrow: "Recovery near me",
    lead: "Local trucks across Birmingham and the West Midlands, including the M5, M6, M42 and M6 Toll. Recovery to any destination in the UK.",
    items: [...baseAreas, "M6 / M5 / M42"],
  },
  faq: {
    title: "Recovery questions",
    items: [
      { q: "How quickly can a recovery truck get to me?", a: "Within Birmingham we typically arrive in 30–45 minutes, depending on traffic and location. We'll give you a realistic ETA when you call." },
      { q: "How much does car recovery cost?", a: "It depends on distance and vehicle. We give you an upfront quote before dispatching — no hidden fees on arrival." },
      { q: "Do you do van recovery?", a: "Yes. We recover cars and vans, including non-runners and accident-damaged vehicles." },
      { q: "Where can you take my vehicle?", a: "Anywhere you choose — your garage, home, a dealer or a destination elsewhere in the UK." },
      { q: "Do I need breakdown cover or membership?", a: "No. There's no membership — just call when you need us and pay per job." },
    ],
  },
  final: {
    title: "Broken down? Call us now.",
    lead: "24/7 emergency car recovery in Birmingham. Upfront quote, local truck, recovery to your chosen destination.",
    whatsappLabel: "Or WhatsApp your location",
  },
  stickyCallLabel: "Call for recovery",
};
