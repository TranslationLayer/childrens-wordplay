"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { gameData, SentenceBuilderChallenge } from '@/data/gameData';
import { shuffleArray } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';

interface SentenceBuilderProps {
  onComplete: () => void;
}

const SentenceBuilder: React.FC<SentenceBuilderProps> = ({ onComplete }) => {
  const { difficulty } = useGame();
  const [challenges, setChallenges] = useState<SentenceBuilderChallenge[]>([]);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [wordBank, setWordBank] = useState<string[]>([]);
  const [builtSentence, setBuiltSentence] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  useEffect(() => {
    if (difficulty) {
      const allChallenges = gameData[difficulty].sentenceBuilder;
      setChallenges(shuffleArray(allChallenges).slice(0, 3));
    }
  }, [difficulty]);

  useEffect(() => {
    if (challenges.length > 0) {
      setWordBank(shuffleArray(challenges[challengeIndex].words));
      setBuiltSentence([]);
      setFeedback(null);
    }
  }, [challenges, challengeIndex]);

  const moveWordToSentence = (word: string, index: number) => {
    setWordBank(wordBank.filter((_, i) => i !== index));
    setBuiltSentence([...builtSentence, word]);
  };

  const moveWordToBank = (word: string, index: number) => {
    setBuiltSentence(builtSentence.filter((_, i) => i !== index));
    setWordBank([...wordBank, word]);
  };

  const checkSentence = () => {
    const isCorrect = JSON.stringify(builtSentence) === JSON.stringify(challenges[challengeIndex].correctOrder);
    if (isCorrect) {
      setFeedback('correct');
      setTimeout(() => {
        if (challengeIndex < challenges.length - 1) {
          setChallengeIndex(challengeIndex + 1);
        } else {
          onComplete();
        }
      }, 1500);
    } else {
      setFeedback('incorrect');
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  if (challenges.length === 0) return <div>Loading...</div>;

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
            <Button
              key={index}
              variant="secondary"
              className="h-16 text-3xl cursor-pointer"
              onClick={() => moveWordToBank(word, index)}
            >
              {word}
            </Button>
          ))}
          {feedback === 'correct' && <CheckCircle className="h-12 w-12 text-green-500" />}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 min-h-[8rem]">
          {wordBank.map((word, index) => (
            <Button
              key={index}
              className="h-16 text-3xl"
              onClick={() => moveWordToSentence(word, index)}
            >
              {word}
            </Button>
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