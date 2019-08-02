import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { FormatListBulleted } from '@material-ui/icons';

const useStyles = makeStyles({
   card: {
      minWidth: 275,
      flex: '0 0 70%',
      position: 'relative',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
   },
   bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
   },
   title: {
      fontSize: '3.5rem'
   },
   pos: {
      margin: ' 0 0 1.5rem 0',
      display: 'inline-block',
      fontSize: '1.65rem'
   },
   background: {
      flex: '0 0 30%',
      background:
         'url(https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg) no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 4,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
   },
   paper: {
      maxWidth: 1200,
      display: 'flex',
      minHeight: '60vh',
      margin: '2.5rem auto',
      borderRadius: 4
   },
   listTitle: {
      fontSize: '1.7rem',
      margin: '2.5rem 0 0 '
   },
   listItem: {
      '& div span': {
         fontSize: '1.5rem',
         color: 'rgba(0, 0, 0, 0.54)'
      }
   },
   listIcon: {
      minWidth: '3rem'
   },
   cardActions: {
      position: 'absolute',
      bottom: 0,
      borderTop: '1px solid rgba(0,0,0,.1)',
      width: '100%',

      '& button, & a': {
         fontSize: '1.1rem',
         color: '#544747d6'
      }
   },
   date: {
      margin: '1.5rem auto'
   },
   description: {
      fontSize: '1.7rem'
   }
});

export default function SimpleCard() {
   const classes = useStyles();

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
               <Typography variant="h4" component="h2" color="textSecondary">
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
                  Description: "Miles Morales is juggling his life between being
                  a high school student and being a spider-man. When Wilson
                  "Kingpin" Fisk uses a super collider, others from across the
                  Spider-Verse are transported to this dimension."
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
                        <FormatListBulleted />
                     </ListItemIcon>
                     <ListItemText primary="Colombia" color="textSecondary" />
                  </ListItem>
               </List>

               <Typography variant="h5" component="p" color="textSecondary">
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
