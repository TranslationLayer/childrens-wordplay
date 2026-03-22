# Animal Sentence Fun! 🐾

An interactive word game for early readers that makes learning grammar fun through drag-and-drop challenges, balloon popping, and sentence building. Designed for children aged 5–7.

---

## What It Is

Animal Sentence Fun! is a browser-based literacy game with two difficulty tracks — one tuned for 5-year-olds and one for 7-year-olds. Players work through 6 levels of increasing difficulty, each containing four different mini-games that cover word recognition, punctuation, vocabulary, and sentence structure. A separate Bonus Game offers a fast-paced balloon-popping mode for extra practice.

---

## How to Play

### 1. Pick Your Age Group
On the start screen, choose **Age 5** or **Age 7**. This sets the vocabulary difficulty and game speed throughout the entire session.

### 2. Choose a Level
Six levels are available, colour-coded by difficulty (cyan → teal → emerald → amber → orange → rose). Higher levels introduce more complex grammar concepts and longer sentences.

### 3. Play Four Mini-Games
Each level runs through four mini-games in sequence, with a celebration screen between each one.

---

## Mini-Games

### Click Pop
A grid of words appears on screen. Tap all the words that match the prompt — for example, "Click the animal words" or "Click the describing words." Words glow green when correctly selected.

### Drag the Missing Word
A sentence is shown with one word missing. Three word tiles appear below — drag the correct one into the blank. The sentence completes and a success sound plays. Wrong answers shake and play an error sound.

### Punctuation Picker
A sentence needs its final punctuation. Three large circular buttons show `.` `?` and `!` — drag the right one into the drop zone at the end of the sentence.

### Sentence Builder
A scrambled set of word tiles appears at the bottom of the screen. Tap words in the correct order to build the sentence in the area above. When all words are placed, hit **Check My Sentence!** to verify.

---

## Bonus Game

A timed balloon-popping mode. Balloons float up from the bottom of the screen — tap the ones that match the current round's challenge before they escape. Each correct pop scores a point. Rounds last 60 seconds and vary by challenge type:

| Type | Example |
|---|---|
| **Color** | Pop all the pink balloons |
| **Word** | Pop all the animal names |
| **Letter** | Pop all the balloons with the letter A |
| **Sight word** | Pop the balloons that say "the" |
| **Capitalization** | Pop words that start with a capital letter |

Balloons that reach the top pop on their own. Incorrect pops shake but don't count against the score. Final score is shown at the end.

---

## Learning Progression

### Age 5
| Level | Concepts |
|---|---|
| 1 | Animal words, basic sentence structure, periods |
| 2 | Capitalisation, adjectives, exclamation marks |
| 3 | Small words (articles/pronouns), question marks |
| 4 | Describing words (adjectives), 5-word sentences |
| 5 | Things (nouns), 6-word sentences |
| 6 | Action words (verbs), complex sentence building |

### Age 7
| Level | Concepts |
|---|---|
| 1 | Action words (verbs), descriptive language, periods |
| 2 | Capitalisation, action verbs, question marks |
| 3 | Animal identification, exclamation marks, prepositional phrases |
| 4 | Adjectives, multi-word sentences |
| 5 | Plural words, complex sentences |
| 6 | Past tense verbs, advanced sentence building |

---

## Tech Stack

| Category | Libraries |
|---|---|
| Framework | React 18, TypeScript, Vite |
| Routing | React Router DOM 6 |
| Animation | Framer Motion |
| Styling | Tailwind CSS, shadcn/ui (Radix UI) |
| Audio | Howler.js |
| Icons | Lucide React |

---

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

```bash
npm run build    # production build
npm run preview  # preview the production build
```
