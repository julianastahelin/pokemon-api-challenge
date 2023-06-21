import { createContext, useState } from "react";

export const ThemeContext = createContext({})

export const themes = {
    light: { 
        color: 'cadetblue',
        background: '#eeeeee',
        inputColor: 'cadetblue', 
        inputBackground: '#eee',
        abilityColor: '#eee',
        abilityBackground: 'cadetblue',
        typeColor: '#fff',
        typeBackground: '#7bb7ba'
    },
    dark: { 
        color: '#fff', 
        background: 'cadetblue',
        inputColor: '#fff', 
        inputBackground: '#7bb7ba',
        abilityColor: '#fff',
        abilityBackground: '#7bb7ba',
        typeColor: 'cadetblue',
        typeBackground: '#fff'
    }
}

export function ThemeProvider(props) {

    const [ theme, setTheme ] = useState(themes.dark)
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}