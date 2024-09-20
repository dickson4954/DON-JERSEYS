import React, { useState } from 'react';
import styles from './Sidebar.module.css'; // Ensure the CSS module is correctly imported
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedLeague, setSelectedLeague] = useState(null);
  

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item); // Toggle item selection
  };

  const handleLeagueClick = (league) => {
    setSelectedLeague(league === selectedLeague ? null : league); // Toggle league selection
  };

  return (
    <div className={styles.sidebarContainer}>
      {/* Sidebar for Categories */}
      <div className={styles.sidebarCard}>
        <ul className={styles.list}>
          <li className={styles.listItem} onClick={() => handleItemClick('Jerseys')}>
            Jerseys
          </li>
          {selectedItem === 'Jerseys' && (
            <div className={styles.cardContent}>
              <div className={styles.leagueCard}>
        <ul className={styles.list}>
          <li className={styles.listItem} onClick={() => handleLeagueClick('Premier League')}>
            Premier League
          </li>
          {selectedLeague === 'Premier League' && (
            <div className={styles.cardContent}>
              <ul className={styles.teamList}>
                <li>Manchester United</li>
                <li>Liverpool</li>
                <li>Arsenal</li>
                <li>Manchester City</li>
                <li>Chelsea</li>
                {/* Add more teams */}
              </ul>
            </div>
          )}

          <li className={styles.listItem} onClick={() => handleLeagueClick('La Liga')}>
            La Liga
          </li>
          {selectedLeague === 'La Liga' && (
            <div className={styles.cardContent}>
              <ul className={styles.teamList}>
                <li>Real Madrid</li>
                <li>Barcelona</li>
                <li>Atletico Madrid</li>
                <li>Sevilla</li>
                <li>Valencia</li>
                {/* Add more teams */}
              </ul>
            </div>
          )}

          <li className={styles.listItem} onClick={() => handleLeagueClick('Other Leagues')}>
            Other Leagues
          </li>
          {selectedLeague === 'Other Leagues' && (
            <div className={styles.cardContent}>
              <ul className={styles.teamList}>
                <li>Bayern Munich (Bundesliga)</li>
                <li>Juventus (Serie A)</li>
                <li>PSG (Ligue 1)</li>
                {/* Add more teams */}
              </ul>
            </div>
          )}
        </ul>
      </div>
            </div>
          )}

          <li className={styles.listItem} onClick={() => handleItemClick('Sports Shoes')}>
            Sports Shoes
          </li>
          {selectedItem === 'Sports Shoes' && (
            <div className={styles.cardContent}>
              <p>All types of sports shoes are displayed here...</p>
              {/* Add more detailed content here */}
            </div>
          )}

          <li className={styles.listItem} onClick={() => handleItemClick('Tracksuits')}>
            Tracksuits
          </li>
          {selectedItem === 'Tracksuits' && (
            <div className={styles.cardContent}>
              <p>All types of tracksuits are displayed here...</p>
              {/* Add more detailed content here */}
            </div>
          )}

          <li className={styles.listItem} onClick={() => handleItemClick('Accessories')}>
            Accessories
          </li>
          {selectedItem === 'Accessories' && (
            <div className={styles.cardContent}>
              <p>All types of accessories are displayed here...</p>
              {/* Add more detailed content here */}
            </div>
          )}

          <li className={styles.listItem} onClick={() => handleItemClick('Footballs')}>
            Footballs
          </li>
          {selectedItem === 'Footballs' && (
            <div className={styles.cardContent}>
              <p>All types of footballs are displayed here...</p>
              {/* Add more detailed content here */}
            </div>
          )}

          <li className={styles.listItem} onClick={() => handleItemClick('Basketballs')}>
            Basketballs
          </li>
          {selectedItem === 'Basketballs' && (
            <div className={styles.cardContent}>
              <p>All types of basketballs are displayed here...</p>
              {/* Add more detailed content here */}
            </div>
          )}

          <li className={styles.listItem} onClick={() => handleItemClick('Volleyballs')}>
            Volleyballs
          </li>
          {selectedItem === 'Volleyballs' && (
            <div className={styles.cardContent}>
              <p>All types of volleyballs are displayed here...</p>
              {/* Add more detailed content here */}
            </div>
          )}

          <li className={styles.listItem} onClick={() => handleItemClick('Other Gear')}>
            Other Gear
          </li>
          {selectedItem === 'Other Gear' && (
            <div className={styles.cardContent}>
              <p>Shin Guards, Gloves, Water Bottles, Sports Bags, Socks, Caps & Hats, Fitness Equipment, Training Cones, Whistles & Referee Kits, Compression Gear.</p>
              {/* Add more detailed content here */}
            </div>
          )}
        </ul>
      </div>

      
    </div>
  );
};

export default Sidebar;
