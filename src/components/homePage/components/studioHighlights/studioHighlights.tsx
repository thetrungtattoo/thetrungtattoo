/**
 * Studio Highlights Section
 * Displays studio's unique features and technology highlights
 */

import React from 'react';
import featuresImage from '@/assets/images/studioHighlights/featuresImage.jpg';
import studioImage from '@/assets/images/studioHighlights/bannerLeft.png';
import FadeInSection from '@/shared/components/fadeInSection/fadeInSection';
import { MicrochipAiIcon, PlayIcon } from '@/assets/svg/svg';

import styles from './styles.module.scss';

interface Feature {
  id: string;
  text: string;
}

const FEATURES: Feature[] = [
  { id: 'ai-art', text: 'AI kiến tạo nghệ thuật' },
  { id: 'ai-artist', text: 'Artist chuyên nghiệp kết hợp với AI' },
  { id: 'digital-process', text: 'Quy trình số hóa – An toàn tuyệt đối' },
  { id: 'smart-service', text: 'Dịch vụ thông minh 4.0' }
];

const RIPPLE_COUNT = 3;
const RIPPLE_DELAYS = [0, 0.6, 1.2];

const StudioHighlights: React.FC = () => {
  return (
    <div className={styles.studioHighlights}>
      <FadeInSection direction="slideFromLeft" duration={0.5} delay={200} threshold={0.1} triggerOnce={false} className={styles.studioImage}>
        <img src={studioImage} alt="Studio workspace showcasing tattoo technology" />
      </FadeInSection>

      <div className={styles.studioContainer}>
        <FadeInSection direction="slideFromTop" duration={0.5} delay={200} threshold={0.1} triggerOnce={false} className={styles.studioSubtitle}>Điều gì làm chúng tôi khác biệt?</FadeInSection>
        <FadeInSection direction="slideFromRight" duration={0.5} delay={200} threshold={0.1} triggerOnce={false} className={styles.studioTitle}>Công nghệ hóa hình xăm của bạn.</FadeInSection>
        <FadeInSection direction="slideFromBottom" duration={0.5} delay={200} threshold={0.1} triggerOnce={false} className={styles.studioText}>
          Chúng tôi kết hợp công nghệ hiện đại và nghệ thuật xăm truyền thống để biến mọi ý tưởng thành tác phẩm độc bản. 
          Chúng tôi đồng hành cùng bạn từ concept, thiết kế đến từng nét kim, mang đến trải nghiệm xăm chuyên nghiệp, 
          an toàn và trọn vẹn – nơi hình xăm kể câu chuyện của chính bạn.
        </FadeInSection>

        <FadeInSection direction="slideFromBottom" duration={0.5} delay={200} threshold={0.1} triggerOnce={false} className={styles.studioFeatures}>
          <FadeInSection direction="slideFromLeft" duration={0.5} delay={200} threshold={0.1} triggerOnce={false} className={styles.featuresImage}>
            <img src={featuresImage} alt="Studio features and technology showcase" />
            <FadeInSection direction="slideFromRight" duration={0.5} delay={400} threshold={0.1} triggerOnce={false} className={styles.studioImageOverlay}>
              <PlayIcon />
              {Array.from({ length: RIPPLE_COUNT }, (_, i) => (
                <span
                  key={i}
                  className={styles.rippleCircle}
                  style={{ animationDelay: `${RIPPLE_DELAYS[i]}s` }}
                />
              ))}
            </FadeInSection>
          </FadeInSection>

          <div className={styles.featuresItem}>
            {FEATURES.map((feature, index) => (
              <FadeInSection
                key={feature.id}
                direction="slideFromRight"
                duration={0.5}
                delay={300 + (index * 100)}
                threshold={0.1}
                triggerOnce={false}
                className={styles.itemContent}
              >
                <span className={styles.itemIcon}>
                  <MicrochipAiIcon />
                </span>
                <span className={styles.itemText}>{feature.text}</span>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default StudioHighlights;
