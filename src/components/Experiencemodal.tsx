import React from "react";
import { FaTimes, FaBriefcase } from "react-icons/fa";

interface WorkExperience {
  title: string;
  role: string;
  duration: string;
  description: string;
  certificate: string;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Experiencemodal: React.FC<ExperienceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const workExperiences: WorkExperience[] = [
    {
      title: "Software Engineer Intern",
      role: "Software Engineer Intern",
      duration: "May 2024 - Aug 2024",
      description:
        "Developed full-stack web apps using MERN stack. Collaborated with senior developers on features and reviews. Mentored interns on React and improved workflows.",
      certificate: "/certificates/software_engineer_internship.png",
    },
    {
      title: "Research Assistant",
      role: "Research Assistant",
      duration: "Jan 2024 - Apr 2024",
      description:
        "Worked on ML research projects focused on NLP. Built deep learning models for classification & sentiment analysis. Contributed to research papers.",
      certificate: "/certificates/research_assistant_certificate.png",
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2">
      {/* overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
      />

      {/* modal */}
      <div className="relative bg-[#161b22] border border-[#30363d] rounded-2xl max-w-5xl w-full shadow-2xl p-6 md:p-10 overflow-hidden">
        {/* close button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 md:absolute md:top-4 md:right-4 text-gray-400 hover:text-white transition-colors z-50 bg-[#21262d] rounded-full p-2"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* heading */}
        <div className="flex items-center justify-center mb-10">
          <FaBriefcase className="w-7 h-7 text-gray-400 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Work Experience
          </h2>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line only on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700/40 h-full rounded-full"></div>

          {workExperiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row md:items-start mb-12`}
            >
              {/* dot on timeline (desktop only) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-5 w-5 h-5 bg-gray-400 rounded-full border-4 border-[#161b22] shadow-md"></div>

              {/* card wrapper */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="bg-[#21262d] border border-[#30363d] rounded-xl shadow-md hover:bg-[#2d333b] transition-colors overflow-hidden">
                  {/* certificate */}
                  <div className="h-40 bg-[#0d1117] flex items-center justify-center overflow-hidden">
                    <img
                      src={exp.certificate}
                      alt={`${exp.role} Certificate`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* content */}
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* end dot (desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-gray-400 rounded-full border-2 border-[#161b22]"></div>
        </div>
      </div>
    </div>
  );
};

export default Experiencemodal;
