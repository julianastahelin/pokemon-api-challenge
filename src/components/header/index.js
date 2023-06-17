import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import ThemeTogglerButton from '../theme-toggler-button';
import { Button } from '../button'
import { Link } from 'react-router-dom'

function TopHeader() {

    const { theme } = useContext(ThemeContext)

    return (
        <Header style={{ color: theme.color, backgroundColor: theme.background }} >
            <H1>Pokédex</H1>
            <Nav>
                <Link to='/'>
                    <Button style={{ color: theme.background, backgroundColor: theme.color }}>Home</Button>
                </Link>
                <ThemeTogglerButton />
            </Nav>
        </Header>
    )
}

const Header = styled.header`
    text-align: center;
    padding: 4% 5% 3%;
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
    gap: 5px;
    padding: 10px 20px 0 0;
`

export default TopHeader