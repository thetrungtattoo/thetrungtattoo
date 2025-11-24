import { Address, Phone, Email, IconClock, IconInstagram, IconFacebook, IconZalo, IconTiktok, MessageIcon } from '@/assets/svg/svg';
import logo from '@/assets/svg/Logo.svg';
import ncst from '@/assets/images/footer/ncsc.png';
import Visa from '@/assets/images/payMoney/visa.png';
import ZaloPay from '@/assets/images/payMoney/zalopay.png';
import Momo from '@/assets/images/payMoney/momo.png';
import Paypal from '@/assets/images/payMoney/paypal.png';
import styles from './styles.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerItem}>
                    <img src={logo} alt="logo" className={styles.logoFooter} />
                    <div className={styles.informationContent}>
                        <span className={styles.informationItem}>
                            <span className={styles.customIcon}> <Address /></span>
                            <span className={styles.informationText}>Địa chỉ: 52 Nguyễn Nhạc, Phường Quy Nhơn Đông, Tỉnh Gia Lai</span>
                        </span>
                        <span className={styles.informationItem}>
                            <span className={styles.informationTitle}> <Phone /></span>
                            <span className={styles.informationText}>Số điện thoại: 0378 927 665</span>
                        </span>
                        <span className={styles.informationItem}>
                            <span className={styles.informationTitle}> <Email /></span>
                            <span className={styles.informationText}>Email: thetrungtattoo@gmail.com</span>
                        </span>
                        <span className={styles.informationItem}>
                            <span className={styles.customIcon}> <IconClock /></span>
                            <span className={styles.informationText}>Giờ làm việc: 8:00 - 17:30 (Thứ 2 - Thứ 7 hằng tuần)</span>
                        </span>
                    </div>
                </div>

                <div className={`${styles.footerItem} ${styles.footerItem2}`}>
                    <span className={styles.footerItemTitle}>Về chúng tôi</span>
                    <span className={styles.footerItemSubTitle}>Giới thiệu</span>
                    <span className={styles.footerItemSubTitle}>Dịch vụ cung cấp</span>
                    <span className={styles.footerItemSubTitle}>Liên hệ với Studio</span>
                    <span className={styles.footerItemSubTitle}>Sản phẩm của chúng tôi</span>
                    <img src={ncst} alt="" className={styles.ncstLogo} />
                </div>

                <div className={`${styles.footerItem} ${styles.footerItem3}`}>
                    <span className={styles.footerItemTitle}>Hỗ trợ khách hàng</span>
                    <span className={styles.footerItemSubTitle}>Chăm sóc online với AI</span>
                    <span className={styles.footerItemSubTitle}>Góp ý sản phẩm dịch vụ</span>
                    <span className={styles.footerItemSubTitle}>Câu hỏi thường gặp</span>
                    <span className={styles.footerItemSubTitle}>Điều khoản & Điều kiện</span>
                    <span className={styles.footerItemSubTitle}>Tiêu chuẩn cộng đồng</span>
                    <span>
                        <a href="//www.dmca.com/Protection/Status.aspx?ID=a24c6b4d-f7a7-48fd-bd3a-650b8cf63176" title="DMCA.com Protection Status" > <img src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-09.png?ID=a24c6b4d-f7a7-48fd-bd3a-650b8cf63176" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                    </span>
                </div>
            </div>

            <div className={`${styles.footerItem} ${styles.footerItem4}`}>
                <span className={styles.footerItemTitle}>Theo dõi & Thanh toán</span>
                <div className={styles.footerItem4Content}>
                    <div className={styles.contactIcons}>
                        <span><IconFacebook /></span>
                        <span><MessageIcon /></span>
                        <span><IconInstagram /></span>
                        <span><IconZalo /></span>
                        <span><IconTiktok /></span>
                    </div>
                    <div className={styles.contactLine} />
                    <div className={styles.contactPayment}>
                        <img src={Visa} alt="Visa" />
                        <img src={Paypal} alt="Paypal" />
                        <img src={Momo} alt="Momo" />
                        <img src={ZaloPay} alt="ZaloPay" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
