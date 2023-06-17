async function getSinglePokemon(nome) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    console.log('response:', response)
    if (response.status === 200) {
        return await response.json()
    }
}

export default getSinglePokemon