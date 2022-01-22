import React, { useState } from "react";
import "./BeerCard.scss";

const BeerCard = ({picture, name, tagLine, date, ph, abv, ibu, ebc, description, foodPairing}) => {
  const [expandInfo, setExpandInfo] = useState(false);


  const handleClick = () => {
    setExpandInfo(!expandInfo)
  }

  const beerCardJSX = (
    <>
    <div className="beerCard__container">
      <div className="beerCard__tile">
        <img className="beerCard__picture" src={picture} alt={name} />
        <h2 className="name">{name}</h2>
        <h3 className="beerCard__tagLine">{tagLine}</h3>
        <div className="beerCard__data">
          <p className="data__date">{date}</p>
          <p className="data">ABV: {abv}</p>
          <p className="data">pH: {ph}</p>
          <p className="data">{abv}%</p>
          <p className="data">{ibu}</p>
          <p className="data">{ebc}</p>
        </div>
        <h3 className="beerCard__subheading">Food pairings:</h3>

        <ul className="beerCard__food-info">
          {foodPairing.map((pair, index) => {
            return <li key={index}>{pair}</li>
          })}
        </ul>
      </div>
    </div>
  </>
  )
  const expandInfoJSX = (
    <div className="beerCard__extra">
        <h3 className="beerCard__description-title">Description:</h3>
        <p className="beerCard__description-text">{description}</p>
      </div>
    )
        
  return (
      <div className="beerCard" onClick={handleClick}>
         {expandInfo ? expandInfoJSX : beerCardJSX}
         {expandInfoJSX ? expandInfo: beerCardJSX}
         </div>
    );
  };
export default BeerCard;