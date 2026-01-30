import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/config/path'
import styles from './SectionCTA.module.scss'

interface SectionCTAProps {
  categoryId?: string
}

const SectionCTA: React.FC<SectionCTAProps> = ({ categoryId }) => {
  const contactPath = ROUTE_PATHS.BUSINESS.APPOINTMENT
  const explorePath = categoryId 
    ? `${ROUTE_PATHS.PRODUCTS}/${categoryId}` 
    : ROUTE_PATHS.PRODUCTS

  return (
    <div className={styles.sectionCTA}>
      <div className={styles.ctaContent}>
        <h4 className={styles.ctaTitle}>Bạn muốn thiết kế hình riêng?</h4>
        <p className={styles.ctaDescription}>
          Chúng tôi có hàng trăm mẫu thiết kế độc quyền
        </p>
      </div>
      <div className={styles.ctaActions}>
        <Link to={explorePath} className={styles.btnSecondary}>
          LIÊN HỆ
        </Link>
        <Link to={contactPath} className={styles.btnPrimary}>
          ĐẶT LỊCH TƯ VẤN
        </Link>
      </div>
    </div>
  )
}

export default SectionCTA
