// JerseysPage.js
import React from 'react';
import styles from './JerseysPage.module.css';

const JerseysPage = () => {
  // Dummy data for jerseys
  const jerseys = [
    { id: 1, name: 'Home Jersey', price: '$60', imageUrl: 'https://i0.wp.com/jerseystore.co.ke/wp-content/uploads/2024/06/1000940583.jpg?fit=900%2C900&ssl=1' },
    { id: 2, name: 'Away Jersey', price: '$65', imageUrl: 'https://www.soccerlord.se/wp-content/uploads/2016/11/Barcelona-Home-Football-Shirt-24-25.jpg' },
    { id: 3, name: 'Third Jersey', price: '$70', imageUrl: 'https://shop.nottinghamforest.co.uk/cdn/shop/files/NFFC-Home-Shirt-24-25.jpg?v=1721071003' },
    { id: 4, name: 'Fourth Jersey', price: '$75', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkQikBQDsWLqx3myTljjbhugy0w0upfVwiQ&s' },
    { id: 5, name: 'Fifth Jersey', price: '$80', imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiydSn7iiJwV7Y8sI5QJlfaoKPP81jqLPY2MCR1Mw-yw-k6QaUxFuTtlbJPGsaOya8lu1sbtSSJPAM_7SEuCfAB13okak6XoXeAgJSMHaxyEUue5LeqN4p2hDQSjMrbjzWnMFREsHT2DcObaNWQx63oA1rjAnxMEXj6RUQItvr9DgqJ9WlrSj0AFE7yWxx3/s1600/AS%20Roma%2024-25%20Home%20Kit%20%20%282%29.jpg' },
    
  ];

  return (
    <div className={styles.jerseysPage}>
      <h1>All Jerseys</h1>
      <div className={styles.jerseyGrid}>
        {jerseys.map((jersey) => (
          <div key={jersey.id} className={styles.jerseyCard}>
            <img src={jersey.imageUrl} alt={jersey.name} className={styles.jerseyImage} />
            <div className={styles.jerseyDetails}>
              <h3>{jersey.name}</h3>
              <p>{jersey.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JerseysPage;
