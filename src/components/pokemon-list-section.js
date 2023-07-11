import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from "../contexts/theme-context";
import getPokemons from "../service/get-pokemons";
import PokemonListItems from "./pokemon-list-items";
import LoadMoreBtn from './load-more-btn';
import {ReactComponent as Loading} from '../assets/loading.svg';

function PokemonListSection() {

    const { theme } = useContext(ThemeContext);
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
        if (type === undefined) {
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
            <Section style={{color: theme.background, backgroundColor: theme.color, minHeight: window.innerHeight - 329}}>
                <Ul>
                    <PokemonListItems pokemons={list.pokemons} />
                </Ul>
                {loading ? <Loading style={{ fill: theme.background }}/> : ''}
                <LoadMoreBtn action={handleClick} />
            </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    text-align: center;
    min-height: window.innerHeight - 329
`
const Ul = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    text-align: center;
`

export default PokemonListSection 