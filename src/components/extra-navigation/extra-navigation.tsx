import { Link } from 'react-router-dom';
import { FadeInSection } from '@/shared';
import { AngleLeft, AngleRight } from '@/assets/svg/svg';
import { ROUTE_PATHS } from '@/config/path';

import styles from './styles.module.scss';


const ExtraNavigation = () => {
    return (
        <div className={styles.extraContainer}>
            <FadeInSection className={styles.navigationItem} direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>

                <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.extraItem}>
                    <Link to={ROUTE_PATHS.COLLECTIONS.JAPANESE} className={styles.navigation}>
                        <span className={styles.previous}>Trước</span>
                        <span className={styles.extraContent}> <AngleLeft /> Bộ sưu tập Japanese Irezumi</span>
                    </Link>
                    <Link to={ROUTE_PATHS.BUSINESS.FULL_BACK} className={styles.navigation}>
                        <span className={styles.previous}>Trước</span>
                        <span className={styles.extraContent}> <AngleLeft /> Bảng giá xăm full lưng</span>
                    </Link>
                </FadeInSection>


                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.extraItem}>
                    <Link to={ROUTE_PATHS.BLOG_TATTOO.MEANING} className={styles.navigation}>
                        <span className={styles.next}>Tiếp theo</span>
                        <span className={styles.extraContent}>Ý nghĩa những hình xăm <AngleRight /></span>
                    </Link>
                    <Link to={ROUTE_PATHS.BLOG_TATTOO.STORIES} className={styles.navigation}>
                        <span className={styles.next}>Tiếp theo</span>
                        <span className={styles.extraContent}>Câu chuyện khách hàng <AngleRight /></span>
                    </Link>
                </FadeInSection>


            </FadeInSection>
        </div>
    );
}

export default ExtraNavigation;
