"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Count from "./Count/Count";

const countInfo = [
  {
    number: "37",
    name: "Üye",
    image: "/team.png",
  },
  {
    number: "4",
    name: "Proje",
    image: "/projects.png",
  },
  {
    number: "39",
    name: "Makale",
    image: "/article.png",
  },
  {
    number: "57",
    name: "Sunum",
    image: "/presentation.png",
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{ mt: "185px", position: "relative" }}
      className="about"
    >
      <div className="gradientAbout" />
      <Box>
        <Typography className="title">Neler Yapıyoruz?</Typography>

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
            Takım içi sunumlar ve görevler ile kişisel gelişim ve takım
            çalışmalarını artırıyor, edindiğimiz bilgi ve tecrübelerimizi
            pratiğe dökerek projeler geliştiriyoruz. <br />
            <br />
            Siber Güvenlik ve Yazılım alanlarındaki bilgi ve deneyimlerimizi,
            makaleler ve blog yazıları aracılığıyla paylaşarak, sektöre katkıda
            bulunuyoruz. <br />
            <br />
            Yaptığımız Web Uygulama Güvenliği Laboratuvarı projemiz{" "}
            <a
              href="https://github.com/Yavuzlar/VulnLab"
              target="_blank"
              style={{ color: "#73CD07" }}
            >
              VulnLab
            </a>{" "}
            ile{" "}
            <a
              href="https://www.blackhat.com/"
              target="_blank"
              style={{ color: "#73CD07" }}
            >
              Blackhat
            </a>{" "}
            konferansına katılım sağladık.
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          p: "40px",
          mt: "120px",

          borderRadius: "20px",

          backgroundColor: "transparent",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",

          border: "1px solid transparent",
          "&:hover": {
            border: "1px solid #8AE819",
          },
        }}
      >
        <Grid container spacing={2.5}>
          {countInfo.map((count, index) => (
            <Grid key={index} item xs={12} sm={6} md>
              <Count {...count} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default About;
