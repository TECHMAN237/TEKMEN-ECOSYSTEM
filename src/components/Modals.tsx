import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Users, Briefcase } from 'lucide-react';
import { ProjectItem, EcosystemCardData } from '../types';

interface ModalsProps {
  joinModalOpen: boolean;
  onCloseJoinModal: () => void;
  selectedProject: ProjectItem | null;
  onCloseProjectModal: () => void;
  selectedEcosystemCard: EcosystemCardData | null;
  onCloseEcosystemModal: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  joinModalOpen,
  onCloseJoinModal,
  selectedProject,
  onCloseProjectModal,
  selectedEcosystemCard,
  onCloseEcosystemModal,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', track: 'Community Member', message: '' });

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onCloseJoinModal();
    }, 2500);
  };

  return (
    <>
      {/* Join TEKMEN Modal */}
      {joinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white p-6 relative">
              <button
                onClick={onCloseJoinModal}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-3 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Join TEKMEN Revolution</h3>
              <p className="text-xs text-blue-300 mt-1">Become part of our global technology ecosystem</p>
            </div>

            {/* Form */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Welcome to TEKMEN!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Your application has been received. Our team will reach out to your email shortly with onboarding details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleJoinSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Johnson"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">Select Interest Track</label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      <option value="Community Member">TEKMEN Community Member</option>
                      <option value="Agency Client">TEKMEN Agency (Client Inquiry)</option>
                      <option value="Innovation Partner">Innovation Solutions Partner</option>
                      <option value="Hackathon Team">TEKMEN Competitive Team</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">Tell us about yourself or your project</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your background, goals, or project scope..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
            <div className="relative aspect-[16/9] bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={onCloseProjectModal}
                className="absolute top-4 right-4 p-2 bg-slate-950/70 hover:bg-slate-950 text-white rounded-xl backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3.5 py-1.5 rounded-full">
                {selectedProject.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{selectedProject.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                {selectedProject.metrics && (
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase">Impact Metric</div>
                    <div className="text-base font-bold text-blue-600">{selectedProject.metrics}</div>
                  </div>
                )}
                {selectedProject.client && (
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase">Client / Partner</div>
                    <div className="text-base font-bold text-slate-900">{selectedProject.client}</div>
                  </div>
                )}
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase mb-2">Technologies Used</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={onCloseProjectModal}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={onCloseProjectModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>Request Solution Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ecosystem Card Modal */}
      {selectedEcosystemCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
            <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white p-6 relative">
              <button
                onClick={onCloseEcosystemModal}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-3 shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">{selectedEcosystemCard.title}</h3>
              <p className="text-xs text-blue-300 mt-1">{selectedEcosystemCard.subtitle}</p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedEcosystemCard.description}
              </p>

              <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 text-xs text-blue-800 leading-relaxed">
                TEKMEN Revolution integrates this division seamlessly across our global operations to ensure enterprise excellence and continuous innovation.
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={onCloseEcosystemModal}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={onCloseEcosystemModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>{selectedEcosystemCard.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
