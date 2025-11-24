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

  const animationClass = isVisible 
    ? `${styles[direction]} ${styles.visible}` 
    : `${styles[direction]} ${styles.hidden}`;

  const inlineStyles: React.CSSProperties = {
    '--duration': `${duration}s`,
    '--delay': `${delay}ms`
  } as React.CSSProperties;

  return (
    <div
      ref={elementRef}
      className={`${styles.fadeInSection} ${animationClass} ${className}`.trim()}
      style={inlineStyles}
    >
      {children}
    </div>
  );
});

FadeInSection.displayName = 'FadeInSection';

export default FadeInSection;
