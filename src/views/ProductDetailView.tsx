import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Layers, MapPin, Sparkles } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductDetailViewProps {
  product: ProductItem;
  onBack: () => void;
  onStartProject: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onBack, onStartProject }) => {
  return (
    <div className="py-16 bg-white animate-in fade-in duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </button>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold px-3 py-1 rounded-full">{product.category}</span>
            <span className="bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-semibold px-3 py-1 rounded-full">{product.status}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">{product.name}</h1>
          <p className="text-lg sm:text-xl font-medium text-slate-600">{product.tagline}</p>
        </div>

        {/* Hero Image */}
        <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-95" referrerPolicy="no-referrer" />
          {product.metrics && (
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md text-slate-900 text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
              Key Metric: {product.metrics}
            </div>
          )}
        </div>

        {/* Grid Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Overview</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{product.description}</p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-rose-50/50 border border-rose-100 p-6 rounded-2xl space-y-3">
                <h4 className="font-bold text-rose-900 text-sm uppercase tracking-wider">The Problem</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{product.problem}</p>
              </div>
              <div className="bg-emerald-50/50 border border-emerald-100 p-6 rounded-2xl space-y-3">
                <h4 className="font-bold text-emerald-900 text-sm uppercase tracking-wider">The Solution</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{product.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Architecture & How It Works</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{product.architecture}</p>
            </div>
          </div>

          {/* Right Sidebar: Tech Stack & Roadmap */}
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((t, idx) => (
                  <span key={idx} className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl space-y-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Product Roadmap</h4>
              <ul className="space-y-3">
                {product.roadmap.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-3xl space-y-4 shadow-xl">
              <h4 className="font-bold text-base">Ready to deploy this solution?</h4>
              <p className="text-xs text-blue-100 leading-relaxed">Request a personalized enterprise demo or customized implementation.</p>
              <button
                onClick={onStartProject}
                className="w-full bg-white text-blue-700 hover:bg-slate-100 font-semibold text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Demo / Start Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
