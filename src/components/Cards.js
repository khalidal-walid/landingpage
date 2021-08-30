import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import bg1 from './images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg'
import bg2 from './images/neonbrand-1-aA2Fadydc-unsplash.jpg'
import bg3 from './images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Why Are We Different?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bg1}
              text='Economical Staffing Solution'
              // label='Mystery'
              path='/services'
            />
            <CardItem
              src={bg2}
              text='Upskilling & Reskilling Programs'
              // label='Adventure'
              path='/products'
            />
            <CardItem
              src={bg3}
              text='Community Engagement'
              // label='Adrenaline'
              path='/sign-up'
            />
                        <CardItem
              src={bg3}
              text='Platform for local gigs'
              // label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
