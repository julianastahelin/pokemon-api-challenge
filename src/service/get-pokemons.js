async function getPokemons(list, offset) {
    if (list === 'pokemon') {
        const response = await fetch(`https://pokeapi.co/api/v2/${list}?limit=10&offset=${offset}`);
        const lista = await response.json();
        const { results } = lista;
        var names = results.map((item) => item.name);
    } else {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${list}/`)
        const lista = await response.json();
        const { pokemon } = lista;
        var names = pokemon.map((item) => item.pokemon.name).slice(0+offset, 10+offset);
    }
    
   let pokemons = names.map(async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = await response.json();
        return pokemon;
    })
    return Promise.all(pokemons);
}

export default getPokemons