import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { FileText, GraduationCap, ExternalLink } from 'lucide-react';
import { useContent } from '../hooks/useContent';

export const Credentials: React.FC = () => {
  const { data: credentials, loading } = useContent('*[_type == "credential"] | order(order asc)');

  if (loading) return null;

  const publications = credentials?.filter((c: any) => c.type === 'publication') || [];
  const degrees = credentials?.filter((c: any) => c.type === 'degree') || [];

  // Fallbacks
  const displayPublications = publications.length > 0 ? publications : [{
    title: 'The Price of Prosociality in Pandemic Times',
    institution: 'Nature Journal',
    description: 'Investigación de alto impacto sobre el costo social y psicológico de la prosocialidad durante crisis sanitarias globales.',
    link: '#'
  }];

  const displayDegrees = degrees.length > 0 ? degrees : [
    { title: 'Médica y Cirujana', institution: 'Pontificia Universidad Javeriana' },
    { title: 'Máster en Salud Pública', institution: 'Universidad Miguel Hernández' }
  ];

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-bone">Formación e Investigación</h2>
          <div className="h-px flex-grow bg-white/10"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Publications */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {displayPublications.map((pub: any, idx: number) => (
              <GlassCard key={idx} className="h-full p-8 md:p-10 border-matcha/30 bg-matcha/[0.03] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <FileText size={180} strokeWidth={0.5} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-matcha/10 text-matcha text-[10px] font-bold uppercase tracking-widest rounded-full border border-matcha/20">
                      Publicación Científica
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif text-bone mb-4 leading-tight">
                    {pub.title}
                  </h3>

                  <p className="text-lg text-matcha font-medium mb-6 flex items-center gap-2">
                    {pub.institution}
                  </p>

                  <p className="text-bone/70 leading-relaxed mb-8 font-light flex-grow">
                    {pub.description}
                  </p>

                  {pub.link && (
                    <div className="mt-auto">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-bone border-b border-matcha/50 pb-1 hover:text-matcha hover:border-matcha transition-colors">
                        Ver Publicación <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Degrees */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {displayDegrees.map((deg: any, idx: number) => (
              <GlassCard key={idx} className="flex-1 p-8 flex flex-col justify-center border-white/5 hover:border-white/10">
                <GraduationCap className="text-bone/30 mb-4" size={32} strokeWidth={1} />
                <h4 className="text-xl font-serif text-bone mb-2">{deg.title}</h4>
                <p className="text-matcha/80 text-sm font-light whitespace-pre-line">{deg.institution}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};