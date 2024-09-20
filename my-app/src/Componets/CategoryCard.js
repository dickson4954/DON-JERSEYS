import React from 'react';
import styles from './HomePage.module.css';

const CategoryCard = ({ badge, imgSrc, altText, additionalInfo, rating, title, price, stock }) => {
  return (
    <div className={styles.categoryCard}>
      <span className={styles.badge}>{badge}</span>
      <img src={imgSrc} alt={altText} />
      <div className={styles.additionalInfo}>
        <p>{additionalInfo}</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={styles.star}>{i < rating ? '★' : '☆'}</span>
        ))}
        <span>({rating})</span>
      </div>
      <h3>{title}</h3>
      <p className={styles.price}>Price: ${price}</p>
      <p className={styles.stock}>Only {stock} left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
  );
};

export default CategoryCard;
