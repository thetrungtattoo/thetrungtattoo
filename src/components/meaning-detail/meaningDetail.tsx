/**
 * MeaningDetail - Trang chi tiết ý nghĩa hình xăm
 */
import { useParams, useNavigate } from 'react-router-dom';
import { getMeaningCardById, meaningCards } from '@/database/meaningCards';
import { FadeInSection } from '@/shared';
import { BackButtonIcon } from '@/assets/svg/svg';
import styles from './styles.module.scss';

const MeaningDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const meaning = id ? getMeaningCardById(id) : undefined;

    if (!meaning) {
        return (
            <div className={styles.notFound}>
                <h1>Không tìm thấy bài viết</h1>
                <p>Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                <button onClick={() => navigate('/')}>Về trang chủ</button>
            </div>
        );
    }

    const otherMeanings = meaningCards.filter(m => m.id !== meaning.id);

    const renderContent = (section: typeof meaning.content[0]) => {
        switch (section.type) {
            case 'title':
                return <h2 className={styles.sectionTitle}>{section.content}</h2>;
            case 'subtitle':
                return <h3 className={styles.sectionSubtitle}>{section.content}</h3>;
            case 'image':
                return (
                    <div className={styles.contentImage}>
                        <img src={section.image} alt={section.content} />
                        <span className={styles.imageCaption}>{section.content}</span>
                    </div>
                );
            case 'text':
                return (
                    <div className={styles.textBlock}>
                        <p>{section.content}</p>
                        {section.content2 && <p>{section.content2}</p>}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.meaningDetailContainer}>
            <FadeInSection direction="fadeIn" threshold={0.1} triggerOnce={false} duration={0.5} delay={100}>
                <article className={styles.articleContent}>
                    <header className={styles.articleHeader}>
                        <span 
                            className={styles.backButton} 
                            onClick={() => navigate('/', { state: { skipLoading: true, scrollToSection: 'meaning-tattoos' } })}
                        >
                            <BackButtonIcon /> Quay lại
                        </span>
                        <span className={styles.category}>{meaning.category}</span>
                        <h1 className={styles.title}>{meaning.title}</h1>
                        <div className={styles.meta}>
                            <span className={styles.date}>{meaning.date}</span>
                            <span className={styles.separator}>•</span>
                            <span className={styles.author}>{meaning.author}</span>
                            <span className={styles.separator}>•</span>
                            <span className={styles.readTime}>{meaning.readTime}</span>
                        </div>
                        <p className={styles.subtitle}>{meaning.subtitle}</p>
                    </header>

                    <div className={styles.featuredImage}>
                        <img src={meaning.image} alt={meaning.title} />
                    </div>

                    <div className={styles.contentBody}>
                        {meaning.content.map((section, index) => (
                            <FadeInSection
                                key={index}
                                direction="slideFromBottom"
                                threshold={0.1}
                                triggerOnce={false}
                                duration={0.4}
                                delay={100 + index * 50}
                            >
                                {renderContent(section)}
                            </FadeInSection>
                        ))}
                    </div>

                    {meaning.tags.length > 0 && (
                        <div className={styles.tagsSection}>
                            <span className={styles.tagsLabel}>Tags:</span>
                            <div className={styles.tagsList}>
                                {meaning.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>#{tag}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </FadeInSection>

            {otherMeanings.length > 0 && (
                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <section className={styles.relatedMeanings}>
                        <h2 className={styles.relatedTitle}>Khám phá thêm ý nghĩa khác</h2>
                        <div className={styles.relatedGrid}>
                            <div className={styles.relatedTrack}>
                                {otherMeanings.map((item) => (
                                    <div
                                        key={item.id}
                                        className={styles.relatedCard}
                                        onClick={() => navigate(`/meaning/${item.id}`)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                navigate(`/meaning/${item.id}`);
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

export default MeaningDetail;
