"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

export default function ThemeComponent({ children }) {
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
}
