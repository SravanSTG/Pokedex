import React from "react";
import PokedexCard from "./PokedexCard";

const Pokedex = (props) => {
  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div className="pokedex-container">
      <div className="pokedex">
        {props.pokemonDetailsArr.map((card) => {
          return (
            <PokedexCard
              key={card.id}
              id={card.id}
              name={capitalizeFirstLetter(card.name)}
              thumbnail={card.sprites.other.dream_world.front_default}
              type={card.types.map(
                (type) => capitalizeFirstLetter(type.type.name) + " "
              )}
            />
          );
        })}
      </div>
      <button className="load-more-btn" onClick={props.onClick}>
        Load more ...
      </button>
      <div>
        <button className="down-arrow" onClick={props.handleScroll}>
          <i class="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default Pokedex;
