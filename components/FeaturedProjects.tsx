import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Microscope, Tent, HeartPulse } from 'lucide-react';
import { Project } from '../types';
import { GlassCard } from './GlassCard';

const projects: Project[] = [
  {
    id: 'p1',
    category: 'Investigación',
    title: 'Neurobiología de la Empatía',
    year: '2023',
    shortDescription: 'Estudio clínico sobre la respuesta fisiológica en entornos de crisis.',
    fullDescription: 'Un análisis profundo sobre cómo el estrés crónico afecta la toma de decisiones médicas en zonas de conflicto. Utilizamos biomarcadores para medir la respuesta de cortisol en personal de salud de primera línea.',
    image: 'https://picsum.photos/id/20/800/600?grayscale',
    stats: [
      { label: 'Participantes', value: '150+' },
      { label: 'Duración', value: '18 Meses' },
      { label: 'Impacto', value: 'Global' }
    ]
  },
  {
    id: 'p2',
    category: 'Campo / Humanitario',
    title: 'Rutas de Salud Wayúu',
    year: '2022',
    shortDescription: 'Implementación de clínicas móviles en la Alta Guajira.',
    fullDescription: 'Diseño y ejecución de rutas de atención primaria para comunidades dispersas. El reto no fue solo logístico, sino cultural: integrar la medicina occidental con los saberes ancestrales de la comunidad.',
    image: 'https://picsum.photos/id/28/800/600?grayscale',
    stats: [
      { label: 'Cobertura', value: '12 Rancherías' },
      { label: 'Atenciones', value: '2.4k' }
    ]
  },
  {
    id: 'p3',
    category: 'Protocolo Clínico',
    title: 'Dignidad al Final',
    year: '2024',
    shortDescription: 'Redefiniendo los protocolos de sedación paliativa.',
    fullDescription: 'Creación de un nuevo estándar para el acompañamiento familiar durante la sedación paliativa en UCI, priorizando el bienestar emocional del núcleo familiar junto con el confort físico del paciente.',
    image: 'https://picsum.photos/id/60/800/600?grayscale',
    stats: [
      { label: 'Adopción', value: '3 Hospitales' }
    ]
  }
];

export const FeaturedProjects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-bone">Proyectos <br/> <span className="text-white/20">Destacados</span></h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right mt-6 md:mt-0"
          >
            <p className="text-sm text-matcha uppercase tracking-widest">Ciencia en movimiento</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="cursor-pointer group h-80 relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-jungle/60 group-hover:bg-jungle/40 transition-colors duration-500 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div layoutId={`category-${project.id}`} className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-matcha uppercase tracking-widest">{project.category}</span>
                  <span className="text-xs text-white/50">{project.year}</span>
                </motion.div>
                
                <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-medium text-bone mb-2">{project.title}</motion.h3>
                
                <motion.p layoutId={`short-desc-${project.id}`} className="text-sm text-white/70 line-clamp-2">{project.shortDescription}</motion.p>
                
                <div className="mt-4 flex items-center gap-2 text-xs text-matcha font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Ver Expediente</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
              <motion.div 
                className="absolute inset-0 bg-void/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              />
              
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="relative w-full max-w-4xl bg-[#0F261E] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
              >
                {/* Close Button */}
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                  className="absolute top-6 right-6 z-20 p-2 bg-black/20 rounded-full text-white/70 hover:text-white hover:bg-black/40 transition-all"
                >
                  <X size={20} />
                </button>

                {/* Image Side */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                   <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-matcha/10 mix-blend-overlay"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                  <motion.div layoutId={`category-${selectedId}`} className="inline-block px-3 py-1 rounded-full border border-matcha/30 text-matcha text-xs font-bold uppercase tracking-widest mb-6">
                    {selectedProject.category}
                  </motion.div>
                  
                  <motion.h3 layoutId={`title-${selectedId}`} className="text-3xl md:text-4xl font-serif text-bone mb-6 leading-tight">
                    {selectedProject.title}
                  </motion.h3>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="grid grid-cols-3 gap-4 mb-8 border-y border-white/10 py-6">
                       {selectedProject.stats?.map((stat, i) => (
                         <div key={i}>
                           <span className="block text-2xl font-light text-bone">{stat.value}</span>
                           <span className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</span>
                         </div>
                       ))}
                    </div>

                    <p className="text-bone/80 leading-relaxed font-light text-lg mb-8">
                      {selectedProject.fullDescription}
                    </p>

                    <button className="px-6 py-3 bg-matcha/10 hover:bg-matcha/20 text-matcha border border-matcha/20 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                       Leer publicación completa <ArrowUpRight size={16} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};