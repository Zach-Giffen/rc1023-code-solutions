async function pokeData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/6');
    if (!response.ok) {
      throw new Error('Network respone was not OK');
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.error('There is an error with the fetch');
  }
}
