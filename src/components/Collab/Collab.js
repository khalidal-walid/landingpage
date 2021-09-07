import React from 'react';
import './Collab.css';
import unikl from '../images/unikl.svg'
import kpt from '../images/kpt.svg'
import unisza from '../images/unisza.svg'

function Cards() {
  return (
    <div className='collabs'>
      <h3>Our Clients</h3>
      <div className='collabs__container'>
        <img src={unikl}/>
        <img src={kpt}/>
        <img src={unisza}/>
      </div>
      <hr/> 
    </div>
  );
}

export default Cards;
