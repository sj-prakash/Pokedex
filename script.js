const pokemonContainer = document.getElementById('pokemonContainer');

axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => {
    const pokemonList = response.data.results;
    pokemonList.forEach(pokemon => {
      axios.get(pokemon.url)
        .then(response => {
          const pokemonData = response.data;
          const pokemonCard = createPokemonCard(pokemonData);
          pokemonContainer.appendChild(pokemonCard);
        })
        .catch(error => console.log(error));
    });
  })
  .catch(error => console.log(error));

function createPokemonCard(pokemon) {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemonCard');

  const pokemonName = document.createElement('div');
  pokemonName.classList.add('pokemonName');
  pokemonName.textContent = pokemon.name;

  const pokemonImage = document.createElement('img');
  pokemonImage.src = pokemon.sprites.front_default;
  pokemonImage.alt = pokemon.name;

  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonImage);

  return pokemonCard;
}


