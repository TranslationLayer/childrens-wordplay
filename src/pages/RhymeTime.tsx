"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGame } from '@/contexts/GameContext';
import { rhymeData } from '@/data/rhymeData';
import { shuffleArray } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import StartOverButton from '@/components/StartOverButton';
import Celebration from '@/components/Celebration';
import { sounds } from '@/lib/sounds';

const RhymeTime = () => {
  const navigate = useNavigate();
  const { difficulty } = useGame();

  useEffect(() => {
    if (!difficulty) navigate('/');
  }, [difficulty, navigate]);

  const [gameSet, setGameSet] = useState(() =>
    difficulty ? Math.floor(Math.random() * rhymeData[difficulty].length) : 0,
  );
  const rounds = useMemo(
    () => (difficulty ? rhymeData[difficulty][gameSet] ?? rhymeData[difficulty][0] : []),
    [difficulty, gameSet],
  );
  const [index, setIndex] = useState(0);
  const [wrong, setWrong] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);

  const round = rounds[index];
  const options = useMemo(() => (round ? shuffleArray(round.options) : []), [round]);

  const newGame = () => {
    const len = difficulty ? rhymeData[difficulty].length : 1;
    setGameSet((i) => (i + 1) % len);
    setIndex(0);
    setWrong(null);
    setSolved(false);
  };

  if (!difficulty || rounds.length === 0 || !round) return null;

  const handlePick = (text: string, rhymes: boolean) => {
    if (rhymes) {
      sounds.playCorrect();
      if (index + 1 >= rounds.length) {
        sounds.playCelebration();
        setSolved(true);
      } else {
        setIndex((i) => i + 1);
        setWrong(null);
      }
    } else {
      sounds.playIncorrect();
      setWrong(text);
      setTimeout(() => setWrong(null), 700);
    }
  };

  if (solved) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rose-50">
        <Celebration onComplete={() => navigate('/play')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rose-50 p-4 flex flex-col items-center justify-center">
      <StartOverButton />
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-600 text-center mb-2">Rhyme Time</h1>
        <Progress value={(index / rounds.length) * 100} className="h-3 mb-8" />

        <Card className="p-8 text-center bg-white shadow-md">
          <p className="text-xl text-gray-600 mb-2">Which word rhymes with…</p>
          <div className="text-7xl mb-2">{round.emoji}</div>
          <p className="text-5xl font-bold text-gray-800 mb-8 tracking-wide">{round.word}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {options.map((opt) => (
              <motion.button
                key={opt.text}
                onClick={() => handlePick(opt.text, opt.rhymes)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'h-24 flex-1 rounded-2xl text-3xl font-bold text-white shadow-md transition-colors bg-rose-400 hover:bg-rose-500',
                  wrong === opt.text && 'bg-red-500 animate-shake',
                )}
              >
                {opt.text}
              </motion.button>
            ))}
          </div>
        </Card>

        <div className="flex gap-3 justify-center mt-6">
          <Button onClick={newGame} variant="secondary" className="h-14 text-xl font-bold">
            🔄 New Game
          </Button>
          <Button onClick={() => navigate('/play')} variant="outline" className="h-14 text-xl font-bold">
            ← Back to Games
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RhymeTime;
