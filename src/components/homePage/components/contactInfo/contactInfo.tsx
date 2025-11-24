/**
 * 
 * Section: THÔNG TIN LIÊN HỆ & GIỜ MỞ CỬA CỦA STUDIO
 * 
*/

import mapImage from '@/assets/images/ContactInfo/img-map.png';
import IconMap from '@/assets/svg/icon-map.svg';
import styles from './styles.module.scss';
import { Address, Email, IconClock, Phone, StarIcon } from '@/assets/svg/svg';
import { FadeInSection } from '@/shared';

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>

            <div className={styles.infoContent}>
                <div className={styles.informationContent}>
                    <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.informationTitle}>Thông tin liên hệ</FadeInSection>
                    <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={400} className={styles.informationItem}>
                        <span className={styles.customIcon}> <Address /></span>
                        <span className={styles.informationText}>Địa chỉ: 52 Nguyễn Nhạc, Phường Quy Nhơn Đông, Tỉnh Gia Lai</span>
                    </FadeInSection>
                    <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={400} className={styles.informationItem}>
                        <span className={styles.informationTitle}> <Phone /></span>
                        <span className={styles.informationText}>Số điện thoại: 0378 927 665</span>
                    </FadeInSection>
                    <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={400} className={styles.informationItem}>
                        <span className={styles.informationTitle}> <Email /></span>
                        <span className={styles.informationText}>Email: thetrungtattoo@gmail.com</span>
                    </FadeInSection>
                </div>
                <FadeInSection direction="fadeIn" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.openingHours}>
                    <span className={styles.openingHoursTitle}>Giờ mở cửa <IconClock /></span>
                    <table className={styles.hoursTable}>
                        <thead>
                            <tr>
                                <th>Thứ</th>
                                <th>Giờ làm việc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Thứ 2 - Thứ 7</td>
                                <td className={styles.time}>8:00 - 17:30</td>
                            </tr>
                            <tr>
                                <td>Chủ nhật</td>
                                <td className={styles.time}>8:00 - 17:00</td>
                            </tr>
                        </tbody>
                    </table>
                    <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.openingHoursNote}>Ngoài ra, tất cả các dịp lễ Tết và những ngày đặc biệt sẽ được thông báo thời gian làm việc trước trên website chính thức và các kênh truyền thông của chúng tôi.</FadeInSection>
                </FadeInSection>
            </div>
            <div className={styles.infoImage} >
                <div className={styles.mapImage}>
                    <img src={mapImage} alt="map" className={styles.mapImg} />
                </div>
                <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={100} className={styles.starIcon}> <StarIcon /></FadeInSection>
                <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={100} className={styles.infoImageItem}>
                    <img src={IconMap} alt="icon-map" />
                    <span>Quy Nhơn</span>
                </FadeInSection>
                <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={100} className={styles.hoangSa}>QĐ Hoàng Sa</FadeInSection>
                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={100} className={styles.truongSa}>QĐ Trường Sa</FadeInSection>
            </div>

        </div>
    );
};

export default ContactInfo;