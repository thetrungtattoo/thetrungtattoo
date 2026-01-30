import FadeInSection from '@/shared/components/fadeInSection/fadeInSection'
import ColectionsBanner from '@/assets/images/colections/colections-banner.svg'
import AvatarArtist from '@/assets/images/avatar/avatar-user.jpg'
import styles from './styles.module.scss'
import { useMemo } from 'react'
import { useProducts } from '@/hooks/useProducts'
import FullColection from './fullColection/fullColection'
import { getCategoryGroups } from './fullColection/utils/getCategoryGroups'
import { getCategoryDisplayInfo } from './fullColection/config/categoryConfig'

const Colection = () => {
  const { products } = useProducts()

  const navItems = useMemo(() => {
    const groups = getCategoryGroups(products)
    return groups.map((g) => ({
      id: getCategoryDisplayInfo(g.category).id,
      title: getCategoryDisplayInfo(g.category).title,
    }))
  }, [products])

  return (
    <div className={styles.colectionContainer}>
      {/* Banner */}
      <div className={styles.colectionBanner}>
        <div className={styles.colectionBannerContent}>
          <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.colBanItem}>
            <div className={styles.colBanItemContent}>
              <img src={AvatarArtist} alt="Avatar Artist" />
              <span>Artist: <span className={styles.bannerArtistName}>Võ Thế Trung</span></span>
            </div>
            <span className={styles.bannerSubText}>Tận hưởng sự hỗ trợ miễn phí 1:1 từ chính chuyên gia tư vấn cá nhân của bạn</span>
            <div className={styles.bannerButtonContainer}>
              <button className={styles.scheduleButton}>Lên lịch tư vấn</button>
              <button className={styles.messageButton}>Gửi tin nhắn</button>
            </div>
          </FadeInSection>

          <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.colBanItem}>
            <span className={styles.bannerTitle}>Bộ Sưu Tập Nghệ Thuật Hình Xăm</span>
            <span className={styles.bannerSubText}>Mỗi hình xăm là một tác phẩm nghệ thuật mang dấu ấn cá nhân. <br /> Dù là xăm đen trắng tối giản hay xăm màu rực rỡ, mỗi nét mực đều kể một câu chuyện — câu chuyện của chính bạn</span>
            <button className={styles.bannerButton}>Tư vấn thiết kế độc quyền</button>
          </FadeInSection>
        </div>
        <FadeInSection className={styles.colectionBannerImage} direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
          <img src={ColectionsBanner} alt="Colections Banner" />
        </FadeInSection>
      </div>

      {/* Navigation bar */}
      <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.colectionNav}>
        <span className={styles.colectionNavTitle}>Tất cả bộ sưu tập:</span>
        <div className={styles.colectionNavList}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.navItem}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {item.title}
            </button>
          ))}
        </div>
      </FadeInSection>

      {/* Full Collection */}
      <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.fullCollection}>
        <FullColection />
      </FadeInSection>
    </div>
  )
}

export default Colection
