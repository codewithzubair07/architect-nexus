export type WorkMetric = {
  value: string;
  label: string;
};

export type WorkItem = {
  slug: string;
  name: string;
  category: string;
  image: string;
  year: string;
  client: string;
  industry: string;
  services: string;
  duration: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results: WorkMetric[];
};

export const workItems: WorkItem[] = [
  {
    slug: "spice-garden",
    name: "Spice Garden Restaurant",
    category: "Web + E-Commerce",
    image: "/placeholder.jpg",
    year: "2025",
    client: "Spice Garden",
    industry: "Hospitality",
    services: "Web Design, E-Commerce",
    duration: "6 Weeks",
    challenge:
      "Create a premium online ordering experience that reflects the in-store vibe while making repeat orders effortless.",
    solution:
      "We built a high-conversion menu flow, added WhatsApp ordering, and tuned the performance for mobile-first customers.",
    deliverables: [
      "Custom restaurant site",
      "Menu-driven ordering",
      "WhatsApp checkout",
      "SEO-ready pages",
    ],
    results: [
      { value: "3×", label: "Increase in Leads" },
      { value: "40%", label: "Faster Load Time" },
      { value: "500+", label: "WhatsApp Queries Automated" },
    ],
  },
  {
    slug: "autodrive-motors",
    name: "AutoDrive Motors",
    category: "Web + AI Automation",
    image: "/placeholder.jpg",
    year: "2024",
    client: "AutoDrive Motors",
    industry: "Automotive",
    services: "Web Platform, Lead Automation",
    duration: "8 Weeks",
    challenge:
      "A car showroom needed a lead system that could respond instantly and keep the sales team informed.",
    solution:
      "We implemented a conversational WhatsApp flow tied directly into their CRM with automated follow-ups.",
    deliverables: [
      "Interactive inventory site",
      "Lead capture workflow",
      "CRM automation",
      "Analytics dashboard",
    ],
    results: [
      { value: "3×", label: "Increase in Leads" },
      { value: "40%", label: "Faster Load Time" },
      { value: "500+", label: "WhatsApp Queries Automated" },
    ],
  },
  {
    slug: "fitlife-gym",
    name: "FitLife Gym",
    category: "Web + Growth",
    image: "/placeholder.jpg",
    year: "2024",
    client: "FitLife",
    industry: "Fitness",
    services: "Website, Growth Marketing",
    duration: "5 Weeks",
    challenge:
      "FitLife needed a site that could sell memberships and manage class signups seamlessly.",
    solution:
      "We crafted a bold website with landing pages for campaigns and a monthly marketing engine.",
    deliverables: [
      "Landing page system",
      "Membership signup flow",
      "Campaign tracking",
      "Performance reporting",
    ],
    results: [
      { value: "3×", label: "Increase in Leads" },
      { value: "40%", label: "Faster Load Time" },
      { value: "500+", label: "WhatsApp Queries Automated" },
    ],
  },
  {
    slug: "quickkart",
    name: "QuickKart Store",
    category: "E-Commerce",
    image: "/placeholder.jpg",
    year: "2025",
    client: "QuickKart",
    industry: "Retail",
    services: "E-Commerce Build",
    duration: "7 Weeks",
    challenge:
      "Deliver a fast product discovery experience that boosts repeat sales for a growing retailer.",
    solution:
      "We launched a commerce-ready storefront with optimized product pages and instant checkout.",
    deliverables: [
      "Commerce storefront",
      "Product catalog",
      "Payment gateway",
      "WhatsApp support",
    ],
    results: [
      { value: "3×", label: "Increase in Leads" },
      { value: "40%", label: "Faster Load Time" },
      { value: "500+", label: "WhatsApp Queries Automated" },
    ],
  },
  {
    slug: "nexaconsult",
    name: "NexaConsult",
    category: "Web + AI",
    image: "/placeholder.jpg",
    year: "2023",
    client: "NexaConsult",
    industry: "Consulting",
    services: "Web Experience, Automation",
    duration: "6 Weeks",
    challenge:
      "A boutique consultancy wanted to streamline its client onboarding and lead capture.",
    solution:
      "We built a polished site with automated intake forms and a CRM-ready workflow.",
    deliverables: [
      "Lead capture funnels",
      "Automated intake forms",
      "CRM-ready exports",
      "SEO foundation",
    ],
    results: [
      { value: "3×", label: "Increase in Leads" },
      { value: "40%", label: "Faster Load Time" },
      { value: "500+", label: "WhatsApp Queries Automated" },
    ],
  },
  {
    slug: "bloom-florist",
    name: "Bloom Florist",
    category: "Web",
    image: "/placeholder.jpg",
    year: "2023",
    client: "Bloom Florist",
    industry: "Lifestyle",
    services: "Web Design",
    duration: "4 Weeks",
    challenge:
      "Bloom Florist needed a boutique web presence with a smooth inquiry path.",
    solution:
      "We delivered a delicate yet modern layout and a WhatsApp-forward inquiry flow.",
    deliverables: [
      "Custom website",
      "WhatsApp CTA",
      "Image galleries",
      "On-page SEO",
    ],
    results: [
      { value: "3×", label: "Increase in Leads" },
      { value: "40%", label: "Faster Load Time" },
      { value: "500+", label: "WhatsApp Queries Automated" },
    ],
  },
];
