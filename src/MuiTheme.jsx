import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5'
    },
    secondary: {
      main: '#f6b906'
    }
  },
  mixins: {
    toolbar: {
      [defaultTheme.breakpoints.up('sm')]: {
        minHeight: defaultTheme.mixins.toolbar.minHeight
      },
      [defaultTheme.breakpoints.down('sm')]: {
        minHeight: '140px'
      }
    }
  }
});

export default theme;
