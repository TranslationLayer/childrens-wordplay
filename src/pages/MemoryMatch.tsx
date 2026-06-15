"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGame } from '@/contexts/GameContext';
import { memoryData } from '@/data/memoryData';
import { shuffleArray } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import StartOverButton from '@/components/StartOverButton';
import Celebration from '@/components/Celebration';
import { sounds } from '@/lib/sounds';

interface MemoryCard {
  cardId: number;
  pairId: number;
  face: string; // word text or emoji
  kind: 'word' | 'emoji';
}

const MemoryMatch = () => {
  const navigate = useNavigate();
  const { difficulty } = useGame();

  useEffect(() => {
    if (!difficulty) navigate('/');
  }, [difficulty, navigate]);

  const [setIndex, setSetIndex] = useState(() =>
    difficulty ? Math.floor(Math.random() * memoryData[difficulty].length) : 0,
  );

  const cards = useMemo<MemoryCard[]>(() => {
    if (!difficulty) return [];
    const sets = memoryData[difficulty];
    const pairs = sets[setIndex] ?? sets[0];
    const built: MemoryCard[] = [];
    pairs.forEach((p, pairId) => {
      built.push({ cardId: pairId * 2, pairId, face: p.word, kind: 'word' });
      built.push({ cardId: pairId * 2 + 1, pairId, face: p.emoji, kind: 'emoji' });
    });
    return shuffleArray(built);
  }, [difficulty, setIndex]);

  const [flipped, setFlipped] = useState<number[]>([]); // cardIds currently face-up (unmatched)
  const [matched, setMatched] = useState<Set<number>>(new Set()); // pairIds matched
  const [busy, setBusy] = useState(false);

  const newGame = () => {
    const len = difficulty ? memoryData[difficulty].length : 1;
    setSetIndex((i) => (i + 1) % len);
    setFlipped([]);
    setMatched(new Set());
    setBusy(false);
  };

  if (!difficulty || cards.length === 0) return null;

  const totalPairs = cards.length / 2;
  const solved = matched.size === totalPairs;

  const handleFlip = (card: MemoryCard) => {
    if (busy) return;
    if (matched.has(card.pairId)) return;
    if (flipped.includes(card.cardId)) return;

    sounds.playClick();
    const next = [...flipped, card.cardId];
    setFlipped(next);

    if (next.length === 2) {
      setBusy(true);
      const [a, b] = next.map((id) => cards.find((c) => c.cardId === id)!);
      if (a.pairId === b.pairId) {
        sounds.playCorrect();
        setTimeout(() => {
          setMatched((prev) => {
            const updated = new Set(prev).add(a.pairId);
            if (updated.size === totalPairs) sounds.playCelebration();
            return updated;
          });
          setFlipped([]);
          setBusy(false);
        }, 500);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setBusy(false);
        }, 1000);
      }
    }
  };

  if (solved) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <Celebration onComplete={() => navigate('/play')} />
      </div>
    );
  }

  const cols = totalPairs <= 4 ? 4 : totalPairs === 5 ? 5 : 4;

  return (
    <div className="min-h-screen bg-amber-50 p-4 flex flex-col items-center justify-center">
      <StartOverButton />
      <h1 className="text-3xl md:text-4xl font-bold text-amber-600 mb-1">Memory Match</h1>
      <p className="text-lg text-gray-600 mb-6">Match each word to its picture!</p>

      <div
        className="grid gap-3 sm:gap-4 w-full max-w-2xl"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {cards.map((card) => {
          const isUp = flipped.includes(card.cardId) || matched.has(card.pairId);
          const isMatched = matched.has(card.pairId);
          return (
            <motion.button
              key={card.cardId}
              onClick={() => handleFlip(card)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'aspect-square rounded-xl flex items-center justify-center shadow-md font-bold transition-colors',
                isUp ? 'bg-white' : 'bg-amber-400 hover:bg-amber-500',
                isMatched && 'bg-green-200 ring-2 ring-green-500',
              )}
              aria-label={isUp ? card.face : 'Hidden card'}
            >
              {isUp ? (
                <span className={card.kind === 'emoji' ? 'text-4xl sm:text-6xl' : 'text-2xl sm:text-4xl text-gray-800 tracking-wide'}>
                  {card.face}
                </span>
              ) : (
                <span className="text-4xl sm:text-5xl text-white">?</span>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="flex gap-3 mt-8">
        <Button
          onClick={newGame}
          variant="secondary"
          className="h-14 text-xl font-bold"
        >
          🔄 New Game
        </Button>
        <Button
          onClick={() => navigate('/play')}
          variant="outline"
          className="h-14 text-xl font-bold"
        >
          ← Back to Games
        </Button>
      </div>
    </div>
  );
};

export default MemoryMatch;
