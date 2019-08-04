import React from 'react';
import { List, ListItem, Divider, Typography } from '@material-ui/core';
import MiniCard from './MiniCard';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/MiniCardContainerStyles';
import LoadingSpinner from './LoadingSpinner';
import { shortenText } from '../utils';

export default function MiniCardContainer({
  loading,
  movies,
  showErrorNotFound,
  showMiniCards,
  selectMovie
}) {
  const { changed, transition, backgroundMain } = useThemeValue();
  const classes = styles(changed, transition, backgroundMain)();
  const handleMouseOver = () => {
    showMiniCards(true);
  };

  const handleMouseLeave = () => {
    showMiniCards(false);
  };

  return (
    <List
      className={classes.root}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {loading ? (
        <LoadingSpinner small />
      ) : showErrorNotFound ? (
        <div className={classes.errorContainer}>
          <Typography variant="h4" className={classes.errorText}>
            Movie not found
          </Typography>
        </div>
      ) : (
        movies.map(movie => (
          <React.Fragment key={movie.id}>
            <ListItem alignItems="flex-start">
              <MiniCard
                title={movie.title}
                posterUrl={movie.poster_path}
                id={movie.id}
                description={shortenText(movie.overview, 100)}
                selectMovie={selectMovie}
              />
            </ListItem>
            <Divider
              variant="inset"
              component="li"
              className={classes.divider}
            />
          </React.Fragment>
        ))
      )}
    </List>
  );
}
