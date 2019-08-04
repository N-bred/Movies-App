import { makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, backgroundPaper) => {
  return makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 1200,
      margin: '2.5rem auto',
      background: changed && backgroundPaper,
      transition,
      [theme.breakpoints.down('sm')]: {
        margin: '2.5rem'
      }
    },
    tabs: {
      transition,
      '& span': {
        fontSize: '1.6rem'
      },
      '& button': {
        color: changed ? '#fff' : 'rgba(0,0,0,.54)'
      },

      '& [role="tablist"]': {
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column'
        }
      }
    }
  }));
};

export default styles;
