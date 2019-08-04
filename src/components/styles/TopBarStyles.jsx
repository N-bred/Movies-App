import { fade, makeStyles } from '@material-ui/core/styles';

const styles = (changed, transition, topBar) => {
  return makeStyles(theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      zIndex: 6000,

      '& header': {
        background: changed ? topBar : theme.palette.primary.main
      }
    },

    title: {
      display: 'block',

      cursor: 'pointer'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      fontSize: '1.6rem',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200
        }
      }
    },
    switch: {
      flexGrow: 1,
      margin: ' 0 1.5rem'
    },
    label: {
      '& span': {
        fontSize: '1.6rem',
        '& span[class="MuiIconButton-label"]': {
          color: !changed
            ? theme.palette.secondary.main
            : theme.palette.primary.main
        }
      }
    },
    toolbar: theme.mixins.toolbar,
    appbar: {
      transition,
      flexDirection: 'column'
    },
    toolbarTop: {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: '2rem'
      }
    }
  }));
};

export default styles;
