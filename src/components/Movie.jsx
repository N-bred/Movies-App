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

export default function Movie({ title, posterUrl, description }) {
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
        >
          See More...
        </Button>
      </CardActions>
    </Card>
  );
}
