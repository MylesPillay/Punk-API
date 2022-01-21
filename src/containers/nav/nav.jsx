import React from "react";
import "./nav.scss";
import Search from "../../components/search/search";
import FilterBox from "../FilterBox/FilterBox";

// props now to be {searchTerm, handleInput, handleChange}//

const NavSideBar = ({searchTerm, handleInput, filterFunction}) => {

  return (
    <div classNAme="nav-bar__container">
        
      <nav>
          <h2 className="navbar__heading">Peruse the Brews</h2>
          
          <Search placeholder="Search by product name" 
           searchTerm={searchTerm}  handleInput={handleInput}/>

        <section className="nav-bar__filter-boxes">
          <FilterBox
            filterBox={filterFunction}
            filterLabel="high ABV (>6.0%)"
            name="abv"  />
          <FilterBox
            filterBox={filterFunction}
            filterLabel="classic range"
            name="classic"  />
          <FilterBox
            filterBox={filterFunction}
            filterLabel="acidic (pH<4)"
            name="ph"  />
        </section>
      </nav>
    </div>
  );
};
export default NavSideBar
