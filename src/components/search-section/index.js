import { SearchForm } from "../search-form";
import styled from 'styled-components'
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from 'react'

export default function SearchSection() {
    const { theme } = useContext(ThemeContext)

    return (
        <Div style={{ color: theme.background, backgroundColor: theme.color }}>
            <SearchForm />
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px 10% 0px;
`
