async function getPokemons(offset) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
    const lista = await response.json()
    const { results } = lista
    const nomes = results.map((item) => item.name)

   let pokemons = nomes.map(async (nome) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        const pokemon = await response.json()
        return pokemon
    })
    return Promise.all(pokemons)
}

export default getPokemons