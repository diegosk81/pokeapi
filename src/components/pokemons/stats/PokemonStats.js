import React from 'react';

const PokemonStats = ({stat}) => {

 // console.log(stat.stat.name);
 // console.log(stat.base_stat);

 return (
  <div className="container-stat">
   <p className="screen-stat-name">{stat.stat.name}</p>
   <p>{stat.base_stat}</p>
  </div>
 )
}

export default PokemonStats
