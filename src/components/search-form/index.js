import { useState, useContext } from 'react'
import { ThemeContext, themes } from '../../contexts/theme-context'
import { Button } from '../button'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function SearchForm() {
    const [ name, setName ] = useState('')

    const { theme } = useContext(ThemeContext);
    
    const navigate = useNavigate(); 

    function handleSubmit(event) {
        event.preventDefault()
        navigate(`./pokemon/search/${name}`)
        setName('');   
    }

    return (
        <>
            <Form onSubmit={handleSubmit} style={{ color: theme.background, backgroundColor: theme.color }}>
                <label>Search by name:</label>
                <SearchInput value={name} name="name" type="text" onChange={e => setName(e.target.value)} style={{ color: theme.inputColor, background: theme.inputBackground }} />
                <Button type="submit" style={{ color: theme.color, backgroundColor: theme.background }}>Go</Button>
            </Form>
        </>
    )
}

const Form = styled.form`
    display: flex;
    gap: 5px;
    align-items: center;
`
const SearchInput = styled.input`
    border: none;
    border-radius: 5px;
    padding: 5px;
    &:focus {
        outline-color: cadetblue;
    }
`

export { SearchForm }