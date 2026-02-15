
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Lazy loading for better performance
const Home = lazy(() => import('./pages/Home'));
const ReviewDetail = lazy(() => import('./pages/ReviewDetail'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const SeoLab = lazy(() => import('./pages/SeoLab'));

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[9999]">
    <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4"></div>
    <p className="text-blue-500 font-bold tracking-widest text-xs uppercase animate-pulse">Initializing TechPulse</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/review/:id" element={<ReviewDetail />} />
            <Route path="/download/:id" element={<DownloadPage />} />
            <Route path="/seo" element={<SeoLab />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
