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
    level4: {
      clickPop: [
        { prompt: "Click the describing words", words: ["The", "big", "red", "apple", "fell", "soft", "down"], correctWords: ["big", "red", "soft"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The bird", "in the sky."], correctWord: "flies", distractors: ["runs", "purple"] },
      ],
      punctuationPicker: [
        { sentence: "The bunny hops so fast", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["ate", "The", "apple", "rabbit", "the"], correctOrder: ["The", "rabbit", "ate", "the", "apple"] },
      ],
    },
    level5: {
      clickPop: [
        { prompt: "Click the words that are things (nouns)", words: ["The", "cat", "quickly", "ate", "fish", "a", "and", "bird", "ran"], correctWords: ["cat", "fish", "bird"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The little", "is lost."], correctWord: "puppy", distractors: ["quickly", "green"] },
      ],
      punctuationPicker: [
        { sentence: "Did you see the rainbow", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["the", "bed", "under", "cat", "The", "hid"], correctOrder: ["The", "cat", "hid", "under", "the", "bed"] },
      ],
    },
    level6: {
      clickPop: [
        { prompt: "Click the action words (verbs)", words: ["The", "frog", "jumped", "and", "splashed", "into", "the", "cold", "pond", "swam"], correctWords: ["jumped", "splashed", "swam"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The happy", "danced in the rain."], correctWord: "frog", distractors: ["red", "slowly"] },
      ],
      punctuationPicker: [
        { sentence: "Watch out for that bee", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["the", "sea", "by", "shells", "sells", "She"], correctOrder: ["She", "sells", "shells", "by", "the", "sea"] },
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
    level4: {
      clickPop: [
        { prompt: "Click the adjectives (describing words)", words: ["The", "clever", "fox", "outsmarted", "the", "lazy", "slow", "dog"], correctWords: ["clever", "lazy", "slow"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The children", "to school every day."], correctWord: "walked", distractors: ["swam", "beautiful"] },
      ],
      punctuationPicker: [
        { sentence: "The stars are so bright tonight", correctPunctuation: '.' },
      ],
      sentenceBuilder: [
        { words: ["the", "red", "picked", "boy", "flowers", "The"], correctOrder: ["The", "boy", "picked", "the", "red", "flowers"] },
      ],
    },
    level5: {
      clickPop: [
        { prompt: "Click the plural words (more than one)", words: ["cats", "dog", "trees", "a", "bird", "clouds", "the", "sky", "stars"], correctWords: ["cats", "trees", "clouds", "stars"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The scientist", "the colorful butterfly."], correctWord: "studied", distractors: ["painted", "under"] },
      ],
      punctuationPicker: [
        { sentence: "How many legs does an octopus have", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["homework", "She", "finished", "outside", "her"], correctOrder: ["She", "finished", "her", "homework", "outside"] },
      ],
    },
    level6: {
      clickPop: [
        { prompt: "Click the words in the past tense", words: ["Yesterday", "we", "played", "games", "and", "ate", "cookies", "while", "it", "rained"], correctWords: ["played", "ate", "rained"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The ancient", "stood tall for thousands of years."], correctWord: "pyramid", distractors: ["quickly", "beneath"] },
      ],
      punctuationPicker: [
        { sentence: "I can't believe we won the championship", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["the", "carefully", "river", "The", "crossed", "explorer"], correctOrder: ["The", "explorer", "carefully", "crossed", "the", "river"] },
      ],
    },
  },
};