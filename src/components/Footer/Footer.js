import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Connect with us!
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
          <a href="https://www.facebook.com/Giggers.my" target="_blank">
            <h3><FontAwesomeIcon icon={faFacebook} color='white' /> </h3>
          </a>
          <a href="https://twitter.com/giggers_my" target="_blank">
            <h3><FontAwesomeIcon icon={faTwitter} color='white' /> </h3>
          </a>
          <a href="https://www.instagram.com/giggers.my/" target="_blank">
            <h3><FontAwesomeIcon icon={faInstagram} color='white' /> </h3>
          </a>
          <a href="https://www.linkedin.com/company/giggers-malaysia/" target="_blank">
            <h3><FontAwesomeIcon icon={faLinkedin} color='white' /> </h3>
          </a>
          </div>
          <small class='website-rights'>giggers © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
