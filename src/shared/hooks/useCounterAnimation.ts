import { useCallback, useEffect, useState } from 'react';

export interface CounterItem {
  readonly id: number;
  readonly number: number;
  readonly label: string;
  readonly suffix?: string;
  readonly duration: number;
}

export interface UseCounterAnimationOptions {
  readonly threshold?: number;
  readonly isVisible: boolean;
}

/**
 * Custom hook for animating counter numbers with smooth transitions
 * Optimized for performance with requestAnimationFrame
 */
export const useCounterAnimation = (
  counters: readonly CounterItem[],
  options: UseCounterAnimationOptions
) => {
  const { isVisible } = options;
  const [countersState, setCountersState] = useState<Record<number, number>>({});

  const formatNumber = useCallback((num: number): string => {
    return num.toLocaleString('en-US');
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const maxDuration = Math.max(...counters.map(counter => counter.duration));

    // Easing function for smooth animation (ease-out cubic)
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = () => {
      const now = Date.now();
      const newCounters: Record<number, number> = {};

      counters.forEach(counter => {
        const rawProgress = Math.min((now - startTime) / counter.duration, 1);
        const easedProgress = easeOutCubic(rawProgress);
        const currentNumber = Math.floor(easedProgress * counter.number);
        newCounters[counter.id] = currentNumber;
      });

      setCountersState(newCounters);

      if (now - startTime < maxDuration) {
        requestAnimationFrame(animate);
      } else {
        // Ensure all counters reach their final values
        const finalCounters: Record<number, number> = {};
        counters.forEach(counter => {
          finalCounters[counter.id] = counter.number;
        });
        setCountersState(finalCounters);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, counters]);

  return {
    countersState,
    formatNumber
  };
};