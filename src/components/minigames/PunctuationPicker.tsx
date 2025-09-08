"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { gameData, PunctuationPickerChallenge } from '@/data/gameData';
import { shuffleArray } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { sounds } from '@/lib/sounds';
import InstructionAnimation from '@/components/InstructionAnimation';

interface PunctuationPickerProps {
  onComplete: () => void;
}

const punctuationOptions: ('.' | '?' | '!')[] = ['.', '?', '!'];

const PunctuationPicker: React.FC<PunctuationPickerProps> = ({ onComplete }) => {
  const { difficulty, level } = useGame();
  const [challenge, setChallenge] = useState<PunctuationPickerChallenge | null>(null);
  const [droppedPunctuation, setDroppedPunctuation] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    if (difficulty && level) {
      const levelChallenges = gameData[difficulty][`level${level}`].punctuationPicker;
      setChallenge(shuffleArray(levelChallenges)[0]);
      setDroppedPunctuation(null);
      setFeedback(null);
      setShowHint(true);
      const timer = setTimeout(() => setShowHint(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [difficulty, level]);

  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>, mark: string) => {
    e.dataTransfer.setData('text/plain', mark);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
    if (!challenge) return;

    const dropped = e.dataTransfer.getData('text/plain');
    const isCorrect = dropped === challenge.correctPunctuation;

    if (isCorrect) {
      sounds.playCorrect();
      setDroppedPunctuation(dropped);
      setFeedback('correct');
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      sounds.playIncorrect();
      setFeedback('incorrect');
      setTimeout(() => setFeedback(null), 800);
    }
  };

  if (!challenge) return <div>Loading...</div>;

  const { sentence } = challenge;

  return (
    <Card className="w-full max-w-4xl text-center p-6 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl font-bold text-gray-800">Add the right punctuation</CardTitle>
      </CardHeader>
      <CardContent>
        {showHint && <InstructionAnimation type="drag" />}
        <div className="flex items-center justify-center text-4xl font-serif bg-gray-100 p-8 rounded-lg my-8 h-32">
          <span>{sentence}</span>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setIsDraggingOver(true)}
            onDragLeave={() => setIsDraggingOver(false)}
            className={cn(
              'inline-block border-2 border-dashed border-gray-400 rounded-full w-16 h-16 ml-2 transition-colors flex items-center justify-center',
              isDraggingOver && 'bg-blue-100',
              feedback === 'incorrect' && 'animate-shake border-red-500',
              droppedPunctuation && 'border-transparent'
            )}
          >
            {droppedPunctuation && (
              <span className="text-blue-600 font-bold text-5xl">{droppedPunctuation}</span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {punctuationOptions.map((mark, index) => (
            <Button
              key={index}
              draggable={!droppedPunctuation}
              onDragStart={(e) => handleDragStart(e, mark)}
              className="h-24 w-24 text-6xl rounded-full cursor-grab active:cursor-grabbing"
              disabled={!!droppedPunctuation}
            >
              {mark}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PunctuationPicker;