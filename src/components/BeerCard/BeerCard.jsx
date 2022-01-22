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
        <h2 className="beerCard__name">{name}</h2>
        <h3 className="beerCard__tagLine">{tagLine}</h3>
        <div className="beerCard__data">
          <h4 className="data__date">Date:{date}</h4>
          <h4 className="data">ABV: {abv}%</h4>
          <h4 className="data">pH: {ph}</h4>
          <h4 className="data">IBU (bitterness): {ibu}</h4>
          <h4 className="data">EBC (colour):{ebc}</h4>
        </div>
        <h3>Click for description</h3>
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