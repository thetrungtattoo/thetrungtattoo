import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/path';
import { FadeInSection } from '@/shared';
import Navigation from './configs/navigation/navigation';
import { CONTENT_SERVICE } from '@/database/services';
import CustomImage from '@/assets/images/services/custom.png';
import PersonalizedImage from '@/assets/images/services/personalized.png';
import CareImage from '@/assets/images/services/care.png';
import WorkshopImage from '@/assets/images/services/training.png';
import Booking from '../homePage/components/bookingCTA/bookingCTA';
import styles from './styles.module.scss';


const Services = () => {

    return (
        <div className={styles.servicesContainer}>
            <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.servicesContent}>
                {CONTENT_SERVICE[0].openLesson.map((lesson, index) => (
                    <span key={index} className={styles.contentText}>{lesson.content}</span>
                ))}
            </FadeInSection>



            <div className={styles.serviceItem}>
                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.itemPicture}>
                    <img src={CustomImage} alt="" />
                </FadeInSection>
                <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.itemContent}>
                    <span className={styles.itemTitle}>{CONTENT_SERVICE[0].services[0].title}</span>
                    <span>{CONTENT_SERVICE[0].services[0].description} <Link to={ROUTE_PATHS.SERVICE_TATTOO.CUSTOM_TATTOOS} className={styles.viewMore}>Xem thêm...</Link></span>
                </FadeInSection>

            </div>

            <div className={styles.serviceItem}>
                <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.itemContent}>
                    <span className={styles.itemTitle}>{CONTENT_SERVICE[0].services[1].title}</span>
                    <span>{CONTENT_SERVICE[0].services[1].description} <Link to={ROUTE_PATHS.SERVICE_TATTOO.PERSONALIZED_TATTOO} className={styles.viewMore}>Xem thêm...</Link></span>
                </FadeInSection>
                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.itemPicture}>
                    <img src={PersonalizedImage} alt="" />
                </FadeInSection>
            </div>

            <div className={styles.serviceItem}>
                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.itemPicture}>
                    <img src={CareImage} alt="" />
                </FadeInSection>
                <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.itemContent}>
                    <span className={styles.itemTitle}>{CONTENT_SERVICE[0].services[2].title}</span>
                    <span>{CONTENT_SERVICE[0].services[2].description} <Link to={ROUTE_PATHS.SERVICE_TATTOO.TATTOO_CARE_REMOVAL} className={styles.viewMore}>Xem thêm...</Link></span>
                </FadeInSection>

            </div>

            <div className={styles.serviceItem}>
                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.itemContent}>
                    <span className={styles.itemTitle}>{CONTENT_SERVICE[0].services[3].title}</span>
                    <span>{CONTENT_SERVICE[0].services[3].description} <Link to={ROUTE_PATHS.SERVICE_TATTOO.TRAINING_WORKSHOP} className={styles.viewMore}>Xem thêm...</Link></span>
                </FadeInSection>
                <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.itemPicture}>
                    <img src={WorkshopImage} alt="" />
                </FadeInSection>
            </div>

            <Booking />
            <Navigation />

        </div>
    );
}

export default Services;
