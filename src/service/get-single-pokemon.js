async function getSinglePokemon(name) {
    const nameToFetch = name.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameToFetch}`);
    if (response.status === 200) {
        return await response.json();
    } else {
        return null;
    }
}

export default getSinglePokemon