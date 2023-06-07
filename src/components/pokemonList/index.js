import getPokemons from "../../service/get-pokemons"
import { useState, useEffect } from 'react'
import LoadMoreBtn from '../load-more-btn'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListOfPokemons = (props) => {
    return (
        <>
            {props.pokemons.map((pokemon) => {
                return (
                    <PokemonContainer key={pokemon.name}>
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <P>{pokemon.name}</P>
                            <Image src={pokemon.sprites.other.dream_world.front_default} />
                        </Link>
                    </PokemonContainer>
                )
            })
            }
        </>
    )
}

function PokemonList() {

    const [list, setlist] = useState({
        pokemons: [],
        offset: 0
    })

    useEffect(() => {
        async function fetchData() {
            let newPokemons = await getPokemons(list.offset)
            setlist(
                list.pokemons.length > 0 ? { ...list, pokemons: [...list.pokemons, ...newPokemons] } : { ...list, pokemons: newPokemons }
            )
        }

        fetchData()
    }, [list.offset])

    function handleClick() {
        setlist({
            ...list,
            offset: list.offset + 10
        })
    }

    return (
        <Section>
            <ListOfPokemons pokemons={list.pokemons} />
            <LoadMoreBtn action={handleClick} />
        </Section>
    )
}

const PokemonContainer = styled.div`
    background-color: cadetblue;
    opacity: 0.9;
    padding: 10px;
    border-radius: 5px;
`
const P = styled.p`
    font-size: 20px;
    padding-bottom: 10px;
`
const Image = styled.img`
    width: 200px;
`
const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    text-align: center;
`

export { PokemonList, LoadMoreBtn }