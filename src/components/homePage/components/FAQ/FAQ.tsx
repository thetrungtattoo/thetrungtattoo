/**
 * 
 * Section: CÂU HỎI THƯỜNG GẶP
 * 
*/
import { useState, useMemo } from 'react';
import { DownArrow, Question } from '@/assets/svg/svg';
import faqImage from '@/assets/images/FAQ/testimonial.png';
import { FadeInSection } from '@/shared';
import { FAQ_DATA } from '@/database/FAQ';
import styles from './styles.module.scss';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const leftColumnItems = useMemo(() => FAQ_DATA.slice(0, 4), []);
    const rightColumnItems = useMemo(() => FAQ_DATA.slice(4, 8), []);

    const handleToggle = (index: number, column: 'left' | 'right') => {
        const actualIndex = column === 'left' ? index : index + 4;
        setOpenIndex(openIndex === actualIndex ? null : actualIndex);
    };

    const renderFAQItem = (item: typeof FAQ_DATA[0], index: number, column: 'left' | 'right') => {
        const actualIndex = column === 'left' ? index : index + 4;
        const isOpen = openIndex === actualIndex;

        return (
            <div
                key={actualIndex}
                className={`${styles.faqCard} ${isOpen ? styles.open : ''}`}
            >
                <button
                    className={`${styles.faqQuestion} ${isOpen ? styles.open : ''}`}
                    onClick={() => handleToggle(index, column)}
                    aria-expanded={isOpen}
                >
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={`${styles.arrowIcon} ${isOpen ? styles.rotated : ''}`}>
                        <DownArrow />
                    </span>
                </button>
                <div className={styles.faqAnswerWrapper}>
                    <div className={styles.faqAnswer}>
                        {item.answer}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.faqContainer}>
            <div className={styles.faqImageContainer}>
                <img src={faqImage} alt="" className={styles.faqImage} />
            </div>

            <div className={styles.faqContent}>
                <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.faqTitle}>
                    <Question />
                    <span className={styles.titleFull}>Câu hỏi thường gặp</span>
                    <span className={styles.titleShort}>FAQ <Question /></span>
                </FadeInSection>

                <div className={styles.faqGrid}>
                    <div className={styles.faqColumn}>
                        {leftColumnItems.map((item, index) =>
                            <FadeInSection 
                                key={index}
                                direction="slideFromLeft" 
                                threshold={0.1} 
                                triggerOnce={false} 
                                duration={0.5} 
                                delay={200 + (index * 100)} 
                                className={styles.faqItem}
                            >
                                {renderFAQItem(item, index, 'left')}
                            </FadeInSection>
                        )}
                    </div>
                    <div className={styles.faqColumn}>
                        {rightColumnItems.map((item, index) =>
                            <FadeInSection 
                                key={index + 4}
                                direction="slideFromRight" 
                                threshold={0.1} 
                                triggerOnce={false} 
                                duration={0.5} 
                                delay={200 + (index * 100)} 
                                className={styles.faqItem}
                            >
                                {renderFAQItem(item, index, 'right')}
                            </FadeInSection>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
