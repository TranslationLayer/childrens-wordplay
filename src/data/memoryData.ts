"use client";

import type { Difficulty } from './difficulties';

export interface MemoryPair {
  word: string;
  emoji: string;
}

const YOUNG: MemoryPair[] = [
  { word: 'CAT', emoji: '🐱' },
  { word: 'DOG', emoji: '🐶' },
  { word: 'SUN', emoji: '☀️' },
  { word: 'PIG', emoji: '🐷' },
];

const MID: MemoryPair[] = [
  { word: 'FROG', emoji: '🐸' },
  { word: 'BEAR', emoji: '🐻' },
  { word: 'DUCK', emoji: '🦆' },
  { word: 'OWL', emoji: '🦉' },
  { word: 'FISH', emoji: '🐟' },
];

const OLDER: MemoryPair[] = [
  { word: 'TIGER', emoji: '🐯' },
  { word: 'ZEBRA', emoji: '🦓' },
  { word: 'PANDA', emoji: '🐼' },
  { word: 'SNAKE', emoji: '🐍' },
  { word: 'WHALE', emoji: '🐋' },
  { word: 'EAGLE', emoji: '🦅' },
];

export const memoryData: Record<Difficulty, MemoryPair[]> = {
  age5: YOUNG,
  age6: YOUNG,
  advanced56: MID,
  age7: MID,
  age8: OLDER,
  advanced78: OLDER,
};
