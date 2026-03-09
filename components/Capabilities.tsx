import React from 'react';
import { Stethoscope, Brain, Globe, ArrowUpRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanity';

const iconMap: Record<string, any> = {
  stethoscope: Stethoscope,
  brain: Brain,
  globe: Globe,
};

export const Capabilities: React.FC = () => {
  const { data: cmsCapabilities, loading } = useContent('*[_type == "capability"] | order(order asc)');

  if (loading) return null;

  const displayCapabilities = cmsCapabilities?.length > 0 ? cmsCapabilities : [
    {
      id: 'clinica',
      title: 'Clínica',
      slug: 'stethoscope',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
      items: ['Urgencias y Trauma', 'Hospitalización General', 'Atención Primaria', 'Cuidados Paliativos']
    },
    {
      id: 'mental',
      title: 'Salud Mental',
      slug: 'brain',
      image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1200',
      items: ['Soporte en Crisis', 'Psiquiatría de Enlace', 'Escucha Activa', 'Terapia Comunitaria']
    },
    {
      id: 'publica',
      title: 'Salud Pública',
      slug: 'globe',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200',
      items: ['Gestión de Proyectos', 'Investigación de Campo', 'Redacción Científica', 'Epidemiología Social']
    },
  ];

  return (
    <section className="py-24 w-full relative z-10 bg-void">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 px-6 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-bone leading-tight">
            Dónde puedo <span className="text-matcha italic">aportar ahora</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 h-auto md:h-[80vh] min-h-[600px]">
          {displayCapabilities.map((item: any, idx: number) => {
            const Icon = iconMap[item.slug || ''] || Globe;
            return (
              <motion.div
                key={item._id || idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                className="relative w-full h-full rounded-2xl overflow-hidden group border border-white/5 bg-jungle"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={item.image?.asset ? urlFor(item.image).url() : item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 filter saturate-[0.6] brightness-[0.7] group-hover:saturate-[0.8]"
                  />
                </div>

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-jungle/30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent opacity-90"></div>

                {/* Top Icon Area */}
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-matcha">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Content Box - Bottom Aligned */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <GlassCard className="p-6 !bg-black/40 !backdrop-blur-xl !border-white/10 shadow-2xl rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-matcha">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-serif text-bone tracking-wide">{item.title}</h3>
                    </div>

                    <div className="h-px w-full bg-white/10 mb-4"></div>

                    <ul className="grid grid-cols-1 gap-2">
                      {item.items?.map((subItem: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-bone/80 text-sm font-light">
                          <span className="w-1 h-1 rounded-full bg-matcha shadow-[0_0_5px_rgba(193,230,186,0.8)]"></span>
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};