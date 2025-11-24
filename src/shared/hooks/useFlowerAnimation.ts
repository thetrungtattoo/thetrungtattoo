import { useCallback, useEffect, useState } from 'react';

const FLOWER_COUNT = 3;
const FLOWER_DELAYS = [100, 300, 500];
const RESET_DELAY = 1000;

/**
 * Custom hook for animating flower loading sequence
 * Creates a staggered animation effect for multiple flowers
 */
export const useFlowerAnimation = () => {
  const [loadedFlowers, setLoadedFlowers] = useState<number[]>([]);

  const animateFlowers = useCallback(() => {
    setLoadedFlowers([]);
    
    const timers: number[] = [];
    
    // Animate each flower with its specific delay
    FLOWER_DELAYS.forEach((delay, index) => {
      const timer = setTimeout(() => {
        setLoadedFlowers(prev => [...prev, index]);
      }, delay);
      timers.push(timer);
    });

    // Reset animation after completion
    const resetTimer = setTimeout(() => {
      animateFlowers();
    }, RESET_DELAY);
    timers.push(resetTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const cleanup = animateFlowers();
    return cleanup;
  }, [animateFlowers]);

  return {
    loadedFlowers,
    flowerCount: FLOWER_COUNT
  };
};
