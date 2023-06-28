import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/theme-context';
import getAbilities from '../../service/get-ability';

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
                    <Li key={item+index} style={{ color: theme.abilityColor, background: theme.abilityBackground }}>
                        <Name>
                            {item.name}
                        </Name>
                        {item.effect_entries.filter((entrie) => entrie.language.name === 'en').map((item) => {
                            return (
                                <P key={item}>{item.effect}</P>
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
    display: flex;
    gap: 20px;
    justify-content: center;
    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;
    }
`
const Li = styled.li`
    padding: 20px;
    width: 45%;
    border-radius: 10px;
    @media (max-width: 720px) {
        width: 80%;
    }
    @media (max-width: 420px) {
        width: 100%;
    }
    @media (max-width: 390px) {
        font-size: 15px;
    }
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