
import React from "react";
import "../search/search.scss";

const Search = ({ placeholder, searchTerm, handleInput }) => {


return (
  <form className="search-box">

    <input
      type="text" placeholder={placeholder} value={searchTerm} onInput={handleInput} className="search-box__input" />

  </form>
)
}

export default Search;