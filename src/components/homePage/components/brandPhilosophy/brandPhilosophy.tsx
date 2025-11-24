/**
 * 
 * Section: TRIẾT LÝ THƯƠNG HIỆU
 * 
*/
import Building from '@/assets/images/brandPhilosophy/product4.1.jpg';
import Engineers from '@/assets/images/brandPhilosophy/productDetails-3.jpg';
import styles from './styles.module.scss';
import { BRANCH_CONTENT_DATA } from './config';
import { BadgeCheckAlt } from '@/assets/svg/svg';
import FadeInSection from '@/shared/components/fadeInSection/fadeInSection';
import { useScrollAnimation } from '@/shared/hooks';
import { useCountUp } from '@/shared/hooks/useCountUp';

const BrandPhilosophy = () => {
    const { elementRef: numberContainerRef, isVisible: isNumberContainerVisible } = useScrollAnimation({
        threshold: 0.1,
        triggerOnce: true
    });

    const fadeInDelay = 400;
    const fadeInDuration = 900;
    const animationCompleteDelay = fadeInDelay + fadeInDuration;

    const count = useCountUp({
        target: 12,
        duration: 2000,
        startTrigger: isNumberContainerVisible,
        delay: animationCompleteDelay
    });

    return (
        <div className={styles.brandContainer}>
            <div className={styles.branchLeft}>
                <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.boxImageTop}>
                    <img src={Engineers} alt="Engineers" className={styles.engineersImage} />
                </FadeInSection>
                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.boxImageMain}>
                    <img src={Building} alt="Building" className={styles.buildingImage} />
                </FadeInSection>
                <div ref={numberContainerRef}>
                    <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.numberContainer}>
                        <span className={styles.numberYear}>{count}+</span>
                        <span className={styles.numberText}>NĂM KINH <br /> NGHIỆM</span>
                    </FadeInSection>
                </div>
            </div>
            <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.branchContent}>
                <span className={styles.subertitle}>Bản sắc thương hiệu The Thế Trung Tattoo</span>
                <span className={styles.title}>Điều gì làm nên giá trị khác biệt ?</span>
                <span className={styles.description}>Không chạy theo xu hướng – chúng tôi kiến tạo chuẩn mực mới trong nghệ thuật xăm chuyên nghiệp. Nơi kỹ thuật đỉnh cao, an toàn tuyệt đối và cảm xúc nghệ thuật hòa quyện, mang đến trải nghiệm xăm độc bản, tinh tế và đậm dấu ấn cá nhân cho từng khách hàng.</span>
                <div className={styles.branchItems}>
                    <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.ItemsContent}>
                        <span><BadgeCheckAlt /> {BRANCH_CONTENT_DATA[0].title}</span>
                        <span><BadgeCheckAlt /> {BRANCH_CONTENT_DATA[1].title}</span>
                        <span><BadgeCheckAlt /> {BRANCH_CONTENT_DATA[2].title}</span>
                    </FadeInSection>
                    <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.ItemsContent}>
                        <span><BadgeCheckAlt /> {BRANCH_CONTENT_DATA[3].title}</span>
                        <span><BadgeCheckAlt /> {BRANCH_CONTENT_DATA[4].title}</span>
                        <span><BadgeCheckAlt /> {BRANCH_CONTENT_DATA[5].title}</span>
                    </FadeInSection>
                </div>
            </FadeInSection>
        </div>
    );
}

export default BrandPhilosophy;
