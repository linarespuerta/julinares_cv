import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`
        relative backdrop-blur-md bg-white/[0.03] 
        border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
        hover:border-matcha/30 hover:bg-white/[0.05]
        transition-colors duration-500
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};