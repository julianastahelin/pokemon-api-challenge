import AppRoutes from './routes'; 
import { ThemeProvider } from './contexts/theme-context';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`

  body {
      font-family: 'Geologica', sans-serif;
      scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li { 
    list-style-type: none;
  }

  a { 
    text-decoration: none;
    color: #000;
  }
`

export default App;