import { useState, useEffect } from 'react'
import getSinglePokemon from '../../service/get-single-pokemon'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Ability from '../ability'
import styled from 'styled-components'

function SinglePokemon() {
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
            setPokemon(newPokemon)
            console.log('newPokemon:', newPokemon)
        }
        fetchData()
    }, [])

    return (
        <Section className='single-pokemon'>
            <PokemonContainer className='pokemon-container'>
                <H2>{pokemon.name}</H2>
                <Image src={pokemon.sprites.other.dream_world.front_default} />
                <P>Moves:</P>
                <MovesList className='moves'>
                    {pokemon.moves.map((move, index) => {
                        return (
                            <li key={index}>{move.move.name}</li>
                        )
                    }
                    )}
                </MovesList>
                <P>Abilities:</P>
                <AbilitiesList>
                    {pokemon.abilities ? pokemon.abilities.map((ability, index) => {
                        return (
                            <li key={index}>
                                {/* <Ability ability={"torrent"}/> */}
                                {console.log('SENDING ABILITY:', ability.ability.name)}
                                <Ability ability={ability.ability.name}/>
                            </li>
                        )
                    }) : 'No abilities'}
                </AbilitiesList>
                <P>Type:</P>
                <TypesList>
                    {pokemon.types.map((type, index) => {
                        return (
                            <li key={index}>{type.type.name}</li>
                        )
                    })}
                </TypesList>
            </PokemonContainer>
            <Link to='/' className='button'>Home</Link>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
`
const PokemonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    background-color: cadetblue;
    width: 60%;
    margin-bottom: 30px;
    border-radius: 10px;
`
const H2 = styled.h2`
    font-size: 30px;
    padding-bottom: 10px;
    text-transform: capitalize;
`
const Image = styled.img`
    width: 200px;
`
const P = styled.p`
    font-size: 20px;
    padding-bottom: 10px;
    text-transform: capitalize;
`
const MovesList = styled.ul`
    columns: 3;
    column-width: 180px;
    list-style-type: square;
`
const AbilitiesList = styled.ul`
    max-width: 80%;
    text-align: left;
    list-style-type: square;
`
const TypesList = styled.ul`
    text-align: left;
    list-style-type:square;
`

export default SinglePokemon