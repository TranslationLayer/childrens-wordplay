"use client";

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { DIFFICULTIES } from '@/data/difficulties';
import StartOverButton from '@/components/StartOverButton';
import {
  BookOpen,
  Sparkles,
  Grid3x3,
  Search,
  Music,
  Brain,
  LucideIcon,
} from 'lucide-react';

interface Activity {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  route: string;
  color: string;
}

const ACTIVITIES: Activity[] = [
  { title: 'Sentence Adventure', subtitle: '6 levels of word games', Icon: BookOpen, route: '/level-select', color: 'bg-cyan-500 hover:bg-cyan-600' },
  { title: 'Balloon Pop', subtitle: 'Pop the matching balloons', Icon: Sparkles, route: '/bonus-game', color: 'bg-pink-500 hover:bg-pink-600' },
  { title: 'Crossword', subtitle: 'Big-letter picture puzzles', Icon: Grid3x3, route: '/crossword', color: 'bg-emerald-500 hover:bg-emerald-600' },
  { title: 'Word Search', subtitle: 'Find the hidden words', Icon: Search, route: '/word-search', color: 'bg-indigo-500 hover:bg-indigo-600' },
  { title: 'Rhyme Time', subtitle: 'Match the rhyming words', Icon: Music, route: '/rhyme-time', color: 'bg-rose-500 hover:bg-rose-600' },
  { title: 'Memory Match', subtitle: 'Flip and find the pairs', Icon: Brain, route: '/memory-match', color: 'bg-amber-500 hover:bg-amber-600' },
];

const ActivityHub = () => {
  const navigate = useNavigate();
  const { difficulty } = useGame();

  useEffect(() => {
    if (!difficulty) navigate('/');
  }, [difficulty, navigate]);

  if (!difficulty) return null;

  const meta = DIFFICULTIES[difficulty];

  return (
    <div className="min-h-screen bg-blue-50 p-4 flex flex-col items-center justify-center">
      <StartOverButton />
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-600">Pick a Game!</h1>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-lg font-semibold text-gray-600 shadow-sm">
            {meta.advanced && '⭐ '}
            {meta.label}
            <span className="text-gray-400">·</span>
            <span className="text-gray-500">{meta.sublabel}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ACTIVITIES.map((activity) => (
            <Card key={activity.title} className="overflow-hidden shadow-md">
              <CardContent className="p-0">
                <Button
                  onClick={() => navigate(activity.route)}
                  className={`h-28 w-full flex items-center justify-start gap-4 px-6 text-left text-white ${activity.color}`}
                >
                  <activity.Icon className="h-12 w-12 shrink-0" />
                  <span className="flex flex-col">
                    <span className="text-2xl font-bold leading-tight">{activity.title}</span>
                    <span className="text-sm font-normal opacity-90">{activity.subtitle}</span>
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityHub;
