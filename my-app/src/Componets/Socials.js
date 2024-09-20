import React from 'react';
import styles from './HomePage.module.css';


const Socials = () => {
    return (
        <section className={`${styles.socialMedia} ${styles.fadeIn}`}>
        <h2>Follow Us</h2>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" aria-label="Facebook">
            <img src="https://i.pinimg.com/564x/e7/85/be/e785bebd165969784c144452e8c457fe.jpg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <img src="https://i.pinimg.com/564x/c8/d3/d4/c8d3d4d12a8ea35b58e35de9ec820a22.jpg" alt="Twitter" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <img src="https://i.pinimg.com/564x/59/a1/1f/59a11ffced242d053c2697a8a18e3ddc.jpg" alt="Instagram" />
          </a>
        </div>
      </section>
    );
}


export default Socials;