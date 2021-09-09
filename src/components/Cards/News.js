import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from '../Button/Button';
import bg1 from '../images/3.jpg'
import bg2 from '../images/4.jpg'
import bg3 from '../images/5.jpg'

const link1 = 'www.google.com'

function News() {
  return (
    <div className='cards'>
      <h1>Our Latest News</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bg1}
              text='We successfully finished our first user testing for our website.'
              // label='Adventure'
              path='/Community'
            />
            <CardItem
              src={bg2}
              text='Giggers Malaysia online meeting with Rizka Betri. We discussed how our company can collaborate together. '
              // label='Adrenaline'
              path='/Community'
            />
            <CardItem
              src={bg3}
              text='So happy to hear that UniKL enlisted for the first time in the Times Higher Education (THE) Emerging Economies University Ranking 2021.'
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
