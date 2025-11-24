import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { ProductImage } from '@/types/product';

interface ModalContextType {
  selectedProduct: ProductImage | null;
  isModalOpen: boolean;
  openProductModal: (product: ProductImage) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = useCallback((product: ProductImage) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  return (
    <ModalContext.Provider value={{
      selectedProduct,
      isModalOpen,
      openProductModal,
      closeModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
