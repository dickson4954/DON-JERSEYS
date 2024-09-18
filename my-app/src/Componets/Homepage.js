import React from 'react';
import styles from './HomePage.module.css';
import Navbar from './Navbar';
import DicksonImage from '../assets/images/muri.jpeg';
import EricImage from '../assets/images/gram.jpeg';
import EvansImage from '../assets/images/blood.jpeg';
import EvanceImage from '../assets/images/pipa.jpeg';
import mutumaImage from '../assets/images/blood.jpeg';
import backgroundImage from '../assets/images/man utd.jpg';
import FAQSection from './FAQSection';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <Navbar />
{/* Hero Banner Section */}
   <section className={styles.heroBannerContent} aria-labelledby="hero-heading">
   <h1 id="hero-heading">Welcome to Our Sports Gear Store!</h1>
   <p>Find the best jerseys, footballs, shoes, and accessories for your game.</p>
      </section>

      {/* Hero Background Image Section */}
      <section className={styles.heroBannerBackground} aria-labelledby="hero-heading">
        <div className={styles.heroImageContainer}>
        <Sidebar />
          <img src={backgroundImage} alt="Sports Gear" className={styles.heroImage} />
        </div>
      </section>
{/* Shop by Category Section */}
<section className={styles.categories}>
  <div className={styles.flashHeader}>
    <span className={styles.flashTitle}>
      <span className={styles.flashIcon}>⚡</span> Premier League
    </span>
    <span className={styles.timeLeft}>
      Time Left: <span className={styles.timer}>00h : 00m : 00s</span>
    </span>
   {/* Use Link instead of <a> */}
   <Link to="/see-all" className={styles.seeAllButton}>
      <button className={styles.seeAllBtn}>SEE ALL</button>
    </Link>
  </div>
  <div className={styles.categoryGrid}>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>New</span>
      <img src="https://i.pinimg.com/564x/0d/34/69/0d3469770c5cf199dc79475aa05d8274.jpg" alt="Jerseys" />
      <div className={styles.additionalInfo}>
        <p>Limited Edition</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.2)</span>
      </div>
      <h3>Manchester United</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 10 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Sale</span>
      <img src="https://i.pinimg.com/564x/2d/af/89/2daf89d443ab6419482421d758cde306.jpg" alt="Footballs" />
      <div className={styles.additionalInfo}>
        <p>Discounted Price</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span className={styles.star}>☆</span>
        <span>(3.8)</span>
      </div>
      <h3>Manchester City</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 7 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Best Seller</span>
      <img src="https://i.pinimg.com/564x/31/26/bb/3126bb1241bbbd1302fcadc093211b82.jpg" alt="Shoes" />
      <div className={styles.additionalInfo}>
        <p>Popular Choice</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.0)</span>
      </div>
      <h3>Arsenal</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 5 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Exclusive</span>
      <img src="https://i.pinimg.com/564x/a5/a3/ee/a5a3eef0ebfbaf7c3c0d832a748d2f01.jpg" alt="Accessories" />
      <div className={styles.additionalInfo}>
        <p>Exclusive Offer</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span>(5.0)</span>
      </div>
      <h3>Chelsea</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 12 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Limited</span>
      <img src="https://i.pinimg.com/564x/69/70/b9/6970b9fe4f4ef0b04576cb1a3fa5963f.jpg" alt="Accessories" />
      <div className={styles.additionalInfo}>
        <p>Limited Edition</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.1)</span>
      </div>
      <h3>Liverpool</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 8 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
  </div>
