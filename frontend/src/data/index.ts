import type { Project, Recommendation, TechRings, ExperienceItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    num: '01 · Live',
    title: 'Career Development Platform',
    description:
      'Enterprise-scale CDP for a global workforce of 28,000+ users. Architected 1,000+ GraphQL APIs, built real-time WebSocket notifications, and proactively secured the supply chain across 40+ developer repositories.',
    tags: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'WebSockets', 'Redux Toolkit', 'GDPR'],
    meta: 'Live · 28,000+ users · Team of 100+',
    isLive: true,
  },
  {
    id: 2,
    num: '02 · Live',
    title: 'Dealer Management System',
    description:
      'Full-stack DMS replacing manual ledger processes for automotive dealerships. Inventory management, sales tracking, and CRM built with NestJS microservices and domain-driven design. 100% test coverage, 70% efficiency gain.',
    tags: ['React', 'NestJS', 'Microservices', 'Jest', 'PostgreSQL', 'SonarQube'],
    meta: 'Live · 100% Coverage · Team of 10',
    isLive: true,
  },
  {
    id: 3,
    num: '03 · Open Source',
    title: 'Engineering Growth Tracker',
    description:
      'Automated public learning tracker that auto-commits daily LeetCode progress and AWS/AI learning notes via GitHub Actions. Zero manual intervention — fully automated dashboard updating at 9 AM IST daily.',
    tags: ['GitHub Actions', 'Python', 'Automation', 'CI/CD'],
    meta: 'View on GitHub',
    link: 'https://github.com/ekansh-mishra-sde2/engineering-growth-tracker',
    isLive: false,
  },
  {
    id: 4,
    num: '04 · Demo',
    title: 'gRPC + GraphQL Microservice Demo',
    description:
      'Full-stack architecture demo showing React → GraphQL Gateway → gRPC Microservice communication. Demonstrates Protocol Buffers, binary transport, and the gateway pattern for browser-to-microservice communication.',
    tags: ['gRPC', 'GraphQL', 'React', 'Node.js', 'Protobuf'],
    meta: 'View on GitHub',
    link: 'https://github.com/ekansh-mishra-sde2',
    isLive: false,
  },
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    text: "Ekansh consistently delivers robust full-stack solutions. His proactive approach to security — particularly identifying the dependency vulnerability — was impressive. A genuine asset to any team.",
    name: 'Senior Tech Lead',
    title: 'Nagarro · Client Side',
    initials: 'TL',
  },
  {
    text: 'Working with Ekansh on the CDP project was a great experience. He takes ownership of complex features end-to-end and his work on the GraphQL APIs significantly improved our platform\'s performance.',
    name: 'Product Manager',
    title: 'Career Development Platform',
    initials: 'PM',
  },
  {
    text: 'Ekansh earned two Cheerboard nominations from us — and rightly so. He brings both technical depth and team spirit. His React component library saved our team weeks of work.',
    name: 'Engineering Manager',
    title: 'Nagarro',
    initials: 'EM',
  },
  {
    text: 'The supply chain vulnerability Ekansh caught could have been catastrophic. He identified it, documented it clearly, and presented the fix to the entire security team. That\'s senior-level thinking.',
    name: 'Security Architect',
    title: 'Enterprise Client',
    initials: 'SA',
  },
  {
    text: "Ekansh's test coverage work on the DMS was exceptional. 100% coverage with meaningful tests — not just line coverage. Code quality went from messy to production-grade under his guidance.",
    name: 'QA Lead',
    title: 'Dealer Management System',
    initials: 'QA',
  },
  {
    text: "I've worked with many React developers but Ekansh's understanding of performance optimisation is unusually deep. His component library is clean, well-documented and a joy to use.",
    name: 'Frontend Developer',
    title: 'CDP Team',
    initials: 'FE',
  },
];

export const TECH_RINGS: TechRings = {
  r1: [
    { name: 'React',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Redux',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'HTML5',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3',       img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  r2: [
    { name: 'Node.js',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'NestJS',     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
    { name: 'GraphQL',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Express',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Jest',       img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  ],
  r3: [
    { name: 'AWS',        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Docker',     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git',        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub',     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Webpack',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
    { name: 'Tailwind',   img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Linux',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Jira',       img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'VS Code',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'SonarQube',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg' },
  ],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Nagarro',
    role: 'Senior Engineer — Full Stack (React + Node.js)',
    date: 'Jun 2022 – Present',
    location: 'Gurugram, India',
    bullets: [
      'Architected and delivered 1,000+ GraphQL APIs in Node.js, serving 28,000+ global users — optimised query depth and payload to reduce API response time by ~35%.',
      'Engineered an event-driven notification system (email + in-app) using WebSockets, enabling low-latency real-time communication across the platform.',
      'Proactively identified a supply chain vulnerability (CVE-class Axios exploit via unpinned semver ranges) — pinned all dependencies organisation-wide, preventing a potential RAT breach.',
      'Built a reusable React component library with Redux Toolkit, adopted by 40+ developers across a 100-person engineering team.',
      'Developed full-stack DMS using React and NestJS with microservices architecture, improving dealership operational efficiency by 70%.',
      'Achieved 100% frontend and backend test coverage using Jest and React Testing Library with SonarQube-driven quality gates.',
    ],
  },
];
