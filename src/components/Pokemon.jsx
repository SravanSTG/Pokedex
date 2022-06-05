import React from "react";

const Pokemon = (props) => {
  const divStyle = props.pokemonInfo.type
    ? `pokemon-info-container_inner ${props.pokemonInfo.type[0].toLowerCase()}`
    : null;

  return (
    <div className="pokemon-info-container">
      <div className={divStyle}>
        <div className="image-container">
          <h1 className="id">#{props.pokemonInfo.id}</h1>
          <img
            src={props.pokemonInfo.image}
            alt="pokemon-img"
            className="pokemon-image"
          ></img>
        </div>
        <div className="detail-container">
          <h2 className="pokemon-name">{props.pokemonInfo.name}</h2>
          <h2 className="description-heading">Description</h2>
          <p className="description">{props.pokemonInfo.description}</p>
          <p className="height">Height: {props.pokemonInfo.height}m</p>
          <p className="weight">Weight: {props.pokemonInfo.weight}kg</p>
          <h2 className="type-heading">Type</h2>
          <p className="type">{props.pokemonInfo.type}</p>
          <p className="habitat">Habitat: {props.pokemonInfo.habitat}</p>
          <p className="base-exp">
            Base Experience: {props.pokemonInfo.baseExperience}
          </p>
          <p className="abilities">Abilities: {props.pokemonInfo.abilities}</p>
        </div>
        <div className="stats-container">
          <h2>Base Stats</h2>
          <div className="stats">
            <p>
              HP <span>{props.pokemonInfo.hp}</span>
            </p>
            <p>
              Attack <span>{props.pokemonInfo.attack}</span>
            </p>
            <p>
              Defense <span>{props.pokemonInfo.defense}</span>
            </p>
            <p>
              Special Attack <span>{props.pokemonInfo.specialAttack}</span>
            </p>
            <p>
              Speical Defense <span>{props.pokemonInfo.specialDefense}</span>
            </p>
            <p>
              Speed <span>{props.pokemonInfo.speed}</span>
            </p>
          </div>
        </div>
        <div className="moves-container">
          <h2>Moves</h2>
          <p>{props.pokemonInfo.moves}</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
