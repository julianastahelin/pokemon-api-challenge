import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaRegSun, FaRegMoon} from 'react-icons/fa6';
import { ThemeContext, themes } from '../../contexts/theme-context';
import Button from '../button';

function ThemeTogglerButton() {

    const { theme, setTheme } = useContext(ThemeContext);

    return(
        <div>
            <ThemeButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light )} style={{ color: theme.background, backgroundColor: theme.color}}>{theme === themes.dark ? <FaRegSun /> : <FaRegMoon />}</ThemeButton>
        </div>
    )
}

const ThemeButton = styled(Button)`
    font-size: 18px;
    display: flex;
    align-items: center;
`

export default ThemeTogglerButton