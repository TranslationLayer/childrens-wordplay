"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useGame } from '@/contexts/GameContext';
import { useNavigate } from 'react-router-dom';
import { bonusGameData, BonusRound } from '@/data/bonusGameData';
import Balloon from '@/components/Balloon';
import { Progress } from '@/components/ui/progress';
import Celebration from '@/components/Celebration';
import StartOverButton from '@/components/StartOverButton';
import { shuffleArray } from '@/lib/utils';

const ROUND_DURATION_SECONDS = 60;
const balloonColors = ['#EF4444', '#3B82F6', '#22C55E', '#FBBF24', '#A855F7']; // red, blue, green, yellow, purple

const BonusGame = () => {
  const { difficulty } = useGame();
  const navigate = useNavigate();
  const [roundIndex, setRoundIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState<BonusRound | null>(null);
  const [poppedCorrectBalloons, setPoppedCorrectBalloons] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(ROUND_DURATION_SECONDS);
  const [isCelebrating, setIsCelebrating] = useState(false);

  const gameRounds = useMemo(() => {
    if (!difficulty) return [];
    return shuffleArray(bonusGameData[difficulty]);
  }, [difficulty]);

  useEffect(() => {
    if (!difficulty) {
      navigate('/');
    } else if (gameRounds.length > 0) {
      startRound(0);
    }
  }, [difficulty, navigate, gameRounds]);

  useEffect(() => {
    if (isCelebrating) return;
    if (timeLeft <= 0) {
      startNextRound();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isCelebrating]);

  const startRound = (index: number) => {
    if (index >= gameRounds.length) {
      navigate('/end');
      return;
    }
    setCurrentRound(gameRounds[index]);
    setRoundIndex(index);
    setPoppedCorrectBalloons([]);
    setTimeLeft(ROUND_DURATION_SECONDS);
    setIsCelebrating(false);
  };

  const startNextRound = () => {
    setIsCelebrating(true);
    setTimeout(() => {
      startRound(roundIndex + 1);
    }, 2500); // Celebration duration
  };

  const handleBalloonPop = (id: number, isCorrect: boolean) => {
    if (isCorrect && !poppedCorrectBalloons.includes(id)) {
      const newPopped = [...poppedCorrectBalloons, id];
      setPoppedCorrectBalloons(newPopped);

      const totalCorrect = currentRound?.balloons.filter(b => b.isCorrect).length || 0;
      if (newPopped.length === totalCorrect) {
        startNextRound();
      }
    }
  };

  const getBalloonColor = (content: string, type: BonusRound['type']) => {
    if (type === 'color') {
      const colorMap: { [key: string]: string } = {
        red: '#EF4444',
        blue: '#3B82F6',
        green: '#22C55E',
        yellow: '#FBBF24',
        purple: '#A855F7',
      };
      return colorMap[content] || balloonColors[Math.floor(Math.random() * balloonColors.length)];
    }
    return balloonColors[Math.floor(Math.random() * balloonColors.length)];
  };

  if (!difficulty || !currentRound) {
    return <div className="min-h-screen flex items-center justify-center bg-sky-100">Loading...</div>;
  }

  if (isCelebrating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-100">
        <Celebration onComplete={() => {}} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-100 overflow-hidden relative">
      <StartOverButton />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-2xl z-10">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-2">{currentRound.prompt}</h2>
        <Progress value={(timeLeft / ROUND_DURATION_SECONDS) * 100} className="h-4" />
      </div>

      {currentRound.balloons.map((balloon, index) => (
        <Balloon
          key={`${roundIndex}-${index}`}
          id={index}
          content={currentRound.type === 'color' ? '' : balloon.content}
          color={getBalloonColor(balloon.content, currentRound.type)}
          isCorrect={balloon.isCorrect}
          onPop={handleBalloonPop}
          initialX={10 + (index * 80) / currentRound.balloons.length + (Math.random() * 5 - 2.5)}
          animationDuration={difficulty === 'age5' ? 12 + Math.random() * 6 : 8 + Math.random() * 4}
        />
      ))}
    </div>
  );
};

export default BonusGame;