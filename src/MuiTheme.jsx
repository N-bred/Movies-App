import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9423a8'
    },
    secondary: {
      main: '#00f1f7'
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
