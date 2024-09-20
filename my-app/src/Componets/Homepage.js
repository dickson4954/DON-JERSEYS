import React from 'react';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import CategorySection from './CategorySection';
import Footer from './Footer';
import Socials from './Socials';
import Newsletter from './Newsletter';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Aboutus from './Aboutus';
import FeaturedProducts from './FeaturedProducts';
import backgroundImage from '../assets/images/messi.jpg';
import styles from './HomePage.module.css';

const Home = () => {
  const premierLeagueCategories = [
    {
      badge: "New",
      imgSrc: "https://i.pinimg.com/564x/0d/34/69/0d3469770c5cf199dc79475aa05d8274.jpg",
      altText: "Jerseys",
      additionalInfo: "Limited Edition",
      rating: 4.2,
      title: "Manchester United",
      price: 1500,
      stock: 10,
    },
    {
      badge: "Sale",
      imgSrc: "https://i.pinimg.com/564x/2d/af/89/2daf89d443ab6419482421d758cde306.jpg",
      altText: "Footballs",
      additionalInfo: "Discounted Price",
      rating: 3.8,
      title: "Manchester City",
      price: 1500,
      stock: 7,
    },
    {
      badge: "Sale",
      imgSrc: "https://www.soccerlord.se/wp-content/uploads/2018/09/Wolverhampton-Wanderers-Away-Football-Shirt-24-25.jpg",
      altText: "Footballs",
      additionalInfo: "Discounted Price",
      rating: 3.8,
      title: "Wolves",
      price: 1500,
      stock: 7,
    },
  ];

  const BundesligaCategories = [
    {
      badge: "New",
      imgSrc: "https://www.soccerbox.com/media/catalog/product/cache/e5c18d5f608fefb2b3ef83fcb1922b34/b/a/bayer-04-leverkusen-away-football-shirt-23-24.jpg",
      altText: "Jerseys",
      additionalInfo: "Limited Edition",
      rating: 4.2,
      title: "Bayer Leverkusen",
      price: 1500,
      stock: 10,
    },
    {
      badge: "Sale",
      imgSrc: "https://www.bvbonlineshop.com/media/image/a6/26/2f/83912-1b73527656435_600x600.jpg",
      altText: "Footballs",
      additionalInfo: "Discounted Price",
      rating: 3.8,
      title: "Bvb",
      price: 1500,
      stock: 7,
    },
    {
      badge: "Sale",
      imgSrc: "https://havencraft.co.ke/wp-content/uploads/2024/08/Bayern-2425-Home-1-700x700-1.jpeg",
      altText: "Footballs",
      additionalInfo: "Discounted Price",
      rating: 3.8,
      title: "Bayern Munich",
      price: 1500,
      stock: 8,
    },
    
  ];

  const laLigaCategories = [
    {
      badge: "New",
      imgSrc: "https://i.pinimg.com/736x/a4/a4/ff/a4a4ff7ba10693fa6140c229636c8a79.jpg",
      altText: "Jerseys",
      additionalInfo: "Limited Edition",
      rating: 4.2,
      title: "Real Madrid",
      price: 1500,
      stock: 10,
    },
    {
      badge: "Sale",
      imgSrc: "https://i.pinimg.com/564x/e8/20/90/e820908839b7adac776fa47de0a43930.jpg",
      altText: "Footballs",
      additionalInfo: "Discounted Price",
      rating: 3.8,
      title: "Barcelona",
      price: 1500,
      stock: 7,
    },
    {
      badge: "Sale",
      imgSrc: "https://championgearz.co.za/cdn/shop/files/IMG_2480.jpg?v=1721155027",
      altText: "Footballs",
      additionalInfo: "Discounted Price",
      rating: 3.8,
      title: "Real Sociedad",
      price: 1500,
      stock: 7,
    },
  ];

  return (
    <div>
      <Navbar />
      <HeroBanner 
        backgroundImage={backgroundImage} 
        heading="Welcome to Don Jerseys!" 
        subtext="Find the best jerseys, footballs, shoes, and accessories for your game." 
      />
      <CategorySection sectionTitle="Premier League" categories={premierLeagueCategories} />
      <CategorySection sectionTitle="La Liga" categories={laLigaCategories} />
      <CategorySection sectionTitle="Bundesliga" categories={BundesligaCategories} />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Blog />
      <Aboutus />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
