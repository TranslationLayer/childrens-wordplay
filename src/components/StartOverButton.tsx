"use client";

import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const StartOverButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="icon"
      className="fixed top-4 left-4 z-10 bg-white/80 backdrop-blur-sm rounded-full h-12 w-12"
      aria-label="Start Over"
    >
      <Home className="h-6 w-6" />
    </Button>
  );
};

export default StartOverButton;