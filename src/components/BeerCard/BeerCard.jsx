import React, { useState } from "react";
import "./BeerCard.scss";

const BeerCard = ({picture, name, tagLine, date, ph, abv, ibu, ebc, description}) => {
  const [expandInfo, setExpandInfo] = useState(false);


  const handleClick = () => {
    setExpandInfo(!expandInfo)
  }

  const beerCardJSX = (
    <>
    <div className="beerCard__container">
      <div className="beerCard__tile">
        <div className="beerCard__tile--picture">
          <img className="beerCard__picture" src={picture} alt={name} />
        </div>
        <div className="beerCard__tile--information">
          <h2 className="beerCard__tile--information name">{name}</h2>
          <h3 className="beerCard__tile--information-tagLine">{tagLine}</h3>
          <div className="beerCard__data">
            <h4 className="data__date">Date:  {date}</h4>
            <h4 className="data">ABV:  {abv}%</h4>
            <h4 className="data">pH:  {ph}</h4>
            <h4 className="data">IBU (bitterness):  {ibu}</h4>
            <h4 className="data">EBC (colour):  {ebc}</h4>
          </div>
          </div>
      </div>
    </div>
  </>
  )
  const expandInfoJSX = (
    <div className="beerCard__extra">
        <h3 className="beerCard__description-title">Description:</h3>
        <h5 className="beerCard__description-text">{description}</h5>
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