import React from "react";

const PokedexCard = (props) => {
  const style = `pokedex-card ${props.type[0].toLowerCase()}`;

  return (
    <div className={style}>
      <h1 className="id">#{props.id}</h1>
      <img className="thumbnail" src={props.thumbnail} alt="" />
      <p className="type">{props.type}</p>
      <p className="name">{props.name}</p>
    </div>
  );
};

export default PokedexCard;
