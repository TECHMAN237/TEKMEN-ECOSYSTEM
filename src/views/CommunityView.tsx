import React, { useState } from 'react';
import { Users, ArrowRight, Sparkles, Code, Cpu, Shield, Smartphone, Globe, Terminal, CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CommunityViewProps {
  onJoinClick: () => void;
}

export const CommunityView: React.FC<CommunityViewProps> = ({ onJoinClick }) => {
  const [waitingListEmail, setWaitingListEmail] = useState('');
  const [waitingListSubmitted, setWaitingListSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleWaitingListSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWaitingListSubmitted(true);
    setTimeout(() => {
      setWaitingListSubmitted(false);
      setWaitingListEmail('');
    }, 4000);
  };

  const domains = [
    { title: 'Software Engineering', desc: 'Core algorithms, architecture, and systems.', icon: <Code className="w-5 h-5 text-blue-600" /> },
    { title: 'Web Development', desc: 'React, TypeScript, Next.js, and web architecture.', icon: <Globe className="w-5 h-5 text-indigo-600" /> },
    { title: 'Mobile Development', desc: 'React Native, Flutter, and native mobile engineering.', icon: <Smartphone className="w-5 h-5 text-indigo-700" /> },
    { title: 'DevOps & Cloud', desc: 'AWS, Kubernetes, Docker, and CI/CD pipelines.', icon: <Terminal className="w-5 h-5 text-indigo-600" /> },
    { title: 'Cybersecurity', desc: 'Zero trust architecture, cryptography, and audits.', icon: <Shield className="w-5 h-5 text-rose-600" /> },
    { title: 'Networking', desc: 'Protocols, distributed routing, and infrastructure.', icon: <Globe className="w-5 h-5 text-blue-700" /> },
    { title: 'AI & Machine Learning', desc: 'LLMs, PyTorch, computer vision, and autonomous agents.', icon: <Cpu className="w-5 h-5 text-violet-600" /> },
    { title: 'UI/UX', desc: 'Design systems, user research, and prototyping.', icon: <Sparkles className="w-5 h-5 text-amber-500" /> },
    { title: 'IoT', desc: 'ESP32, sensor meshes, and physical computing.', icon: <Users className="w-5 h-5 text-blue-600" /> },
    { title: 'Data', desc: 'Streaming analytics, SQL, Spark, and time-series DBs.', icon: <Code className="w-5 h-5 text-violet-700" /> },
    { title: 'Entrepreneurship', desc: 'Building startups, scaling products, and pitching.', icon: <Sparkles className="w-5 h-5 text-blue-500" /> },
  ];

  const benefits = [
    'Learn from experienced developers and mentors',
    'Ask questions and get unstuck quickly',
    'Collaborate on open-source and hackathon projects',
    'Find talented teammates for competitions',
    'Participate in exclusive community challenges',
    'Build real technology products together',
  ];

  return (
    <div className="py-16 bg-white animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase">
            <Users className="w-3.5 h-3.5 text-indigo-600" />
            {t.community.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            {t.community.title1} <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {t.community.title2}
            </span>
          </h1>
          <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {t.community.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onJoinClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 group"
            >
              <span>{t.community.joinChannels}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Community Domains */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.community.domainsTitle}</h2>
            <p className="text-sm text-slate-500 mt-2">{t.community.domainsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((d, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs">
                  {d.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{d.title}</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Join? */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.community.whyTitle}</h2>
            <p className="text-sm text-slate-500 mt-2">{t.community.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-slate-900 leading-snug">{b}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Journey */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.community.journeyTitle}</h2>
            <p className="text-sm text-slate-500 mt-2">{t.community.journeySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">STEP 01</div>
              <h3 className="text-xl font-bold">WhatsApp</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Daily discussions, instant announcements, quick Q&A, and localized developer updates.</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-950 to-violet-950 text-white p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">STEP 02</div>
              <h3 className="text-xl font-bold">Discord</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Voice channels, specialized code review rooms, pair programming, and hackathon war rooms.</p>
            </div>
            <div className="bg-gradient-to-br from-violet-950 to-slate-900 text-white p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="text-xs font-bold text-violet-400 uppercase tracking-widest">STEP 03</div>
              <h3 className="text-xl font-bold">Future Platform</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Integrated ecosystem platform featuring verified credentials, portfolio showcases, and peer mentorship.</p>
            </div>
          </div>
        </div>

        {/* MEET THE FOUNDER SECTION */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-violet-50 border border-blue-100 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xl shrink-0 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Steeve Zali"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                {t.community.founderSubtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{t.community.founderTitle}: Steeve Zali</h3>
              <div className="text-xs font-bold text-indigo-600 uppercase">Founder & Chief Executive Officer</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Visionary software engineer and entrepreneur dedicated to building resilient technology ecosystems that empower individuals and organizations to solve complex real-world challenges.
              </p>
              <div className="pt-2 text-xs font-semibold text-slate-900">
                <span className="text-indigo-600 font-bold">{t.community.visionLabel}</span> Building a technology ecosystem that empowers people to learn, create, innovate and solve real-world problems.
              </div>
            </div>
          </div>
        </div>

        {/* Join Community Section / Waiting List */}
        <div id="waitlist" className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl space-y-8">
          <div className="max-w-xl mx-auto text-center space-y-3">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">{t.community.joinNetworkBadge}</div>
            <h2 className="text-3xl font-black">{t.community.joinNetworkTitle}</h2>
            <p className="text-slate-400 text-sm">{t.community.joinNetworkDesc}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onJoinClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              {t.community.whatsappDiscord}
            </button>
          </div>

          <div className="max-w-md mx-auto pt-6 border-t border-white/10">
            {waitingListSubmitted ? (
              <div className="bg-blue-900/40 border border-blue-500/40 p-4 rounded-xl text-center text-xs text-blue-200">
                {t.community.waitlistSuccess}
              </div>
            ) : (
              <form onSubmit={handleWaitingListSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={waitingListEmail}
                  onChange={(e) => setWaitingListEmail(e.target.value)}
                  placeholder={t.community.waitlistPlaceholder}
                  className="flex-grow bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl text-xs font-bold shrink-0 transition-all"
                >
                  {t.community.waitlistBtn}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
