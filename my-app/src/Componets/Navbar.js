import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState(0); // Placeholder for cart item count
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearch = () => {
    // Implement search functionality here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <img
            src="https://i.pinimg.com/originals/2d/09/ae/2d09ae50ab777f3ffcddb322db1cc53f.jpg"
            width="100"
            height="50"
            className={styles.logoIcon}
            alt="DON JERSEYS"
          />
          DON JERSEYS
        </Link>
      </div>

      {/* Search Bar Section */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for products..."
          className={styles.searchBar}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Help Section */}
      <div 
        className={styles.help} 
        onMouseEnter={() => setDropdownOpen(true)} 
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <Link to="/help" className={styles.helpLink}>
          <img
            src="https://i.pinimg.com/736x/7c/7f/48/7c7f482d90ebd7e5f11257db82ce4efc.jpg"
            className={styles.helpIcon}
            alt="Help"
          />
          <span className={styles.helpText}>Help</span>
          <i className={`${styles.dropdownArrow} fas fa-chevron-down`}></i>
        </Link>
        {dropdownOpen && (
          <div className={styles.dropdown}>
            <Link to="/place-order" className={styles.dropdownLink}>Place Your Order</Link>
            <Link to="/track-order" className={styles.dropdownLink}>Track Your Order</Link>
            <Link to="/cancel-order" className={styles.dropdownLink}>Order Cancellation</Link>

          </div>
        )}
      </div>

      {/* Add to Cart Button */}
      <div className={styles.cart}>
        <Link to="/cart" className={styles.cartLink}>
          <img
            src="https://i.pinimg.com/564x/f0/c0/83/f0c083d2beb2fd171d2b46fb408dd52b.jpg"
            className={styles.cartIcon}
            alt="Cart"
          />
          <span className={styles.cartText}>Cart</span>
          {cartItems > 0 && <span className={styles.cartCount}>{cartItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
