import React, { useEffect, useState } from 'react';
import styles from './InitialLoading.module.scss';
import { LOADING_CONSTANTS } from '@/shared/constants/loading';

interface InitialLoadingProps {
  onComplete: () => void;
}

/**
 * Initial Loading Screen - Hiển thị khi vào trang lần đầu hoặc reload
 * Không có header, full screen, 3 giây
 */
const InitialLoading: React.FC<InitialLoadingProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.initialLoading} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.loadingContent}>
        <div className={styles.spinner}></div>
        <span className={styles.loadingText}>{LOADING_CONSTANTS.DEFAULT_LOADING_MESSAGE}</span>
      </div>
    </div>
  );
};

export default InitialLoading;
