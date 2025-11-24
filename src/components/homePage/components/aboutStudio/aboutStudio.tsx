import { useState, useEffect, useRef } from 'react';
import { ABOUT_TABS } from './config';
import FadeInSection from '@/shared/components/fadeInSection/fadeInSection';
import aboutContentImage from '@/assets/images/about-us/testimonial.png';
import styles from './styles.module.scss';

const AboutStudio = () => {
    const [activeTab, setActiveTab] = useState<string>(ABOUT_TABS[0].id);
    const [hasTabChanged, setHasTabChanged] = useState<boolean>(false);
    const activeIndex = ABOUT_TABS.findIndex(tab => tab.id === activeTab);
    const [indicatorStyle, setIndicatorStyle] = useState({
        top: '0%',
        height: '0%',
        bottom: '100%'
    });
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const activeTabData = ABOUT_TABS.find(tab => tab.id === activeTab) || ABOUT_TABS[0];

    const handleTabChange = (tabId: string) => {
        setHasTabChanged(true);
        setActiveTab(tabId);
    };

    const titleDelay = hasTabChanged ? 100 : 200;
    const textDelay = hasTabChanged ? 100 : 300;

    useEffect(() => {
        const updateIndicator = () => {
            if (!containerRef.current || activeIndex < 0) return;

            const container = containerRef.current;
            const activeButton = buttonsRef.current[activeIndex];
            if (!activeButton) return;

            const containerRect = container.getBoundingClientRect();
            const buttonRect = activeButton.getBoundingClientRect();

            const relativeTop = buttonRect.top - containerRect.top;
            const buttonHeight = buttonRect.height;
            const containerHeight = containerRect.height;

            const topPercent = (relativeTop / containerHeight) * 100;
            const heightPercent = (buttonHeight / containerHeight) * 100;
            const bottomPercent = 100 - topPercent - heightPercent;

            setIndicatorStyle({
                top: `${topPercent}%`,
                height: `${heightPercent}%`,
                bottom: `${bottomPercent}%`
            });
        };

        const timeoutId = setTimeout(updateIndicator, 0);
        window.addEventListener('resize', updateIndicator);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', updateIndicator);
        };
    }, [activeIndex]);

    return (
        <div className={styles.aboutStudioContainer}>
            <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.aboutTitle}>
                <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.subTitle}>Tạo nên sự khác biệt trong từng chi tiết</FadeInSection>
                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.sectionTitle}>5 Tiêu Chuẩn Vàng Tại Studio</FadeInSection>
            </FadeInSection>


            <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.aboutContainer}>
                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.aboutItem}>
                    <div className={styles.verticalIndicator} ref={containerRef}>
                        <div
                            className={styles.indicatorBarTop}
                            style={{ height: indicatorStyle.top }}
                        ></div>
                        <div
                            className={styles.indicatorBarActive}
                            style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
                        ></div>
                        <div
                            className={styles.indicatorBarBottom}
                            style={{ height: indicatorStyle.bottom }}
                        ></div>
                    </div>
                    {ABOUT_TABS.map((tab, index) => (
                        <button
                            key={tab.id}
                            ref={(el) => { buttonsRef.current[index] = el; }}
                            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => handleTabChange(tab.id)}
                            aria-selected={activeTab === tab.id}
                        >
                            {tab.title}
                        </button>
                    ))}
                </FadeInSection>

                <div className={styles.aboutContentContainer}>
                    <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.aboutContent}>
                        <FadeInSection key={`title-${activeTab}`} direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={titleDelay} className={styles.contentTitle}>
                            {activeTabData.title}
                            <span className={styles.contentIcon}>{activeTabData.icon}</span>
                        </FadeInSection>
                        <FadeInSection key={`text-${activeTab}`} direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={textDelay} className={styles.contentText}>{activeTabData.content}</FadeInSection>
                    </FadeInSection>
                    <div className={styles.aboutContentImageContainer}>
                        <img src={aboutContentImage} alt="" className={styles.aboutContentImage} />
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
};

export default AboutStudio;
