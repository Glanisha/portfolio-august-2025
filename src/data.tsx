export const achievementsData = [
  {
    title: "2nd Place - Coherence Hackathon",
    imageSrc: "/vcet_win.png",
    description:
      "Built ScreenSmart, an AI-driven hiring assistant that automates resume screening, ranks candidates using NLP, machine learning, and predictive analytics, and minimizes bias in recruitment. The system runs SWOT analyses, generates candidate scores, and helps companies make smarter hiring decisions. Huge shoutout to Parth Doshi and Rishabh Tripathi for their valuable insights! Team: Romeiro Fernandes, Gavin Soares, Russel Daniel, and me. Hosted by: Vidyavardhini's College of Engineering and Technology.",
    links: [
      {
        name: "Devfolio",
        url: "https://lnkd.in/e54iDjt3",
        type: "live",
      },
      {
        name: "Linkedin",
        url: "https://lnkd.in/e54iDjt3",
        type: "live",
      },
      {
        name: "Github",
        url: "https://lnkd.in/e54iDjt3",
        type: "live",
      },
    ],
  },

  {
    title: "Coding Competition Finalist",
    description:
      "Secured top 10 position in the International Competitive Programming Contest. Solved complex algorithmic problems under time constraints.",
    links: [],
  },
  {
    title: "Coding Competition Finalist",
    description:
      "Secured top 10 position in the International Competitive Programming Contest. Solved complex algorithmic problems under time constraints.",
    links: [],
  },
];

export const aboutMeData = [
  {
    title: "About Me",
    imageSrc: "/vcet_win.png",
    description:
      "I'm a Computer Engineering student with a focus on AI/ML and full-stack development. I enjoy building practical solutions, whether it’s hackathon prototypes, research projects, or real-world applications. Outside academics, I’ve worked on projects ranging from financial tools to sustainability tech, and I’m always looking for opportunities to learn, collaborate, and create impact through technology.",
    links: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/YOUR_PROFILE",
        type: "linkedin",
      },
      {
        name: "GitHub",
        url: "https://github.com/YOUR_GITHUB",
        type: "github",
      },
    ],
  },
];

export // Sample data (keeping your existing data)
const projectsData = [
  {
    title: "InternGuide",
    imageSrc: "/intern.png",
    description:
      "A comprehensive internship showcase and tracking platform with TF-IDF-based mentor-mentee matching, role-based access control for students/faculty/admins, Firebase resume storage, and automated email notifications via Nodemailer. Features real-time internship progress tracking, SDG (Sustainable Development Goals) mapping, PO/PEO alignment tracking, management dashboard with institution-wide analytics, and admin panel for internship listing management.                                                       Built with: MERN Stack • Python • Firebase • Nodemailer • TF-IDF Algorithm",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/Glanisha/InternGuide",
        type: "github",
      },
      {
        name: "PPT",
        url: "https://drive.google.com/file/d/1FWGbLUsY5n8WkbrO7CjYR6BY0fAzm3MD/view",
        type: "external",
      },
      {
        name: "Video Demo",
        url: "https://drive.google.com/file/d/1Z27QPewM5Ow9hwI_T0peg5mpyTXmA0T3/view",
        type: "external",
      },
    ],
  },
  {
    title: "Machine Learning Model",
    imageSrc: "/api/placeholder/600/400",
    description:
      "Developed a machine learning model for sentiment analysis using Python and TensorFlow. Achieved 92% accuracy on test data. Implemented data preprocessing, model training, and deployment pipeline.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/YOUR_ML_REPO",
        type: "github",
      },
      { name: "Research Paper", url: "#", type: "live" },
    ],
  },
  {
    title: "Mobile App Development",
    imageSrc: "/api/placeholder/600/400",
    description:
      "Cross-platform mobile application using React Native. Features real-time chat, push notifications, and offline functionality. Published on both iOS and Android app stores.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/YOUR_MOBILE_REPO",
        type: "github",
      },
      { name: "App Store", url: "#", type: "live" },
    ],
  },
];

export const certificationsData = [
  {
    title: "AWS Solutions Architect",
    imageSrc: "/api/placeholder/600/400",
    description:
      "Amazon Web Services Solutions Architect Associate certification. Comprehensive knowledge of AWS services, architecture best practices, and cloud deployment strategies.",
    links: [
      { name: "View Certificate", url: "#", type: "live" },
      { name: "Verify", url: "#", type: "live" },
    ],
  },
  {
    title: "Google Machine Learning Engineer",
    description:
      "Google Cloud Professional Machine Learning Engineer certification. Expertise in designing, building, and productionizing ML models using Google Cloud Platform.",
    links: [{ name: "Certificate", url: "#", type: "live" }],
  },
];

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";

export const techStack = [
  // MERN
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },

  // Database
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },

  // Languages
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },

  // Cloud / Backend
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
];

export const experienceData = [
  {
    title: "Frontend Developer Intern at Modern Solutions Hub",
    description:
      "Modern Solutions Hub (5th Dec 2024 – 18th Mar 2025, Hybrid) – Developed and maintained frontend applications using Next.js, React.js, and Tailwind CSS. Implemented microfrontends architecture to enhance modularity and scalability of products.",
    imageSrc: "/modern.png",
  },
  {
    title: "Web Developer at Unsquare",
    description:
      "Unsquare (TripValue) (Jan 2025 – Mar 2025, Remote) – Collaborated on the development of a travel-focused web application to enhance user trip planning.",
    imageSrc: "/unsquare.png",
  },
];

export const softSkillsData = [
  {
    title: "Social Emotional Learning (SEL) for Youth Waging Peace",
    imageSrc: "sel.png",
  },
  {
    title: "SEEK: Self-directed Emotional Learning for Empathy and Kindness",
    imageSrc: "seek.png",
  },
  {
    title: "Presentation Skills",
    imageSrc: "/ppt.png",
  },
];
