// Dynamic data for experiences and projects based on URL parameter
// Use URL like: http://localhost:3000/?abc123 or http://localhost:3000/?xyz789

export const experienceVariations = {
  default: [
    {
      role: 'Full Stack Developer',
      company: 'Secret MindTech',
      duration: 'Sep 2024 – Present',
      location: 'Surat',
      bullets: [
        'Engineered and maintained end-to-end web applications using Next.js, React.js, Node.js, PostgreSQL, SQL, and GraphQL.',
        'Built responsive and scalable UI components with Tailwind CSS, MUI, Ant Design, and Headless UI, enhancing development speed and consistency.',
        'Implemented real-time features including live notifications, chat, and analytics dashboards using WebSockets.',
        'Optimized application SEO and performance using SSR/ISR, caching strategies, and API tuning, significantly improving Lighthouse scores and load times.',
        'Collaborated with cross-functional teams — product, UI/UX, and backend — to deliver scalable, production-ready features.',
      ],
    },
    {
      role: 'Software Developer Intern',
      company: 'BBD Software',
      duration: 'Jan 2024 – Jul 2024',
      location: 'Pune',
      bullets: [
        'Improved telecom system efficiency by 20% through performance-focused backend enhancements.',
        'Developed RESTful APIs using Spring Boot, Java, and MySQL, achieving 85% unit test coverage.',
        'Resolved 30+ production bugs, increasing overall system stability by 25% and reducing customer-reported issues.',
        'Delivered a complete demo project by independently learning and integrating React.js, Spring Boot, OAuth 2.0, MySQL, and AWS RDS.',
        'Coordinated with a 10-member team to ensure seamless integration and timely delivery of project milestones.',
      ],
    },
  ],
  abc123: [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc',
      duration: 'Jan 2023 – Present',
      location: 'Mumbai',
      bullets: [
        'Led a team of 5 developers in building enterprise-level applications using modern tech stack.',
        'Architected microservices architecture improving system scalability by 40%.',
        'Mentored junior developers and conducted code reviews ensuring code quality.',
        'Implemented CI/CD pipelines reducing deployment time by 60%.',
        'Collaborated with stakeholders to deliver features on time and within budget.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'StartupXYZ',
      duration: 'Jun 2021 – Dec 2022',
      location: 'Bangalore',
      bullets: [
        'Built MVP from scratch using React, Node.js, and MongoDB.',
        'Implemented payment gateway integration increasing revenue by 35%.',
        'Optimized database queries reducing response time by 50%.',
        'Developed RESTful APIs serving 10,000+ daily active users.',
        'Worked in agile environment delivering sprint goals consistently.',
      ],
    },
  ],
  xyz789: [
    {
      role: 'Frontend Lead',
      company: 'Digital Innovations',
      duration: 'Mar 2022 – Present',
      location: 'Delhi',
      bullets: [
        'Specialized in React and Next.js building high-performance web applications.',
        'Implemented design systems improving UI consistency across products.',
        'Reduced bundle size by 45% through code splitting and optimization.',
        'Led frontend architecture decisions and best practices.',
        'Collaborated with design team to create pixel-perfect implementations.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'WebCraft Studios',
      duration: 'Aug 2020 – Feb 2022',
      location: 'Pune',
      bullets: [
        'Developed responsive web applications using React and TypeScript.',
        'Improved Lighthouse scores from 60 to 95 through performance optimization.',
        'Built reusable component library used across multiple projects.',
        'Participated in sprint planning and daily standups.',
        'Fixed critical bugs and improved user experience based on feedback.',
      ],
    },
  ],
  dev2024: [
    {
      role: 'Backend Engineer',
      company: 'CloudTech Solutions',
      duration: 'Sep 2023 – Present',
      location: 'Hyderabad',
      bullets: [
        'Designed and developed scalable backend services using Node.js and PostgreSQL.',
        'Implemented GraphQL APIs serving complex data requirements.',
        'Built real-time systems using WebSockets for live features.',
        'Optimized database performance handling 1M+ requests daily.',
        'Ensured 99.9% uptime through monitoring and error handling.',
      ],
    },
    {
      role: 'Backend Developer',
      company: 'API Gateway Corp',
      duration: 'Jan 2022 – Aug 2023',
      location: 'Chennai',
      bullets: [
        'Developed RESTful APIs using Express.js and MongoDB.',
        'Implemented authentication and authorization systems.',
        'Created comprehensive API documentation improving developer experience.',
        'Reduced API response time by 40% through caching strategies.',
        'Worked with DevOps team on deployment and scaling strategies.',
      ],
    },
  ],
}

export const projectVariations = {
  default: [
    {
      title: 'Top Shott — Tournament Management Engine',
      tech: 'Python • WebSockets • PostgreSQL',
      link: '#',
    },
    {
      title: 'Red Cleanchanchor — Reddit Automation & Management',
      tech: 'Next.js • Node.js • REST APIs • Automation',
      link: '#',
    },
    {
      title: 'Lead Tree — Lead Management & Distribution',
      tech: 'Next.js • Node.js • PostgreSQL • REST APIs',
      link: '#',
    },
    {
      title: 'Vertelier — Lab-Grown Diamond E-Commerce',
      tech: 'Next.js • Node.js • Tailwind CSS • PostgreSQL',
      link: '#',
    },
    {
      title: 'FinIdeas — Wealth Management Platform',
      tech: 'React.js • Node.js • PostgreSQL • Ant Design • REST APIs',
      link: '#',
    },
    {
      title: 'Kindness Kettle — Stop Food Wastage Platform',
      tech: 'Java • Spring Boot • SQL Server • OAuth2.0',
      link: '#',
    },
    {
      title: 'DLS (Digital Lifestyle) — Vodacom',
      tech: 'React.js • Node.js • Mocha & Chai • Caching',
      link: '#',
    },
  ],
  abc123: [
    {
      title: 'E-Commerce Platform — Multi-Vendor Marketplace',
      tech: 'Next.js • Node.js • PostgreSQL • Stripe • Redis',
      link: '#',
    },
    {
      title: 'SaaS Dashboard — Analytics & Reporting',
      tech: 'React • TypeScript • GraphQL • D3.js • AWS',
      link: '#',
    },
    {
      title: 'Real-Time Chat Application',
      tech: 'React • Node.js • Socket.io • MongoDB • JWT',
      link: '#',
    },
    {
      title: 'Project Management Tool',
      tech: 'Next.js • Prisma • PostgreSQL • Tailwind • Zustand',
      link: '#',
    },
    {
      title: 'Social Media Analytics Platform',
      tech: 'React • Python • FastAPI • PostgreSQL • Docker',
      link: '#',
    },
  ],
  xyz789: [
    {
      title: 'Portfolio Website Builder',
      tech: 'Next.js • Tailwind • Framer Motion • Vercel',
      link: '#',
    },
    {
      title: 'Task Management App',
      tech: 'React • Redux • Node.js • MongoDB • Express',
      link: '#',
    },
    {
      title: 'Weather Dashboard',
      tech: 'React • TypeScript • OpenWeather API • Chart.js',
      link: '#',
    },
    {
      title: 'Blog Platform with CMS',
      tech: 'Next.js • Sanity CMS • Tailwind • MDX',
      link: '#',
    },
    {
      title: 'Expense Tracker',
      tech: 'React • Context API • LocalStorage • Recharts',
      link: '#',
    },
  ],
  dev2024: [
    {
      title: 'API Gateway Service',
      tech: 'Node.js • Express • Redis • Nginx • Docker',
      link: '#',
    },
    {
      title: 'Microservices Architecture',
      tech: 'Node.js • gRPC • Kafka • PostgreSQL • Kubernetes',
      link: '#',
    },
    {
      title: 'Authentication Service',
      tech: 'Node.js • JWT • OAuth2 • MongoDB • Passport.js',
      link: '#',
    },
    {
      title: 'Data Processing Pipeline',
      tech: 'Python • Celery • RabbitMQ • PostgreSQL • AWS',
      link: '#',
    },
    {
      title: 'File Storage Service',
      tech: 'Node.js • AWS S3 • Multer • Express • TypeScript',
      link: '#',
    },
  ],
}

// Helper function to get data based on URL parameter
// Use URL like: http://localhost:3000/?key=abc123 or http://localhost:3000/?key=xyz789
export function getDynamicData(searchParams) {
  // Get the 'key' parameter from URL
  const key = searchParams?.get?.('key') || null

  // If no key or key doesn't exist, use default
  // Valid keys: 'abc123', 'xyz789', 'dev2024'
  const validKeys = ['abc123', 'xyz789', 'dev2024']
  const selectedKey = key && validKeys.includes(key) ? key : 'default'

  return {
    experiences:
      experienceVariations[selectedKey] || experienceVariations.default,
    projects: projectVariations[selectedKey] || projectVariations.default,
  }
}
