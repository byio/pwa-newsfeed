import React from 'react';
import { Link } from 'react-router-dom';

const Page = ({ title }) => (
  <div className="App">
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
);

export default Page;
