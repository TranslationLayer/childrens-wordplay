"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sounds } from '@/lib/sounds';

interface BalloonProps {
  id: number;
  content: string;
  color: string;
  isCorrect: boolean;
  onPop: (id: number, isCorrect: boolean) => void;
  initialX: number;
  animationDuration: number;
  onAnimationComplete: (id: number) => void;
}

const Balloon: React.FC<BalloonProps> = ({ id, content, color, isCorrect, onPop, initialX, animationDuration, onAnimationComplete }) => {
  const [isPopped, setIsPopped] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    if (isPopped) return;

    if (isCorrect) {
      sounds.playCorrect();
      setIsPopped(true);
    } else {
      sounds.playIncorrect();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
    onPop(id, isCorrect);
  };

  const balloonVariants = {
    hidden: { y: '110vh', scale: 1 },
    visible: {
      y: '-20vh',
      transition: {
        duration: animationDuration,
        ease: 'linear',
      },
    },
    popped: {
      scale: 1.5,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const shakeAnimation = { 
    x: [0, -5, 5, -5, 5, 0], 
    transition: { duration: 0.5 } 
  };

  const swayAnimation = {
    x: [0, 10, -10, 5, -5, 0],
    transition: {
      duration: 5 + Math.random() * 5,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    }
  };

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{ left: `${initialX}%`, transform: 'translateX(-50%)' }}
      variants={balloonVariants}
      initial="hidden"
      animate={isPopped ? 'popped' : 'visible'}
      onAnimationComplete={(definition) => {
        if (definition === 'popped' || definition === 'visible') {
          onAnimationComplete(id);
        }
      }}
      whileHover={{ scale: 1.1 }}
      onTap={handleClick}
    >
      <motion.div animate={isShaking ? shakeAnimation : swayAnimation}>
        <svg width="120" height="150" viewBox="0 0 100 125" className="drop-shadow-lg">
          <path
            d="M50,115 C10,100 10,50 50,10 C90,50 90,100 50,115 Z"
            fill={color}
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="2"
          />
          <path d="M50,115 L45,125 L55,125 Z" fill={color} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center -mt-4">
          <span className="text-white text-2xl font-bold select-none" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            {content}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Balloon;