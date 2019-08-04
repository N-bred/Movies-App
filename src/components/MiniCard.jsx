import React from 'react';
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
  selectMovie,
  handleMouseOver
}) => {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const classes = styles(changed, transition, backgroundPaper, posterUrl)();
  const handlePushRoute = () => {
    handleMouseOver();
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
        <Typography gutterBottom variant="h4" component="h2">
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

export default withRouter(MiniCard);
