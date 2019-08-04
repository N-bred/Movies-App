import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/MiniCardStyles';

export default function DetailPage({ title, posterUrl, description }) {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const classes = styles(changed, transition, backgroundPaper, posterUrl)();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.buttonContainer} />
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
}
