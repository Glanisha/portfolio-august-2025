import React, { useState } from "react";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaDatabase,
  FaCloud,
  FaCode,
  FaGlobe,
  FaLayerGroup,
} from "react-icons/fa";

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

  if (!isOpen) return null;

  // Tech certifications data with categories
  const certificationsData = [
    {
      title: "AWS Solutions Architect",
      category: "cloud",
      imageSrc: "/sql.png",
      links: [
        { name: "View Certificate", url: "#", type: "live" },
        { name: "Verify", url: "#", type: "live" },
      ],
    },
    {
      title: "Google Machine Learning Engineer",
      category: "ml",
      imageSrc: "/api/placeholder/600/400",
      links: [{ name: "Certificate", url: "#", type: "live" }],
    },
    {
      title: "SQL Expert Certification",
      category: "sql",
      imageSrc: "/sql.png",
      links: [{ name: "View Certificate", url: "#", type: "live" }],
    },
    {
      title: "Frontend Web Developer",
      category: "web",
      imageSrc: "/api/placeholder/600/400",
      links: [{ name: "Certificate", url: "#", type: "live" }],
    },
  ];

  // Soft skills data
  const softSkillsData = [
    {
      title: "Leadership Training",
      imageSrc: "/api/placeholder/600/400",
      links: [{ name: "Certificate", url: "#", type: "live" }],
    },
    {
      title: "Communication Skills",
      imageSrc: "/api/placeholder/600/400",
      links: [{ name: "View Certificate", url: "#", type: "live" }],
    },
  ];

  // Categories
  const categories = [
    { id: "all", label: "All", icon: FaLayerGroup },
    { id: "sql", label: "SQL", icon: FaDatabase },
    { id: "web", label: "Web Dev", icon: FaGlobe },
    { id: "cloud", label: "Cloud", icon: FaCloud },
    { id: "ml", label: "ML/AI", icon: FaCode },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTech.map((cert, index) => (
              <div
                key={index}
                className="bg-[#21262d] border border-[#30363d] rounded-xl p-5 flex flex-col hover:bg-[#2a3139] transition-colors group"
              >
                <div className="w-full h-56 mb-4 overflow-hidden rounded-lg bg-[#30363d]">
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold mb-3 text-center">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 mt-auto">
                  {cert.links?.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md transition-colors flex items-center gap-2 text-xs"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === "soft" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkillsData.map((skill, index) => (
              <div
                key={index}
                className="bg-[#21262d] border border-[#30363d] rounded-xl p-5 flex flex-col hover:bg-[#2a3139] transition-colors group"
              >
                <div className="w-full h-56 mb-4 overflow-hidden rounded-lg bg-[#30363d]">
                  <img
                    src={skill.imageSrc}
                    alt={skill.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold mb-3 text-center">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 mt-auto">
                  {skill.links?.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md transition-colors flex items-center gap-2 text-xs"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationsModal;
