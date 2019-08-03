import { makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, backgroundMain) => {
  return makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 400,
      backgroundColor: changed
        ? backgroundMain
        : theme.palette.background.paper,
      height: '50rem',
      transition,
      overflowY: 'scroll'
    },
    divider: {
      marginLeft: 0,
      backgroundColor: changed && theme.palette.secondary.main
    }
  }));
};

export default styles;
