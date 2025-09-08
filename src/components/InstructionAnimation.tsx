"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

interface InstructionAnimationProps {
  type: 'click' | 'drag';
  className?: string;
}

const InstructionAnimation: React.FC<InstructionAnimationProps> = ({ type, className }) => {
  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none ${className}`}>
      <div className="relative">
        {type === 'click' && (
          <motion.div
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MousePointer2 className="h-16 w-16 text-yellow-400 drop-shadow-lg" fill="rgba(255,255,255,0.5)" />
          </motion.div>
        )}
        {type === 'drag' && (
          <motion.div
            animate={{ x: [-50, 50, -50] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MousePointer2 className="h-16 w-16 text-yellow-400 drop-shadow-lg" fill="rgba(255,255,255,0.5)" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InstructionAnimation;