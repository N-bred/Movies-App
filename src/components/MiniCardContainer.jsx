import React from 'react';
import { List, ListItem, Divider } from '@material-ui/core';
import MiniCard from './MiniCard';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/MiniCardContainerStyles';

export default function MiniCardContainer() {
  const { changed, transition, backgroundMain } = useThemeValue();
  const classes = styles(changed, transition, backgroundMain)();

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
