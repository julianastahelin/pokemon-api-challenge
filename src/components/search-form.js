import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/theme-context';
import Button from './button';

function SearchForm() {
    
    const [name, setName] = useState('');
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigate(`./pokemon/search/${name}`);
        setName('');
    }

    return (
        <Form onSubmit={handleSubmit} style={{ color: theme.background, backgroundColor: theme.color }}>
            <Label>Search by name:</Label>
            <Div>
                <SearchInput value={name} name="name" type="text" onChange={e => setName(e.target.value)} style={{ color: theme.inputColor, background: theme.inputBackground }} />
                <Button type="submit" style={{ color: theme.color, backgroundColor: theme.background }}>Go</Button>
            </Div>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    gap: 5px;
    align-items: center;
    @media (max-width: 687px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
const Label = styled.label`
    @media (max-width: 390px) {
        font-size: 15px;
    }
`
const Div = styled.div`
    display: flex;
    gap: 5px;
`
const SearchInput = styled.input`
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 150px;
    &:focus {
        outline-color: cadetblue;
    }
    @media (max-width: 390px) {
    width: 130px;
    }
`

export default SearchForm