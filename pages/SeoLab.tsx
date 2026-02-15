
import React, { useState } from 'react';
import { generateDomainNames } from '../services/geminiService';

const SeoLab: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!keywords) return;
    setLoading(true);
    const advice = await generateDomainNames(keywords);
    setResults(advice || '');
    setLoading(false);
  };

  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-400/10 border border-purple-400/20 rounded-full">
            Powered by Gemini AI
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">SEO & Domain Lab</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Use our AI engine to brainstorm professional technical domain names and get instant SEO strategies for your niche.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tool Section */}
          <div className="space-y-8">
            <div className="bg-[#111] border border-white/5 p-8 rounded-[32px] hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold">D</div>
                Domain Generator
              </h3>
              <div className="space-y-4">
                <label className="block text-sm text-gray-500 font-medium ml-1">What is your blog focus?</label>
                <input 
                  type="text" 
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g. Android Gaming, Minimal Desktop Apps" 
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
                <button 
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-black rounded-2xl transition-all shadow-xl shadow-purple-500/20"
                >
                  {loading ? 'Brainstorming...' : 'Generate Brand Ideas'}
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-[32px] text-white">
              <h3 className="text-xl font-bold mb-4">SEO Checklist</h3>
              <ul className="space-y-4">
                {[
                  'Keyword density: 1.5% - 2%',
                  'Use LSI Keywords in H2/H3',
                  'Optimize image ALT tags',
                  'Add schema.org Review markup',
                  'Load speed under 2s'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-black/40 border border-white/5 rounded-[32px] p-8 md:p-12 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">AI Suggestions</h3>
              {loading && <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-500"></div>}
            </div>
            
            {results ? (
              <div className="prose prose-invert prose-purple max-w-none whitespace-pre-wrap font-mono text-sm text-gray-400">
                {results}
              </div>
            ) : (
              <div className="flex-grow flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <p className="text-gray-600 italic">Enter keywords and hit generate to see AI magic.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoLab;
