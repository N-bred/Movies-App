import { makeStyles } from '@material-ui/core/styles';

const styles = changed => {
  return makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& div, & p, & label': {
        fontSize: '1.6rem',
        color: changed && '#fff'
      }
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    item: {
      fontSize: '1.6rem'
    },
    label: {
      color: changed
        ? `${theme.palette.secondary.main} !important`
        : `${theme.palette.primary.main} !important`
    }
  }));
};

export default styles;
