import React from "react";
import FilteredBrewdogProducts from "../Filter/Filter";

const Filter = ({onChange}) => {

  return (
    <>
      <div>
        <FilteredBrewdogProducts name="alcohol" label="ABV > 6%: " onChange={onChange} id="alcohol" />
        <FilteredBrewdogProducts name="classic" label="Brewed before 2010: " onChange={onChange} id="classic" />
        <FilteredBrewdogProducts name="phLevel" label="pH < 4: " onChange={onChange} id="phLevel" />
      </div>
    </>
  )
}

export default Filter;
