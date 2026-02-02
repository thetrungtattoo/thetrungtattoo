import { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.scss';
import { CloseIcon, QuickFacebook, IconZalo } from '@/assets/svg/svg';

const END_DATE = new Date('2026-02-23T23:59:59');

const shouldShowPopup = (): boolean => {
  const now = new Date();
  return now <= END_DATE;
};

const LunarNewYear2026 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    if (!hasBeenClosed && shouldShowPopup()) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [hasBeenClosed]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setHasBeenClosed(true);
    document.body.style.overflow = 'unset';
  }, []);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Đóng thông báo"
        >
          <CloseIcon />
        </button>

        <div className={styles.content}>
            
          <h1 className={styles.title}>
            THÔNG BÁO NGHỈ TẾT NGUYÊN ĐÁN 2026
          </h1>

          <div className={styles.body}>
            <p className={styles.paragraph}>
              Studio sẽ nghỉ Tết Nguyên Đán 2026 từ ngày{' '}
              <strong>12/02/2026 (25 tháng Chạp)</strong> đến hết ngày{' '}
              <strong>23/02/2026 (mùng 7 Tết)</strong>.
            </p>

            <p className={styles.paragraph}>
              Trong thời gian này, phản hồi của chúng tôi có thể chậm hơn bình thường.
            </p>

            <p className={styles.paragraph}>
              👉 Để được hỗ trợ nhanh hơn trong thời gian nghỉ Tết, vui lòng liên hệ qua{' '}
              <strong>Zalo</strong> hoặc <strong>Facebook</strong> của Studio.
            </p>

            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <QuickFacebook />
                <span>Facebook</span>
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Zalo"
              >
                <IconZalo />
                <span>Zalo</span>
              </a>
            </div>

            <p className={styles.footer}>
              Cảm ơn bạn đã thông cảm và chúc bạn một năm mới an khang – thịnh vượng! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunarNewYear2026;
