import React  from 'react';
import BeerCard from "../card/beerCard";
import './beerGallery.scss';

const BeerGallery = (props) => {
   const {beerArr} = props;

    const beerCardJSX = beerArr.map((beer) => {
        
    return (<BeerCard 
              key={beer.id}
              image={beer.image_url}
              title={beer.name}
              tagLine={beer.tagline}
              date={beer.first_brewed}
              ph={beer.ph}
              abv={beer.abv}  
              ibu={beer.ibu} 
              ebc={beer.ebc}
              description={beer.description} 
              foodPairing={beer.food_pairing}/> )});

    return (
        <div className="beerGallery">
            {beerArr.length > 0 ? beerCardJSX : <p className="beerGallery__heading"> please broaden your search criteria </p>}
        </div>
    )
}

export default BeerGallery;

