import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, id, types,  sprites}) => {

  const  typeColors  =  {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
  } ;

  const color = typeColors[types[0].type.name];

  const handleClick = ()=>{

    <Link className="card-btn" to={`/pokemon/${id}`}>
        
    </Link>

  }

  

  return (
    <Link className="card-btn" to={`/pokemon/${id}`}>
    <div className="card" style={{backgroundColor:color}} onClick={handleClick}>
      <div className="card-img">
      <img
        src={`${sprites.other.dream_world.front_default}`}
        className="img"
        alt={name}
      />
      </div>
      <div className="card-body">
        <p className="card-id">
        {`#${id}`}
        </p>
        <p className="card-name">
          {name}
        </p>
        {/* <Link className="card-btn" to={`/pokemon/${id}`}>
          more...
        </Link> */}
      </div>
    </div>
    </Link>
  );
};

export default PokemonCard;
