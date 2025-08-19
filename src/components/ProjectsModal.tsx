import React, { useState } from "react";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiJavascript,
  // SiTypescript,
  SiPython,
  // SiTailwindcss,
  // SiNextdotjs,
  // SiFlutter,
  // SiDart,
  // SiPostgresql,
  // SiDocker,
  // SiTensorflow,
  // SiOpencv,
  // SiBootstrap,
  // SiSocketdotio,
} from "react-icons/si";

interface TechStack {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface ProjectLink {
  name: string;
  url: string;
  type: "github" | "live" | "video" | "devfolio" | "docs" | "presentation";
}

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  techStack: TechStack[];
  links: ProjectLink[];
  category: string;
  status: "completed" | "in-progress" | "planned";
}

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "InternGuide",
    description: "A comprehensive internship showcase and tracking platform designed for educational institutions. Features TF-IDF-based mentor-student matching algorithms, SDG/PO/PEO alignment tracking, automated email notifications via Nodemailer, secure resume storage with Firebase, and real-time progress monitoring. Built for Fr. Conceicao Rodrigues College of Engineering as part of Full Stack Development Course, serving students, faculty, management, and industry partners with role-based access control and detailed analytics.",
    images: [
      "/internguide.png",
      "/intern2.png", 
      "/inn.png",
      "/innn.png"
    ],
    techStack: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "JavaScript", icon: SiJavascript, color: "#ffca28" }
    ],
    links: [
      { name: "GitHub", url: "https://github.com/Glanisha/InternGuide", type: "github" },
      { name: "Video Demo", url: "https://drive.google.com/file/d/1Z27QPewM5Ow9hwI_T0peg5mpyTXmA0T3/view", type: "video" },
      { name: "Presentation", url: "https://drive.google.com/file/d/1FWGbLUsY5n8WkbrO7CjYR6BY0fAzm3MD/view", type: "presentation" }
    ],
    category: "Education Technology",
    status: "completed"
  },
  // {
  //   id: 2,
  //   title: "Mumbai Mobility App",
  //   description: "A mobile application focused on promoting sustainable transportation in Mumbai. Features include walkability analysis, route optimization for pedestrians, public transport integration, community-driven infrastructure reporting, and carbon footprint tracking. Uses machine learning for traffic pattern analysis and route suggestions.",
  //   images: [
  //     "/project3-1.png",
  //     "/project3-2.png"
  //   ],
  //   techStack: [
  //     { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  //     { name: "Dart", icon: SiDart, color: "#0175C2" },
  //     { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  //     { name: "Python", icon: SiPython, color: "#3776ab" },
  //     { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00" }
  //   ],
  //   links: [
  //     { name: "GitHub", url: "#", type: "github" },
  //     { name: "Documentation", url: "#", type: "docs" },
  //     { name: "Video Demo", url: "#", type: "video" }
  //   ],
  //   category: "Mobile Development",
  //   status: "in-progress"
  // },
  // {
  //   id: 3,
  //   title: "Smart Healthcare Dashboard",
  //   description: "An intelligent healthcare management system with patient monitoring, appointment scheduling, and medical record management. Features include real-time vital signs tracking, AI-powered symptom analysis, telemedicine integration, and predictive health analytics. Built for healthcare providers to streamline patient care.",
  //   images: [
  //     "/project4-1.png",
  //     "/project4-2.png",
  //     "/project4-3.png"
  //   ],
  //   techStack: [
  //     { name: "React", icon: SiReact, color: "#61dafb" },
  //     { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  //     { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  //     { name: "Python", icon: SiPython, color: "#3776ab" },
  //     { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
  //     { name: "Docker", icon: SiDocker, color: "#2496ed" }
  //   ],
  //   links: [
  //     { name: "GitHub", url: "#", type: "github" },
  //     { name: "Live Demo", url: "#", type: "live" },
  //     { name: "Presentation", url: "#", type: "presentation" }
  //   ],
  //   category: "Healthcare Technology",
  //   status: "completed"
  // },
  // {
  //   id: 4,
  //   title: "AI Image Recognition System",
  //   description: "A computer vision project for object detection and classification using deep learning. Features include real-time image processing, custom model training, batch processing capabilities, and REST API integration. Implemented using CNN architectures and optimized for production deployment.",
  //   images: [
  //     "/project5-1.png",
  //     "/project5-2.png"
  //   ],
  //   techStack: [
  //     { name: "Python", icon: SiPython, color: "#3776ab" },
  //     { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00" },
  //     { name: "OpenCV", icon: SiOpencv, color: "#5c3ee8" },
  //     { name: "Flask", icon: SiPython, color: "#000000" },
  //     { name: "Docker", icon: SiDocker, color: "#2496ed" }
  //   ],
  //   links: [
  //     { name: "GitHub", url: "#", type: "github" },
  //     { name: "Documentation", url: "#", type: "docs" },
  //     { name: "Video Demo", url: "#", type: "video" }
  //   ],
  //   category: "Machine Learning",
  //   status: "completed"
  // }
];

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  if (!isOpen) return null;

  const currentProject = projectsData[selectedProject];

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return { icon: FaGithub, color: "#ffffff" };
      case "live":
        return { icon: FaExternalLinkAlt, color: "#10b981" };
      case "video":
        return { icon: FaPlay, color: "#ef4444" };
      case "devfolio":
        return { icon: FaFileAlt, color: "#8b5cf6" };
      case "docs":
        return { icon: FaFileAlt, color: "#06b6d4" };
      case "presentation":
        return { icon: FaFileAlt, color: "#f59e0b" };
      default:
        return { icon: FaExternalLinkAlt, color: "#6b7280" };
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-yellow-500";
      case "planned":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setSelectedProject((prev) => 
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setSelectedProject((prev) => 
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
    setCurrentImageIndex(0);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-md cursor-pointer"
      />

      <div className="relative bg-[#161b22]/95 backdrop-blur-xl border border-[#30363d] rounded-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Close Button - Top Right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors bg-[#21262d]/80 backdrop-blur-sm rounded-full p-2 z-20"
        >
          <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Mobile Layout */}
        <div className="block lg:hidden h-[95vh]">
          {/* Mobile Header with Navigation */}
          <div className="flex items-center justify-between p-4 border-b border-[#30363d]">
            <button
              onClick={prevProject}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
            </button>
            
            <div className="text-center">
              <h3 className="text-white font-semibold text-lg truncate max-w-[200px]">
                {currentProject.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {selectedProject + 1} of {projectsData.length}
              </p>
            </div>

            <button
              onClick={nextProject}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Content */}
          <div className="overflow-y-auto h-[calc(100%-80px)] p-4 space-y-6">
            {/* Mobile Image Section */}
            <div className="relative">
              <img
                src={currentProject.images[currentImageIndex]}
                alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-48 sm:h-64 object-cover rounded-xl"
              />
              
              {currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <FaChevronLeft className="w-3 h-3" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <FaChevronRight className="w-3 h-3" />
                  </button>
                  
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {currentProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Project Details */}
            <div className="space-y-4">
              {/* Category and Status */}
              <div className="flex items-center gap-3">
                <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {currentProject.category}
                </span>
                <div className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${getStatusColor(currentProject.status)}`}></span>
                  <span className="text-xs text-gray-500 capitalize">
                    {currentProject.status.replace("-", " ")}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm">About</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {currentProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-[#21262d] px-2 py-1.5 rounded-lg"
                      >
                        <IconComponent
                          className="w-3 h-3"
                          style={{ color: tech.color }}
                        />
                        <span className="text-gray-300 text-xs">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Links */}
              {currentProject.links.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm">Links</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.links.map((link, index) => {
                      const { icon: IconComponent, color } = getLinkIcon(link.type);
                      return (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:scale-105 transform text-xs"
                          style={{
                            backgroundColor: `${color}20`,
                            border: `1px solid ${color}40`,
                            color: color,
                          }}
                        >
                          <IconComponent className="w-3 h-3" />
                          <span className="font-medium">{link.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex h-[95vh]">
          {/* Project Sidebar */}
          <div className="w-80 border-r border-[#30363d] bg-[#0d1117]/50">
            <div className="p-4 border-b border-[#30363d]">
              <h3 className="text-white font-semibold mb-2">All Projects</h3>
              <p className="text-gray-400 text-sm">{projectsData.length} projects</p>
            </div>
            
            <div className="overflow-y-auto max-h-[calc(100%-80px)]">
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(index);
                    setCurrentImageIndex(0);
                  }}
                  className={`p-4 cursor-pointer transition-all ${
                    index === selectedProject
                      ? "bg-[#21262d] border-l-4 border-blue-500"
                      : "hover:bg-[#161b22]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {project.images[0] && (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium truncate ${
                        index === selectedProject ? "text-white" : "text-gray-300"
                      }`}>
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 truncate">
                        {project.category}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></span>
                        <span className="text-xs text-gray-500 capitalize">
                          {project.status.replace("-", " ")}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => {
                          const IconComponent = tech.icon;
                          return (
                            <IconComponent
                              key={techIndex}
                              className="w-3 h-3"
                              style={{ color: tech.color }}
                            />
                          );
                        })}
                        {project.techStack.length > 3 && (
                          <span className="text-xs text-gray-500 ml-1">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Main Content */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                {/* Images Section */}
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={currentProject.images[currentImageIndex]}
                      alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    
                    {currentProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        >
                          <FaChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        >
                          <FaChevronRight className="w-4 h-4" />
                        </button>
                        
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {currentProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentImageIndex ? "bg-white" : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {currentProject.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {currentProject.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all flex-shrink-0 ${
                            index === currentImageIndex
                              ? "ring-2 ring-blue-500"
                              : "opacity-70 hover:opacity-100"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Desktop Project Details */}
                <div className="space-y-6">
                  {/* Project Title and Category */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {currentProject.title}
                    </h3>
                    <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {currentProject.category}
                    </span>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">About</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {currentProject.techStack.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-[#21262d] px-3 py-2 rounded-lg"
                          >
                            <IconComponent
                              className="w-4 h-4"
                              style={{ color: tech.color }}
                            />
                            <span className="text-gray-300 text-sm">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Links */}
                  {currentProject.links.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Links</h4>
                      <div className="flex flex-wrap gap-3">
                        {currentProject.links.map((link, index) => {
                          const { icon: IconComponent, color } = getLinkIcon(link.type);
                          return (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:scale-105 transform"
                              style={{
                                backgroundColor: `${color}20`,
                                border: `1px solid ${color}40`,
                                color: color,
                              }}
                            >
                              <IconComponent className="w-4 h-4" />
                              <span className="font-medium">{link.name}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
