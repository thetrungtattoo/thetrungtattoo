import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { LOADING_CONSTANTS } from '@/shared/constants/loading';

// Constants
const DEFAULT_LOADING_MESSAGE = LOADING_CONSTANTS.DEFAULT_LOADING_MESSAGE;

// Types
interface LoadingState {
  readonly isInitialLoading: boolean;
  readonly isPageLoading: boolean;
  readonly loadingMessage: string;
}

interface LoadingContextType {
  readonly loadingState: LoadingState;
  readonly startInitialLoading: () => void;
  readonly completeInitialLoading: () => void;
  readonly startPageLoading: (message?: string) => void;
  readonly completePageLoading: () => void;
}

interface LoadingProviderProps {
  readonly children: ReactNode;
}

// Context
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

/**
 * Loading Provider - Quản lý trạng thái loading toàn ứng dụng
 * 
 * Features:
 * - Initial loading: Full screen, không header, 3s
 * - Page loading: Có header, overlay, 3s
 * - Type-safe với readonly interfaces
 * - Optimized với useCallback
 */
export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isInitialLoading: true,
    isPageLoading: false,
    loadingMessage: DEFAULT_LOADING_MESSAGE
  });

  const startInitialLoading = useCallback(() => {
    setLoadingState(prev => ({
      ...prev,
      isInitialLoading: true
    }));
  }, []);

  const completeInitialLoading = useCallback(() => {
    setLoadingState(prev => ({
      ...prev,
      isInitialLoading: false
    }));
  }, []);

  const startPageLoading = useCallback((message?: string) => {
    setLoadingState(prev => ({
      ...prev,
      isPageLoading: true,
      loadingMessage: message || DEFAULT_LOADING_MESSAGE
    }));
  }, []);

  const completePageLoading = useCallback(() => {
    setLoadingState(prev => ({
      ...prev,
      isPageLoading: false
    }));
  }, []);

  const contextValue: LoadingContextType = {
    loadingState,
    startInitialLoading,
    completeInitialLoading,
    startPageLoading,
    completePageLoading
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};

/**
 * Custom hook để sử dụng Loading Context
 * 
 * @throws Error nếu sử dụng ngoài LoadingProvider
 */
export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
