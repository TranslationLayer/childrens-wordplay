"use client";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Timer } from 'lucide-react';

const GAME_DURATION_SECONDS = 600; // 10 minutes

const GameTimer = () => {
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SECONDS);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate('/end');
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, navigate]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-4 right-4 bg-white p-2 rounded-lg shadow-md flex items-center gap-2 text-2xl font-bold text-gray-700 z-10">
      <Timer className="h-8 w-8 text-blue-500" />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default GameTimer;