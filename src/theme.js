import { createMuiTheme } from '@material-ui/core/styles';
import { red, orange, purple, teal } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6200EE',
    },
    secondary: {
      main: '#03DAC6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
