import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import styled from 'styled-components'

export function Button(props) {
    const { theme } = useContext(ThemeContext);
    console.log('button themes', theme)

    return(
        <Btn {...props} 
            />
    )
}

const Btn = styled.button`
        padding: 5px;
        border: none;
        border-radius: 5px;
        font-weight: semi-bold;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
            transform: scale(1.02); 
            transition: ease-in-out 0.2s
        }
    `