import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanity';

export const Hero: React.FC = () => {
  const { data: hero, loading } = useContent('*[_type == "hero"][0]');

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-matcha/30 border-t-matcha rounded-full animate-spin"></div>
      </section>
    );
  }

  // Fallback content if CMS is empty or loading
  const content = hero || {
    title: 'Medicina',
    italicTitle: 'con Pulso.',
    subtitle: 'Ciencia rigurosa. Impacto humano.',
    fullName: 'Dr. Juliana Linares Puerta',
    profileImage: '/images/Foto_perfil.PNG'
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 overflow-hidden">

      {/* Content Wrapper */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

        {/* Text Side - The Manifesto */}
        <div className="order-2 lg:order-1 space-y-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-bone leading-tight tracking-tight"
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1 } }
              }}
            >
              {content.title} <br />
              <span className="italic text-matcha">{content.italicTitle}</span>
            </motion.h1>

            <motion.div
              className="h-px w-24 bg-matcha/50 mt-8 mb-8"
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: { width: 96, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
              }}
            />

            <motion.h2
              className="text-xl md:text-2xl font-light text-bone/80 max-w-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1 } }
              }}
            >
              {content.subtitle}
            </motion.h2>

            <motion.p
              className="mt-6 text-sm uppercase tracking-[0.2em] text-matcha/80"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1, delay: 1 } }
              }}
            >
              {content.fullName}
            </motion.p>
          </motion.div>
        </div>

        {/* Visual Side - Organic Frame */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative group w-72 h-72 md:w-96 md:h-96">
            {/* Organic Shapes behind */}
            <div className="absolute inset-0 bg-matcha/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl animate-pulse-slow"></div>

            {/* Main Image Container */}
            <div className="relative w-full h-full overflow-hidden border border-white/10 rounded-[2rem] shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-jungle/80 to-transparent z-10 mix-blend-multiply pointer-events-none"></div>

              <img
                src={content.profileImage?.asset ? urlFor(content.profileImage).url() : content.profileImage}
                alt={content.fullName}
                className="w-full h-full object-cover object-top transform transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-matcha/0 via-matcha to-matcha/0 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full bg-white h-1/2"
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

    </section>
  );
};