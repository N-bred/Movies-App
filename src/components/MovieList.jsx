import React from 'react';
import Grid from '@material-ui/core/Grid';
import Movie from './Movie';
import styles from './styles/MovieListStyles';
import { shortenText } from '../utils';

const MovieList = ({ movies }) => {
  const classes = styles();
  return (
    <div className={classes.root}>
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
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default MovieList;
