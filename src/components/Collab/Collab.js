import React from 'react';
import './Collab.css';
import unikl from '../images/unikl.png'
import unisza from '../images/unisza.png'
import uiam from '../images/uiam.png'

function Cards() {
  return (
    <div className='collabs'>
      <h3>Our Clients</h3>
      <div className='collabs__container'>
        <img src={unikl} alt={"unikl"} />
        <img src={unisza} alt={"acer"} />
        <img src={uiam} alt={"ramly"} />
      </div>
      <hr/> 
    </div>
  );
}

export default Cards;
