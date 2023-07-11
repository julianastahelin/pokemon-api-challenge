import { useContext } from 'react';
import Button from './button';
import { ThemeContext } from '../contexts/theme-context';

function LoadMoreBtn(props) {

    const { theme } = useContext(ThemeContext);

    function LoadMoreFunction() {
        props.action();
    }

    return (
        <Button onClick={LoadMoreFunction} style={{ color: theme.color, backgroundColor: theme.background, fontSize: 17, padding: 12 }}>Load more</Button>
    )
}

export default LoadMoreBtn