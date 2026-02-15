
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">T</div>
          TechPulse
        </Link>
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link to="/" className={`${isActive('/') ? 'text-blue-400' : 'text-gray-400 hover:text-white'} transition-colors`}>Home</Link>
          <Link to="/seo" className={`${isActive('/seo') ? 'text-blue-400' : 'text-gray-400 hover:text-white'} transition-colors`}>SEO Lab</Link>
          <Link to="/tools" className={`${isActive('/tools') ? 'text-blue-400' : 'text-gray-400 hover:text-white'} transition-colors`}>Utilities</Link>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm transition-all shadow-lg shadow-blue-500/20">
            Subscribe
          </button>
        </div>
        <button className="md:hidden text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black border-t border-white/5 py-12 px-6 mt-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-xl font-bold mb-4 text-white">TechPulse</h3>
        <p className="text-gray-500 max-w-sm mb-6">
          The ultimate destination for technical reviews, software tutorials, and modern SEO strategies. Built for developers and tech enthusiasts.
        </p>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 transition-colors cursor-pointer">
             <span className="sr-only">Twitter</span>
             <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4 underline decoration-blue-500 underline-offset-8">Sections</h4>
        <ul className="space-y-3 text-gray-500">
          <li><Link to="/category/android" className="hover:text-blue-400 transition-colors">Android Reviews</Link></li>
          <li><Link to="/category/desktop" className="hover:text-blue-400 transition-colors">Desktop Apps</Link></li>
          <li><Link to="/category/tutorials" className="hover:text-blue-400 transition-colors">Tech Tutorials</Link></li>
          <li><Link to="/seo" className="hover:text-blue-400 transition-colors">SEO Guide</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4 underline decoration-purple-500 underline-offset-8">Resources</h4>
        <ul className="space-y-3 text-gray-500">
          <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} TechPulse. All rights reserved.
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
