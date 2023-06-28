import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { ThemeContext } from "../contexts/theme-context";
import SinglePokemon from "../components/single-pokemon";

function PokemonByName() {

    const { name } = useParams();
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{minHeight: window.innerHeight - 329}}>
            <H2 style={{color: theme.background, backgroundColor: theme.color}}>Search for: '{name}'</H2>
            <SinglePokemon name={name} />
        </div>
    )
}

const H2 = styled.h2`
    padding: 20px 23%;
    margin: auto;
    word-wrap: break-word;
`
export default PokemonByName 