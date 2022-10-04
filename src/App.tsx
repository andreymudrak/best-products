import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './globalStyles';
import { store } from './redux/store';
import { Pages } from './pages';
import { THEME as theme} from './constants/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Pages />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
