import React from 'react';
import ReactPlayer from "react-player"
import '../../App.css';
import './about.css';

function about() {
  return(
    <div className='about-container'>
      <div className="about">
        <iframe src="https://www.youtube.com/embed/TiTLhWyaotM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      {/* <video src='/video/video.mp4' autoPlay loop muted /> */}
      {/* <h1>Find your business solution with our gigs!</h1> */}
      {/* <p>BE A PART OF THE 21st CENTURY WORK REVOLUTION</p> */}
    </div>
  );
}

export default about;