import { makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, backgroundPaper) => {
  return makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 1200,
      margin: '2.5rem auto',
      background: changed && backgroundPaper,
      transition
    },
    tabs: {
      transition,
      '& span': {
        fontSize: '1.6rem'
      },
      '& button': {
        color: changed ? '#fff' : 'rgba(0,0,0,.54)'
      }
    }
  });
};

export default styles;
