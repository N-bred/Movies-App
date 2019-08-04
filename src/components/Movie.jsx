import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useThemeValue } from '../contexts/theme.context';
import { useFavorites } from '../contexts/favorites.context';
import styles from './styles/MovieStyles';
import { withRouter } from 'react-router-dom';

const Movie = ({ title, posterUrl, description, history, id, movie }) => {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  const initialValue = favorites.find(favorite => favorite.id === id);

  const [marked, setMarked] = useState(initialValue);

  const toggleMarked = () => {
    setMarked(!marked);
  };

  const handleClick = () => {
    toggleMarked();

    if (marked) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  const classes = styles(changed, transition, backgroundPaper, marked)();
  const handlePushRoute = () => {
    history.push(`/movie/${id}`);
  };

  return (
    <Card className={classes.card}>
      <IconButton
        aria-label="add to favorites"
        className={classes.favorite}
        onClick={handleClick}
      >
        <FavoriteIcon />
      </IconButton>
      <CardActionArea onClick={handlePushRoute}>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${posterUrl}`}
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="large"
          color={changed ? 'secondary' : 'primary'}
          className={classes.button}
          fullWidth
          onClick={handlePushRoute}
        >
          See More...
        </Button>
      </CardActions>
    </Card>
  );
};
export default withRouter(Movie);
