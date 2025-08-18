import React, { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaMapMarkerAlt,
  FaInstagram,
  FaTrophy,
  FaInfoCircle,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { achievementsData, projectsData, techStack, experienceData } from "./data";
import CertificationsModal from "./components/CertificationsModal";
import AboutMe from "./components/Aboutme";

interface ModalData {
  title: string;
  imageSrc?: string;
  description: string;
  links?: { name: string; url: string; type: string }[];
}

interface ModalProps {
  items: ModalData[];
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const Modal: React.FC<ModalProps> = ({
  items,
  currentIndex,
  onClose,
  onIndexChange,
}) => {
  if (!items || items.length === 0) return null;

  const getLinkIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "github":
        return FaGithub;
      case "linkedin":
        return FaLinkedin;
      case "live":
      case "demo":
        return FaExternalLinkAlt;
      default:
        return FaExternalLinkAlt;
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const newIndex = Math.round(scrollLeft / containerWidth);

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < items.length) {
      onIndexChange(newIndex);
    }
  };

  React.useEffect(() => {
    const container = document.getElementById("modal-scroll-container");
    if (container) {
      container.scrollLeft = currentIndex * container.clientWidth;
    }
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-md cursor-pointer"
      />

      <div className="relative bg-[#161b22]/95 backdrop-blur-xl border border-[#30363d] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 bg-[#21262d]/80 backdrop-blur-sm rounded-full p-2"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-2">
            {items.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-500"
                }`}
                onClick={() => onIndexChange(index)}
              />
            ))}
          </div>
        </div>

        <div
          id="modal-scroll-container"
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide max-h-[90vh]"
          style={{ scrollBehavior: "smooth" }}
          onScroll={handleScroll}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col lg:flex-row snap-center"
            >
              {item.imageSrc && (
                <div className="lg:w-1/2 w-full">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              )}

              <div
                className={`p-8 flex flex-col ${
                  item.imageSrc ? "lg:w-1/2" : "w-full"
                } overflow-y-auto`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {item.title}
                  </h2>
                  <span className="text-sm text-gray-400 bg-[#21262d]/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {index + 1} of {items.length}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-base">
                  {item.description}
                </p>

                {item.links && item.links.length > 0 && (
                  <div className="mt-auto">
                    <h3 className="text-white font-semibold text-lg mb-4">
                      Links
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {item.links.map((link, linkIndex) => {
                        const IconComponent = getLinkIcon(link.type);
                        return (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                          >
                            <IconComponent className="w-4 h-4" />
                            {link.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [modalItems, setModalItems] = useState<ModalData[]>([]);
  const [certificationsModalOpen, setCertificationsModalOpen] = useState(false);
  const [aboutMeOpen, setAboutMeOpen] = useState(false);

  const openModal = (items: ModalData[]) => {
    setModalItems(items);
    setCurrentModalIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalIndexChange = (index: number) => {
    setCurrentModalIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] p-4 md:p-8 lg:p-10 md:flex md:items-center md:justify-center">
      <div className="max-w-7xl mx-auto min-h-screen md:h-screen grid grid-cols-1 md:grid-cols-12 md:grid-rows-5 gap-4">
        {/* 1. Hi I'm Liza - Large card */}
        <div className="order-1 md:col-span-4 md:row-span-4 bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden hover:bg-[#1c2128] transition-colors">
          <div className="p-6">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-2">
              Hi, I'm Liza Glanisha.
            </h1>
            <h2 className="text-lg md:text-xl lg:text-xl text-gray-300 mb-2">
              3rd Year Computer Engineering Student
            </h2>
            <h5 className="text-sm md:text-base text-gray-400 mb-6">
              Fr. Conceicao Rodrigues College of Engineering
            </h5>

            <div className="flex items-center text-gray-400 text-sm mb-6">
              <FaMapMarkerAlt className="w-4 h-4 mr-2 text-white flex-shrink-0" />
              Mumbai, India
            </div>
          </div>

          <div className="px-6 pb-2">
            <div className="bg-[#0d1117] rounded-2xl overflow-hidden mb-4">
              <img
                src="/liza2.png"
                alt="Liza Profile"
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>

            {/* Fixed social icons grid */}
            <div className="grid grid-cols-5 gap-3">
              <a
                href="https://github.com/Glanisha"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#21262d] rounded-lg hover:bg-[#30363d] transition-colors cursor-pointer flex items-center justify-center w-full aspect-square"
              >
                <FaGithub className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/liza-glanisha-castelino-558802302/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center w-full aspect-square"
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>

              <a
                href="mailto:lizacastelinoo@gmail.com"
                className="bg-green-600 rounded-lg hover:bg-green-700 transition-colors cursor-pointer flex items-center justify-center w-full aspect-square"
              >
                <FaEnvelope className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://devfolio.co/@glanisha"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A0A0A] rounded-lg hover:bg-[#1A1A1A] transition-colors cursor-pointer flex items-center justify-center w-full aspect-square"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="#ffffff"
                    d="M256 32L20 164v184l236 132 236-132V164L256 32zm0 42l196 110v142l-196 110-196-110V184l196-110zm-46 78v210l136-105-136-105z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/liza_glanisha_draws/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors cursor-pointer flex items-center justify-center w-full aspect-square"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Download CV */}
        <div
          onClick={() => window.open("/cv.pdf", "_blank")}
          className="order-2 md:col-span-4 md:row-span-1 bg-teal-600 border border-teal-500 rounded-2xl p-4 md:p-6 flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer"
        >
          <FaDownload className="w-5 h-5 text-white mr-3 flex-shrink-0" />
          <span className="text-white font-medium text-base md:text-lg text-center">
            Download CV
          </span>
        </div>

        {/* 3. About Me - Updated to use new component */}
        <div
          onClick={() => setAboutMeOpen(true)}
          className="order-3 md:col-span-4 md:row-span-1 bg-[#161b22] border border-[#30363d] rounded-2xl p-4 md:p-6 flex items-center justify-center cursor-pointer hover:bg-[#21262d] transition-colors"
        >
          <FaInfoCircle className="w-6 h-6 text-white mr-3 flex-shrink-0" />
          <span className="text-white font-medium text-base md:text-lg text-center">
            About Me
          </span>
        </div>

        {/* 4. Tech Stack */}
        <div className="order-4 md:col-span-4 md:row-span-2 bg-[#161b22] border border-[#30363d] rounded-2xl p-4 md:p-6 hover:bg-[#1c2128] transition-colors overflow-hidden relative">
          <h3 className="text-white font-bold mb-4 md:mb-6 text-base md:text-lg tracking-wide">
            TECH STACK
          </h3>

          <div className="overflow-x-auto scrollbar-hide relative">
            <div className="flex gap-3 md:gap-4 md:grid md:auto-cols-max md:grid-rows-2 md:grid-flow-col">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-[#21262d] p-3 md:p-4 rounded-xl hover:bg-[#30363d] transition-colors cursor-pointer flex flex-col items-center justify-center gap-2 min-h-[70px] md:min-h-[80px] w-[90px] md:w-[110px]"
                  >
                    <IconComponent
                      className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs text-gray-300 text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-[#161b22] to-transparent"></div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gray-500 opacity-50"
              ></div>
            ))}
          </div>
        </div>

        {/* 5. Experience */}
        <div
          onClick={() => openModal(experienceData)}
          className="order-5 md:col-span-4 md:row-span-1 bg-[#161b22] border border-[#30363d] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#21262d] transition-colors text-center"
        >
          <FaBriefcase className="w-6 h-6 text-white mb-2 flex-shrink-0" />
          <span className="text-white font-medium text-base md:text-lg">
            Experience
          </span>
        </div>

        {/* 6. Achievements */}
        <div
          onClick={() => openModal(achievementsData)}
          className="order-6 md:col-span-4 md:row-span-1 bg-[#161b22] border border-[#30363d] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#21262d] transition-colors text-center"
        >
          <FaTrophy className="w-6 h-6 text-white mb-2 flex-shrink-0" />
          <span className="text-white font-medium text-base md:text-lg text-center">
            Achievements & Co-Curricular
          </span>
        </div>

        {/* 7. Certifications - Updated to use imported modal */}
        <div
          onClick={() => setCertificationsModalOpen(true)}
          className="order-7 md:col-span-4 md:row-span-1 bg-[#161b22] border border-[#30363d] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#21262d] transition-colors text-center"
        >
          <FaGraduationCap className="w-6 h-6 text-white mb-2 flex-shrink-0" />
          <span className="text-white font-medium text-base md:text-lg text-center">
            Certifications
          </span>
        </div>

        {/* 8. Projects */}
        <div
          onClick={() => openModal(projectsData)}
          className="order-8 md:col-span-4 md:row-span-1 bg-[#161b22] border border-[#30363d] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#21262d] transition-colors text-center"
        >
          <FaProjectDiagram className="w-6 h-6 text-white mb-2 flex-shrink-0" />
          <span className="text-white font-medium text-base md:text-lg text-center">
            Projects
          </span>
        </div>
      </div>

      {modalOpen && (
        <Modal
          items={modalItems}
          currentIndex={currentModalIndex}
          onClose={closeModal}
          onIndexChange={handleModalIndexChange}
        />
      )}

      <CertificationsModal
        isOpen={certificationsModalOpen}
        onClose={() => setCertificationsModalOpen(false)}
      />

      <AboutMe
        isOpen={aboutMeOpen}
        onClose={() => setAboutMeOpen(false)}
      />
    </div>
  );
};

export default App;
