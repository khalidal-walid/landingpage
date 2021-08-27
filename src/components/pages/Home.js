import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Collab from '../Collab'
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Portfolio from '../portfolio/Portfolio';

function Home() {
  return (
    <>
      <HeroSection />
      <Collab />
      <Cards />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;
