import { useCallback, useState } from 'react';

export interface UseTeamCarouselOptions {
  readonly images: readonly string[];
  readonly visibleCount?: number;
}

/**
 * Custom hook for managing team image carousel functionality
 * Provides navigation controls and visible image calculation
 */
export const useTeamCarousel = ({ images, visibleCount = 5 }: UseTeamCarouselOptions) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const scrollRight = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const getVisibleImages = useCallback(() => {
    const visibleImages: string[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  }, [currentIndex, images, visibleCount]);

  return {
    currentIndex,
    scrollLeft,
    scrollRight,
    getVisibleImages
  };
};