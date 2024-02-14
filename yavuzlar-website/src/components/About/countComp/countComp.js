import Image from "next/image";
import { Box, Typography } from "@mui/material";

const countInfo = [
  {
    number: "1",
    name: "Üye",
    image: "/uyeImg.svg",
  },
  {
    number: "2",
    name: "Proje",
    image: "/projeImg.svg",
  },
  {
    number: "3",
    name: "Makale",
    image: "/makaleImg.svg",
  },
  {
    number: "4",
    name: "Sunum",
    image: "/sunumImg.svg",
  },
];

export default function Count() {
  return (
    <Box
      sx={{
        mt: "100px",
        display: "flex",
        borderRadius: "30px",
        padding: "30px",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      {countInfo.map((count, index) => (
        <Box
          sx={{
            display: "flex",
            px: "50px",
          }}
          key={index}
        >
          <Typography
            sx={{
              fontSize: "80px",
              mr: "50px",
            }}
            variant="h1"
          >
            {count.number}
          </Typography>
          <Box
            sx={
              {
                // mx: "50px",
              }
            }
          >
            <Image src={count.image} alt="image" width={75} height={75} />
            <Typography
              sx={{
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              {count.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
