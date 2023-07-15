# Components Tree
App

  -> PokemonPage
    - pokemon state here
    - search state and state setter function here
    - .filter pokemon here
    - add pokemon POST function

    -> Container (not used)

      -> PokemonForm (pass in add pokemon helper function)
        - form data state here
        - onSubmit handler function here

      -> Search (pass in search state and state setter function)
        - onChange handler function here

      -> PokemonCollection (pass in pokemon state)
        - .map function

        -> PokemonCard (pass in each pokemon prop)
          - render pokemon

# Data Shape
{
  "pokemon": [
    {
      "id": 2,
      "name": "ivysaur",
      "hp": 60,
      "sprites": {
        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
      }
    },