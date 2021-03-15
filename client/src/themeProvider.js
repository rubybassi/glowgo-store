import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#efe4e8',
      dark: '#bdb2b6',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ffffff',
      main: '#e4e8ef',
      dark: '#ba000d',
      contrastText: '#000000',
    },
  },
});

export default theme;