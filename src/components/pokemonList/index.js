import getPokemons from "../../service/get-pokemons"
import { useState, useEffect, useContext } from 'react'
import LoadMoreBtn from '../load-more-btn'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from "../../contexts/theme-context"

const ListOfPokemons = (props) => {
    const { theme } = useContext(ThemeContext)
    return (
        <>
            {props.pokemons.map((pokemon) => {
                return (
                    <PokemonContainer key={pokemon.name} style={{ color: theme.color, backgroundColor: theme.background }} >
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

function PokemonList() {

    const { theme } = useContext(ThemeContext)

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
        <Section style={{ color: theme.background, backgroundColor: theme.color }}>
            <Ul>
                <ListOfPokemons pokemons={list.pokemons} />
            </Ul>
            <LoadMoreBtn action={handleClick} />
        </Section>
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
const Image = styled.img`
    width: 150px;
`
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    text-align: center;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    text-align: center;
`

const Div = styled.div`
    display: flex;
    height: 80%;
`

export { PokemonList }