"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import LevelSelect from "./pages/LevelSelect";
import Game from "./pages/Game";
import EndScreen from "./pages/EndScreen";
import NotFound from "./pages/NotFound";
import { GameProvider } from "./contexts/GameContext";
import BonusGame from "./pages/BonusGame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/level-select" element={<LevelSelect />} />
            <Route path="/game" element={<Game />} />
            <Route path="/bonus-game" element={<BonusGame />} />
            <Route path="/end" element={<EndScreen />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;