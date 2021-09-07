import React from 'react';
import '../../App.css';
import './community.css';

function about() {
  return(
    <div class="card-container community">
      <div class="u-clearfix">
        <div className="community-title">
          <h1>
            We work together to truly share what we have <br/> by offer our expertise. 
          </h1>
        </div>
        <div className="community-desc">
          <h2>Helping students reach their potential employees.</h2>
          <p>There comes a time when every students needs to pivot its proposition or break job market, and we offer an event that are capable of achieving these goals. Via detailed research and standout speaker, we please to help our generation to expand their reach and help create lasting bonds with our community.</p>
        </div>
                <div class="testimoni">
          <div class="testimoni-container">
            <div class="testimoni-item">
              <h6>Adam Ramli.</h6>
              <p>Final year student UniKL MIDI.</p>
              <span>I'm really impressed with how young yet amazing all the trainers are! I've joined many trainings where I couldn't relate with what the trainers were trying to say due to the generation gap. Giggers really understand what young people need.</span>
            </div>
            <div class="testimoni-item">
            <h6>Nur Hamizah.</h6>
            <p>Final year student UniKL MIDI.</p>
            <span>I really love how passionate & professional all the trainers are. What makes this webinar stand out is they have practical sessions where your resume & LinkedIn will be dissected and reviewed on thespot!</span>
            </div>
            <div class="testimoni-item">
            <h6>Humaira.</h6>
            <p>Final year student UniKL MIDI.</p>
            <span>I am a shy person. But this webinar has taught me that an introvert can also perform amazingly anywhere! It's all about chanelling your confidence into the right place.</span>
            </div>
          </div>
        </div>
        <div className="community-desc">
          <h2>Free education for all.</h2>
          <p>We build a connection from the ground up, or upgrade existing knowledge to cope with new demands with our youth. </p>
        </div>
      </div>
    </div>
  );
}

export default about;