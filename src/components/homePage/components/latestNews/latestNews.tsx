/**
 * Section: TIN TỨC MỚI NHẤT
 */
import { useNavigate } from 'react-router-dom';
import { newsCards } from '@/database/newsCards';
import { NEWS_SECTION_CONTENT } from './utils';
import { FadeInSection } from '@/shared';
import styles from './styles.module.scss';

const LatestNews = () => {
    const navigate = useNavigate();

    const handleCardClick = (cardId: string) => {
        navigate(`/news/${cardId}`);
    };

    return (
        <div className={styles.newsSection}>
            <div className={styles.newsTop}>
                <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.newsSectionSubText}>
                    {NEWS_SECTION_CONTENT.sectionSubText}
                </FadeInSection>
                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.newsSectionTitle}>
                    {NEWS_SECTION_CONTENT.sectionTitle}
                </FadeInSection>
            </div>

            <div className={styles.newsCarousel}>
                <div className={styles.carouselTrack}>
                    {newsCards.map((card, index) => {
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
                                className={styles.newsCard}
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
                                            <span className={styles.overlayText}>Đọc thêm</span>
                                        </div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span className={styles.cardCategory}>{card.category}</span>
                                        <span className={styles.cardDate}>{card.date}</span>
                                        <span className={styles.cardTitle}>{card.title}</span>
                                        <p className={styles.cardExcerpt}>{card.excerpt}</p>
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

export default LatestNews;
