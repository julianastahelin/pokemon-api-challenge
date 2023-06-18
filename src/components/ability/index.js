import { useState, useEffect, useContext } from 'react'
import getAbilities from '../../service/get-ability'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/theme-context'

function Abilities(props) {

    const { theme } = useContext(ThemeContext)

    const [abilities, setAbilities] = useState(
        [
            {
                effect_entries: [{
                    effect: '',
                    language: {
                        name: ''
                    }
                }],
                name: ''
            }
        ]
    )

    useEffect(() => {
        async function fetchAbilities() {
            const newAbilities = await getAbilities(props.abilities)
            setAbilities(newAbilities)
        }
        fetchAbilities()
    }, [])

    return (
        <Ul>
            {abilities.map((item, index) => {
                if (item.name.length > 0) {
                return (
                    <Li style={{ color: theme.abilityColor, background: theme.abilityBackground }}>
                        <Name key={index}>
                            {item.name}
                        </Name>
                        {item.effect_entries.filter((entrie) => entrie.language.name === 'en').map((item) => {
                            return (
                                <P>{item.effect}</P>
                            )
                        })}
                    </Li>
                )}
            })} 
        </Ul>
    )
}

const Ul = styled.ul`
    max-width: 80%;
    text-align: left;
    list-style-type: square;
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    justify-content: center;
`
const Li = styled.li`
    padding: 20px;
    width: 45%;
    min-width: 200px;
    border-radius: 10px;
`
const Name = styled.p`
    text-transform: capitalize;
    padding-bottom: 5px;
    font-weight: 700;
`

const P = styled.p`
    font-weight: 300;
`
export default Abilities