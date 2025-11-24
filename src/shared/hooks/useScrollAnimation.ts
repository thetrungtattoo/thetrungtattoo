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
 * Includes fallback for browsers without Intersection Observer support
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (!entry?.isIntersecting) {
      if (!triggerOnce && !hasAnimated) {
        setIsVisible(false);
      }
      return;
    }

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
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
    // Check if running in browser environment
    if (typeof window === 'undefined') return;

    const element = elementRef.current;
    if (!element) return;

    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: show element immediately if Intersection Observer is not supported
      console.warn('IntersectionObserver is not supported, showing element immediately');
      setIsVisible(true);
      return;
    }

    let observer: IntersectionObserver | null = null;

    try {
      observer = new IntersectionObserver(handleIntersection, {
        threshold,
        rootMargin
      });

      observer.observe(element);
    } catch (error) {
      console.error('Error initializing IntersectionObserver:', error);
      // Fallback: show element on error
      setIsVisible(true);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [handleIntersection, threshold, rootMargin]);

  return { elementRef, isVisible };
};