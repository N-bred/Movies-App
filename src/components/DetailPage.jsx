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

export default function SimpleCard() {
  const { changed, transition, backgroundPaper } = useThemeValue();
  const classes = styles(changed, transition, backgroundPaper)();

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
            Spider-Man: Into the Spider-Verse
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            color="textSecondary"
            className={classes.tagname}
          >
            More Than One Wears the Mask
          </Typography>

          <Typography
            variant="h5"
            component="h5"
            color="textSecondary"
            className={classes.date}
          >
            Release date: 27/06/2006
          </Typography>

          <Typography
            className={classes.pos}
            color="textSecondary"
            variant="body1"
          >
            Duration: 2h 5min
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="textSecondary"
            className={classes.description}
          >
            Description: "Miles Morales is juggling his life between being a
            high school student and being a spider-man. When Wilson "Kingpin"
            Fisk uses a super collider, others from across the Spider-Verse are
            transported to this dimension."
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
            <ListItem className={classes.listItem}>
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
              <ListItemText primary="Colombia" color="textSecondary" />
            </ListItem>
          </List>

          <Typography
            variant="h5"
            component="p"
            color="textSecondary"
            className={classes.tagname}
          >
            Budget: 50.000.000 USD - Revenue: 9.000.000 USD
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small">Horror</Button>
          <Button size="small">Horror</Button>

          <Button
            size="small"
            component="a"
            href="https://google.com"
            target="_blank"
            style={{ marginLeft: 'auto' }}
          >
            IMDB
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
