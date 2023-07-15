import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../contexts/theme-context";
import styled from 'styled-components';

const PokemonListItems = ({ pokemons }) => {
    
    const { theme } = useContext(ThemeContext);
    
    return (
        <>
            {pokemons.map((pokemon, index) => {
                return (
                    <PokemonContainer key={pokemon.name+index} style={{ color: theme.color, backgroundColor: theme.background }}>
                        <Link to={`/pokemon/${pokemon.name}`} style={{ color: theme.color, textTransform: "capitalize" }}>
                            <P>{pokemon.name}</P>
                            <Div>
                                <Image src={pokemon.sprites.other.dream_world.front_default} />
                            </Div>
                        </Link>
                    </PokemonContainer>
                )
            })
            }
        </>
    )
}

const PokemonContainer = styled.li`
    background-color: cadetblue;
    opacity: 0.9;
    padding: 20px;
    border-radius: 5px;
    &:hover {
        opacity: 0.8;
        transform: scale(1.02);
        transition: ease-in-out 0.2s
    }
`
const P = styled.p`
    font-size: 20px;
    padding-bottom: 10px;
`
const Div = styled.div`
    display: flex;
    height: 80%;
`
const Image = styled.img`
    width: 150px;
`

export default PokemonListItems