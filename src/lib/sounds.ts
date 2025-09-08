"use client";

import { Howl } from 'howler';

// To ensure sounds play on all browsers, especially after user interaction,
// we can unlock the audio context. This is a common practice.
const unlockAudio = () => {
  const sound = new Howl({
    src: ['data:audio/webm;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'],
    volume: 0,
    onend: () => {
      // This will be called after the silent sound has played.
      // Now the audio context should be unlocked.
    }
  });
  sound.play();
};

if (typeof window !== 'undefined') {
  document.addEventListener('click', unlockAudio, { once: true });
  document.addEventListener('touchstart', unlockAudio, { once: true });
}


const soundMap = {
  correct: new Howl({ src: ['https://s3.amazonaws.com/dyad-assets/success.mp3'], volume: 0.7 }),
  incorrect: new Howl({ src: ['https://s3.amazonaws.com/dyad-assets/incorrect.mp3'], volume: 0.7 }),
  click: new Howl({ src: ['https://s3.amazonaws.com/dyad-assets/click.mp3'], volume: 0.5 }),
  celebration: new Howl({ src: ['https://s3.amazonaws.com/dyad-assets/celebration.mp3'] }),
};

export const sounds = {
  playCorrect: () => soundMap.correct.play(),
  playIncorrect: () => soundMap.incorrect.play(),
  playClick: () => soundMap.click.play(),
  playCelebration: () => soundMap.celebration.play(),
};