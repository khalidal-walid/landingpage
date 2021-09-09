import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';
import logo from '../images/GIGGERS (2).png';
import { Button } from '../Button/Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} />
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className={click ? 'nav-item active' : 'nav-item'}>
              <Link 
              to='/' 
              className='nav-links' 
              onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              to='/About' 
              className='nav-links' 
              onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              to='/Solutions' 
              className='nav-links' 
              onClick={closeMobileMenu}>
                Our Solution
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Community'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Social Impact
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          {/* {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
