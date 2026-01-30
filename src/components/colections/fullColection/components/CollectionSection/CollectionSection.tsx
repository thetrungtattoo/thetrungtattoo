import React from 'react'
import type { ProductImage } from '@/types/product'
import TattooCard from '../TattooCard'
import SectionCTA from '../SectionCTA'
import GridCTACards from '../GridCTACards'
import styles from './CollectionSection.module.scss'

interface CollectionSectionProps {
  label: string
  title: string
  categoryId: string
  products: ProductImage[]
  isFavorite: (productId: string) => boolean
  getReviewCount: (productId: string) => number
  onFavoriteClick: (productId: string) => void
  onProductClick: (product: ProductImage) => void
}

const CollectionSection: React.FC<CollectionSectionProps> = ({
  label,
  title,
  categoryId,
  products,
  isFavorite,
  getReviewCount,
  onFavoriteClick,
  onProductClick,
}) => {
  if (products.length === 0) return null

  return (
    <section className={styles.collectionSection} id={categoryId}>
      {/* Section Header */}
      <header className={styles.sectionHeader}>
        <div className={styles.headerAccent} />
        <div className={styles.headerContent}>
          <span className={styles.sectionLabel}>{label}</span>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
      </header>

      {/* Products Grid */}
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <TattooCard
            key={product.id}
            product={product}
            isFavorite={isFavorite(product.id)}
            reviewCount={getReviewCount(product.id)}
            onFavoriteClick={() => onFavoriteClick(product.id)}
            onProductClick={() => onProductClick(product)}
          />
        ))}
        {/* CTA Cards at end of grid */}
        <GridCTACards />
      </div>

      {/* Section CTA */}
      <SectionCTA categoryId={categoryId} />
    </section>
  )
}

export default CollectionSection
