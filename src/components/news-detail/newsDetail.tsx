/**
 * NewsDetail - Trang chi tiết tin tức
 */
import { useParams, useNavigate } from 'react-router-dom';
import { getNewsCardById, newsCards } from '@/database/newsCards';
import { FadeInSection } from '@/shared';
import { BackButtonIcon } from '@/assets/svg/svg';
import styles from './styles.module.scss';

const NewsDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const news = id ? getNewsCardById(id) : undefined;

    if (!news) {
        return (
            <div className={styles.notFound}>
                <h1>Không tìm thấy bài viết</h1>
                <p>Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                <button onClick={() => navigate('/')}>Về trang chủ</button>
            </div>
        );
    }

    const otherNews = newsCards.filter(n => n.id !== news.id);

    return (
        <div className={styles.newsDetailContainer}>
            <FadeInSection direction="fadeIn" threshold={0.1} triggerOnce={false} duration={0.5} delay={100}>
                <article className={styles.articleContent}>
                    <header className={styles.articleHeader}>
                        <span className={styles.backButton} onClick={() => navigate('/', { state: { skipLoading: true, scrollToSection: 'latest-news' } })}><BackButtonIcon /> Quay lại</span>
                        <span className={styles.category}>{news.category}</span>
                        <h1 className={styles.title}>{news.title}</h1>
                        <div className={styles.meta}>
                            <span className={styles.date}>{news.date}</span>
                            <span className={styles.separator}>•</span>
                            <span className={styles.author}>{news.author}</span>
                        </div>
                    </header>

                    <div className={styles.featuredImage}>
                        <img src={news.image} alt={news.title} />
                    </div>

                    <div className={styles.contentBody}>
                        {news.content.map((paragraph, index) => (
                            <FadeInSection
                                key={index}
                                direction="slideFromBottom"
                                threshold={0.1}
                                triggerOnce={false}
                                duration={0.4}
                                delay={100 + index * 50}
                            >
                                <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
                            </FadeInSection>
                        ))}
                    </div>
                </article>
            </FadeInSection>

            {otherNews.length > 0 && (
                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <section className={styles.relatedNews}>
                        <h2 className={styles.relatedTitle}>Tin tức khác</h2>
                        <div className={styles.relatedGrid}>
                            <div className={styles.relatedTrack}>
                                {otherNews.map((item) => (
                                    <div
                                        key={item.id}
                                        className={styles.relatedCard}
                                        onClick={() => navigate(`/news/${item.id}`)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                navigate(`/news/${item.id}`);
                                            }
                                        }}
                                    >
                                        <div className={styles.relatedImage}>
                                            <img src={item.image} alt={item.title} />
                                            <div className={styles.cardOverlay}>
                                                <span className={styles.overlayText}>Xem chi tiết</span>
                                            </div>
                                        </div>
                                        <div className={styles.relatedContent}>
                                            <span className={styles.relatedCategory}>{item.category}</span>
                                            <span className={styles.relatedCardTitle}>{item.title}</span>
                                            <span className={styles.relatedDate}>{item.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </FadeInSection>
            )}
        </div>
    );
};

export default NewsDetail;
