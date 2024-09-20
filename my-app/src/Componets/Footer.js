import React from 'react';
import styles from './HomePage.module.css';

const Footer = () => {
    return (
       <>
       <footer className={`${styles.footer} ${styles.fadeIn}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
          <p>&copy; 2024 Your Sports Gear Store. All rights reserved.</p>
        </div>
      </footer>
       </>
    );
     };

export default Footer;