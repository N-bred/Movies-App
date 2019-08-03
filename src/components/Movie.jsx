import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { useThemeValue } from '../contexts/theme.context';

export default function Movie() {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const useStyles = makeStyles({
    card: {
      maxWidth: '100%',
      position: 'relative',
      transition,
      background: changed && backgroundPaper
    },
    media: {
      height: 250
    },
    title: {
      fontSize: '2.2rem',
      color: changed && '#fff'
    },
    content: {
      fontSize: '1.5rem',
      color: changed && '#fff'
    },
    button: {
      fontSize: '1.4rem'
    },
    favorite: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: '10',
      background: 'rgba(0,0,0,.3)',

      '&:hover': {
        background: 'rgba(0, 0, 0, .5)'
      },

      '& svg path': {
        fill: '#fff'
        //   fill: '#de4536'
      }
    },
    cardActions: {
      borderTop: changed && '1px solid rgba(255,255,255,.4)',
      background: changed && backgroundPaper,
      transition
    }
  });
  const classes = useStyles();

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
