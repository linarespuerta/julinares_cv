import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-block">
             <span className="text-matcha text-xs uppercase tracking-[0.2em] font-medium border-b border-matcha/30 pb-1">Lo que hago</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-serif text-bone leading-relaxed">
            Trabajo en la intersección entre la práctica clínica, la salud mental y la salud pública.
          </h2>
          
          <p className="text-bone/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            He ejercido medicina en hospital, en territorio y en contextos de alta vulnerabilidad, combinando criterio clínico, sensibilidad social y capacidad operativa.
          </p>
          
          <div className="pt-8">
            <p className="text-bone font-medium text-lg">
              Busco integrarme a equipos donde el trabajo médico tenga <span className="text-matcha">impacto real</span>, utilidad concreta y sentido humano.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};