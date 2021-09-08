import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from '../Button/Button';
import bg1 from '../images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg'
import bg2 from '../images/neonbrand-1-aA2Fadydc-unsplash.jpg'
import bg3 from '../images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'

const link1 = 'www.google.com'

function News() {
  return (
    <div className='cards'>
      <h1>News</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bg2}
              text='News 1'
              // label='Adventure'
              path='/Community'
            />
            <CardItem
              src={bg3}
              text='News 2'
              // label='Adrenaline'
              path='/Community'
            />
            <CardItem
              src={bg3}
              text='News 3'
              // label='Adrenaline'
              path='/Community'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;
