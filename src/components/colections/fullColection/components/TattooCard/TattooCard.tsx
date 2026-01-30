import React from 'react'
import type { ProductImage } from '@/types/product'
import styles from './TattooCard.module.scss'

interface TattooCardProps {
  product: ProductImage
  isFavorite: boolean
  reviewCount: number
  onFavoriteClick: () => void
  onProductClick: () => void
}

const TattooCard: React.FC<TattooCardProps> = ({
  product,
  reviewCount,
  onProductClick,
}) => {
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onProductClick()
  }

  return (
    <article className={styles.tattooCard} onClick={handleCardClick}>
      <div className={styles.imageContainer}>
        {product.mainImage && (
          <img
            src={product.mainImage}
            alt={product.name}
            loading="lazy"
          />
        )}
        <div className={styles.overlay}>
          <span className={styles.overlayText}>XEM CHI TIẾT</span>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{product.name}</h3>

        <div className={styles.cardFooter}>
          <div className={styles.rating}>
            <span className={styles.ratingValue}>
              {product.rating?.toFixed(1) || '5.0'}
            </span>
            <span className={styles.star}>★</span>
            <span className={styles.reviewCount}>({reviewCount} đánh giá)</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default TattooCard
