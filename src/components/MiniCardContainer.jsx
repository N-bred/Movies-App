import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import MiniCard from './MiniCard';
import { useThemeValue } from '../contexts/theme.context';

export default function MiniCardContainer() {
  const { changed, transition, backgroundMain } = useThemeValue();

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 400,
      backgroundColor: changed
        ? backgroundMain
        : theme.palette.background.paper,
      height: '50rem',
      transition,
      overflowY: 'scroll'
    },
    divider: {
      marginLeft: 0,
      backgroundColor: changed && theme.palette.secondary.main
    }
  }));
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <MiniCard />
      </ListItem>
      <Divider variant="inset" component="li" className={classes.divider} />
      <ListItem alignItems="flex-start">
        <MiniCard />
      </ListItem>
      <Divider variant="inset" component="li" className={classes.divider} />
    </List>
  );
}
