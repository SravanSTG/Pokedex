import React from "react";
import loadingPikachuImg from "../images/pikachu-loading.gif";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingPikachuImg} alt="pikachu-loading" />
      <h2>Pokédex</h2>
      <h3>Made with React</h3>
    </div>
  );
};

export default Loading;
