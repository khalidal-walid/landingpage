import React from 'react';
import './Cards.css';
// import CardItem from './CardItem';
import bg1 from '../images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg'
import bg2 from '../images/neonbrand-1-aA2Fadydc-unsplash.jpg'
import bg3 from '../images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'
import CardItem2 from './CardItem';

function Cardss() {
  return (
    <div className='cardss'>
      <h1>Why We Are Different</h1>
      <div className='cardss__container'>
        <div className='cardss__wrapper'>
          <ul className='cardss__item'>
            <CardItem2
              // src={bg2}
              text='Carefully selected professional gigs'
              // label='Adventure'
              path='/Community'
            />
            <CardItem2
              // src={bg3}
              text='Low risk of fraud in our platform'
              // label='Adrenaline'
              path='/Community'
            />
            <CardItem2
              // src={bg2}
              text='Reduce hiring cost when you hire gigs'
              // label='Adventure'
              path='/Community'
            />
            <CardItem2
              // src={bg3}
              text=' Retirement saving scheme for gigs'
              // label='Adrenaline'
              path='/Community'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardss;
