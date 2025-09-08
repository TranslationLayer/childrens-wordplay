"use client";

import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PartyPopper, Trophy } from 'lucide-react';

const EndScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score;

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-purple-600 flex items-center justify-center gap-2">
            <PartyPopper className="h-10 w-10" />
            You did it!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-8">Great job playing!</p>

          {score !== undefined && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-8">
              <div className="flex items-center justify-center gap-3">
                <Trophy className="h-8 w-8" />
                <p className="text-2xl font-bold">Your Score: {score}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-4">
            <Button
              onClick={() => navigate('/game')}
              className="h-16 text-2xl font-bold bg-blue-500 hover:bg-blue-600"
            >
              Play Again
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="h-16 text-2xl font-bold"
            >
              Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EndScreen;