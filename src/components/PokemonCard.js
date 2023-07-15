import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
  const [cardFace, setCardFace] = useState(true)

  const flipCard = ( cardFace ? sprites.front : sprites.back )

  function cardClick(e) {
    setCardFace(cardFace => !cardFace)
  }

  return (
    <Card onClick={cardClick}>
      <div>
        <div className="image">
          <img src={flipCard} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
