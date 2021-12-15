import React from "react";
import "./nav.scss";
import Search from "../../components/search/search";
import Filter from "../../containers/Filter/Filtered";

// props now to be {searchTerm, handleInput, handleChange}//

const NavSideBar = ({searchTerm, handleInput, handleChange}) => {

  return (
    <nav className="navbar">
        <h2 className="navbar__heading">Peruse the Brews</h2>
        
        <Search placeholder="Search by product name" name={"beer cards"}
        searchTerm={searchTerm}  handleInput={handleInput}  />

        <Filter onChange={handleChange}  />
        <h5 className="navbar__info"> click for further information</h5>
      
    </nav>
  )
}
export default NavSideBar
