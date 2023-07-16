import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onPokemonSubmit}) {
  // Initial Form Data
  const initialForm = {
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    }
  }
  // React State(s)
  const [formData, setFormData] = useState(initialForm)
  // const [pokeName, setPokeName] = useState('');
  // const [pokeHp, setPokeHp] = useState('');
  // const [pokeFront, setPokeFront] = useState('');
  // const [pokeBack, setPokeBack] = useState('');

  // Destructured formData
  const {name, hp, sprites} = formData;

  // Event Handler: Make form a controlled input
  function handleFormChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleFrontChange(e) {
    setFormData({...formData, sprites: {
      [e.target.name]: e.target.value,
      back: sprites.back
    }})
  }

  function handleBackChange(e) {
    setFormData({...formData, sprites: {
      front: sprites.front,
      [e.target.name]: e.target.value
    }})
  }

  // Event Handler: Pokemon submitted => backend
  function handleFormSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
      /* body: JSON.stringify({
        name: pokeName,
        hp: pokeHp,
        sprites: {
          front: pokeFront,
          back: pokeBack
        }
      }) */
    })
    .then(res => res.json())
    .then(data => onPokemonSubmit(data))

    setFormData(initialForm);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name"
            placeholder="name"
            name="name"
            value={name}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid label="hp"
            placeholder="hp"
            type='number'
            step='1'
            name="hp"
            value={hp}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid label="Front Image URL"
            placeholder="front url"
            name="front"
            value={sprites.front}
            onChange={handleFrontChange}
          />
          <Form.Input
            fluid label="Back Image URL"
            placeholder="back url"
            name="back"
            value={sprites.back}
            onChange={handleBackChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
