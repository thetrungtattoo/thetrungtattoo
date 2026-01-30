import React from 'react';
import styles from './LoadingSpinner.module.scss';
import { LOADING_CONSTANTS } from '@/shared/constants/loading';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = LOADING_CONSTANTS.DEFAULT_LOADING_MESSAGE
}) => {
  return (
    <div className={styles.loadingSpinner}>
      <div className={styles.spinner}><span /></div>
      <span className={styles.loadingText}>{message}</span>
    </div>
  );
};

export default LoadingSpinner;
