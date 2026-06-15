"use client";

import type { Difficulty } from './difficulties';

export interface RhymeRound {
  word: string;
  emoji: string;
  options: { text: string; rhymes: boolean }[];
}

// Several sets per band so "New Game" deals a fresh batch of rounds.
const YOUNG: RhymeRound[][] = [
  [
    { word: 'CAT', emoji: '🐱', options: [{ text: 'HAT', rhymes: true }, { text: 'DOG', rhymes: false }, { text: 'SUN', rhymes: false }] },
    { word: 'BEE', emoji: '🐝', options: [{ text: 'CAR', rhymes: false }, { text: 'TREE', rhymes: true }, { text: 'FISH', rhymes: false }] },
    { word: 'STAR', emoji: '⭐', options: [{ text: 'MOON', rhymes: false }, { text: 'BOOK', rhymes: false }, { text: 'CAR', rhymes: true }] },
    { word: 'FROG', emoji: '🐸', options: [{ text: 'DOG', rhymes: true }, { text: 'CAT', rhymes: false }, { text: 'BIRD', rhymes: false }] },
  ],
  [
    { word: 'SUN', emoji: '☀️', options: [{ text: 'BUN', rhymes: true }, { text: 'SKY', rhymes: false }, { text: 'CUP', rhymes: false }] },
    { word: 'DOG', emoji: '🐶', options: [{ text: 'CAT', rhymes: false }, { text: 'LOG', rhymes: true }, { text: 'PUP', rhymes: false }] },
    { word: 'BALL', emoji: '⚽', options: [{ text: 'WALL', rhymes: true }, { text: 'ROUND', rhymes: false }, { text: 'KICK', rhymes: false }] },
    { word: 'PIG', emoji: '🐷', options: [{ text: 'FARM', rhymes: false }, { text: 'MUD', rhymes: false }, { text: 'WIG', rhymes: true }] },
  ],
  [
    { word: 'BAT', emoji: '🦇', options: [{ text: 'MAT', rhymes: true }, { text: 'WING', rhymes: false }, { text: 'DARK', rhymes: false }] },
    { word: 'BOX', emoji: '📦', options: [{ text: 'OPEN', rhymes: false }, { text: 'FOX', rhymes: true }, { text: 'TAPE', rhymes: false }] },
    { word: 'CAKE', emoji: '🍰', options: [{ text: 'LAKE', rhymes: true }, { text: 'SWEET', rhymes: false }, { text: 'EAT', rhymes: false }] },
    { word: 'BEAR', emoji: '🐻', options: [{ text: 'HONEY', rhymes: false }, { text: 'CHAIR', rhymes: true }, { text: 'WOODS', rhymes: false }] },
  ],
];

const MID: RhymeRound[][] = [
  [
    { word: 'SNAKE', emoji: '🐍', options: [{ text: 'CAKE', rhymes: true }, { text: 'GRASS', rhymes: false }, { text: 'HISS', rhymes: false }] },
    { word: 'GOAT', emoji: '🐐', options: [{ text: 'FARM', rhymes: false }, { text: 'BOAT', rhymes: true }, { text: 'HORN', rhymes: false }] },
    { word: 'MOUSE', emoji: '🐭', options: [{ text: 'CHEESE', rhymes: false }, { text: 'HOUSE', rhymes: true }, { text: 'SMALL', rhymes: false }] },
    { word: 'DUCK', emoji: '🦆', options: [{ text: 'POND', rhymes: false }, { text: 'TRUCK', rhymes: true }, { text: 'QUACK', rhymes: false }] },
    { word: 'BEAR', emoji: '🐻', options: [{ text: 'CHAIR', rhymes: true }, { text: 'WOODS', rhymes: false }, { text: 'GROWL', rhymes: false }] },
  ],
  [
    { word: 'WHALE', emoji: '🐋', options: [{ text: 'SHARK', rhymes: false }, { text: 'SNAIL', rhymes: true }, { text: 'OCEAN', rhymes: false }] },
    { word: 'FROG', emoji: '🐸', options: [{ text: 'LOG', rhymes: true }, { text: 'POND', rhymes: false }, { text: 'HOP', rhymes: false }] },
    { word: 'CAT', emoji: '🐱', options: [{ text: 'PAW', rhymes: false }, { text: 'FLAT', rhymes: true }, { text: 'MILK', rhymes: false }] },
    { word: 'BEE', emoji: '🐝', options: [{ text: 'KNEE', rhymes: true }, { text: 'BUZZ', rhymes: false }, { text: 'WING', rhymes: false }] },
    { word: 'CLOCK', emoji: '🕐', options: [{ text: 'TIME', rhymes: false }, { text: 'SOCK', rhymes: true }, { text: 'TICK', rhymes: false }] },
  ],
  [
    { word: 'CHAIN', emoji: '⛓️', options: [{ text: 'TRAIN', rhymes: true }, { text: 'METAL', rhymes: false }, { text: 'LINK', rhymes: false }] },
    { word: 'MOON', emoji: '🌙', options: [{ text: 'NIGHT', rhymes: false }, { text: 'SPOON', rhymes: true }, { text: 'STAR', rhymes: false }] },
    { word: 'SHEEP', emoji: '🐑', options: [{ text: 'WOOL', rhymes: false }, { text: 'JEEP', rhymes: true }, { text: 'FARM', rhymes: false }] },
    { word: 'KITE', emoji: '🪁', options: [{ text: 'LIGHT', rhymes: true }, { text: 'WIND', rhymes: false }, { text: 'STRING', rhymes: false }] },
    { word: 'CROWN', emoji: '👑', options: [{ text: 'KING', rhymes: false }, { text: 'TOWN', rhymes: true }, { text: 'GOLD', rhymes: false }] },
  ],
];

