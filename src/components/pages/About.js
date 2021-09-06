import React from 'react';
import '../../App.css';
import Ceo from '../ceo/ceo';
import AboutUs from '../about__/about';
import Misvis from '../misvis/misvis';
import Collabb from '../Collabb/Collabb'
import Cards from '../Cards/Cards';

function About() {
  return (
    <>
      {/* <Ceo /> */}
      <AboutUs />
      <Misvis/>
      <Collabb/>
      <Cards/>
    </>
  );
}

export default About;
