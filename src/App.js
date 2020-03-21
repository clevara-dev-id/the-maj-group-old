import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ApplicationLayout from './views/ApplicationLayout';
import BaseRoute from './routes'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Router>
          <ApplicationLayout>
            <BaseRoute />
          </ApplicationLayout>
        </Router>
      </div>
    )
  }
}

export default App;
