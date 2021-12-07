import React  from 'react';
import './beer-tile.scss';


const BeerTile = (props) => {
    const {title, brewdogArr} = props;
    const brewdogCards = brewdogArr.map((beers, index) => {
        return (
          <section key={title + index} className="beerTile">
              <h4 className="beerTile__title"> {beers.name}</h4>
              <img className="beerTile__image" src={beers.image_url} alt={props.title}/>
              <h4 className="beerTile__tagline">{beers.tagline}</h4>
          </section>
        )
      })
    return (

        <div className="container">
            {brewdogCards}
        </div>
      )
    };
export default BeerTile;

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
