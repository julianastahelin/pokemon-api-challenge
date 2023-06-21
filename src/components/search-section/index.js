import { SearchForm } from "../search-form";
import styled from 'styled-components'
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from 'react'
import SortByType from "../sort-by-type";
// import { filterPokemons } from "../pokemon-list-section";

export default function SearchSection() {
    const { theme } = useContext(ThemeContext)

    return (
        <Div style={{ color: theme.background, backgroundColor: theme.color }}>
            {/* <SortByType action={filterPokemons}/> */}
            <SearchForm />
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px 10% 0px;
`
