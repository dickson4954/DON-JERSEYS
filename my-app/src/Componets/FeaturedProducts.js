import React from 'react';
import styles from './HomePage.module.css';


const FeaturedProducts = () => {
  return (
    <>
    <section className={`${styles.featuredProducts} ${styles.fadeIn}`}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <img src="https://i.pinimg.com/564x/96/b5/f9/96b5f9d235608662a13000319cacedfb.jpg" alt="Football" />
            <h3>Premium Football</h3>
            <p>High-quality football for all levels.</p>
            <button className={styles.productButton}>View Product</button>
          </div>
          <div className={styles.productCard}>
            <img src="https://i.pinimg.com/564x/d2/99/d9/d299d93c9aab3dfd4f23e0254f62d2f9.jpg" alt="Sports Shoes" />
            <h3>Sporty Shoes</h3>
            <p>Comfortable and durable sports shoes.</p>
            <button className={styles.productButton}>View Product</button>
          </div>
          <div className={styles.productCard}>
            <img src="https://i.pinimg.com/736x/e9/6e/6d/e96e6d99fb894805238f0a3e9c474fa7.jpg" alt="Jersey" />
            <h3>Stylish Jersey</h3>
            <p>Stylish jerseys for all teams and fans.</p>
            <button className={styles.productButton}>View Product</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;