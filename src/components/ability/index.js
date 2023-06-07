import { useState, useEffect } from 'react'
import getAbility from '../../service/get-ability'

function Ability(props) {
    const [ ability, setAbility ] = useState({
        effect_entries: [ {
                effect: '',
                language: {
                    name:''
                }
            } ],
        name: '',
    })

    useEffect(() => {
        async function fetchAbility() {
            console.log('INDO PARA O FETCH (props.ability):', props.ability)
            console.log('props.ability.length:', props.ability.length)
            const newAbility = await getAbility(props.ability)
            if (newAbility === undefined) {
                return
            } else {
                setAbility(newAbility)
            }
        }
        fetchAbility()
    }, [])

    console.log('Ability fora do useEffect', ability)
    return (
        <>
            {ability.name} - {ability.effect_entries.map((effect_entrie, index) => {
                                            return (
                                                effect_entrie.language.name === 'en' ?                                             
                                                <span key={index}>{effect_entrie.effect}</span>
                                                : <span></span>
                                            )
                                        })}
        </>
    )
}

export default Ability