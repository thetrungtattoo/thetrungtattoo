import React, { useState, useMemo, useEffect, useCallback } from 'react'
import type { ProductImage } from '@/types/product'
import styles from './styles.module.scss'
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon, QuickFacebook, IconZalo, QuickPhone } from '@/assets/svg/svg'

interface MessageModalProps {
  product: ProductImage | null
  isOpen: boolean
  onClose: () => void
}

const calcReviewCount = (id: string): number => {
  const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return Math.floor((seed % 200) + 50)
}

const MessageModal: React.FC<MessageModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [showContactPopup, setShowContactPopup] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('0968 664 080')

  const reviewCount = useMemo(() => {
    if (!product) return 0
    return product.reviewCount || calcReviewCount(product.id)
  }, [product])

  const detailImages = useMemo(() => {
    if (!product) return []
    return product.detailImages?.length > 0 ? product.detailImages : [product.mainImage].filter(Boolean)
  }, [product])

  const currentImage = useMemo(() => {
    if (!detailImages.length) return product?.mainImage || ''
    const index = Math.min(selectedImageIndex, detailImages.length - 1)
    return detailImages[index] || product?.mainImage || ''
  }, [detailImages, selectedImageIndex, product])

  const totalImages = detailImages.length
  const currentImageNumber = selectedImageIndex + 1

  const goToPrevImage = useCallback(() => {
    setSelectedImageIndex(prev => Math.max(0, prev - 1))
  }, [])

  const goToNextImage = useCallback(() => {
    setSelectedImageIndex(prev => Math.min(detailImages.length - 1, prev + 1))
  }, [detailImages.length])

  useEffect(() => {
    if (isOpen && product) {
      setSelectedImageIndex(0)
      setShowContactPopup(false)
    }
  }, [isOpen, product])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }, [onClose])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (showContactPopup) {
        setShowContactPopup(false)
      } else {
        onClose()
      }
    }
  }, [onClose, showContactPopup])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  const handleCallMe = () => {
    const cleanedNumber = phoneNumber.replace(/\s/g, '')
    window.location.href = `tel:${cleanedNumber}`
  }

  if (!isOpen || !product) return null

  const descriptionContent = product.description?.slice(1).filter(d => d?.content?.trim()) || []

  return (
    <div className={styles.productModalOverlay} onClick={handleOverlayClick}>
      <div className={styles.productModal}>
        {/* Close Button - Mobile visible at top */}
        <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </button>

        {/* Left Column - Image */}
        <div className={styles.productModalImage}>
          <img src={currentImage} alt={product.name || 'Product'} />
        </div>

        {/* Image Pagination - Mobile shows below image */}
        {totalImages > 1 && (
          <div className={styles.imagePagination}>
            <button
              className={styles.paginationBtn}
              onClick={goToPrevImage}
              disabled={selectedImageIndex <= 0}
              aria-label="Previous image"
            >
              <ChevronLeftIcon />
            </button>
            <span className={styles.paginationText}>
              View {currentImageNumber} of {totalImages}
            </span>
            <button
              className={styles.paginationBtn}
              onClick={goToNextImage}
              disabled={selectedImageIndex >= totalImages - 1}
              aria-label="Next image"
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}

        {/* Right Column - Content */}
        <div className={styles.productModalContent}>
          {/* Scrollable Content Area */}
          <div className={styles.productModalScrollArea}>
            <h2 className={styles.productModalTitle}>{product.name}</h2>

            {product.title && (
              <p className={styles.productModalSubtitle}>{product.title}</p>
            )}

            <div className={styles.productModalRating}>
              <span className={styles.ratingText}>
                <span className={styles.starIcon}>★ </span> 
                {(product.rating || 4.5).toFixed(1)} / 5
              </span>
              <span className={styles.reviewText}>
                {reviewCount} Lượt đánh giá
              </span>
            </div>

            <div className={styles.productModalDescription}>
              {descriptionContent.map((desc, index) => (
                <span key={index}>{desc.content}</span>
              ))}
            </div>

            <div className={styles.productModalMeta}>
              <span>Đăng bởi: {product.author || 'Admin'}</span>
              <span>Đăng ngày: {product.date || ''}</span>
            </div>

            {product.hashTag && product.hashTag.length > 0 && (
              <div className={styles.productModalHashtags}>
                {product.hashTag.join(' ')}
              </div>
            )}
          </div>

          {/* Fixed Footer - Desktop */}
          <div className={styles.productModalFooter}>
            <span
              className={styles.consultLink}
              onClick={() => setShowContactPopup(true)}
            >
              Tư vấn sản phẩm
            </span>
            {totalImages > 1 && (
              <div className={styles.paginationControls}>
                <button
                  className={styles.paginationBtn}
                  onClick={goToPrevImage}
                  disabled={selectedImageIndex <= 0}
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon />
                </button>
                <span className={styles.paginationText}>
                  View {currentImageNumber} of {totalImages}
                </span>
                <button
                  className={styles.paginationBtn}
                  onClick={goToNextImage}
                  disabled={selectedImageIndex >= totalImages - 1}
                  aria-label="Next image"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Fixed Consult Button */}
        <button
          className={styles.mobileConsultBtn}
          onClick={() => setShowContactPopup(true)}
        >
          Tư vấn sản phẩm này
        </button>
      </div>

      {/* Contact Popup */}
      {showContactPopup && (
        <div className={styles.contactPopupOverlay} onClick={() => setShowContactPopup(false)}>
          <div className={styles.contactPopup} onClick={e => e.stopPropagation()}>
            <button
              className={styles.contactPopupClose}
              onClick={() => setShowContactPopup(false)}
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            <div className={styles.contactPopupContent}>
              <div className={styles.phoneInputGroup}>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Số điện thoại"
                  className={styles.phoneInput}
                />
                <button className={styles.callMeBtn} onClick={handleCallMe}>
                  Call Me <QuickPhone />
                </button>
              </div>

              <p className={styles.contactDivider}>hoặc liên hệ qua các nền tảng:</p>

              <div className={styles.socialLinks}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <QuickFacebook />
                </a>
                <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <IconZalo />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MessageModal
