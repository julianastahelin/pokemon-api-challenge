import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/theme-context';

function SortByType(props) {

    const [type, setType] = useState('pokemon');
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const typeButtons = ['pokemon', 'all types', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];

    useEffect(() => {
        if (type === 'pokemon') {
            navigate('./')
        } else {
            navigate(`./type/${type}`)
        }
    }, [type])

    useEffect(() => {
        setType('pokemon')
    }, [props.resetType])

    function handleChange(e) {
        setType(e.target.value)
    }

    return (
        <Label>
            Sort by tipe: 
            <Select value={type} onChange={handleChange} style={{ color: theme.typeBackground, backgroundColor: theme.inputBackground}}>
                {typeButtons.map((type, index) => <Option value={type} key={type + index} style={{ color: theme.typeBackground, backgroundColor: theme.inputBackground }}>{type === 'pokemon' ? 'Choose...' : type}</Option>)}
            </Select>
        </Label>
    )
}

const Label = styled.label`
    display: flex;
    gap: 5px;
    align-items: center;
    @media (max-width: 687px) {
        flex-direction: column;
        align-items: flex-start;
        font-size: 15px;
    }
`
const Select = styled.select`
    text-transform: capitalize;
    border: none;
    border-radius: 5px;
    padding: 5px;
    &:focus {
        outline-color: cadetblue;
    }
`
const Option = styled.option`
    text-transform: capitalize;
`

export default SortByType