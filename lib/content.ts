import { whatsappLink } from "./whatsapp";

export const PHONE_DISPLAY = "07356 202939";
export const PHONE_TEL = "tel:+447356202939";
export const WHATSAPP_URL = whatsappLink();
export const EMAIL = "info@abccarrecoverybirmingham.co.uk";

// Google Business Profile rating — update when it changes.
export const RATING = "4.9";
export const REVIEW_COUNT = 59;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Free quote", href: "#quote" },
  { label: "Areas covered", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const trust = [
  { title: "24/7/365", sub: "Nights, weekends, holidays" },
  { title: "Fixed prices", sub: "Quoted before we set off" },
  { title: "Fully insured", sub: "Your vehicle is covered" },
  { title: "Nationwide", sub: "Birmingham-based, UK-wide" },
];

// Garage-side services, shown on every page after the recovery services.
export const extraServices = [
  { tag: "Garage", title: "Garage Services", body: "Servicing, diagnostics and repairs. We can collect your car, fix it and bring it back to you." },
  { tag: "Mobile", title: "Mobile Mechanic", body: "Repairs at your home, workplace or roadside, so many faults are fixed on the spot without a tow." },
  { tag: "Garage", title: "MOT Testing", body: "MOT tests for cars and vans, with collection and drop-off available so you don't lose your day." },
];

export const services = [
  { num: "01", tag: "Most called", title: "Breakdown Recovery", body: "Engine failure, gearbox, overheating — we load your vehicle and take it to your garage or home." },
  { num: "02", tag: "Priority", title: "Accident Recovery", body: "Safe, careful recovery of accident-damaged and non-running vehicles from the roadside." },
  { num: "03", tag: "Roadside", title: "Jumpstart", body: "Flat battery? We'll get you started on the spot so you can carry on with your day." },
  { num: "04", tag: "Roadside", title: "Refuelling", body: "Run out of fuel or filled up with the wrong one? We'll get you moving again." },
  { num: "05", tag: "Winching", title: "Stuck Vehicle", body: "Ditches, mud, car parks, tight spots — we winch and recover vehicles from awkward places." },
  { num: "06", tag: "Planned", title: "Vehicle Transport", body: "Auction collections (Copart, Synetiq), garage runs and long-distance car moves." },
  ...extraServices.map((x, i) => ({ num: String(7 + i).padStart(2, "0"), ...x })),
];

export const steps = [
  { n: "1", title: "Call or WhatsApp", body: "Tell us where you are and what's happened. Send a pin if you're unsure." },
  { n: "2", title: "Get a fixed price & ETA", body: "We confirm the cost up front and dispatch the nearest truck." },
  { n: "3", title: "We recover your vehicle", body: "Loaded safely and delivered to your garage, home or anywhere you choose." },
];

export const reasons = [
  { title: "Available 24/7", body: "Day or night, weekends and bank holidays — a real person answers." },
  { title: "Fast response", body: "Local trucks positioned around Birmingham to reach you quickly." },
  { title: "Professional team", body: "Trained, friendly recovery drivers who treat your vehicle with care." },
  { title: "Affordable pricing", body: "Transparent, fixed quotes with no hidden fees." },
  { title: "All vehicle types", body: "Cars, vans, 4x4s, non-runners and accident-damaged vehicles." },
];

export const areas = [
  "Birmingham City Centre", "Perry Barr", "Aston", "Erdington", "Sutton Coldfield", "Solihull",
  "Bordesley Green", "Small Heath", "Handsworth", "Edgbaston", "Selly Oak", "Kings Heath",
  "West Bromwich", "Walsall", "Dudley", "Wolverhampton", "M6 / M5 / M42",
];

export const reviews = [
  { quote: "Helped me when I was stuck on the motorway. Quick, calm and professional — great service.", name: "Verified customer", meta: "Motorway recovery" },
  { quote: "First class from start to finish. Kept us informed the whole way and delivered the car home on time.", name: "Verified customer", meta: "Birmingham → Norfolk" },
  { quote: "Collected my car from the auction yard the same day. Fair price and no hassle at all.", name: "Verified customer", meta: "Auction collection" },
  { quote: "Battery died late at night. They answered straight away and had me going within the hour.", name: "Verified customer", meta: "Jumpstart" },
];

export const faqs = [
  { q: "How quickly can you get to me?", a: "Within Birmingham we typically arrive in 30–45 minutes, depending on traffic and your exact location. We'll give you a realistic ETA on the phone." },
  { q: "How much does recovery cost?", a: "Prices depend on distance and vehicle type. We quote a fixed price before dispatching — no hidden fees, no surprises on arrival." },
  { q: "Do you recover vans and 4x4s?", a: "Yes. We recover cars, vans, 4x4s and non-runners, including accident-damaged vehicles." },
  { q: "Can you collect from motorways?", a: "Yes — we cover the M5, M6, M42, M6 Toll and surrounding A-roads. Get to a safe place behind the barrier and call us." },
  { q: "Do you collect from Copart or Synetiq auctions?", a: "Yes. We regularly collect from auction sites and deliver to your home or garage, locally or nationwide." },
  { q: "Do I need to be a member?", a: "No membership needed. Call whenever you need us and pay per job." },
];

export const needOptions = ["Breakdown", "Accident", "Jumpstart", "Transport"] as const;
