"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { gameData, DragTheMissingWordChallenge } from '@/data/gameData';
import { shuffleArray } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { sounds } from '@/lib/sounds';
import InstructionAnimation from '@/components/InstructionAnimation';

interface DragTheMissingWordProps {
  onComplete: () => void;
}

const DragTheMissingWord: React.FC<DragTheMissingWordProps> = ({ onComplete }) => {
  const { difficulty, level } = useGame();
  const [challenge, setChallenge] = useState<DragTheMissingWordChallenge | null>(null);
  const [wordOptions, setWordOptions] = useState<string[]>([]);
  const [droppedWord, setDroppedWord] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    if (difficulty && level) {
      const levelChallenges = gameData[difficulty][`level${level}`].dragTheMissingWord;
      const currentChallenge = shuffleArray(levelChallenges)[0];
      setChallenge(currentChallenge);
      setWordOptions(shuffleArray([currentChallenge.correctWord, ...currentChallenge.distractors]));
      setDroppedWord(null);
      setFeedback(null);
      setShowHint(true);
      const timer = setTimeout(() => setShowHint(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [difficulty, level]);

  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>, word: string) => {
    e.dataTransfer.setData('text/plain', word);
  };

  // Shared by both drag-drop (desktop) and tap (touch) so the game is playable
  // on phones, where native HTML5 drag-and-drop does not fire.
  const placeWord = (word: string) => {
    if (!challenge || droppedWord) return;
    const isCorrect = word === challenge.correctWord;

    if (isCorrect) {
      sounds.playCorrect();
      setDroppedWord(word);
      setFeedback('correct');
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      sounds.playIncorrect();
      setFeedback('incorrect');
      setTimeout(() => setFeedback(null), 800); // Shake animation duration
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
    placeWord(e.dataTransfer.getData('text/plain'));
  };

  if (!challenge) return <div>Loading...</div>;

  const { sentenceParts } = challenge;

  return (
    <Card className="w-full max-w-4xl text-center p-2 sm:p-6 bg-white/80 backdrop-blur-sm">
      <CardHeader className="px-2 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Drag the missing word</CardTitle>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        {showHint && <InstructionAnimation type="drag" />}
        <div className="flex flex-wrap items-center justify-center gap-y-2 text-2xl sm:text-4xl font-serif bg-gray-100 p-4 sm:p-8 rounded-lg my-6 sm:my-8 min-h-[8rem]">
          <span>{sentenceParts[0]}&nbsp;</span>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setIsDraggingOver(true)}
            onDragLeave={() => setIsDraggingOver(false)}
            className={cn(
              'inline-block border-b-4 border-dashed border-gray-400 w-28 sm:w-48 h-12 sm:h-16 transition-colors',
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

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
          {wordOptions.map((word, index) => (
            <Button
              key={index}
              draggable={!droppedWord}
              onDragStart={(e) => handleDragStart(e, word)}
              onClick={() => placeWord(word)}
              className="h-14 sm:h-20 min-w-[5rem] px-4 sm:px-6 text-2xl sm:text-3xl rounded-lg cursor-grab active:cursor-grabbing"
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