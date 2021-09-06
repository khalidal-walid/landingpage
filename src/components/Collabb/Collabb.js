import React from 'react';
import './Collabb.css';
import unikl from '../images/unikl.svg'
import unisza from '../images/unisza.svg'
import uiam from '../images/uiam.svg'
import kpt from '../images/kpt.svg'

function Cards() {
  return (
    <div className='collab'>
      <h1>We partner with ambitious <br/>students and institutions.</h1>
      <div className='collab__container'>
      <img src={kpt} alt={"kpt"} />
        <img src={unikl} alt={"unikl"} />
        <img src={unisza} alt={"acer"} />
        <img src={uiam} alt={"uiam"} />
      </div>
      {/* <hr/>  */}
    </div>
  );
}

export default Cards;
