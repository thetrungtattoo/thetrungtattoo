/**
 * 
 * Section: ĐỐI TÁC CỦA STUDIO
 * 
*/



import React from 'react';

// Import các logo partnership
import logo1 from '@/assets/images/partnership/logo (1).svg';
import logo2 from '@/assets/images/partnership/logo (2).svg';
import logo3 from '@/assets/images/partnership/logo (3).svg';
import logo5 from '@/assets/images/partnership/logo (5).svg';
import logo6 from '@/assets/images/partnership/logo (6).svg';
import logo7 from '@/assets/images/partnership/logo (7).svg';
import FadeInSection from '@/shared/components/fadeInSection/fadeInSection';
import styles from './styles.module.scss';


const partnershipLogos = [
    { id: 1, src: logo1, alt: 'Partnership Logo 1' },
    { id: 2, src: logo2, alt: 'Partnership Logo 2' },
    { id: 3, src: logo3, alt: 'Partnership Logo 3' },
    { id: 5, src: logo5, alt: 'Partnership Logo 5' },
    { id: 6, src: logo6, alt: 'Partnership Logo 6' },
    { id: 7, src: logo7, alt: 'Partnership Logo 7' },
];

const OurPartners: React.FC = () => {

    return (
        <section className={styles.partnershipSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.title}>Đơn vị cùng hợp tác</FadeInSection>
                    <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.subtitle}>Chúng tôi luôn tự hào được đồng hành và làm việc cùng những đối tác uy tín.</FadeInSection>
                </div>

                <div className={styles.logoContainer}>
                    <div className={styles.logoSlider}>
                        {/* First set of logos */}
                        <div className={styles.logoRow}>
                            {partnershipLogos.map((logo) => (
                                <div key={logo.id} className={styles.logoItem}>
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className={styles.logoImage}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Duplicate set for seamless loop */}
                        <div className={styles.logoRow}>
                            {partnershipLogos.map((logo) => (
                                <div key={`duplicate-${logo.id}`} className={styles.logoItem}>
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className={styles.logoImage}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Third set for smoother loop on smaller screens */}
                        <div className={styles.logoRow}>
                            {partnershipLogos.map((logo) => (
                                <div key={`triplicate-${logo.id}`} className={styles.logoItem}>
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className={styles.logoImage}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
