import React from "react";
import BeerGallery from "../../components/BeerGallery/BeerGallery";
import "./main.scss";

const Main = (props) => {
  const { beerArr } = props;
  return (
    <div className="main">
      <BeerGallery beerArr={ beerArr } />
    </div>
  );
};

export default Main;