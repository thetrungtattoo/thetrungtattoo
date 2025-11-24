/**
 * Animation direction types for scroll-based reveal animations
 */
export type AnimationDirection = 
  | 'fadeIn' 
  | 'slideFromLeft' 
  | 'slideFromRight' 
  | 'slideFromTop' 
  | 'slideFromBottom';

/**
 * Animation configuration interface
 */
export interface AnimationConfig {
  readonly direction?: AnimationDirection;
  readonly duration?: number;
  readonly delay?: number;
  readonly threshold?: number;
  readonly triggerOnce?: boolean;
  readonly className?: string;
}

/**
 * Default animation values
 */
export const ANIMATION_DEFAULTS = {
  DIRECTION: 'fadeIn' as const,
  DURATION: 0.6,
  DELAY: 0,
  THRESHOLD: 0.1,
  TRIGGER_ONCE: true,
  CLASS_NAME: ''
} as const;

/**
 * Animation direction mappings for CSS classes
 */
export const ANIMATION_DIRECTIONS: Record<AnimationDirection, string> = {
  fadeIn: 'fadeIn',
  slideFromLeft: 'slideFromLeft',
  slideFromRight: 'slideFromRight',
  slideFromTop: 'slideFromTop',
  slideFromBottom: 'slideFromBottom'
} as const;
