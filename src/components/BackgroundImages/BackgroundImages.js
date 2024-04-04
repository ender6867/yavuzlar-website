import { Box } from "@mui/material";
import React, { Children } from "react";

export const BackgroundImages = ({ children }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {/* <div id="gradient1" /> */}
        <div id="gradient2" />
        <div id="gradient3" />
        <div id="gradient4" />
        <div id="gradient5" />
        <div id="gradient6" />
        {/* <div id="gradient7" />
        <div id="gradient8" /> */}
      </Box>
    </Box>
  );
};
