import React from 'react';
import styles from './LoadingSpinner.module.scss';
import { LOADING_CONSTANTS } from '@/shared/constants/loading';

interface LoadingSpinnerProps {
  message?: string;
}

/**
 * Page Loading Spinner - Hiển thị khi chuyển trang
 * Có header, hiển thị ở giữa trang, 3 giây
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = LOADING_CONSTANTS.DEFAULT_LOADING_MESSAGE
}) => {
  return (
    <div className={styles.loadingSpinner}>
      <div className={styles.spinner}></div>
      <span className={styles.loadingText}>{message}</span>
    </div>
  );
};

export default LoadingSpinner;
