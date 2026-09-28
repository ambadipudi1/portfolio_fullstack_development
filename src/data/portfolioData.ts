import { PersonalInfo, SkillCategory, ArchitectureNode, Project, Achievement, EducationItem } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Ambadipudi Rupavani',
  headline: 'Full Stack Developer | AI/ML Enthusiast',
  tagline: 'Computer Science and Engineering student building practical full-stack applications, AI-powered solutions, and data-driven software.',
  location: 'Hyderabad, Telangana, India',
  email: 'rupaambadipudi@gmail.com',
  phone: '9701691282',
  github: 'https://github.com/ambadipudi1',
  linkedin: 'https://www.linkedin.com/in/ambadipudi-rupavani-1b35aa352/',
  degree: 'B.Tech – Computer Science and Engineering (AI & ML)',
  college: 'Malla Reddy College of Engineering and Technology (MRCET)',
  expectedGraduation: '2027',
  cgpa: '9.04/10',
};

export const technicalFlowNodes: ArchitectureNode[] = [
  {
    id: 'react',
    title: 'React',
    role: 'Frontend Client',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    description: 'Component-driven reactive user interfaces with strict TypeScript typing and responsive layouts.',
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    role: 'Server Runtime',
    tech: ['Node.js', 'Express.js', 'Async I/O', 'Middleware'],
    description: 'Scalable backend server orchestration, routing, business logic, and request pipelines.',
  },
  {
    id: 'rest',
    title: 'REST APIs',
    role: 'Data Interface',
    tech: ['JSON Endpoints', 'JWT Auth', 'bcrypt', 'CORS'],
    description: 'Stateless HTTP API contracts with secure token-based authentication and error handling.',
  },
  {
    id: 'database',
    title: 'Database',
    role: 'Data Persistence',
    tech: ['SQLite', 'MySQL', 'Relational Schemas', 'Indexing'],
    description: 'Normalized relational schemas, ACID-compliant transactions, and parameterized SQL queries.',
  },
  {
    id: 'ai',
    title: 'AI Integration',
    role: 'Intelligent Logic',
    tech: ['Gemini API', 'Prompt Engineering', 'RAG Concepts', 'Context Chaining'],
    description: 'Integrating Generative AI for real-time tutoring, hints, query explanation, and debugging.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    description: 'Core languages for algorithm implementation, scripting, and system engineering.',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Modern component architectures, typed clients, and responsive styling.',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'React Router'],
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Server frameworks, RESTful API architecture, and server-side request pipelines.',
    skills: ['Node.js', 'Express.js', 'Django', 'Django REST Framework', 'REST APIs'],
  },
  {
    id: 'databases',
    name: 'Databases',
    description: 'Relational data design, schema management, and query optimization.',
    skills: ['SQLite', 'MySQL', 'SQL', 'Relational Database Concepts'],
  },
  {
    id: 'ai_ml',
    name: 'AI/ML',
    description: 'GenAI integration, LLM orchestration, prompt engineering, and intelligent assistance.',
    skills: ['Gemini API', 'AI Application Development', 'RAG Concepts', 'Prompt Engineering'],
  },
  {
    id: 'security',
    name: 'Authentication & Security',
    description: 'Access control, password hashing, and token-based state authorization.',
    skills: ['JWT', 'bcrypt', 'Authentication', 'Authorization'],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    description: 'Development toolchains, version control, and containerized cloud deployment.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Render', 'Google Cloud Run'],
  },
];

