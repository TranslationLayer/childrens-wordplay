"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/contexts/GameContext';
import { wordSearchData } from '@/data/wordSearchData';
import { generateWordSearch } from '@/lib/wordSearch';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StartOverButton from '@/components/StartOverButton';
import Celebration from '@/components/Celebration';
import { cn } from '@/lib/utils';
import { sounds } from '@/lib/sounds';

const key = (r: number, c: number) => `${r},${c}`;
const sign = (n: number) => (n > 0 ? 1 : n < 0 ? -1 : 0);

type Cell = { r: number; c: number };

/** Cells on the straight line between two points, or null if not a straight line. */
function lineCells(a: Cell, b: Cell) {
  const dr = b.r - a.r;
  const dc = b.c - a.c;
  const straight = dr === 0 || dc === 0 || Math.abs(dr) === Math.abs(dc);
  if (!straight) return null;
  const len = Math.max(Math.abs(dr), Math.abs(dc));
  const sr = sign(dr);
  const sc = sign(dc);
  return Array.from({ length: len + 1 }, (_, i) => ({ r: a.r + sr * i, c: a.c + sc * i }));
}

const WordSearch = () => {
  const navigate = useNavigate();
  const { difficulty } = useGame();

  useEffect(() => {
    if (!difficulty) navigate('/');
  }, [difficulty, navigate]);

  const puzzles = difficulty ? wordSearchData[difficulty] : [];
  const [index, setIndex] = useState(() =>
    difficulty ? Math.floor(Math.random() * wordSearchData[difficulty].length) : 0,
  );
  const puzzle = puzzles[index] ?? null;

  // Generate the grid for the current puzzle (regenerates on New Puzzle).
  const { grid } = useMemo(
    () =>
      puzzle
        ? generateWordSearch(puzzle.words, puzzle.size, puzzle.allowDiagonal, puzzle.allowBackward)
        : { grid: [] as string[][], placements: [] },
    [puzzle],
  );

  const [found, setFound] = useState<string[]>([]);
  const [foundCells, setFoundCells] = useState<Set<string>>(new Set());
  // Click-to-select: tap the first letter (anchor), then tap the last letter.
  const [anchor, setAnchor] = useState<Cell | null>(null);
  const [hover, setHover] = useState<Cell | null>(null);
  const [wrongCells, setWrongCells] = useState<Set<string>>(new Set());

  if (!difficulty || !puzzle) return null;

  const remaining = puzzle.words.filter((w) => !found.includes(w.toUpperCase()));
  const solved = remaining.length === 0;

  // Live preview of the line from the anchor to the cell under the cursor.
  const preview = anchor && hover ? lineCells(anchor, hover) : null;
  const previewKeys = new Set((preview || []).map((c) => key(c.r, c.c)));

  const flashWrong = (cells: Cell[]) => {
    const keys = new Set(cells.map((c) => key(c.r, c.c)));
    setWrongCells(keys);
    setTimeout(() => setWrongCells(new Set()), 600);
  };

  const handleCellClick = (r: number, c: number) => {
    const cell = { r, c };

    // First tap picks the starting letter.
    if (!anchor) {
      setAnchor(cell);
      return;
    }

    // Tapping the anchor again cancels the selection.
    if (anchor.r === r && anchor.c === c) {
      setAnchor(null);
      return;
    }

    const line = lineCells(anchor, cell);

    // Second tap must form a straight line (across, down, or diagonal).
    if (!line) {
      flashWrong([anchor, cell]);
      setAnchor(cell); // start over from the new tap
      return;
    }

    const letters = line.map((p) => grid[p.r][p.c]).join('');
    const reversed = letters.split('').reverse().join('');
    const match = puzzle.words
      .map((w) => w.toUpperCase())
      .find((w) => (w === letters || w === reversed) && !found.includes(w));

    if (match) {
      sounds.playCorrect();
      setFound((prev) => [...prev, match]);
      setFoundCells((prev) => {
        const next = new Set(prev);
        line.forEach((p) => next.add(key(p.r, p.c)));
        return next;
      });
      if (found.length + 1 === puzzle.words.length) {
        sounds.playCelebration();
      }
    } else {
      sounds.playIncorrect();
      flashWrong(line);
    }
    setAnchor(null);
  };

  const newPuzzle = () => {
    setIndex((i) => (i + 1) % puzzles.length);
    setFound([]);
    setFoundCells(new Set());
    setAnchor(null);
    setHover(null);
    setWrongCells(new Set());
  };

  if (solved) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <Celebration onComplete={() => navigate('/play')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-indigo-50 p-4 flex flex-col items-center">
      <StartOverButton />
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mt-4 mb-1">Word Search</h1>
      <p className="text-lg text-gray-600 mb-1">{puzzle.title} — find all the words!</p>
      <p className="text-base text-indigo-500 mb-6 font-medium">
        Tap the first letter, then the last letter of a word.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-5xl">
        <Card className="p-3 sm:p-4 bg-white shadow-md mx-auto">
          <div
            className="grid gap-1 select-none"
            style={{ gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))` }}
            onMouseLeave={() => setHover(null)}
          >
            {grid.map((row, r) =>
              row.map((letter, c) => {
                const k = key(r, c);
                const isFound = foundCells.has(k);
                const isAnchor = anchor?.r === r && anchor?.c === c;
                const isPreview = previewKeys.has(k);
                const isWrong = wrongCells.has(k);
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => handleCellClick(r, c)}
                    onMouseEnter={() => setHover({ r, c })}
                    className={cn(
                      'flex items-center justify-center rounded-md font-bold uppercase transition-colors',
                      'h-9 w-9 text-lg sm:h-12 sm:w-12 sm:text-2xl',
                      isWrong && 'bg-red-400 text-white',
                      !isWrong && isFound && 'bg-green-300 text-green-900',
                      !isWrong && !isFound && isAnchor && 'bg-indigo-600 text-white ring-2 ring-indigo-700',
                      !isWrong && !isFound && !isAnchor && isPreview && 'bg-indigo-300 text-white',
                      !isWrong && !isFound && !isAnchor && !isPreview && 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                    )}
                  >
                    {letter}
                  </button>
                );
              }),
            )}
          </div>
        </Card>

        <div className="flex-1 w-full max-w-xs">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Words to find</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {puzzle.words.map((w) => {
              const isFound = found.includes(w.toUpperCase());
              return (
                <li
                  key={w}
                  className={cn(
                    'text-2xl font-bold tracking-wide',
                    isFound ? 'text-green-600 line-through' : 'text-gray-700',
                  )}
                >
                  {w.toUpperCase()}
                </li>
              );
            })}
          </ul>
          <Button
            onClick={newPuzzle}
            variant="secondary"
            className="h-14 text-xl font-bold mt-8 w-full"
          >
            🔄 New Puzzle
          </Button>
          <Button
            onClick={() => navigate('/play')}
            variant="outline"
            className="h-14 text-xl font-bold mt-3 w-full"
          >
            ← Back to Games
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WordSearch;
