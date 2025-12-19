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
import { TbApi, TbCursorText, TbCode } from "react-icons/tb";
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
  MdAccountTree
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

export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechStart",
    content: "Alex is a phenomenal developer. He didn't just write code; he helped us architect our entire platform from scratch. His attention to detail and problem-solving skills are unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "Working with Alex was a game-changer for our project. He delivered ahead of schedule and the quality of the UI was exactly what our design team envisioned. Highly recommended!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Creative Agency",
    content: "We hired Alex to revamp our legacy system. He successfully migrated us to a modern stack without any downtime. His communication throughout the process was excellent.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=150&h=150&q=80"
  }
];

export const personalData = {
  name: "Pratik Sawant",
  role: "Senior Full Stack Engineer",
  tagline: "Building digital products, brands, and experiences.",
  bio: "I am a passionate Software Developer with 2+ years of hands-on experience in building efficient and scalable applications. Currently working as a Junior Software Engineer at Loyal String International Pvt. Ltd., I actively contribute to development teams with a strong focus on clean code and problem-solving. Driven by continuous learning and innovation, I aim to deliver reliable, high-quality solutions that create real value for users and businesses.",
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
    { name: "Express", icon: SiExpress, color: "#000000", level: 90 },
    { name: ".NET Web API", icon: SiDotnet, color: "#512BD4", level: 85 },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 92 },
    { name: "Advance Java", icon: FaJava, color: "#E76F00", level: 80 },
    { name: "Core Java", icon: FaJava, color: "#5382A1", level: 85 },
  ],
  database: [
    { name: "SQL", icon: SiPostgresql, color: "#336791", level: 90 },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 90 },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 80 },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", level: 85 },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Requestly", icon: TbApi, color: "#2A3B4C" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
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
