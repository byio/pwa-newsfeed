import React from 'react';

import Card from '../Card/Card';

const CardList = ({ news }) => {

  const renderEmpty = () => (
    <p>No news articles found.</p>
  );

  const renderCard = () => {
    return news.map(article => {
      return (
        <Card />
      );
    });
  }

  return (
    <div className="cardList">
      {news === undefined ? renderEmpty() : renderCard()}
    </div>
  );

};

export default CardList;
