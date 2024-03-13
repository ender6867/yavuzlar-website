"use client";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";

export const ThemeComponent = ({ children }) => {
  const theme = createTheme({
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
