import React from 'react';
import '../../App.css';
import Ceo from '../ceo/ceo';
import AboutUs from '../about__/about';
import Misvis from '../misvis/misvis';
import Cards from '../Cards/Cards';

function About() {
  return (
    <>
      {/* <Ceo /> */}
      <AboutUs />
      <Misvis/>
      <Cards/>
    </>
  );
}

export default About;
