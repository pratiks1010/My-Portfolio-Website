import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaEnvelope, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGitAlt, 
  FaDocker, 
  FaAws,
  FaSass,
  FaPython,
  FaJava
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiNextdotjs, 
  SiExpress, 
  SiFigma, 
  SiRedux, 
  SiGraphql, 
  SiFirebase, 
  SiVercel, 
  SiJest,
  SiPrisma,
  SiDotnet,
  SiPostman,
  SiSwagger,
  SiSupabase
} from "react-icons/si";
import { TbApi, TbCursorText, TbCode, TbCloud } from "react-icons/tb";
import { FaRocket } from "react-icons/fa";
import { 
  MdOutlineEmail, 
  MdLocalPhone, 
  MdLocationOn,
  MdWeb,
  MdStorage,
  MdCloudQueue,
  MdSecurity,
  MdSpeed,
  MdAccountTree,
  MdCloud,
  MdSettings
} from "react-icons/md";
import { FaCode } from "react-icons/fa";

export const servicesData = [
  {
    title: "Full Stack Web Development",
    description: "I build scalable, high-performance web applications and software solutions using modern technologies like React, Next.js, and Node.js, tailored to your business needs.",
    icon: MdWeb
  },
  {
    title: "API Design & Integration",
    description: "I design secure, documented, and efficient RESTful and GraphQL APIs. I also seamlessly integrate third-party services to extend application functionality.",
    icon: FaCode
  },
  {
    title: "UI/UX Design",
    description: "I create intuitive and visually stunning user interfaces using Figma. My designs focus on user experience, ensuring your product is both beautiful and easy to use.",
    icon: SiFigma
  },
  {
    title: "DevOps & Deployment",
    description: "I streamline deployment processes using Docker, CI/CD pipelines, and cloud platforms like AWS and Vercel, ensuring your applications are always up and running smoothly.",
    icon: MdCloudQueue
  },
  {
    title: "Cross-Platform Backend",
    description: "I architect robust backend systems and APIs that serve as the backbone for both mobile apps and web solutions, ensuring data consistency and high availability.",
    icon: MdStorage
  },
  {
    title: "Security Best Practices",
    description: "I implement industry-standard security measures, including authentication (OAuth, JWT) and data encryption, to safeguard your applications and users against threats.",
    icon: MdSecurity
  }
];

export const personalData = {
  name: "Pratik Shashikant Sawant",
  role: "Software Engineer",
  tagline: "Building efficient, scalable, and user-centric digital solutions.",
  bio: "I am a passionate Software Developer with 2+ years of hands-on experience in building efficient and scalable applications. Currently working as a Junior Software Engineer at Loyal String International Pvt. Ltd., I actively contribute to development teams with a strong focus on clean code and problem-solving. Driven by continuous learning and innovation, I aim to deliver reliable, high-quality solutions that create real value for users and businesses.",
  profileImage: "https://lh3.googleusercontent.com/d/1Qlx2tB-8UVk8PmDkar6vfDhQQSiJdgE1",
  resumeUrl: "https://drive.google.com/file/d/1GAJkFdCeeYsWO_9E0bAFvap-xE1xNOXE/view?usp=sharing",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/pratiks1010", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pratik-sawant-web-developer/", icon: FaLinkedinIn },
    { name: "Portfolio", url: "https://pratiksawantportfolio.in/", icon: MdWeb },
    { name: "Email", url: "mailto:sawantpratik109@gmail.com", icon: FaEnvelope },
  ],
  contact: {
    email: "sawantpratik109@gmail.com",
    phone: "(+91) 7020092352 / 8888651921",
    location: "Pune, Maharashtra, India",
    mapUrl: "https://maps.google.com"
  }
};

