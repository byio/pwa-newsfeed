import React, { Component } from 'react';
import axios from 'axios';

import Page from '../layouts/Page';
import Dropdown from '../components/Dropdown/Dropdown';
import CardList from '../components/CardList/CardList';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newsArticles: [],
      selectedSource: ''
    }
  }

  componentDidMount() {
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
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return(
      <div>
        <Page title="Home" />
        <Dropdown />
        <CardList />
      </div>
    );
  }
}

export default Home;
