import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsArticles: [],
      newsSource: ''
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