</section>
{/* Shop by La Liga Category Section */}
<section className={styles.categories}>
  <div className={styles.flashHeader}>
    <span className={styles.flashTitle}>
      <span className={styles.flashIcon}>⚡</span> La Liga
    </span>
    <span className={styles.timeLeft}>
      Time Left: <span className={styles.timer}>00h : 00m : 00s</span>
    </span>
    {/* Use Link instead of <a> */}
    <Link to="/see-all" className={styles.seeAllButton}>
      <button className={styles.seeAllBtn}>SEE ALL</button>
    </Link>
  </div>
  <div className={styles.categoryGrid}>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>New</span>
      <img src="https://i.pinimg.com/736x/a4/a4/ff/a4a4ff7ba10693fa6140c229636c8a79.jpg" alt="Jerseys" />
      <div className={styles.additionalInfo}>
        <p>Limited Edition</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.2)</span>
      </div>
      <h3>Real Madrid</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 10 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Sale</span>
      <img src="https://i.pinimg.com/564x/e8/20/90/e820908839b7adac776fa47de0a43930.jpg" alt="Footballs" />
      <div className={styles.additionalInfo}>
        <p>Discounted Price</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span className={styles.star}>☆</span>
        <span>(3.8)</span>
      </div>
      <h3>Barcelona</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 7 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Best Seller</span>
      <img src="https://i.pinimg.com/564x/65/1b/1f/651b1fe08a098ca3eb1c7e19f0f00f56.jpg" alt="Shoes" />
      <div className={styles.additionalInfo}>
        <p>Popular Choice</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.0)</span>
      </div>
      <h3>Atletico Madrid</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 5 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Exclusive</span>
      <img src="https://i.pinimg.com/564x/74/e1/1e/74e11e7afdf2cb933aa61e1dc9e8ed6d.jpg" alt="Accessories" />
      <div className={styles.additionalInfo}>
        <p>Exclusive Offer</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span>(5.0)</span>
      </div>
      <h3>Sevilla</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 12 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Limited</span>
      <img src="https://i.pinimg.com/736x/a4/23/99/a423999abb3ad9a7acb348bf8067f472.jpg" alt="Accessories" />
      <div className={styles.additionalInfo}>
        <p>Limited Edition</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.1)</span>
      </div>
      <h3>Valencia</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 8 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
  </div>
</section>
{/* Shop by Bundesliga and Ligue 1 Category Section */}
<section className={styles.categories}>
  <div className={styles.flashHeader}>
    <span className={styles.flashTitle}>
      <span className={styles.flashIcon}>⚡</span> Bundesliga & Ligue 1 & Serie A
    </span>
    <span className={styles.timeLeft}>
      Time Left: <span className={styles.timer}>00h : 00m : 00s</span>
    </span>
   {/* Use Link instead of <a> */}
   <Link to="/see-all" className={styles.seeAllButton}>
      <button className={styles.seeAllBtn}>SEE ALL</button>
    </Link>
  </div>
  <div className={styles.categoryGrid}>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>New</span>
      <img src="https://i.pinimg.com/564x/3d/85/79/3d8579795050bf9f863770a51d1069cc.jpg" alt="BVB Jersey" />
      <div className={styles.additionalInfo}>
        <p>Limited Edition</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.2)</span>
      </div>
      <h3>Borussia Dortmund</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 10 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>

    <div className={styles.categoryCard}>
      <span className={styles.badge}>Sale</span>
      <img src="https://i.pinimg.com/564x/d0/8d/8c/d08d8c89da01ac3e1027ce7821d9491b.jpg" alt="PSG Jersey" />
      <div className={styles.additionalInfo}>
        <p>Discounted Price</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span className={styles.star}>☆</span>
        <span>(3.8)</span>
      </div>
      <h3>Paris Saint-Germain</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 7 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Best Seller</span>
      <img src="https://i.pinimg.com/564x/4a/d9/d8/4ad9d820e940ae2e0e1d033fd614aba5.jpg" alt="Bayern Jersey" />
      <div className={styles.additionalInfo}>
        <p>Popular Choice</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.0)</span>
      </div>
      <h3>Bayern Munich</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 5 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>

    <div className={styles.categoryCard}>
      <span className={styles.badge}>Exclusive</span>
      <img src="https://i.pinimg.com/564x/9c/18/89/9c1889c37496efda0e5323a4d8dcdbf7.jpg" alt="Milan Jersey" />
      <div className={styles.additionalInfo}>
        <p>Exclusive Offer</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span>(5.0)</span>
      </div>
      <h3>Ac Milan</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 12 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>

    <div className={styles.categoryCard}>
      <span className={styles.badge}>Limited</span>
      <img src="https://i.pinimg.com/564x/67/eb/54/67eb543e575ca1fcc57a97b6d4825086.jpg" alt="Juventus Jersey" />
      <div className={styles.additionalInfo}>
        <p>Limited Edition</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.1)</span>
      </div>
      <h3>Juventus</h3>
      <p className={styles.price}>Price: $1500</p>
      <p className={styles.stock}>Only 8 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
  </div>
