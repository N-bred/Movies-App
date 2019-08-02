import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Movie from './Movie';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1200,
    margin: '0 auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  gridContainer: {
    marginTop: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      '& > div': {
        maxWidth: '90%',
        margin: '0 auto'
      }
    }
  }
}));

const MovieList = () => {
  const classes = useStyles();
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
