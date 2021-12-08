import React from "react";
import "./Card.scss";

const BeerCard = (props) => {
  const {image, title, tagLine, date, ph, abv} = props;

  return (
    <div className="beerCard">
      <img className="beerCard__image" src={image} alt={title} />
      <h2 className="beerCard__title">{title}</h2>
      <h3 className="beerCard__tagLine">{tagLine}</h3>
      <h4 className="beerCard__date">{date}</h4>
      <h5 className="beerCard__abv">ABV: {abv}</h5>
      <h6 className="beerCard__ph">pH: {ph}</h6>
    </div>
  );
};

export default BeerCard;