import { useEffect, useState } from 'react';
import { FadeInSection, useCounterAnimation, useScrollAnimation } from '@/shared';
import { ANIMATION_TIMING, COMPANY_FACTS } from '@/components/about-us/hooks/about';

import styles from './styles.module.scss';

const TeamStats = () => {
  const { elementRef: scrollRef, isVisible: isSectionVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const HEADER_DELAY = 200;
  const HEADER_DURATION = 200;
  const GRID_START_DELAY = HEADER_DELAY + HEADER_DURATION;
  const LAST_ITEM_INDEX = COMPANY_FACTS.length - 1;
  const LAST_ITEM_DELAY = LAST_ITEM_INDEX * ANIMATION_TIMING.STAGGER_DELAY;
  const ITEM_FADE_DURATION = 200;
  const COUNTER_START_DELAY = GRID_START_DELAY + LAST_ITEM_DELAY + ITEM_FADE_DURATION;

  const [shouldStartCounter, setShouldStartCounter] = useState(false);

  useEffect(() => {
    if (!isSectionVisible) return;

    const timer = setTimeout(() => {
      setShouldStartCounter(true);
    }, COUNTER_START_DELAY);

    return () => clearTimeout(timer);
  }, [isSectionVisible, COUNTER_START_DELAY]);

  const { countersState, formatNumber } = useCounterAnimation(COMPANY_FACTS, {
    isVisible: shouldStartCounter
  });

  return (
    <section 
      ref={scrollRef as React.RefObject<HTMLElement>}
      className={styles.teamStatsSection}
    >
      <div className={styles.container}>
        {isSectionVisible && (
          <>
            <FadeInSection 
              direction="slideFromTop" 
              threshold={0.1} triggerOnce={false} duration={0.5} 
              delay={HEADER_DELAY} 
              className={styles.teamStatsHeader}
            >
              <FadeInSection 
                direction="slideFromLeft" 
                threshold={0.1} triggerOnce={false} duration={0.5} 
                delay={200} 
                className={styles.teamStatsSubTitle}
              >
                Thành tựu của Studio - Chúng tôi tự hào về đội ngũ của mình
              </FadeInSection>
              <FadeInSection 
                direction="slideFromRight" 
                threshold={0.1} triggerOnce={false} duration={0.5} 
                delay={HEADER_DELAY + 300} 
                className={styles.teamStatsTitle}
              >
                Những con số biết nói !
              </FadeInSection>
            </FadeInSection>

            <div className={styles.teamStatsGrid}>
              {COMPANY_FACTS.map((fact, index) => (
                <FadeInSection
                  key={fact.id}
                  direction="slideFromBottom"
                  threshold={0.1} triggerOnce={false} duration={0.5}
                  delay={GRID_START_DELAY + (index * 50)}
                  className="stagger-1"
                >
                  <div className={styles.teamStatsItem}>
                    <div className={styles.numberContainer}>
                      <span className={styles.number}>
                        {formatNumber(countersState[fact.id] || 0)}
                      </span>
                      {fact.suffix && (
                        <span className={styles.suffix}>{fact.suffix}</span>
                      )}
                    </div>
                    <p className={styles.label}>{fact.label}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default TeamStats;
