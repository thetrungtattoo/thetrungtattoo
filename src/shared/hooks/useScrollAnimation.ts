import { useCallback, useEffect, useRef, useState } from 'react';

// Hằng số mặc định cho các thành phần 
const DEFAULT_THRESHOLD = 0.1;
const DEFAULT_ROOT_MARGIN = '0px';
const DEFAULT_DELAY = 0;

export interface AnimationOptions {
  readonly threshold?: number;
  readonly rootMargin?: string;
  readonly triggerOnce?: boolean;
  readonly delay?: number;
}

export interface UseScrollAnimationReturn {
  readonly elementRef: React.RefObject<HTMLDivElement | null>;
  readonly isVisible: boolean;
}

/**
 * Custom hook for scroll-based animations using Intersection Observer API
 * Optimized for performance with proper cleanup and memoization
 */
export const useScrollAnimation = (options: AnimationOptions = {}): UseScrollAnimationReturn => {
  const {
    threshold = DEFAULT_THRESHOLD,
    rootMargin = DEFAULT_ROOT_MARGIN,
    triggerOnce = false,
    delay = DEFAULT_DELAY
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (!entry.isIntersecting) {
      if (!triggerOnce && !hasAnimated) {
        setIsVisible(false);
      }
      return;
    }

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const showElement = () => {
      setIsVisible(true);
      if (triggerOnce) {
        setHasAnimated(true);
      }
    };

    if (delay > 0) {
      timeoutRef.current = setTimeout(showElement, delay);
    } else {
      showElement();
    }
  }, [triggerOnce, hasAnimated, delay]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleIntersection, threshold, rootMargin]);

  return { elementRef, isVisible };
};