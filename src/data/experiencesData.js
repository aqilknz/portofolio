export const EXPERIENCES = [
  {
    id: 1,
    role: "Fullstack Web Developer",
    company: "Koda Tech Academy — Bogor, Indonesia",
    duration: "Feb 2026 – Jun 2026",
    description:
      "Intensive fullstack bootcamp building three real-world production apps from scratch — covering frontend, backend, database, authentication, and deployment.",
    tech: ["React.js", "Golang", "Gin", "PostgreSQL", "Redis", "Docker", "JWT", "Tailwind CSS", "Redux Toolkit"],
    projects: [
      {
        name: "Shortlink Web App",
        date: "Jun 2026",
        points: [
          "Built a responsive link-management dashboard with React.js and Tailwind CSS for creating and managing shortened URLs.",
          "Engineered a high-performance RESTful API in Golang/Gin for rapid slug generation and low-latency URL redirection.",
          "Implemented PostgreSQL with SQL JOINs, database transactions, and schema migrations for data integrity.",
          "Secured endpoints with JWT authentication and orchestrated services using Docker Compose.",
        ],
      },
      {
        name: "Tickitz Web App",
        date: "Jun 2026",
        points: [
          "Collaborated in a team to build a multi-container architecture with Docker Compose — Go/Gin backend, React.js frontend, PostgreSQL, and Redis.",
          "Resolved cross-functional deployment bottlenecks including Nginx reverse proxy configuration and CORS handling.",
          "Implemented state management with Redux Toolkit and advanced movie filtering on the frontend.",
          "Designed RESTful APIs supporting movie scheduling, seat booking, and payment processing.",
          "Built a full authentication pipeline with email OTP, role-based access control (Admin/User), and custom Axios interceptors.",
        ],
      },
      {
        name: "Ewallet Web App",
        date: "Feb – Jun 2026",
        points: [
          "Developed a fintech dashboard with mobile-first responsive design using React.js and Tailwind CSS.",
          "Implemented Redux Toolkit and Redux Persist for secure global state management across page reloads.",
          "Integrated backend APIs for transaction processing and JWT-secured user authentication built with Golang and PostgreSQL.",
        ],
      },
    ],
  },
  {
    id: 2,
    role: "Network Infrastructure Engineer",
    company: "PT Samudra Digital Network — Brebes, Indonesia",
    duration: "Jan 2025 – Aug 2025",
    description:
      "Handled end-to-end fiber optic (FTTH) installations, network troubleshooting, and customer-premises equipment configuration while maintaining OLT servers and core network devices.",
    tech: ["FTTH", "Fiber Optic", "ONT/Router Config", "OLT", "Optical Power Meter", "IPTV"],
    projects: [],
  },
  {
    id: 3,
    role: "Network Infrastructure Engineer",
    company: "CV Media Pratama Solusinet — Tegal, Indonesia",
    duration: "Aug 2022 – May 2023",
    description:
      "Designed and implemented network architectures for clients including Tegal City Kominfo and regional public hospitals (RSUD), covering CCTV systems, wireless access points, and tailored IT infrastructure.",
    tech: ["Network Design", "CCTV", "Wireless AP", "IT Infrastructure", "Troubleshooting", "Fiber Optic"],
    projects: [],
  },
];