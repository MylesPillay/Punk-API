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
      <img className="beerCard__picture" src={picture} alt={name} />
      <h2 className="name">{name}</h2>
      <h3 className="beerCard__tagLine">{tagLine}</h3>
      <div className="beerCard__data"></div>
        <p className="beerCard__date">{date}</p>
        <p className="beerCard__abv">ABV: {abv}</p>
        <p className="beerCard__ph">pH: {ph}</p>
        <p className="beerCard__info">{abv}%</p>
        <p className="beerCard__info">{ibu}</p>
        <p className="beerCard__info">{ebc}</p>
    </div>

    </>
  );

  //flipcard to expand extra info
    
  const expandInfoJSX = (
    <div className="beerCard__extra">
      <h3 className="beerCard__subheading">Food pairings:</h3>

        <ul className="beerCard__food-info">
          {foodPairing.map((pair, index) => {
            return <li key={index}>{pair}</li>
          })}
        </ul>

        <h3 className="beerCard__description-title">Description:</h3>
        <p className="cbeerCard__description-text">{description}</p>
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