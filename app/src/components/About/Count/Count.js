import { Box, Typography } from "@mui/material";
import Image from "next/image";

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
      <Typography sx={{ fontSize: "4rem", cursor: 'default', fontWeight: 700 }}>{number}</Typography>

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
            cursor: 'default'
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};
export default Count;
