import React, {useState, useEffect } from "react";
import './App.scss';
import NavSideBar from "./containers/nav/nav";
import Main from "./containers/main/main";
import BrewDogLogo from "./assets/images/BrewDogLogo.jpeg";
const App = () => {

  const [beerArr, setBeerArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const[isHighAlc, setIsHighAlc] =useState(false);
  const [isClassic, setIsClassic] = useState(false);
  const [isHighH, setIsHighH] = useState(false);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?per_page=80`).then((response) => {
      return response.json();
         }).then((beerObject) => {
              setBeerArr(beerObject);
              }) 
            }, 
        []);

  const handleInput = (event) => {
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
  }

  const filteredBeerArr = beerArr.filter((beer) => {
  const beerNameTerm = beer.name.toLowerCase();
  const beerSearchTerm = beerNameTerm.includes(searchTerm);
  const hasHighAlc = isHighAlc && beer.abv
  const isClassicBeer = isClassic && beer.first_brewed;
  const hasHighPh = isHighH && beer.ph;
  const classicBeer = Number(beer.first_brewed.slice(3)) < 2010;
  const highAlc = beer.abv > 6;
  const highAcid = beer.ph < 4;

  if (hasHighAlc && !hasHighPh && !isClassicBeer) {
    return highAlc && beerSearchTerm;
  }
  else if (isClassic && !hasHighPh && !hasHighAlc) {
    return classicBeer && beerSearchTerm;
  }

  else if (hasHighAlc && !hasHighPh && !isClassic) {
    return highAcid && beerSearchTerm;
  }

  else if (hasHighAlc && !hasHighPh && isClassic) {
    return highAlc && classicBeer && beerSearchTerm;
  }

  else if (hasHighAlc && hasHighPh && !isClassic) {
    return highAcid && highAlc &&  beerSearchTerm;
  }

  else if (!hasHighAlc && hasHighPh && isClassic) {
    return classicBeer && highAcid && beerSearchTerm
  }

  else if (hasHighAlc && hasHighPh && isClassic) {
    return highAcid && highAlc && classicBeer && beerSearchTerm;
  }

const beerSearchArr = beerNameTerm.includes(searchTerm);
    return beerSearchArr;
  });

  const handleChange = (event) => {
if (event.target.id ==="abv") {
  setIsHighAlc(!isHighAlc);
} else if (event.target.id ==="classic") {
  setIsClassic(!isClassic);
} else if (event.target.id === "acidity") {
  setIsHighH(!isHighH);
  }
}
  

  return ( 
     <div className="App">
       <header className="header">
        <h1 className="header__title"> API For Punks </h1>
        <img src={BrewDogLogo} alt="dog-logo" className="header__logo"/>
      </header>
       
     <div className="mainContent">
       <NavSideBar 
          searchTerm={searchTerm} 
          handleInput={handleInput} 
          handleChange = {handleChange}/> 
       <Main beerArr={filteredBeerArr}/>
     </div>
    </div>
  );
}


export default App
