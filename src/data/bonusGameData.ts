"use client";

export interface BalloonData {
  content: string; // The text/letter on the balloon, or the color name
  isCorrect: boolean;
}

export interface BonusRound {
  prompt: string;
  type: 'color' | 'word' | 'letter' | 'sightWord' | 'capitalization';
  balloons: BalloonData[];
}

interface BonusGameData {
  age5: BonusRound[];
  age7: BonusRound[];
}

export const bonusGameData: BonusGameData = {
  age5: [
    {
      prompt: "Pop all the red balloons.",
      type: 'color',
      balloons: [
        { content: 'red', isCorrect: true },
        { content: 'blue', isCorrect: false },
        { content: 'red', isCorrect: true },
        { content: 'yellow', isCorrect: false },
        { content: 'green', isCorrect: false },
      ]
    },
    {
      prompt: "Pop all the animal names.",
      type: 'word',
      balloons: [
        { content: 'cat', isCorrect: true },
        { content: 'run', isCorrect: false },
        { content: 'dog', isCorrect: true },
        { content: 'sun', isCorrect: false },
        { content: 'pig', isCorrect: true },
      ]
    },
    {
      prompt: "Pop all the balloons with the letter A.",
      type: 'letter',
      balloons: [
        { content: 'A', isCorrect: true },
        { content: 'B', isCorrect: false },
        { content: 'C', isCorrect: false },
        { content: 'A', isCorrect: true },
        { content: 'D', isCorrect: false },
      ]
    }
  ],
  age7: [
    {
      prompt: "Pop the words that start with a capital letter.",
      type: 'capitalization',
      balloons: [
        { content: 'The', isCorrect: true },
        { content: 'cat', isCorrect: false },
        { content: 'runs', isCorrect: false },
        { content: 'Fast', isCorrect: true },
        { content: 'away', isCorrect: false },
        { content: 'Spot', isCorrect: true },
        { content: 'is', isCorrect: false },
        { content: 'his', isCorrect: false },
        { content: 'name', isCorrect: false },
      ]
    },
    {
      prompt: "Pop the balloon that says 'the'.",
      type: 'sightWord',
      balloons: [
        { content: 'a', isCorrect: false },
        { content: 'is', isCorrect: false },
        { content: 'the', isCorrect: true },
        { content: 'it', isCorrect: false },
        { content: 'in', isCorrect: false },
        { content: 'on', isCorrect: false },
        { content: 'and', isCorrect: false },
      ]
    },
    {
      prompt: "Pop all the blue balloons.",
      type: 'color',
      balloons: [
        { content: 'blue', isCorrect: true },
        { content: 'red', isCorrect: false },
        { content: 'yellow', isCorrect: false },
        { content: 'blue', isCorrect: true },
        { content: 'green', isCorrect: false },
        { content: 'purple', isCorrect: false },
        { content: 'blue', isCorrect: true },
        { content: 'orange', isCorrect: false },
      ]
    }
  ]
};