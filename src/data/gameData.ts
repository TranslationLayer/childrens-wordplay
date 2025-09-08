"use client";

export interface ClickPopChallenge {
  prompt: string;
  words: string[];
  correctWords: string[];
}

export interface DragTheMissingWordChallenge {
  sentenceParts: [string, string];
  correctWord: string;
  distractors: string[];
}

export interface GameData {
  age5: {
    clickPop: ClickPopChallenge[];
    dragTheMissingWord: DragTheMissingWordChallenge[];
  };
  age7: {
    clickPop: ClickPopChallenge[];
    dragTheMissingWord: DragTheMissingWordChallenge[];
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
    dragTheMissingWord: [
      {
        sentenceParts: ["The", "dog runs."],
        correctWord: "brown",
        distractors: ["table", "quick"],
      },
      {
        sentenceParts: ["A cat can", "."],
        correctWord: "jump",
        distractors: ["sing", "blue"],
      },
      {
        sentenceParts: ["That is a", "bird."],
        correctWord: "small",
        distractors: ["heavy", "car"],
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
    dragTheMissingWord: [
        {
            sentenceParts: ["The striped", "is fast."],
            correctWord: "zebra",
            distractors: ["house", "slowly"],
        },
        {
            sentenceParts: ["A big elephant", "water."],
            correctWord: "drinks",
            distractors: ["flies", "purple"],
        },
        {
            sentenceParts: ["Can a penguin", "?"],
            correctWord: "swim",
            distractors: ["drive", "hot"],
        },
    ]
  },
};