
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_DATA } from '../constants';
import { TechItem } from '../types';

const ReviewDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<TechItem | null>(null);

  useEffect(() => {
    const found = MOCK_DATA.find(i => i.id === id);
    if (found) setItem(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) return <div className="p-20 text-center">Loading Content...</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-blue-400">{item.category}</span>
        <span>/</span>
        <span className="text-white truncate">{item.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20 uppercase">
            Official Review
          </span>
          <span className="text-gray-600 text-sm">{item.date}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          {item.title} Review: Is it still the best choice in {new Date().getFullYear()}?
        </h1>
        <div className="flex items-center gap-4 pb-8 border-b border-white/5">
          <img className="w-12 h-12 rounded-full ring-2 ring-blue-500/50" src="https://i.pravatar.cc/150?u=admin" alt="author" />
          <div>
            <p className="text-white font-bold">{item.author}</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Tech Specialist</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
        <img src={item.image} alt={item.title} className="w-full h-auto" />
      </div>

      {/* Content Grid */}
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          {item.longDescription || item.description}
        </p>

        {/* Pros & Cons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="bg-green-500/5 border border-green-500/20 p-8 rounded-2xl">
            <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Pros
            </h3>
            <ul className="space-y-3">
              {item.pros.map((pro, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                   {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-2xl">
            <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              Cons
            </h3>
            <ul className="space-y-3">
              {item.cons.map((con, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                   {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Specs Table */}
        {item.specs && (
          <div className="my-12">
            <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <tbody>
                  {Object.entries(item.specs).map(([key, value]) => (
                    <tr key={key} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                      <td className="px-6 py-4 text-gray-500 font-mono text-xs uppercase tracking-widest">{key.replace(/([A-Z])/g, ' $1')}</td>
                      <td className="px-6 py-4 text-white font-medium">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Rating Score */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-16 shadow-2xl shadow-blue-500/20">
          <div>
            <h3 className="text-white text-3xl font-black mb-2">Overall TechPulse Score</h3>
            <p className="text-blue-100 opacity-80">Based on usability, performance, and features.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-6 rounded-2xl flex flex-col items-center">
            <span className="text-5xl font-black text-white">{item.rating}</span>
            <div className="flex gap-1 text-yellow-400 mt-2">
              {[1, 2, 3, 4, 5].map(star => (
                <svg key={star} className={`w-5 h-5 ${star <= Math.floor(item.rating) ? 'fill-current' : 'opacity-30'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
        </div>

        {/* Download Action */}
        <div className="text-center my-20">
          <Link 
            to={`/download/${item.id}`}
            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black text-xl font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Secure Download
          </Link>
          <p className="text-gray-500 mt-4 text-sm flex items-center justify-center gap-2">
             <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
             Verified Safe & Ad-Free Link
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
