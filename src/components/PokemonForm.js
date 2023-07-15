import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {

  const initialForm = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  }

  const [formData, setFormData] = useState(initialForm)

  function handleFormInput(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log("handleFormSubmit");
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
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleFormInput}
          />
          <Form.Input
            fluid label="hp"
            placeholder="hp"
            name="hp"
            value={formData.hp}
            onChange={handleFormInput}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            // name="frontUrl"
            name="sprites"
            value={formData.sprites.front}
            onChange={handleFormInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            // name="sprites.back"
            value={formData.sprites.back}
            onChange={handleFormInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
