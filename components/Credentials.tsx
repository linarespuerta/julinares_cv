import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { FileText, GraduationCap, ExternalLink } from 'lucide-react';

export const Credentials: React.FC = () => {
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
           {/* Nature Article - The Deal Breaker */}
           <div className="md:col-span-7">
              <GlassCard className="h-full p-8 md:p-10 border-matcha/30 bg-matcha/[0.03] relative overflow-hidden group">
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
                     The Price of Prosociality in Pandemic Times
                   </h3>
                   
                   <p className="text-lg text-matcha font-medium mb-6 flex items-center gap-2">
                     Nature Journal
                   </p>
                   
                   <p className="text-bone/70 leading-relaxed mb-8 font-light flex-grow">
                     Investigación de alto impacto sobre el costo social y psicológico de la prosocialidad durante crisis sanitarias globales.
                   </p>
                   
                   <div className="mt-auto">
                     <button className="inline-flex items-center gap-2 text-sm font-bold text-bone border-b border-matcha/50 pb-1 hover:text-matcha hover:border-matcha transition-colors">
                       Ver Publicación <ExternalLink size={14} />
                     </button>
                   </div>
                </div>
              </GlassCard>
           </div>

           {/* Degrees */}
           <div className="md:col-span-5 flex flex-col gap-6">
              <GlassCard className="flex-1 p-8 flex flex-col justify-center border-white/5 hover:border-white/10">
                 <GraduationCap className="text-bone/30 mb-4" size={32} strokeWidth={1} />
                 <h4 className="text-xl font-serif text-bone mb-2">Médica y Cirujana</h4>
                 <p className="text-matcha/80 text-sm font-light">Pontificia Universidad Javeriana</p>
              </GlassCard>
              
              <GlassCard className="flex-1 p-8 flex flex-col justify-center border-white/5 hover:border-white/10">
                 <GraduationCap className="text-bone/30 mb-4" size={32} strokeWidth={1} />
                 <h4 className="text-xl font-serif text-bone mb-2">Máster en Salud Pública</h4>
                 <p className="text-matcha/80 text-sm font-light leading-relaxed">Universidad Miguel Hernández <br/> Universidad de Alicante</p>
              </GlassCard>
           </div>
        </div>
      </div>
    </section>
  )
}