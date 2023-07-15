async function getSinglePokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (response.status === 200) {
        return await response.json();
    } else {
        return null;
    }
}

export default getSinglePokemon