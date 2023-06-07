// import './header.css'
import styled from 'styled-components'

function TopHeader() {
    return (
        <Header>
            <H1>Pokemóns</H1>
        </Header>
    )
}

const Header = styled.header`
    background-color: cadetblue;
    text-align: center;
    padding: 5%;
`
const H1 = styled.h1`
    color: #ffffff;
    `

export default TopHeader