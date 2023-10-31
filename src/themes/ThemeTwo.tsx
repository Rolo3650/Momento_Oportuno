import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { extendTheme } from '@mui/joy/styles';

const MaterialJoyTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          'outlinedColor': '#464748',
          outlinedBorder: '#FD542A',
          outlinedActiveBorder: "#FD542A",
          "500": "#FD542A"
        },
      },
    },
  },
});

interface Props {
  children: ReactNode;
}

const ThemeTwo: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={MaterialJoyTheme}>
      {/* <ThemeProvider theme={MaterialJoyTheme}> */}
      {children}
      {/* </ThemeProvider> */}
    </ThemeProvider>
  );
};

export { ThemeTwo };
