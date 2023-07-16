import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  // Destructured pokemon data
  const {name, hp, sprites} = pokemon;

  // React state(s)
  const [toggleSprite, setToggleSprite] = useState(true);

  // Event Handler: Card click
  function handleCardClick() {
    setToggleSprite(!toggleSprite);
  }

  // Event Handler: Delete click => does nothing
  function handleDeleteClick() {
    console.log('handleDeleteClick');
  }

  return (
    <Card onClick={handleCardClick}>
      <div>
        <div className="image">
          <img src={(toggleSprite ? sprites.front : sprites.back)} alt={name}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
        <br/>
        <div className='extra content'>
          <button className='ui button red' onClick={handleDeleteClick}>Delete</button>
        </div>
        <br/>
      </div>
    </Card>
  );
}

export default PokemonCard;