export const projects: Project[] = [
  {
    id: 'rupas-query',
    title: "RUPA's Query",
    subtitle: 'Interactive SQL Learning & Mastery Platform',
    isFeatured: true,
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'SQLite', 'Gemini API'],
    githubUrl: 'https://github.com/ambadipudi1/RupasQueryy',
    liveDemoUrl: undefined, // Configurable demo URL; honest status indicated
    description:
      "RUPA's Query is a full-stack SQL learning platform designed to provide interactive SQL practice, database schema exploration, AI-powered learning assistance, and progress tracking.",
    problem:
      'Beginners and intermediate developers often struggle to learn SQL through static textbooks and syntax cheatsheets. They lack a safe sandbox to test queries against real relational schemas and lack immediate, contextual feedback when a query produces unexpected results or syntax errors.',
    solution:
      "Engineered an interactive full-stack learning platform combining an in-browser SQL editor with a real SQLite engine. Integrated Google's Gemini API to act as an intelligent pedagogical tutor providing explanations, hints, and debugging feedback, paired with a gamified progression system.",
    keyFeatures: [
      'Interactive SQL Editor',
      'SQL Practice Modules',
      'Schema Explorer',
      'Practice Questions',
      'AI Tutor',
      'AI Explanation Mode',
      'AI Hint Mode',
      'AI Review Mode',
      'AI Debugging Mode',
      'Interview Mode',
      'Authentication',
      'Progress Tracking',
      'XP System',
      'Achievements',
      'Streak Tracking',
      'Milestones',
    ],
    architectureSummary:
      'React Frontend → Express/Node.js Backend → SQLite Database → Gemini API',
    architectureSteps: [
      {
        step: '01. Client Layer',
        label: 'React & TypeScript Frontend',
        detail:
          'Monaco/code-editor client with reactive schema visualizer, execution state controls, and gamification dashboard.',
      },
      {
        step: '02. API & Routing Layer',
        label: 'Node.js / Express Backend',
        detail:
          'Dispatches verified SQL execution requests, handles user authentication, tracks progress, and sanitizes input.',
      },
      {
        step: '03. Relational Engine',
        label: 'SQLite Database',
        detail:
          'Executes practice queries against isolated relational datasets, returning typed tabular result sets and schema metadata.',
      },
      {
        step: '04. Intelligence Layer',
        label: 'Gemini API Integration',
        detail:
          'Powers context-aware pedagogical assistance: step-by-step query debugging, syntax explanation, and interview prep evaluation.',
      },
    ],
    techCategories: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
      { category: 'Backend', items: ['Node.js', 'Express.js', 'REST API'] },
      { category: 'Database', items: ['SQLite', 'SQL Schemas'] },
      { category: 'AI & Intelligence', items: ['Gemini API', 'Prompt Engineering'] },
    ],
  },
  {
    id: 'studentpath-ai',
    title: 'StudentPath AI',
    subtitle: 'Personalized Learning & Career Development Platform',
    isFeatured: false,
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'SQLite', 'Gemini API'],
    githubUrl: 'https://github.com/ambadipudi1/studentdevelopment-ai',
    liveDemoUrl: undefined,
    description:
      'StudentPath AI is a full-stack platform that helps students manage personalized learning goals, track progress, manage milestones, and receive AI-powered learning and career guidance.',
    problem:
      'Engineering students frequently face uncertainty in mapping their academic curriculum to industry expectations, resulting in disorganized skill acquisition, missed milestones, and lack of structured career guidance.',
    solution:
      'Developed a full-stack roadmap and milestone tracker with an interactive dashboard, persistent user progress metrics, and integrated Gemini AI to offer actionable, customized career and learning roadmaps based on individual goals.',
    keyFeatures: [
      'Personalized Learning Goals',
      'Career Guidance',
      'Progress Tracking',
      'Milestone Management',
      'User Profiles',
      'Assessments',
      'Interactive Dashboard',
      'Authentication',
      'Persistent Data Storage',
      'Gemini AI Integration',
    ],
    architectureSummary:
      'React Frontend → Node.js/Express Backend → SQLite → Gemini API',
    architectureSteps: [
      {
        step: '01. Interactive Client',
        label: 'React & TypeScript SPA',
        detail:
          'Goal setting workflows, interactive timeline milestones, and assessment visualization dashboard.',
      },
      {
        step: '02. Service Engine',
        label: 'Node.js & Express REST API',
        detail:
          'User session authentication, CRUD endpoints for milestones, and student profile state management.',
      },
      {
        step: '03. Persistence Layer',
        label: 'SQLite Database',
        detail:
          'Stores student profile data, progress logs, milestone completions, and assessment records.',
      },
      {
        step: '04. AI Guidance',
        label: 'Gemini AI Integration',
        detail:
          'Analyzes learner profiles and performance to generate tailored learning steps and career pathway advice.',
      },
    ],
    techCategories: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
      { category: 'Database', items: ['SQLite', 'Relational Storage'] },
      { category: 'AI & Intelligence', items: ['Gemini API', 'Career Guidance Logic'] },
    ],
  },
  {
    id: 'iot-smart-waste',
    title: 'IoT-Based Smart Waste Management System',
    subtitle: 'Waste-Bin Fill Monitoring & Collection Platform',
    isFeatured: false,
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'REST APIs', 'IoT Data Management'],
    githubUrl: 'https://github.com/ambadipudi1/iot-based-smart-waste-management-system',
    liveDemoUrl: undefined,
    description:
      'An IoT-based waste management application designed to monitor waste-bin fill levels, visualize bin status, and support efficient waste collection.',
    problem:
      'Municipalities and large campus facilities often rely on static, scheduled waste collection routines, leading to either overflowing trash bins or unnecessary collection trips to empty bins.',
    solution:
      'Built a centralized monitoring application to process sensor data representations, visualize bin capacity across locations, configure threshold-based alerts, and organize collection operations efficiently.',
    keyFeatures: [
      'Waste-Bin Monitoring',
      'IoT Sensor Data',
      'Bin Status Dashboard',
      'Fill-Level Monitoring',
      'Threshold-Based Alerts',
      'Waste Collection Management',
      'Authentication & Authorization',
      'Cloud Storage Support',
    ],
    architectureSummary:
      'React Client → Node.js API Service → IoT Sensor Data Management → Cloud Storage',
    architectureSteps: [
      {
        step: '01. Operations Dashboard',
        label: 'React.js Client Interface',
        detail:
          'Real-time visualization of bin capacities, status maps, and threshold alert notifications.',
      },
      {
        step: '02. Data Ingestion Service',
        label: 'Node.js / REST API Backend',
        detail:
          'Validates and logs sensor data streams, computes fill-level thresholds, and dispatches collection triggers.',
      },
      {
        step: '03. Sensor Management',
        label: 'IoT Data Management',
        detail:
          'Structured time-series simulation and data processing handling fill-level telemetry and status updates.',
      },
      {
        step: '04. Persistence & Security',
        label: 'Cloud Storage & Auth',
        detail:
          'Role-based access controls for municipal operators and persistent logging for historical collection metrics.',
      },
    ],
    techCategories: [
      { category: 'Frontend', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3'] },
      { category: 'Backend', items: ['Node.js', 'REST APIs'] },
      { category: 'Data & Systems', items: ['IoT Data Management', 'Sensor Telemetry Logic'] },
      { category: 'Security & Cloud', items: ['Authentication', 'Authorization', 'Cloud Storage Support'] },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: 'google-kaggle',
    title: 'Google / Kaggle AI Agents & Vibe Coding',
    category: 'AI & Machine Learning',
    description:
      'Hands-on engagement in designing autonomous AI agents, evaluating model orchestration workflows, and applying modern generative AI coding practices.',
    highlights: [
      'Practical implementation of agentic AI systems and structured prompt workflows',
      'Exploration of tool-calling, reasoning loops, and multi-step agent architectures',
      'Adoption of modern AI-assisted engineering and rapid prototyping methodology',
    ],
  },
  {
    id: 'infosys-pragati',
    title: 'Infosys Pragati Path',
    category: 'Professional Development',
    description:
      'Rigorous industry professional development program focusing on technical problem solving, software engineering fundamentals, and industry readiness.',
    highlights: [
      'Advanced computer science foundations and algorithmic problem-solving practice',
      'Collaborative development methodologies and engineering industry standards',
      'Continuous technical upskilling in full-stack concepts and system design',
    ],
  },
  {
    id: 'sih-hackathon',
    title: 'Smart India Hackathon / Hackathon Participation',
    category: 'Hackathons & Competitions',
    description:
      'Participated in fast-paced collaborative hackathons to conceptualize, architect, and prototype software solutions addressing real-world problem statements.',
    highlights: [
      'End-to-end full-stack prototyping under strict time constraints',
      'Cross-functional team coordination, Git workflow management, and technical pitching',
      'Architected solutions balancing database efficiency, API contracts, and user usability',
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'mrcet',
    institution: 'Malla Reddy College of Engineering and Technology (MRCET)',
    degree: 'B.Tech – Computer Science and Engineering (AI & ML)',
    period: '2023 – 2027 (Expected)',
    scoreLabel: 'CGPA',
    score: '9.04 / 10',
    location: 'Hyderabad, Telangana',
    details: [
      'Specialization in Artificial Intelligence and Machine Learning',
      'Core coursework: Data Structures & Algorithms, Database Management Systems, Object Oriented Programming, Machine Learning, Operating Systems, Computer Networks',
      'Active developer building full-stack platforms and AI integrations',
    ],
  },
  {
    id: 'sri-chaitanya',
    institution: 'Sri Chaitanya Junior College',
    degree: 'Intermediate (MPC – Mathematics, Physics, Chemistry)',
    period: '2021 – 2023',
    scoreLabel: 'Board Score',
    score: '960 / 1000 (96%)',
    location: 'Hyderabad, Telangana',
    details: [
      'Strong quantitative and analytical foundation in higher secondary mathematics and physical sciences',
      'Ranked in top percentile for academic distinction',
    ],
  },
];
