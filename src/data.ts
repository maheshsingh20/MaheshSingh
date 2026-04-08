export const profile = {
  name: "Mahesh Singh",
  title: "Software Engineer",
  location: "Ludhiana, Punjab (141003), India",
  phone: "+91 6284492546",
  email: "maheshsingh0905a@gmail.com",
  linkedin: "https://linkedin.com/in/maheshsingh20",
  github: "https://github.com/maheshsingh20",
  summary:
    "Software Engineer at Capgemini building distributed systems on AWS serving 10k+ users. Codeforces Expert (Peak Rating: 1859 — Top 1% globally). Proficient in Java, Python, C++, distributed systems, and scalable backend architecture. Hands-on AWS experience across EC2, S3, Lambda, and CodeBuild — deploying and maintaining production-grade cloud infrastructure.",
};

export const skills = {
  Languages: ["Python", "Java", "TypeScript", "C++", "C#"],
  Frontend: ["React", "Shadcn", "Tailwind", "Angular"],
  Backend: ["NodeJs", "ASP.NET", "Microservices Architecture"],
  Databases: ["MongoDB", "MySQL", "NoSQL"],
  Cloud: ["AWS EC2", "S3", "Lambda", "CodeCommit", "CodeBuild"],
  DevOps: ["Docker", "Terraform", "Jenkins", "Kubernetes", "CI/CD"],
  "AI & LLMs": ["LangChain", "Conversational AI", "Agentic AI"],
  "Core CS": ["Linux", "System Design", "Distributed Systems"],
};

export const achievements = [
  "Codeforces Max Rating: 1859 (Top 1% globally)",
  "Global Rank 77 in Codeforces Round 1046 (30k participants)",
  "Top 1% performer among 30k+ participants across multiple competitive programming contests",
];

export const experience = [
  {
    company: "Capgemini India",
    role: "Software Engineer Trainee",
    type: "Onsite",
    period: "Dec 2025 – Present",
    points: [
      "Optimized 40+ SQL queries via Entity Framework in a production ERP serving 10k+ users, reducing latency by 25%.",
      "Automated cloud deployment pipeline using Jenkins and CI/CD, eliminating manual releases and reducing deploy time by 40%.",
      "Diagnosed and resolved 15+ critical REST API failures, improving system uptime from 94% to 99.2%.",
    ],
  },
  {
    company: "Tech Solutions Pvt. Ltd.",
    role: "Software Engineering Intern",
    type: "Remote",
    period: "May 2025 – Aug 2025",
    points: [
      "Optimized and deployed Node/Express REST services following RESTful best practices, achieving 20% reduction in API latency.",
      "Architected MongoDB data models supporting 5,000+ records with indexed query optimization for high-availability reads.",
      "Collaborated in Agile sprints (2-week cycles) using Git workflows, PR reviews, and CI/CD pipelines.",
    ],
  },
  {
    company: "Outlier AI",
    role: "Software Contributor",
    type: "Remote",
    period: "Oct 2024 – Apr 2025",
    points: [
      "Streamlined dataset preprocessing pipelines in Python, increasing processing throughput by 25%.",
      "Delivered 500+ annotated code samples across Python, Java, and C++ for LLM fine-tuning.",
    ],
  },
];

export const projects = [
  {
    name: "FreshMart",
    tagline: "AI-powered grocery microservices platform",
    category: "Full Stack · Microservices",
    tech: ["ASP.NET Core", "Angular", "SQL", "RabbitMQ", "Docker"],
    period: "March 2026",
    github: "https://github.com/maheshsingh20/FreshMart",
    stats: [{ label: "Services", value: "3+" }, { label: "Architecture", value: "Cloud" }, { label: "Feature", value: "AI Cart" }],
    points: [
      "Architected cloud-native microservices (catalog, cart, orders) with inter-service isolation and clean architecture, deployed on Docker.",
      "Integrated asynchronous communication via RabbitMQ for resilient, highly-available order processing at scale.",
      "Implemented AI-driven meal-to-cart feature using LLM APIs, converting natural language queries into structured ingredient lists.",
    ],
    accent: "from-violet-500 to-indigo-500",
    glow: "violet",
  },
  {
    name: "Code And Chill",
    tagline: "Distributed online judge with sandboxed execution",
    category: "Cloud · DevOps",
    tech: ["MERN", "AWS EC2", "Docker", "Gemini API", "CI/CD"],
    period: "Jan 2026",
    github: "https://github.com/maheshsingh20/CodeAndChill",
    stats: [{ label: "Uptime", value: "99%" }, { label: "Languages", value: "5+" }, { label: "Platform", value: "AWS" }],
    points: [
      "Built and hosted a distributed coding platform on AWS EC2 with Docker containerization, achieving 99% service availability.",
      "Implemented sandboxed code execution engine with container-level isolation, supporting 5+ languages with automated verdicts.",
      "Designed secure multi-user authentication and ranking system with role-based access control.",
    ],
    accent: "from-cyan-500 to-blue-500",
    glow: "cyan",
  },
  {
    name: "Clueso.ai",
    tagline: "Agentic AI platform for video content creation",
    category: "AI · SaaS",
    tech: ["MERN", "Agentic AI", "TypeScript", "LangChain"],
    period: "Dec 2025",
    github: "https://github.com/maheshsingh20/Clueso.io",
    stats: [{ label: "Edit Time", value: "−78%" }, { label: "AI Agents", value: "Multi" }, { label: "Access", value: "RBAC" }],
    points: [
      "Built an AI-powered platform with real-time collaboration, role-based access control, and multi-tenant workspace isolation.",
      "Engineered Agentic AI pipelines for script extraction, auto-captions, and voiceover generation, cutting editing time from 45 to 10 min.",
    ],
    accent: "from-pink-500 to-rose-500",
    glow: "pink",
  },
];

export const certifications = [
  { name: "Oracle Cloud Infrastructure 2025 Developer Professional (1Z0-1084-25)", date: "Oct 2025" },
  { name: "Oracle Cloud Infrastructure 2025 DevOps Professional (1Z0-1109-25)", date: "Oct 2025" },
];

export const education = {
  institution: "Lovely Professional University",
  degree: "B.Tech in Computer Science and Engineering",
  gpa: "TGPA: 8.3/10",
  period: "Aug 2022 – Present",
  location: "Punjab, India",
};

export const leadership = {
  org: "Coding Club – Lovely Professional University",
  role: "Core Committee Member",
  period: "Aug 2023 – May 2025",
  points: [
    "Organized workshops and hackathons for 150+ members, boosting engagement by 40%.",
    "Guided and coached 20+ juniors in DSA and full-stack engineering concepts.",
  ],
};
