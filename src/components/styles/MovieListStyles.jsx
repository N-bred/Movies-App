import { makeStyles } from '@material-ui/core/styles';

const styles = changed => {
  return makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 1200,
      margin: '0 auto'
    },
    gridContainer: {
      marginTop: '2.5rem',
      [theme.breakpoints.down('sm')]: {
        '& > div': {
          maxWidth: '90%',
          margin: '0 auto'
        }
      }
    },
    errorContainer: {
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    errorText: {
      color: changed ? theme.palette.secondary.main : theme.palette.primary.main
    }
  }));
};

export default styles;
