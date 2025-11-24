import { FEEDBACK_DATA, type Feedback } from '@/database/feedback';
import Star from '@/assets/images/feedback/start.png';
import Badge from '@/assets/images/feedback/badgeCheck.png';
import { StarFullIcon, StarSharpIcon } from '@/assets/svg/svg';
import styles from './styles.module.scss';
import { FadeInSection } from '@/shared';

const FeedBack = () => {
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasDecimal = rating % 1 !== 0;
        const stars = [];

        // Render full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={i} className={styles.starIcon}>
                    <StarFullIcon />
                </span>
            );
        }

        // Render half star if there's a decimal
        if (hasDecimal) {
            stars.push(
                <span key={fullStars} className={styles.starIcon}>
                    <StarSharpIcon />
                </span>
            );
        }

        // Render empty stars to fill up to 5
        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <span key={fullStars + (hasDecimal ? 1 : 0) + i} className={styles.starIconEmpty}>
                    <StarFullIcon />
                </span>
            );
        }

        return stars;
    };

    const renderFeedbackItem = (feedback: Feedback) => (
        <div key={feedback.id} className={styles.feedbackContent}>
            <div className={styles.feedbackItems}>
                <div className={styles.quoteTop}>"</div>
                <div className={styles.quoteBottom}>"</div>

                <div className={styles.feedbackInfo}>
                    <div className={styles.avatar}>
                        <img src={feedback.avatar} alt={feedback.name} />
                    </div>
                    <div className={styles.infoText}>
                        <span className={styles.nameText}>{feedback.name}</span>
                        <span className={styles.addressText}>{feedback.address}</span>
                        <div className={styles.ratingStars}>
                            {renderStars(feedback.rating)}
                        </div>
                    </div>
                </div>

                <span className={styles.feedbackContentText}>{feedback.content}</span>

            </div>
        </div>
    );

    return (
        <div className={styles.feedback}>
            <div className={styles.feedbackTitle}>
                <FadeInSection triggerOnce={false} delay={0.1} direction="slideFromTop" duration={0.5} threshold={0.1} className={styles.subTitleText}>
                    Xem lý do chúng tôi dẫn đầu các Studio Tattoo tại Việt Nam.
                </FadeInSection>
                <FadeInSection triggerOnce={false} delay={0.2} direction="slideFromLeft" duration={0.5} threshold={0.1} className={styles.titleText}>
                    KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI
                </FadeInSection>
                <div className={styles.feedbackImage}>
                    <FadeInSection triggerOnce={false} delay={0.3} direction="slideFromLeft" duration={0.5} threshold={0.1} className={styles.badgeCheck}>
                        <img src={Badge} alt="badge" />
                    </FadeInSection>
                    <div className={styles.badgeCheckText}>
                        <div className={styles.star}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <FadeInSection 
                                    key={index} 
                                    triggerOnce={false} 
                                    delay={200 + (index * 100)} 
                                    direction="slideFromTop" 
                                    duration={0.5} 
                                    threshold={0.1}
                                    className={styles.starIcon}
                                >
                                    <img src={Star} alt="star" />
                                </FadeInSection>
                            ))}
                        </div>
                        <FadeInSection triggerOnce={false} delay={200} direction="slideFromRight" duration={0.5} threshold={0.1} className={styles.badgeCheckText}>
                            <span>4.8 starts from 500+ reviews</span>
                        </FadeInSection>
                    </div>
                </div>
            </div>

            <div className={styles.feedbackContainer}>
                <div className={styles.feedbackCarousel}>
                    <div className={styles.carouselTrack}>
                        {FEEDBACK_DATA.map(renderFeedbackItem)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;
