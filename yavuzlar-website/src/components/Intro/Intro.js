import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Intro = () => {
  return (
    <Grid
      container
      sx={{
        mt: { xs: "20px", sm: "30px", md: "40px" },
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        sx={{
          textAlign: "center",
          flex: "1",
          alignItems: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          mt: "90px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h3"
        >
          <span
            style={{
              color: "#73CD07",
            }}
          >
            Siber Vatan
          </span>
          <span> </span> için Beraber Çalışalım
        </Typography>
        <Typography sx={{ maxWidth: "58ch", mt: "75px" }}>
          Yavuzlar Takımı, Siber Vatan projesi kapsamında kurulan ve web
          güvenliği odaklı çalışan bir siber güvenlik takımıdır. Misyonumuz, her
          bir takım üyesinin alanında yetkin hale gelmesini sağlamak ve
          ülkemizin siber güvenlik sektöründeki yerli proje sayısını arttırmak
          amacıyla çeşitli projeler yürütmektir.
        </Typography>
        <Button
          className="button"
          sx={{
            mt: "30px",
            padding: "15px",
            borderRadius: "15px",
            width: "330px",
            height: "55px",
            backgroundColor: "transparent",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          Hakkımızda
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Image
          alt="image"
          src="/logo.png"
          style={{
            height: "auto",
            width: "auto",
          }}
          width={300}
          height={200}
        />
      </Grid>
    </Grid>
  );
};
export default Intro;
