import React from 'react';
import { ArrowRight, Users, Briefcase, Box, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreClick: () => void;
  onJoinCommunityClick: () => void;
  onStartProjectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onJoinCommunityClick, onStartProjectClick }) => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24">
      {/* Background Subtle Tech Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {t.hero.title1} <br />
              {t.hero.title2} <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {t.hero.title3}
              </span>
            </h1>

            <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all flex items-center gap-3 group"
              >
                <span>{t.hero.explore}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onJoinCommunityClick}
                className="bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-7 py-3.5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex items-center gap-2.5"
              >
                <Users className="w-5 h-5 text-blue-600" />
                <span>{t.hero.joinCommunity}</span>
              </button>
            </div>

            {/* Quick metrics / trust badge */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-slate-900">5k+</div>
                <div className="text-xs text-slate-500 font-medium">{t.hero.members}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">150+</div>
                <div className="text-xs text-slate-500 font-medium">{t.hero.projects}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">25+</div>
                <div className="text-xs text-slate-500 font-medium">{t.hero.awards}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Ecosystem Visual Graphic */}
          <div className="lg:col-span-6 flex justify-center items-center py-6">
            <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
              
              {/* Outer Glowing Rings */}
              <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-indigo-400/30 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-24 rounded-full border border-violet-500/20" />

              {/* Background Glow Hub */}
              <div className="absolute w-72 h-72 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-violet-600/30 rounded-full blur-2xl animate-pulse" />

              {/* SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <line x1="250" y1="250" x2="110" y2="110" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="6 4" className="animate-[pulse_3s_ease-in-out_infinite]" />
                <line x1="250" y1="250" x2="390" y2="110" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="6 4" className="animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
                <line x1="250" y1="250" x2="110" y2="390" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="6 4" className="animate-[pulse_3s_ease-in-out_infinite_1s]" />
                <line x1="250" y1="250" x2="390" y2="390" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="6 4" className="animate-[pulse_3s_ease-in-out_infinite_1.5s]" />
              </svg>

              {/* CENTRAL NODE: TEKMEN Revolution */}
              <div className="absolute z-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-1 shadow-2xl shadow-blue-500/40 animate-[bounce_6s_ease-in-out_infinite]">
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-3 border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)] animate-pulse" />
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-md mb-1.5 z-10">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-[11px] font-black text-white tracking-wider uppercase z-10">TEKMEN</div>
                  <div className="text-[9px] font-medium text-blue-300 tracking-tight z-10">Revolution</div>
                </div>
              </div>

              {/* TOP-LEFT NODE: AGENCY */}
              <div className="absolute top-[8%] left-[8%] z-20 group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center p-2 text-center border border-white/20">
                    <Briefcase className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-[10px] font-bold text-white leading-tight">TEKMEN Agency</span>
                  </div>
                </div>
              </div>

              {/* TOP-RIGHT NODE: INNOVATION SOLUTIONS */}
              <div className="absolute top-[8%] right-[8%] z-20 group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 p-1 shadow-lg shadow-indigo-500/30 hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center p-2 text-center border border-white/20">
                    <Box className="w-5 h-5 text-indigo-400 mb-1" />
                    <span className="text-[9px] font-bold text-white leading-tight">Innovation Solutions</span>
                  </div>
                </div>
              </div>

              {/* BOTTOM-LEFT NODE: TEAM */}
              <div className="absolute bottom-[8%] left-[8%] z-20 group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-600 to-rose-600 p-1 shadow-lg shadow-rose-500/30 hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center p-2 text-center border border-white/20">
                    <Trophy className="w-5 h-5 text-rose-400 mb-1" />
                    <span className="text-[10px] font-bold text-white leading-tight">TEKMEN Team</span>
                  </div>
                </div>
              </div>

              {/* BOTTOM-RIGHT NODE: COMMUNITY */}
              <div className="absolute bottom-[8%] right-[8%] z-20 group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 p-1 shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center p-2 text-center border border-white/20">
                    <Users className="w-5 h-5 text-violet-400 mb-1" />
                    <span className="text-[10px] font-bold text-white leading-tight">Community</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
