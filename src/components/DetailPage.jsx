import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card
} from '@material-ui/core';
import { useThemeValue } from '../contexts/theme.context';
import styles from './styles/DetailPageStyles';
import { withRouter } from 'react-router-dom';

const DetailPage = ({
  title,
  tagline,
  date,
  duration,
  description,
  countries,
  budget,
  revenue,
  genres,
  posterUrl,
  imdbId,
  history
}) => {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const classes = styles(changed, transition, backgroundPaper, posterUrl)();

  return (
    <Paper className={classes.paper}>
      <div className={classes.background} />

      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="inherit"
            gutterBottom
            variant="h1"
            component="h1"
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            color="textSecondary"
            className={classes.tagname}
          >
            {tagline}
          </Typography>

          <Typography
            variant="h5"
            component="h5"
            color="textSecondary"
            className={classes.date}
          >
            Release date: {date}
          </Typography>

          <Typography
            className={classes.pos}
            color="textSecondary"
            variant="body1"
          >
            Duration: {duration}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="textSecondary"
            className={classes.description}
          >
            Description: {description}
          </Typography>

          <Typography
            variant="h6"
            component="p"
            className={classes.listTitle}
            color="textSecondary"
          >
            Production Countries
          </Typography>

          <List>
            {countries.map(country => (
              <ListItem key={country.name} className={classes.listItem}>
                <ListItemIcon className={classes.listIcon}>
                  <svg
                    className={classes.icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary={country.name} color="textSecondary" />
              </ListItem>
            ))}
          </List>

          <Typography
            variant="h5"
            component="p"
            color="textSecondary"
            className={classes.tagname}
          >
            Budget: {budget} USD - Revenue: {revenue} USD
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {genres.map(genre => (
            <Button
              key={genre.name}
              size="small"
              onClick={() => history.push(`/genre/${genre.id}`)}
            >
              {genre.name}
            </Button>
          ))}

          <Button
            size="small"
            component="a"
            href={`https://www.imdb.com/title/${imdbId}`}
            target="_blank"
            style={{ marginLeft: 'auto' }}
          >
            IMDB
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default withRouter(DetailPage);
