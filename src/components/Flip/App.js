import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from './../flipList';
import Rick from './rick.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faChalkboardTeacher, faFileSignature, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const FlippyStyle = {
  width: '300px',
  height: '300px',
  textAlign: 'center',
  color: 'black',
  fontSize: '10px',
  justifyContent: 'center',
}


const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {/* <img
        src={Rick}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      /> */}
      <h1 className='icon-container'><FontAwesomeIcon icon={faChalkboardTeacher} color='black' /> </h1>
      <h1>Kita Jaga Kita</h1>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#00838a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <p
        style={{
          fontSize:'1.3em',
          textAlign: 'justify',
          color: 'white',
          width: '100%',
        }}>
        {children}<br />
      </p>
    </BackSide>
  </React.Fragment>);

const DefaultCardContents2 = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {/* <img
        src={Rick}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      /> */}
      <h1 className='icon-container'><FontAwesomeIcon icon={faFileSignature} color='black' /> </h1>
      <h1>Resume Workshop</h1>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#00838a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <p
        style={{
          fontSize:'1.3em',
          textAlign: 'justify',
          color: 'white',
          width: '100%',
        }}>
        {children}<br />
      </p>
    </BackSide>
  </React.Fragment>);

const DefaultCardContents3 = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {/* <img
        src={Rick}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      /> */}
      <h1 className='icon-container'><FontAwesomeIcon icon={faQuoteRight} color='black' /> </h1>
      <h1>Acing An Interiew</h1>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#00838a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <p
        style={{
          fontSize:'1.3em',
          textAlign: 'justify',
          color: 'white',
          width: '100%',
        }}>
        {children}<br />
      </p>
    </BackSide>
  </React.Fragment>);

const DefaultCardContents4 = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {/* <img
        src={Rick}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      /> */}
      <h1 className='icon-container'><FontAwesomeIcon icon={faLinkedin} color='black' /> </h1>
      <h1>LinkedIn 101</h1>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#00838a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <p
        style={{
          fontSize:'1.3em',
          textAlign: 'justify',
          color: 'white',
          width: '100%',
        }}>
        {children}<br />
      </p>
    </BackSide>
  </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>
    {/* I flip {flipDirection}ly on hover */}
    Our free online classes that provide students a flexible way to learn new skills and study emerging topics. Learn from credible instructors at no cost to students with different background. 
    </DefaultCardContents>
  </Flippy>
);

const FlippyOnHover2 = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents2>
    {/* I flip {flipDirection}ly on hover */}
    Learn the strategy in writing a resume that almost guarantees you'll get the dream call up that you've always craved for.
    </DefaultCardContents2>
  </Flippy>
);

const FlippyOnHover3 = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents3>
    {/* I flip {flipDirection}ly on hover */}
    An interview is like going on a date, but a professional one of course. Here you will learn how to be the outstanding candidate that the recruiter could never forget.
    </DefaultCardContents3>
  </Flippy>
);

const FlippyOnHover4 = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents4>
    {/* I flip {flipDirection}ly on hover */}
    In this largely transparent world, recruiter often google to search for any information of the candidate. Which is why your profile must be professional.
    </DefaultCardContents4>
  </Flippy>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="app-container">
      <div className="App">
        
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
          <FlippyOnHover flipDirection="horizontal"/>
          <FlippyOnHover2 flipDirection="horizontal"/>
          <FlippyOnHover3 flipDirection="horizontal"/>
          <FlippyOnHover4 flipDirection="horizontal"/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
