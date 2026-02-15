
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_DATA } from '../constants';

const DownloadPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [seconds, setSeconds] = useState(10);
  const [item, setItem] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const found = MOCK_DATA.find(i => i.id === id);
    if (!found) {
        navigate('/');
        return;
    }
    setItem(found);

    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [id, navigate]);

  if (!item) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-[#111] border border-white/5 rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
            <svg className="w-10 h-10 text-blue-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </div>
          
          <h1 className="text-3xl font-black text-white mb-4">Your download is starting...</h1>
          <p className="text-gray-400 mb-12">
            Preparing secure link for <span className="text-blue-400 font-bold">{item.title}</span>. 
            We are performing a real-time security scan for your safety.
          </p>

          <div className="mb-12">
             <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90">
                    <circle 
                      cx="64" cy="64" r="58" 
                      className="stroke-white/5 fill-none" 
                      strokeWidth="8"
                    />
                    <circle 
                      cx="64" cy="64" r="58" 
                      className="stroke-blue-500 fill-none transition-all duration-1000" 
                      strokeWidth="8"
                      strokeDasharray="364.42"
                      strokeDashoffset={364.42 - (364.42 * (10 - seconds)) / 10}
                    />
                </svg>
                <span className="absolute text-3xl font-mono font-bold text-white">{seconds}</span>
             </div>
          </div>

          <div className="space-y-4">
            {seconds === 0 ? (
              <a 
                href={item.downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-5 bg-green-600 hover:bg-green-700 text-white text-xl font-black rounded-2xl transition-all shadow-2xl shadow-green-600/20"
              >
                Download Now
              </a>
            ) : (
              <button disabled className="block w-full py-5 bg-white/5 border border-white/10 text-gray-500 text-xl font-black rounded-2xl cursor-not-allowed">
                Wait {seconds}s
              </button>
            )}
            
            <Link to={`/review/${item.id}`} className="block text-gray-500 hover:text-white transition-colors text-sm font-medium">
              Cancel and Return to Review
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <img src="https://picsum.photos/seed/norton/100/30" alt="Norton Secure" className="h-5" />
            <img src="https://picsum.photos/seed/mcafee/100/30" alt="McAfee" className="h-5" />
            <img src="https://picsum.photos/seed/google/100/30" alt="Safe Browsing" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
