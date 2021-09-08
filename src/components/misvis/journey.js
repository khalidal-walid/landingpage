import React from 'react';
import '../../App.css';
import './misvis.css';

function journey() {
  return(
    <div class="card-container misvis">
      <div className='title'>
        <h1>Our Journey</h1>
      </div>
      <div class="u-clearfix">
      <div class="grid-container">
        <div class="grid-item">
          <h2>Customers Served</h2>
          <p>57</p>
        </div>
        <div class="grid-item">
          <h2>Service Satisfaction Rate</h2>
          <p>100%</p>
        </div>
      </div>
      </div>
      <hr/>
    </div>
  );
}
  
  export default journey;