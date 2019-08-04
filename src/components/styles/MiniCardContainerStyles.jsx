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
      overflowY: 'scroll',
      position: 'fixed',
      right: 0,
      zIndex: 1000,
      boxShadow:
        '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    },
    divider: {
      marginLeft: 0,
      backgroundColor: changed && theme.palette.secondary.main
    },
    errorContainer: {
      height: '50vh',
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
