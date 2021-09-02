import React from 'react';
import '../../App.css';
// import Navbar from '../Navbar/Navbar'
import Cards from '../Cards/Cards';
import Collab from '../Collab/Collab'
import HeroSection from '../Hero/HeroSection';
import Footer from '../Footer/Footer';
import Portfolio from '../portfolio/Portfolio';

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <Collab />
      <Cards />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;
