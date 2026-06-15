"use client";

import type { Difficulty } from './difficulties';

export interface WordSearchPuzzle {
  title: string;
  size: number;
  words: string[];
  allowDiagonal: boolean;
  allowBackward: boolean;
}

const YOUNG: WordSearchPuzzle[] = [
  { title: 'Little Animals', size: 6, words: ['CAT', 'DOG', 'PIG', 'HEN', 'COW'], allowDiagonal: false, allowBackward: false },
  { title: 'Bug Hunt', size: 6, words: ['ANT', 'BEE', 'BUG', 'FLY', 'WEB'], allowDiagonal: false, allowBackward: false },
  { title: 'Sunny Day', size: 6, words: ['SUN', 'SKY', 'BIRD', 'TREE'], allowDiagonal: false, allowBackward: false },
  { title: 'Furry Pets', size: 6, words: ['RAT', 'FOX', 'OWL', 'HEN', 'CUB'], allowDiagonal: false, allowBackward: false },
];

const MID: WordSearchPuzzle[] = [
  { title: 'Animal Hunt', size: 8, words: ['FROG', 'BEAR', 'GOAT', 'DUCK', 'LION', 'OWL'], allowDiagonal: true, allowBackward: false },
  { title: 'Under the Sea', size: 8, words: ['FISH', 'CRAB', 'SEAL', 'SHARK', 'WHALE'], allowDiagonal: true, allowBackward: false },
  { title: 'Jungle Trek', size: 8, words: ['LION', 'TIGER', 'ZEBRA', 'APE', 'SNAKE'], allowDiagonal: true, allowBackward: false },
  { title: 'Farm Friends', size: 8, words: ['GOAT', 'DUCK', 'HORSE', 'SHEEP', 'COW'], allowDiagonal: true, allowBackward: false },
];

const OLDER: WordSearchPuzzle[] = [
  { title: 'Wildlife Search', size: 10, words: ['TIGER', 'PANDA', 'ZEBRA', 'OTTER', 'EAGLE', 'SHARK', 'MOOSE'], allowDiagonal: true, allowBackward: true },
  { title: 'On Safari', size: 10, words: ['LION', 'RHINO', 'HIPPO', 'CHEETAH', 'GIRAFFE', 'ZEBRA'], allowDiagonal: true, allowBackward: true },
  { title: 'Birds of the Sky', size: 10, words: ['EAGLE', 'ROBIN', 'FALCON', 'PARROT', 'PIGEON', 'OWL'], allowDiagonal: true, allowBackward: true },
  { title: 'Reptile Search', size: 10, words: ['SNAKE', 'LIZARD', 'GECKO', 'TURTLE', 'IGUANA', 'COBRA'], allowDiagonal: true, allowBackward: true },
];

export const wordSearchData: Record<Difficulty, WordSearchPuzzle[]> = {
  age5: YOUNG,
  age6: YOUNG,
  advanced56: MID,
  age7: MID,
  age8: OLDER,
  advanced78: OLDER,
};
