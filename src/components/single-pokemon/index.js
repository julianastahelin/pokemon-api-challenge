import { useState, useEffect, useContext } from 'react'
import getSinglePokemon from '../../service/get-single-pokemon'
import { useParams } from 'react-router-dom'
import Abilities from '../ability'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/theme-context'

function SinglePokemon(props) {

    const { theme } = useContext(ThemeContext)
    const [pokemon, setPokemon] = useState({
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
    })

    const { name } = useParams()

    useEffect(() => {
        async function fetchData() {
            let newPokemon = await getSinglePokemon(name)
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

        }
        fetchData()
    }, [props.name])

    return (
        <Section style={{ color: theme.background, backgroundColor: theme.color }}>
            <PokemonContainer style={{ color: theme.color, backgroundColor: theme.background }}>
                <H2>{pokemon.name}</H2>
                {pokemon.name !== 'Oops! Pokemón not found' && pokemon.moves.length > 1 ?
                    <>
                        <Image src={pokemon.sprites.other.dream_world.front_default} />
                        <P>Moves</P>
                        <MovesList>
                            {pokemon.moves ? pokemon.moves.map((move, index) => {
                                return (
                                    <Li key={index}>{move.move.name}</Li>
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
                                    <li key={index}>{type.type.name}</li>
                                )
                            }) : 'No tipes'}
                        </TypesList>
                    </>
                    : ''}
            </PokemonContainer>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`
const PokemonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    width: 720px;
    max-width: 80%;
    margin-bottom: 30px;
    border-radius: 10px;
`
const H2 = styled.h2`
    font-size: 30px;
    padding-bottom: 20px;
    text-transform: capitalize;
    max-width: 90%;
    overflow-wrap: break-word;
`
const Image = styled.img`
    width: 200px;
    max-width: 90%;
`
const P = styled.p`
    font-size: 24px;
    padding-top: 30px;
    padding-bottom: 10px;
    text-transform: capitalize;
`
const MovesList = styled.ul`
    columns: 3;
    column-width: 180px;
    list-style-type: square;
    text-transform: capitalize;
`

const TypesList = styled.ul`
    text-align: left;
    display: flex;
    gap: 10px;
    text-transform: capitalize;
    flex-wrap: wrap;
`

const Li = styled.li`
    border-left: 0.5px dashed;
    padding-left: 20px;
    font-weight: 300;
`

export default SinglePokemon