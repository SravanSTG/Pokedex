import React from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
  const handleChange = (e) => {
    props.setPokemon(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search a pokemon"
        onChange={handleChange}
        value={props.pokemon}
      />
      <button className="search-btn" onClick={props.searchPokemon}>
        <Link to="/pokemon/">Search</Link>
      </button>
      <button className="show-all" onClick={props.showAllClick}>
        Show all Pokemon
      </button>
    </div>
  );
};

export default Search;
