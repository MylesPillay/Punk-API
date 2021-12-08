import React  from 'react';
import BeerCard from "../beerCard/beerCard";
import './beerGallery.scss';


const BeerGallery = (props) => {
    const { brewdogArr } = props;
    const brewdogCards = brewdogArr.map((beer, index) => {
        
    return (
       <div key={"beer" + index }className="beerGallery">
          <BeerCard
              image={beer.image_url}
              title={beer.name}
              tagLine={beer.tagline}
              date={beer.first_brewed}
              ph={beer.ph}
              abv={beer.abv}  />
        </div>
       )
    });

    return (
        <div className="beerGallery">{brewdogCards}</div>
    )};

export default BeerGallery;



/* gline} text={beers.description}
const BeerTile = (props) => {
  const { imgSRC, title, brief, text } = props
  const [showMore, setShowMore] = useState(false);

  const handleClick =() => {
      setShowMore(!showMore);
  };

  const beerCardJSX = (

      <div className="beer-card__content" onClick={handleClick}>
         <h3 className="beer-card__heading">{title}</h3>
         <p>{brief}</p>

      </div>
     );

   const beerCardTextJSX = (

    <div className="beer-card__content" onClick={handleClick}>
        <h3 className="beer-card__heading">{title}</h3>

        <p className="beer-card__text"> {text} </p>
    </div>
   );

    return (
        <div className="beer-card">
        <img className="beer-card__image" src={imgSRC} alt={props.title}/>
        {showMore ? beerCardTextJSX : beerCardJSX}
        </div>
  );
};

export default BeerTile;
*/
