"use client";

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGame } from '@/contexts/GameContext';
import { Star, Sparkles } from 'lucide-react';

const LevelSelect = () => {
  const navigate = useNavigate();
  const { difficulty, setLevel } = useGame();

  useEffect(() => {
    if (!difficulty) {
      navigate('/');
    }
  }, [difficulty, navigate]);

  const handleLevelSelect = (level: number) => {
    setLevel(level);
    navigate('/game');
  };

  const handleBonusGameClick = () => {
    navigate('/bonus-game');
  };

  if (!difficulty) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-purple-600">
            Choose a Level
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-8">The higher the level, the trickier the game!</p>
          <div className="flex flex-col space-y-4">
            <Button
              onClick={() => handleLevelSelect(1)}
              className="h-20 text-3xl font-bold bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center gap-2"
            >
              Level 1 <Star className="h-8 w-8" />
            </Button>
            <Button
              onClick={() => handleLevelSelect(2)}
              className="h-20 text-3xl font-bold bg-teal-500 hover:bg-teal-600 flex items-center justify-center gap-2"
            >
              Level 2 <Star className="h-8 w-8" /> <Star className="h-8 w-8" />
            </Button>
            <Button
              onClick={() => handleLevelSelect(3)}
              className="h-20 text-3xl font-bold bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center gap-2"
            >
              Level 3 <Star className="h-8 w-8" /> <Star className="h-8 w-8" /> <Star className="h-8 w-8" />
            </Button>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-blue-50 px-2 text-muted-foreground">Or</span>
              </div>
            </div>
            <Button
              onClick={handleBonusGameClick}
              className="h-20 text-3xl font-bold bg-pink-500 hover:bg-pink-600 flex items-center justify-center gap-2"
            >
              Bonus Game <Sparkles className="h-8 w-8" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LevelSelect;