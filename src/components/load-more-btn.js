import { useContext } from 'react';
import Button from './button';
import { ThemeContext } from "../contexts/theme-context";

function LoadMoreBtn({ loadMore }) {

    const { theme } = useContext(ThemeContext);

    return (
        <Button onClick={loadMore} style={{ color: theme.color, backgroundColor: theme.background, fontSize: 17, padding: 12 }}>Load more</Button>
    )
}

export default LoadMoreBtn