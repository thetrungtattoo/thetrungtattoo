import React, { useMemo } from 'react'
import { useModal } from '@/shared/contexts/ModalContext'
import { useProducts } from '@/hooks/useProducts'
import { useFavorites } from './hooks/useFavorites'
import { useReviewCounts } from './hooks/useReviewCounts'
import { CollectionSection } from './components'
import { getCategoryDisplayInfo } from './config/categoryConfig'
import { getCategoryGroups } from './utils/getCategoryGroups'
import styles from './styles.module.scss'

const FullColection: React.FC = () => {
  const { products, loading, error } = useProducts()
  const { openProductModal } = useModal()
  const { isFavorite, toggleFavorite } = useFavorites()
  const reviewCounts = useReviewCounts(products)

  const categoryGroups = useMemo(() => getCategoryGroups(products), [products])

  const getReviewCount = (productId: string): number => {
    const product = products.find((p) => p.id === productId)
    return product?.reviewCount || reviewCounts.get(productId) || 50
  }

  if (loading) {
    return (
      <div className={styles.fullCollection}>
        <div className={styles.loadingState}>Đang tải bộ sưu tập...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.fullCollection}>
        <div className={styles.errorState}>Lỗi: {error}</div>
      </div>
    )
  }

  if (categoryGroups.length === 0) {
    return (
      <div className={styles.fullCollection}>
        <div className={styles.emptyState}>Chưa có sản phẩm nào.</div>
      </div>
    )
  }

  return (
    <div className={styles.fullCollection}>
      {categoryGroups.map(({ category, products: categoryProducts }) => {
        const displayInfo = getCategoryDisplayInfo(category)
        
        return (
          <CollectionSection
            key={category}
            label={displayInfo.label}
            title={displayInfo.title}
            categoryId={displayInfo.id}
            products={categoryProducts}
            isFavorite={isFavorite}
            getReviewCount={getReviewCount}
            onFavoriteClick={toggleFavorite}
            onProductClick={openProductModal}
          />
        )
      })}
    </div>
  )
}

export default FullColection
