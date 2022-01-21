import React from "react";
import "./FilteredBox.scss";

const FilterBox = (props, index) => {
 const {filterLabel, filterBox, name} = props

  return (
    <>
      <div className="filterbox__container">
        <h5 className="filterbox__label"> {filterLabel}</h5>
        <input classNAme="filterBox__checkbox" type="checkbox" id={index} name={name} onChange={filterBox}/>
      </div>
    </>
  );
};

export default FilterBox;
