import React from "react";
import { FaTimes, FaCode, FaPaintBrush, FaLaptopCode, FaUserGraduate, FaRocket } from "react-icons/fa";

interface MeAboutProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeAbout: React.FC<MeAboutProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-md cursor-pointer"
      />

      <div className="relative bg-[#161b22]/95 backdrop-blur-xl border border-[#30363d] rounded-2xl max-w-2xl w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 bg-[#21262d]/80 backdrop-blur-sm rounded-full p-2"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          
          {/* Intro */}
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a <span className="text-white font-semibold">3rd-year Computer Engineering student</span>, currently pursuing 
            an honors program in Artificial Intelligence and Machine Learning.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 bg-[#1c2128] p-4 rounded-xl border border-[#30363d]">
              <FaLaptopCode className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <h3 className="text-white font-semibold"> Experience</h3>
                <p className="text-gray-400 text-sm">
                  Completed two frontend development internships, gaining hands-on experience 
                  in building scalable, user-friendly web applications.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#1c2128] p-4 rounded-xl border border-[#30363d]">
              <FaUserGraduate className="w-6 h-6 text-green-400 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Katalyst India Mentee</h3>
                <p className="text-gray-400 text-sm">
                  Undergoing structured technical and soft skills training, preparing to 
                  contribute effectively in professional environments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#1c2128] p-4 rounded-xl border border-[#30363d]">
              <FaCode className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Technical Skills</h3>
                <p className="text-gray-400 text-sm">
                  Skilled in full-stack development with growing expertise in AI/ML. 
                  Adaptable and quick to learn new technologies as projects demand.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#1c2128] p-4 rounded-xl border border-[#30363d]">
              <FaPaintBrush className="w-6 h-6 text-pink-400 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Creative Outlook</h3>
                <p className="text-gray-400 text-sm">
                  Experienced in art and graphic design, with freelance work as an artist. 
                  I aim to integrate creativity with technology to design solutions that are 
                  both functional and visually engaging.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#1c2128] p-4 rounded-xl border border-[#30363d] sm:col-span-2">
              <FaRocket className="w-6 h-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Opportunities & Growth</h3>
                <p className="text-gray-400 text-sm">
                 <span className="text-amber-200"> Actively seeking hackathon teams</span>  to collaborate on innovative projects.  Currently looking for 
                 <span className="text-amber-200"> internship opportunities</span>
                 internship opportunities where I can apply my skills, 
                  learn from industry experts, and contribute to impactful solutions.
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};
