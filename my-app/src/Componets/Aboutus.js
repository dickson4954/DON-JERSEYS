import React from 'react';
import styles from './HomePage.module.css';
import DicksonImage from '../assets/images/muri.jpeg';
import EricImage from '../assets/images/gram.jpeg';
import EvansImage from '../assets/images/blood.jpeg';



const Aboutus = () => {
    return (
        <>
        <section className={`${styles.aboutUs} ${styles.fadeIn}`} aria-labelledby="about-us-heading">
        <div className={styles.aboutUsBackground}>
          <div className={styles.aboutUsContent}>
            <h2 id="about-us-heading">About Us</h2>
            <p>
              At our store, we pride ourselves on offering a wide range of sports gear designed to elevate your performance on the field. 
              From premium jerseys that ensure comfort and durability to high-quality footballs and accessories, we are committed to providing products that meet the needs of both amateur and professional athletes. 
              Our curated selection guarantees that you'll find the best gear to enhance your game and showcase your passion for sports.
            </p>
            <div className={styles.teamShowcase}>
              <h3>Meet Our Team</h3>
              <div className={styles.teamGrid}>
                <div className={styles.teamMember}>
                  <img src={EricImage} alt="Eric Mugambi" />
                  <h4>Eric Mugambi</h4>
                  <p>Founder & CEO</p>
                </div>
                <div className={styles.teamMember}>
                  <img src={DicksonImage} alt="Dickson Murithi" />
                  <h4>Dickson Murithi</h4>
                  <p>Head of Marketing</p>
                </div>
                <div className={styles.teamMember}>
                  <img src={EvansImage} alt="Evans Mwiti" />
                  <h4>Evans Mwiti</h4>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        </>
    );
};

export default Aboutus;