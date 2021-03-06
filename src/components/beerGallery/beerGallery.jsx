import React  from 'react';
import BeerCard from "../BeerCard/BeerCard";
import './BeerGallery.scss';

const BeerGallery = ({BeerArr}) => {

    const BeerGallerys = BeerArr.map((beer, index) => {
        
    return (
        <BeerCard 
            key={index}
            picture={beer.image_url}
            name={beer.name}
            tagLine={beer.tagline}
            date={beer.first_brewed}
            ph={beer.ph}
            abv={beer.abv}  
            ibu={beer.ibu} 
            ebc={beer.ebc}
            description={beer.description} 
            foodPairing={beer.food_pairing}
            /> 
         );
     });

    return  (
        <div className="beerGallery">
            {BeerGallerys}
        </div>
          )
     };
    

export default BeerGallery;

