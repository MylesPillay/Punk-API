import React from "react";
import "./FilterBox.scss";

const FilterBox = (props, index) => {
 const {filterLabel, filterBox, name} = props

  return (
    <>
      <div className="filterbox__container">
        <input classNAme="filterBox__checkbox" type="checkbox" id={index} name={name} onChange={filterBox}/>
        <h5 className="filterbox__label"> {filterLabel}</h5>
      </div>
    </>
  );
};

export default FilterBox;
