import React from "react";
import "./SearchBox.scss";

const SearchBox = ({ placeholder, searchTerm, handleInput }) => {

return (
  <div className="searchbox__container">
    <input
      placeholder={placeholder}
      type="text" 
      value={searchTerm} 
      onInput={handleInput} 
      className="searchbox__container--input" 
    />
  </div>
  );
};

export default SearchBox;
