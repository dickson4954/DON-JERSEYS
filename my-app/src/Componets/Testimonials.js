import React from 'react';
import styles from './HomePage.module.css'; 
import EvanceImage from '../assets/images/pipa.jpeg';
import mutumaImage from '../assets/images/blood.jpeg';

const Testimonials = () => {
    return(
        <>
        <section className={`${styles.testimonials} ${styles.fadeIn}`}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.customerImageWrapper}>
              <img src={EvanceImage} alt="Evans Henry" className={styles.customerImage} />
            </div>
            <p>"Excellent products and great customer service!"</p>
            <h4>Evans Henry</h4>
          </div>
          {/* Uncomment the following block to add another testimonial */}
          <div className={styles.testimonialCard}>
            <div className={styles.customerImageWrapper}>
              <img src={mutumaImage} alt="Mutuma Trevor" className={styles.customerImage} />
            </div>
            <p>"The best sports gear store I've ever used."</p>
            <h4>Mutuma Trevor</h4>
          </div>
        </div>
      </section>
        </>
    );
};

export default Testimonials;
