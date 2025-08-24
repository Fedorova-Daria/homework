const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
  const ditto = JSON.parse(this.responseText);
  console.log(ditto);
  const url = ditto.abilities[0].ability.url;

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', function () {
    const ability = JSON.parse(this.responseText);
    console.log(ability.effect_entries[1].effect);
  });
});
