import React from 'react';
import {
  X,
  Printer,
  Download,
  ShieldCheck,
  Building,
  GraduationCap,
  Award,
  CheckCircle,
  FileText,
  Copy,
} from 'lucide-react';
import {
  personalInfo,
  experienceData,
  skillsCategories,
  projectsData,
  educationData,
  certificationsData,
  internshipData,
  strengthsData,
  achievementsData,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open('/Achsah_Florance_Resume.html', '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Achsah_Florance_Resume.html';
    link.download = 'Achsah_Florance_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div
        id="resume-modal-card"
        className="relative bg-[#0E1322] w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Control Bar */}
        <div className="bg-[#090D18] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center font-extrabold text-xs text-purple-300 font-mono">
              AF
            </div>
            <div>
              <h3 className="text-sm font-['Outfit'] font-bold text-slate-100">
                Achsah Florance &bull; Verified Resume
              </h3>
              <p className="text-2xs text-slate-400 font-mono">
                Official document data &bull; ATS Compliant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              id="resume-download-btn"
              type="button"
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-purple-400 via-rose-300 to-indigo-300 hover:opacity-95 text-[#0F172A] flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
              title="Download File"
            >
              <Download className="w-3.5 h-3.5 text-purple-900" />
              <span>Download File</span>
            </button>

            <button
              id="resume-close-btn"
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer ml-1"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content (Clean high-contrast paper view) */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white text-slate-800 text-xs">
          
          {/* Header */}
          <div className="border-b-2 border-purple-600 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-['Outfit']">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-purple-700">
                  {personalInfo.roleTitle}
                </p>
              </div>
              <div className="text-slate-600 text-xs sm:text-right font-mono">
                <div>{personalInfo.email}</div>
                <div>{personalInfo.location}</div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed font-serif">
              {personalInfo.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Work Experience
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900">
                  <div className="text-sm">
                    {exp.role} &ndash; <span className="text-purple-700">{exp.company}</span>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">{exp.period}</div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Academic &amp; Applied Projects
            </h2>
            {projectsData.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex items-center justify-between font-semibold text-slate-900">
                  <div className="text-sm">
                    {proj.title} &ndash; <span className="text-slate-600 font-normal">{proj.subtitle}</span>
                  </div>
                  <div className="text-xs text-purple-700 font-mono font-medium">{proj.role}</div>
                </div>
                <p className="text-slate-700 leading-relaxed">{proj.description}</p>
                <div className="text-slate-600 font-mono text-2xs">
                  <strong>Key Technologies: </strong> {proj.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Categorized */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              {skillsCategories.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900">{cat.category}: </span>
                  <span>{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="space-y-2">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-600">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Internship */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Certifications &amp; Internships
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              {certificationsData.map((cert) => (
                <li key={cert.id}>
                  <strong>{cert.title}</strong> &ndash; {cert.type} ({cert.focusArea})
                </li>
              ))}
              <li>
                <strong>{internshipData.title}</strong> &ndash; {internshipData.type} ({internshipData.areasCovered.join(', ')})
              </li>
            </ul>
          </div>

          {/* Strengths & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Key Strengths</h3>
              <ul className="list-disc pl-5 space-y-0.5 text-slate-700">
                {strengthsData.map((s, i) => (
                  <li key={i}>{s.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Impact Highlights</h3>
              <ul className="list-disc pl-5 space-y-0.5 text-slate-700">
                {achievementsData.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer Bar */}
        <div className="bg-[#090D18] px-6 py-3 border-t border-slate-800 flex items-center justify-between text-2xs font-mono text-slate-400">
          <span>Source: Official Resume of Achsah Florance</span>
          <span className="text-emerald-400 font-semibold">100% Genuine Information</span>
        </div>
      </div>
    </div>
  );
};
