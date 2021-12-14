import './App.scss';
import NavSideBar from "./components/nav"
import beers from './data/beers';
import BeerTile from "./components/card/beerCard"

const App = () => { 
  return ( 
     <div className="App">
       <NavSideBar/>
      <header className="App-header"> Punks For API's
      </header>
     <main>
       <>
       <div className="banner">
          <h2> Our most popular brews </h2>
        </div>
        </>
        <div  className="brewdogCards">
          
           <BeerTile brewdogArr={beers}/>
        </div>
     </main>
    
    
    </div>
  );
}

export default App;