import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading, InitialLoading, LoadingSpinner } from '../../';

// Constants
const LOADING_TIMEOUT = 3000;

// Types
interface LoadingWrapperProps {
  readonly children: React.ReactNode;
}

/**
 * Loading Wrapper - Quản lý hiển thị loading cho toàn ứng dụng
 * 
 * Features:
 * - Initial loading: Full screen, không header, 3s
 * - Page loading: Overlay với header, 3s
 * - Auto cleanup timers
 * - Type-safe implementation
 */
const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const location = useLocation();
  const { 
    loadingState, 
    completeInitialLoading, 
    startPageLoading, 
    completePageLoading 
  } = useLoading();
  
  const initialTimerRef = useRef<number | null>(null);
  const pageTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (initialTimerRef.current) clearTimeout(initialTimerRef.current);
      if (pageTimerRef.current) clearTimeout(pageTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (loadingState.isInitialLoading) {
      initialTimerRef.current = setTimeout(() => {
        completeInitialLoading();
      }, LOADING_TIMEOUT);

      return () => {
        if (initialTimerRef.current) {
          clearTimeout(initialTimerRef.current);
        }
      };
    }
  }, [loadingState.isInitialLoading, completeInitialLoading]);

  useEffect(() => {
    if (!loadingState.isInitialLoading) {
      startPageLoading();
      
      pageTimerRef.current = setTimeout(() => {
        completePageLoading();
      }, LOADING_TIMEOUT);

      return () => {
        if (pageTimerRef.current) {
          clearTimeout(pageTimerRef.current);
        }
      };
    }
  }, [location.pathname, loadingState.isInitialLoading, startPageLoading, completePageLoading]);

  if (loadingState.isInitialLoading) {
    return <InitialLoading onComplete={completeInitialLoading} />;
  }

  if (loadingState.isPageLoading) {
    return (
      <div 
        style={{ 
          position: 'absolute', 
          top: '80px', 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: '#0f0f0f', 
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        role="dialog"
        aria-label="Loading content"
      >
        <LoadingSpinner message={loadingState.loadingMessage} />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
