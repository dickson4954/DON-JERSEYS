import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import styles from './Jerseys.module.css';

// Placeholder images
const placeholderImage = 'path/to/placeholder-image.png';

// Static data for jerseys
const jerseysData = [
  {
    league: 'Premier League',
    teams: [
      { 
        name: 'Arsenal', 
        kits: {
          Home: {
            image: require('../assets/images/teams/arsenal_home.png') || placeholderImage,
            price: 70,
            rating: 4.5,
            reviews: ['Great quality!', 'Loved the design.'],
            available: true,
            discount: 10,
            sizes: ['S', 'M', 'L', 'XL'],
            stock: 20,
          },
          Away: {
            image: require('../assets/images/teams/arsenal_away.png') || placeholderImage,
            price: 65,
            rating: 4.0,
            reviews: ['Comfortable fit.', 'Good value for money.'],
            available: true,
            discount: 5,
            sizes: ['S', 'M', 'L'],
            stock: 15,
          },
          Third: {
            image: require('../assets/images/teams/arsenal_third.png') || placeholderImage,
            price: 75,
            rating: 4.2,
            reviews: ['Stylish!', 'Highly recommended.'],
            available: false,
            discount: 0,
            sizes: ['M', 'L', 'XL'],
            stock: 0,
          },
        },
      },
      { 
        name: 'Arsenal', 
        kits: {
          Home: {
            image: require('../assets/images/teams/arsenal_home.png') || placeholderImage,
            price: 70,
            rating: 4.5,
            reviews: ['Great quality!', 'Loved the design.'],
            available: true,
            discount: 10,
            sizes: ['S', 'M', 'L', 'XL'],
            stock: 20,
          },
          Away: {
            image: require('../assets/images/teams/arsenal_away.png') || placeholderImage,
            price: 65,
            rating: 4.0,
            reviews: ['Comfortable fit.', 'Good value for money.'],
            available: true,
            discount: 5,
            sizes: ['S', 'M', 'L'],
            stock: 15,
          },
          Third: {
            image: require('../assets/images/teams/arsenal_third.png') || placeholderImage,
            price: 75,
            rating: 4.2,
            reviews: ['Stylish!', 'Highly recommended.'],
            available: false,
            discount: 0,
            sizes: ['M', 'L', 'XL'],
            stock: 0,
          },
        },
      },
      // Add more teams as needed
    ],
  },
  {
    league: 'La Liga',
    teams: [
      { 
        name: 'Real Madrid', 
        kits: {
          Home: {
            image: require('../assets/images/teams/real_madrid_home.png') || placeholderImage,
            price: 80,
            rating: 4.7,
            reviews: ['Top-notch quality.', 'Excellent fit.'],
            available: true,
            discount: 12,
            sizes: ['S', 'M', 'L', 'XL'],
            stock: 25,
          },
          Away: {
            image: require('../assets/images/teams/real_madrid_away.png') || placeholderImage,
            price: 75,
            rating: 4.5,
            reviews: ['Great design.', 'Comfortable wear.'],
            available: true,
            discount: 8,
            sizes: ['S', 'M', 'L'],
            stock: 18,
          },
          Third: {
            image: require('../assets/images/teams/real_madrid_third.png') || placeholderImage,
            price: 85,
            rating: 4.6,
            reviews: ['Amazing look.', 'Worth every penny.'],
            available: true,
            discount: 5,
            sizes: ['M', 'L', 'XL'],
            stock: 22,
          },
        },
      },
      // Add more teams as needed
    ],
  },
  {
    league: 'Other Clubs',
    teams: [
      { 
        name: 'PSG', 
        kits: {
          Home: {
            image: require('../assets/images/teams/psg_home.png') || placeholderImage,
            price: 90,
            rating: 4.8,
            reviews: ['Excellent quality!', 'Very stylish.'],
            available: true,
            discount: 15,
            sizes: ['S', 'M', 'L', 'XL'],
            stock: 30,
          },
          Away: {
            image: require('../assets/images/teams/psg_away.png') || placeholderImage,
            price: 85,
            rating: 4.7,
            reviews: ['Comfortable and trendy.', 'Highly recommended.'],
            available: true,
            discount: 10,
            sizes: ['S', 'M', 'L'],
            stock: 12,
          },
          Third: {
            image: require('../assets/images/teams/psg_third.png') || placeholderImage,
            price: 95,
            rating: 4.9,
            reviews: ['Exceptional quality.', 'Best purchase.'],
            available: true,
            discount: 20,
            sizes: ['M', 'L', 'XL'],
            stock: 8,
          },
        },
      },
      // Add more clubs as needed
    ],
  },
];

