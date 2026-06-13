"use client";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useGame } from '@/contexts/GameContext';
import { resolveDifficulty } from '@/data/difficulties';
import { PawPrint, Rocket } from 'lucide-react';

const AGES: { age: 5 | 6 | 7 | 8; color: string }[] = [
  { age: 5, color: 'bg-green-500 hover:bg-green-600' },
  { age: 6, color: 'bg-lime-500 hover:bg-lime-600' },
  { age: 7, color: 'bg-orange-500 hover:bg-orange-600' },
  { age: 8, color: 'bg-amber-600 hover:bg-amber-700' },
];

const StartScreen = () => {
  const navigate = useNavigate();
  const { setDifficulty } = useGame();
  const [advanced, setAdvanced] = useState(false);

  const handleAgeSelect = (age: 5 | 6 | 7 | 8) => {
    setDifficulty(resolveDifficulty(age, advanced));
    navigate('/play');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 p-4">
      <Card className="w-full max-w-lg text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-2">
            <PawPrint className="h-10 w-10" />
            Animal Word Fun!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-gray-700 mb-6">How old are you?</p>
          <div className="grid grid-cols-2 gap-4">
            {AGES.map(({ age, color }) => (
              <Button
                key={age}
                onClick={() => handleAgeSelect(age)}
                className={`h-24 text-3xl font-bold text-white ${color}`}
              >
                Age {age}
              </Button>
            ))}
          </div>

          <label
            htmlFor="advanced-toggle"
            className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-violet-50 border-2 border-violet-200 p-4 cursor-pointer select-none"
          >
            <Rocket className="h-7 w-7 text-violet-600" />
            <div className="text-left">
              <p className="text-lg font-bold text-violet-700">Advanced mode</p>
              <p className="text-sm text-violet-500">Extra tricky for readers who are ahead</p>
            </div>
            <Switch
              id="advanced-toggle"
              checked={advanced}
              onCheckedChange={setAdvanced}
              className="ml-2 data-[state=checked]:bg-violet-600"
            />
          </label>

          <p className="mt-6 text-sm text-gray-400">
            Grown-ups: pick the age that fits your child's reading, not just their birthday.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartScreen;
