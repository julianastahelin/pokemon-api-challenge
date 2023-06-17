import SinglePokemon from "../components/single-pokemon";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { ThemeContext } from "../contexts/theme-context";
import { useContext } from "react";

function PokemonByName() {

    const { name } = useParams()
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <H2 style={{color: theme.background, backgroundColor: theme.color}}>Search for: '{name}'</H2>
            <SinglePokemon name={name} />
        </>
    )
}

const H2 = styled.h2`
    padding: 20px 23%;
    margin: auto;
`
export { PokemonByName }