const OLDER: RhymeRound[][] = [
  [
    { word: 'WHALE', emoji: '🐋', options: [{ text: 'SHARK', rhymes: false }, { text: 'SNAIL', rhymes: true }, { text: 'OCEAN', rhymes: false }] },
    { word: 'LIGHT', emoji: '💡', options: [{ text: 'NIGHT', rhymes: true }, { text: 'DARK', rhymes: false }, { text: 'SHINE', rhymes: false }] },
    { word: 'CLOUD', emoji: '☁️', options: [{ text: 'RAIN', rhymes: false }, { text: 'SKY', rhymes: false }, { text: 'LOUD', rhymes: true }] },
    { word: 'CROWN', emoji: '👑', options: [{ text: 'KING', rhymes: false }, { text: 'BROWN', rhymes: true }, { text: 'GOLD', rhymes: false }] },
    { word: 'FLOWER', emoji: '🌸', options: [{ text: 'TOWER', rhymes: true }, { text: 'PETAL', rhymes: false }, { text: 'GARDEN', rhymes: false }] },
    { word: 'KNIGHT', emoji: '🛡️', options: [{ text: 'CASTLE', rhymes: false }, { text: 'SWORD', rhymes: false }, { text: 'BRIGHT', rhymes: true }] },
  ],
  [
    { word: 'BREEZE', emoji: '🍃', options: [{ text: 'CHEESE', rhymes: true }, { text: 'WIND', rhymes: false }, { text: 'LEAF', rhymes: false }] },
    { word: 'STONE', emoji: '🪨', options: [{ text: 'ROCK', rhymes: false }, { text: 'BONE', rhymes: true }, { text: 'HARD', rhymes: false }] },
    { word: 'SPACE', emoji: '🚀', options: [{ text: 'STARS', rhymes: false }, { text: 'RACE', rhymes: true }, { text: 'MOON', rhymes: false }] },
    { word: 'DREAM', emoji: '💭', options: [{ text: 'SLEEP', rhymes: false }, { text: 'CREAM', rhymes: true }, { text: 'NIGHT', rhymes: false }] },
    { word: 'THRONE', emoji: '🪑', options: [{ text: 'PHONE', rhymes: true }, { text: 'QUEEN', rhymes: false }, { text: 'ROYAL', rhymes: false }] },
    { word: 'SPARKLE', emoji: '✨', options: [{ text: 'SHINE', rhymes: false }, { text: 'BRIGHT', rhymes: false }, { text: 'TWINKLE', rhymes: true }] },
  ],
  [
    { word: 'MOUNTAIN', emoji: '⛰️', options: [{ text: 'FOUNTAIN', rhymes: true }, { text: 'VALLEY', rhymes: false }, { text: 'CLIMB', rhymes: false }] },
    { word: 'OCEAN', emoji: '🌊', options: [{ text: 'WATER', rhymes: false }, { text: 'POTION', rhymes: true }, { text: 'WAVES', rhymes: false }] },
    { word: 'GARDEN', emoji: '🌷', options: [{ text: 'PARDON', rhymes: true }, { text: 'FLOWERS', rhymes: false }, { text: 'GROW', rhymes: false }] },
    { word: 'THUNDER', emoji: '⚡', options: [{ text: 'STORM', rhymes: false }, { text: 'WONDER', rhymes: true }, { text: 'LOUD', rhymes: false }] },
    { word: 'CASTLE', emoji: '🏰', options: [{ text: 'HASSLE', rhymes: true }, { text: 'KING', rhymes: false }, { text: 'STONE', rhymes: false }] },
    { word: 'DRAGON', emoji: '🐉', options: [{ text: 'WAGON', rhymes: true }, { text: 'FIRE', rhymes: false }, { text: 'SCALES', rhymes: false }] },
  ],
];

export const rhymeData: Record<Difficulty, RhymeRound[][]> = {
  age5: YOUNG,
  age6: YOUNG,
  advanced56: MID,
  age7: MID,
  age8: OLDER,
  advanced78: OLDER,
};
