async function getSinglePokemon(nome) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    const pokemon = await response.json()
    return pokemon
}

export default getSinglePokemon