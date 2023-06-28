import { useState, useContext } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa6';
import { ThemeContext } from "../../contexts/theme-context";
import Button from "../button";

function BackToTopBtn({resultReference}) {

    const [ visible, setVisible ] = useState(false);
    const { theme } = useContext(ThemeContext);

    function toggleBtnVisibility() {
        const distanceToTop = document.documentElement.scrollTop;
        distanceToTop > 100 ? setVisible(true) : setVisible(false);
    }

    window.addEventListener('scroll', toggleBtnVisibility);

    function scrollTop() { 
        resultReference.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <ScrollTopButton onClick={scrollTop} style={{ color: theme.inputColor, backgroundColor: theme.inputBackground, borderColor: theme.color, display: visible ? 'block' : 'none' }}>
            <FaArrowUp />
        </ScrollTopButton>
    )
}

const ScrollTopButton = styled(Button)`
    position: fixed; 
    cursor: pointer;
    right: 60px;
    bottom: 40px;
    z-index: 1;
    font-size: 18px;
    display: flex;
    align-items: center;
    border: 1px solid;
    @media(max-width: 1012px) {
        right: 20px;
    }
    @media(max-width: 925px) {
        right: 10px;
    }
`

export default BackToTopBtn