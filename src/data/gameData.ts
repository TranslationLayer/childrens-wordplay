"use client";

export interface ClickPopChallenge {
  prompt: string;
  words: string[];
  correctWords: string[];
}

export interface GameData {
  age5: {
    clickPop: ClickPopChallenge[];
  };
  age7: {
    clickPop: ClickPopChallenge[];
  };
}

export const gameData: GameData = {
  age5: {
    clickPop: [
      {
        prompt: "Click the animal words",
        words: ["cat", "runs", "the", "dog"],
        correctWords: ["cat", "dog"],
      },
      {
        prompt: "Click the capitalized words",
        words: ["The", "fish", "swims", "fast"],
        correctWords: ["The"],
      },
      {
        prompt: "Click the small words",
        words: ["A", "big", "lion", "roars"],
        correctWords: ["A"],
      },
    ],
  },
  age7: {
    clickPop: [
      {
        prompt: "Click the action words",
        words: ["Birds", "fly", "high", "and", "sing"],
        correctWords: ["fly", "sing"],
      },
      {
        prompt: "Click the capitalized words",
        words: ["Monkeys", "like", "bananas", "They", "are", "yellow"],
        correctWords: ["Monkeys", "They"],
      },
      {
        prompt: "Click the animal words",
        words: ["A", "striped", "tiger", "and", "a", "tall", "giraffe", "live", "here"],
        correctWords: ["tiger", "giraffe"],
      },
    ],
  },
};