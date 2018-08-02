import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsArticles: [],
      newsSources: []
    }
  }

  componentDidMount () {
    const getArticles = axios.create({
      baseURL: `https://newsapi.org/v2/top-headlines?country=us`,
      headers: { 'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY }
    });
    const getSources = axios.create({
      baseURL: `https://newsapi.org/v2/sources`,
      headers: { 'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY }
    });
    getArticles.get()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
    getSources.get()
      .then(res => {
        this.setState({
          newsSources: res.data.sources
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log(this.state);
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
