import React from 'react';
import '../../App.css';
import './community.css';

function about() {
  return(
    <div class="card-container community">
      <div class="u-clearfix">
        <div className="community-title">
          <h1>
          It started with a problem.
          </h1>
        </div>
        <div className="community-desc">
          {/* <h2>Helping students reach their potential employees.</h2> */}
          <p>
            We had a few friends doing freelancing complaining to us that they are worried about the transaction  between them and their clients. Oftentimes, they were cheated off the deal or being paid less than what has been agreed. 
            <br/><br/>
            In parallel, a lot of business owners here in Malaysia have been wanting to hire freelancers to help fulfill their business needs but none of the current avenues are able to realize their goal. 
            While discussing the problem in our usual virtual scene amidst the pandemic came the ultimate idea ‘Giggers Malaysia’.
            <br/><br/>
            Fast forward a couple of months later, we are now aiming and working towards becoming the go-to digital gigging platform in South East Asia by providing solutions such as lowering transaction fraud risk between gigs and their clients, providing clients with highly skilled professional gigs at very competitive prices and retirement savings for gigs. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;