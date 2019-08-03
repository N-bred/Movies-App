import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useThemeValue } from '../contexts/theme.context';

export default function DetailPage() {
  const { changed, transition, backgroundPaper } = useThemeValue();

  const useStyles = makeStyles({
    card: {
      maxWidth: 350,
      display: 'flex',
      overfow: 'hidden',
      background: changed && backgroundPaper,
      transition,
      '& button': {
        background:
          'url(https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg) no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    },
    media: {
      height: 50
    },
    content: {
      fontSize: '1.4rem'
    },
    contentContainer: {
      flex: '0 0 70%',
      '& h2, & p': {
        color: changed && '#fff'
      }
    },
    buttonContainer: {
      flex: ' 0 0 30%'
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.buttonContainer} />
      <CardContent className={classes.contentContainer}>
        <Typography gutterBottom variant="h4" component="h2">
          Lizard
        </Typography>
        <Typography
          className={classes.content}
          variant="body1"
          color="textSecondary"
          component="p"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </Typography>
      </CardContent>
    </Card>
  );
}
