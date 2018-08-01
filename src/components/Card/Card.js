import React from 'react';
import PropTypes from 'prop-types';

const Card = () => (
  <div>
    Card component
  </div>
);

Card.propTypes = {
  imgURL: PropTypes.string.isRequired
};

export default Card;
