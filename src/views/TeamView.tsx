import React, { useState } from 'react';
import { Trophy, Users, ArrowRight, CheckCircle2, Calendar, MapPin, ExternalLink, Github, Linkedin, Twitter, X, Award } from 'lucide-react';
import { OFFICIAL_TEAM_MEMBERS, ACHIEVEMENTS_DATA, EVENTS_DATA, PROJECTS_DATA, TEAM_SQUADS } from '../data';
import { TeamMember } from '../types';

interface TeamViewProps {
  onJoinClick: () => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onJoinClick }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [teamForm, setTeamForm] = useState({ name: '', email: '', track: 'Squad Alpha', experience: '' });

  const handleTeamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setTeamForm({ name: '', email: '', track: 'Squad Alpha', experience: '' });
    }, 3000);
  };

  return (
    <div className="py-16 bg-white animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold tracking-wide uppercase">
            <Trophy className="w-3.5 h-3.5 text-rose-600" />
            TEKMEN Team Roster & Recognition
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            The People Behind TEKMEN.
          </h1>
          <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Meet the people officially representing TEKMEN Revolution through technology, innovation, competitions and collaborative projects.
          </p>
          <div className="pt-2">
            <button
              onClick={onJoinClick}
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-rose-600/25 transition-all inline-flex items-center gap-2 group"
            >
              <span>Apply to Join the Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* SECTION 1: OFFICIAL TEAM MEMBERS (MUST COME BEFORE EVENTS & EXPERIENCES) */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="text-xs font-bold tracking-widest text-rose-600 uppercase mb-2">OFFICIAL ROSTER</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Team Members</h2>
            <p className="text-sm text-slate-500 mt-1">Recognized engineers, researchers, and innovators representing TEKMEN.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFICIAL_TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl border border-slate-200 p-7 shadow-xs hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                      <div className="text-xs font-bold text-rose-600">{member.role}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{member.expertise}</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400">
                    {member.socialLinks?.github && <Github className="w-4 h-4 hover:text-slate-900 cursor-pointer" />}
                    {member.socialLinks?.linkedin && <Linkedin className="w-4 h-4 hover:text-slate-900 cursor-pointer" />}
                    {member.socialLinks?.twitter && <Twitter className="w-4 h-4 hover:text-slate-900 cursor-pointer" />}
                  </div>
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 bg-rose-50 hover:bg-rose-100 px-3.5 py-2 rounded-xl transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: OUR ACHIEVEMENTS */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">PODIUM FINISHES</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Achievements</h2>
            <p className="text-sm text-slate-500 mt-1">Hackathons, competitions, and innovation challenges won.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACHIEVEMENTS_DATA.map((ach) => (
              <div key={ach.id} className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-amber-600 uppercase">{ach.category} • {ach.date}</div>
                <h3 className="text-lg font-bold text-slate-900">{ach.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{ach.description}</p>
                <div className="pt-3 border-t border-slate-200/60 text-xs font-bold text-slate-900">
                  Result: <span className="text-rose-600">{ach.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: EXPERIENCES & EVENTS */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">FIELD ACTIVITIES</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Experiences & Events</h2>
            <p className="text-sm text-slate-500 mt-1">Hackathons, summits, and summits attended by our squads.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS_DATA.map((ev) => (
              <div key={ev.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group">
                <div className="aspect-[16/9] bg-slate-950 relative overflow-hidden">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{ev.date}</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{ev.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{ev.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{ev.description}</p>
                  
                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                    <div className="text-[11px] font-semibold text-slate-500">
                      Participating Members: <span className="text-slate-900">{ev.teamMembersInvolved.join(', ')}</span>
                    </div>
                    <div className="text-xs font-bold text-rose-600 bg-rose-50 px-3.5 py-2 rounded-xl">
                      Outcome: {ev.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: PROJECTS WE BUILT TOGETHER */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Projects We Built Together</h2>
            <p className="text-sm text-slate-500 mt-1">Collaborative software creations built by TEKMEN competitive teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.slice(0, 3).map((proj) => (
              <div key={proj.id} className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-4 shadow-xs">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{proj.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{proj.description}</p>
                <div className="pt-2 text-xs font-semibold text-rose-600">
                  Technologies: {proj.tags.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: JOIN THE TEAM APPLICATION FORM */}
        <div className="bg-gradient-to-br from-slate-950 via-rose-950 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Want to Represent TEKMEN?</h3>
              <p className="text-slate-300 text-sm">We're building teams of people who want to learn, compete, create and represent TEKMEN on bigger stages.</p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/40 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Application Received!</h4>
                <p className="text-xs text-emerald-200">Our team captain will reach out to evaluate your qualifications and schedule a technical intro.</p>
              </div>
            ) : (
              <form onSubmit={handleTeamSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={teamForm.name}
                      onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                      placeholder="Alex Vance"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={teamForm.email}
                      onChange={(e) => setTeamForm({ ...teamForm, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Preferred Squad / Track</label>
                    <select
                      value={teamForm.track}
                      onChange={(e) => setTeamForm({ ...teamForm, track: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                    >
                      <option value="Squad Alpha">Squad Alpha (AI & Algorithms)</option>
                      <option value="Squad Beta">Squad Beta (Full-Stack & Cloud)</option>
                      <option value="Squad Gamma">Squad Gamma (Mobile & IoT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">GitHub / Portfolio URL</label>
                    <input
                      type="text"
                      required
                      value={teamForm.experience}
                      onChange={(e) => setTeamForm({ ...teamForm, experience: e.target.value })}
                      placeholder="github.com/username"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm py-3.5 rounded-xl shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply to Join the Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* TEAM MEMBER PROFILE MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 space-y-6 shadow-2xl relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-5 pb-6 border-b border-slate-100">
              <img src={selectedMember.avatar} alt={selectedMember.name} className="w-20 h-20 rounded-2xl object-cover shadow-md" referrerPolicy="no-referrer" />
              <div>
                <h2 className="text-2xl font-black text-slate-900">{selectedMember.name}</h2>
                <div className="text-sm font-bold text-rose-600">{selectedMember.role}</div>
                <div className="text-xs text-slate-500 mt-1">{selectedMember.expertise}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">About</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedMember.bio}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((s, i) => (
                    <span key={i} className="bg-rose-50 text-rose-700 text-xs font-semibold px-3 py-1 rounded-lg">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {selectedMember.projects && selectedMember.projects.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Key Projects</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {selectedMember.projects.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedMember.competitions && selectedMember.competitions.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Competitions & Hackathons</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {selectedMember.competitions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Achievements & Recognition</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {selectedMember.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="bg-slate-900 text-white font-semibold text-xs px-6 py-2.5 rounded-xl"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
