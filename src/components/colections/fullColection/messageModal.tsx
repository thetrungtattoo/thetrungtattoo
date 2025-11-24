import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { geminiService } from '@/services/geminiService'
import type { ProductImage } from '@/types/product'
import ReactMarkdown from 'react-markdown'
import aiAssistant from '@/assets/images/colections/Ai.mp4'
import styles from './styles.module.scss'
import { CloseIcon, TwiterIcon, IconFacebook, PinterestIcon } from '@/assets/svg/svg'
import { useProducts } from '@/hooks/useProducts'
import RatingDisplay from './RatingDisplay'

interface MessageModalProps {
  product: ProductImage | null
  isOpen: boolean
  onClose: () => void
}

interface ChatMessage {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const calcReviewCount = (id: string): number => {
  const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return Math.floor((seed % 200) + 50)
}

const formatTime = (date: Date) =>
  date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })

const getDescriptionText = (description: Array<{ content?: string }>, index: number): string => {
  return description?.[index]?.content?.split('\n')[0]?.trim() || ''
}

const MessageModal: React.FC<MessageModalProps> = ({ product, isOpen, onClose }) => {
  const { products } = useProducts()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'comments' | 'styleNotes'>('comments')
  const [mobileView, setMobileView] = useState<'details' | 'chat'>('details')
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const reviewCounts = useMemo(() => {
    const counts = new Map<string, number>()
    products.forEach(p => counts.set(p.id, calcReviewCount(p.id)))
    return counts
  }, [products])

  const detailImages = useMemo(() => {
    if (!product) return []
    return product.detailImages?.length > 0 ? product.detailImages : [product.mainImage].filter(Boolean)
  }, [product])

  const currentImage = useMemo(() => {
    if (!detailImages.length) return product?.mainImage || ''
    const index = Math.min(selectedImageIndex, detailImages.length - 1)
    return detailImages[index] || product?.mainImage || ''
  }, [detailImages, selectedImageIndex, product])

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      messagesContainerRef.current && (messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight)
    }, 0)
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }, [])

  useEffect(() => {
    if (messages.length > 0) scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus()
  }, [isOpen])

  useEffect(() => {
    if (mobileView === 'chat' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [mobileView])

  useEffect(() => {
    if (isOpen && product) {
      setMessages([])
      setSelectedImageIndex(0)
      setMobileView('details')
    }
  }, [isOpen, product])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [isOpen])

  const handleSendMessage = useCallback(async () => {
    if (!inputMessage.trim() || !product || isLoading) return

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputMessage.trim(),
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)
    scrollToBottom()

    try {
      const chatHistory = geminiService.convertChatHistory(messages)
      const response = await geminiService.generateResponse(userMessage.text, chatHistory)
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      scrollToBottom()
    } catch {
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        text: 'Xin lỗi, tôi không thể trả lời lúc này. Vui lòng thử lại sau.',
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
      scrollToBottom()
    } finally {
      setIsLoading(false)
    }
  }, [inputMessage, product, isLoading, messages, scrollToBottom])

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }, [handleSendMessage])

  if (!isOpen || !product) return null

  const markdownComponents = {
    p: ({ children }: any) => <p style={{ margin: 0, lineHeight: '1.4' }}>{children}</p>,
    strong: ({ children }: any) => <strong style={{ fontWeight: 'bold' }}>{children}</strong>,
    ul: ({ children }: any) => <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>{children}</ul>,
    li: ({ children }: any) => <li style={{ margin: '4px 0' }}>{children}</li>
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalBackdrop} />
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.mobileHeader}>
          <div
            className={`${styles.mobileHeaderItem} ${mobileView === 'details' ? styles.mobileActive : ''}`}
            onClick={() => setMobileView('details')}
          >
            <span className={styles.mobileHeaderText}>THÔNG TIN CHI TIẾT</span>
            <button className={styles.mobileCloseBtn} onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div
            className={`${styles.mobileHeaderItem} ${mobileView === 'chat' ? styles.mobileActive : ''}`}
            onClick={() => setMobileView('chat')}
          >
            <span className={styles.mobileHeaderText}>Tư vấn Online cùng AI</span>
          </div>
        </div>

        <div className={styles.drawerWrapperContent}>
          <div className={`${styles.commentsSection} ${mobileView === 'chat' ? styles.mobileActive : ''}`}>
            <div className={styles.commentsHeader}>
              <div
                className={`${styles.tab} ${activeTab === 'comments' ? styles.active : ''}`}
                onClick={() => setActiveTab('comments')}
              >
                Chat online với AI
              </div>
            </div>

            <div className={styles.commentsContent}>
              {messages.length === 0 ? (
                <div className={styles.emptyChat}>
                  <video src={aiAssistant} autoPlay muted loop />
                  <p>Tư vấn miễn phí với AI Assistant. Hãy bắt đầu cuộc trò chuyện.</p>
                </div>
              ) : (
                <div className={styles.messagesContainer} ref={messagesContainerRef}>
                  {messages.map((message) => (
                    <div key={message.id} className={styles.messageItem}>
                      <div className={`${styles.messageTime} ${message.isBot ? styles.botMessage : styles.userMessage}`}>
                        {formatTime(message.timestamp)}
                      </div>
                      <div className={`${styles.messageBubble} ${message.isBot ? styles.botMessage : styles.userMessage}`}>
                        {message.isBot ? (
                          <ReactMarkdown components={markdownComponents}>
                            {message.text}
                          </ReactMarkdown>
                        ) : (
                          message.text
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className={styles.typingContainer}>
                      <div className={styles.typingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            <div className={styles.commentInputContainer}>
              <div className={styles.commentInput}>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập tin nhắn..."
                  disabled={isLoading}
                />
                <svg className={styles.attachIcon} viewBox="0 0 24 24">
                  <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4s-4 1.79-4 4v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
                </svg>
                <svg className={styles.sendIcon} viewBox="0 0 24 24" onClick={handleSendMessage}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className={`${styles.productDetailSection} ${mobileView === 'details' ? styles.mobileActive : ''}`}>
            <div className={styles.productDetailHeader}>
              <span className={styles.customizeHeader}>Thông tin chi tiết</span>
              <span className={styles.productTitle}>{product.name || product.title || ''}</span>
              <span className={styles.subTitle}>
                {getDescriptionText(product.description, 0)}
              </span>
            </div>

            <span className={styles.contentText}>
              {getDescriptionText(product.description, 1)}
            </span>

            {currentImage && (
              <img
                src={currentImage}
                alt={product.name || product.title || 'Product'}
                className={styles.mainProductImage}
              />
            )}

            {detailImages.length > 0 && (
              <div className={styles.detailImageSection}>
                <span>Chi tiết hình xăm:</span>
                <div className={styles.thumbnailGallery}>
                  {detailImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name || product.title || 'Product'} ${index + 1}`}
                      className={`${styles.thumbnail} ${selectedImageIndex === index ? styles.active : ''}`}
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className={styles.contentSection}>
              {product.description?.slice(2).map((desc, index) => {
                if (!desc?.content?.trim()) return null
                return (
                  <span
                    key={index + 2}
                    className={styles.contentText}
                    dangerouslySetInnerHTML={{
                      __html: desc.content.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>')
                    }}
                  />
                )
              })}
            </div>

            {product.hashTag && product.hashTag.length > 0 && (
              <span className={styles.hashtagText}>
                {product.hashTag.join(' ')}
              </span>
            )}

            <div className={styles.authorInfo}>
              <span className={styles.authorText}>Đăng bởi: {product.author || 'Admin'}</span>
              <span className={styles.dateText}>Đăng ngày: {product.date || ''}</span>
            </div>

            <div className={styles.ratingInfo}>
              <RatingDisplay
                rating={product.rating || 5.0}
                reviewCount={product.reviewCount || reviewCounts.get(product.id) || 50}
              />
            </div>

            <div className={styles.shareContainer}>
              <span>Chia sẻ bài viết: </span>
              <span className={styles.shareFb}><IconFacebook /></span>
              <span className={styles.sharePinterest}><PinterestIcon /></span>
              <span className={styles.shareTwiter}><TwiterIcon /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageModal
