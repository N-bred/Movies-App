import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Movie from './Movie';
import styles from './styles/MovieListStyles';
import { shortenText } from '../utils';
import { useThemeValue } from '../contexts/theme.context';

const MovieList = ({ movies, showErrorNotFound }) => {
  const { changed } = useThemeValue();
  const classes = styles(changed)();
  return (
    <div className={classes.root}>
      {showErrorNotFound ? (
        <div className={classes.errorContainer}>
          <Typography variant="h4" className={classes.errorText}>
            Movie not found
          </Typography>
        </div>
      ) : (
        <Grid container spacing={5} className={classes.gridContainer}>
          {movies.map(movie => (
            <Grid
              key={movie.id}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
              className={classes.grid}
            >
              <Movie
                title={movie.title}
                posterUrl={movie.poster_path}
                description={shortenText(movie.overview)}
                id={movie.id}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default MovieList;
