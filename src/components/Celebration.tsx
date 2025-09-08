"use client";

import React, { useEffect, useState } from 'react';
import { PartyPopper, Sparkles, ThumbsUp } from 'lucide-react';

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
    // Pick a random celebration
    setCelebration(celebrations[Math.floor(Math.random() * celebrations.length)]);

    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  const { message, Icon, color } = celebration;

  if (!message) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-4 animate-bounce">
      <Icon className={`h-24 w-24 ${color}`} />
      <p className={`text-5xl font-bold ${color}`}>{message}</p>
    </div>
  );
};

export default Celebration;