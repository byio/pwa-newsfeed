import React, { Component } from 'react';

import Page from '../layouts/Page';
import CardList from '../components/CardList/CardList';

class Home extends Component {
  render() {
    return(
      <div>
        <Page title="Home" />
        <CardList />
      </div>
    );
  }
}

export default Home;
