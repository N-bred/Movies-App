import { makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, backgroundPaper, posterUrl, marked) => {
  return makeStyles(theme => ({
    card: {
      minWidth: 275,
      flex: '0 0 70%',
      position: 'relative',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: changed && backgroundPaper,
      transition,
      [theme.breakpoints.down('sm')]: {
        minWidth: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      }
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: '3.5rem',
      color: changed ? theme.palette.secondary.main : theme.palette.primary.main
    },
    pos: {
      margin: ' 0 0 1.5rem 0',
      display: 'inline-block',
      fontSize: '1.65rem',
      color: changed && '#fff'
    },
    background: {
      flex: '0 0 30%',
      background:
        posterUrl === false
          ? 'transparent'
          : `url(https://image.tmdb.org/t/p/w500${posterUrl}) no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 4,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      [theme.breakpoints.down('sm')]: {
        flex: 'none',
        height: '60vh',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    },
    paper: {
      maxWidth: 1200,
      display: 'flex',
      minHeight: '80vh',
      margin: '2.5rem auto',
      borderRadius: 4,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        margin: '2.5rem 2.5rem'
      }
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
      [theme.breakpoints.down('sm')]: {
        position: 'relative'
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
      },

      '& button, & a': {
        fontSize: '1.1rem',
        background: changed && backgroundPaper,
        [theme.breakpoints.down('xs')]: {
          marginLeft: 0,
          width: '100%'
        },
        color: changed
          ? theme.palette.secondary.main
          : theme.palette.primary.main
      }
    },
    imdb: {
      marginLeft: 'auto',
      [theme.breakpoints.down('xs')]: {
        marginLeft: '0'
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
    },
    favorite: {
      position: 'absolute',
      right: 0,
      top: 0,
      [theme.breakpoints.down('sm')]: {
        right: '2%',
        top: '1%'
      },
      background: changed ? 'rgba(255,255,255,.3)' : 'rgba(0,0,0,.3)',
      '&:hover': {
        background: changed ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.15)'
      },
      '& svg path': {
        fill: marked ? '#de4536' : '#fff'
      }
    }
  }));
};

export default styles;
