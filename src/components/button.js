import styled from 'styled-components';

function Button(props) {

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
export default Button