"use client";

import React, { useEffect, useState } from 'react';
import { PartyPopper, Sparkles, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const celebrations = [
  { message: 'Awesome!', Icon: PartyPopper, color: 'text-purple-500' },
  { message: 'Great Job!', Icon: Sparkles, color: 'text-yellow-500' },
  { message: 'You did it!', Icon: ThumbsUp, color: 'text-green-500' },
];

interface CelebrationProps {
  onComplete: () => void;
}

const Celebration: React.FC<CelebrationProps> = ({ onComplete }) => {
  const [celebration, setCelebration] = useState({ message: '', Icon: PartyPopper, color: '' });

  useEffect(() => {
    setCelebration(celebrations[Math.floor(Math.random() * celebrations.length)]);
    const timer = setTimeout(() => onComplete(), 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const { message, Icon, color } = celebration;

  if (!message) return null;

  return (
    <motion.div 
      className="flex flex-col items-center justify-center gap-4"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <Icon className={`h-32 w-32 ${color}`} />
      <p className={`text-6xl font-bold ${color}`}>{message}</p>
    </motion.div>
  );
};

export default Celebration;