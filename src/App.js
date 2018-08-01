import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import CardList from './components/CardList/CardList';

const Page = ({ title }) => (
  <div className="App">
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
);

const Home = (props) => (
  <div>
    <Page title="Home" />
    <CardList />
  </div>
);

const About = (props) => (
  <div>
    <Page title="About" />
    <p>This is a newsfeed app built using <a href="https://reactjs.org">ReactJS</a> and the <a href="https://newsapi.org">NewsAPI</a> based on Progressive Web App (PWA) specifications.</p>
  </div>
);

class App extends Component {
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
