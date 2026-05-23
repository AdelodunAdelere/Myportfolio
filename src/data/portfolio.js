// ============================================================
// portfolio.js — single source of truth for all your CV data
// Edit this file to update any content on the site.
// ============================================================

import firstProjectImage from '../assets/first.png';
import secondProjectImage from '../assets/second.png';

export const personal = {
  name: "Adelodun Emmanuel Adelere",
  shortName: "Adelere",
  initials: "AEA",
  role: "Software Engineer & Product Designer",
  tagline: "Building interfaces that work — and feel good doing it.",
  bio: "Results-driven Software Engineer & Product Designer with experience in UI design, graphics, and front-end web development. Skilled in delivering user-focused designs and functional digital solutions that improve business productivity. Strong collaborator, fast learner, and passionate about building, optimizing, and improving software products.",
  location: "Lagos, Nigeria",
  email: "leredelodun@gmail.com",
  phone: "09032916948",
  linkedin: "https://linkedin.com", // update with your actual LinkedIn URL
  portfolio: "https://myportfolio-seven-xi-77.vercel.app",                   // update with your actual portfolio URL
  available: true,
};

export const skills = {
  design: ["UI/UX", "Graphic Design", "Figma", "Adobe Suite"],
  development: ["React.js", "JavaScript", "TypeScript", "Node.js", "Express.js", "SQL Database Management"],
};

export const experience = [
  {
    id: 1,
    role: "Graphic Designer",
    company: "VampFi Software",
    period: "April 2025 – June 2025",
    type: "Design",
    bullets: [
      "Created promotional designs for product launches and online platforms.",
      "Applied UI/UX principles to develop clean, user-centric visuals for digital interfaces.",
    ],
  },
  {
    id: 2,
    role: "Graphic Designer",
    company: "Filmo Real Estate",
    period: "April 2025 – June 2025",
    type: "Design",
    bullets: [
      "Designed marketing and social media assets that increased engagement and brand visibility.",
      "Produced digital designs for campaigns, events, and property listings.",
    ],
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "HIIT PLC",
    period: "Jan 2022 – July 2022",
    type: "Engineering",
    bullets: [
      "Enhanced website responsiveness, usability, and cross-device compatibility.",
      "Implemented UI updates and supported e-commerce feature deployment.",
      "Gained practical experience in data analysis — cleaning, visualization, and generating insights.",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Software Engineering",
    institution: "Babcock University",
    period: "Sept 2019 – July 2023",
  },
];

export const certifications = [
  {
    issuer: "HIIT PLC",
    year: "2022",
    items: [
      "Certificate of Completion — Web Development Internship",
      "Certificate of Completion — Graphics Design",
    ],
  },
  {
    issuer: "New Horizons",
    year: "2023",
    items: [
      "Certificate of Completion — Configuring Client Operating Systems",
      "Certificate of Completion — Fundamentals of Computer Security",
      "Certificate of Completion — Oracle Database Admin Workshop",
      "Certificate of Completion — Oracle SQL Fundamentals",
      "Certificate of Completion — CompTIA A+",
    ],
  },
];

// Add your projects here — placeholders for now
export const projects = [
  {
    id: 1,
    title: "Educational Websites",
    description:
      "Responsive music academy website with a student registration system.",
    tags: ["React.js", "TypeScript", "tailwindcss", "vite"],
    featured: true,
    link: "https://stephmusicacademy.netlify.app/",
    image: firstProjectImage,
  },
  {
    id: 2,
    title: "Business/Corporate Websites",
    description:
      "A responsive full-stack React frontend with modular components and a Node.js/Express backend for booking submissions, including automated branded email notifications to both the business and clients via Nodemailer.",
    tags: ["React.js", "Node.js", "Express", "Nodemailer", "vite"],
    featured: true,
    link: "https://themadeplan.netlify.app/",
    image: secondProjectImage,
  },
  
  {
    id: 3,
    title: "VampFi Product Launch Designs",
    description:
      "Created a suite of promotional and interface designs for product launches across digital platforms.",
    tags: ["Graphic Design", "Figma", "UI/UX"],
    featured: false,
    link: "https://www.behance.net/adelereadelodun",
    image: "https://picsum.photos/800/350?random=3",
  },
  {
    id: 4,
    title: "Filmo Real Estate Campaign",
    description:
      "Designed marketing assets and social media visuals that elevated brand visibility and engagement for a real estate company.",
    tags: ["Adobe Suite", "Social Media", "Branding"],
    featured: false,
    link: "https://www.behance.net/adelereadelodun",
    image: "https://picsum.photos/800/350?random=4",
  },
];
