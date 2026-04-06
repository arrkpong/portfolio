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
  summary:
    'Full-stack developer focused on scalable, user-focused web applications. I work across frontend and backend with Rust, Python, JavaScript, TypeScript, React, Django, and Axum, and I care about clean delivery, maintainability, and practical problem solving.',
};

export const contactLinks = [
  { label: '062-610-3571', href: 'tel:+660626103571', icon: Phone as LucideIcon },
  { label: 'arrkpong1@gmail.com', href: 'mailto:arrkpong1@gmail.com', icon: Mail as LucideIcon },
  { label: 'github.com/arrkpong', href: 'https://github.com/arrkpong', icon: Globe as LucideIcon },
  {
    label: 'linkedin.com/in/arrkpong',
    href: 'https://linkedin.com/in/arrkpong/',
    icon: Globe as LucideIcon,
  },
  { label: 'arrkpong.github.io', href: 'https://arrkpong.github.io', icon: Globe as LucideIcon },
];

export const languages = [
  'English: Basic (Reading, Writing, Speaking)',
  'Thai: Native (Reading, Writing, Speaking)',
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: SquareCode,
    items: ['Rust', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: BriefcaseBusiness,
    items: ['React', 'Django', 'Axum', 'Tailwind CSS', 'Vue.js'],
  },
  {
    title: 'Databases & Infra',
    icon: TreePine,
    items: ['PostgreSQL', 'SQLite', 'Docker', 'Nginx', 'DigitalOcean'],
  },
  {
    title: 'Delivery & Tools',
    icon: Award,
    items: ['Git', 'GitHub Actions', 'Postman', 'Figma', 'Draw.io', 'DBDiagram.io'],
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
    role: 'Sole Developer',
    company: 'Contracted by Accord Innovations Co., Ltd',
    project: 'Top Market system Incident & Blacklist (Central Retail)',
    year: '2025',
    technologies: ['Django (DRF)', 'Vue.js', 'Postgres', 'Subversion'],
    highlights: [
      'Implemented an incident reporting and blacklist management module for a Top Market system under a fast-paced 3-month contract.',
      'Used Django to create secure and scalable RESTful APIs for managing incidents, user reports, and blacklist logic.',
      'Developed a user-friendly front-end with Vue.js for internal staff to efficiently review, approve, or reject incident reports and blacklist submissions.',
    ],
  },
  {
    role: 'Team Developer',
    company: 'CivilPark International Co. Ltd.',
    project: 'Engineering Data Automation Platform',
    year: '2025-2026',
    technologies: ['Revit', 'Python'],
    highlights: [
      'Analyzed existing engineering workflows to identify bottlenecks and spearheaded automation initiatives, significantly reducing manual detailing time.',
      'Conducted rigorous software testing and implemented scripts to automate structural data processes, enhancing overall operational efficiency.',
    ],
  },
];

export const projects = [
  {
    role: 'Sole Developer',
    year: '2023',
    title: 'Top-up Card System',
    description:
      'Web-based top-up card system to handle card purchases and payments.',
    technologies: ['Django', 'Stripe Payment'],
    highlights: [
      'Integrated Stripe API for secure online payment processing.',
      'Ensured high availability and scalability for handling multiple transactions.',
    ],
  },
  {
    role: 'Sole Developer',
    year: '2026',
    title: 'High-Performance Microservice with Rust',
    description: 'High-performance backend service using Rust and Axum capable of handling concurrent requests efficiently.',
    technologies: ['Axum', 'Postgres', 'Pingora', 'Dragonfly'],
    highlights: ['Built with a focus on concurrency, throughput, and clean service boundaries.'],
  },
];

export const militaryService = {
  location: 'Suranaree Camp, Nakhon Ratchasima Province',
  period: '2018 - 2020',
  rank: 'Private First Class (Pfc.)',
  summary: [
    'Served as a multi-departmental messenger at the 3rd Infantry Division HQ and 3rd Infantry Regiment, supporting the Operations, Intelligence, Finance, and Deputy Commander offices.',
    'Played a key role in ensuring timely and secure communication across departments, handling both routine and time-sensitive messages.',
    'Assisted in administrative support and coordination under high-pressure and confidential environments.',
    'Developed patience, responsibility, and organizational skills applicable to both military and civilian team environments.',
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
