import React, { useState } from 'react';
import { ArrowRight, Box, Cpu, Smartphone, Globe, Shield, Zap, Database, CheckCircle2, ChevronRight, ExternalLink, Filter, Send, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA, PROJECTS_DATA } from '../data';
import { ProductItem, ProjectItem, InnovationViewState } from '../types';

interface InnovationViewProps {
  onNavigateToEcosystem: (view: any) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const InnovationView: React.FC<InnovationViewProps> = ({ onNavigateToEcosystem, onSelectProduct }) => {
  const [subView, setSubView] = useState<InnovationViewState>('home');
  const [selectedPortfolioProject, setSelectedPortfolioProject] = useState<ProjectItem | null>(null);
  const [portfolioFilter, setPortfolioFilter] = useState<string>('All');

  // Contact form state
  const [formState, setFormState] = useState({ name: '', email: '', organization: '', projectType: 'Web Application', problem: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormState({ name: '', email: '', organization: '', projectType: 'Web Application', problem: '', details: '' });
    }, 1500);
  };

  const filteredProjects = portfolioFilter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === portfolioFilter);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      
      {/* Dedicated Innovation Solutions Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => { setSubView('home'); setSelectedPortfolioProject(null); }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 flex items-center justify-center text-white shadow-md">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-base tracking-tight">TEKMEN</div>
              <div className="text-[10px] font-semibold tracking-widest text-blue-600 uppercase">Innovation Solutions</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'solutions', label: 'Solutions' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'products', label: 'Products' },
              { id: 'process', label: 'Process' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSubView(item.id as InnovationViewState);
                  setSelectedPortfolioProject(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                  subView === item.id && !selectedPortfolioProject
                    ? 'text-blue-600 font-semibold bg-blue-50/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSubView('contact');
                setSelectedPortfolioProject(null);
              }}
              className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all"
            >
              Start a Project
            </button>
            <button
              onClick={() => onNavigateToEcosystem('home')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <span>TEKMEN Revolution</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* CASE STUDY DETAIL VIEW */}
        {selectedPortfolioProject ? (
          <div className="py-16 bg-white animate-in fade-in duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <button
                onClick={() => setSelectedPortfolioProject(null)}
                className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                ← Back to Portfolio
              </button>

              <div className="space-y-4">
                <div className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {selectedPortfolioProject.category} Case Study
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900">{selectedPortfolioProject.title}</h1>
                <p className="text-lg text-slate-600 leading-relaxed">{selectedPortfolioProject.description}</p>
              </div>

              <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 shadow-xl">
                <img src={selectedPortfolioProject.image} alt={selectedPortfolioProject.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Client / Category</div>
                  <div className="font-bold text-slate-900">{selectedPortfolioProject.client || 'Enterprise Partner'}</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Key Metric</div>
                  <div className="font-bold text-blue-600">{selectedPortfolioProject.metrics || 'High Performance'}</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Technologies</div>
                  <div className="font-bold text-slate-900 text-xs truncate">{selectedPortfolioProject.tags.join(', ')}</div>
                </div>
              </div>

              <div className="space-y-8 pt-6 border-t border-slate-200">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">The Problem</h3>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    {selectedPortfolioProject.problem || 'Clients struggled with siloed workflows, manual latency, and lack of real-time visibility.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">The Solution</h3>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    {selectedPortfolioProject.solution || 'TEKMEN Innovation Solutions engineered a high-throughput, secure, custom platform tailored to operational goals.'}
                  </p>
                </div>

                {selectedPortfolioProject.features && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedPortfolioProject.features.map((feat, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold">Have a Similar Problem?</h3>
                  <p className="text-slate-300 text-sm max-w-xl mx-auto">Let's discuss how TEKMEN Innovation Solutions can engineer the right digital system for your organization.</p>
                  <button
                    onClick={() => {
                      setSelectedPortfolioProject(null);
                      setSubView('contact');
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all"
                  >
                    Start a Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* SUB-VIEW: HOME */}
            {subView === 'home' && (
              <div className="py-16 space-y-24 animate-in fade-in duration-300">
                {/* Hero */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      TEKMEN Innovation Solutions • Technology Development Arm
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                      We Build Technology That <br />
                      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        Solves Real Problems.
                      </span>
                    </h1>
                    <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
                      TEKMEN Innovation Solutions designs and develops digital products, applications and intelligent technology systems that help businesses, institutions and organizations solve real-world challenges.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                      <button
                        onClick={() => setSubView('contact')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 group"
                      >
                        <span>Start a Project</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        onClick={() => setSubView('portfolio')}
                        className="bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-7 py-3.5 rounded-xl border border-slate-200 shadow-xs transition-all"
                      >
                        View Our Portfolio
                      </button>
                    </div>
                  </div>
                </div>

                {/* Solutions Overview Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What We Build</h2>
                    <p className="text-sm text-slate-500 mt-2">Enterprise-grade systems engineered for scalability and real-world utility.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: 'Web Applications', desc: 'Custom web platforms for businesses, schools, institutions and organizations.', icon: <Globe className="w-6 h-6 text-blue-600" /> },
                      { title: 'Mobile Applications', desc: 'Android/iOS applications designed around specific user needs.', icon: <Smartphone className="w-6 h-6 text-indigo-600" /> },
                      { title: 'AI Solutions', desc: 'Intelligent assistants, automation systems and AI-powered platforms.', icon: <Cpu className="w-6 h-6 text-violet-600" /> },
                      { title: 'IoT & Smart Systems', desc: 'Connected devices, monitoring systems and intelligent physical environments.', icon: <Zap className="w-6 h-6 text-blue-700" /> },
                      { title: 'SaaS Platforms', desc: 'Software platforms designed to serve multiple users or organizations securely.', icon: <Database className="w-6 h-6 text-indigo-700" /> },
                      { title: 'Custom Digital Systems', desc: 'Technology designed specifically around a client\'s unique problem.', icon: <Shield className="w-6 h-6 text-rose-600" /> },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-50/70 border border-slate-200/80 p-7 rounded-2xl hover:bg-white hover:shadow-xl transition-all">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-xs">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                        <button onClick={() => setSubView('solutions')} className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                          <span>Learn More</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio Preview */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured Portfolio</h2>
                      <p className="text-sm text-slate-500 mt-1">Demonstrating what TEKMEN can actually build.</p>
                    </div>
                    <button
                      onClick={() => setSubView('portfolio')}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                    >
                      <span>View Full Portfolio</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS_DATA.slice(0, 3).map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => setSelectedPortfolioProject(proj)}
                        className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" referrerPolicy="no-referrer" />
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full">
                              {proj.category}
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{proj.title}</h3>
                            <p className="text-sm text-slate-600 line-clamp-2">{proj.description}</p>
                          </div>
                        </div>
                        <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold text-blue-600">
                          <span>View Project Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-VIEW: ABOUT */}
            {subView === 'about' && (
              <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-in fade-in duration-300">
                <div className="text-center space-y-4">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">ABOUT INNOVATION SOLUTIONS</div>
                  <h1 className="text-4xl font-black text-slate-900">Engineering With Purpose</h1>
                  <p className="text-slate-600 text-lg">TEKMEN Innovation Solutions is the dedicated technology development arm of TEKMEN.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Who We Are</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We are a specialized team of software engineers, system architects, UI/UX designers, and problem solvers focused on designing and developing technology solutions that address practical problems.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">What We Do</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We transform ideas, business needs, and real-world challenges into functional digital products, web platforms, mobile applications, and intelligent systems.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">OUR PHILOSOPHY</div>
                  <h2 className="text-3xl font-black">Problem First. Technology Second. Impact Always.</h2>
                  <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
                    We believe technology should never be developed simply because it is new or trendy. It must solve a real problem, deliver measurable value, and remain accessible to its users.
                  </p>
                </div>
              </div>
            )}

            {/* SUB-VIEW: SOLUTIONS */}
            {subView === 'solutions' && (
              <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-in fade-in duration-300">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">OUR SOLUTIONS</div>
                  <h1 className="text-4xl font-black text-slate-900">Enterprise Technology Solutions</h1>
                  <p className="text-slate-600 text-base">Explore the major solution categories we engineer for businesses, institutions, and organizations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: 'Web Applications', desc: 'Custom web platforms for businesses, schools, institutions and organizations.', icon: <Globe className="w-6 h-6 text-blue-600" /> },
                    { title: 'Mobile Applications', desc: 'Android/iOS applications designed around specific user needs.', icon: <Smartphone className="w-6 h-6 text-indigo-600" /> },
                    { title: 'AI Solutions', desc: 'Intelligent assistants, automation systems and AI-powered platforms.', icon: <Cpu className="w-6 h-6 text-violet-600" /> },
                    { title: 'IoT & Smart Systems', desc: 'Connected devices, monitoring systems and intelligent physical environments.', icon: <Zap className="w-6 h-6 text-blue-700" /> },
                    { title: 'SaaS Platforms', desc: 'Software platforms designed to serve multiple users or organizations.', icon: <Database className="w-6 h-6 text-indigo-700" /> },
                    { title: 'Automation', desc: 'Digital workflows and systems designed to reduce repetitive manual processes.', icon: <Shield className="w-6 h-6 text-rose-600" /> },
                    { title: 'Custom Digital Systems', desc: 'Technology designed specifically around a client\'s unique problem.', icon: <Box className="w-6 h-6 text-blue-600" /> },
                  ].map((sol, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-4 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs">
                          {sol.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{sol.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{sol.desc}</p>
                      </div>
                      <div className="pt-4 border-t border-slate-200/60">
                        <button
                          onClick={() => setSubView('contact')}
                          className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <span>Request Solution</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-VIEW: PORTFOLIO */}
            {subView === 'portfolio' && (
              <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-300">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">OUR PORTFOLIO</div>
                  <h1 className="text-4xl font-black text-slate-900">Proven Technology Projects</h1>
                  <p className="text-slate-600 text-base">Demonstrating what TEKMEN Innovation Solutions can actually build.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {['All', 'Web', 'Mobile', 'AI', 'IoT', 'SaaS', 'Platforms'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setPortfolioFilter(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        portfolioFilter === cat
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => setSelectedPortfolioProject(proj)}
                      className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                          <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" referrerPolicy="no-referrer" />
                          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full">
                            {proj.category}
                          </div>
                        </div>
                        <div className="p-6 space-y-2">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{proj.title}</h3>
                          <p className="text-sm text-slate-600 line-clamp-2">{proj.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {proj.tags.slice(0, 3).map((tag, idx) => (
                              <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2.5 py-0.5 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold text-blue-600">
                        <span>View Project Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-VIEW: PRODUCTS */}
            {subView === 'products' && (
              <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-300">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">OUR PRODUCTS</div>
                  <h1 className="text-4xl font-black text-slate-900">TEKMEN Software Products</h1>
                  <p className="text-slate-600 text-base">Technology products developed and owned by TEKMEN.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {PRODUCTS_DATA.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => onSelectProduct(prod)}
                      className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-slate-900 relative">
                        <img src={prod.image} alt={prod.name} className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                        <div className="absolute top-3 left-3 bg-white/90 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                          {prod.status}
                        </div>
                      </div>
                      <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">{prod.name}</h3>
                        <p className="text-sm font-semibold text-blue-600">{prod.tagline}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{prod.description}</p>
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-500">{prod.metrics}</span>
                          <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                            <span>Explore Product</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-VIEW: PROCESS */}
            {subView === 'process' && (
              <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-in fade-in duration-300">
                <div className="text-center space-y-4">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">HOW WE BUILD</div>
                  <h1 className="text-4xl font-black text-slate-900">Our Development Process</h1>
                  <p className="text-slate-600 text-base">A disciplined, transparent engineering methodology from discovery to scaling.</p>
                </div>

                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Discovery', desc: 'Understand the problem, user requirements, and operational constraints.' },
                    { step: '02', title: 'Planning', desc: 'Define the appropriate solution architecture, tech stack, and milestone roadmap.' },
                    { step: '03', title: 'UI/UX Design', desc: 'Design intuitive, accessible, and high-conversion user experiences.' },
                    { step: '04', title: 'Development', desc: 'Build robust, secure, and performant backend services and frontend applications.' },
                    { step: '05', title: 'Testing', desc: 'Validate functionality, security posture, and quality across devices and loads.' },
                    { step: '06', title: 'Deployment', desc: 'Launch the product securely to production with zero downtime.' },
                    { step: '07', title: 'Evolution', desc: 'Maintain, improve, and scale the solution as your organization grows.' },
                  ].map((p, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 sm:p-8 rounded-3xl flex items-start gap-6 hover:bg-white hover:shadow-lg transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                        {p.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-VIEW: CONTACT / START A PROJECT */}
            {subView === 'contact' && (
              <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-300">
                <div className="text-center space-y-4">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">START A PROJECT</div>
                  <h1 className="text-4xl font-black text-slate-900">Have a Problem We Can Solve?</h1>
                  <p className="text-slate-600 text-base">Tell us what you're trying to achieve and let's explore the right technology solution.</p>
                </div>

                {formSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-2xl font-bold text-slate-900">Project Request Received!</h3>
                    <p className="text-slate-600 text-sm">Thank you for reaching out. Our engineering leadership will review your submission and contact you within 24 hours.</p>
                    <button
                      onClick={() => setFormSuccess(false)}
                      className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-3xl space-y-6 shadow-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Alex Vance"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Organization / Institution</label>
                        <input
                          type="text"
                          value={formState.organization}
                          onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                          placeholder="Acme Corp or University"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Project Type</label>
                        <select
                          value={formState.projectType}
                          onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                        >
                          <option value="Website">Website</option>
                          <option value="Web Application">Web Application</option>
                          <option value="Mobile Application">Mobile Application</option>
                          <option value="AI Solution">AI Solution</option>
                          <option value="IoT">IoT</option>
                          <option value="SaaS">SaaS</option>
                          <option value="Automation">Automation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Describe Your Problem *</label>
                      <textarea
                        required
                        rows={3}
                        value={formState.problem}
                        onChange={(e) => setFormState({ ...formState, problem: e.target.value })}
                        placeholder="What challenge are you trying to overcome?"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">What would you like the solution to achieve?</label>
                      <textarea
                        rows={3}
                        value={formState.details}
                        onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                        placeholder="Additional goals, timeline, or requirements..."
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Project Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </>
        )}

      </main>

      {/* Dedicated Innovation Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-800 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Box className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg">TEKMEN Innovation</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              TEKMEN Innovation Solutions is the dedicated technology development and R&D arm of TEKMEN Revolution.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Explore</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => { setSubView('home'); setSelectedPortfolioProject(null); }} className="hover:text-white">Home</button></li>
              <li><button onClick={() => { setSubView('about'); setSelectedPortfolioProject(null); }} className="hover:text-white">About</button></li>
              <li><button onClick={() => { setSubView('solutions'); setSelectedPortfolioProject(null); }} className="hover:text-white">Solutions</button></li>
              <li><button onClick={() => { setSubView('portfolio'); setSelectedPortfolioProject(null); }} className="hover:text-white">Portfolio</button></li>
              <li><button onClick={() => { setSubView('products'); setSelectedPortfolioProject(null); }} className="hover:text-white">Products</button></li>
              <li><button onClick={() => { setSubView('process'); setSelectedPortfolioProject(null); }} className="hover:text-white">Process</button></li>
              <li><button onClick={() => { setSubView('contact'); setSelectedPortfolioProject(null); }} className="hover:text-white">Contact</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">TEKMEN Ecosystem</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigateToEcosystem('home')} className="hover:text-white">TEKMEN Revolution</button></li>
              <li><a href="https://tekmen-revolution-za59.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white">TEKMEN Agency</a></li>
              <li><button onClick={() => onNavigateToEcosystem('team')} className="hover:text-white">TEKMEN Team</button></li>
              <li><button onClick={() => onNavigateToEcosystem('community')} className="hover:text-white">TEKMEN Community</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Contact</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ready to build your technology project? Contact our engineering team at innovation@tekmenrevolution.com
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};
