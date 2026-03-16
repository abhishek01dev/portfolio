import { PortfolioData } from "../types";

export const portfolio: PortfolioData = {
  profile: {
    name: "Abhishek Kumar Singh",
    title: "Software Development Engineer / Full Stack Engineer / GenAI Engineer",
    logoText: "Abhishek.dev",
    resumeUrl: "/Abhishek%20Kumar%20Singh.pdf",
    tagline: "Building Scalable Software, Intelligent Systems, and GenAI-Powered Digital Experiences.",
    subTagline: "Full Stack Engineer crafting high-performance products with modern architecture and AI-first thinking.",
    about: [
      "I am an experienced Software Development Engineer with 4+ years of expertise in full-stack development using Node.js, TypeScript, React.js, MySQL, MongoDB, and modern web technologies.",
      "I have built scalable, high-performance applications across multiple domains such as Fintech, Real Estate, E-commerce, HealthTech, and EdTech.",
      "I actively work on Generative AI solutions and use advanced developer tools such as GitHub Copilot, ChatGPT, Cursor, LangChain, LangGraph, LangSmith, and prompt engineering techniques to accelerate development and improve code quality.",
      "My approach combines a product engineering mindset with deep technical knowledge, focusing on clean architecture, seamless real-time capabilities, API design, and system optimization."
    ],
    location: "Jaipur, Rajasthan, India",
    contact: {
      phone: "+91 6201050686",
      email: "abhisheksinghinfo7@gmail.com",
      linkedin: "https://www.linkedin.com/in/mranoint",
      github: "https://github.com/abhishek01dev"
    }
  },
  experience: [
    {
      id: "exp-1",
      title: "Programmer",
      company: "Dotsquares Technologies India Pvt. Ltd.",
      period: "Apr 2024 – Present",
      highlights: [
        "Led software development and comprehensive system analysis.",
        "Architected and implemented real-time chat and video call systems using socket programming.",
        "Executed third-party integrations such as Google Maps API, Twilio, and SMS Chef.",
        "Drove significant performance optimizations across the stack.",
        "Integrated analytics and monitoring using Mixpanel and Sentry for deep observability.",
        "Implemented Redux caching and memoization patterns, reducing API calls by 40%."
      ],
      techUsed: ["React.js", "Node.js", "WebSockets", "Redux", "Mixpanel", "Sentry", "Third-party APIs"]
    },
    {
      id: "exp-2",
      title: "Software Developer",
      company: "CEDCOSS Technologies Pvt. Ltd.",
      period: "Dec 2021 – Mar 2024",
      highlights: [
        "Targeted performance optimization, drastically improving system efficiency.",
        "Reduced application crashes, leading to improved user satisfaction and stability.",
        "Completed multiple API integrations including Fresh Sale, Google Ads, and analytics tracking tools.",
        "Designed and deployed AWS Lambda and SQS implementations, significantly reducing server costs.",
        "Enforced security best practices working in close collaboration with the QA team.",
        "Successfully resolved complex bugs and elevated overall code quality."
      ],
      techUsed: ["Node.js", "AWS Lambda", "AWS SQS", "REST APIs", "Integration & Optimization"]
    }
  ],
  skills: [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5", "CSS3", "Bootstrap", "Ant Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "TypeScript", "REST APIs", "GraphQL", "WebSockets", "Socket.io", "OAuth 2.0", "JWT", "OpenAPI / Swagger"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
    {
      title: "Cloud / Infra / DevOps",
      skills: ["AWS Lambda", "EC2", "S3", "RDS", "Docker", "Nginx", "Jenkins / GitHub Actions", "Load Balancing", "CDN", "Serverless Framework"]
    },
    {
      title: "Architecture / Systems",
      skills: ["Microservices", "Distributed Systems", "Asynchronous Processing", "Logging & Monitoring", "ELK", "Prometheus", "Grafana", "Apache Kafka"]
    },
    {
      title: "Testing / Quality",
      skills: ["Jest", "Integration Testing", "Debugging", "Profiling", "Linting", "Code Reviews"]
    },
    {
      title: "GenAI / AI Engineering",
      skills: ["Generative AI workflows", "Prompt Engineering", "LangChain", "LangGraph", "LangSmith", "API Integration", "Agentic Systems"]
    },
    {
      title: "Collaboration / Process",
      skills: ["Agile / Scrum", "Jira", "Confluence", "Slack", "MS Teams"]
    }
  ],
  genAiFocus: {
    heading: "Modern Software Engineering + GenAI",
    description: "I integrate cutting-edge Generative AI into practical engineering workflows. Rather than treating AI as an afterthought, I build systems where intelligent automation, RAG (Retrieval-Augmented Generation), and agentic workflows are first-class citizens.",
    keyPoints: [
      "Practical implementation of GenAI features within existing software architectures.",
      "Expertise in LangChain, LangGraph, and LangSmith for orchestration, tracing, and agent logic.",
      "Advanced prompt engineering for fine-tuning LLM outputs and ensuring predictable performance.",
      "Using Cursor, Copilot, and ChatGPT to supercharge developer productivity and code review.",
      "Building scalable AI-powered systems while maintaining security, latency, and cost-efficiency."
    ]
  },
  projects: [
    {
      id: "proj-1",
      title: "Fintech Payment Gateway Integration",
      shortDescription: "Secure wallet and transaction system with real-time reporting.",
      challenge: "Building a highly secure, zero-latency payment system compliant with financial standards.",
      solution: "Integrated Razorpay with webhook-based synchronization for immediate transaction state confirmation.",
      techStack: ["Node.js", "React", "Razorpay API", "Webhooks", "PostgreSQL"],
      features: ["Secure Wallet", "Real-time Reporting", "Payment Processing"],
      category: "Fintech"
    },
    {
      id: "proj-2",
      title: "Real Estate Listing Platform",
      shortDescription: "Dynamic property search portal with location-based mapping.",
      challenge: "Providing fast, intuitive search across thousands of property listings.",
      solution: "Developed a MERN stack application with optimized spatial queries and Google Maps API.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Google Maps API"],
      features: ["Property Search", "Agent Admin Panel", "Map Integration"],
      category: "Real Estate"
    },
    {
      id: "proj-3",
      title: "Multi-Vendor E-commerce Platform",
      shortDescription: "Scalable commerce system with vendor dashboards and global payments.",
      challenge: "Managing concurrent transactions and inventory across diverse independent vendors.",
      solution: "Implemented Stripe Connect for split payments and a robust order management system.",
      techStack: ["Next.js", "Node.js", "Stripe API", "Redis"],
      features: ["Vendor Dashboard", "Order Management", "Payment Splits"],
      category: "E-commerce"
    },
    {
      id: "proj-4",
      title: "EdTech Learning Management System",
      shortDescription: "Course platform with secure media delivery and AI-powered Q&A.",
      challenge: "Protecting video content and providing instant student support at scale.",
      solution: "Utilized AWS S3 with signed URLs and integrated a ChatGPT API-powered bot for automated tutoring.",
      techStack: ["React", "AWS S3", "OpenAI API", "Node.js"],
      features: ["Course Uploads", "Quizzes", "ChatGPT Q&A"],
      category: "EdTech"
    },
    {
      id: "proj-5",
      title: "Healthcare Appointment Booking System",
      shortDescription: "HIPAA-compliant scheduling and doctor-patient interaction app.",
      challenge: "Handling complex scheduling conflicts securely while managing sensitive data.",
      solution: "Built role-based access controls and transactional scheduling logic.",
      techStack: ["TypeScript", "PostgreSQL", "Express", "React"],
      features: ["Scheduling", "Prescription Upload", "Role-based Logins"],
      category: "HealthTech"
    },
    {
      id: "proj-6",
      title: "Child Growth Tracker",
      shortDescription: "Analytics dashboard for tracking developmental milestones.",
      challenge: "Visualizing complex developmental metrics clearly for parents.",
      solution: "Implemented rich charting libraries and automated PDF report generation.",
      techStack: ["React", "Chart.js", "PDF-lib", "Node.js"],
      features: ["Growth Charts", "Task Tracking", "Downloadable PDF Reports"],
      category: "SaaS"
    },
    {
      id: "proj-7",
      title: "UK Monetary Rate Study Tool",
      shortDescription: "Educational platform for exploring financial rate data.",
      challenge: "Making dense financial data interactive and easily filterable.",
      solution: "Developed dynamic visual charts with client-side performance caching.",
      techStack: ["Next.js", "Tailwind CSS", "Recharts"],
      features: ["Data Exploration", "Custom Filters", "Visual Charts"],
      category: "Fintech"
    },
    {
      id: "proj-8",
      title: "SecureHealthcare CRM",
      shortDescription: "Backend infrastructure for complex healthcare workflows.",
      challenge: "Synchronizing realtime dashboards across the hospital network securely.",
      solution: "Built a robust real-time synchronization engine with strict role-based data filtering.",
      techStack: ["Node.js", "WebSockets", "PostgreSQL"],
      features: ["Realtime Dashboards", "Workflow Automation", "Access Control"],
      category: "HealthTech"
    }
  ],
  domainExpertise: [
    "Fintech", "Real Estate", "E-commerce", "HealthTech", "EdTech", "SaaS"
  ],
  services: [
    { id: "srv-1", title: "Full Stack Web Development", description: "End-to-end development of modern, responsive web applications." },
    { id: "srv-2", title: "Backend/API Development", description: "Design and implementation of highly scalable RESTful and GraphQL APIs." },
    { id: "srv-3", title: "Realtime Systems", description: "Building chat, notifications, and live dashboards using WebSockets." },
    { id: "srv-4", title: "SaaS Product Development", description: "Architecting multi-tenant, cloud-native SaaS platforms from scratch." },
    { id: "srv-5", title: "Performance Optimization", description: "Identifying bottlenecks, implementing caching, and optimizing queries." },
    { id: "srv-6", title: "AI / GenAI Feature Integration", description: "Embedding LLMs and LangChain workflows into your digital products." },
    { id: "srv-7", title: "Cloud & Deployment Support", description: "Setting up CI/CD pipelines and deploying via AWS, Docker, or Vercel." },
    { id: "srv-8", title: "Technical Consulting", description: "Providing architecture reviews and strategic technical guidance." }
  ],
  achievements: [
    { id: "ach-1", metric: "4+", label: "Years Experience" },
    { id: "ach-2", metric: "30%", label: "Performance Improvement" },
    { id: "ach-3", metric: "40%", label: "Reduction in API Calls" },
    { id: "ach-4", metric: "40%", label: "Cloud Cost Reduction" },
    { id: "ach-5", metric: "95%", label: "Security Compliance" },
    { id: "ach-6", metric: "5+", label: "Domain Industries" }
  ]
};
