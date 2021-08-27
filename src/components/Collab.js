import React from 'react';
import './Collab.css';
import unikl from './images/unikl.png'
import acer from './images/acer.png'
import logitech from './images/logitech.png'
import ramly from './images/ramly.svg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Collaborators</h1>
      <div className='cards__container'>
        <img src={unikl} alt={"unikl"} />
        <img src={acer} alt={"acer"} />
        <img src={logitech} alt={"logitech"} />
        <img src={ramly} alt={"ramly"} />
      </div>
    </div>
  );
}

export default Cards;
