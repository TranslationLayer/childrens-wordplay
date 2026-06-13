# Animal Word Fun! 🐾

An interactive literacy playground for early readers (roughly ages **5–8**) that makes learning to read and write fun through drag-and-drop challenges, balloon popping, sentence building, crosswords, word searches, rhyming, and memory games.

---

## Who It's For

Children aged 5–8 are at wildly different reading stages, and the same child reads at different levels on different days. So instead of one-size-fits-all, the app offers:

- A **standard track for each age**: 5, 6, 7, and 8.
- Two **Advanced tracks** — one for the **5–6** range and one for the **7–8** range — for children who are reading ahead and want extra-tricky words, longer sentences, and faster games.

Everything is built for little fingers and developing eyes: big tap targets, large fonts, picture (emoji) hints, friendly sounds, and a guide character. A note on the start screen reminds grown-ups to **pick the age that fits the child's reading, not just their birthday**.

---

## What It Is

A browser-based literacy game. After choosing an age (and optionally Advanced mode), players land on a **game hub** with six activities. The flagship **Sentence Adventure** runs 6 colour-coded levels of four mini-games each; the rest are pick-up-and-play puzzles and games.

---

## How to Play

### 1. Pick Your Age
On the start screen, tap **Age 5, 6, 7, or 8**. Flip on **Advanced mode** first for the extra-tricky version of your range. This sets the vocabulary difficulty and game speed for the whole session (and is remembered between visits).

### 2. Pick a Game
The hub offers six activities: **Sentence Adventure**, **Balloon Pop**, **Crossword**, **Word Search**, **Rhyme Time**, and **Memory Match**.

### 3. Play
Sentence Adventure runs four mini-games per level with a celebration between each. The puzzles and games each end with a celebration when completed.

---

## Games

### Sentence Adventure
Six colour-coded levels (cyan → teal → emerald → amber → orange → rose), each running through four mini-games in sequence. Higher levels introduce more complex grammar and longer sentences.

#### Click Pop
A grid of words appears on screen. Tap all the words that match the prompt — for example, "Click the animal words" or "Click the describing words." Words glow green when correctly selected.

#### Drag the Missing Word
A sentence is shown with one word missing. Three word tiles appear below — drag the correct one into the blank. The sentence completes and a success sound plays. Wrong answers shake and play an error sound.

#### Punctuation Picker
A sentence needs its final punctuation. Three large circular buttons show `.` `?` and `!` — drag the right one into the drop zone at the end of the sentence.

#### Sentence Builder
A scrambled set of word tiles appears at the bottom of the screen. Tap words in the correct order to build the sentence in the area above. When all words are placed, hit **Check My Sentence!** to verify.

### Crossword
A big-letter crossword built from a spine word with shorter words branching off it. Each clue has a **picture (emoji) hint** and shows the word length, so young readers always have a way in. Type into the large cells and hit **Check** — correct letters turn green, wrong ones shake. Puzzles scale by age range (3 words for the youngest, up to a 5×5 grid for ages 8+).

### Word Search
Drag (or swipe on touch) across a grid of big letters to find the hidden animal words. Found words highlight green and strike through on the list. The grid grows and the search gets harder by range: 6×6 horizontal/vertical for the youngest, up to a 10×10 grid with diagonal **and** backwards words for ages 8+.

### Rhyme Time
A picture and a word appear ("Which word rhymes with 🐍 SNAKE?"). Tap the rhyming option from three big buttons. Wrong picks shake; correct picks advance through several rounds, getting trickier with age.

### Memory Match
A classic flip-and-match game where each pair is a **word and its matching picture** (e.g. the card `FROG` matches 🐸). Flip two cards to find a pair. 4 pairs for the youngest, up to 6 for ages 8+.

---

## Balloon Pop (Bonus)

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

## Tracks & Learning Progression

Each track sets the vocabulary, sentence length, and game pace (balloons appear and rise faster on older/advanced tracks).

| Track | For | Flavour |
|---|---|---|
| **Age 5** | First words | Animal words, CVC vocabulary, simple 3–4 word sentences |
| **Age 6** | Building readers | Joining words, plurals, capital letters, 4–5 word sentences |
| **Age 7** | Growing readers | Verbs, adjectives, prepositional phrases, longer sentences |
| **Age 8** | Confident readers | Adverbs, pronouns, compound words, synonyms, multi-clause sentences |
| **Advanced · 5–6** | Reading ahead (younger) | Rhyming, irregular plurals, compound words — roughly a year ahead |
| **Advanced · 7–8** | Reading ahead (older) | Synonyms, antonyms, abstract nouns, spelling, conjunctions |

Every Sentence Adventure track runs the same 6-level shape: word recognition → capitalisation/parts of speech → punctuation → adjectives → plurals/pronouns → verbs & advanced sentence building, with difficulty scaled to the track.

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

Then open `http://localhost:8080` in your browser.

```bash
npm run build    # production build
npm run preview  # preview the production build
```
