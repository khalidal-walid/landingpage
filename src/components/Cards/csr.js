import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import bg1 from '../images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg'
import bg2 from '../images/neonbrand-1-aA2Fadydc-unsplash.jpg'
import bg3 from '../images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Our CSR</h1>
      {/* <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bg2}
              text='Connecting businesses with their desired professional gigs'
              // label='Adventure'
              path='/Community'
            />
            <CardItem
              src={bg3}
              text='Professional courses to upskill and re-skill gigs'
              // label='Adrenaline'
              path='/Community'
            />
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Cards;
