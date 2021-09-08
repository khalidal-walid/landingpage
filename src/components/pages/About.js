import React from 'react';
import '../../App.css';
import Ceo from '../ceo/ceo';
import AboutUs from '../about__/about';
import AboutDesc from '../aboutDesc/community'
import Misvis from '../misvis/misvis';
import Cards from '../Cards/Cards';
import Cardss from '../Cards2/Cardss';
import Timeline from '../timeline/timeline';
import Journey from '../misvis/journey'

function About() {
  return (
    <>
      <AboutUs />
      <AboutDesc />
      <Misvis/>
      <Cards/>
      <Cardss/>
      <Journey/>
      <Timeline/>
    </>
  );
}

export default About;
