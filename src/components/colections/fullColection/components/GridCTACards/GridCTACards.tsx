import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/config/path'
import styles from './GridCTACards.module.scss'

const GridCTACards: React.FC = () => {
  return (
    <>
      {/* Card 1: Discover More */}
      <Link to={ROUTE_PATHS.PRODUCTS} className={styles.ctaCard}>
        <span className={styles.ctaLabel}>MUỐN THÊM LỰA CHỌN?</span>
        <h3 className={styles.ctaTitle1}>
          Hãy tìm những hình xăm hoàn hảo dành cho bạn.
        </h3>
        <span className={styles.ctaButton1}>KHÁM PHÁ THÊM</span>
      </Link>

      {/* Card 2: Share Now */}
      <Link to={ROUTE_PATHS.BUSINESS.APPOINTMENT} className={`${styles.ctaCard} ${styles.ctaCardDark}`}>
        <h3 className={styles.ctaTitle2}>
          Bạn đã có hình xăm của mình?
        </h3>
        <p className={styles.ctaDescription}>
          Hãy chia sẻ để chúng tôi tư vấn thêm cho lựa chọn đó
        </p>
        <span className={styles.ctaButton2}>CHIA SẺ NGAY</span>
      </Link>
    </>
  )
}

export default GridCTACards
