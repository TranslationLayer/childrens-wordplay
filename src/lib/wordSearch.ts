// Builds a word-search grid by placing words in random straight lines and
// filling the gaps with random letters. Pure helper used by the WordSearch page.

export interface Placement {
  word: string;
  cells: { r: number; c: number }[];
}

export interface GeneratedGrid {
  grid: string[][];
  placements: Placement[];
}

type Dir = [number, number];

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function randomLetter() {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

export function generateWordSearch(
  words: string[],
  size: number,
  allowDiagonal: boolean,
  allowBackward: boolean,
): GeneratedGrid {
  const upper = words.map((w) => w.toUpperCase());

  const dirs: Dir[] = [
    [0, 1], // right
    [1, 0], // down
  ];
  if (allowDiagonal) {
    dirs.push([1, 1]); // down-right
    dirs.push([1, -1]); // down-left
  }
  if (allowBackward) {
    // Add the reverse of every current direction so words can run backwards.
    dirs.slice().forEach(([dr, dc]) => dirs.push([-dr, -dc]));
  }

  const grid: string[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ''),
  );
  const placements: Placement[] = [];

  const fits = (word: string, r: number, c: number, [dr, dc]: Dir) => {
    const cells: { r: number; c: number }[] = [];
    for (let i = 0; i < word.length; i++) {
      const nr = r + dr * i;
      const nc = c + dc * i;
      if (nr < 0 || nr >= size || nc < 0 || nc >= size) return null;
      const existing = grid[nr][nc];
      if (existing && existing !== word[i]) return null;
      cells.push({ r: nr, c: nc });
    }
    return cells;
  };

  // Place longest words first — they are the hardest to fit.
  [...upper]
    .sort((a, b) => b.length - a.length)
    .forEach((word) => {
      for (let attempt = 0; attempt < 300; attempt++) {
        const dir = dirs[Math.floor(Math.random() * dirs.length)];
        const r = Math.floor(Math.random() * size);
        const c = Math.floor(Math.random() * size);
        const cells = fits(word, r, c, dir);
        if (cells) {
          cells.forEach((cell, i) => {
            grid[cell.r][cell.c] = word[i];
          });
          placements.push({ word, cells });
          return;
        }
      }
    });

  // Fill the remaining blanks with random letters.
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!grid[r][c]) grid[r][c] = randomLetter();
    }
  }

  return { grid, placements };
}
