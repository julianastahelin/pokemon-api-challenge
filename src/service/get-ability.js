async function getAbilities(pokemonAbilities) {
    const urlsFetched = pokemonAbilities.map(async(item) => {
        const ability = await fetch(item.ability.url);
        return await ability.json();
    }) 
    return await Promise.all(urlsFetched)
}

export default getAbilities