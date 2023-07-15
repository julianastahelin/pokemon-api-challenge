import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from "../contexts/theme-context";
import PokemonListItems from "./pokemon-list-items";
import LoadMoreBtn from './load-more-btn';
import {ReactComponent as Loading} from '../assets/loading.svg';

function PokemonListSection({ loading, list, handleClick }) {

    const { theme } = useContext(ThemeContext);

    return (
        <Section style={{color: theme.background, backgroundColor: theme.color, minHeight: window.innerHeight - 329}}>
            <Ul>
                <PokemonListItems pokemons={list.pokemons} />
            </Ul>
            {loading ? <Loading style={{ fill: theme.background }}/> : ''}
            <LoadMoreBtn loadMore={handleClick} />
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