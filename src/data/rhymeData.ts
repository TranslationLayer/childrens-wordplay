"use client";

import type { Difficulty } from './difficulties';

export interface RhymeRound {
  word: string;
  emoji: string;
  options: { text: string; rhymes: boolean }[];
}

const YOUNG: RhymeRound[] = [
  { word: 'CAT', emoji: '🐱', options: [{ text: 'HAT', rhymes: true }, { text: 'DOG', rhymes: false }, { text: 'SUN', rhymes: false }] },
  { word: 'BEE', emoji: '🐝', options: [{ text: 'CAR', rhymes: false }, { text: 'TREE', rhymes: true }, { text: 'FISH', rhymes: false }] },
  { word: 'STAR', emoji: '⭐', options: [{ text: 'MOON', rhymes: false }, { text: 'BOOK', rhymes: false }, { text: 'CAR', rhymes: true }] },
  { word: 'FROG', emoji: '🐸', options: [{ text: 'DOG', rhymes: true }, { text: 'CAT', rhymes: false }, { text: 'BIRD', rhymes: false }] },
];

const MID: RhymeRound[] = [
  { word: 'SNAKE', emoji: '🐍', options: [{ text: 'CAKE', rhymes: true }, { text: 'GRASS', rhymes: false }, { text: 'HISS', rhymes: false }] },
  { word: 'GOAT', emoji: '🐐', options: [{ text: 'FARM', rhymes: false }, { text: 'BOAT', rhymes: true }, { text: 'HORN', rhymes: false }] },
  { word: 'MOUSE', emoji: '🐭', options: [{ text: 'CHEESE', rhymes: false }, { text: 'HOUSE', rhymes: true }, { text: 'SMALL', rhymes: false }] },
  { word: 'DUCK', emoji: '🦆', options: [{ text: 'POND', rhymes: false }, { text: 'TRUCK', rhymes: true }, { text: 'QUACK', rhymes: false }] },
  { word: 'BEAR', emoji: '🐻', options: [{ text: 'CHAIR', rhymes: true }, { text: 'WOODS', rhymes: false }, { text: 'GROWL', rhymes: false }] },
];

const OLDER: RhymeRound[] = [
  { word: 'WHALE', emoji: '🐋', options: [{ text: 'SHARK', rhymes: false }, { text: 'SNAIL', rhymes: true }, { text: 'OCEAN', rhymes: false }] },
  { word: 'LIGHT', emoji: '💡', options: [{ text: 'NIGHT', rhymes: true }, { text: 'DARK', rhymes: false }, { text: 'SHINE', rhymes: false }] },
  { word: 'CLOUD', emoji: '☁️', options: [{ text: 'RAIN', rhymes: false }, { text: 'SKY', rhymes: false }, { text: 'LOUD', rhymes: true }] },
  { word: 'CROWN', emoji: '👑', options: [{ text: 'KING', rhymes: false }, { text: 'BROWN', rhymes: true }, { text: 'GOLD', rhymes: false }] },
  { word: 'FLOWER', emoji: '🌸', options: [{ text: 'TOWER', rhymes: true }, { text: 'PETAL', rhymes: false }, { text: 'GARDEN', rhymes: false }] },
  { word: 'KNIGHT', emoji: '🛡️', options: [{ text: 'CASTLE', rhymes: false }, { text: 'SWORD', rhymes: false }, { text: 'BRIGHT', rhymes: true }] },
];

export const rhymeData: Record<Difficulty, RhymeRound[]> = {
  age5: YOUNG,
  age6: YOUNG,
  advanced56: MID,
  age7: MID,
  age8: OLDER,
  advanced78: OLDER,
};
