"use client";

import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PartyPopper } from 'lucide-react';

const EndScreen = () => {
  const navigate = useNavigate();

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