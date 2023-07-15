import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const pokemonList = pokemon.map( onePokemon => {
    return (
      <PokemonCard key={onePokemon.id} {...onePokemon} />
    )
  })
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