function Jerseys() {
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState(jerseysData);
  const [selectedKit, setSelectedKit] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [bookingDetails, setBookingDetails] = useState({
    size: '',
    quantity: 1,
    paymentMethod: 'MPesa',
  });

  // Handles search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filters jerseys based on search input
  useEffect(() => {
    const filterList = () => {
      const keywords = search.toLowerCase().split(' ');
      const filteredJerseys = jerseysData.map((league) => ({
        ...league,
        teams: league.teams.filter((team) =>
          keywords.every((keyword) => team.name.toLowerCase().includes(keyword))
        ),
      }));
      setFilteredList(filteredJerseys);
    };

    const delaySearch = setTimeout(() => {
      filterList();
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [search]);

  const handleKitClick = (kit) => {
    setSelectedKit(kit);
  };

  const handleCloseModal = () => {
    setSelectedKit(null);
  };

  const toggleFavorite = (kit) => {
    const updatedFavorites = new Set(favorites);
    if (updatedFavorites.has(kit)) {
      updatedFavorites.delete(kit);
    } else {
      updatedFavorites.add(kit);
    }
    setFavorites(updatedFavorites);
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = () => {
    if (!selectedKit.available) {
      alert('Selected kit is currently out of stock.');
      return;
    }

    if (!bookingDetails.size) {
      alert('Please select a size.');
      return;
    }

    alert('Booking submitted!'); // Placeholder for real booking logic
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={`${styles.m2} ${styles.p3}`}>
          <input
            onChange={handleSearch}
            className={styles.formControl}
            type="text"
            placeholder="Search for jerseys"
            value={search}
          />
        </div>
        <div className="row">
          {filteredList.map((league, leagueIndex) => (
            <div key={leagueIndex} className="col-12 mb-4">
              <h2>{league.league}</h2>
              <div className="row">
                {league.teams.map((team) => (
                  <div key={team.name} className="col-sm-12 mb-3">
                    <div className={styles.card}>
                      <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>{team.name}</h5>
                        <div className={styles.kitImages}>
                          {Object.entries(team.kits).map(([kitName, kitDetails]) => (
                            <div key={kitName} className={styles.kitImageContainer}>
                              <img
                                src={kitDetails.image}
                                alt={`${team.name} ${kitName} kit`}
                                className={styles.kitImage}
                                onClick={() => handleKitClick(kitDetails)}
                              />
                              <p className={styles.kitName}>{kitName} Kit</p>
                              <p className={styles.price}>${kitDetails.price}</p>
                              <p className={styles.rating}>Rating: {kitDetails.rating}⭐</p>
                              {kitDetails.discount > 0 && (
                                <p className={styles.discount}>Discount: {kitDetails.discount}%</p>
                              )}
                              <p className={styles.stock}>Stock: {kitDetails.stock} items</p>
                              <button 
                                className={styles.addToCartBtn}
                                disabled={!kitDetails.available}
                              >
                                {kitDetails.available ? 'Add to Cart' : 'Out of Stock'}
                              </button>
                              <button 
                                className={`${styles.favoriteBtn} ${favorites.has(kitDetails) ? styles.favorited : ''}`}
                                onClick={() => toggleFavorite(kitDetails)}
                              >
                                {favorites.has(kitDetails) ? 'Unfavorite' : 'Add to Favorites'}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedKit && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={handleCloseModal}>&times;</span>
              <h2>{selectedKit.name}</h2>
              <img src={selectedKit.image} alt={`${selectedKit.name} kit`} className={styles.modalImage} />
              <p className={styles.modalPrice}>Price: ${selectedKit.price}</p>
              <p className={styles.modalRating}>Rating: {selectedKit.rating}⭐</p>
              <p className={styles.modalStock}>Stock: {selectedKit.stock} items</p>
              <p className={styles.modalDescription}>Discount: {selectedKit.discount}%</p>

              <h4>Reviews:</h4>
              <ul>
                {selectedKit.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>

              <form className={styles.bookingForm} onSubmit={(e) => { e.preventDefault(); handleBookingSubmit(); }}>
                <label>Size:</label>
                <select name="size" value={bookingDetails.size} onChange={handleBookingChange}>
                  <option value="">Select size</option>
                  {selectedKit.sizes.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                  ))}
                </select>

                <label>Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={bookingDetails.quantity}
                  onChange={handleBookingChange}
                />

                <label>Payment Method:</label>
                <select name="paymentMethod" value={bookingDetails.paymentMethod} onChange={handleBookingChange}>
                  <option value="MPesa">MPesa</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                </select>

                <button type="submit" className={styles.bookBtn}>Book Now</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jerseys;
