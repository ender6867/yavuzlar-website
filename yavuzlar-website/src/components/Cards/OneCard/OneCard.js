import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export const OneCard = ({ imgPath, title, description }) => {
  return (
    <Grid container sx={{ mt: { xs: "200px", md: "300px" } }}>
      <Grid
        item
        xs={12}
        sx={{
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
            "&:hover": {
              border: "2px solid #8AE819",
            },
            borderRadius: "30px",
            alignItems: "center",
            textAlign: "center",
            position: "absolute",
            backfaceVisibility: "hidden",
            backgroundColor: "transparent",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <CardContent
            sx={{
              mt: "70px",
              mb: "70px",
              py: "30px !important",
              justifyContent: "center",
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
            backgroundColor: "transparent",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
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
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography color="#73CD07" variant="h3">
              {title}
            </Typography>
            <Typography
              sx={{
                mt: "30px",
                width: "100%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              color="white"
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default OneCard;
