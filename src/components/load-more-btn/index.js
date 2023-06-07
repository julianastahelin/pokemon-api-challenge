import styled from 'styled-components'

export default function LoadMoreBtn(props) {
    function LoadMoreFunction() {
        props.action()
    }

    return (
        <Button onClick={LoadMoreFunction}>Load more</Button>
    )
}

const Button = styled.button`
    padding: 10px 20px;
    background-color: #f6f6f6;
    border: 2px solid cadetblue;
    border-radius: 5px;
    margin: auto;
    font-size: 20px;
    cursor: pointer;
`