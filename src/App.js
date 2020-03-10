import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './views/Home'


class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
