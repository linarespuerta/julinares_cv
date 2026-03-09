import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';

export const About: React.FC = () => {
  const { data: about, loading } = useContent('*[_type == "about"][0]');

  if (loading) return null;

  const content = about || {
    title: 'Trabajo en la intersección entre la práctica clínica, la salud mental y la salud pública.',
    description: 'He ejercido medicina en hospital, en territorio y en contextos de alta vulnerabilidad, combinando criterio clínico, sensibilidad social y capacidad operativa.',
    footer: 'Busco integrarme a equipos donde el trabajo médico tenga'
  };

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
            {content.title}
          </h2>

          <p className="text-bone/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            {content.description}
          </p>

          <div className="pt-8">
            <p className="text-bone font-medium text-lg">
              {content.footer} <span className="text-matcha">impacto real</span>, utilidad concreta y sentido humano.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};