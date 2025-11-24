import { useEffect, useState, useRef } from 'react';

export interface UseCountUpOptions {
  readonly target: number;
  readonly duration?: number;
  readonly startTrigger?: boolean;
  readonly delay?: number;
}

/**
 * Xử lý hiệu ứng overshoot cho số đếm lên
 * Bắt đầu đếm khi startTrigger trở thành true
 */

export const useCountUp = (options: UseCountUpOptions): number => {
  const {
    target,
    duration = 2000,
    startTrigger = false,
    delay = 0
  } = options;

  const [count, setCount] = useState(0);
  const hasStartedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!startTrigger || hasStartedRef.current) return;

    const startCount = () => {
      hasStartedRef.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration;
      let lastRandomValue = 0;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const randomPhaseEnd = 0.9;
        let currentCount: number;
        
        if (progress >= 1) {
          currentCount = target;
        } else if (progress < randomPhaseEnd) {
          const randomRange = Math.max(target * 4, 60);
          
          const newRandom = Math.random() * randomRange;
          
          lastRandomValue = lastRandomValue * 0.7 + newRandom * 0.3;
          currentCount = Math.floor(lastRandomValue);
        } else {
          const phaseProgress = (progress - randomPhaseEnd) / (1 - randomPhaseEnd);
          const easedProgress = phaseProgress * phaseProgress;
          const startValue = lastRandomValue;
          currentCount = Math.floor(startValue - (startValue - target) * easedProgress);
        }
        
        currentCount = Math.max(0, currentCount);
        
        setCount(currentCount);

        if (now < endTime) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (delay > 0) {
      timeoutRef.current = setTimeout(startCount, delay);
    } else {
      startCount();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [startTrigger, target, duration, delay]);

  return count;
};

