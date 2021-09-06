import React from 'react';
import './Collab.css';
import acer from '../images/acer.svg'
import logitech from '../images/logitech.svg'
import ramly from '../images/ramly.svg'

function Cards() {
  return (
    <div className='collabs'>
      <h3>Trusted by:</h3>
      <div className='collabs__container'>
        <img src={logitech} alt={"logitech"} />
        <img src={acer} alt={"acer"} />
        <img src={ramly} alt={"ramly"} />
      </div>
      <hr/> 
    </div>
  );
}

export default Cards;
