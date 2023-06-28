import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from "../../contexts/theme-context";
import getPokemons from "../../service/get-pokemons";
import PokemonListItems from "../pokemon-list-items";
import LoadMoreBtn from '../load-more-btn';

function PokemonListSection() {

    const { theme } = useContext(ThemeContext);
    const [searchString, setSearchString] = useState('pokemon');
    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(false);
    const [list, setlist] = useState({
        pokemons: [],
        offset: 0
    });
    var { type } = useParams();

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            let newPokemons = await getPokemons(searchString, list.offset)
            setlist(
                list.pokemons.length > 0 ? { ...list, pokemons: [...list.pokemons, ...newPokemons] } : { ...list, pokemons: newPokemons }
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
        setlist(
            { pokemons: [], offset: 0 }
        )
        setClick(click ? false : true)
    }, [type])

    function handleClick() {
        setlist({
            ...list,
            offset: list.offset + 10
        })
    }

    return (
        <>
            <Section style={{ color: theme.background, backgroundColor: theme.color, minHeight: window.innerHeight - 329}}>
                <Ul>
                    <PokemonListItems pokemons={list.pokemons} />
                </Ul>
                {loading ?
                    <svg style={{ fill: theme.background }} width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="4" ry="4"><animate id="spinner_jbYs" begin="0;spinner_JZdr.end" attributeName="cy" calcMode="spline" dur="0.375s" values="5;20" keySplines=".33,0,.66,.33" fill="freeze" /><animate begin="spinner_jbYs.end" attributeName="rx" calcMode="spline" dur="0.05s" values="4;4.8;4" keySplines=".33,0,.66,.33;.33,.66,.66,1" /><animate begin="spinner_jbYs.end" attributeName="ry" calcMode="spline" dur="0.05s" values="4;3;4" keySplines=".33,0,.66,.33;.33,.66,.66,1" /><animate id="spinner_ADF4" begin="spinner_jbYs.end" attributeName="cy" calcMode="spline" dur="0.025s" values="20;20.5" keySplines=".33,0,.66,.33" /><animate id="spinner_JZdr" begin="spinner_ADF4.end" attributeName="cy" calcMode="spline" dur="0.4s" values="20.5;5" keySplines=".33,.66,.66,1" /></ellipse></svg>
                    : ''}
                <LoadMoreBtn action={handleClick} />
            </Section>
        </>
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