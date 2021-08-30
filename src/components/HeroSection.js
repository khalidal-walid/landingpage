import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/video/video.mp4' autoPlay loop muted />
      <h1>Find your business solution with our gigs!</h1>
      {/* <p>BE A PART OF THE 21st CENTURY WORK REVOLUTION</p> */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BE A GIG
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          HIRE GIG
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
