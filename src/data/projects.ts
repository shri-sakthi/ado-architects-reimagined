import heroImage from "@/assets/hero-ado.jpg";
import imgIndustrial from "@/assets/project-industrial.jpg";
import imgCorporate from "@/assets/project-corporate.jpg";
import imgEducation from "@/assets/project-education.jpg";
import imgInterior from "@/assets/project-interior.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  client?: string;
  year?: string;
  location?: string;
  cover: string;
  images: string[];
  description: string;
  features: string[];
};

export const categories = [
  "Industrial",
  "Corporate",
  "Retirement/Healthcare",
  "Education",
  "Sport",
  "Project Management",
  "Retail",
  "Religious",
  "Accommodation",
  "Renovations/Historical",
  "Technological",
  "Sustainability",
];

export const featuredProjects: Project[] = [
  {
    slug: "raven-industrial-park",
    title: "Raven Industrial Park",
    category: "Industrial",
    client: "Confidential",
    year: "2024",
    location: "Gauteng, South Africa",
    cover: imgIndustrial,
    images: [imgIndustrial, imgInterior, imgIndustrial],
    description:
      "A high‑performance logistics and manufacturing campus focusing on efficiency, flexibility, and sustainability.",
    features: [
      "Efficient circulation and loading design",
      "Optimised daylight and thermal performance",
      "Future‑proof modular bays",
    ],
  },
  {
    slug: "azure-corporate-hq",
    title: "Azure Corporate HQ",
    category: "Corporate",
    client: "Azure Group",
    year: "2023",
    location: "Cape Town, South Africa",
    cover: imgCorporate,
    images: [imgCorporate, imgInterior, imgCorporate],
    description:
      "A refined, people‑centric workplace that balances transparency, collaboration, and acoustic comfort.",
    features: [
      "Energy‑efficient glass facade",
      "Flexible work neighbourhoods",
      "Biophilic interior accents",
    ],
  },
  {
    slug: "westbrook-learning-centre",
    title: "Westbrook Learning Centre",
    category: "Education",
    client: "Westbrook College",
    year: "2022",
    location: "Western Cape, South Africa",
    cover: imgEducation,
    images: [imgEducation, imgInterior, imgEducation],
    description:
      "A contemporary learning environment with sheltered courtyards and generous communal spaces.",
    features: [
      "Passive shading strategies",
      "Robust, low‑maintenance materials",
      "Inclusive, accessible design",
    ],
  },
];

export const hero = {
  image: heroImage,
  headline: "Innovative Designs, Timeless Structures",
  sub: "Architects crafting purposeful spaces across industrial, corporate, education, healthcare and beyond.",
};
