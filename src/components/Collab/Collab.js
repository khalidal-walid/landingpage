import React from 'react';
import './Collab.css';
import unikl from '../images/unikl.svg'
import kpt from '../images/kpt.svg'
import unisza from '../images/unisza.svg'
import uitm from '../images/uitm.svg'
import upsi from '../images/upsi.svg'
import upm from '../images/upm.svg'
import umk from '../images/umk.svg'
import ump from '../images/ump.svg'
import uiam from '../images/uiam.svg'

function Cards() {
  return (
    <div className='collabs'>
      <h1>Our Clients</h1>
      <div className='collabs__container'>
        <img src={kpt}/>
        <img src={unikl}/>
        <img src={uiam}/>
        <img src={upm}/>
        <img src={unisza}/>
        <img src={uitm}/>
        <img src={upsi}/>
        <img src={umk}/>
        <img src={ump}/>
      </div>
      <hr/> 
    </div>
  );
}

export default Cards;
