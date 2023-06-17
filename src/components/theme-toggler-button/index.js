import React, { useContext } from 'react'
import { ThemeContext, themes } from '../../contexts/theme-context'
import { Button } from '../button'

function ThemeTogglerButton() {
    const { theme, setTheme } = useContext(ThemeContext)
    console.log('theme toggler button themes', theme)

    return(
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light )}style={{ color: theme.background, backgroundColor: theme.color }} >Theme</Button>
        </div>
    )
}

export default ThemeTogglerButton