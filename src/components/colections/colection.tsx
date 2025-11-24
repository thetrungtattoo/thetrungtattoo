import FadeInSection from '@/shared/components/fadeInSection/fadeInSection'
import ColectionsBanner from '@/assets/images/colections/colections-banner.svg'
import AvatarArtist from '@/assets/images/avatar/avatar-user.jpg'
import styles from './styles.module.scss'
import { useEffect, useRef, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/config/path'
import NewProducts from '@/assets/images/colections/newProducts.gif'
import { MessageTV, HeartIcon, HeartActiveIcon, SparklesIcon } from '@/assets/svg/svg'
import { useProducts } from '@/hooks/useProducts'
import FullColection from './fullColection/fullColection'
import { useModal } from '@/shared/contexts/ModalContext'

const getProductDescription = (description: Array<{ content?: string }>): string => {
  const passage2 = description?.[1]?.content
  return passage2 ? passage2.split('\n')[0].trim() : ''
}

const Colection = () => {
  const navListRef = useRef<HTMLDivElement>(null)
  const productsListRef = useRef<HTMLDivElement>(null)
  const [displayedItems, setDisplayedItems] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [favoriteProducts, setFavoriteProducts] = useState<Set<string>>(new Set())
  const [displayedProducts, setDisplayedProducts] = useState(3)
  const [isLoadingProducts, setIsLoadingProducts] = useState(false)
  const { openProductModal } = useModal()
  const { products } = useProducts()

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteProducts')
    if (savedFavorites) {
      try {
        const favoritesArray = JSON.parse(savedFavorites)
        setFavoriteProducts(new Set(favoritesArray))
      } catch {
        // Ignore parse errors
      }
    }
  }, [])

  const allNewProducts = useMemo(() => {
    return products
      .filter(product => product.isSectionNew)
      .sort((a, b) => a.displayOrder - b.displayOrder)
  }, [products])

  const displayedNewProducts = useMemo(() => {
    return Array.from({ length: displayedProducts }, () => allNewProducts).flat()
  }, [allNewProducts, displayedProducts])

  const toggleFavorite = (productId: string) => {
    setFavoriteProducts(prev => {
      const newFavorites = new Set(prev)
      newFavorites.has(productId) ? newFavorites.delete(productId) : newFavorites.add(productId)
      try {
        localStorage.setItem('favoriteProducts', JSON.stringify([...newFavorites]))
      } catch {
        // Ignore storage errors
      }
      return newFavorites
    })
  }

  const collectionItems = [
    { name: 'Hiện thực (Realism)', path: ROUTE_PATHS.COLLECTIONS.REALISTIC },
    { name: 'Đường nét (Linework)', path: ROUTE_PATHS.COLLECTIONS.LINEWORK },
    { name: 'Đen trắng (Black & Grey)', path: ROUTE_PATHS.COLLECTIONS.BLACK_GREY },
    { name: 'Màu nước (Watercolor)', path: ROUTE_PATHS.COLLECTIONS.WATERCOLOR },
    { name: 'Truyền thống (Traditional)', path: ROUTE_PATHS.COLLECTIONS.TRADITIONAL },
    { name: 'Nhật Bản (Japanese)', path: ROUTE_PATHS.COLLECTIONS.JAPANESE },
    { name: 'Tribal - Polynesian - Maori', path: ROUTE_PATHS.COLLECTIONS.TRIBAL_POLYNESIAN_MAORI },
    { name: 'Xăm cánh tay', path: ROUTE_PATHS.COLLECTIONS.ARM },
    { name: 'Xăm full lưng', path: ROUTE_PATHS.COLLECTIONS.BACK },
    { name: 'Xăm full chân', path: ROUTE_PATHS.COLLECTIONS.LEG },
    { name: 'Xăm ngực & vai', path: ROUTE_PATHS.COLLECTIONS.CHEST_SHOULDER },
    { name: 'Xăm cổ tay & cổ chân', path: ROUTE_PATHS.COLLECTIONS.ANKLE_WRIST_TATTOO },
    { name: 'Xăm ở bụng', path: ROUTE_PATHS.COLLECTIONS.BELLY_TATTOO },
    { name: 'Xăm sau gáy & cổ', path: ROUTE_PATHS.COLLECTIONS.NECK_TATTOO }
  ]

  useEffect(() => {
    const navList = navListRef.current
    if (!navList) return
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = navList
      if (scrollLeft >= scrollWidth - clientWidth - 200 && !isLoading) {
        setIsLoading(true)
        setTimeout(() => {
          setDisplayedItems(prev => prev + 1)
          setIsLoading(false)
        }, 300)
      }
    }
    navList.addEventListener('scroll', handleScroll)
    return () => navList.removeEventListener('scroll', handleScroll)
  }, [isLoading])

  useEffect(() => {
    const productsList = productsListRef.current
    if (!productsList) return
    const handleProductsScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = productsList
      if (scrollLeft >= scrollWidth - clientWidth - 200 && !isLoadingProducts) {
        setIsLoadingProducts(true)
        setTimeout(() => {
          setDisplayedProducts(prev => prev + 1)
          setIsLoadingProducts(false)
        }, 300)
      }
    }
    productsList.addEventListener('scroll', handleProductsScroll)
    return () => productsList.removeEventListener('scroll', handleProductsScroll)
  }, [isLoadingProducts])

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
                <div className={styles.colectionNavList} ref={navListRef}>
                    {Array.from({ length: displayedItems }, (_, setIndex) =>
                        collectionItems.map((item, itemIndex) => (
                            <Link
                                key={`${setIndex}-${itemIndex}`}
                                to={item.path}
                                className={styles.navItem}
                            >
                                {item.name}
                            </Link>
                        ))
                    )}
                    {isLoading && (
                        <div className={styles.loadingIndicator}>
                            <span>loading...</span>
                        </div>
                    )}
                </div>
            </FadeInSection>

      {/* New Collections */}
      <div className={styles.productsContainer}>
                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.productsNew}>
                    <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.productsTitle}>
                        <img src={NewProducts} alt="New Products" className={styles.newProductsIcon} />
                    </FadeInSection>
                    <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.productsNewList}>
                        {displayedNewProducts.map((product, index) => (
                            <div key={`${product.id}-${index}`} className={styles.productWrapper}>
                                <div className={styles.productItem}>
                                    <div className={styles.productImageContainer}>
                                        <img src={product.mainImage} alt={product.name} />

                                    </div>
                                    <div className={styles.productInfo}>
                                        <span className={styles.productName}>{product.name}</span>
                                        <span className={styles.productDescription}>
                                          {getProductDescription(product.description)}
                                        </span>
                                        <div className={styles.productAction}>
                                            <span className={styles.messageButton} onClick={() => openProductModal(product)}>
                                                <MessageTV />
                                            </span>
                                            <span
                                                className={`${styles.heartButton} ${favoriteProducts.has(product.id) ? styles.heartActive : ''}`}
                                                onClick={() => toggleFavorite(product.id)}
                                            >
                                                {favoriteProducts.has(product.id) ? <HeartIcon /> : <HeartActiveIcon />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.zeroBanner}><SparklesIcon /> <span>New</span></div>
                            </div>
                        ))}
                        {isLoadingProducts && (
                            <div className={styles.loadingIndicator}>
                                <span>loading more...</span>
                            </div>
                        )}
                    </FadeInSection>
                </FadeInSection>
            </div>

      {/* Full Collection */}
      <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.fullCollection}>
        <FullColection />
      </FadeInSection>
    </div>
  )
}

export default Colection
