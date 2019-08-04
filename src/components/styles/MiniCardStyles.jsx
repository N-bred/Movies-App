import { makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, backgroundPaper, posterUrl) => {
  return makeStyles(theme => ({
    card: {
      maxWidth: 350,
      display: 'flex',
      overfow: 'hidden',
      background: changed && backgroundPaper,
      transition,
      [theme.breakpoints.down('sm')]: {
        maxHeight: '120rem',
        maxWidth: '100%',
        width: '100%'
      },
      '& button': {
        background:
          posterUrl === false
            ? 'transparent'
            : `url(https://image.tmdb.org/t/p/w500${posterUrl}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    },
    media: {
      height: 50
    },
    content: {
      fontSize: '1.4rem',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    contentContainer: {
      flex: '0 0 70%',
      [theme.breakpoints.down('sm')]: {
        padding: '2rem 1rem'
      },
      '& h2, & p': {
        color: changed && '#fff'
      }
    },
    buttonContainer: {
      flex: ' 0 0 30%'
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.7rem'
      }
    }
  }));
};

export default styles;
