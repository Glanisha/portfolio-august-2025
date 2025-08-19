import React, { useState } from "react";
import {
  FaTimes,
  FaGraduationCap,
  FaDatabase,
  FaCloud,
  FaCode,
  FaGlobe,
  FaLayerGroup,
  FaPalette
} from "react-icons/fa";
import { softSkillsData } from "../data";

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificationsModal: React.FC<CertificationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState("tech");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState<any>(null);

  if (!isOpen) return null;

  // Tech certifications data with categories
  const certificationsData = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      category: "web",
      imageSrc: "/webdev.png",
      links: [
        { name: "View Certificate", url: "https://ude.my/UC-39f43a82-5364-4646-bcd2-55b256c6067f", type: "live" },
        { name: "Verify", url: "https://ude.my/UC-39f43a82-5364-4646-bcd2-55b256c6067f", type: "live" },
      ],
    },
    {
      title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
      category: "web",
      imageSrc: "/springboot.png",
      links: [
        { name: "View Certificate", url: "https://ude.my/UC-c7b76920-6ae9-436b-a775-28cdee6a4994", type: "live" },
        { name: "Verify", url: "https://ude.my/UC-c7b76920-6ae9-436b-a775-28cdee6a4994", type: "live" },
      ],
    },
    {
      title: "SQL (Basic)",
      category: "sql",
      imageSrc: "/sqlbasic.png",
      links: [
        { name: "View Certificate", url: "#", type: "live" },
        { name: "Verify on HackerRank", url: "https://www.hackerrank.com/certificates/411E8AE25F3", type: "live" },
      ],
    },
    {
      title: "SQL (Intermediate)",
      category: "sql",
      imageSrc: "/sqlinter.png",
      links: [
        { name: "View Certificate", url: "#", type: "live" },
        { name: "Verify on HackerRank", url: "https://www.hackerrank.com/certificates/26CFF27D1BEC", type: "live" },
      ],
    },
    {
      title: "Graphic Design With Photoshop",
      category: "design",
      imageSrc: "/photoshop.png",
      links: [
        { name: "View Certificate", url: "https://ude.my/UC-42e1f77e9-765f-491b-b9a6-8a1d8ae9c0dd", type: "live" },
        { name: "Verify", url: "https://ude.my/UC-42e1f77e9-765f-491b-b9a6-8a1d8ae9c0dd", type: "live" },
      ],
    },
  ];

  // Updated categories (added design category)
  const categories = [
    { id: "all", label: "All", icon: FaLayerGroup },
    { id: "sql", label: "SQL", icon: FaDatabase },
    { id: "web", label: "Web Dev", icon: FaGlobe },
    { id: "design", label: "Design", icon: FaPalette },
    // { id: "cloud", label: "Cloud", icon: FaCloud },
    // { id: "ml", label: "ML/AI", icon: FaCode },
  ];

  // Filtered data
  const filteredTech =
    activeCategory === "all"
      ? certificationsData
      : certificationsData.filter((cert) => cert.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-300 hover:text-white transition-colors z-50 bg-[#21262d]/80 rounded-full p-3"
      >
        <FaTimes className="w-5 h-5" />
      </button>

      {/* Header */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <FaGraduationCap />
          Certifications
        </h2>

        {/* Toggle Tech / Soft */}
        <div className="flex justify-center mb-6">
          <div className="relative bg-[#30363d] rounded-full p-1 w-64">
            <div
              className={`absolute top-1 h-10 w-[calc(50%-4px)] bg-blue-600 rounded-full transition-all duration-300 ease-in-out ${
                activeTab === "tech" ? "left-1" : "left-[calc(50%+4px)]"
              }`}
            />
            <div className="relative flex">
              <button
                onClick={() => {
                  setActiveTab("tech");
                  setActiveCategory("all");
                }}
                className={`flex-1 py-2 px-6 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === "tech"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Tech
              </button>
              <button
                onClick={() => {
                  setActiveTab("soft");
                  setActiveCategory("all");
                }}
                className={`flex-1 py-2 px-6 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === "soft"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Soft Skills
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter (only visible in Tech tab) */}
        {activeTab === "tech" && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex flex-col items-center px-3 py-2 rounded-lg border transition-all duration-300 text-xs ${
                    activeCategory === cat.id
                      ? "bg-blue-600 border-blue-500 text-white"
                      : "bg-[#21262d] border-[#30363d] text-gray-400 hover:text-white hover:border-blue-400"
                  }`}
                >
                  <Icon className="w-4 h-4 mb-1" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-10 scrollbar-hide">
        <style>
          {`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
        </style>

        {/* Tech */}
        {activeTab === "tech" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredTech.map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full h-64 flex items-center justify-center bg-transparent">
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="max-h-64 w-auto object-contain rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => setSelectedCert(cert)}
                  />
                </div>
                <h3 className="text-white text-lg font-semibold mt-4 mb-2 text-center">
                  {cert.title}
                </h3>
                {cert.links && cert.links.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {cert.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-blue-600/80 hover:bg-blue-600 text-white rounded text-xs transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === "soft" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {softSkillsData.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full h-64 flex items-center justify-center bg-transparent">
                  <img
                    src={skill.imageSrc}
                    alt={skill.title}
                    className="max-h-64 w-auto object-contain rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => setSelectedCert(skill)}
                  />
                </div>
                <h3 className="text-white text-lg font-semibold mt-4 mb-2 text-center">
                  {skill.title}
                </h3>
                {/* Only show links if they exist - Fixed TypeScript error */}
                {(skill as any).links && (skill as any).links.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {(skill as any).links.map((link: any, linkIndex: number) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-blue-600/80 hover:bg-blue-600 text-white rounded text-xs transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-6 right-6 text-gray-300 hover:text-white transition-colors bg-[#21262d]/80 rounded-full p-3"
            tabIndex={-1}
          >
            <FaTimes className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full p-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.imageSrc}
              alt={selectedCert.title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg border border-[#30363d]"
            />
            <h3 className="text-white text-xl font-semibold text-center mt-4 mb-4">
              {selectedCert.title}
            </h3>
            
            {/* Certificate Links */}
            {selectedCert.links && selectedCert.links.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {selectedCert.links.map((link: any, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsModal;
