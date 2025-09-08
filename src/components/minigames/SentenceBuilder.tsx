"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { gameData, SentenceBuilderChallenge } from '@/data/gameData';
import { shuffleArray } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';
import { sounds } from '@/lib/sounds';
import { motion } from 'framer-motion';

interface SentenceBuilderProps {
  onComplete: () => void;
}

const SentenceBuilder: React.FC<SentenceBuilderProps> = ({ onComplete }) => {
  const { difficulty, level } = useGame();
  const [challenge, setChallenge] = useState<SentenceBuilderChallenge | null>(null);
  const [wordBank, setWordBank] = useState<string[]>([]);
  const [builtSentence, setBuiltSentence] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  useEffect(() => {
    if (difficulty && level) {
      const levelChallenges = gameData[difficulty][`level${level}`].sentenceBuilder;
      const currentChallenge = shuffleArray(levelChallenges)[0];
      setChallenge(currentChallenge);
      setWordBank(shuffleArray(currentChallenge.words));
      setBuiltSentence([]);
      setFeedback(null);
    }
  }, [difficulty, level]);

  const moveWordToSentence = (word: string, index: number) => {
    sounds.playClick();
    setWordBank(wordBank.filter((_, i) => i !== index));
    setBuiltSentence([...builtSentence, word]);
  };

  const moveWordToBank = (word: string, index: number) => {
    sounds.playClick();
    setBuiltSentence(builtSentence.filter((_, i) => i !== index));
    setWordBank([...wordBank, word]);
  };

  const checkSentence = () => {
    if (!challenge) return;
    const isCorrect = JSON.stringify(builtSentence) === JSON.stringify(challenge.correctOrder);
    if (isCorrect) {
      sounds.playCorrect();
      setFeedback('correct');
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      sounds.playIncorrect();
      setFeedback('incorrect');
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  if (!challenge) return <div>Loading...</div>;

  return (
    <Card className="w-full max-w-4xl text-center p-6 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl font-bold text-gray-800">Build the sentence</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            'flex items-center justify-center text-3xl font-serif bg-gray-100 p-4 rounded-lg my-8 min-h-[8rem] flex-wrap gap-4',
            feedback === 'incorrect' && 'animate-shake'
          )}
        >
          {builtSentence.map((word, index) => (
            <motion.button
              key={index}
              layout
              onClick={() => moveWordToBank(word, index)}
              className="h-16 px-6 text-3xl cursor-pointer bg-white rounded-lg shadow"
            >
              {word}
            </motion.button>
          ))}
          {feedback === 'correct' && <CheckCircle className="h-12 w-12 text-green-500" />}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 min-h-[8rem]">
          {wordBank.map((word, index) => (
            <motion.button
              key={word + index}
              layout
              onClick={() => moveWordToSentence(word, index)}
              className="h-16 px-6 text-3xl bg-blue-500 text-white rounded-lg shadow"
            >
              {word}
            </motion.button>
          ))}
        </div>

        {wordBank.length === 0 && !feedback && (
          <Button onClick={checkSentence} className="mt-8 h-20 text-3xl bg-green-500 hover:bg-green-600">
            Check My Sentence!
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default SentenceBuilder;