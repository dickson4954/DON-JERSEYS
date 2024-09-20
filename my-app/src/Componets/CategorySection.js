import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import styles from './HomePage.module.css';

const CategorySection = ({ sectionTitle, categories }) => {
  return (
    <section className={styles.categories}>
      <div className={styles.flashHeader}>
        <span className={styles.flashTitle}>
          <span className={styles.flashIcon}>⚡</span> {sectionTitle}
        </span>
        <span className={styles.timeLeft}>
          Time Left: <span className={styles.timer}>00h : 00m : 00s</span>
        </span>
        <Link to="/jerseyspage" className={styles.seeAllButton}>
          <button className={styles.seeAllBtn}>SEE ALL</button>
        </Link>
      </div>
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
