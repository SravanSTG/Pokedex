import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import Loading from "./components/Loading";
import axios from "axios";
import "./App.css";
import Notfound from "./components/Notfound";

const App = () => {
  const [pokemonArr, setPokemonArr] = useState([]);
  const [pokemonDetailsArr, setPokemonDetailsArr] = useState([]);
  const [limit, setLimit] = useState(1);
  const [initialRender, setInitialRender] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const [pokemon, setPokemon] = useState("");
  const [pokemonExists, setPokemonExists] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState({
    id: "",
    name: "",
    height: "",
    weight: "",
    type: "",
    baseExperience: "",
    abilities: [],
    image: "",
    hp: "",
    attack: "",
    defense: "",
    specialAttack: "",
    specialDefense: "",
    speed: "",
    moves: [],
    habitat: "",
    description: "",
  });

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit * 20}`;

  const fetchAllPokemon = () => {
    setPokemonArr([]);
    setPokemonDetailsArr([]);
    setLimit((currentLimit) => currentLimit + 1);

    axios.get(url).then((response) => {
      setPokemonArr(response.data.results);

      function renderPokemonCards(pokemonArr) {
        pokemonArr.forEach((pokemon) => {
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((res) => {
              const pokeData = res.data;

              setPokemonDetailsArr((currentList) => {
                currentList = [...currentList, pokeData];
                currentList.sort((a, b) => (a.id > b.id ? 1 : -1));
                return currentList;
              });
            });
        });

        if (pokemonArr.length > 0) setShowAll(true);
        console.log(pokemonArr);
        console.log(pokemonDetailsArr);
      }

      renderPokemonCards(pokemonArr);
    });
  };

  const searchPokemon = () => {
    function capitalizeFirstLetter(str) {
      return str[0].toUpperCase() + str.slice(1);
    }

    function pickDescription(descriptionArr) {
      let desc = "";

      for (let i = 0; i < descriptionArr.length; i++) {
        if (descriptionArr[i].language.name === "en") {
          desc = descriptionArr[i].flavor_text;
          break;
        }
      }

      return desc;
    }

    axios
      .all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`),
      ])
      .then(
        axios.spread((response1, response2) => {
          console.log(response1.data);
          console.log(response2.data);

          if (pokemon && pokemon !== undefined && pokemon !== "")
            setPokemonExists(true);

          setPokemonInfo({
            id: response1.data.id,
            name: capitalizeFirstLetter(response1.data.name),
            height: response1.data.height / 10,
            weight: response1.data.weight / 10,
            type: response1.data.types.map(
              (type) => capitalizeFirstLetter(type.type.name) + " "
            ),
            baseExperience: response1.data.base_experience,
            abilities: response1.data.abilities.map(
              (ability) => capitalizeFirstLetter(ability.ability.name) + ", "
            ),
            image:
              response1.data.sprites.other["official-artwork"].front_default,
            hp: response1.data.stats[0].base_stat,
            attack: response1.data.stats[1].base_stat,
            defense: response1.data.stats[2].base_stat,
            specialAttack: response1.data.stats[3].base_stat,
            specialDefense: response1.data.stats[4].base_stat,
            speed: response1.data.stats[5].base_stat,
            moves: response1.data.moves.map(
              (move) => capitalizeFirstLetter(move.move.name) + " "
            ),
            description: pickDescription(response2.data.flavor_text_entries),
            habitat:
              response2.data.habitat !== null
                ? response2.data.habitat.name
                : "None",
          });
        })
      )
      .catch((error) => {
        console.log(error);
        setPokemonExists(false);
      });
  };

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    fetchAllPokemon();
    // if (initialRender) setInitialRender(false);
    // if (!initialRender) fetchAllPokemon();
  }, []);

  return (
    <div className="container">
      <Home
        showAllClick={fetchAllPokemon}
        pokemon={pokemon}
        setPokemon={setPokemon}
        searchPokemon={searchPokemon}
      />
      <Routes>
        <Route
          path="/"
          element={
            showAll ? (
              <Pokedex
                pokemonArr={pokemonArr}
                pokemonDetailsArr={pokemonDetailsArr}
                onClick={fetchAllPokemon}
                handleScroll={handleScroll}
              />
            ) : (
              <Loading />
            )
          }
        />
        <Route
          path="/pokemon/"
          element={
            pokemonExists ? (
              <Pokemon pokemon={pokemon} pokemonInfo={pokemonInfo} />
            ) : (
              <Notfound />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
