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
      contrastText: '#444444',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Playfair Display',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  typography: {
    h1: {
      fontFamily: 'Playfair Display',
    },
    h2: {
      fontFamily: 'Playfair Display',
    },
    h3: {
      fontFamily: 'Playfair Display',
    },
    h4: {
      fontFamily: 'Playfair Display',
    },
    h5: {
      fontFamily: 'Montserrat',
    },
    h6: {
      fontFamily: 'Montserrat',
    },
    body1 : {
      fontFamily: 'Montserrat',
    },
    body2 : {
      fontFamily: 'Montserrat',
  },
  subtitle1 : {
    fontFamily: 'Montserrat',
},
},
});

export default theme;