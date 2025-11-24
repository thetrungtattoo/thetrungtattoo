/**
 * 
 * Section: PHẦN ĐẦU TRANG, GIỚI THIỆU TAGLINE CHÍNH + CTA.
 * 
*/

import { useState, useEffect } from 'react';
import heroBannerImage from '@/assets/images/hero-banner/hero-banner.png';
import heroBannerMobileImage from '@/assets/images/hero-banner/hero-banner-mobile.png';
import FadeInSection from '@/shared/components/fadeInSection/fadeInSection';
import styles from './styles.module.scss';

const HeroBanner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className={styles.heroBannerContainer}>
            <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.heroBannerTitle}>
                <span className={styles.bannerTitleText}>Tôi ở đây để biến những câu chuyện và cảm xúc của bạn thành những tác phẩm nghệ thuật sống trên làn da.</span>
            </FadeInSection>
            <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.bannerImage}>
                <img src={isMobile ? heroBannerMobileImage : heroBannerImage} alt="heroBanner" />
            </FadeInSection>
        </div>
    );
}

export default HeroBanner;
