import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/theme-context';
import getSinglePokemon from '../service/get-single-pokemon';
import Abilities from './ability';

function SinglePokemon(props) {

    const { theme } = useContext(ThemeContext);
    const { name } = useParams();
    const [ loading, setLoading ] = useState(false);
    const [ pokemon, setPokemon ] = useState({
        name: '',
        moves: [{
            move: {
                name: ''
            }
        }],
        sprites: {
            other: {
                dream_world: {
                    front_default: ''
                }
            }
        },
        abilities: [{
            ability: {
                name: '',
                url: ''
            }
        }],
        types: [{
            type: {
                name: ''
            }
        }]
    });

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let newPokemon = await getSinglePokemon(name);
            newPokemon ? setPokemon(newPokemon) : setPokemon({
                name: 'Oops! Pokemón not found',
                moves: [],
                sprites: {
                    other: {
                        dream_world: {
                            front_default: ''
                        }
                    }
                },
                abilities: [],
                types: []
            })
            setLoading(false);
        }
        fetchData();
    }, [props.name])

    return (
        <Section style={{ color: theme.background, backgroundColor: theme.color, minHeight: window.innerHeight - 329 }}>
            <PokemonContainer style={{ color: theme.color, backgroundColor: theme.background }}>

                {loading ? 
                <svg style={{ fill: theme.color }} width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="4" ry="4"><animate id="spinner_jbYs" begin="0;spinner_JZdr.end" attributeName="cy" calcMode="spline" dur="0.375s" values="5;20" keySplines=".33,0,.66,.33" fill="freeze"/><animate begin="spinner_jbYs.end" attributeName="rx" calcMode="spline" dur="0.05s" values="4;4.8;4" keySplines=".33,0,.66,.33;.33,.66,.66,1"/><animate begin="spinner_jbYs.end" attributeName="ry" calcMode="spline" dur="0.05s" values="4;3;4" keySplines=".33,0,.66,.33;.33,.66,.66,1"/><animate id="spinner_ADF4" begin="spinner_jbYs.end" attributeName="cy" calcMode="spline" dur="0.025s" values="20;20.5" keySplines=".33,0,.66,.33"/><animate id="spinner_JZdr" begin="spinner_ADF4.end" attributeName="cy" calcMode="spline" dur="0.4s" values="20.5;5" keySplines=".33,.66,.66,1"/></ellipse></svg>
                : 
                <>
                    <H2>{pokemon.name}</H2>
                    {pokemon.name !== 'Oops! Pokémon not found' && pokemon.moves.length > 1 ?
                        <>
                            <Image src={pokemon.sprites.other.dream_world.front_default} />
                            <P>Moves</P>
                            <MovesList>
                                {pokemon.moves ? pokemon.moves.map((move, index) => {
                                    return (
                                        <MoveLi key={index}>{move.move.name}</MoveLi>
                                    )
                                }
                                ) : 'No moves'}
                            </MovesList>
                            <P>Abilities</P>
                            {pokemon.abilities ? <Abilities abilities={pokemon.abilities} /> : 'No abilities'}
                            <P>Type</P>
                            <TypesList>
                                {pokemon.types ? pokemon.types.map((type, index) => {
                                    return (
                                        <TypeLi style={{ color: theme.typeColor, background: theme.typeBackground }} key={index}>{type.type.name}</TypeLi>
                                    )
                                }) : 'No tipes'}
                            </TypesList>
                        </>
                        : ''}
                    </> }
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