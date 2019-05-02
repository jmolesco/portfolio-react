import React, { Component } from 'react';
import './App.css';
import './css/validation.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Tester from './components/Tester/Tester';

class App extends Component {
  render() {
    return (
      <Router>
        <div> 
            <Header></Header>       
            <Route exact={true} path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/tester" component={Tester}/>
        </div>
      </Router>
    );
  }
}

export default App;
