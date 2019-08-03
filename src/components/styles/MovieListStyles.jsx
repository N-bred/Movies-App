import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
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
  }
}));

export default styles;
