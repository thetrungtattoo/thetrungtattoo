/**
 * 
 * Section: Ý NGHĨA CỦA HÌNH TATTOO
 * 
*/
import { useNavigate } from 'react-router-dom';
import { meaningCards } from '@/database/meaningCards';
import { MEANING_SECTION_CONTENT } from './utils';
import styles from './styles.module.scss';
import { FadeInSection } from '@/shared';

const MeaningTattoos = () => {
    const navigate = useNavigate();

    const handleCardClick = (cardId: string) => {
        navigate(`/meaning/${cardId}`);
    };

    return (
        <div className={styles.meaningSection}>
            <div className={styles.meaningTop}>
                <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.meaningSectionSubText}>{MEANING_SECTION_CONTENT.meaningSectionSubText}</FadeInSection>
                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.meaningSectionTitle}>{MEANING_SECTION_CONTENT.meaningSectionTitle}</FadeInSection>
            </div>

            <div className={styles.meaningCarousel}>
                <div className={styles.carouselTrack}>
                    {meaningCards.map((card, index) => {
                        const direction = index % 2 === 0 ? 'slideFromTop' : 'slideFromBottom';
                        const delay = 200 + (index * 100);
                        
                        return (
                            <FadeInSection
                                key={card.id}
                                direction={direction}
                                threshold={0.1}
                                triggerOnce={false}
                                duration={0.5}
                                delay={delay}
                                className={styles.meaningCard}
                            >
                                <div
                                    onClick={() => handleCardClick(card.id)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handleCardClick(card.id);
                                        }
                                    }}
                                >
                                    <div className={styles.cardImage}>
                                        <img src={card.image} alt={card.title} />
                                        <div className={styles.cardOverlay}>
                                            <span className={styles.overlayText}>Xem thêm</span>
                                        </div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span className={styles.cardDate}>{card.date}</span>
                                        <span className={styles.cardTitle}>{card.title}</span>
                                        <p className={styles.cardSubtitle}>{card.subtitle}</p>
                                    </div>
                                </div>
                            </FadeInSection>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MeaningTattoos;
