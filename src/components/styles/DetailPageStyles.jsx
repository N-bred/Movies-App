import { makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, backgroundPaper, posterUrl) => {
  return makeStyles(theme => ({
    card: {
      minWidth: 275,
      flex: '0 0 70%',
      position: 'relative',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: changed && backgroundPaper,
      transition
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: '3.5rem',
      color: changed && theme.palette.secondary.main
    },
    pos: {
      margin: ' 0 0 1.5rem 0',
      display: 'inline-block',
      fontSize: '1.65rem',
      color: changed && '#fff'
    },
    background: {
      flex: '0 0 30%',
      background: `url(https://image.tmdb.org/t/p/w500/${posterUrl}) no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 4,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    paper: {
      maxWidth: 1200,
      display: 'flex',
      minHeight: '80vh',
      margin: '2.5rem auto',
      borderRadius: 4
    },
    listTitle: {
      fontSize: '1.7rem',
      margin: '2.5rem 0 0 ',
      color: changed && '#fff'
    },
    listItem: {
      '& div span': {
        fontSize: '1.5rem',
        color: changed ? '#fff' : 'rgba(0, 0, 0, 0.54)'
      }
    },
    listIcon: {
      minWidth: '3rem'
    },
    icon: {
      '& path': {
        fill: changed
          ? theme.palette.secondary.main
          : theme.palette.primary.main
      }
    },
    cardActions: {
      position: 'absolute',
      bottom: 0,
      borderTop: changed
        ? '1px solid rgba(255,255,255,.4)'
        : '1px solid rgba(0,0,0,.1)',
      width: '100%',

      '& button, & a': {
        fontSize: '1.1rem',
        background: changed && backgroundPaper,
        color: changed
          ? theme.palette.secondary.main
          : theme.palette.primary.main
      }
    },
    date: {
      margin: '1.5rem auto',
      color: changed && '#fff'
    },
    description: {
      fontSize: '1.7rem',
      color: changed && '#fff'
    },
    tagname: {
      color: changed && '#fff'
    }
  }));
};

export default styles;
