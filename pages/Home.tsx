
import React from 'react';
import { MOCK_DATA } from '../constants';
import { AppCard } from '../components/AppCard';

const Home: React.FC = () => {
  return (
    <div className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-24 overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 border border-white/5 p-8 md:p-16">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
              Leading Tech Insights
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white">
              Discover <span className="text-blue-500">Elite</span> Software.
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              In-depth reviews, expert comparisons, and professional tutorials for the software that powers your world.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
                Browse Directory
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all">
                Read SEO Guide
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
             <div className="absolute inset-0 bg-blue-500/30 blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 bg-purple-500/20 blur-[120px] translate-y-1/2"></div>
          </div>
        </div>

        {/* Categories Fast Filter */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">Featured Content</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="p-2 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_DATA.map(item => (
            <AppCard key={item.id} item={item} />
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 rounded-3xl bg-blue-600 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-2">Stay Ahead of the Curve</h2>
            <p className="text-blue-100 text-lg opacity-90">Get weekly updates on the best apps and SEO tips directly in your inbox.</p>
          </div>
          <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-blue-200 outline-none focus:ring-4 focus:ring-white/20 w-full md:w-80"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors shadow-lg">
              Join Pulse
            </button>
          </div>
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
