import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E4032E',
    },
    secondary: {
      main: '#FD542A',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: { fontFamily: 'Helvetica, Arial, sans-serif' },
      },
    },
  },
});

interface Props {
  children: ReactNode;
}

const ThemeOne: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={`theme-mode-${theme.palette.mode}`}>{children}</div>
    </ThemeProvider>
  );
};

export { ThemeOne };
