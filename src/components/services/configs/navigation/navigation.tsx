import { FadeInSection } from '@/shared';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/path';
import { AngleRight, SparklesIcon } from '@/assets/svg/svg';
import styles from './styles.module.scss';

const Navigation = () => {
    return (
        <div className={styles.navigation}>
                <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.navigationTitle}>Điều hướng nhanh: <SparklesIcon /> </FadeInSection>
                <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.navigationContents}>
                    <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.navigationItem}>
                        <Link to={ROUTE_PATHS.SERVICE_TATTOO.CUSTOM_TATTOOS} className={styles.navigationLink}>
                            <span className={styles.navlabel}>Dịch vụ</span>
                            <span className={styles.navigationLabel}>Xăm nghệ thuật theo mẫu <AngleRight/></span>
                        </Link>
                        <Link to={ROUTE_PATHS.SERVICE_TATTOO.PERSONALIZED_TATTOO} className={styles.navigationLink}>
                            <span className={styles.navlabel}>Dịch vụ</span>
                            <span className={styles.navigationLabel}>Thiết kế và xăm theo yêu cầu <AngleRight/></span>
                        </Link>
                    </FadeInSection>

                    <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.navigationItem}>
                        <Link to={ROUTE_PATHS.SERVICE_TATTOO.TATTOO_CARE_REMOVAL} className={styles.navigationLink}>
                            <span className={styles.navlabel}>Dịch vụ</span>
                            <span className={styles.navigationLabel}>Chăm sóc sau xăm & Xóa xăm <AngleRight/></span>
                        </Link>
                        <Link to={ROUTE_PATHS.SERVICE_TATTOO.TRAINING_WORKSHOP} className={styles.navigationLink}>
                            <span className={styles.navlabel}>Dịch vụ</span>
                            <span className={styles.navigationLabel}>Đào tạo & Workshop <AngleRight/></span>
                        </Link>
                    </FadeInSection>
                </FadeInSection>
            </div>
    );
}

export default Navigation;