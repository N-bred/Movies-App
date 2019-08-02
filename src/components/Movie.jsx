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

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    position: 'relative'
  },
  media: {
    height: 250
  },
  title: {
    fontSize: '2.2rem'
  },
  content: {
    fontSize: '1.5rem'
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
  }
});

export default function Movie() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <IconButton
        aria-label="add to favorites"
        className={classes.favorite}
        onClick={() => alert('Hewwo')}
      >
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
      <CardActions>
        <Button
          size="large"
          color="primary"
          className={classes.button}
          fullWidth
        >
          See More...
        </Button>
      </CardActions>
    </Card>
  );
}
