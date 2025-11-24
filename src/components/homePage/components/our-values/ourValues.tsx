import { useState, useCallback, useEffect, useRef } from 'react';
import { OUR_VALUES_DATA } from './config';
import styles from './styles.module.scss';
import { FadeInSection } from '@/shared';
import ImageCoreValues1 from '@/assets/images/our-values/core-values-1.jpg';
import ImageCoreValues2 from '@/assets/images/our-values/core-values-2.jpg';
import ImageCoreValues3 from '@/assets/images/our-values/core-values-3.jpg';

const DEFAULT_INDEX = 0;
const ANIMATION_DURATION = 400;
const FADE_DELAY = 50;

const TAB_LABELS = ['Sứ mệnh', 'Tầm nhìn', 'Giá trị'];

const OurValues = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(DEFAULT_INDEX);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [fadeKey, setFadeKey] = useState<number>(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: '0%', width: '0%' });
  const tabsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedItem = OUR_VALUES_DATA[selectedIndex];

  const handleTabClick = useCallback(
    (index: number) => {
      if (index === selectedIndex || isAnimating) return;
      setIsAnimating(true);
      setFadeKey(prev => prev + 1);
      setTimeout(() => {
        setSelectedIndex(index);
        setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
      }, FADE_DELAY);
    },
    [selectedIndex, isAnimating]
  );

  useEffect(() => {
    const updateIndicator = () => {
      if (!tabsRef.current || selectedIndex < 0) return;
      const activeButton = buttonsRef.current[selectedIndex];
      if (!activeButton) return;

      const containerRect = tabsRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      const relativeLeft = buttonRect.left - containerRect.left;
      const buttonWidth = buttonRect.width;
      const containerWidth = containerRect.width;

      setIndicatorStyle({
        left: `${(relativeLeft / containerWidth) * 100}%`,
        width: `${(buttonWidth / containerWidth) * 100}%`,
      });
    };

    const timeoutId = setTimeout(updateIndicator, 0);
    window.addEventListener('resize', updateIndicator);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [selectedIndex]);

  return (
    <div className={styles.ourValues}>
      <div className={styles.contentimages}>
        <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.imageItem1}>
          <img src={ImageCoreValues1} alt="Core Values 1" />
        </FadeInSection>
        <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.imageItem2}>
          <img src={ImageCoreValues2} alt="Core Values 2" />
        </FadeInSection>
        <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.imageItem3}>
          <img src={ImageCoreValues3} alt="Core Values 3" />
        </FadeInSection>
        <div className={styles.rotatingLogo}>
          <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={300}>
            <svg viewBox="0 0 200 200" className={styles.logoSvg}>
              <circle cx="100" cy="100" r="75" fill="#111" opacity="0.8" />
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text className={styles.logoText}>
                <textPath href="#circlePath" startOffset="0%">
                  The Thế Trung Tattoo Studio
                </textPath>
              </text>
            </svg>
          </FadeInSection>
        </div>
      </div>
      <div className={styles.ourContent}>
        <FadeInSection
          direction="slideFromTop"
          threshold={0.1}
          triggerOnce={false}
          duration={0.5}
          delay={200}
          className={styles.contentSubTitle}
        >
          Khám phá tổng quan Studio
        </FadeInSection>
        <div className={styles.tabsContainer} ref={tabsRef}>
          <div
            className={styles.indicator}
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />
          {TAB_LABELS.map((label, index) => (
            <FadeInSection
              key={label}
              direction="slideFromTop"
              threshold={0.1}
              triggerOnce={false}
              duration={0.5}
              delay={200 + index * 150}
            >
              <button
                ref={(el) => {
                  buttonsRef.current[index] = el;
                }}
                className={`${styles.tabButton} ${selectedIndex === index ? styles.active : ''}`}
                onClick={() => handleTabClick(index)}
                aria-selected={selectedIndex === index}
              >
                {label}
              </button>
            </FadeInSection>
          ))}
        </div>
        <FadeInSection
          direction="slideFromBottom"
          threshold={0.1}
          triggerOnce={false}
          duration={0.5}
          delay={200}
          key={`desc-${fadeKey}`}
          className={`${styles.contentDescription} ${styles.fadeContent}`}
        >
          <span className={styles.contentSubTitles}>{selectedItem.subTitle}</span>
          <span>{selectedItem.description}</span>
        </FadeInSection>
      </div>
    </div>
  );
};

export default OurValues;
