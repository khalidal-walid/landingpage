import React from 'react';
import '../../App.css';
import './misvis.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faSmile } from '@fortawesome/free-solid-svg-icons'

function journey() {
  return(
    <div class="card-container misvis">
      <div className='title'>
        {/* <h1>Our Journey</h1> */}
      </div>
      <div class="u-clearfix">
      <div class="grid-container">
        <div class="grid-item">
          <h2 className='icon-containers'><FontAwesomeIcon icon={faComments} color='white' /> </h2>
          <h1>Customers Served</h1>
          <p>57</p>
        </div>
        <div class="grid-item">
          <h2 className='icon-containers'><FontAwesomeIcon icon={faSmile} color='white' /> </h2>
          <h1>Service Satisfaction Rate</h1>
          <p>100%</p>
        </div>
      </div>
      </div>
      {/* <hr/> */}
    </div>
  );
}
  
  export default journey;