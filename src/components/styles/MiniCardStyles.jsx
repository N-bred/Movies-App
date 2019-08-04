import { makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, backgroundPaper, posterUrl) => {
  return makeStyles({
    card: {
      maxWidth: 350,
      display: 'flex',
      overfow: 'hidden',
      background: changed && backgroundPaper,
      transition,
      '& button': {
        background: `url(https://image.tmdb.org/t/p/w500${posterUrl}) no-repeat`,
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
};

export default styles;
