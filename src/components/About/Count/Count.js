"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";

export const Count = ({ number, name, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <Typography sx={{ fontSize: "4rem", cursor: "default", fontWeight: 700 }}>
        <CountUp enableScrollSpy={true} end={number} />
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={image} alt="image" width={60} height={60} />

        <Typography
          sx={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            fontWeight: 700,
            cursor: "default",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};
export default Count;
