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

export interface PunctuationPickerChallenge {
  sentence: string;
  correctPunctuation: '.' | '?' | '!';
}

export interface SentenceBuilderChallenge {
  words: string[];
  correctOrder: string[];
}

export interface GameData {
  age5: {
    clickPop: ClickPopChallenge[];
    dragTheMissingWord: DragTheMissingWordChallenge[];
    punctuationPicker: PunctuationPickerChallenge[];
    sentenceBuilder: SentenceBuilderChallenge[];
  };
  age7: {
    clickPop: ClickPopChallenge[];
    dragTheMissingWord: DragTheMissingWordChallenge[];
    punctuationPicker: PunctuationPickerChallenge[];
    sentenceBuilder: SentenceBuilderChallenge[];
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
    punctuationPicker: [
        { sentence: "The dog is happy", correctPunctuation: '.' },
        { sentence: "Look at the big bear", correctPunctuation: '!' },
        { sentence: "Can a fish swim", correctPunctuation: '?' },
    ],
    sentenceBuilder: [
      { words: ["cat", "The", "sat"], correctOrder: ["The", "cat", "sat"] },
      { words: ["runs", "dog", "A"], correctOrder: ["A", "dog", "runs"] },
      { words: ["is", "The", "big", "sun"], correctOrder: ["The", "sun", "is", "big"] },
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
    ],
    punctuationPicker: [
        { sentence: "A giraffe is very tall", correctPunctuation: '.' },
        { sentence: "Do monkeys eat bananas", correctPunctuation: '?' },
        { sentence: "Wow, that lion is loud", correctPunctuation: '!' },
    ],
    sentenceBuilder: [
      { words: ["fox", "The", "jumps", "quick"], correctOrder: ["The", "quick", "fox", "jumps"] },
      { words: ["loudly", "roars", "A", "lion"], correctOrder: ["A", "lion", "roars", "loudly"] },
      { words: ["fish", "The", "in", "swims", "water"], correctOrder: ["The", "fish", "swims", "in", "water"] },
    ],
  },
};