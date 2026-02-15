
import React from 'react';
import { Link } from 'react-router-dom';
import { TechItem } from '../types';

interface AppCardProps {
  item: TechItem;
}

export const AppCard: React.FC<AppCardProps> = ({ item }) => {
  return (
    <Link to={`/review/${item.id}`} className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-semibold rounded-full text-blue-400 border border-white/10 uppercase tracking-wider">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">{item.title}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <span className="text-sm font-bold">{item.rating}</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          </div>
        </div>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600 font-medium uppercase tracking-widest">{item.date}</span>
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <img key={i} className="w-6 h-6 rounded-full border-2 border-[#111]" src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
