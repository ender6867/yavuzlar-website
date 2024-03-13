import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Count from "./Count/Count";

const countInfo = [
  {
    number: "1",
    name: "Üye",
    image: "/team.png",
  },
  {
    number: "2",
    name: "Proje",
    image: "/projects.png",
  },
  {
    number: "3",
    name: "Makale",
    image: "/article.png",
  },
  {
    number: "4",
    name: "Sunum",
    image: "/presentation.png",
  },
];

export const About = () => {
  return (
    <Grid container sx={{ mt: "185px" }} className="about">
      <Grid item xs={12}>
        <Typography className="title">Hakkımızda</Typography>
        <Stack
          spacing={2}
          sx={{
            mt: "30px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography sx={{ maxWidth: "80ch" }}>
            Yavuzlar; Siber Vatan projesi altında kurulan, web güvenliği, web
            geliştirme ve siber istihbarat alanlarında çalışan ve projeler
            üreten bir siber güvenlik takımıdır.
          </Typography>
          <Typography
            sx={{
              maxWidth: "90ch",
            }}
          >
            Ülkemizde web güvenliği alanında ihtiyaç duyulan yetişmiş uzman
            ihtiyacının karşılanmasına katkı sağlamak amacıyla Web Güvenliği
            Uzmanı yetiştirmeyi ilke edinmiştir. Takım üyelerini geliştirmek ve
            ülkemizin siber güvenlik sektöründeki yerli ürün yelpazesini
            geliştirmek amacıyla çeşitli projeler yürütülmektedir.
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          mt: "150px",
          borderRadius: "30px",
          backgroundColor: "transparent",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          "&:hover": {
            border: "1px solid #8AE819",
          },
        }}
      >
        {countInfo.map((count, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{
              // px: "100px",
              py: "30px",
            }}
          >
            <Count {...count} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default About;
