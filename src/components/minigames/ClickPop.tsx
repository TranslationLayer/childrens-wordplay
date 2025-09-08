"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGame } from '@/contexts/GameContext';
import { gameData, ClickPopChallenge } from '@/data/gameData';
import { shuffleArray } from '@/lib/utils';

interface ClickPopProps {
  onComplete: () => void;
}

const ClickPop: React.FC<ClickPopProps> = ({ onComplete }) => {
  const { difficulty } = useGame();
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [challenges, setChallenges] = useState<ClickPopChallenge[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | null>(null);

  useEffect(() => {
    if (difficulty) {
      const allChallenges = gameData[difficulty].clickPop;
      setChallenges(shuffleArray(allChallenges).slice(0, 3));
    }
  }, [difficulty]);

  if (challenges.length === 0) {
    return <div>Loading...</div>;
  }

  const currentChallenge = challenges[challengeIndex];
  const { prompt, words, correctWords } = currentChallenge;

  const handleWordClick = (word: string) => {
    if (correctWords.includes(word) && !selectedWords.includes(word)) {
      const newSelectedWords = [...selectedWords, word];
      setSelectedWords(newSelectedWords);

      // Check if all correct words have been selected
      const allCorrectFound = correctWords.every(cw => newSelectedWords.includes(cw));

      if (allCorrectFound) {
        setFeedback('correct');
        setTimeout(() => {
          if (challengeIndex < challenges.length - 1) {
            setChallengeIndex(challengeIndex + 1);
            setSelectedWords([]);
            setFeedback(null);
          } else {
            onComplete();
          }
        }, 1500);
      }
    }
  };

  return (
    <Card className="w-full max-w-4xl text-center p-6 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl font-bold text-gray-800">{prompt}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {words.map((word, index) => (
            <Button
              key={index}
              onClick={() => handleWordClick(word)}
              className={`h-20 w-40 text-3xl rounded-lg transition-transform transform hover:scale-105 ${
                selectedWords.includes(word) ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
              disabled={selectedWords.includes(word)}
            >
              {word}
            </Button>
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