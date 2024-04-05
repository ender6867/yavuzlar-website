"use client";
import { ThemeProvider, createTheme } from "@mui/material";

export const ThemeComponent = ({ children }) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        mdlg: 1400,
        xl: 1536,
      },
    },
    
    palette: {
      primary: {
        main: "#00f",
      },
      secondary: {
        main: "#73CD07",
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            color: "#73CD07",
            fontWeight: "600",
            fontSize: "18px",
            cursor: "pointer",
          }),
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeComponent;
