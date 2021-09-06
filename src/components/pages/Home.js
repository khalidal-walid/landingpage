import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
import Collab from '../Collab/Collab'
import HeroSection from '../Hero/HeroSection';
import Portfolio from '../portfolio/Portfolio';

function Home() {
  return (
    <>
      <HeroSection />
      <Collab />
      {/* <Cards /> */}
      <Portfolio />
    </>
  );
}

export default Home;
