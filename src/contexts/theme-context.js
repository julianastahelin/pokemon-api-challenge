import { createContext, useState } from "react";

export const ThemeContext = createContext({})

export const themes = {
    light: { 
        color: 'cadetblue',
        background: '#eeeeee',
        inputColor: 'cadetblue', 
        inputBackground: '#eee',
        abilitiesColor: '#eee',
        abilitiesBackground: 'cadetblue'
    },
    dark: { 
        color: '#fff', 
        background: 'cadetblue',
        inputColor: '#fff', 
        inputBackground: '#90BDBF',
        abilitiesColor: '#fff',
        abilitiesBackground: '#90BDBF'
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