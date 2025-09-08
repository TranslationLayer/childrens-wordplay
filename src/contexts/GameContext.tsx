"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Difficulty = 'age5' | 'age7';

interface GameContextType {
  difficulty: Difficulty | null;
  setDifficulty: (level: Difficulty) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficultyState] = useState<Difficulty | null>(() => {
    const savedDifficulty = localStorage.getItem('gameDifficulty');
    return savedDifficulty ? (savedDifficulty as Difficulty) : null;
  });

  const setDifficulty = (level: Difficulty) => {
    localStorage.setItem('gameDifficulty', level);
    setDifficultyState(level);
  };

  return (
    <GameContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};