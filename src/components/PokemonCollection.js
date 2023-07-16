import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList, searchTextBox}) {  
  // Render pokemonList
  const renderPokemon = pokemonList
    // Search filter
    .filter(pokemon => pokemon.name.toLowerCase().includes(searchTextBox))
    // Render cards
    .map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)

  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {renderPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
