const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

function getJSON(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`);
    }
    return response.json();
  });
}

getJSON(POKEMON_API_URL)
  .then((pokemonData) => {
    console.log('Данные о покемоне:', pokemonData);

    const abilityUrl = pokemonData.abilities[0].ability.url;

    return getJSON(abilityUrl);
  })
  .then((abilityData) => {
    console.log('Данные об умении:', abilityData);

    const effectEntry = abilityData.effect_entries.find(
      (entry) => entry.language.name === 'en'
    );

    if (effectEntry) {
      console.log('Описание эффекта:', effectEntry.effect);
    } else {
      throw new Error('Описание эффекта на английском языке не найдено.');
    }
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error.message);
  });
