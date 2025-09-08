"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Difficulty = 'age5' | 'age7';

interface GameContextType {
  difficulty: Difficulty | null;
  setDifficulty: (level: Difficulty) => void;
  level: number | null;
  setLevel: (level: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficultyState] = useState<Difficulty | null>(() => {
    const savedDifficulty = localStorage.getItem('gameDifficulty');
    return savedDifficulty ? (savedDifficulty as Difficulty) : null;
  });

  const [level, setLevelState] = useState<number | null>(() => {
    const savedLevel = localStorage.getItem('gameLevel');
    return savedLevel ? parseInt(savedLevel, 10) : null;
  });

  const setDifficulty = (level: Difficulty) => {
    localStorage.setItem('gameDifficulty', level);
    setDifficultyState(level);
  };

  const setLevel = (level: number) => {
    localStorage.setItem('gameLevel', String(level));
    setLevelState(level);
  };

  return (
    <GameContext.Provider value={{ difficulty, setDifficulty, level, setLevel }}>
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