import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Community from './components/pages/Community';
import Solutions from './components/pages/Solutions';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Community' component={Community} />
          <Route path='/Solutions' component={Solutions} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
