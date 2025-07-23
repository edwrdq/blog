'use client';

import { useEffect, useState } from 'react';

interface TypewriterHeroProps {
  phrases: string[];
  staticText?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterHero({
  phrases,
  staticText = "I'm ",
  typeSpeed = 125,
  deleteSpeed = 100,
  pauseDuration = 2000,
}: TypewriterHeroProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gruvbox-fg0">
            {staticText}
          </span>
          <span className="text-gruvbox-yellow">
            {currentText}
            <span className="animate-pulse text-gruvbox-blue">|</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gruvbox-fg2 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with modern web technologies.
          Building the future, one line of code at a time.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gruvbox-yellow text-gruvbox-bg0 font-semibold rounded-lg hover:bg-gruvbox-orange transition-colors"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-gruvbox-blue text-gruvbox-blue font-semibold rounded-lg hover:bg-gruvbox-blue hover:text-gruvbox-bg0 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}