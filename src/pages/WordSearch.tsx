"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
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

/** Cells on the straight line between two points, or null if not a straight line. */
function lineCells(a: { r: number; c: number }, b: { r: number; c: number }) {
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
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!difficulty) navigate('/');
  }, [difficulty, navigate]);

  const puzzle = difficulty ? wordSearchData[difficulty] : null;

  // Generate the grid once per puzzle.
  const { grid } = useMemo(
    () =>
      puzzle
        ? generateWordSearch(puzzle.words, puzzle.size, puzzle.allowDiagonal, puzzle.allowBackward)
        : { grid: [] as string[][], placements: [] },
    [puzzle],
  );

  const [found, setFound] = useState<string[]>([]);
  const [foundCells, setFoundCells] = useState<Set<string>>(new Set());
  const [start, setStart] = useState<{ r: number; c: number } | null>(null);
  const [current, setCurrent] = useState<{ r: number; c: number } | null>(null);
  // Refs mirror the selection so pointer handlers always read the latest values,
  // independent of React's re-render timing (important for fast drags / touch).
  const startRef = useRef<{ r: number; c: number } | null>(null);
  const currentRef = useRef<{ r: number; c: number } | null>(null);

  const setStartBoth = (v: { r: number; c: number } | null) => {
    startRef.current = v;
    setStart(v);
  };
  const setCurrentBoth = (v: { r: number; c: number } | null) => {
    currentRef.current = v;
    setCurrent(v);
  };

  const selecting = start !== null;

  if (!difficulty || !puzzle) return null;

  const remaining = puzzle.words.filter((w) => !found.includes(w.toUpperCase()));
  const solved = remaining.length === 0;

  const selection = start && current ? lineCells(start, current) : null;
  const selectionKeys = new Set((selection || []).map((c) => key(c.r, c.c)));

  const cellFromPoint = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    const cell = el?.closest<HTMLElement>('[data-cell]');
    if (!cell) return null;
    return { r: Number(cell.dataset.r), c: Number(cell.dataset.c) };
  };

  const beginAt = (x: number, y: number) => {
    const cell = cellFromPoint(x, y);
    if (cell) {
      setStartBoth(cell);
      setCurrentBoth(cell);
    }
  };

  const moveTo = (x: number, y: number) => {
    if (!startRef.current) return;
    const cell = cellFromPoint(x, y);
    if (cell) setCurrentBoth(cell);
  };

  const finishSelection = () => {
    const s = startRef.current;
    const cur = currentRef.current;
    const finalSelection = s && cur ? lineCells(s, cur) : null;
    if (finalSelection) {
      const letters = finalSelection.map((c) => grid[c.r][c.c]).join('');
      const reversed = letters.split('').reverse().join('');
      const match = puzzle.words
        .map((w) => w.toUpperCase())
        .find((w) => (w === letters || w === reversed) && !found.includes(w));
      if (match) {
        sounds.playCorrect();
        setFound((prev) => [...prev, match]);
        setFoundCells((prev) => {
          const next = new Set(prev);
          finalSelection.forEach((c) => next.add(key(c.r, c.c)));
          return next;
        });
        if (found.length + 1 === puzzle.words.length) {
          sounds.playCelebration();
        }
      }
    }
    setStartBoth(null);
    setCurrentBoth(null);
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
      <p className="text-lg text-gray-600 mb-6">{puzzle.title} — find all the words!</p>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-5xl">
        <Card className="p-3 sm:p-4 bg-white shadow-md mx-auto">
          <div
            ref={gridRef}
            className="grid gap-1 select-none"
            style={{
              gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))`,
              touchAction: 'none',
            }}
            onPointerDown={(e) => {
              e.preventDefault();
              beginAt(e.clientX, e.clientY);
            }}
            onPointerMove={(e) => moveTo(e.clientX, e.clientY)}
            onPointerUp={finishSelection}
            onPointerLeave={() => selecting && finishSelection()}
          >
            {grid.map((row, r) =>
              row.map((letter, c) => {
                const k = key(r, c);
                const isFound = foundCells.has(k);
                const isSelected = selectionKeys.has(k);
                return (
                  <div
                    key={k}
                    data-cell
                    data-r={r}
                    data-c={c}
                    className={cn(
                      'flex items-center justify-center rounded-md font-bold uppercase transition-colors',
                      'h-9 w-9 text-lg sm:h-12 sm:w-12 sm:text-2xl',
                      isFound && 'bg-green-300 text-green-900',
                      isSelected && !isFound && 'bg-indigo-400 text-white',
                      !isFound && !isSelected && 'bg-gray-100 text-gray-700',
                    )}
                  >
                    {letter}
                  </div>
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
            onClick={() => navigate('/play')}
            variant="outline"
            className="h-14 text-xl font-bold mt-8 w-full"
          >
            ← Back to Games
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WordSearch;
