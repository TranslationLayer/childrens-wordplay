"use client";

import type { Difficulty } from './difficulties';

export interface CrosswordEntry {
  answer: string; // letters only, will be shown uppercase
  clue: string;
  /** A picture hint (emoji) shown beside the clue for young readers. */
  emoji?: string;
  row: number; // 0-based start row
  col: number; // 0-based start col
  direction: 'across' | 'down';
}

export interface CrosswordPuzzle {
  title: string;
  size: { rows: number; cols: number };
  entries: CrosswordEntry[];
}

/**
 * Each puzzle is a "spine" word laid across the top row with shorter words
 * branching straight down from its letters, so every crossing letter is shared
 * and consistent by construction. Cells are large and the font is big for
 * little fingers and developing eyes.
 *
 * Multiple puzzles per band give children something new each time they replay.
 */
const YOUNG: CrosswordPuzzle[] = [
  {
    title: 'Animal Friends',
    size: { rows: 3, cols: 3 },
    entries: [
      { answer: 'CAT', clue: 'A pet that says meow', emoji: '🐱', row: 0, col: 0, direction: 'across' },
      { answer: 'COW', clue: 'A farm animal that says moo', emoji: '🐮', row: 0, col: 0, direction: 'down' },
      { answer: 'TEN', clue: 'The number after nine', emoji: '🔟', row: 0, col: 2, direction: 'down' },
    ],
  },
  {
    title: 'Barn Yard',
    size: { rows: 3, cols: 3 },
    entries: [
      { answer: 'HEN', clue: 'A bird that lays eggs', emoji: '🐔', row: 0, col: 0, direction: 'across' },
      { answer: 'HAT', clue: 'You wear it on your head', emoji: '🎩', row: 0, col: 0, direction: 'down' },
      { answer: 'NET', clue: 'You catch fish with it', emoji: '🥅', row: 0, col: 2, direction: 'down' },
    ],
  },
  {
    title: 'Bedtime',
    size: { rows: 3, cols: 3 },
    entries: [
      { answer: 'BAT', clue: 'It flies at night', emoji: '🦇', row: 0, col: 0, direction: 'across' },
      { answer: 'BED', clue: 'You sleep here', emoji: '🛏️', row: 0, col: 0, direction: 'down' },
      { answer: 'TOP', clue: 'A toy that spins', emoji: '🌀', row: 0, col: 2, direction: 'down' },
    ],
  },
];

const MID: CrosswordPuzzle[] = [
  {
    title: 'Pond and Farm',
    size: { rows: 4, cols: 4 },
    entries: [
      { answer: 'FROG', clue: 'A green animal that hops and croaks', emoji: '🐸', row: 0, col: 0, direction: 'across' },
      { answer: 'FISH', clue: 'It swims and has fins', emoji: '🐟', row: 0, col: 0, direction: 'down' },
      { answer: 'OWL', clue: 'A bird that hoots at night', emoji: '🦉', row: 0, col: 2, direction: 'down' },
      { answer: 'GOAT', clue: 'A farm animal with horns', emoji: '🐐', row: 0, col: 3, direction: 'down' },
    ],
  },
  {
    title: 'In the Woods',
    size: { rows: 4, cols: 4 },
    entries: [
      { answer: 'BEAR', clue: 'A big furry animal that likes honey', emoji: '🐻', row: 0, col: 0, direction: 'across' },
      { answer: 'BIRD', clue: 'An animal with wings and feathers', emoji: '🐦', row: 0, col: 0, direction: 'down' },
      { answer: 'ANT', clue: 'A tiny insect that lives in a hill', emoji: '🐜', row: 0, col: 2, direction: 'down' },
      { answer: 'RAT', clue: 'A small animal with a long tail', emoji: '🐀', row: 0, col: 3, direction: 'down' },
    ],
  },
  {
    title: 'Baby Animals',
    size: { rows: 4, cols: 4 },
    entries: [
      { answer: 'DUCK', clue: 'A bird that says quack', emoji: '🦆', row: 0, col: 0, direction: 'across' },
      { answer: 'DEER', clue: 'A forest animal with antlers', emoji: '🦌', row: 0, col: 0, direction: 'down' },
      { answer: 'CUB', clue: 'A baby bear', emoji: '🐻', row: 0, col: 2, direction: 'down' },
      { answer: 'KID', clue: 'A baby goat', emoji: '🐐', row: 0, col: 3, direction: 'down' },
    ],
  },
];

const OLDER: CrosswordPuzzle[] = [
  {
    title: 'Wild Animals',
    size: { rows: 5, cols: 5 },
    entries: [
      { answer: 'TIGER', clue: 'A big striped wild cat', emoji: '🐯', row: 0, col: 0, direction: 'across' },
      { answer: 'TOAD', clue: 'A bumpy animal like a frog', emoji: '🐸', row: 0, col: 0, direction: 'down' },
      { answer: 'GOAT', clue: 'A farm animal that climbs', emoji: '🐐', row: 0, col: 2, direction: 'down' },
      { answer: 'RAT', clue: 'A small animal with a long tail', emoji: '🐀', row: 0, col: 4, direction: 'down' },
    ],
  },
  {
    title: 'On the Farm',
    size: { rows: 5, cols: 5 },
    entries: [
      { answer: 'HORSE', clue: 'You can ride this animal', emoji: '🐴', row: 0, col: 0, direction: 'across' },
      { answer: 'HARE', clue: 'A fast animal like a rabbit', emoji: '🐇', row: 0, col: 0, direction: 'down' },
      { answer: 'RAT', clue: 'A small animal with a long tail', emoji: '🐀', row: 0, col: 2, direction: 'down' },
      { answer: 'ELK', clue: 'A large deer with big antlers', emoji: '🦌', row: 0, col: 4, direction: 'down' },
    ],
  },
  {
    title: 'At the Zoo',
    size: { rows: 5, cols: 5 },
    entries: [
      { answer: 'ZEBRA', clue: 'A striped animal like a horse', emoji: '🦓', row: 0, col: 0, direction: 'across' },
      { answer: 'ZOO', clue: 'A place to see wild animals', emoji: '🦁', row: 0, col: 0, direction: 'down' },
      { answer: 'BEE', clue: 'An insect that makes honey', emoji: '🐝', row: 0, col: 2, direction: 'down' },
      { answer: 'ANT', clue: 'A tiny insect that lives in a hill', emoji: '🐜', row: 0, col: 4, direction: 'down' },
    ],
  },
];

export const crosswordData: Record<Difficulty, CrosswordPuzzle[]> = {
  age5: YOUNG,
  age6: YOUNG,
  advanced56: MID,
  age7: MID,
  age8: OLDER,
  advanced78: OLDER,
};
