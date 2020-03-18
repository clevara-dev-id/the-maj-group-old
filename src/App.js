import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Occasions from './views/Occasions';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/occasions">
            <Occasions />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
