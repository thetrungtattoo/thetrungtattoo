import React, { type ReactNode, memo } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { 
  type AnimationConfig,
  ANIMATION_DEFAULTS 
} from '../../types/animations';
import styles from './styles.module.scss';

export interface FadeInSectionProps extends AnimationConfig {
  readonly children: ReactNode;
}

/**
 * FadeInSection - A reusable component for scroll-based reveal animations
 * 
 * Features:
 * - High performance with Intersection Observer API
 * - Multiple animation directions
 * - Configurable timing and behavior
 * - Accessibility support with reduced motion
 * - TypeScript support with strict typing
 */
const FadeInSection: React.FC<FadeInSectionProps> = memo(({
  children,
  direction = ANIMATION_DEFAULTS.DIRECTION,
  duration = ANIMATION_DEFAULTS.DURATION,
  delay = ANIMATION_DEFAULTS.DELAY,
  threshold = ANIMATION_DEFAULTS.THRESHOLD,
  triggerOnce = ANIMATION_DEFAULTS.TRIGGER_ONCE,
  className = ANIMATION_DEFAULTS.CLASS_NAME
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay
  });

  // Safely get direction class with fallback
  const directionClass = styles[direction] || styles.fadeIn || '';
  const visibilityClass = isVisible ? styles.visible : styles.hidden;
  
  const animationClass = `${directionClass} ${visibilityClass}`.trim();

  const inlineStyles: React.CSSProperties = {
    '--duration': `${duration}s`,
    '--delay': `${delay}ms`
  } as React.CSSProperties;

  const finalClassName = [
    styles.fadeInSection,
    animationClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={elementRef}
      className={finalClassName}
      style={inlineStyles}
    >
      {children}
    </div>
  );
});

FadeInSection.displayName = 'FadeInSection';

export default FadeInSection;
