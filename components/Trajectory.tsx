import React from 'react';
import { HeartHandshake, Sprout, Map, LandPlot } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';

const iconMap: Record<string, any> = {
  handshake: HeartHandshake,
  sprout: Sprout,
  map: Map,
  land: LandPlot,
};

export const Trajectory: React.FC = () => {
  const { data: trajectoryData, loading } = useContent('*[_type == "trajectory"] | order(order asc)');

  if (loading) return null;

  const displayData = trajectoryData?.length > 0 ? trajectoryData : [
    {
      id: 'paliativos',
      title: 'Unidad de Cuidados Paliativos',
      organization: 'Fundación Presentes (Colombia)',
      description: 'Atención clínica y acompañamiento psicosocial en hospitalización y consulta externa.',
      slug: 'handshake',
    },
    {
      id: 'baylor',
      title: 'Rotación en Salud Pública',
      organization: 'Fundación Baylor (La Guajira)',
      description: 'Atención primaria y promoción de la salud en comunidades Wayúu.',
      slug: 'sprout',
    },
    {
      id: 'apie',
      title: 'Médica de campo',
      organization: 'Apié Kajuyalí (Colombia)',
      description: 'Atención médica básica y trabajo comunitario en contexto rural.',
      slug: 'land',
    },
    {
      id: 'arquitectura',
      title: 'Arquitectura Sin Fronteras',
      organization: 'Alicante, España',
      description: 'Intervención comunitaria y proyectos de transformación social en salud pública.',
      slug: 'map',
    },
  ];

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-bone">Experiencia Relevante</h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mt-6"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

          <div className="space-y-16">
            {displayData.map((item: any, index: number) => {
              const Icon = iconMap[item.slug || ''] || Map;
              const isEven = index % 2 === 0;

              return (
                <div key={item._id || index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-jungle border border-matcha z-10 shadow-[0_0_15px_rgba(193,230,186,0.3)]"></div>

                  {/* Card Side */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <GlassCard className="p-6 md:p-8 rounded-xl group hover:border-matcha/40" delay={index * 0.1}>
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-start`}>
                        <div className="p-2 bg-white/5 rounded-full mb-3 text-matcha group-hover:text-white transition-colors duration-300">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>

                        <h3 className="text-lg font-bold text-bone mb-1">{item.title}</h3>
                        <span className="text-xs font-semibold uppercase tracking-widest text-matcha mb-3">{item.organization}</span>

                        <p className="text-sm md:text-base text-bone/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Empty Spacer Side */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};