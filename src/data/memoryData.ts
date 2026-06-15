"use client";

import type { Difficulty } from './difficulties';

export interface MemoryPair {
  word: string;
  emoji: string;
}

// Several sets per band so a new round deals different cards.
const YOUNG: MemoryPair[][] = [
  [
    { word: 'CAT', emoji: '🐱' },
    { word: 'DOG', emoji: '🐶' },
    { word: 'SUN', emoji: '☀️' },
    { word: 'PIG', emoji: '🐷' },
  ],
  [
    { word: 'COW', emoji: '🐮' },
    { word: 'HEN', emoji: '🐔' },
    { word: 'FOX', emoji: '🦊' },
    { word: 'BEE', emoji: '🐝' },
  ],
  [
    { word: 'DUCK', emoji: '🦆' },
    { word: 'FROG', emoji: '🐸' },
    { word: 'OWL', emoji: '🦉' },
    { word: 'ANT', emoji: '🐜' },
  ],
];

const MID: MemoryPair[][] = [
  [
    { word: 'FROG', emoji: '🐸' },
    { word: 'BEAR', emoji: '🐻' },
    { word: 'DUCK', emoji: '🦆' },
    { word: 'OWL', emoji: '🦉' },
    { word: 'FISH', emoji: '🐟' },
  ],
  [
    { word: 'LION', emoji: '🦁' },
    { word: 'GOAT', emoji: '🐐' },
    { word: 'SEAL', emoji: '🦭' },
    { word: 'CRAB', emoji: '🦀' },
    { word: 'DEER', emoji: '🦌' },
  ],
  [
    { word: 'HORSE', emoji: '🐴' },
    { word: 'SHEEP', emoji: '🐑' },
    { word: 'GOAT', emoji: '🐐' },
    { word: 'PIG', emoji: '🐷' },
    { word: 'COW', emoji: '🐮' },
  ],
];

const OLDER: MemoryPair[][] = [
  [
    { word: 'TIGER', emoji: '🐯' },
    { word: 'ZEBRA', emoji: '🦓' },
    { word: 'PANDA', emoji: '🐼' },
    { word: 'SNAKE', emoji: '🐍' },
    { word: 'WHALE', emoji: '🐋' },
    { word: 'EAGLE', emoji: '🦅' },
  ],
  [
    { word: 'SHARK', emoji: '🦈' },
    { word: 'OTTER', emoji: '🦦' },
    { word: 'SEAL', emoji: '🦭' },
    { word: 'CRAB', emoji: '🦀' },
    { word: 'MOOSE', emoji: '🫎' },
    { word: 'BISON', emoji: '🦬' },
  ],
  [
    { word: 'MONKEY', emoji: '🐒' },
    { word: 'PARROT', emoji: '🦜' },
    { word: 'SPIDER', emoji: '🕷️' },
    { word: 'RABBIT', emoji: '🐰' },
    { word: 'MOUSE', emoji: '🐭' },
    { word: 'HORSE', emoji: '🐴' },
  ],
];

export const memoryData: Record<Difficulty, MemoryPair[][]> = {
  age5: YOUNG,
  age6: YOUNG,
  advanced56: MID,
  age7: MID,
  age8: OLDER,
  advanced78: OLDER,
};
