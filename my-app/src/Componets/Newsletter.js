import React from 'react';
import styles from './HomePage.module.css'; 


const Newsletter = () => {
    return (
      <>
      <section className={`${styles.newsletter} ${styles.fadeIn}`}>
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to receive the latest news and offers.</p>
        <form className={styles.newsletterForm}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
            aria-label="Email address" 
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      </>
    );
  
}


export default Newsletter;