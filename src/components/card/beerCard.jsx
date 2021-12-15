import React, {useState} from "react";
import "./beerCard.scss";

const BeerCard = (props) => {
  const {image, title, tagLine, date, ph, abv, ibu, ebc, description, foodPairing} = props;

  const [expandInfo, setExpandInfo] = useState(false);

  //flipcard utilising handleClick

  const handleClick=() => {
    setExpandInfo(!expandInfo)
  }

  const beerCardJSX = (

    <> 
      <img className="beerCard__image" src={image} alt="beer" />
      <h2 className="beerCard__title">{title}</h2>
      <h3 className="beerCard__tagLine">{tagLine}</h3>
      <p className="beerCard__date">{date}</p>
      <p className="beerCard__abv">ABV: {abv}</p>
      <p className="beerCard__ph">pH: {ph}</p>
      <p className="beerCard__info">{abv}%</p>
      <p className="beerCard__info">{ibu}</p>
      <p className="beerCard__info">{ebc}</p>
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

        <h3 className="beerCard__desc-title">Description:</h3>
        <p className="cbeerCard__desc-text">{description}</p>
      </div>
    );
    return (
      <div classNAme="beerCard" onClick={handleClick}>
         {expandInfo ? expandInfoJSX : beerCardJSX}
         </div>
    )
}

export default BeerCard;