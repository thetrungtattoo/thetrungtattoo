import React from 'react';
import styles from './styles.module.scss';

interface RatingDisplayProps {
  rating: number;
  reviewCount: number;
}

const RatingDisplay: React.FC<RatingDisplayProps> = ({ rating, reviewCount }) => {
  const calculateRatingDistribution = (avgRating: number) => {
    const distributions = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };

    if (avgRating >= 4.8) {
      distributions[5] = Math.floor(avgRating * 20);
      distributions[4] = 100 - distributions[5];
    } else if (avgRating >= 4.5) {
      const fiveStarRatio = Math.floor((avgRating - 4.5) * 200) + 20;
      distributions[5] = Math.min(fiveStarRatio, 80);
      distributions[4] = 100 - distributions[5];
    } else {
      distributions[5] = Math.floor(avgRating * 20) + 10;
      distributions[4] = Math.floor((avgRating - 3.5) * 30) + 20;
      distributions[3] = 100 - distributions[5] - distributions[4];
    }

    return distributions;
  };

  const distribution = calculateRatingDistribution(rating);

  return (
    <div className={styles.ratingDisplay}>
      {/* Phần hiển thị rating tổng quan */}
      <div className={styles.ratingOverview}>
        <div className={styles.ratingValue}>
          <span className={styles.starIcon}>★</span>
          <span className={styles.ratingNumber}>{rating.toFixed(1)}</span>
          <span className={styles.ratingMax}>/5</span>
        </div>
        <div className={styles.reviewCount}>
          {reviewCount} lượt đánh giá
          <span className={styles.infoIcon}>?</span>
        </div>
      </div>

      {/* Phần phân bổ rating theo sao */}
      <div className={styles.ratingDistribution}>
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className={styles.ratingBar}>
            <div className={styles.starLabel}>
              <span className={styles.starNumber}>{star}</span>
              <span className={styles.starIcon}>★</span>
            </div>
            <div className={styles.barContainer}>
              <div 
                className={`${styles.bar} ${star >= 4 ? styles.highRating : styles.lowRating}`}
                style={{ width: `${distribution[star as keyof typeof distribution]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingDisplay;
