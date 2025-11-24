import React from 'react';
import type { TattooItemProps } from './types';
import styles from './styles.module.scss';

const TattooItem: React.FC<TattooItemProps> = ({ 
    tattoo, 
    index, 
    sizeClass, 
    onSelect 
}) => {
    const handleClick = () => {
        onSelect(index);
    };

    return (
        <div 
            className={`${styles.gridItem} ${styles[sizeClass]}`}
            onClick={handleClick}
            role="gridcell"
            tabIndex={0}
        >
            <img src={tattoo.image} alt={tattoo.name} />
        </div>
    );
}

export default TattooItem;
