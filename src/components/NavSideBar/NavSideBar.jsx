import React from "react";
import "./NavSideBar.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterBox from "../FilterBox/FilterBox";

// props now to be {searchTerm, handleInput, handleChange}//

const NavSideBar = ({searchTerm, handleInput, filterFunction}) => {

  return (
    <div className="nav-bar__container">
        
      <nav>
          <h2 className="nav-bar__header">Peruse the Brews</h2>
          
          <SearchBox placeholder="Search by product name" 
           searchTerm={searchTerm}  handleInput={handleInput}/>

        <section className="nav-bar__filter-boxes">
          <FilterBox
            filterBox={filterFunction}
            filterLabel="High ABV  (> 6.0%)"
            name="abv"  />
          <FilterBox
            filterBox={filterFunction}
            filterLabel="Brewdog Classics"
            name="classic"  />
          <FilterBox
            filterBox={filterFunction}
            filterLabel="Acidity    (pH < 4)"
            name="ph"  />
        </section>
      </nav>
    </div>
  );
};
export default NavSideBar
