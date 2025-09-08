"use client";

import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGame } from '@/contexts/GameContext';
import { PawPrint } from 'lucide-react';

const StartScreen = () => {
  const navigate = useNavigate();
  const { setDifficulty } = useGame();

  const handleDifficultySelect = (level: 'age5' | 'age7') => {
    setDifficulty(level);
    navigate('/level-select');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-2">
            <PawPrint className="h-10 w-10" />
            Animal Sentence Fun!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-8">Choose your age to start playing.</p>
          <div className="flex flex-col space-y-4">
            <Button
              onClick={() => handleDifficultySelect('age5')}
              className="h-20 text-3xl font-bold bg-green-500 hover:bg-green-600"
            >
              Age 5
            </Button>
            <Button
              onClick={() => handleDifficultySelect('age7')}
              className="h-20 text-3xl font-bold bg-orange-500 hover:bg-orange-600"
            >
              Age 7
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartScreen;