"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { gameData, DragTheMissingWordChallenge } from '@/data/gameData';
import { shuffleArray } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { sounds } from '@/lib/sounds';

interface DragTheMissingWordProps {
  onComplete: () => void;
}

const DragTheMissingWord: React.FC<DragTheMissingWordProps> = ({ onComplete }) => {
  const { difficulty } = useGame();
  const [challenges, setChallenges] = useState<DragTheMissingWordChallenge[]>([]);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [wordOptions, setWordOptions] = useState<string[]>([]);
  const [droppedWord, setDroppedWord] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  useEffect(() => {
    if (difficulty) {
      const allChallenges = gameData[difficulty].dragTheMissingWord;
      setChallenges(shuffleArray(allChallenges).slice(0, 3));
    }
  }, [difficulty]);

  useEffect(() => {
    if (challenges.length > 0) {
      const current = challenges[challengeIndex];
      setWordOptions(shuffleArray([current.correctWord, ...current.distractors]));
    }
  }, [challenges, challengeIndex]);

  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>, word: string) => {
    e.dataTransfer.setData('text/plain', word);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const dropped = e.dataTransfer.getData('text/plain');
    const isCorrect = dropped === challenges[challengeIndex].correctWord;

    if (isCorrect) {
      sounds.playCorrect();
      setDroppedWord(dropped);
      setFeedback('correct');
      setTimeout(() => {
        if (challengeIndex < challenges.length - 1) {
          setChallengeIndex(challengeIndex + 1);
          setDroppedWord(null);
          setFeedback(null);
        } else {
          onComplete();
        }
      }, 1500);
    } else {
      sounds.playIncorrect();
      setFeedback('incorrect');
      setTimeout(() => setFeedback(null), 800); // Shake animation duration
    }
  };

  if (challenges.length === 0) return <div>Loading...</div>;

  const { sentenceParts } = challenges[challengeIndex];

  return (
    <Card className="w-full max-w-4xl text-center p-6 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl font-bold text-gray-800">Drag the missing word</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center text-4xl font-serif bg-gray-100 p-8 rounded-lg my-8 h-32">
          <span>{sentenceParts[0]}&nbsp;</span>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setIsDraggingOver(true)}
            onDragLeave={() => setIsDraggingOver(false)}
            className={cn(
              'inline-block border-b-4 border-dashed border-gray-400 w-48 h-16 transition-colors',
              isDraggingOver && 'bg-blue-100',
              feedback === 'incorrect' && 'animate-shake border-red-500',
              droppedWord && 'border-transparent'
            )}
          >
            {droppedWord && (
              <span className="text-blue-600 font-bold">{droppedWord}</span>
            )}
          </div>
          <span>&nbsp;{sentenceParts[1]}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {wordOptions.map((word, index) => (
            <Button
              key={index}
              draggable={!droppedWord}
              onDragStart={(e) => handleDragStart(e, word)}
              className="h-20 w-40 text-3xl rounded-lg cursor-grab active:cursor-grabbing"
              disabled={!!droppedWord}
            >
              {word}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DragTheMissingWord;