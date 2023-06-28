import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/theme-context';

function Footer() { 

    const { theme } = useContext(ThemeContext)
    
    return (
        <FooterBar style={{ color: theme.color, backgroundColor: theme.background }}>
            <A href="https://github.com/julianastahelin" target="_blank" style={{ color: theme.color }}>@Juliana Stahelin 2023</A>
        </FooterBar>
    )
}

const FooterBar = styled.footer`
    text-align: center;
    padding: 50px 60px;
`
const A = styled.a`
    &:hover {
        opacity: 0.8;
        transform: scale(1.02);
    }
`

export default Footer