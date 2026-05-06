import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BriefcaseBusiness,
  Globe,
  Mail,
  Phone,
  SquareCode,
  TreePine,
} from 'lucide-react';

export const profile = {
  name: 'Arkapong Jaroensiri (Prem)',
  title: 'Full Stack Developer',
  headline: 'Full Stack Developer building internal systems and full-stack web applications.',
  shortSummary:
    'I build production-ready internal tools across Django DRF, Node.js, TypeScript, PostgreSQL, Vue.js, React, and C# automation.',
  summary:
    'Full Stack Developer with hands-on experience building internal web applications, RESTful APIs, dashboards, and automation tools. Strong in backend development with Django DRF, Node.js, TypeScript, PostgreSQL, Docker, and GitHub Actions, with frontend experience in Vue.js and React. Delivered a production incident and blacklist management module within a 3-month deadline and built automation tools that reduced manual drafting time by 70%.',
};

export const impactMetrics = [
  {
    value: '70%',
    label: 'Manual drafting time reduction',
    detail: 'Built C# and Python automation tools for structural detailing workflows.',
  },
  {
    value: '3 mo.',
    label: 'Production delivery window',
    detail: 'Delivered an incident and blacklist module within a strict project timeline.',
  },
  {
    value: 'API + UI',
    label: 'Full-stack ownership',
    detail: 'Designed backend workflows, REST APIs, data models, and Vue.js dashboards.',
  },
];

export const contactLinks = [
  { label: '062-610-3571', href: 'tel:+660626103571', icon: Phone as LucideIcon },
  { label: 'arrkpong1@gmail.com', href: 'mailto:arrkpong1@gmail.com', icon: Mail as LucideIcon },
  { label: 'github.com/arrkpong', href: 'https://github.com/arrkpong', icon: Globe as LucideIcon },
  {
    label: 'linkedin.com/in/arrkpong',
    href: 'https://linkedin.com/in/arrkpong/',
    icon: Globe as LucideIcon,
  },
  { label: 'arrkpong.github.io/portfolio', href: 'https://arrkpong.github.io/portfolio', icon: Globe as LucideIcon },
];

export const languages = [
  'Thai: Native',
  'English: Basic',
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: SquareCode,
    items: ['TypeScript', 'JavaScript', 'Python', 'Rust', 'C#'],
  },
  {
    title: 'Backend',
    icon: BriefcaseBusiness,
    items: ['Node.js', 'Django DRF', 'Axum', 'RESTful API'],
  },
  {
    title: 'Frontend',
    icon: Globe,
    items: ['Vue.js', 'React', 'HTML', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Database & DevOps',
    icon: TreePine,
    items: ['PostgreSQL', 'SQLite', 'SQL', 'Docker', 'Nginx', 'GitHub Actions', 'DigitalOcean'],
  },
  {
    title: 'Tools',
    icon: Award,
    items: ['Git', 'GitHub', 'Postman', 'Figma', 'Draw.io', 'DBDiagram.io'],
  },
];

export const softSkills = [
  'Team Collaboration',
  'Adaptability',
  'Problem Solving',
  'Critical Thinking',
  'Time Management',
];

export const experience = [
  {
    role: 'Full Stack Developer / Sole Developer',
    company: 'Central Retail | Contracted by Accord Innovations Co., Ltd.',
    project: 'Top Market System Incident & Blacklist',
    year: 'Jan 2025 - Apr 2025',
    impact: 'Shipped a production internal module in 3 months.',
    technologies: ['Django DRF', 'Vue.js', 'PostgreSQL', 'Subversion'],
    highlights: [
      'Delivered an internal incident reporting and blacklist management module within a strict 3-month project timeline.',
      'Designed and implemented secure RESTful APIs with Django DRF to support incident workflows, blacklist approval logic, data processing, and user access control.',
      'Built a responsive Vue.js dashboard for operational staff to track, review, and approve blacklist submissions.',
      'Structured backend data models and database workflows to maintain reliable incident records and approval history.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'CivilPark International Co. Ltd.',
    project: 'Engineering Data Automation Platform',
    year: 'Jun 2025 - Present',
    impact: 'Reduced manual structural drafting time by 70%.',
    technologies: ['C#', 'Python', 'Revit API'],
    highlights: [
      'Built automation tools using C# and Python that reduced manual structural detailing and drafting time by 70%.',
      'Designed object-oriented data processing logic to extract, transform, and manipulate 3D engineering data through the Revit API.',
      'Improved engineering workflow efficiency by deploying custom automation scripts for repetitive drafting and data preparation tasks.',
    ],
  },
];

export const projects = [
  {
    role: 'Personal Project',
    year: '2026',
    title: 'High-Performance Microservice with Rust',
    description: 'Backend microservice using Rust and Axum for handling concurrent requests efficiently.',
    problem: 'Explore a fast backend service architecture for concurrent request handling and reliable data flow.',
    approach: 'Designed Axum API endpoints backed by PostgreSQL and added Dragonfly for in-memory request processing support.',
    outcome: 'Produced a focused service prototype around concurrency, request throughput, and clean backend boundaries.',
    technologies: ['Rust', 'Axum', 'PostgreSQL', 'Pingora', 'Dragonfly'],
    highlights: [
      'Built a backend microservice using Rust and Axum for handling concurrent requests efficiently.',
      'Designed API endpoints and PostgreSQL-backed data flows for reliable request handling.',
      'Used Dragonfly as an in-memory data store to improve request processing performance.',
    ],
  },
  {
    role: 'Final University Project',
    year: '2023',
    title: 'Top-up Card System',
    description:
      'Web-based top-up card system for card purchases and payment processing.',
    problem: 'Create a complete university project that could process card purchases and payment confirmation flows.',
    approach: 'Built Django backend workflows for purchase records, transaction handling, and Stripe payment integration.',
    outcome: 'Delivered a working e-commerce style top-up card system with secure online payment processing.',
    technologies: ['Django', 'Stripe API'],
    highlights: [
      'Developed a web-based top-up card system for card purchases and payment processing.',
      'Integrated Stripe API for secure online payments.',
      'Designed backend workflows for purchase records, transaction handling, and payment confirmation.',
    ],
  },
];

export const militaryService = {
  location: 'Suranaree Camp, Nakhon Ratchasima Province',
  period: '2018 - 2020',
  rank: 'Private First Class (Pfc.)',
  summary: [
    'Served in administrative and secure multi-department communication roles.',
  ],
};

export const education = {
  school: 'Bangkok University',
  degree: "Bachelor's Degree in Computer Science",
  faculty: 'Faculty of Information Technology and Innovation',
  period: '2021 - 2024',
};

export const certificate = {
  title: 'Certificate of Achievement: Web E-commerce with Python (Django Framework)',
  issuer: 'Kong Ruksiam',
  year: '2023',
};

export const sectionOrder = [
  'Summary',
  'Skills',
  'Experience',
  'Projects',
  'Military Service',
  'Education',
  'Certificate',
  'Contact',
] as const;
