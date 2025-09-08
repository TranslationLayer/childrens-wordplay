"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGame } from '@/contexts/GameContext';
import { gameData, ClickPopChallenge } from '@/data/gameData';
import { shuffleArray } from '@/lib/utils';
import { motion } from 'framer-motion';
import { sounds } from '@/lib/sounds';
import InstructionAnimation from '@/components/InstructionAnimation';

interface ClickPopProps {
  onComplete: () => void;
}

const ClickPop: React.FC<ClickPopProps> = ({ onComplete }) => {
  const { difficulty, level } = useGame();
  const [challenge, setChallenge] = useState<ClickPopChallenge | null>(null);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | null>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    if (difficulty && level) {
      const levelChallenges = gameData[difficulty][`level${level}`].clickPop;
      setChallenge(shuffleArray(levelChallenges)[0]);
      setSelectedWords([]);
      setFeedback(null);
      setShowHint(true);
      const timer = setTimeout(() => setShowHint(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [difficulty, level]);

  if (!challenge) {
    return <div>Loading...</div>;
  }

  const { prompt, words, correctWords } = challenge;

  const handleWordClick = (word: string) => {
    if (correctWords.includes(word) && !selectedWords.includes(word)) {
      sounds.playCorrect();
      const newSelectedWords = [...selectedWords, word];
      setSelectedWords(newSelectedWords);

      const allCorrectFound = correctWords.every(cw => newSelectedWords.includes(cw));

      if (allCorrectFound) {
        setFeedback('correct');
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    } else if (!correctWords.includes(word)) {
      sounds.playIncorrect();
    }
  };

  return (
    <Card className="w-full max-w-4xl text-center p-6 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl font-bold text-gray-800">{prompt}</CardTitle>
      </CardHeader>
      <CardContent>
        {showHint && <InstructionAnimation type="click" />}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {words.map((word, index) => (
            <motion.button
              key={index}
              onClick={() => handleWordClick(word)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`h-20 w-40 text-3xl rounded-lg font-bold text-white shadow-md transition-colors ${
                selectedWords.includes(word) ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
              }`}
              disabled={selectedWords.includes(word)}
            >
              {word}
            </motion.button>
          ))}
        </div>
        {feedback === 'correct' && (
          <p className="text-green-600 font-bold text-2xl mt-8 animate-pulse">Great job!</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ClickPop;