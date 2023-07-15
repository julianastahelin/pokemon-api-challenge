import { useContext, forwardRef } from 'react';
import styled from 'styled-components';
import { ThemeContext } from "../contexts/theme-context";
import SortByType from "./sort-by-type";
import SearchForm from "./search-form";

const SearchSection = forwardRef( (props, ref) => {
    
    const { theme } = useContext(ThemeContext);

    return (
        <Div ref={ref} style={{ color: theme.background, backgroundColor: theme.color }}>
            <SortByType reset={props.reset}/>
            <SearchForm />
        </Div>
    )
}) 

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10% 0px;
    gap: 20px;
    @media (max-width: 360px) {
        gap: 15px;
    }
    scroll-margin-top: 227px;
`
export default SearchSection