import React, { memo } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/MiniCardStyles';
import { withRouter } from 'react-router-dom';

const MiniCard = ({
  title,
  posterUrl,
  description,
  history,
  id,
  selectMovie
}) => {
  const { changed, transition, backgroundPaper } = useThemeValue();

  const poster = () => posterUrl || false;

  const classes = styles(changed, transition, backgroundPaper, poster())();
  const handlePushRoute = () => {
    history.push(`/movie/${id}`);
    if (selectMovie) {
      selectMovie(id);
    }
  };
  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={handlePushRoute}
        className={classes.buttonContainer}
      />
      <CardContent className={classes.contentContainer}>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          className={classes.content}
          variant="body1"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withRouter(memo(MiniCard));
