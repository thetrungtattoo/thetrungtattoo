import React from 'react';
import styles from './styles.module.scss';
import type { CollectionTattoo } from './types';

interface CollectionItemProps {
  item: {
    id: string;
    name: string;
    image: string;
    description?: string;
  };
  index: number;
  sizeClass: CollectionTattoo;
  onSelect: (index: number) => void;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ 
  item, 
  index,
  sizeClass, 
  onSelect 
}) => {

  return (
    <div
      className={`${styles.gridItem} ${styles[sizeClass]}`}
      onClick={() => onSelect(index)}
      tabIndex={0}
      aria-label={`Select ${item.name}`}
    >
      <img src={item.image} alt={item.name} loading="lazy" />
    </div>
  );
};

export default CollectionItem;
