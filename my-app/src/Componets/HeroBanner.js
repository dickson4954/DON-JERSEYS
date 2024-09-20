import React from 'react';
import styles from './HomePage.module.css';
import Sidebar from './Sidebar';

const HeroBanner = ({ backgroundImage, heading, subtext }) => {
  return (
    <>
      <section className={styles.heroBannerBackground}>
      <Sidebar />
        <div className={styles.heroImageContainer}>
          
          <img src={backgroundImage} alt="Sports Gear" className={styles.heroImage} />
          <div className={styles.heroBannerContent}>
            <h1 id="hero-heading">{heading}</h1>
            <p>{subtext}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
