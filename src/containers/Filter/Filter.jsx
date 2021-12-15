import React from "react";
import "./FilteredItem.scss";

const FilteredBrewdogProducts= ({name, onChange, label, id}) => {


  return (

    <div className="filter-Brewdog-Products">

      <label htmlFor={name} className="filter-Brewdog-Products__label">{label}</label>
      <input type="checkbox" className="filter-Brewdog-Products__checkbox" name={name} onChange={onChange} id={id} />
   </div>
  )
  }

export default FilteredBrewdogProducts;