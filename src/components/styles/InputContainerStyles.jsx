import { makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, backgroundPaper) => {
  return makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 600,
      margin: '2.5rem auto',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      background: changed && backgroundPaper,
      transition,
      [theme.breakpoints.down('sm')]: {
        '&': {
          maxWidth: '90%',
          margin: '2.5rem auto'
        }
      }
    }
  }));
};

export default styles;
