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
 * Each puzzle is a "spine" word with shorter words branching off it, so every
 * crossing letter is shared and consistent. Cells are large and the font is big
 * for little fingers and developing eyes.
 */
const YOUNG: CrosswordPuzzle = {
  title: 'Animal Friends',
  size: { rows: 3, cols: 3 },
  entries: [
    { answer: 'CAT', clue: 'A pet that says meow', emoji: '🐱', row: 0, col: 0, direction: 'across' },
    { answer: 'COW', clue: 'A farm animal that says moo', emoji: '🐮', row: 0, col: 0, direction: 'down' },
    { answer: 'TEN', clue: 'The number after nine', emoji: '🔟', row: 0, col: 2, direction: 'down' },
  ],
};

const MID: CrosswordPuzzle = {
  title: 'Pond and Farm',
  size: { rows: 4, cols: 4 },
  entries: [
    { answer: 'FROG', clue: 'A green animal that hops and croaks', emoji: '🐸', row: 0, col: 0, direction: 'across' },
    { answer: 'FISH', clue: 'It swims and has fins', emoji: '🐟', row: 0, col: 0, direction: 'down' },
    { answer: 'OWL', clue: 'A bird that hoots at night', emoji: '🦉', row: 0, col: 2, direction: 'down' },
    { answer: 'GOAT', clue: 'A farm animal with horns', emoji: '🐐', row: 0, col: 3, direction: 'down' },
  ],
};

const OLDER: CrosswordPuzzle = {
  title: 'Wild Animals',
  size: { rows: 5, cols: 5 },
  entries: [
    { answer: 'TIGER', clue: 'A big striped wild cat', emoji: '🐯', row: 0, col: 0, direction: 'across' },
    { answer: 'TOAD', clue: 'A bumpy animal like a frog', emoji: '🐸', row: 0, col: 0, direction: 'down' },
    { answer: 'GOAT', clue: 'A farm animal that climbs', emoji: '🐐', row: 0, col: 2, direction: 'down' },
    { answer: 'RAT', clue: 'A small animal with a long tail', emoji: '🐀', row: 0, col: 4, direction: 'down' },
  ],
};

export const crosswordData: Record<Difficulty, CrosswordPuzzle> = {
  age5: YOUNG,
  age6: YOUNG,
  advanced56: MID,
  age7: MID,
  age8: OLDER,
  advanced78: OLDER,
};
