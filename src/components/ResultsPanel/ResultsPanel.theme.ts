import { createTheme } from '@mui/material/styles';

const typography = {
  fontFamily: 'Roboto, system-ui, sans-serif',
};

export const RESULTS_PANEL_THEMES = {
  dark: createTheme({
    palette: {
      background: {
        default: '#000',
        paper: '#000',
      },
      mode: 'dark',
    },
    typography,
  }),
  light: createTheme({
    palette: {
      background: {
        default: '#fff',
        paper: '#fff',
      },
      mode: 'light',
    },
    typography,
  }),
};
