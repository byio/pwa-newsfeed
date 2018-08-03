import React, { Component } from 'react';

import Page from '../layouts/Page';
import Dropdown from '../components/Dropdown/Dropdown';
import CardList from '../components/CardList/CardList';

class Home extends Component {
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
