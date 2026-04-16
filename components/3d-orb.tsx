"use client";

import { motion } from 'framer-motion';

interface OrbProps {
  image?: string;
  initials?: string;
  className?: string;
}

export function ThreeDOrb({ image, initials, className = '' }: OrbProps) {
  return (
    <motion.div
      className={`relative h-80 w-80 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border-2 border-white/20 p-6 shadow-2xl ${className}`}
      animate={{ rotateY: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      whileHover={{ scale: 1.05, rotateY: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-3xl" />
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-xl rounded-3xl" />
      
      {image ? (
        <div 
          className="h-full w-full rounded-2xl bg-cover bg-center object-cover"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">
          <span className="text-4xl font-bold text-white drop-shadow-lg">{initials}</span>
        </div>
      )}
      
      <div className="absolute bottom-4 right-4 h-4 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg" />
    </motion.div>
  );
}

