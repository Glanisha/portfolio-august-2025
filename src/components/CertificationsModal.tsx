import React, { useState } from "react";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGraduationCap,
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

  if (!isOpen) return null;

  // Tech certifications data
  const certificationsData = [
    {
      title: "AWS Solutions Architect",
      imageSrc: "/sql.png",
      links: [
        { name: "View Certificate", url: "#", type: "live" },
        { name: "Verify", url: "#", type: "live" },
      ],
    },
    {
      title: "Google Machine Learning Engineer",
      imageSrc: "/api/placeholder/600/400",
      links: [{ name: "Certificate", url: "#", type: "live" }],
    },
    {
      title: "AWS Solutions Architect",
      imageSrc: "/sql.png",
      links: [
        { name: "View Certificate", url: "#", type: "live" },
        { name: "Verify", url: "#", type: "live" },
      ],
    },
    {
      title: "Google Machine Learning Engineer",
      imageSrc: "/api/placeholder/600/400",
      links: [{ name: "Certificate", url: "#", type: "live" }],
    },
    {
      title: "AWS Solutions Architect",
      imageSrc: "/sql.png",
      links: [
        { name: "View Certificate", url: "#", type: "live" },
        { name: "Verify", url: "#", type: "live" },
      ],
    },
    {
      title: "Google Machine Learning Engineer",
      imageSrc: "/api/placeholder/600/400",
      links: [{ name: "Certificate", url: "#", type: "live" }],
    },
    {
      title: "Microsoft Azure Developer",
      imageSrc: "/api/placeholder/600/400",
      links: [
        { name: "View Certificate", url: "#", type: "live" },
        { name: "Verify", url: "#", type: "live" },
      ],
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

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 backdrop-blur-md cursor-pointer"
      />

      <div className="relative bg-[#161b22] border border-[#30363d] rounded-2xl max-w-6xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 bg-[#21262d]/80 rounded-full p-2"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FaGraduationCap />
            Certifications
          </h2>

          {/* Toggle Switch - Single Button */}
          <div className="flex justify-center mb-6">
            <div className="relative bg-[#30363d] rounded-full p-1 w-64">
              <div
                className={`absolute top-1 h-10 w-[calc(50%-4px)] bg-blue-600 rounded-full transition-all duration-300 ease-in-out ${
                  activeTab === "tech" ? "left-1" : "left-[calc(50%+4px)]"
                }`}
              />
              <div className="relative flex">
                <button
                  onClick={() => setActiveTab("tech")}
                  className={`flex-1 py-2 px-6 rounded-full font-semibold transition-all duration-200 ${
                    activeTab === "tech"
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Tech
                </button>
                <button
                  onClick={() => setActiveTab("soft")}
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

          {/* Content Area with Hidden Scrollbar */}
          <div className="overflow-y-auto max-h-[60vh] scrollbar-hide">
            <style >{`
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {activeTab === "tech" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {certificationsData.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-[#21262d] border border-[#30363d] rounded-xl p-6 flex flex-col items-center hover:bg-[#2a3139] transition-colors group"
                  >
                    {/* Certificate Image - Much Bigger */}
                    <div className="w-full h-80 mb-6 overflow-hidden rounded-lg bg-[#30363d]">
                      <img
                        src={cert.imageSrc}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    
                    {/* Certificate Title */}
                    <h3 className="text-white text-xl font-semibold mb-4 text-center">
                      {cert.title}
                    </h3>
                    
                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-3 mt-auto">
                      {cert.links && cert.links.length > 0 &&
                        cert.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm"
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

            {activeTab === "soft" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {softSkillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#21262d] border border-[#30363d] rounded-xl p-6 flex flex-col items-center hover:bg-[#2a3139] transition-colors group"
                  >
                    {/* Skill Image - Much Bigger */}
                    <div className="w-full h-80 mb-6 overflow-hidden rounded-lg bg-[#30363d]">
                      <img
                        src={skill.imageSrc}
                        alt={skill.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    
                    {/* Skill Title */}
                    <h3 className="text-white text-xl font-semibold mb-4 text-center">
                      {skill.title}
                    </h3>
                    
                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-3 mt-auto">
                      {skill.links && skill.links.length > 0 &&
                        skill.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm"
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
      </div>
    </div>
  );
};

export default CertificationsModal;
