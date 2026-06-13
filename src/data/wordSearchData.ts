"use client";

import type { Difficulty } from './difficulties';

export interface WordSearchPuzzle {
  title: string;
  size: number;
  words: string[];
  allowDiagonal: boolean;
  allowBackward: boolean;
}

const YOUNG: WordSearchPuzzle = {
  title: 'Little Animals',
  size: 6,
  words: ['CAT', 'DOG', 'PIG', 'HEN', 'COW'],
  allowDiagonal: false,
  allowBackward: false,
};

const MID: WordSearchPuzzle = {
  title: 'Animal Hunt',
  size: 8,
  words: ['FROG', 'BEAR', 'GOAT', 'DUCK', 'LION', 'OWL'],
  allowDiagonal: true,
  allowBackward: false,
};

const OLDER: WordSearchPuzzle = {
  title: 'Wildlife Search',
  size: 10,
  words: ['TIGER', 'PANDA', 'ZEBRA', 'OTTER', 'EAGLE', 'SHARK', 'MOOSE'],
  allowDiagonal: true,
  allowBackward: true,
};

export const wordSearchData: Record<Difficulty, WordSearchPuzzle> = {
  age5: YOUNG,
  age6: YOUNG,
  advanced56: MID,
  age7: MID,
  age8: OLDER,
  advanced78: OLDER,
};
