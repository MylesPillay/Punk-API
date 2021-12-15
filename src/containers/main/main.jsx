import React from "react";
import BeerGallery from "../../components/beerGallery/beerGallery";
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