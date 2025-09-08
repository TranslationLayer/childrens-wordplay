"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CharacterGuideProps {
  message: string;
}

const CharacterGuide: React.FC<CharacterGuideProps> = ({ message }) => {
  return (
    <motion.div
      className="fixed bottom-4 left-4 flex items-end gap-4 z-20"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Bear SVG */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="120" height="140" viewBox="0 0 150 170" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M125 95C125 125.376 100.376 150 70 150C39.6243 150 15 125.376 15 95C15 64.6243 39.6243 40 70 40C100.376 40 125 64.6243 125 95Z" fill="#A0522D"/>
          <circle cx="40" cy="45" r="25" fill="#A0522D"/>
          <circle cx="110" cy="45" r="25" fill="#A0522D"/>
          <circle cx="40" cy="45" r="15" fill="#D2691E"/>
          <circle cx="110" cy="45" r="15" fill="#D2691E"/>
          <ellipse cx="70" cy="110" rx="35" ry="25" fill="#D2691E"/>
          <circle cx="55" cy="80" r="7" fill="black"/>
          <circle cx="95" cy="80" r="7" fill="black"/>
          <path d="M70 100C75.5228 100 80 95.5228 80 90C80 84.4772 75.5228 80 70 80C64.4772 80 60 84.4772 60 90C60 95.5228 64.4772 100 70 100Z" fill="black"/>
          <path d="M60 115C60 112.239 62.2386 110 65 110H85C87.7614 110 90 112.239 90 115" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </motion.div>
      
      {/* Speech Bubble */}
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-xs">
        <p className="text-lg text-gray-700 font-medium">{message}</p>
        <div className="absolute bottom-2 -left-2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-white border-b-[10px] border-b-transparent"></div>
      </div>
    </motion.div>
  );
};

export default CharacterGuide;