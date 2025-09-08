"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useGame } from '@/contexts/GameContext';
import { useNavigate } from 'react-router-dom';
import { bonusGameData, BonusRound, BalloonData } from '@/data/bonusGameData';
import Balloon from '@/components/Balloon';
import { Progress } from '@/components/ui/progress';
import Celebration from '@/components/Celebration';
import StartOverButton from '@/components/StartOverButton';
import { shuffleArray } from '@/lib/utils';
import { Trophy } from 'lucide-react';

const ROUND_DURATION_SECONDS = 60;
const balloonColors = ['#EF4444', '#3B82F6', '#22C55E', '#FBBF24', '#A855F7'];

interface ActiveBalloon extends BalloonData {
  id: number;
  initialX: number;
  animationDuration: number;
  color: string;
}

const BonusGame = () => {
  const { difficulty } = useGame();
  const navigate = useNavigate();
  const [roundIndex, setRoundIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState<BonusRound | null>(null);
  const [timeLeft, setTimeLeft] = useState(ROUND_DURATION_SECONDS);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [score, setScore] = useState(0);
  const [activeBalloons, setActiveBalloons] = useState<ActiveBalloon[]>([]);
  const [nextBalloonId, setNextBalloonId] = useState(0);

  const gameRounds = useMemo(() => {
    if (!difficulty) return [];
    return shuffleArray(bonusGameData[difficulty]);
  }, [difficulty]);

  const getBalloonColor = useCallback((content: string, type: BonusRound['type']) => {
    if (type === 'color') {
      const colorMap: { [key: string]: string } = {
        red: '#EF4444', blue: '#3B82F6', green: '#22C55E',
        yellow: '#FBBF24', purple: '#A855F7',
      };
      return colorMap[content] || balloonColors[Math.floor(Math.random() * balloonColors.length)];
    }
    return balloonColors[Math.floor(Math.random() * balloonColors.length)];
  }, []);

  const startRound = useCallback((index: number) => {
    if (index >= gameRounds.length) {
      return; // End of game is handled by the timer useEffect
    }
    setCurrentRound(gameRounds[index]);
    setRoundIndex(index);
    setTimeLeft(ROUND_DURATION_SECONDS);
    setIsCelebrating(false);
    setScore(0);
    setActiveBalloons([]);
    setNextBalloonId(0);
  }, [gameRounds]);

  useEffect(() => {
    if (!difficulty) navigate('/');
    else if (gameRounds.length > 0) startRound(0);
  }, [difficulty, navigate, gameRounds, startRound]);

  useEffect(() => {
    if (isCelebrating || !currentRound) return;
    if (timeLeft <= 0) {
      setIsCelebrating(true);
      if (roundIndex + 1 >= gameRounds.length) {
        setTimeout(() => navigate('/end', { state: { score } }), 2500);
      } else {
        setTimeout(() => startRound(roundIndex + 1), 2500);
      }
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isCelebrating, currentRound, roundIndex, startRound, gameRounds, navigate, score]);

  useEffect(() => {
    if (isCelebrating || !currentRound) return;
    const interval = setInterval(() => {
      const balloonTemplate = currentRound.balloons[Math.floor(Math.random() * currentRound.balloons.length)];
      const newBalloon: ActiveBalloon = {
        ...balloonTemplate,
        id: nextBalloonId,
        initialX: Math.random() * 90 + 5, // Percentage from 5% to 95%
        animationDuration: difficulty === 'age5' ? 10 + Math.random() * 5 : 7 + Math.random() * 4,
        color: getBalloonColor(balloonTemplate.content, currentRound.type),
      };
      setNextBalloonId(prev => prev + 1);
      setActiveBalloons(prev => [...prev, newBalloon]);
    }, difficulty === 'age5' ? 1200 : 800);
    return () => clearInterval(interval);
  }, [nextBalloonId, currentRound, isCelebrating, difficulty, getBalloonColor]);

  const handleBalloonPop = (id: number, isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleAnimationComplete = (id: number) => {
    setActiveBalloons(prev => prev.filter(b => b.id !== id));
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
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl z-10 p-2 bg-white/50 backdrop-blur-sm rounded-lg">
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-700 mb-2">{currentRound.prompt}</h2>
        <div className="flex items-center gap-4">
          <Progress value={(timeLeft / ROUND_DURATION_SECONDS) * 100} className="h-4 flex-grow" />
          <div className="flex items-center gap-2 bg-yellow-400 px-3 py-1 rounded-full text-white font-bold">
            <Trophy className="h-6 w-6" />
            <span className="text-2xl">{score}</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 max-w-7xl mx-auto h-full w-full">
        {activeBalloons.map((balloon) => (
          <Balloon
            key={balloon.id}
            id={balloon.id}
            content={currentRound.type === 'color' ? '' : balloon.content}
            color={balloon.color}
            isCorrect={balloon.isCorrect}
            onPop={handleBalloonPop}
            initialX={balloon.initialX}
            animationDuration={balloon.animationDuration}
            onAnimationComplete={handleAnimationComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default BonusGame;