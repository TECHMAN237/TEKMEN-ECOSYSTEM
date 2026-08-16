import React, { useState } from 'react';
import { Briefcase, Box, Trophy, Users, ArrowRight, X } from 'lucide-react';
import { ECOSYSTEM_CARDS, AGENCY_URL } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface EcosystemSectionProps {
  onCardClick: (cardId: string) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onCardClick }) => {
  const [solutionsModalOpen, setSolutionsModalOpen] = useState(false);
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-violet-600" />;
      case 'Box':
        return <Box className="w-6 h-6 text-blue-600" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-rose-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-600" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-600" />;
    }
  };

  const getBadgeColor = (colorScheme: string) => {
    switch (colorScheme) {
      case 'violet':
        return 'bg-violet-50 border-violet-100 text-violet-700';
      case 'blue':
        return 'bg-blue-50 border-blue-100 text-blue-700';
      case 'red':
        return 'bg-rose-50 border-rose-100 text-rose-700';
      case 'emerald':
        return 'bg-blue-50 border-blue-100 text-blue-700';
      default:
        return 'bg-blue-50 border-blue-100 text-blue-700';
    }
  };

  const handleCardInternalClick = (cardId: string) => {
    if (cardId === 'agency') {
      window.open(AGENCY_URL, '_blank');
    } else if (cardId === 'solutions') {
      setSolutionsModalOpen(true);
    } else {
      onCardClick(cardId);
    }
  };

  return (
    <section id="ecosystem" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
            {t.ecosystem.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.ecosystem.title} <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">{t.ecosystem.highlight}</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOSYSTEM_CARDS.map((card) => {
            return (
              <div
                key={card.id}
                onClick={() => handleCardInternalClick(card.id)}
                className="group bg-white rounded-2xl border border-slate-200/80 p-7 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer"
              >
                {/* Subtle top background wave pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none group-hover:opacity-80 transition-opacity" />

                <div>
                  {/* Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform ${getBadgeColor(card.colorScheme)}`}>
                    {getIcon(card.iconName)}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {card.subtitle}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>{card.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Innovation Solutions Notice Modal */}
      {solutionsModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 space-y-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSolutionsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Box className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">TEKMEN Innovation Solutions</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The detailed website for TEKMEN Innovation Solutions is currently being developed as an independent experience. It will soon showcase our advanced software suites, IoT infrastructure, and custom AI models. Stay tuned!
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSolutionsModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
