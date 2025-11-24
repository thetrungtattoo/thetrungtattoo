import { useState, useEffect, useMemo } from 'react';

import { SparklesIcon, WarningIcon, Discount10, Discount20, Discount25, Discount30, Discount40, Discount50, Discount60 } from '@/assets/svg/svg';
import { FadeInSection } from '@/shared';
import { PRICING_DATA, formatPrice, formatPriceRange } from '@/database/pricing';
import type { PricingOption } from '@/types/product';
import Booking from '../homePage/components/bookingCTA/bookingCTA';

import styles from './styles.module.scss';

const STORAGE_KEY = 'pricingUpdateDate';
const MIN_DAYS_AGO = 2;
const MAX_DAYS_AGO = 5;

const DISCOUNT_ICONS: Record<number, React.ComponentType> = {
    10: Discount10,
    20: Discount20,
    25: Discount25,
    30: Discount30,
    40: Discount40,
    50: Discount50,
    60: Discount60,
};

const getRandomUpdateDate = (): Date => {
    const today = new Date();
    const todayKey = today.toDateString();
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
        try {
            const { date, day } = JSON.parse(stored);
            if (day === todayKey) return new Date(date);
        } catch {
        }
    }

    const daysAgo = Math.floor(Math.random() * (MAX_DAYS_AGO - MIN_DAYS_AGO + 1)) + MIN_DAYS_AGO;
    const randomDate = new Date(today);
    randomDate.setDate(today.getDate() - daysAgo);

    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        date: randomDate.toISOString(),
        day: todayKey
    }));

    return randomDate;
};

interface PriceCellProps {
    option: PricingOption;
}

const PriceCell = ({ option }: PriceCellProps) => {
    if (!option.isAvailable || option.price === '0') {
        return <span className={styles.notAvailable}>Liên hệ báo giá</span>;
    }

    const DiscountIcon = option.isOnSale && option.discountPercentage
        ? DISCOUNT_ICONS[option.discountPercentage]
        : undefined;

    return (
        <div className={styles.priceWithDiscount}>
            <span>
                {option.priceRange
                    ? formatPriceRange(option.priceRange.min, option.priceRange.max)
                    : formatPrice(option.price)
                }
            </span>
            {DiscountIcon && (
                <span className={styles.discountIcon}>
                    <DiscountIcon />
                </span>
            )}
        </div>
    );
};

const Pricing = () => {
    const [updateDate, setUpdateDate] = useState<Date>(getRandomUpdateDate);

    useEffect(() => {
        setUpdateDate(getRandomUpdateDate());
    }, []);

    const sortedTiers = useMemo(
        () => [...PRICING_DATA.tiers].sort((a, b) => a.displayOrder - b.displayOrder),
        []
    );

    return (
        <div className={styles.pricingContainer}>
            <div className={styles.pricingTitle}>
                <span className={styles.pricingTitleText}>Bảng giá xăm tại The Thế Trung Tattoo</span>
                <span className={styles.pricingSubTitle}>(Áp dụng từ {updateDate.toLocaleDateString('vi-VN')})</span>
            </div>

            <div className={styles.pricingContent}>
                <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.pricingTableWrapper}>
                    <table className={styles.pricingTable}>
                        <thead>
                            <tr>
                                <th>Vị trí</th>
                                <th>Trắng đen</th>
                                <th>Màu</th>
                                <th>Viền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedTiers.map((tier) => (
                                <tr key={tier.id}>
                                    <td>{tier.name}</td>
                                    <td><PriceCell option={tier.blackWhite} /></td>
                                    <td><PriceCell option={tier.color} /></td>
                                    <td><PriceCell option={tier.outline} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.pricingNote}>
                        <span>
                            Không áp dụng nhiều chương trình khuyến mãi cùng lúc.
                        </span>
                        <span>
                            Ngày cập nhật mới nhất: {updateDate.toLocaleDateString('vi-VN')}
                        </span>
                    </div>
                    <div className={styles.pricingWarning}>
                        <WarningIcon />
                        <span>
                            - {PRICING_DATA.disclaimer} <br />
                            - {PRICING_DATA.disclaimer2}
                        </span>
                    </div>
                </FadeInSection>

                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.pricingText}>
                    Ngoài ra, The Thế Trung Tattoo cung cấp dịch vụ xăm lẻ chuyên nghiệp, bao gồm đánh bóng và tô màu chi tiết cho từng hình xăm, giúp đảm bảo độ bền, màu sắc rõ nét và chân thực theo thời gian. Với chi phí chỉ từ <b>một triệu đồng/buổi</b> <SparklesIcon />, đây là lựa chọn hoàn hảo cho những ai muốn sở hữu hình xăm đẹp, chất lượng cao mà vẫn tiết kiệm chi phí.
                </FadeInSection>

                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.additionalServices}>
                    <span className={styles.additionalServicesTitle}>Ưu đãi & Dịch vụ miễn phí khi xăm tại Studio</span>
                    <div className={styles.additionalServicesList}>
                        {PRICING_DATA.additionalServices.map((service) => (
                            <div key={service.id} className={styles.serviceItem}>
                                <span className={styles.serviceName}>
                                    <span className={styles.servicePrice}>
                                        {service.price}
                                        {service.icon === 'sparkles' && <SparklesIcon />}
                                    </span>
                                    {service.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>
            <div className={styles.pricingContactContainer}>
                <span className={styles.pricingContact}>Bảng giá chi tiết cho các dịch vụ khác của The Thế Trung Tattoo Studio đang được cập nhật để đảm bảo độ chính xác và trải nghiệm minh bạch cho Khách hàng. </span>
                <span className={styles.pricingContactUpdate}>Đang cập nhật...</span>
                <span className={styles.pricingsub}>Vui lòng liên hệ Studio để được tư vấn về các loại dịch vụ khác.</span>
            </div>

            <Booking />
        </div>
    );
}

export default Pricing;
