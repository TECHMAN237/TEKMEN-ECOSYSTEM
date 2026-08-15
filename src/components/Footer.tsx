import React, { useState } from 'react';
import { Linkedin, Twitter, Instagram, Youtube, Github, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ViewState } from '../types';
import { AGENCY_URL } from '../data';

interface FooterProps {
  onNavClick: (view: ViewState | 'agency') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleItemClick = (id: ViewState | 'agency') => {
    if (id === 'agency') {
      window.open(AGENCY_URL, '_blank');
    } else {
      onNavClick(id);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand & Socials (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 flex items-center justify-center shadow-md shadow-blue-500/20">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-white text-lg tracking-tight">
                  TEKMEN
                </div>
                <div className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                  Revolution
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              A technology ecosystem building solutions, empowering people, and creating impact across the globe.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: '#' },
                { icon: <Twitter className="w-4 h-4" />, label: 'Twitter', href: '#' },
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', href: '#' },
                { icon: <Youtube className="w-4 h-4" />, label: 'YouTube', href: '#' },
                { icon: <Github className="w-4 h-4" />, label: 'GitHub', href: '#' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-slate-800 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About Us', id: 'about' as ViewState },
                { label: 'Agency', id: 'agency' as const },
                { label: 'Innovation Solutions', id: 'innovation' as ViewState },
                { label: 'Team', id: 'team' as ViewState },
                { label: 'Community', id: 'community' as ViewState },
                { label: 'TEKMEN AI', id: 'home' as ViewState },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Resources</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {['Blog', 'Projects', 'Events', 'Careers', 'FAQs', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <a href="#resources" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Newsletter</h4>
            <p className="text-sm text-slate-400">
              Subscribe to stay updated with our latest news and events.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold p-4 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you for subscribing to TEKMEN Revolution!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2024 TEKMEN Revolution. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#cookies" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