export const skillsData = {
  frontend: [
    { name: "React", icon: FaReact, color: "#61DAFB", level: 95 },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 90 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 88 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC", level: 95 },
    { name: "Redux", icon: SiRedux, color: "#764ABC", level: 85 },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E", level: 98 },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 100 },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 95 },
    { name: "Sass", icon: FaSass, color: "#CC6699", level: 80 },
  ],
  backend: [
    { name: ".NET Web API", icon: SiDotnet, color: "#512BD4", level: 90 },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 88 },
    { name: "Express", icon: SiExpress, color: "#000000", level: 85 },
    { name: "Advance Java", icon: FaJava, color: "#E76F00", level: 80 },
    { name: "Core Java", icon: FaJava, color: "#5382A1", level: 85 },
  ],
  database: [
    { name: "SQL Server", icon: SiPostgresql, color: "#CC2927", level: 90 }, // Using Postgres icon as placeholder for SQL
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 85 },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 80 },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", level: 80 },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: TbCloud, color: "#326CE5" },
    { name: "Azure DevOps", icon: MdCloud, color: "#0078D7" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Requestly", icon: TbApi, color: "#2A3B4C" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
    { name: "CI/CD Pipelines", icon: MdSettings, color: "#6366F1" },
  ],
  aiTools: [
    { name: "Cursor", icon: TbCursorText, color: "#3794FF" },
    { name: "n8n", icon: MdAccountTree, color: "#FF6584" },
    { name: "Antigravity", icon: FaRocket, color: "#8B5CF6" },
    { name: "Firebase Studio", icon: SiFirebase, color: "#FFCA28" },
    { name: "VS Code", icon: FaCode, color: "#007ACC" },
    { name: "Visual Studio", icon: TbCode, color: "#5C2D91" },
  ]
};

export const projectsData = [
  {
    title: "Jewelry Management Software",
    description: "Developed a mission-critical ERP enabling real-time inventory tracking and end-to-end workflow management for retail jewelers. Features include customer/karigar management, invoicing, product cataloging, and transaction tracking.",
    techStack: ["React.js", "ASP.NET Web API", "SQL Server", "Tailwind CSS"],
    liveLink: "#", // Add link if available
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?fit=crop&w=1200&h=630&q=80", // Jewelry/Luxury placeholder
    featured: true
  },
  {
    title: "Stock Market Trading Dashboard",
    description: "A comprehensive dashboard to track daily trades, manage positions, and monitor P/L and accuracy. Integrated real-time market data using NSE APIs and webhooks for live updates and actionable insights.",
    techStack: ["Next.js", "Tailwind CSS", "ASP.NET Web API", "SQL Server", "NSE API"],
    liveLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?fit=crop&w=1200&h=630&q=80", // Finance placeholder
    featured: true
  },
  {
    title: "Hospital Management Software",
    description: "A robust system for patient registration, appointment booking, and doctor management. Implemented role-based admin authorization to securely manage sensitive patient and hospital data.",
    techStack: ["React.js", "Java Spring Boot", "ASP.NET Web API", "SQL Server"],
    liveLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?fit=crop&w=1200&h=630&q=80", // Medical placeholder
    featured: false
  }
];

export const experienceData = [
  {
    title: "Software Engineer",
    company: "LoyalString International Pvt Ltd",
    period: "Jan 2025 - Present",
    location: "Pune, Maharashtra",
    description: "Developing scalable software solutions for a mission-critical Gold Jewelry ERP system. Building and optimizing RESTful APIs using ASP.NET Web API. Designing optimized SQL databases for reliable data storage. Contributing to UI/UX design and frontend development with React.js and Tailwind CSS."
  },
  {
    title: "Executive Web Developer & UI/UX Designer",
    company: "TreatGlobal PVT Ltd (Healthus.ai)",
    period: "Feb 2024 - Jan 2025",
    location: "Pune, Maharashtra",
    description: "Designed and developed responsive websites using HTML, CSS, React, WordPress, and PHP. Created user-friendly UI/UX designs using Figma and Adobe Suite. Integrated advanced WordPress plugins and implemented SEO strategies to improve website visibility and conversion rates."
  }
];

export const educationData = [
  {
    degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
    school: "Institute for Advanced Computing & Software Development (IACSD)",
    year: "April 2023 - Sep 2023"
  },
  {
    degree: "Bachelor of Technology (B.Tech) in Mechanical Engineering",
    school: "University of Pune",
    year: "June 2017 - Sep 2022"
  }
];

export const certificationsData = [
  "Udemy ASP.NET Core Deep-Dive in .NET 9",
  "Udemy React and NextJS course with AI",
  "Docker and Kubernetes DevOps journey",
  "Advanced Computing & Software Development (PG-DAC)"
];
