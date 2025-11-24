import { useMemo } from 'react';
import bookingImage from '@/assets/svg/booking.svg';
import avatarUser from '@/assets/images/avatar/avatar-user.jpg';
import {
    IconZalo,
    Phone,
    MessageIcon,
    IconFacebook,
    FullName,
    Email,
    Phone as PhoneIcon,
    Address,
    WalletIcon,
    SendIcon,
} from '@/assets/svg/svg';
import { BUDGET_OPTIONS, SERVICE_TYPES, VIETNAM_ADDRESSES } from './config';
import { useForm } from './hooks/useForm';
import { FadeInSection } from '@/shared';
import FormInput from './components/FormInput';
import DropdownSelect from './components/DropdownSelect';
import AutocompleteInput from './components/AutocompleteInput';
import DatePicker from '../config/Date/DatePicker';
import { useToast } from '@/common/toast/toastContext';
import styles from './styles.module.scss';

const Booking = () => {
    const { formData, handleInputChange, validateForm, resetForm } = useForm();
    const { showToast } = useToast();

    const budgetOptions = useMemo(() =>
        BUDGET_OPTIONS.map(option => ({ value: option, label: option })),
        []
    );

    const addressOptions = useMemo(() =>
        VIETNAM_ADDRESSES.map(addr => ({
            value: addr.address,
            label: `${addr.address} - ${addr.province}`
        })),
        []
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            console.log('Form submitted:', formData);
            showToast('Error 503: Hệ thống đang bị quá tải', 'error');
            resetForm();
        } else {
            showToast('Vui lòng kiểm tra lại thông tin', 'error');
        }
    };

    return (
        <div className={styles.bookingContainer}>
            <div className={styles.bookingBanner}>
                <FadeInSection className={styles.bannerItem} direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <span className={styles.bannerTitle}>Bạn đã sẵn sàng cho một kiệt tác mới của mình chưa?</span>
                    <span className={styles.bannerText}>Hôm nay đã là ngày {new Date().toLocaleDateString('vi-VN')} rồi!</span>
                    <span className={styles.bannerSubText}>Đặt lịch ngay để các Artist của chúng tôi biến ý tưởng của bạn thành tác phẩm nghệ thuật độc nhất!</span>
                </FadeInSection>
                <FadeInSection className={styles.bannerContact} direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <span className={styles.bannerContactItemTitle}>Chuyên gia tư vấn riêng của bạn</span>

                    <div className={styles.bannerContactItemContainer}>
                        <div className={styles.bannerContactItem}>
                            <img src={avatarUser} alt="avatarUser" />
                            <span className={styles.bannerContactItemText}>Artist:  Võ Thế Trung</span>
                        </div>

                        <div className={styles.bannerContactLine}></div>
                        <div className={styles.bannerContactInfo}>
                            <span className={styles.bannerInfoPhone}><Phone /> 0378 927 665</span>
                            <div className={styles.contactIcons}>
                                <span><IconFacebook /></span>
                                <span><MessageIcon /></span>
                                <span><IconZalo /></span>
                            </div>
                        </div>
                    </div>
                    <span className={styles.bannerContactText}>Liên hệ ngay hôm nay để được tư vấn miễn phí với chuyên gia tư vấn của chúng tôi</span>
                </FadeInSection>
            </div>

            <FadeInSection className={styles.bookingContent} direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                <div className={styles.bookingImage}>
                    <img src={bookingImage} alt="bookingImage" />
                </div>

                <div className={styles.bookingFormContent}>
                    <form onSubmit={handleSubmit} className={styles.bookingForm}>
                        <div className={styles.formRow}>
                            <FormInput
                                label="Tên Khách Hàng"
                                value={formData.fullName}
                                onChange={(value) => handleInputChange('fullName', value)}
                                placeholder="Nhập họ và tên..."
                                required
                                icon={<FullName />}
                            />

                            <FormInput
                                label="Địa chỉ Email"
                                type="email"
                                value={formData.email}
                                onChange={(value) => handleInputChange('email', value)}
                                placeholder="Nhập email..."
                                required
                                icon={<Email />}
                            />
                        </div>

                        <div className={styles.formRow}>
                            <FormInput
                                label="Số điện thoại"
                                type="tel"
                                value={formData.phone}
                                onChange={(value) => handleInputChange('phone', value)}
                                placeholder="Nhập số điện thoại..."
                                required
                                icon={<PhoneIcon />}
                            />

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    Ngày dự kiến <span className={styles.required}>(*)</span>
                                </label>
                                <DatePicker
                                    value={formData.date}
                                    onChange={(date) => handleInputChange('date', date)}
                                    placeholder="Chọn ngày..."
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <DropdownSelect
                                label="Ngân sách của bạn"
                                value={formData.budget}
                                onChange={(value) => handleInputChange('budget', value)}
                                options={budgetOptions}
                                placeholder="Chọn Ngân Sách"
                                required
                                icon={<WalletIcon />}
                            />

                            <AutocompleteInput
                                label="Địa chỉ khách hàng"
                                value={formData.address}
                                onChange={(value) => handleInputChange('address', value)}
                                options={addressOptions}
                                placeholder="Nhập địa chỉ..."
                                required
                                icon={<Address />}
                                minLength={2}
                            />
                        </div>



                        <div className={styles.formGroup}>
                            <label className={styles.formLabels}>
                                Chọn thể loại hình xăm bạn muốn thực hiện: <span className={styles.requiredText}>(*)</span>
                            </label>
                            <div className={styles.serviceOptions}>
                                {SERVICE_TYPES.map((service, index) => (
                                    <label key={index} className={styles.serviceOption}>
                                        <input
                                            type="radio"
                                            name="serviceType"
                                            value={service}
                                            checked={formData.serviceType === service}
                                            onChange={(e) => handleInputChange('serviceType', e.target.value)}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioLabel}>{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Đặt lịch ngay <SendIcon />
                        </button>
                    </form>
                </div>
            </FadeInSection>
        </div>
    );
}

export default Booking;
