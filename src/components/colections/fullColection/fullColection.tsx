import React from 'react'
import { FilterIcon, MessageTV, HeartIcon, HeartActiveIcon } from '@/assets/svg/svg'
import type { ProductImage } from '@/types/product'
import { useModal } from '@/shared/contexts/ModalContext'
import { useProducts } from '@/hooks/useProducts'
import { useProductFilters } from './hooks/useProductFilters'
import { useFavorites } from './hooks/useFavorites'
import { useFilterDropdown } from './hooks/useFilterDropdown'
import { useReviewCounts } from './hooks/useReviewCounts'
import styles from './styles.module.scss'

const FullColection = () => {
  const { products, loading, error } = useProducts()
  const { openProductModal } = useModal()
  const { isFavorite, toggleFavorite } = useFavorites()
  const { isExpanded, filterRef, toggleExpanded, closeDropdown } = useFilterDropdown()
  const { filterOptions, setSelectedFilter, filteredProducts } = useProductFilters(products)
  const reviewCounts = useReviewCounts(products)

  const handleFilter = (value: string) => {
    setSelectedFilter(value)
    closeDropdown()
  }

  if (loading) return <div className={styles.fullCollection}>Đang tải...</div>
  if (error) return <div className={styles.fullCollection}>Lỗi: {error}</div>

  return (
    <div className={styles.fullCollection}>
      <div className={styles.filterContainer} ref={filterRef}>
        <span className={styles.filterButton} onClick={toggleExpanded}>
          <FilterIcon /> Bộ lọc
        </span>
        <div className={styles.filterOptions}>
          {filterOptions.map((option, index) => (
            <div
              key={option.value}
              className={`${styles.filterOption} ${isExpanded ? styles.expanded : styles.collapsed}`}
              style={{ '--delay': `${index * 0.1}s`, '--index': index } as React.CSSProperties}
              onClick={() => handleFilter(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.fullCollectionContent}>
        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
              reviewCount={product.reviewCount || reviewCounts.get(product.id) || 50}
              onFavoriteClick={() => toggleFavorite(product.id)}
              onProductClick={() => openProductModal(product)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface ProductCardProps {
  product: ProductImage
  isFavorite: boolean
  reviewCount: number
  onFavoriteClick: () => void
  onProductClick: () => void
}

const getProductDescription = (description: Array<{ content?: string }>): string => {
  const passage2 = description?.[1]?.content
  return passage2 ? passage2.split('\n')[0].trim() : ''
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  reviewCount,
  onFavoriteClick,
  onProductClick
}) => (
  <div className={styles.productWrapper}>
    <div className={styles.productItem}>
      <div className={styles.productImageContainer}>
        {product.mainImage && <img src={product.mainImage} alt={product.name} />}
        <div className={styles.imageOverlay} onClick={onProductClick}>
          <span className={styles.overlayText}>XEM CHI TIẾT</span>
        </div>
      </div>
      <div className={styles.productInfo}>
        <span className={styles.productName}>{product.name}</span>
        <span className={styles.productDescription}>
          {getProductDescription(product.description)}
        </span>
        <div className={styles.productAction}>
          <span className={styles.messageButton} onClick={onProductClick}>
            <MessageTV />
          </span>
          <span
            className={`${styles.heartButton} ${isFavorite ? styles.heartActive : ''}`}
            onClick={onFavoriteClick}
          >
            {isFavorite ? <HeartIcon /> : <HeartActiveIcon />}
          </span>
        </div>
        <div className={styles.productMeta}>
          <div className={styles.ratingInfo}>
            <span className={styles.ratingValue}>
              {product.rating?.toFixed(1) || '5.0'}
            </span>
            <span className={styles.starSymbol}>★</span>
            <span className={styles.reviewCount}>
              ({reviewCount} lượt đánh giá)
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FullColection
