import React from 'react';
import Grid from '@material-ui/core/Grid';
import Movie from './Movie';
import styles from './styles/MovieListStyles';

const MovieList = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5} className={classes.gridContainer}>
        <Grid item lg={3} md={4} sm={6} xs={12} className={classes.grid}>
          <Movie />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Movie />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Movie />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Movie />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Movie />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Movie />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Movie />
        </Grid>
      </Grid>
    </div>
  );
};
export default MovieList;
