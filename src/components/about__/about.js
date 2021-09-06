import React from 'react';
import '../../App.css';
import './about.css';

function about() {
  return(
    <div class="card-container">
      <div class="u-clearfix">
        <div className="about-title">
          <h1>We are <br/>your solutions.</h1>
        </div>
        <div class="about-desc">
          <h2>We are a technological track start-up with an aim to push forward a noble social cause by revolutionizing how Malaysians earn their incomes from home. The effects of the pandemic reciprocated throughout the entire country leaving many people without an income, businesses were forced to shut down and last but not least fresh graduates being denied the opportunity to start their career. We foresee this as a huge problem and a source of distress for many. We wanted to be the changemaker for the nation, we wanted to be the hero for the nation hence, we came with an idea to provide similar exclusiveness and benefits to a permanent job as we know now but with greater flexibility and opportunity to scale in the form of freelancing.
          <br/><br/>
          We are currently under the incubation program of Malaysian Global Innovation Centre (MaGIC) which is a spin-off company of government's Ministry of Science and Technology (MOSTI). As of now, we are in the midst of validating our minimum viable product which we hope to receive feedbacks from various people and organizations to improve and value-add the product before it is ready for commercialization .
</h2>
        </div>
      </div>
      {/* <hr/> */}
    </div>
  );
}

export default about;