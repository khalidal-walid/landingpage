import React from 'react';
import './Cards.css';
import CardItem2 from './CardItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faWallet, faHandshake, faCommentDollar } from '@fortawesome/free-solid-svg-icons'

function Cardss() {
  return (
    <div className='cardss'>
      <h1>Why We Are Different</h1>
      <div className='cardss__container'>
        <div className='cardss__wrapper'>
          <ul className='cardss__item'>
            <div className='container'>
              <h1 className='icon-container'><FontAwesomeIcon icon={faUsers} color='black' /> </h1>
              <CardItem2
                // src={bg3}
                text='Carefully selected professional gigs'
                // label='Adventure'
                path='/Community'
              />
            </div>
            <div className='containerr'>
              <h1 className='icon-container'><FontAwesomeIcon icon={faHandshake} color='black' /> </h1>
              <CardItem2
                // src={bg3}
                text='Low risk of fraud in our platform'
                // label='Adventure'
                path='/Community'
              />
            </div>
            <div className='containerr'>
              <h1 className='icon-container'><FontAwesomeIcon icon={faWallet} color='black' /> </h1>
              <CardItem2
                // src={bg3}
                text='Reduce hiring cost when you hire gigs'
                // label='Adventure'
                path='/Community'
              />
            </div>
            <div className='containerr'>
              <h1 className='icon-container'><FontAwesomeIcon icon={faCommentDollar} color='black' /> </h1>
              <CardItem2
                // src={bg3}
                text='Retirement saving scheme for gigs'
                // label='Adventure'
                path='/Community'
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardss;
