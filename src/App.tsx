import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/GlobalStyles';
import Theme from 'styles/theme';
import Router from 'router';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
