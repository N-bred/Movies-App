import React from 'react';
import Main from './components/Main';
import Detail from './components/Detail';
import Genre from './components/Genre';
import ThemeContext from './contexts/theme.context';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, HashRouter } from 'react-router-dom';
import theme from './MuiTheme';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <ThemeContext>
            <MuiThemeProvider theme={theme}>
              <Route path="/" exact component={Main} />
              <Route path="/movie/:id" exact component={Detail} />
              <Route path="/genre/:id" exact component={Genre} />
            </MuiThemeProvider>
          </ThemeContext>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
