import React, { useState } from 'react';
import { Globe, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onJoinClick: () => void;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinClick, currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems: { id: ViewState; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'team', label: t.nav.team },
    { id: 'community', label: t.nav.community },
  ];

  const handleItemClick = (id: ViewState) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-lg tracking-tight flex items-center gap-1.5">
              TEKMEN
            </div>
            <div className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">
              Revolution
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Area */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-lg border border-slate-200 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50">
                {(['EN', 'FR'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium hover:bg-slate-50 ${
                      lang === l ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    {l === 'EN' ? 'English (EN)' : 'Français (FR)'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Join Button */}
          <button
            onClick={onJoinClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/25 transition-all hover:shadow-lg hover:shadow-blue-600/30 flex items-center gap-2 group"
          >
            <span>{t.nav.join}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onJoinClick}
            className="bg-blue-600 text-white text-xs font-medium px-3.5 py-2 rounded-lg shadow-sm"
          >
            Join
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                currentView === item.id 
                  ? 'bg-blue-50 text-blue-600 font-semibold' 
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Globe className="w-4 h-4 text-slate-500" />
              <span>Language: {lang}</span>
            </div>
            <button
              onClick={() => {
                setLang(lang === 'EN' ? 'FR' : 'EN');
              }}
              className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg"
            >
              {lang === 'EN' ? 'Switch to FR' : 'Switch to EN'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
