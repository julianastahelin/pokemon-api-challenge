async function getAbility(ability) {
    if (ability.length > 0) {
    console.log('vou dar o fetch em:', ability)
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`)
    const abilityObject = await response.json()
    console.log('object retornado dentro do getAbility:', abilityObject)
    return abilityObject
    } else { 
        return
    }
}

export default getAbility