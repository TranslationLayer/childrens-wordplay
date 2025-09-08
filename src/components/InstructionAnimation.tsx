"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

interface InstructionAnimationProps {
  type: 'click' | 'drag';
}

const InstructionAnimation: React.FC<InstructionAnimationProps> = ({ type }) => {
  return (
    <div className="fixed top-1/2 left-8 md:left-16 -translate-y-1/2 z-30 pointer-events-none">
      <div className="relative">
        {type === 'click' && (
          <div className="relative w-16 h-16">
            <motion.div
              className="absolute"
              animate={{ scale: [1, 0.9, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MousePointer2 className="h-16 w-16 text-yellow-400 drop-shadow-lg" fill="rgba(255,255,255,0.5)" />
            </motion.div>
            <motion.div
              className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-yellow-400"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            />
          </div>
        )}
        {type === 'drag' && (
          <motion.div
            animate={{ y: [50, -50, 50] }}
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