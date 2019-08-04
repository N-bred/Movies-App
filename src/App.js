import React from 'react';
import Main from './components/Main';
import Detail from './components/Detail';
import Genre from './components/Genre';
import FavoritesPage from './components/FavoritesPage';
import ThemeContext from './contexts/theme.context';
import FavoritesContext from './contexts/favorites.context';
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
              <FavoritesContext>
                <Route path="/" exact component={Main} />
                <Route path="/favorites" exact component={FavoritesPage} />
                <Route path="/movie/:id" exact component={Detail} />
                <Route path="/genre/:id" exact component={Genre} />
              </FavoritesContext>
            </MuiThemeProvider>
          </ThemeContext>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
