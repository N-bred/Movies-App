import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  FormGroup,
  FormControlLabel,
  Switch
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/TopBarStyles';

const TopBar = () => {
  const { changed, handleChange, transition } = useThemeValue();
  const classes = styles(transition)();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
        color={changed ? 'secondary' : 'primary'}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap>
            Movies!
          </Typography>

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
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
};
export default TopBar;
