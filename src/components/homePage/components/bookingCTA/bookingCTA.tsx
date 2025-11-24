/**
 * 
 * Section: CALL-TO-ACTION ĐẶT LỊCH
 * 
*/
import bookingImage from '@/assets/images/booking-section/group-map.png';
import { FadeInSection } from '@/shared';
import styles from './styles.module.scss';

const Booking = () => {
    return (
        <div className={styles.bookingContainer}>
            <img src={bookingImage} alt="Booking " className={styles.bookingImage} />
            <div className={styles.bookingOverlay}></div>

            <div className={styles.bookingContent}>
                <div className={styles.bookingTitle}>
                    <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.bookingSubText}>Đăng ký ngay để nhận các ưu đãi đặc biệt, khuyến mãi hấp dẫn và tin tức mới nhất.</FadeInSection>
                    <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.titleText}>Đăng ký ngay</FadeInSection>
                    <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.bookingText}>Đăng ký ngay hôm nay để không bỏ lỡ những ưu đãi đặc biệt và khuyến mãi hấp dẫn chỉ dành riêng cho khách hàng thân thiết. Cập nhật sớm nhất tin tức, sự kiện tattoo, cùng những mẫu xăm độc quyền và cảm hứng nghệ thuật mới nhất từ The Thế Trung Tattoo Studio – nơi mỗi hình xăm là một tác phẩm mang dấu ấn cá nhân.</FadeInSection>
                </div>
                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={300} className={styles.inputContainer}>
                    <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={300} className={styles.bookingInput}>
                    <input  type="text" placeholder="Nhập email..." />
                    </FadeInSection>
                    
                    <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={300}>
                    <span className={styles.bookingButton}>Đăng ký ngay</span>
                    </FadeInSection>
                </FadeInSection>
            </div>
        </div>
    );
}

export default Booking;
