import React from 'react';
import { Users, Briefcase, Trophy, Globe, Code } from 'lucide-react';
import { STATISTICS_DATA } from '../data';

export const ImpactSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-blue-300" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-indigo-300" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-violet-300" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-teal-300" />;
      case 'Code':
        return <Code className="w-6 h-6 text-rose-300" />;
      default:
        return <Users className="w-6 h-6 text-blue-300" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3">
            OUR IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Building Today. <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Impacting Tomorrow.</span>
          </h2>
        </div>

        {/* Metrics Grid & World Map Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Metrics Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {STATISTICS_DATA.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-200/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Global Network Map Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] bg-blue-950/40 backdrop-blur-md rounded-3xl border border-white/15 p-6 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] animate-pulse" />
              
              {/* World Map SVG Graphic */}
              <svg className="w-full h-full text-blue-400/40 relative z-10" viewBox="0 0 200 100" fill="currentColor">
                <path d="M30,20 Q40,15 50,25 T70,30 Q90,20 110,35 T150,30 Q170,40 180,60 T140,80 Q100,70 60,85 T20,60 Z" opacity="0.3" />
                <circle cx="45" cy="35" r="3" className="text-blue-400 animate-ping" fill="currentColor" />
                <circle cx="95" cy="45" r="4" className="text-violet-400 animate-pulse" fill="currentColor" />
                <circle cx="150" cy="55" r="3.5" className="text-cyan-400 animate-ping" fill="currentColor" />
                <circle cx="70" cy="70" r="2.5" className="text-indigo-400 animate-pulse" fill="currentColor" />
              </svg>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-blue-200 font-medium bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md z-20">
                <span>Global Reach</span>
                <span className="font-bold text-white">15+ Countries & Growing</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
