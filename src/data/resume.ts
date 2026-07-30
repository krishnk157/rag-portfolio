export interface ExperienceProject {
  name: string;
  achievements: string[];
}

export interface Experience {
  role: string;
  level: string;
  company: string;
  period: string;
  description?: string;
  achievements?: string[];
  projects?: ExperienceProject[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  status?: "live" | "building";
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    linkedinDisplay: string;
  };
  summary: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
}

export const RESUME: ResumeData = {
  name: "Krishn Kumar",
  title:
    "Full-Stack Engineer | React · TypeScript | Applied AI & GenAI Tooling",
  location: "Bengaluru, India",
  contact: {
    phone: "+91 7992457675",
    email: "krishn16799@gmail.com",
    linkedin: "https://linkedin.com/in/krishn157",
    linkedinDisplay: "linkedin.com/in/krishn157",
  },
  summary:
    "Full-stack engineer with 4 years of experience building data-intensive React/TypeScript applications and REST APIs in Express and .NET Core Web API, using SQL Server as the primary datastore. Currently the sole engineering point of contact between Software Engineering and Shell's Chemicals & Products business, owning 6 production reporting and dashboard applications end to end. Also builds applied AI tooling: a Retrieval-Augmented Generation (RAG) chatbot on the Vercel AI SDK, an MCP server integrating GitHub Copilot with Shell's internal design system, and repo-level AI skills for scaffolding new screens and documentation.",
  experience: [
    {
      role: "Software Engineer",
      level: "SDE 2",
      company: "Shell",
      period: "Oct 2025 – Present",
      description: "Chemicals & Products — Reporting & Data-Visualization Apps",
      achievements: [
        "Own end-to-end architecture, delivery, and incident response across all 6 apps, which combine high-density data visualization with asset-operations reporting workflows used daily by business stakeholders.",
        "Brought dashboard LCP below 2.5s for 80% of sessions on the flagship platform (Asset Management Data Platform) by combining render memoization, code-splitting, and parallel data fetching, validated through production observability.",
        "Cut redundant API calls by 40% by designing a Redux Toolkit Query caching layer across 6+ modules, improving data consistency and reducing server load on the most-used workflows.",
        "Shipped 12+ sprint features with full frontend ownership from wireframes to production, coordinating directly with product, design, and backend stakeholders.",
        "Built an MCP (Model Context Protocol) server integrating GitHub Copilot with Shell's internal design system, letting engineers generate consistent UI components via natural language, adopted by 4+ teams in the first quarter.",
        "Wrote documentation and reviewed contributions, cutting cross-team UI inconsistencies by ~50% and reducing new-contributor onboarding time by 2 weeks.",
        "Authored repo-level AI skills that guide coding assistants to scaffold new screens and generate documentation consistently within the Chemicals & Products codebase.",
      ],
    },
    {
      role: "Associate Software Engineer",
      level: "SDE 1",
      company: "Shell",
      period: "Aug 2022 – Sep 2025",
      projects: [
        {
          name: "EnergyChef: high-density data visualization platform for energy operations",
          achievements: [
            "Owned a React/TypeScript data visualization platform handling 50k+ data points per dashboard, covering state management, REST integration, CI/CD, and incident response.",
            "Reduced Plotly.js render time by 35% on the heaviest views through windowed data loading and memoization.",
            "Set up a Jest and React Testing Library suite from scratch, reaching 80%+ coverage with zero critical regressions over 18 months.",
            "Improved CI pipeline runtime by 25% through better caching and job parallelization in GitHub Actions.",
          ],
        },
        {
          name: "CARMA: internal workflow platform",
          achievements: [
            "Led a UI redesign across 5 core workflows, shipping 10+ features across 3 releases with responsive layouts, cross-browser compatibility, and zero rollbacks.",
            "Agreed API contracts with backend teams at sprint start, cutting mid-sprint integration blockers by ~30% and keeping delivery cycles predictable.",
            "Introduced shared component patterns through code review that reduced duplicated logic and sped up new-engineer ramp-up.",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "RAG Portfolio Chatbot",
      description:
        "An AI chatbot RAG'd over my resume that answers questions about my background, skills, and experience. Documents are chunked, embedded, and stored in a vector database for semantic search at query time.",
      techStack: [
        "Next.js",
        "Vercel AI SDK",
        "Claude Haiku 4.5",
        "pgvector",
        "Voyage AI Embeddings",
        "Neon Postgres",
      ],
      highlights: [
        "Try it now — click the chat button in the bottom-right corner of this page.",
        "Semantic search over resume chunks using 1024-dimension Voyage AI embeddings with cosine similarity.",
        "Streaming responses powered by the Vercel AI SDK with Claude Haiku 4.5 as the LLM.",
        "Protected upload route for updating the resume knowledge base on the fly.",
      ],
    },
    {
      title: "untitled-2",
      description: "Something new is brewing. Stay tuned.",
      techStack: [],
      highlights: [],
      status: "building",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js 15",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux Toolkit Query",
        "HTML5",
        "CSS3",
        "Material UI",
        "Plotly.js",
      ],
    },
    {
      category: "Applied AI",
      skills: [
        "Vercel AI SDK",
        "Retrieval-Augmented Generation (RAG) Architecture",
        "LLM API Integration",
        "MCP (Model Context Protocol)",
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        "Node.js",
        "Express",
        ".NET Core Web API",
        "REST APIs",
        "SQL Server",
      ],
    },
    {
      category: "Testing",
      skills: [
        "Jest",
        "React Testing Library",
        "Storybook",
        "Unit and Integration Testing",
      ],
    },
    {
      category: "Tooling & CI/CD",
      skills: [
        "Webpack",
        "Vite",
        "GitHub Actions",
        "Azure Pipelines",
        "Docker",
        "Git",
        "SonarQube",
      ],
    },
    {
      category: "Cloud & Platform",
      skills: ["Azure App Services", "Azure DevOps"],
    },
  ],
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Vellore Institute of Technology",
      score: "CGPA: 8.84 / 10",
      period: "Jul 2018 – Jun 2022",
    },
  ],
};
