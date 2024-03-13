import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Count = ({ number, name, image }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={8}
        md={3}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: "120px" }}>{number}</Typography>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ml: "30px",
          }}
        >
          <Image src={image} alt="image" width={75} height={75} />
          <Typography
            sx={{
              alignItems: "center",
              justifyContent: "center",
              fontSize: "35px",
            }}
          >
            {name}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Count;
