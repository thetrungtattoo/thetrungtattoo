/**
 * Loading system types và interfaces
 */

export interface LoadingState {
  readonly isInitialLoading: boolean;
  readonly isPageLoading: boolean;
  readonly loadingMessage: string;
}

export interface LoadingContextType {
  readonly loadingState: LoadingState;
  readonly startInitialLoading: () => void;
  readonly completeInitialLoading: () => void;
  readonly startPageLoading: (message?: string) => void;
  readonly completePageLoading: () => void;
}

export interface InitialLoadingProps {
  readonly onComplete: () => void;
}

export interface LoadingSpinnerProps {
  readonly message?: string;
}

export interface LoadingWrapperProps {
  readonly children: React.ReactNode;
}
