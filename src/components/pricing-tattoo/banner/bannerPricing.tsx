import Test from '@/assets/images/pricing/test.png';
import Test1 from '@/assets/images/pricing/test1.png';
import Logo from '@/assets/svg/Logo.svg';
import styles from './styles.module.scss';

const BannerPricing = () => {
    return (
        <div className={styles.pricingBannerImage}>
            <img src={Test1} alt="test" />
            <img src={Test} alt="test" />
            <div className={styles.overlay}></div>
            <div className={styles.logoOverlay}>
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    );
}

export default BannerPricing;
