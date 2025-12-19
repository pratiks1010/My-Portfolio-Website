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
  SiPrisma
} from "react-icons/si";
import { MdOutlineEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";

export const personalData = {
  name: "Alex Dev",
  role: "Senior Full Stack Engineer",
  tagline: "Building digital products, brands, and experiences.",
  bio: "I'm a passionate Full Stack Developer with over 5 years of experience in building scalable web applications. I specialize in the JavaScript ecosystem, crafting robust backends and intuitive frontends. My goal is to leverage technology to solve real-world problems and deliver exceptional user experiences.",
  profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=800&h=800&q=80",
  resumeUrl: "#", // Add your resume link here
  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: FaGithub },
    { name: "LinkedIn", url: "https://linkedin.com", icon: FaLinkedinIn },
    { name: "Twitter", url: "https://twitter.com", icon: FaTwitter },
    { name: "Email", url: "mailto:alex@example.com", icon: FaEnvelope },
  ],
  contact: {
    email: "alex.developer@tech.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, Bay Area, CA",
    mapUrl: "https://maps.google.com"
  }
};

export const skillsData = {
  frontend: [
    { name: "React", icon: FaReact, color: "#61DAFB", level: 95 },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 90 }, // In dark mode this needs handling
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 88 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC", level: 95 },
    { name: "Redux", icon: SiRedux, color: "#764ABC", level: 85 },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E", level: 98 },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 100 },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 95 },
    { name: "Sass", icon: FaSass, color: "#CC6699", level: 80 },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 92 },
    { name: "Express", icon: SiExpress, color: "#000000", level: 90 },
    { name: "NestJS", icon: FaNodeJs, color: "#E0234E", level: 80 }, // Using Node icon as placeholder or find SiNestjs
    { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: 75 },
    { name: "Python", icon: FaPython, color: "#3776AB", level: 70 },
    { name: "Java", icon: FaJava, color: "#007396", level: 65 },
  ],
  database: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 85 },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 90 },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 80 },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748", level: 85 },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
  ]
};

export const projectsData = [
  {
    title: "SaaS Analytics Dashboard",
    description: "A high-performance analytics dashboard for SaaS businesses, featuring real-time data visualization, user management, and automated reporting. Built with a microservices architecture.",
    techStack: ["Next.js", "TypeScript", "Tremor", "Supabase", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1200&h=630&q=80",
    featured: true
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that helps creators generate blog posts, social media captions, and marketing copy. Integrates with OpenAI GPT-4 API.",
    techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Tailwind"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?fit=crop&w=1200&h=630&q=80",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce platform with cart functionality, payment processing, order tracking, and an admin panel for inventory management.",
    techStack: ["Vue.js", "Firebase", "Stripe", "Netlify"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?fit=crop&w=1200&h=630&q=80",
    featured: false
  },
  {
    title: "Task Master Pro",
    description: "Collaborative project management tool with Kanban boards, real-time updates via WebSockets, and team chat functionality.",
    techStack: ["React", "Socket.io", "Express", "PostgreSQL"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?fit=crop&w=1200&h=630&q=80",
    featured: false
  }
];

export const experienceData = [
  {
    title: "Senior Full Stack Engineer",
    company: "Innovate Tech Solutions",
    period: "2023 - Present",
    location: "Remote",
    description: "Architecting scalable cloud-native applications. Leading a squad of 6 developers. Reduced server costs by 30% through optimization."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Creative Agency",
    period: "2021 - 2023",
    location: "New York, NY",
    description: "Developed award-winning marketing websites and web apps for Fortune 500 clients. Implemented headless CMS solutions."
  },
  {
    title: "Frontend Developer",
    company: "StartUp Inc.",
    period: "2019 - 2021",
    location: "San Francisco, CA",
    description: "Built responsive user interfaces using React and Redux. Collaborated closely with UX designers to ensure pixel-perfect implementation."
  }
];

export const educationData = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    year: "2019"
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "State College",
    year: "2017"
  }
];
