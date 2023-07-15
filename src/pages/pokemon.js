import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getAbilities from '../service/get-ability';
import getSinglePokemon from '../service/get-single-pokemon';
import SinglePokemon from "../components/single-pokemon";

function Pokemon() {

    const { name } = useParams();
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: '',
        moves: [ {move: {name: ''}} ],
        sprites: {other: {dream_world: {front_default: ''}}},
        abilities: [ {ability: {name: '', url: ''}} ],
        types: [ {type: {name: ''}} ]
    });
    const [abilities, setAbilities] = useState([{ effect_entries: [{ effect: '', language: { name: '' } }], name: '' }])

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let newPokemon = await getSinglePokemon(name);
            setPokemon(newPokemon);
            setLoading(false);
        }
        fetchData();
    }, [name])

    useEffect(() => {
        async function fetchAbilities() {
            if (pokemon.abilities) {
                const newAbilities = await getAbilities(pokemon.abilities);
                setAbilities(newAbilities);
            }
        }
        fetchAbilities();
    }, [pokemon])

    return (
        <SinglePokemon loading={loading} pokemon={pokemon} abilities={abilities} />
    )
}

export default Pokemon