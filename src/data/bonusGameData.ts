"use client";

import type { Difficulty } from './difficulties';

export interface BalloonData {
  content: string; // The text/letter on the balloon, or the color name
  isCorrect: boolean;
}

export interface BonusRound {
  prompt: string;
  type: 'color' | 'word' | 'letter' | 'sightWord' | 'capitalization';
  balloons: BalloonData[];
}

type BonusGameData = Record<Difficulty, BonusRound[]>;

export const bonusGameData: BonusGameData = {
  age5: [
    {
      prompt: "Pop all the red balloons.",
      type: 'color',
      balloons: [
        { content: 'red', isCorrect: true }, { content: 'blue', isCorrect: false },
        { content: 'red', isCorrect: true }, { content: 'yellow', isCorrect: false },
        { content: 'green', isCorrect: false }, { content: 'red', isCorrect: true },
        { content: 'blue', isCorrect: false }, { content: 'red', isCorrect: true },
        { content: 'yellow', isCorrect: false }, { content: 'red', isCorrect: true },
        { content: 'green', isCorrect: false }, { content: 'red', isCorrect: true },
        { content: 'blue', isCorrect: false }, { content: 'red', isCorrect: true },
        { content: 'yellow', isCorrect: false },
      ]
    },
    {
      prompt: "Pop all the animal names.",
      type: 'word',
      balloons: [
        { content: 'cat', isCorrect: true }, { content: 'run', isCorrect: false },
        { content: 'dog', isCorrect: true }, { content: 'sun', isCorrect: false },
        { content: 'pig', isCorrect: true }, { content: 'hat', isCorrect: false },
        { content: 'fox', isCorrect: true }, { content: 'box', isCorrect: false },
        { content: 'hen', isCorrect: true }, { content: 'pen', isCorrect: false },
        { content: 'cow', isCorrect: true }, { content: 'now', isCorrect: false },
        { content: 'bug', isCorrect: true }, { content: 'rug', isCorrect: false },
        { content: 'ant', isCorrect: true },
      ]
    },
    {
      prompt: "Pop all the pink balloons.",
      type: 'color',
      balloons: [
        { content: 'pink', isCorrect: true }, { content: 'blue', isCorrect: false },
        { content: 'pink', isCorrect: true }, { content: 'green', isCorrect: false },
        { content: 'yellow', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'red', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'purple', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'blue', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'green', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'yellow', isCorrect: false },
      ]
    },
    {
      prompt: "Pop all the balloons with the letter A.",
      type: 'letter',
      balloons: [
        { content: 'A', isCorrect: true }, { content: 'B', isCorrect: false },
        { content: 'C', isCorrect: false }, { content: 'A', isCorrect: true },
        { content: 'D', isCorrect: false }, { content: 'E', isCorrect: false },
        { content: 'A', isCorrect: true }, { content: 'F', isCorrect: false },
        { content: 'G', isCorrect: false }, { content: 'A', isCorrect: true },
        { content: 'H', isCorrect: false }, { content: 'I', isCorrect: false },
        { content: 'A', isCorrect: true }, { content: 'J', isCorrect: false },
        { content: 'A', isCorrect: true },
      ]
    }
  ],
  age7: [
    {
      prompt: "Pop the words that start with a capital letter.",
      type: 'capitalization',
      balloons: [
        { content: 'The', isCorrect: true }, { content: 'cat', isCorrect: false },
        { content: 'runs', isCorrect: false }, { content: 'Fast', isCorrect: true },
        { content: 'away', isCorrect: false }, { content: 'Spot', isCorrect: true },
        { content: 'is', isCorrect: false }, { content: 'his', isCorrect: false },
        { content: 'name', isCorrect: false }, { content: 'He', isCorrect: true },
        { content: 'likes', isCorrect: false }, { content: 'to', isCorrect: false },
        { content: 'play', isCorrect: false }, { content: 'Every', isCorrect: true },
        { content: 'day', isCorrect: false }, { content: 'is', isCorrect: false },
        { content: 'fun', isCorrect: false }, { content: 'With', isCorrect: true },
        { content: 'him', isCorrect: false }, { content: 'Indeed', isCorrect: true },
      ]
    },
    {
      prompt: "Pop the balloons that say 'the'.",
      type: 'sightWord',
      balloons: [
        { content: 'a', isCorrect: false }, { content: 'is', isCorrect: false },
        { content: 'the', isCorrect: true }, { content: 'it', isCorrect: false },
        { content: 'in', isCorrect: false }, { content: 'on', isCorrect: false },
        { content: 'and', isCorrect: false }, { content: 'the', isCorrect: true },
        { content: 'of', isCorrect: false }, { content: 'to', isCorrect: false },
        { content: 'was', isCorrect: false }, { content: 'the', isCorrect: true },
        { content: 'for', isCorrect: false }, { content: 'he', isCorrect: false },
        { content: 'that', isCorrect: false }, { content: 'the', isCorrect: true },
        { content: 'with', isCorrect: false }, { content: 'as', isCorrect: false },
        { content: 'I', isCorrect: false }, { content: 'the', isCorrect: true },
      ]
    },
    {
      prompt: "Pop all the pink balloons.",
      type: 'color',
      balloons: [
        { content: 'pink', isCorrect: true }, { content: 'blue', isCorrect: false },
        { content: 'pink', isCorrect: true }, { content: 'green', isCorrect: false },
        { content: 'yellow', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'red', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'purple', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'blue', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'green', isCorrect: false }, { content: 'pink', isCorrect: true },
        { content: 'yellow', isCorrect: false },
      ]
    },
    {
      prompt: "Pop all the blue balloons.",
      type: 'color',
      balloons: [
        { content: 'blue', isCorrect: true }, { content: 'red', isCorrect: false },
        { content: 'yellow', isCorrect: false }, { content: 'blue', isCorrect: true },
        { content: 'green', isCorrect: false }, { content: 'purple', isCorrect: false },
        { content: 'blue', isCorrect: true }, { content: 'orange', isCorrect: false },
        { content: 'red', isCorrect: false }, { content: 'blue', isCorrect: true },
        { content: 'yellow', isCorrect: false }, { content: 'green', isCorrect: false },
        { content: 'blue', isCorrect: true }, { content: 'purple', isCorrect: false },
        { content: 'orange', isCorrect: false }, { content: 'blue', isCorrect: true },
        { content: 'red', isCorrect: false }, { content: 'yellow', isCorrect: false },
        { content: 'blue', isCorrect: true }, { content: 'green', isCorrect: false },
      ]
    }
  ],
  age6: [
    {
      prompt: "Pop all the green balloons.",
      type: 'color',
      balloons: [
        { content: 'green', isCorrect: true }, { content: 'red', isCorrect: false },
        { content: 'green', isCorrect: true }, { content: 'blue', isCorrect: false },
        { content: 'yellow', isCorrect: false }, { content: 'green', isCorrect: true },
        { content: 'purple', isCorrect: false }, { content: 'green', isCorrect: true },
        { content: 'red', isCorrect: false }, { content: 'green', isCorrect: true },
        { content: 'blue', isCorrect: false }, { content: 'green', isCorrect: true },
        { content: 'pink', isCorrect: false }, { content: 'green', isCorrect: true },
        { content: 'yellow', isCorrect: false },
      ]
    },
    {
      prompt: "Pop all the animal names.",
      type: 'word',
      balloons: [
        { content: 'frog', isCorrect: true }, { content: 'jump', isCorrect: false },
        { content: 'duck', isCorrect: true }, { content: 'cup', isCorrect: false },
        { content: 'goat', isCorrect: true }, { content: 'boat', isCorrect: false },
        { content: 'bear', isCorrect: true }, { content: 'chair', isCorrect: false },
        { content: 'lion', isCorrect: true }, { content: 'rain', isCorrect: false },
        { content: 'mouse', isCorrect: true }, { content: 'house', isCorrect: false },
        { content: 'seal', isCorrect: true }, { content: 'wheel', isCorrect: false },
        { content: 'owl', isCorrect: true },
      ]
    },
    {
      prompt: "Pop all the balloons with the letter S.",
      type: 'letter',
      balloons: [
        { content: 'S', isCorrect: true }, { content: 'B', isCorrect: false },
        { content: 'M', isCorrect: false }, { content: 'S', isCorrect: true },
        { content: 'T', isCorrect: false }, { content: 'R', isCorrect: false },
        { content: 'S', isCorrect: true }, { content: 'P', isCorrect: false },
        { content: 'N', isCorrect: false }, { content: 'S', isCorrect: true },
        { content: 'D', isCorrect: false }, { content: 'L', isCorrect: false },
        { content: 'S', isCorrect: true }, { content: 'K', isCorrect: false },
        { content: 'S', isCorrect: true },
      ]
    },
    {
      prompt: "Pop the balloons that say 'and'.",
      type: 'sightWord',
      balloons: [
        { content: 'and', isCorrect: true }, { content: 'the', isCorrect: false },
        { content: 'an', isCorrect: false }, { content: 'and', isCorrect: true },
        { content: 'end', isCorrect: false }, { content: 'in', isCorrect: false },
        { content: 'and', isCorrect: true }, { content: 'on', isCorrect: false },
        { content: 'at', isCorrect: false }, { content: 'and', isCorrect: true },
        { content: 'as', isCorrect: false }, { content: 'is', isCorrect: false },
        { content: 'and', isCorrect: true }, { content: 'it', isCorrect: false },
        { content: 'and', isCorrect: true },
      ]
    }
  ],
  age8: [
    {
      prompt: "Pop the words that start with a capital letter.",
      type: 'capitalization',
      balloons: [
        { content: 'Africa', isCorrect: true }, { content: 'jungle', isCorrect: false },
        { content: 'tiger', isCorrect: false }, { content: 'Monday', isCorrect: true },
        { content: 'river', isCorrect: false }, { content: 'Sahara', isCorrect: true },
        { content: 'desert', isCorrect: false }, { content: 'birds', isCorrect: false },
        { content: 'London', isCorrect: true }, { content: 'forest', isCorrect: false },
        { content: 'July', isCorrect: true }, { content: 'ocean', isCorrect: false },
        { content: 'Amazon', isCorrect: true }, { content: 'island', isCorrect: false },
        { content: 'Friday', isCorrect: true }, { content: 'valley', isCorrect: false },
        { content: 'Nile', isCorrect: true }, { content: 'mountain', isCorrect: false },
      ]
    },
    {
      prompt: "Pop all the action words (verbs).",
      type: 'word',
      balloons: [
        { content: 'gallop', isCorrect: true }, { content: 'saddle', isCorrect: false },
        { content: 'swim', isCorrect: true }, { content: 'fin', isCorrect: false },
        { content: 'climb', isCorrect: true }, { content: 'branch', isCorrect: false },
        { content: 'pounce', isCorrect: true }, { content: 'claw', isCorrect: false },
        { content: 'soar', isCorrect: true }, { content: 'feather', isCorrect: false },
        { content: 'burrow', isCorrect: true }, { content: 'tunnel', isCorrect: false },
        { content: 'slither', isCorrect: true }, { content: 'scale', isCorrect: false },
        { content: 'leap', isCorrect: true }, { content: 'meadow', isCorrect: false },
      ]
    },
    {
      prompt: "Pop the balloons that say 'their'.",
      type: 'sightWord',
      balloons: [
        { content: 'there', isCorrect: false }, { content: 'their', isCorrect: true },
        { content: 'they', isCorrect: false }, { content: 'their', isCorrect: true },
        { content: 'theirs', isCorrect: false }, { content: 'them', isCorrect: false },
        { content: 'their', isCorrect: true }, { content: 'these', isCorrect: false },
        { content: 'then', isCorrect: false }, { content: 'their', isCorrect: true },
        { content: 'that', isCorrect: false }, { content: 'this', isCorrect: false },
        { content: 'their', isCorrect: true }, { content: 'those', isCorrect: false },
        { content: 'their', isCorrect: true }, { content: 'they', isCorrect: false },
      ]
    },
    {
      prompt: "Pop all the purple balloons.",
      type: 'color',
      balloons: [
        { content: 'purple', isCorrect: true }, { content: 'red', isCorrect: false },
        { content: 'purple', isCorrect: true }, { content: 'green', isCorrect: false },
        { content: 'blue', isCorrect: false }, { content: 'purple', isCorrect: true },
        { content: 'yellow', isCorrect: false }, { content: 'purple', isCorrect: true },
        { content: 'pink', isCorrect: false }, { content: 'purple', isCorrect: true },
        { content: 'orange', isCorrect: false }, { content: 'purple', isCorrect: true },
        { content: 'red', isCorrect: false }, { content: 'purple', isCorrect: true },
        { content: 'green', isCorrect: false }, { content: 'purple', isCorrect: true },
        { content: 'blue', isCorrect: false }, { content: 'yellow', isCorrect: false },
      ]
    }
  ],
  advanced56: [
    {
      prompt: "Pop the words that rhyme with 'bug'.",
      type: 'word',
      balloons: [
        { content: 'rug', isCorrect: true }, { content: 'bag', isCorrect: false },
        { content: 'hug', isCorrect: true }, { content: 'big', isCorrect: false },
        { content: 'mug', isCorrect: true }, { content: 'bog', isCorrect: false },
        { content: 'jug', isCorrect: true }, { content: 'bun', isCorrect: false },
        { content: 'dug', isCorrect: true }, { content: 'dog', isCorrect: false },
        { content: 'tug', isCorrect: true }, { content: 'tag', isCorrect: false },
        { content: 'pug', isCorrect: true }, { content: 'pig', isCorrect: false },
        { content: 'snug', isCorrect: true },
      ]
    },
    {
      prompt: "Pop all the animal names.",
      type: 'word',
      balloons: [
        { content: 'zebra', isCorrect: true }, { content: 'jacket', isCorrect: false },
        { content: 'panda', isCorrect: true }, { content: 'pencil', isCorrect: false },
        { content: 'rabbit', isCorrect: true }, { content: 'basket', isCorrect: false },
        { content: 'monkey', isCorrect: true }, { content: 'window', isCorrect: false },
        { content: 'turtle', isCorrect: true }, { content: 'button', isCorrect: false },
        { content: 'parrot', isCorrect: true }, { content: 'wagon', isCorrect: false },
        { content: 'tiger', isCorrect: true }, { content: 'ladder', isCorrect: false },
        { content: 'kitten', isCorrect: true },
      ]
    },
    {
      prompt: "Pop the balloons with the letter B.",
      type: 'letter',
      balloons: [
        { content: 'B', isCorrect: true }, { content: 'D', isCorrect: false },
        { content: 'P', isCorrect: false }, { content: 'B', isCorrect: true },
        { content: 'R', isCorrect: false }, { content: 'B', isCorrect: true },
        { content: 'E', isCorrect: false }, { content: 'B', isCorrect: true },
        { content: 'F', isCorrect: false }, { content: 'B', isCorrect: true },
        { content: 'H', isCorrect: false }, { content: 'B', isCorrect: true },
        { content: 'L', isCorrect: false }, { content: 'B', isCorrect: true },
        { content: 'T', isCorrect: false },
      ]
    },
    {
      prompt: "Pop the words that start with a capital letter.",
      type: 'capitalization',
      balloons: [
        { content: 'Spring', isCorrect: true }, { content: 'leaf', isCorrect: false },
        { content: 'happy', isCorrect: false }, { content: 'River', isCorrect: true },
        { content: 'jump', isCorrect: false }, { content: 'Bear', isCorrect: true },
        { content: 'small', isCorrect: false }, { content: 'Sunday', isCorrect: true },
        { content: 'green', isCorrect: false }, { content: 'Apple', isCorrect: true },
        { content: 'wind', isCorrect: false }, { content: 'Tom', isCorrect: true },
        { content: 'fast', isCorrect: false }, { content: 'Moon', isCorrect: true },
        { content: 'rain', isCorrect: false },
      ]
    }
  ],
  advanced78: [
    {
      prompt: "Pop the words that mean 'happy' (synonyms).",
      type: 'word',
      balloons: [
        { content: 'joyful', isCorrect: true }, { content: 'gloomy', isCorrect: false },
        { content: 'cheerful', isCorrect: true }, { content: 'angry', isCorrect: false },
        { content: 'glad', isCorrect: true }, { content: 'tired', isCorrect: false },
        { content: 'delighted', isCorrect: true }, { content: 'sad', isCorrect: false },
        { content: 'merry', isCorrect: true }, { content: 'bored', isCorrect: false },
        { content: 'pleased', isCorrect: true }, { content: 'upset', isCorrect: false },
        { content: 'content', isCorrect: true }, { content: 'cross', isCorrect: false },
        { content: 'jolly', isCorrect: true }, { content: 'grumpy', isCorrect: false },
      ]
    },
    {
      prompt: "Pop the words spelled correctly.",
      type: 'word',
      balloons: [
        { content: 'friend', isCorrect: true }, { content: 'freind', isCorrect: false },
        { content: 'because', isCorrect: true }, { content: 'becuase', isCorrect: false },
        { content: 'people', isCorrect: true }, { content: 'peeple', isCorrect: false },
        { content: 'beautiful', isCorrect: true }, { content: 'beutiful', isCorrect: false },
        { content: 'school', isCorrect: true }, { content: 'skool', isCorrect: false },
        { content: 'enough', isCorrect: true }, { content: 'enuff', isCorrect: false },
        { content: 'water', isCorrect: true }, { content: 'watter', isCorrect: false },
        { content: 'animal', isCorrect: true }, { content: 'animul', isCorrect: false },
      ]
    },
    {
      prompt: "Pop the balloons that say 'they're'.",
      type: 'sightWord',
      balloons: [
        { content: "they're", isCorrect: true }, { content: 'there', isCorrect: false },
        { content: 'their', isCorrect: false }, { content: "they're", isCorrect: true },
        { content: 'theyre', isCorrect: false }, { content: 'they', isCorrect: false },
        { content: "they're", isCorrect: true }, { content: 'theirs', isCorrect: false },
        { content: 'them', isCorrect: false }, { content: "they're", isCorrect: true },
        { content: 'there', isCorrect: false }, { content: 'their', isCorrect: false },
        { content: "they're", isCorrect: true }, { content: 'these', isCorrect: false },
        { content: "they're", isCorrect: true }, { content: 'those', isCorrect: false },
      ]
    },
    {
      prompt: "Pop the words that are nouns (people, places, things).",
      type: 'word',
      balloons: [
        { content: 'mountain', isCorrect: true }, { content: 'quickly', isCorrect: false },
        { content: 'teacher', isCorrect: true }, { content: 'bright', isCorrect: false },
        { content: 'castle', isCorrect: true }, { content: 'gently', isCorrect: false },
        { content: 'ocean', isCorrect: true }, { content: 'jumped', isCorrect: false },
        { content: 'doctor', isCorrect: true }, { content: 'shiny', isCorrect: false },
        { content: 'island', isCorrect: true }, { content: 'running', isCorrect: false },
        { content: 'village', isCorrect: true }, { content: 'loudly', isCorrect: false },
        { content: 'forest', isCorrect: true }, { content: 'happy', isCorrect: false },
      ]
    }
  ]
};