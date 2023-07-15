import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getPokemons from "../service/get-pokemons";
import PokemonListSection from "../components/pokemon-list-section";

function Pokemons() {

    const [searchString, setSearchString] = useState('pokemon');
    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(false);
    const [list, setlist] = useState({ pokemons: [], offset: 0 });
    var { type } = useParams();

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            let newPokemons = await getPokemons(searchString, list.offset)
            setlist(
                list.pokemons.length ? {...list, pokemons: [...list.pokemons, ...newPokemons]} : {...list, pokemons: newPokemons}
            )
            setLoading(false)
        }
        fetchData()
    }, [list.offset, click])

    useEffect(() => {
        if (type === undefined || type === 'all types') {
            type = 'pokemon'
        }
        setSearchString(type)
        setlist({ pokemons: [], offset: 0 })
        setClick(click ? false : true)
    }, [type])

    function handleClick() {
        setlist({ ...list, offset: list.offset + 10})
    }

    return (
        <PokemonListSection loading={loading} list={list} handleClick={handleClick} />
    )
}

export default Pokemons