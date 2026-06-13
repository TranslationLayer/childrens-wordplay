"use client";

/**
 * The app is for early readers roughly ages 5–8, but reading ability varies a
 * lot inside any single age. So we offer a standard track for each age plus two
 * "Advanced" tracks — one for the younger range (5–6) and one for the older
 * range (7–8) — for children who are reading ahead.
 */
export type Difficulty =
  | 'age5'
  | 'age6'
  | 'age7'
  | 'age8'
  | 'advanced56'
  | 'advanced78';

/** Which broad band a difficulty belongs to (used for game speed/tone). */
export type AgeBand = 'young' | 'older';

export interface DifficultyMeta {
  key: Difficulty;
  /** Big label on the button, e.g. "Age 6". */
  label: string;
  /** Small supporting line, e.g. "Building readers". */
  sublabel: string;
  /** True for the two Advanced tracks. */
  advanced: boolean;
  band: AgeBand;
  /** Tailwind background class for the selection button. */
  color: string;
  /** Tailwind hover background class. */
  hoverColor: string;
  /**
   * Relative pace, 1 (calmest) → 4 (fastest). Drives balloon speed and any
   * other timing so younger/standard tracks stay gentle and advanced tracks
   * stay brisk.
   */
  pace: 1 | 2 | 3 | 4;
}

export const DIFFICULTIES: Record<Difficulty, DifficultyMeta> = {
  age5: {
    key: 'age5',
    label: 'Age 5',
    sublabel: 'First words',
    advanced: false,
    band: 'young',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    pace: 1,
  },
  age6: {
    key: 'age6',
    label: 'Age 6',
    sublabel: 'Building readers',
    advanced: false,
    band: 'young',
    color: 'bg-lime-500',
    hoverColor: 'hover:bg-lime-600',
    pace: 2,
  },
  age7: {
    key: 'age7',
    label: 'Age 7',
    sublabel: 'Growing readers',
    advanced: false,
    band: 'older',
    color: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600',
    pace: 2,
  },
  age8: {
    key: 'age8',
    label: 'Age 8',
    sublabel: 'Confident readers',
    advanced: false,
    band: 'older',
    color: 'bg-amber-600',
    hoverColor: 'hover:bg-amber-700',
    pace: 3,
  },
  advanced56: {
    key: 'advanced56',
    label: 'Advanced',
    sublabel: 'Ages 5–6 · extra tricky',
    advanced: true,
    band: 'young',
    color: 'bg-violet-500',
    hoverColor: 'hover:bg-violet-600',
    pace: 3,
  },
  advanced78: {
    key: 'advanced78',
    label: 'Advanced',
    sublabel: 'Ages 7–8 · extra tricky',
    advanced: true,
    band: 'older',
    color: 'bg-fuchsia-600',
    hoverColor: 'hover:bg-fuchsia-700',
    pace: 4,
  },
};

/** Ordered list for menus. */
export const DIFFICULTY_ORDER: Difficulty[] = [
  'age5',
  'age6',
  'age7',
  'age8',
  'advanced56',
  'advanced78',
];

/**
 * Map an age + advanced toggle to a difficulty key. Advanced collapses to the
 * one advanced track for that child's range (5–6 or 7–8).
 */
export function resolveDifficulty(age: 5 | 6 | 7 | 8, advanced: boolean): Difficulty {
  if (advanced) return age <= 6 ? 'advanced56' : 'advanced78';
  return `age${age}` as Difficulty;
}
