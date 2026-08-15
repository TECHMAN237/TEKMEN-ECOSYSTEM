import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA } from '../data';
import { ProductItem } from '../types';

interface ProductsViewProps {
  onSelectProduct: (product: ProductItem) => void;
  onStartProject: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onSelectProduct, onStartProject }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI', 'Web Apps', 'Mobile Apps', 'IoT'];

  const filtered = filter === 'All' ? PRODUCTS_DATA : PRODUCTS_DATA.filter(p => p.category === filter);

  return (
    <div className="py-16 bg-white animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            TEKMEN Products & Systems
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Technology We've Built
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover our portfolio of production-grade software platforms, AI assistants, and connected IoT systems.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod)}
              className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col sm:flex-row cursor-pointer"
            >
              <div className="sm:w-1/2 relative bg-slate-950 aspect-[4/3] sm:aspect-auto">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" referrerPolicy="no-referrer" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full">
                  {prod.category}
                </div>
                {prod.metrics && (
                  <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {prod.metrics}
                  </div>
                )}
              </div>

              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">{prod.status}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{prod.name}</h3>
                  <p className="text-xs font-medium text-slate-500 mb-3">{prod.tagline}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">{prod.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span>View Product Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Have a Problem That Doesn't Fit an Existing Solution?</h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            We can design and build a technology solution specifically tailored for your organizational needs.
          </p>
          <button
            onClick={onStartProject}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all inline-flex items-center gap-2 group"
          >
            <span>Tell Us What You're Trying to Solve</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
