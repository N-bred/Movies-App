import React, { memo } from 'react';
import {
  AppBar,
  Toolbar,
  InputBase,
  FormGroup,
  FormControlLabel,
  Switch
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/TopBarStyles';
import { withRouter } from 'react-router-dom';
import blueLogo from '../img/logo/blue.png';
import purpleLogo from '../img/logo/purple.png';

const TopBar = ({ searchMovie, showMiniCards, history }) => {
  const { changed, handleChange, transition, topBar } = useThemeValue();
  const classes = styles(changed, transition, topBar)();

  const handleRedirectHome = () => {
    history.push('/');
  };

  const handleFocus = () => {
    showMiniCards(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarTop}>
          <img
            src={!changed ? blueLogo : purpleLogo}
            alt="Cyber Movies Logo"
            onClick={handleRedirectHome}
            style={{ cursor: 'pointer' }}
          />

          <FormGroup row className={classes.switch}>
            <FormControlLabel
              control={<Switch checked={!changed} onChange={handleChange} />}
              className={classes.label}
              label="Change Theme"
            />
          </FormGroup>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={searchMovie}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onFocus={handleFocus}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
};
export default withRouter(memo(TopBar));
