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

interface LevelData {
  clickPop: ClickPopChallenge[];
  dragTheMissingWord: DragTheMissingWordChallenge[];
  punctuationPicker: PunctuationPickerChallenge[];
  sentenceBuilder: SentenceBuilderChallenge[];
}

export interface GameData {
  age5: {
    [level: string]: LevelData;
  };
  age7: {
    [level: string]: LevelData;
  };
}

export const gameData: GameData = {
  age5: {
    level1: {
      clickPop: [
        { prompt: "Click the animal words", words: ["cat", "runs", "the", "dog"], correctWords: ["cat", "dog"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["A cat can", "."], correctWord: "jump", distractors: ["sing", "blue"] },
      ],
      punctuationPicker: [
        { sentence: "The dog is happy", correctPunctuation: '.' },
      ],
      sentenceBuilder: [
        { words: ["cat", "The", "sat"], correctOrder: ["The", "cat", "sat"] },
      ],
    },
    level2: {
      clickPop: [
        { prompt: "Click the capitalized words", words: ["The", "fish", "swims", "fast"], correctWords: ["The"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The", "dog runs."], correctWord: "brown", distractors: ["table", "quick"] },
      ],
      punctuationPicker: [
        { sentence: "Look at the big bear", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["runs", "dog", "A", "fast"], correctOrder: ["A", "dog", "runs", "fast"] },
      ],
    },
    level3: {
      clickPop: [
        { prompt: "Click the small words", words: ["A", "big", "lion", "roars", "and", "it", "is", "loud"], correctWords: ["A", "it", "is"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["That is a", "bird."], correctWord: "small", distractors: ["heavy", "car"] },
      ],
      punctuationPicker: [
        { sentence: "Can a fish swim", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["is", "The", "big", "sun"], correctOrder: ["The", "sun", "is", "big"] },
      ],
    },
  },
  age7: {
    level1: {
      clickPop: [
        { prompt: "Click the action words", words: ["Birds", "fly", "high", "and", "sing"], correctWords: ["fly", "sing"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The striped", "is fast."], correctWord: "zebra", distractors: ["house", "slowly"] },
      ],
      punctuationPicker: [
        { sentence: "A giraffe is very tall", correctPunctuation: '.' },
      ],
      sentenceBuilder: [
        { words: ["fox", "The", "jumps", "quick"], correctOrder: ["The", "quick", "fox", "jumps"] },
      ],
    },
    level2: {
      clickPop: [
        { prompt: "Click the capitalized words", words: ["Monkeys", "like", "bananas", "They", "are", "yellow"], correctWords: ["Monkeys", "They"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["A big elephant", "water."], correctWord: "drinks", distractors: ["flies", "purple"] },
      ],
      punctuationPicker: [
        { sentence: "Do monkeys eat bananas", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["loudly", "roars", "A", "lion"], correctOrder: ["A", "lion", "roars", "loudly"] },
      ],
    },
    level3: {
      clickPop: [
        { prompt: "Click the animal words", words: ["A", "striped", "tiger", "and", "a", "tall", "giraffe", "live", "here"], correctWords: ["tiger", "giraffe"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["Can a penguin", "?"], correctWord: "swim", distractors: ["drive", "hot"] },
      ],
      punctuationPicker: [
        { sentence: "Wow, that lion is loud", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["fish", "The", "in", "swims", "water"], correctOrder: ["The", "fish", "swims", "in", "water"] },
      ],
    },
  },
};