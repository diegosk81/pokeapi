import React, { useEffect, useState } from "react";
import { getAllPokemons, getPokemonData } from "../../api/api";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100`;

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async (url) => {
    try {
      setLoading(true);
      const data = await getAllPokemons(url);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons(url);
  }, [url]);

  return (
    <div className="poke-list animate__animated animate__fadeInUp">
      {!loading ? (
        pokemons.map((poke) => <PokemonCard key={poke.id} {...poke} />)
      ) : (
        <div className="loading-list animate__animated animate__fadeIn">
          <p>Cargando....</p>
          <img
            src="https://media.tenor.com/images/5dc76a3eae7ed0f4449463c898890293/tenor.gif"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default PokemonList;
