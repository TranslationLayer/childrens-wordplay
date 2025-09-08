"use client";

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/contexts/GameContext';
import { Button } from '@/components/ui/button';

const Game = () => {
  const { difficulty } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (!difficulty) {
      navigate('/');
    }
  }, [difficulty, navigate]);

  if (!difficulty) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Game Screen</h1>
      <p className="text-2xl mb-8">
        Difficulty: <span className="font-bold capitalize">{difficulty.replace('age', 'Age ')}</span>
      </p>
      <p className="text-lg mb-8">
        (The 4 mini-games will go here)
      </p>
      <Button onClick={() => navigate('/end')}>End Game (For Testing)</Button>
    </div>
  );
};

export default Game;