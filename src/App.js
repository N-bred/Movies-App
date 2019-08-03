import React from 'react';
import Main from './components/Main';
import ThemeContext from './contexts/theme.context';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './MuiTheme';

const App = () => {
  return (
    <div className="App">
      <ThemeContext>
        <MuiThemeProvider theme={theme}>
          <Main />
        </MuiThemeProvider>
      </ThemeContext>
    </div>
  );
};

export default App;
