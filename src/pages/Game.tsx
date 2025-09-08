"use client";

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/contexts/GameContext';
import GameTimer from '@/components/GameTimer';
import ClickPop from '@/components/minigames/ClickPop';
import DragTheMissingWord from '@/components/minigames/DragTheMissingWord';
import Celebration from '@/components/Celebration';
import { Progress } from '@/components/ui/progress';
import { PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TOTAL_MINI_GAMES = 4;

const Game = () => {
  const { difficulty } = useGame();
  const navigate = useNavigate();
  const [currentMiniGame, setCurrentMiniGame] = useState(0);
  const [isCelebrating, setIsCelebrating] = useState(false);

  useEffect(() => {
    if (!difficulty) {
      navigate('/');
    }
  }, [difficulty, navigate]);

  const handleMiniGameComplete = () => {
    if (currentMiniGame < TOTAL_MINI_GAMES - 1) {
      setIsCelebrating(true);
    } else {
      navigate('/end');
    }
  };
  
  const handleCelebrationComplete = () => {
      setIsCelebrating(false);
      setCurrentMiniGame(currentMiniGame + 1);
  }

  const renderContent = () => {
    if (isCelebrating) {
        return <Celebration onComplete={handleCelebrationComplete} />;
    }

    switch (currentMiniGame) {
      case 0:
        return <ClickPop onComplete={handleMiniGameComplete} />;
      case 1:
        return <DragTheMissingWord onComplete={handleMiniGameComplete} />;
      case 2:
        return <div className="text-center"><p className="text-2xl mb-4">Punctuation Picker (Coming Soon)</p><Button onClick={handleMiniGameComplete}>Next Game (For Testing)</Button></div>;
      case 3:
        return <div className="text-center"><p className="text-2xl mb-4">Sentence Builder (Coming Soon)</p><Button onClick={handleMiniGameComplete}>Next Game (For Testing)</Button></div>;
      default:
        return null;
    }
  };

  if (!difficulty) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-100 p-4 relative">
      <GameTimer />
      <div className="w-full max-w-2xl mb-8 absolute top-5">
        <div className="flex items-center justify-center gap-4 mb-2">
            {[...Array(TOTAL_MINI_GAMES)].map((_, i) => (
                <PawPrint key={i} className={`h-10 w-10 transition-colors ${i <= currentMiniGame ? 'text-yellow-500 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
        </div>
        <Progress value={((currentMiniGame) / TOTAL_MINI_GAMES) * 100} className="w-full h-4" />
      </div>
      
      <div className="w-full flex-grow flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default Game;