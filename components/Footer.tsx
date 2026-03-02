import React from 'react';
import { MagneticButton } from './MagneticButton';
import { Language } from '../types';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const languages: Language[] = [
  { name: 'Español', level: 'Nativo', percentage: 100 },
  { name: 'Inglés', level: 'C2\nBilingüe', percentage: 95 },
  { name: 'Portugués', level: 'B2', percentage: 60 },
  { name: 'Francés', level: 'B2', percentage: 60 },
];

export const Footer: React.FC = () => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  return (
    <footer className="py-20 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-matcha/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Quote */}
        <div className="mb-20 text-center max-w-2xl">
          <p className="text-lg md:text-xl font-light italic text-bone/80">
            "Disponible para incorporarse a proyectos clínicos, académicos o comunitarios."
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <MagneticButton className="group relative px-10 py-5 bg-bone text-jungle rounded-full text-xl font-medium overflow-hidden transition-all hover:pr-14">
              <span className="relative z-10">Escribirme</span>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-4">
                →
              </span>
              <div className="absolute inset-0 bg-matcha scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </MagneticButton>
          </div>
        </div>

        {/* Languages Visualization */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {languages.map((lang) => {
             const strokeDashoffset = circumference - (circumference * lang.percentage) / 100;
             
             return (
              <div key={lang.name} className="flex flex-col items-center">
                 <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                      {/* Background Circle */}
                      <circle cx="32" cy="32" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                      {/* Progress Circle */}
                      <motion.circle 
                        cx="32" cy="32" r={radius} 
                        stroke="#C1E6BA" strokeWidth="2" fill="none" 
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Centered Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-bone text-center leading-tight whitespace-pre-line">
                        {lang.level}
                      </span>
                    </div>
                 </div>
                 <span className="text-sm font-light text-bone/60">{lang.name}</span>
              </div>
            );
          })}
        </div>

        {/* Socials */}
        <div className="flex gap-8 border-t border-white/10 pt-8 w-full justify-center">
          <a href="#" className="text-bone/40 hover:text-matcha transition-colors duration-300">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a href="mailto:juliana@example.com" className="text-bone/40 hover:text-matcha transition-colors duration-300">
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>
        
        <p className="mt-8 text-xs text-bone/20">
          © {new Date().getFullYear()} Juliana Linares Puerta. Designed with pulse.
        </p>

      </div>
    </footer>
  );
};