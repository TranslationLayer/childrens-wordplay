"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/contexts/GameContext';
import { crosswordData, CrosswordPuzzle } from '@/data/crosswordData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StartOverButton from '@/components/StartOverButton';
import Celebration from '@/components/Celebration';
import { cn } from '@/lib/utils';
import { sounds } from '@/lib/sounds';

const key = (r: number, c: number) => `${r},${c}`;

interface CellInfo {
  letter: string;
  number?: number;
}

/** Build the letter grid + clue numbers from the puzzle's placed words. */
function buildGrid(puzzle: CrosswordPuzzle) {
  const cells = new Map<string, CellInfo>();

  puzzle.entries.forEach((entry) => {
    for (let i = 0; i < entry.answer.length; i++) {
      const r = entry.row + (entry.direction === 'down' ? i : 0);
      const c = entry.col + (entry.direction === 'across' ? i : 0);
      const k = key(r, c);
      cells.set(k, { ...cells.get(k), letter: entry.answer[i].toUpperCase() });
    }
  });

  // Assign clue numbers in reading order to every cell that starts a word.
  const starts = new Set(puzzle.entries.map((e) => key(e.row, e.col)));
  let n = 0;
  const numbers = new Map<string, number>();
  for (let r = 0; r < puzzle.size.rows; r++) {
    for (let c = 0; c < puzzle.size.cols; c++) {
      const k = key(r, c);
      if (starts.has(k)) {
        n += 1;
        numbers.set(k, n);
        cells.set(k, { ...cells.get(k)!, number: n });
      }
    }
  }

  const numberFor = (entry: { row: number; col: number }) =>
    numbers.get(key(entry.row, entry.col))!;

  return { cells, numberFor };
}

const Crossword = () => {
  const navigate = useNavigate();
  const { difficulty } = useGame();
  const [entered, setEntered] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [solved, setSolved] = useState(false);
  const inputs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    if (!difficulty) navigate('/');
  }, [difficulty, navigate]);

  const puzzle = difficulty ? crosswordData[difficulty] : null;
  const { cells, numberFor } = useMemo(
    () => (puzzle ? buildGrid(puzzle) : { cells: new Map<string, CellInfo>(), numberFor: () => 0 }),
    [puzzle],
  );

  if (!difficulty || !puzzle) return null;

  const across = puzzle.entries.filter((e) => e.direction === 'across');
  const down = puzzle.entries.filter((e) => e.direction === 'down');

  const handleChange = (k: string, value: string) => {
    const letter = value.replace(/[^a-zA-Z]/g, '').slice(-1).toUpperCase();
    setEntered((prev) => ({ ...prev, [k]: letter }));
    setChecked(false);
  };

  const handleCheck = () => {
    let allCorrect = true;
    cells.forEach((info, k) => {
      if ((entered[k] || '') !== info.letter) allCorrect = false;
    });
    setChecked(true);
    if (allCorrect) {
      sounds.playCelebration();
      setSolved(true);
    } else {
      sounds.playIncorrect();
    }
  };

  if (solved) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-50">
        <Celebration onComplete={() => navigate('/play')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50 p-4 flex flex-col items-center">
      <StartOverButton />
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mt-4 mb-1">Crossword</h1>
      <p className="text-lg text-gray-600 mb-6">{puzzle.title}</p>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-5xl">
        {/* Grid */}
        <Card className="p-3 sm:p-4 bg-white shadow-md mx-auto">
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${puzzle.size.cols}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: puzzle.size.rows * puzzle.size.cols }).map((_, idx) => {
              const r = Math.floor(idx / puzzle.size.cols);
              const c = idx % puzzle.size.cols;
              const k = key(r, c);
              const info = cells.get(k);
              if (!info) {
                return <div key={k} className="h-14 w-14 sm:h-20 sm:w-20" />;
              }
              const value = entered[k] || '';
              const isCorrect = checked && value === info.letter;
              const isWrong = checked && value !== info.letter;
              return (
                <div key={k} className="relative">
                  {info.number && (
                    <span className="absolute top-0 left-0.5 text-xs sm:text-sm font-bold text-gray-500 z-10">
                      {info.number}
                    </span>
                  )}
                  <input
                    ref={(el) => (inputs.current[k] = el)}
                    value={value}
                    onChange={(e) => handleChange(k, e.target.value)}
                    inputMode="text"
                    maxLength={1}
                    aria-label={`Row ${r + 1} column ${c + 1}`}
                    className={cn(
                      'h-14 w-14 sm:h-20 sm:w-20 text-center text-3xl sm:text-5xl font-bold uppercase rounded-md border-2 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300',
                      isCorrect && 'bg-green-200 border-green-500 text-green-800',
                      isWrong && 'bg-red-100 border-red-400 animate-shake',
                      !checked && 'bg-white border-gray-300',
                    )}
                  />
                </div>
              );
            })}
          </div>
        </Card>

        {/* Clues */}
        <div className="flex-1 w-full max-w-md space-y-6">
          <ClueList title="Across" entries={across} numberFor={numberFor} />
          <ClueList title="Down" entries={down} numberFor={numberFor} />
          <div className="flex gap-3">
            <Button
              onClick={handleCheck}
              className="h-16 flex-1 text-2xl font-bold bg-emerald-500 hover:bg-emerald-600"
            >
              Check
            </Button>
            <Button
              onClick={() => navigate('/play')}
              variant="outline"
              className="h-16 text-xl font-bold"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ClueListProps {
  title: string;
  entries: CrosswordPuzzle['entries'];
  numberFor: (e: { row: number; col: number }) => number;
}

const ClueList: React.FC<ClueListProps> = ({ title, entries, numberFor }) => {
  if (entries.length === 0) return null;
  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-700 mb-2">{title}</h2>
      <ul className="space-y-2">
        {entries
          .slice()
          .sort((a, b) => numberFor(a) - numberFor(b))
          .map((e, i) => (
            <li key={i} className="flex items-start gap-2 text-xl text-gray-700">
              <span className="font-bold text-emerald-600 min-w-[1.5rem]">{numberFor(e)}.</span>
              {e.emoji && <span className="text-2xl">{e.emoji}</span>}
              <span>{e.clue} ({e.answer.length} letters)</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Crossword;
