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
    tech: ["ASP.NET Core", "Angular", "SQL Server", "RabbitMQ", "Redis", "Docker"],
    period: "May 2026",
    github: "https://github.com/maheshsingh20/FreshMart",
    stats: [{ label: "Services", value: "12" }, { label: "Tests", value: "xUnit" }, { label: "Feature", value: "AI Cart" }],
    points: [
      "Designed a 12-service cloud-native platform covering catalog, order lifecycle, and payment processing — mirroring core ERP modules with stateless, horizontally scalable microservices behind an API gateway on Docker.",
      "Deployed generative AI via structured few-shot prompting and an agentic tool-calling loop, converting natural language queries into real-time ingredient lists.",
      "Wired Razorpay payment gateway handling webhook callbacks and idempotent order confirmation for reliable checkout.",
      "Implemented xUnit unit test suites across all 12 microservices integrated into the Jenkins CI/CD pipeline for automated testing on every build.",
    ],
    accent: "from-violet-500 to-indigo-500",
    glow: "violet",
  },
  {
    name: "Code And Chill",
    tagline: "Real-time collaborative coding platform with LLM integration",
    category: "Cloud · DevOps",
    tech: ["MERN", "TypeScript", "Socket.io", "MongoDB", "AWS", "Kubernetes"],
    period: "July 2026",
    github: "https://github.com/maheshsingh20/CodeAndChill",
    stats: [{ label: "API Routes", value: "60+" }, { label: "DB Models", value: "15+" }, { label: "Platform", value: "AWS" }],
    points: [
      "Built an event-driven, real-time collaborative coding platform using WebSockets (Socket.io), managing live session state, control handoff, and multi-user synchronization across 60+ REST API endpoints and 15+ MongoDB models.",
      "Integrated the Gemini API to build an LLM agent with tool-calling, retries, and safety rails for code explanation and debugging.",
      "Engineered JWT authentication with bcrypt and role-based access for secure, auditable production operations.",
      "Provisioned and deployed on AWS EC2 using Docker and Kubernetes for containerized orchestration, with Terraform-managed infrastructure as code for repeatable, production-grade deployments.",
    ],
    accent: "from-cyan-500 to-blue-500",
    glow: "cyan",
  },
  {
    name: "MerchantRail",
    tagline: "8-microservice payment gateway with Kafka saga pattern",
    category: "Backend · Distributed Systems",
    tech: ["Java 17", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "gRPC"],
    period: "Jan 2026",
    github: "https://github.com/maheshsingh20/MerchantRail",
    stats: [{ label: "Coverage", value: "85%+" }, { label: "Services", value: "8" }, { label: "Tests", value: "80+ JUnit" }],
    points: [
      "Architected an 8-microservice payment gateway using Hexagonal Architecture with a Kafka saga pattern for distributed transaction coordination across services.",
      "Integrated ISO 8583 bank authorization over gRPC and ISO 20022 SFTP settlement messaging, backed by Redis idempotency and the outbox pattern for reliable event delivery.",
      "Achieved 85%+ test coverage via 80+ JUnit, 12+ Spock BDD, and 15+ Testcontainers integration tests, plus chaos testing with Toxiproxy and OWASP security scans in a GitHub Actions CI/CD pipeline.",
    ],
    accent: "from-emerald-500 to-teal-500",
    glow: "emerald",
  },
  {
    name: "QuantForge",
    tagline: "LLM-assisted algorithmic trading strategy platform",
    category: "AI · FinTech",
    tech: ["MERN", "BullMQ", "WebSocket", "TypeScript", "LLM"],
    period: "2026",
    github: "https://github.com/maheshsingh20/QuantForge---Algorithmic-Trading-Strategy-Backtesting-Platform",
    stats: [{ label: "Execution", value: "BullMQ" }, { label: "Analytics", value: "Real-time" }, { label: "Sandbox", value: "VM2" }],
    points: [
      "Built a MERN-stack platform generating and running algorithmic trading strategies with LLM assistance and sandboxed execution.",
      "Implemented BullMQ job queues for reliable strategy execution and real-time WebSocket analytics for live performance tracking.",
      "Used VM2 sandboxing to safely execute untrusted strategy code in isolation, preventing security vulnerabilities from user-submitted algorithms.",
    ],
    accent: "from-amber-500 to-orange-500",
    glow: "amber",
  },
  {
    name: "FinFlow",
    tagline: "Microservices loan management with full-stack observability",
    category: "Backend · Cloud",
    tech: ["Spring Boot", "AWS", "RabbitMQ", "Prometheus", "Grafana", "Zipkin"],
    period: "2026",
    github: "https://github.com/maheshsingh20/Loan-Management-System",
    stats: [{ label: "Discovery", value: "Eureka" }, { label: "Tracing", value: "Zipkin" }, { label: "Auth", value: "JWT+RBAC" }],
    points: [
      "Built a microservices loan management platform with Eureka service discovery and Spring Cloud Config for centralized configuration management.",
      "Implemented JWT auth and RBAC authorization with RabbitMQ-driven async event processing for decoupled, resilient service communication.",
      "Wired full-stack observability with Prometheus metrics, Grafana dashboards, and Zipkin distributed tracing for production-grade monitoring.",
    ],
    accent: "from-pink-500 to-rose-500",
    glow: "pink",
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
    accent: "from-purple-500 to-fuchsia-500",
    glow: "purple",
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
