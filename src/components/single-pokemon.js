import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/theme-context';
import getSinglePokemon from '../service/get-single-pokemon';
import Abilities from './ability';
import { ReactComponent as Loading } from '../assets/loading.svg';

function SinglePokemon() {

    const { theme } = useContext(ThemeContext);
    const { name } = useParams();
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: '',
        moves: [ {move: {name: ''}} ],
        sprites: {other: {dream_world: {front_default: ''}}},
        abilities: [ {ability: {name: '', url: ''}} ],
        types: [ {type: {name: ''}} ]
    });

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let newPokemon = await getSinglePokemon(name);
            setPokemon(newPokemon);
            setLoading(false);
        }
        fetchData();
    }, [name])

    return (
        <Section style={{ color: theme.background, backgroundColor: theme.color, minHeight: window.innerHeight - 329 }}>
            <PokemonContainer style={{ color: theme.color, backgroundColor: theme.background }}>
                {loading ? <Loading style={{ fill: theme.color }} /> : 
                    pokemon.name ?
                        <>
                            <H2>{pokemon.name}</H2>
                            <Image src={pokemon.sprites.other.dream_world.front_default} />
                            <P>Moves</P>
                            <MovesList>
                            {pokemon.moves ? pokemon.moves.map((move, index) => <MoveLi key={index}>{move.move.name}</MoveLi>) : 'No moves'}
                            </MovesList>
                            <P>Abilities</P>
                            {pokemon.abilities ? <Abilities abilities={pokemon.abilities} /> : 'No abilities'}
                            <P>Type</P>
                            <TypesList>
                            {pokemon.types ? pokemon.types.map((type, index) => <TypeLi style={{ color: theme.typeColor, background: theme.typeBackground }} key={index}>{type.type.name}</TypeLi>) : 'No types'}
                            </TypesList>
                        </>
                    : <Error>{pokemon.message}</Error>
                }
            </PokemonContainer>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`
const PokemonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    width: 720px;
    max-width: 80%;
    margin-bottom: 30px;
    border-radius: 10px;
    @media(max-width: 500px) {
        max-width: 95%;
    }
`
const H2 = styled.h2`
    font-size: 30px;
    text-transform: capitalize;
    max-width: 90%;
    word-wrap: break-word;
    @media(max-width: 360px) {
        font-size: 27px;
    }
`
const Image = styled.img`
    padding-top: 20px;
    width: 200px;
    max-width: 90%;
    @media(max-width: 360px) {
        width: 180px;
    }
`
const P = styled.p`
    font-size: 24px;
    padding-top: 30px;
    padding-bottom: 10px;
    text-transform: capitalize;
    @media(max-width: 360px) {
        font-size: 22px;
    }
`
const Error = styled(P)`
    padding-top: 10px;
`
const MovesList = styled.ul`
    columns: 3;
    column-width: 180px;
    text-transform: capitalize;
    @media (max-width:840px) {
        columns: 2;
        column-width: 190px;
    }
    @media (max-width:620px) {
        columns: 1;
        column-width: 190px;
    }
`
const MoveLi = styled.li`
    border-left: 0.5px dashed;
    padding-left: 20px;
    font-weight: 300;
`
const TypesList = styled.ul`
    text-align: left;
    display: flex;
    gap: 10px;
    text-transform: capitalize;
    flex-wrap: wrap;
`
const TypeLi = styled.li`
    padding: 10px;
    min-width: 50px;
    border-radius: 10px;
`

export default SinglePokemon