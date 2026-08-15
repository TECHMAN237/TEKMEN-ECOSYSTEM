import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Users, Briefcase, Box, Trophy } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: any) => void;
  onJoinClick: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onJoinClick }) => {
  return (
    <div className="py-16 bg-white animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            About TEKMEN Revolution
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            More Than a Company. <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              An Ecosystem.
            </span>
          </h1>
          <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            TEKMEN Revolution is a comprehensive technology ecosystem founded on the belief that real innovation happens at the intersection of business execution, engineering R&D, competitive challenge, and community collaboration.
          </p>
        </div>

        {/* Four Branches Overview */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Four Pillars</h2>
            <p className="text-sm text-slate-500 mt-2">Four specialized branches working in unison to create end-to-end impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'TEKMEN Agency',
                subtitle: 'Digital presence & acceleration',
                desc: 'Helping businesses build a stronger digital presence through high-end web development, branding, and cloud architecture.',
                action: 'Explore Agency',
                onClick: () => window.open('https://tekmenagency.com', '_blank'),
                icon: <Briefcase className="w-6 h-6 text-violet-600" />,
                badge: 'bg-violet-50 text-violet-700 border-violet-100'
              },
              {
                title: 'TEKMEN Innovation Solutions',
                subtitle: 'Real-world problem solving',
                desc: 'Building and delivering technology, custom software suites, IoT systems, and advanced AI models.',
                action: 'Explore Solutions',
                onClick: () => onNavigate('innovation'),
                icon: <Box className="w-6 h-6 text-blue-600" />,
                badge: 'bg-blue-50 text-blue-700 border-blue-100'
              },
              {
                title: 'TEKMEN Team',
                subtitle: 'Global competitive excellence',
                desc: 'Competing, innovating, and representing TEKMEN in international hackathons and technology competitions.',
                action: 'Meet the Team',
                onClick: () => onNavigate('team'),
                icon: <Trophy className="w-6 h-6 text-rose-600" />,
                badge: 'bg-rose-50 text-rose-700 border-rose-100'
              },
              {
                title: 'TEKMEN Community',
                subtitle: 'Connecting builders worldwide',
                desc: 'Connecting over 5,000 passionate developers, designers, founders, and technology enthusiasts.',
                action: 'Join Community',
                onClick: () => onNavigate('community'),
                icon: <Users className="w-6 h-6 text-emerald-600" />,
                badge: 'bg-emerald-50 text-emerald-700 border-emerald-100'
              },
            ].map((branch, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${branch.badge}`}>
                    {branch.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{branch.title}</h3>
                  <div className="text-xs font-semibold text-blue-600 mb-3">{branch.subtitle}</div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{branch.desc}</p>
                </div>
                <button
                  onClick={branch.onClick}
                  className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 hover:text-blue-700 w-full"
                >
                  <span>{branch.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="text-xs font-bold tracking-widest text-blue-400 uppercase">OUR PHILOSOPHY</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Build. Innovate. Compete. Connect.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We believe that technology is not just about writing code—it is about empowering human potential and solving tangible real-world problems. Every initiative at TEKMEN Revolution is guided by rigorous engineering standards, collaborative mentorship, and a relentless drive for excellence.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onJoinClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Join the Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('innovation')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl backdrop-blur-md transition-all border border-white/20"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>

        {/* Impact Workflow */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How TEKMEN Creates Impact</h2>
            <p className="text-sm text-slate-500 mt-2">Our proven pipeline from initial concept to scalable real-world deployment.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { step: '01', title: 'Problem', desc: 'Identify core pain points' },
              { step: '02', title: 'Idea', desc: 'Brainstorm architectural options' },
              { step: '03', title: 'Design', desc: 'Craft UI/UX and blueprints' },
              { step: '04', title: 'Build', desc: 'Develop robust code' },
              { step: '05', title: 'Test', desc: 'Validate security & scale' },
              { step: '06', title: 'Launch', desc: 'Deploy to production' },
              { step: '07', title: 'Impact', desc: 'Measure real-world value' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl flex flex-col justify-between text-center">
                <div className="text-xs font-black text-blue-600 mb-2">{item.step}</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
