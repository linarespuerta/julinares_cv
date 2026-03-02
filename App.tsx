import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Credentials } from './components/Credentials';
import { Capabilities } from './components/Capabilities';
import { Trajectory } from './components/Trajectory';
import { Philosophy } from './components/Philosophy';
import { ImpactStories } from './components/ImpactStories';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-organic-gradient min-h-screen text-bone font-sans selection:bg-matcha selection:text-jungle overflow-x-hidden">
      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
      
      <main className="relative z-0">
        <Hero />
        <About />
        <Credentials />
        <Capabilities />
        <Trajectory />
        <Philosophy />
        <ImpactStories />
        <Footer />
      </main>
    </div>
  );
};

export default App;