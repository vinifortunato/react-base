import { ThemeProvider } from 'styled-components';
import Router from './components/Router';
import { GlobalStyle } from './styles';
import { defaultTheme } from './themes';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

export default App;
