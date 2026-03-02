import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

const values = [
  "Con criterio clínico y pensamiento crítico",
  "Con empatía, sin perder límites profesionales",
  "Con enfoque de derechos y sensibilidad social",
  "En equipo, de forma responsable y resolutiva"
];

export const Philosophy: React.FC = () => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-bone">Cómo trabajo</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((text, idx) => (
            <GlassCard key={idx} className="p-6 flex items-center justify-center text-center bg-white/[0.02] border-white/5" delay={idx * 0.1}>
              <p className="text-bone/90 font-light text-lg">
                {text}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};