</section>
{/* Shop by International Teams Section */}
<section className={styles.categories}>
  <div className={styles.flashHeader}>
    <span className={styles.flashTitle}>
      <span className={styles.flashIcon}>⚡</span> International Teams
    </span>
    <span className={styles.timeLeft}>
      Time Left: <span className={styles.timer}>00h : 00m : 00s</span>
    </span>
{/* Use Link instead of <a> */}
<Link to="/see-all" className={styles.seeAllButton}>
      <button className={styles.seeAllBtn}>SEE ALL</button>
    </Link>
  </div>
  <div className={styles.categoryGrid}>
    {/* Spain */}
    <div className={styles.categoryCard}>
      <span className={styles.badge}>New</span>
      <img src="https://i.pinimg.com/564x/b6/d6/92/b6d6921e9b96f951332921c22b739645.jpg" alt="Spain Jersey" />
      <div className={styles.additionalInfo}>
        <p>Limited Edition</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.5)</span>
      </div>
      <h3>Spain</h3>
      <p className={styles.price}>Price: $1200</p>
      <p className={styles.stock}>Only 8 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>

    {/* Germany */}
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Best Seller</span>
      <img src="https://i.pinimg.com/564x/85/7d/30/857d306abc645ad6270ebbe5bbd8e037.jpg" alt="Germany Jersey" />
      <div className={styles.additionalInfo}>
        <p>Popular Choice</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.8)</span>
      </div>
      <h3>Germany</h3>
      <p className={styles.price}>Price: $1300</p>
      <p className={styles.stock}>Only 5 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>

    {/* England */}
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Exclusive</span>
      <img src="https://i.pinimg.com/564x/54/1d/9c/541d9c0c8e091bb7e3293d83848fe8c1.jpg" alt="England Jersey" />
      <div className={styles.additionalInfo}>
        <p>Exclusive Offer</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.6)</span>
      </div>
      <h3>England</h3>
      <p className={styles.price}>Price: $1250</p>
      <p className={styles.stock}>Only 9 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>

    {/* Brazil */}
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Limited</span>
      <img src="https://i.pinimg.com/564x/aa/be/69/aabe69a08d9af0530b7c34b6f4193f82.jpg" alt="Brazil Jersey" />
      <div className={styles.additionalInfo}>
        <p>Limited Edition</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span>(5.0)</span>
      </div>
      <h3>Brazil</h3>
      <p className={styles.price}>Price: $1350</p>
      <p className={styles.stock}>Only 4 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>

    {/* Argentina */}
    <div className={styles.categoryCard}>
      <span className={styles.badge}>Sale</span>
      <img src="https://i.pinimg.com/564x/a8/28/88/a8288804e207883e06a96f9edabeed05.jpg" alt="Argentina Jersey" />
      <div className={styles.additionalInfo}>
        <p>Discounted Price</p>
        <a href="#" className={styles.viewDetails}>View Details</a>
      </div>
      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>★</span>
        <span className={styles.star}>☆</span>
        <span>(4.4)</span>
      </div>
      <h3>Argentina</h3>
      <p className={styles.price}>Price: $1100</p>
      <p className={styles.stock}>Only 6 left in stock!</p>
      <a href="#" className={styles.quickView}>Quick View</a>
      <a href="#" className={styles.wishlistButton}>Add to Wishlist</a>
    </div>
  </div>
</section>

            {/* Featured Products Section */}
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


      {/* About Us Section */}
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

     


      {/* Customer Success Stories */}
      <section className={`${styles.successStories} ${styles.fadeIn}`}>
        <h2>Customer Success Stories</h2>
        <p>See how our products have transformed the game for athletes worldwide.</p>
        <div className={styles.successGrid}>
          <div className={styles.successCard}>
            <img src="https://i.pinimg.com/564x/ef/f8/db/eff8dbaa58ccd1816d49ace985ceaf83.jpg" alt="Jane's Journey" />
            <h3>Jane's Journey</h3>
            <p>From amateur to pro with our top-notch gear!</p>
          </div>
          <div className={styles.successCard}>
            <img src="https://i.pinimg.com/564x/32/00/df/3200dfe435847ede887be83e30346c58.jpg" alt="Team Triumph" />
            <h3>Team Triumph</h3>
            <p>How our jerseys helped the team win the championship.</p>
          </div>
        </div>
      </section>

      {/* Blog/Articles Section */}
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


      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
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

      {/* Newsletter Sign-Up */}
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

      {/* Social Media Links */}
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

      {/* Footer */}
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
    </div>
  );
};

export default Home;

