import React from 'react';
import styles from './HomePage.module.css';


const Blog = () => {
    return (
        <>
        <section className={`${styles.blog} ${styles.fadeIn}`}>
        <h2>From Our Blog</h2>
        <div className={styles.blogGrid}>
          <div className={styles.blogPost}>
            <img src="https://i.pinimg.com/564x/bb/3f/c9/bb3fc9cfdfcfb4093be15d2e56fa6df3.jpg" alt="Training Tips" />
            <h3>Top Training Tips for Athletes</h3>
            <p>Discover effective training routines and tips to enhance your performance.</p>
            <a href="#">Read More</a>
          </div>
          <div className={styles.blogPost}>
            <img src="https://i.pinimg.com/564x/ec/50/31/ec5031ae1039d3f1d7634eca4e888a07.jpg" alt="New Product Launches" />
            <h3>Exciting New Products Just Launched</h3>
            <p>Check out the latest additions to our sports gear collection.</p>
            <a href="#">Read More</a>
          </div>
          <div className={styles.blogPost}>
            <img src="https://i.pinimg.com/736x/da/e2/52/dae252744ec8b7b5460d30ee1c940cdc.jpg" alt="Sports Events" />
            <h3>Highlights from Recent Sports Events</h3>
            <p>Relive the excitement of recent sports events and matches.</p>
            <a href="#">Read More</a>
          </div>
          <div className={styles.blogPost}>
            <img src="https://i.pinimg.com/564x/03/7d/01/037d01ab770540a1dea494d4b0769b95.jpg" alt="Athlete Success Stories" />
            <h3>Athlete Success Stories</h3>
            <p>Read inspiring stories of athletes achieving greatness with our gear.</p>
            <a href="#">Read More</a>
          </div>
          <div className={styles.blogPost}>
            <img src="https://i.pinimg.com/736x/98/c6/25/98c625c317cdb0e2ea82d32022588e7a.jpg" alt="Gear Maintenance" />
            <h3>How to Maintain Your Sports Gear</h3>
            <p>Learn how to properly care for and maintain your sports equipment.</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </section>
        </>
    )
};

export default Blog;