import React from 'react';
import ReactPlayer from "react-player"
import '../../App.css';
import './about.css';

function about() {
  return(
    <div class="card-container">
      <div class="u-clearfix">
        {/* <div className="about-title">
          <h1>We are <br/>your solutions.</h1>
        </div> */}
        <div class="about-desc">
          <h2>We are a technological track start-up with an aim to push forward a noble social cause by revolutionizing how Malaysians earn their incomes from home.
          </h2>
          <div class="video-giggers">
          <ReactPlayer
            className='react-player'
            url="https://youtu.be/TiTLhWyaotM"
            light={true}
            playing={true}
            controls={true}
            width='70%'
            height='70%'
          />
        </div>
        </div>
      </div>
      {/* <hr/> */}
    </div>
  );
}

export default about;