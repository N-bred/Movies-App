import React from 'react';
import Main from './components/Main';
import Theme from './contexts/theme.context';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#f6b906'
    }
  }
});

function App() {
  return (
    <div className="App">
      <Theme>
        <MuiThemeProvider theme={theme}>
          <Main />
        </MuiThemeProvider>
      </Theme>
    </div>
  );
}

export default App;
