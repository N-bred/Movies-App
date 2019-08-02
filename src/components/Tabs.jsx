import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 1200,
    margin: '2.5rem auto'
  },
  tabs: {
    '& span': {
      fontSize: '1.6rem'
    }
  }
});

const TabsCom = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="secondary"
        aria-label="icon tabs"
      >
        <Tab icon={<SearchIcon />} label="DISCOVER" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      </Tabs>
    </Paper>
  );
};
export default TabsCom;
