import React from 'react';
import { Quote } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Testimonial } from '../types';
import { motion } from 'framer-motion';

const stories: Testimonial[] = [
  {
    id: '1',
    quote: "Juliana no solo diagnostica patologías; diagnostica contextos. Su capacidad para entender la cosmovisión Wayúu y traducirla a protocolos médicos salvó vidas que el sistema daba por perdidas.",
    author: "María Epieyu",
    role: "Líder Comunitaria - Alta Guajira",
    image: "https://picsum.photos/id/338/200/200?grayscale"
  },
  {
    id: '2',
    quote: "Rigor científico impecable con una humanidad desarmante. En el laboratorio es precisa; en cuidados paliativos es una presencia que sana incluso cuando no hay cura.",
    author: "Dr. Carlos Mendez",
    role: "Director de Investigación Clínica",
    image: "https://picsum.photos/id/1005/200/200?grayscale"
  },
  {
    id: '3',
    quote: "Ella transforma la incertidumbre de la sala de urgencias en un plan de acción claro. Tiene ese 'pulso' que no se enseña en las facultades.",
    author: "Elena Restrepo",
    role: "Jefe de Enfermería - UCI",
  }
];

export const ImpactStories: React.FC = () => {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <Quote size={48} className="text-matcha/20 mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif text-bone">Ecos del <span className="text-matcha italic">Campo</span></h2>
          <p className="mt-4 text-bone/60 font-light max-w-lg">
            La medicina no sucede en el vacío. Sucede entre personas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <GlassCard key={story.id} className="p-8 rounded-2xl flex flex-col h-full" delay={index * 0.1}>
              <div className="mb-6 relative">
                 <span className="text-6xl text-white/5 font-serif absolute -top-4 -left-2">“</span>
                 <p className="text-bone/80 font-light italic leading-relaxed relative z-10">
                   {story.quote}
                 </p>
              </div>
              
              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
                {story.image ? (
                  <img 
                    src={story.image} 
                    alt={story.author} 
                    className="w-12 h-12 rounded-full object-cover border border-matcha/30"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-matcha/30">
                    <span className="text-matcha font-serif text-xl">{story.author[0]}</span>
                  </div>
                )}
                <div>
                  <h4 className="text-matcha font-medium text-sm tracking-wide">{story.author}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5">{story.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};