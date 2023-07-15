import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';
import { FaHouse } from 'react-icons/fa6';
import { ThemeContext } from "../contexts/theme-context";
import ThemeTogglerButton from './theme-toggler-button';
import Button from './button';

function Header({ scrollTop, resetType }) {

    const { theme } = useContext(ThemeContext);

    function handleClick() {
        scrollTop();
        resetType();
    }
    
    return (
        <Head style={{ color: theme.color, backgroundColor: theme.background }}>
            <H1>Pokédex</H1>
            <Nav>
                <Link to='/'>
                    <HomeButton style={{ color: theme.background, backgroundColor: theme.color }} onClick={handleClick}>
                        <FaHouse />
                    </HomeButton>
                </Link>
                <ThemeTogglerButton />
            </Nav>
        </Head>
    )
}

const Head = styled.header`
    text-align: center;
    padding: 50px 60px 30px;
    position: sticky;
    top: 0;
    z-index: 1;
`
const H1 = styled.h1`
    text-transform: uppercase;
`
const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    padding-top: 15px;
`
const HomeButton = styled(Button)`
    font-size: 18px;
    display: flex;
    align-items: center;
`

export default Header