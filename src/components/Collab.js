import React from 'react';
import './Collab.css';
import unikl from './images/unikl.png'
import unisza from './images/unisza.png'
import logitech from './images/logitech.png'
import uiam from './images/uiam.png'

function Cards() {
  return (
    <div className='cards'>
      <h3>Our Clients</h3>
      <div className='cards__container'>
        <img src={unikl} alt={"unikl"} />
        <img src={unisza} alt={"acer"} />
        <img src={uiam} alt={"ramly"} />
      </div>
    </div>
  );
}

export default Cards;
