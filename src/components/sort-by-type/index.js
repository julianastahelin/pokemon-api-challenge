import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context';

function SortByType({action}) {
    
    const [value, setValue] = useState('All types');
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        action(value)
    }, [value])

    const typeButtons = ['pokemon', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']

    return (
        <label>
        Sort by tipe: <select value={value} onChange={(e) => setValue(e.target.value)} style={{ textTransform: 'capitalize' }}>
            {typeButtons.map((type, index) => {
                return (
                    <option value={type} key={type + index} style={{ color: theme.color, backgroundColor: theme.background, textTransform: 'capitalize' }}>{type === 'pokemon' ? 'All types' : type}</option>
                )
            })}
        </select>
    </label>
    )
}

export default SortByType