"use client";

import type { Difficulty } from './difficulties';

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

export type GameData = Record<Difficulty, { [level: string]: LevelData }>;

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
  age6: {
    level1: {
      clickPop: [
        { prompt: "Click the animal words", words: ["The", "duck", "swims", "and", "the", "frog", "hops"], correctWords: ["duck", "frog"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["A baby", "is called a chick."], correctWord: "hen", distractors: ["road", "loud"] },
      ],
      punctuationPicker: [
        { sentence: "The puppy likes to play", correctPunctuation: '.' },
      ],
      sentenceBuilder: [
        { words: ["dog", "The", "barks", "loud"], correctOrder: ["The", "dog", "barks", "loud"] },
      ],
    },
    level2: {
      clickPop: [
        { prompt: "Click the words that start with a capital letter", words: ["Bees", "buzz", "in", "the", "Garden", "all", "day"], correctWords: ["Bees", "Garden"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The", "owl hoots at night."], correctWord: "wise", distractors: ["wet", "wagon"] },
      ],
      punctuationPicker: [
        { sentence: "Where did the kitten go", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["jumps", "frog", "The", "green"], correctOrder: ["The", "green", "frog", "jumps"] },
      ],
    },
    level3: {
      clickPop: [
        { prompt: "Click the joining words (and, but, or)", words: ["A", "cat", "and", "a", "dog", "play", "but", "a", "fish", "swims"], correctWords: ["and", "but"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The turtle moves very", "."], correctWord: "slowly", distractors: ["barn", "happily"] },
      ],
      punctuationPicker: [
        { sentence: "Look at that giant whale", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["nest", "in", "a", "bird", "The", "sits"], correctOrder: ["The", "bird", "sits", "in", "a", "nest"] },
      ],
    },
    level4: {
      clickPop: [
        { prompt: "Click the describing words (adjectives)", words: ["The", "tall", "giraffe", "ate", "soft", "green", "leaves"], correctWords: ["tall", "soft", "green"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The fox", "over the fence."], correctWord: "jumped", distractors: ["yellow", "softly"] },
      ],
      punctuationPicker: [
        { sentence: "Do you like to feed the ducks", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["the", "milk", "cat", "The", "drank", "warm"], correctOrder: ["The", "cat", "drank", "the", "warm", "milk"] },
      ],
    },
    level5: {
      clickPop: [
        { prompt: "Click the words for more than one (plurals)", words: ["dog", "cats", "bird", "frogs", "fish", "bees", "an", "egg"], correctWords: ["cats", "frogs", "bees"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The hungry", "looked for nuts."], correctWord: "squirrel", distractors: ["quietly", "purple"] },
      ],
      punctuationPicker: [
        { sentence: "The horse runs so fast", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["pond", "the", "by", "sat", "frog", "The"], correctOrder: ["The", "frog", "sat", "by", "the", "pond"] },
      ],
    },
    level6: {
      clickPop: [
        { prompt: "Click the action words (verbs)", words: ["The", "bird", "flew", "high", "and", "sang", "a", "happy", "song", "then", "landed"], correctWords: ["flew", "sang", "landed"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The busy bee", "from flower to flower."], correctWord: "buzzed", distractors: ["sleepy", "under"] },
      ],
      punctuationPicker: [
        { sentence: "Can a kangaroo really hop", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["the", "garden", "in", "grew", "The", "flowers"], correctOrder: ["The", "flowers", "grew", "in", "the", "garden"] },
      ],
    },
  },
  age8: {
    level1: {
      clickPop: [
        { prompt: "Click the nouns (people, places, things)", words: ["The", "farmer", "rode", "his", "tractor", "to", "town"], correctWords: ["farmer", "tractor", "town"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The dolphin leaped above the", "."], correctWord: "waves", distractors: ["quietly", "tomorrow"] },
      ],
      punctuationPicker: [
        { sentence: "Penguins live near the cold sea", correctPunctuation: '.' },
      ],
      sentenceBuilder: [
        { words: ["clever", "The", "monkey", "a", "found", "banana"], correctOrder: ["The", "clever", "monkey", "found", "a", "banana"] },
      ],
    },
    level2: {
      clickPop: [
        { prompt: "Click the adverbs (how something is done)", words: ["The", "cheetah", "ran", "quickly", "and", "turned", "sharply", "left"], correctWords: ["quickly", "sharply"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The", "eagle soared over the mountains."], correctWord: "mighty", distractors: ["Monday", "loudly"] },
      ],
      punctuationPicker: [
        { sentence: "Have you ever seen a shooting star", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["river", "swam", "across", "The", "the", "otter"], correctOrder: ["The", "otter", "swam", "across", "the", "river"] },
      ],
    },
    level3: {
      clickPop: [
        { prompt: "Click the words in the past tense", words: ["Yesterday", "the", "wolves", "howled", "and", "the", "owls", "watched", "from", "trees"], correctWords: ["howled", "watched"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The scientist", "the strange new plant."], correctWord: "discovered", distractors: ["beneath", "purple"] },
      ],
      punctuationPicker: [
        { sentence: "What an amazing rainbow that is", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["the", "carefully", "honey", "bear", "The", "tasted"], correctOrder: ["The", "bear", "carefully", "tasted", "the", "honey"] },
      ],
    },
    level4: {
      clickPop: [
        { prompt: "Click the compound words", words: ["The", "butterfly", "flew", "past", "the", "sunflower", "near", "the", "waterfall"], correctWords: ["butterfly", "sunflower", "waterfall"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The crab hid", "the smooth rock."], correctWord: "beneath", distractors: ["because", "happily"] },
      ],
      punctuationPicker: [
        { sentence: "The astronauts floated inside the rocket", correctPunctuation: '.' },
      ],
      sentenceBuilder: [
        { words: ["the", "stars", "studied", "scientist", "bright", "The"], correctOrder: ["The", "scientist", "studied", "the", "bright", "stars"] },
      ],
    },
    level5: {
      clickPop: [
        { prompt: "Click the pronouns (he, she, it, they)", words: ["Maya", "fed", "her", "pony", "and", "she", "brushed", "it", "while", "they", "rested"], correctWords: ["her", "she", "it", "they"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The brave knight", "the dragon's cave."], correctWord: "explored", distractors: ["sleepy", "slowly"] },
      ],
      punctuationPicker: [
        { sentence: "How do bats find food in the dark", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["before", "her", "She", "finished", "lunch", "homework"], correctOrder: ["She", "finished", "her", "homework", "before", "lunch"] },
      ],
    },
    level6: {
      clickPop: [
        { prompt: "Click the words that mean 'happy' (synonyms)", words: ["The", "joyful", "children", "felt", "glad", "and", "cheerful", "but", "tired"], correctWords: ["joyful", "glad", "cheerful"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The ancient castle", "on the hill for centuries."], correctWord: "stood", distractors: ["quietly", "between"] },
      ],
      punctuationPicker: [
        { sentence: "We finally reached the mountain top", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["the", "through", "explorer", "jungle", "The", "journeyed", "thick"], correctOrder: ["The", "explorer", "journeyed", "through", "the", "thick", "jungle"] },
      ],
    },
  },
  advanced56: {
    level1: {
      clickPop: [
        { prompt: "Click the words that rhyme with 'cat'", words: ["hat", "dog", "bat", "sun", "mat", "pig"], correctWords: ["hat", "bat", "mat"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The spotted", "climbed the tall tree."], correctWord: "leopard", distractors: ["puddle", "gently"] },
      ],
      punctuationPicker: [
        { sentence: "What a noisy parrot that is", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["pond", "the", "duck", "in", "splashed", "The"], correctOrder: ["The", "duck", "splashed", "in", "the", "pond"] },
      ],
    },
    level2: {
      clickPop: [
        { prompt: "Click the action words (verbs)", words: ["The", "rabbit", "hopped", "twitched", "its", "nose", "and", "nibbled", "grass"], correctWords: ["hopped", "twitched", "nibbled"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The", "hedgehog rolled into a ball."], correctWord: "prickly", distractors: ["purple", "quickly"] },
      ],
      punctuationPicker: [
        { sentence: "Why do snails carry their shells", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["fast", "very", "cheetah", "The", "runs"], correctOrder: ["The", "cheetah", "runs", "very", "fast"] },
      ],
    },
    level3: {
      clickPop: [
        { prompt: "Click the describing words (adjectives)", words: ["The", "fluffy", "yellow", "chick", "peeped", "softly", "and", "warm"], correctWords: ["fluffy", "yellow", "warm"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The owl can", "its head all the way around."], correctWord: "turn", distractors: ["table", "bright"] },
      ],
      punctuationPicker: [
        { sentence: "The tiny ant carried a huge leaf", correctPunctuation: '.' },
      ],
      sentenceBuilder: [
        { words: ["sky", "the", "flew", "high", "in", "bird", "The"], correctOrder: ["The", "bird", "flew", "high", "in", "the", "sky"] },
      ],
    },
    level4: {
      clickPop: [
        { prompt: "Click the words for more than one (plurals)", words: ["fox", "foxes", "wolf", "wolves", "mouse", "mice", "a", "den"], correctWords: ["foxes", "wolves", "mice"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The clever crow", "the lid off the jar."], correctWord: "lifted", distractors: ["beneath", "shiny"] },
      ],
      punctuationPicker: [
        { sentence: "How many spots does a ladybug have", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["the", "honey", "sweet", "bear", "The", "ate"], correctOrder: ["The", "bear", "ate", "the", "sweet", "honey"] },
      ],
    },
    level5: {
      clickPop: [
        { prompt: "Click the compound words", words: ["The", "ladybug", "sat", "on", "a", "sunflower", "by", "the", "rainbow"], correctWords: ["ladybug", "sunflower", "rainbow"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The dolphin is a very", "animal."], correctWord: "playful", distractors: ["Tuesday", "loudly"] },
      ],
      punctuationPicker: [
        { sentence: "Watch out, the geese are coming", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["under", "log", "the", "frog", "The", "hid", "wet"], correctOrder: ["The", "frog", "hid", "under", "the", "wet", "log"] },
      ],
    },
    level6: {
      clickPop: [
        { prompt: "Click the words that mean 'big'", words: ["The", "giant", "huge", "elephant", "and", "the", "enormous", "tiny", "whale"], correctWords: ["giant", "huge", "enormous"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The chameleon can", "its color to hide."], correctWord: "change", distractors: ["between", "happily"] },
      ],
      punctuationPicker: [
        { sentence: "Do baby kangaroos ride in a pouch", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["the", "tall", "giraffe", "leaves", "The", "from", "tree", "ate"], correctOrder: ["The", "giraffe", "ate", "leaves", "from", "the", "tall", "tree"] },
      ],
    },
  },
  advanced78: {
    level1: {
      clickPop: [
        { prompt: "Click the adjectives (describing words)", words: ["The", "enormous", "grizzly", "bear", "caught", "a", "slippery", "silver", "fish"], correctWords: ["enormous", "grizzly", "slippery", "silver"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The chameleon", "its skin to match the leaves."], correctWord: "camouflaged", distractors: ["yesterday", "loudly"] },
      ],
      punctuationPicker: [
        { sentence: "The octopus squeezed through the narrow gap", correctPunctuation: '.' },
      ],
      sentenceBuilder: [
        { words: ["silently", "owl", "The", "hunted", "snowy", "at", "night"], correctOrder: ["The", "snowy", "owl", "hunted", "silently", "at", "night"] },
      ],
    },
    level2: {
      clickPop: [
        { prompt: "Click the verbs (action words)", words: ["The", "salmon", "leaped", "struggled", "upstream", "and", "finally", "reached", "the", "calm", "lake"], correctWords: ["leaped", "struggled", "reached"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The herd of elephants traveled", "across the dry plain."], correctWord: "wearily", distractors: ["beautiful", "rivers"] },
      ],
      punctuationPicker: [
        { sentence: "How long can a camel survive without water", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["coral", "the", "fish", "darted", "colorful", "Tiny", "reef", "through"], correctOrder: ["Tiny", "fish", "darted", "through", "the", "colorful", "coral", "reef"] },
      ],
    },
    level3: {
      clickPop: [
        { prompt: "Click the words that mean 'scared' (synonyms)", words: ["The", "frightened", "deer", "felt", "terrified", "and", "nervous", "but", "brave", "calm"], correctWords: ["frightened", "terrified", "nervous"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The spider spun a", "web between the branches."], correctWord: "delicate", distractors: ["because", "swiftly"] },
      ],
      punctuationPicker: [
        { sentence: "We could not believe how high the eagle flew", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["the", "through", "wolf", "forest", "lone", "The", "prowled", "dark"], correctOrder: ["The", "lone", "wolf", "prowled", "through", "the", "dark", "forest"] },
      ],
    },
    level4: {
      clickPop: [
        { prompt: "Click the words that mean the opposite of 'fast'", words: ["The", "sloth", "moved", "slowly", "and", "sluggishly", "while", "the", "quick", "rapid", "hare", "rested"], correctWords: ["slowly", "sluggishly"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The volcano", "ash high into the sky."], correctWord: "erupted", distractors: ["whenever", "purple"] },
      ],
      punctuationPicker: [
        { sentence: "Did you know an octopus has three hearts", correctPunctuation: '?' },
      ],
      sentenceBuilder: [
        { words: ["mountain", "the", "explorers", "climbed", "The", "steep", "carefully"], correctOrder: ["The", "explorers", "carefully", "climbed", "the", "steep", "mountain"] },
      ],
    },
    level5: {
      clickPop: [
        { prompt: "Click the conjunctions (joining words)", words: ["The", "storm", "was", "loud", "and", "dark", "but", "we", "stayed", "inside", "because", "it", "rained"], correctWords: ["and", "but", "because"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The migrating geese", "thousands of miles each year."], correctWord: "travel", distractors: ["delicious", "beneath"] },
      ],
      punctuationPicker: [
        { sentence: "The ancient redwood tree was taller than a building", correctPunctuation: '.' },
      ],
      sentenceBuilder: [
        { words: ["the", "scientist", "the", "rare", "studied", "comet", "carefully", "The"], correctOrder: ["The", "scientist", "carefully", "studied", "the", "rare", "comet"] },
      ],
    },
    level6: {
      clickPop: [
        { prompt: "Click the abstract nouns (ideas you cannot touch)", words: ["The", "team", "showed", "courage", "kindness", "and", "honesty", "during", "the", "long", "journey"], correctWords: ["courage", "kindness", "honesty"] },
      ],
      dragTheMissingWord: [
        { sentenceParts: ["The curious inventor", "a machine that could fly."], correctWord: "designed", distractors: ["meanwhile", "sparkly"] },
      ],
      punctuationPicker: [
        { sentence: "I cannot believe we sailed all the way around the island", correctPunctuation: '!' },
      ],
      sentenceBuilder: [
        { words: ["the", "ocean", "submarine", "deep", "explored", "The", "mysterious", "silently"], correctOrder: ["The", "submarine", "silently", "explored", "the", "deep", "mysterious", "ocean"] },
      ],
    },
  },
};