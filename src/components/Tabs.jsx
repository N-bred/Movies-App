import React, { memo } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/TabsStyles';
import { withRouter } from 'react-router-dom';

const TabsCom = ({ history, location }) => {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const classes = styles(changed, transition, backgroundPaper)();
  const [value, setValue] = React.useState(
    location.pathname === '/favorites' ? 1 : 0
  );

  function handleChange(event, newValue) {
    setValue(newValue);

    if (newValue === 0) {
      history.push('/');
    } else {
      history.push('/favorites');
    }
  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor={changed ? 'secondary' : 'primary'}
        textColor={changed ? 'secondary' : 'primary'}
        aria-label="icon tabs"
      >
        <Tab icon={<SearchIcon />} label="DISCOVER" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      </Tabs>
    </Paper>
  );
};
export default withRouter(memo(TabsCom));
