import React from 'react';
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
import styles from './styles/MovieStyles';

export default function Movie() {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const classes = styles(changed, transition, backgroundPaper)();

  return (
    <Card className={classes.card}>
      <IconButton aria-label="add to favorites" className={classes.favorite}>
        <FavoriteIcon />
      </IconButton>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            Lizard
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="large"
          color={changed ? 'secondary' : 'primary'}
          className={classes.button}
          fullWidth
        >
          See More...
        </Button>
      </CardActions>
    </Card>
  );
}
