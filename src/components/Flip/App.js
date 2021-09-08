import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from './../flipList';
import Rick from './rick.png';
import './App.css';

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
      <h1>Kita Jaga Kita</h1>
      <h1 
        style={{
          fontSize:'120px',
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          display: 'none'
        }}>
        {children}<br />
        (FRONT SIDE)
      </h1>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#00838a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      {/* ROCKS */}
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
    Using Anders Pink is a key component of our curation strategy at Scania. It’s creating a seamless experience for visitors to the portal together with our own legacy content. Anders Pink is crucial for us to offer the the latest and greatest content on key topics for our business.
    </DefaultCardContents>
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
      <div className="App">
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
          <FlippyOnHover flipDirection="horizontal"/>
          <FlippyOnHover flipDirection="horizontal"/>
          <FlippyOnHover flipDirection="horizontal"/>
          <FlippyOnHover flipDirection="horizontal"/>
        </div>
      </div>
    );
  }
}

export default App;
