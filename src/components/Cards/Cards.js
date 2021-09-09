import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import bg2 from '../images/1.jpg'
import bg3 from '../images/2.jpg'
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <h1>What We Do</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src={bg3}
              text='Connecting businesses with their desired professional gigs'
              // label='Adventure'
              path='/About'
            />
            <CardItem
              src={bg2}
              text='Professional courses to upskill and re-skill gigs'
              // label='Adrenaline'
              path='/About'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
