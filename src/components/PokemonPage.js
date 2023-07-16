import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  // React state(s)
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTextBox, setSearchTextBox] = useState('');

  // Fetch Pokemon data
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => {
      setPokemonList(data);
    })
  }, [])

  // Event Handler: New Pokemon Submit => frontend
  function onPokemonSubmit(pokemonData) {
    setPokemonList([...pokemonList, pokemonData])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPokemonSubmit={onPokemonSubmit} />
      <br />
      <Search searchTextBox={searchTextBox} setSearchTextBox={setSearchTextBox} />
      <br />
      <PokemonCollection pokemonList={pokemonList} searchTextBox={searchTextBox} />
    </Container>
  );
}

export default PokemonPage;
