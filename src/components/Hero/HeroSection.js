import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/video/video.mp4' autoPlay loop muted /> */}
      <h1>Find your business solution with our gigs!</h1>
      {/* <p>BE A PART OF THE 21st CENTURY WORK REVOLUTION</p> */}
      <div className='hero-btns'>
        <Button
            onClick={(e) => {
              e.preventDefault();
              window.open('https://docs.google.com/forms/d/1p0YPDryVPUn8BbiXQyGISufI_ALBqkKYoV8t7vSWon8/edit?usp=sharing', "_blank")
              }}
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GIGIFY YOUR CAREER
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={(e) => {
            e.preventDefault();
            window.open('https://docs.google.com/forms/d/1SF5o4LyEvtesdQAqRTdilv6UXxL21LHXRlcRw2K9rVo/edit?usp=sharing', "_blank")
            }}
        >
          GIGIFY YOUR BUSINESS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
