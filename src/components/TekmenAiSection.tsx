import React from 'react';
import { ArrowRight, Cpu, Sparkles } from 'lucide-react';

interface TekmenAiSectionProps {
  onExploreAiClick: () => void;
}

export const TekmenAiSection: React.FC<TekmenAiSectionProps> = ({ onExploreAiClick }) => {
  return (
    <section className="py-12 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-blue-900/40">
          
          {/* Background Glows & Particles */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left AI Graphic Badge */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 border border-white/20 p-4 flex items-center justify-center shadow-xl backdrop-blur-md">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)] animate-pulse" />
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/30">
                    <Cpu className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <div className="text-sm font-black tracking-widest uppercase text-white flex items-center justify-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                    TEKMEN AI
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text & CTA */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                TEKMEN AI Division
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Intelligence that Powers <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Innovation.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                TEKMEN AI is our artificial intelligence division building smart solutions, models, and tools that solve real-world problems.
              </p>

              <div className="pt-2 flex justify-center lg:justify-start">
                <button
                  onClick={onExploreAiClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group"
                >
                  <span>Explore TEKMEN AI</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
