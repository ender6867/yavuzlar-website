import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

export default function OneCard({ imgPath, title, description }) {
  return (
    <Box
      sx={{
        mt: "250px",
        width: "500px",
        height: "500px",
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "all 1.5s ease",
        "&:hover": {
          transform: "rotateY(180deg)",
        },
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          border: "2px solid #8AE819",
          borderRadius: "30px",
          alignItems: "center",
          textAlign: "center",
          position: "absolute",
          backfaceVisibility: "hidden",
        }}
      >
        <CardContent
          sx={{
            py: "80px !important",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mb: "80px",
            }}
          >
            <CardMedia
              sx={{
                width: "auto",
                height: "180px",
                maxHeight: "200px",
              }}
              component="img"
              // width="auto"
              // height="485"
              image={imgPath}
            />
          </Box>
          <Typography color="white" variant="h3">
            {title}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          border: "2px solid #8AE819",
          borderRadius: "30px",
          alignItems: "center",
          textAlign: "center",
          position: "absolute",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            color="white"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
