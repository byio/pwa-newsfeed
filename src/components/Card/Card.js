import React from 'react';
import PropTypes from 'prop-types';

const Card = () => (
  <div className="card">
    <div className="newsImgSection">
      <img className="newsImage"/>
    </div>
    <div className="newsInfoSection">
      <h2 className="newsTitle"></h2>
      <p className="newsDescription"></p>
      <span className="newsSource"></span>
    </div>
  </div>
);

Card.propTypes = {
  imgURL: PropTypes.string.isRequired
};

export default Card;
