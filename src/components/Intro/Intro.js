"use client";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";

const scrollToId = (path) => {
  const element = document.getElementById(path);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Intro = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ height: "100%" }}>
      <div className="gradientIntro" />

      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flex: "1",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", ...(isMobile ? { mt: "180px" } : null) }}
            variant="h3"
          >
            <a
              href="https://sibervatan.org/"
              target="_blank"
              style={{ color: "#73CD07" }}
            >
              Siber Vatan
            </a>{" "}
            <span>için Beraber Çalışalım</span>
          </Typography>
          <Typography sx={{ maxWidth: "70ch", mt: "75px" }}>
            Yavuzlar Web Güvenliği ve Yazılım Takımı,{" "}
            <a
              href="https://sibervatan.org/"
              target="_blank"
              style={{ color: "#73CD07" }}
            >
              Siber Vatan
            </a>{" "}
            programı kapsamında kurulan, web güvenliği ve yazılım geliştirme
            odaklı çalışan bir takımdır. Misyonumuz, her bir takım üyesini kendi
            alanında yetkin bir düzeye yükseltmek ve ülkemizin siber güvenlik
            sektöründeki yetenekli insan gücünü, Türkçe kaynakları ve yerli
            projeleri artırmak amacıyla çalışmaktır.
            <br />
            <br /> Siber güvenlik alanındaki bilgi birikimimizi kullanarak
            çalışmakta ve ülkemizi uluslararası düzeyde güvenli bir dijital
            geleceğe taşıma hedefiyle yoğun çaba harcamaktayız.
          </Typography>
          <Button
            sx={{
              width: "330px",
              height: "55px",
              mt: "30px",

              backgroundColor: "transparent",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              color: "#73CD07",

              borderRadius: "20px",
              padding: "15px",
              fontSize: "18px",

              border: "1px solid transparent",
              "&:hover": {
                border: "1px solid #73CD07",
              },
            }}
            onClick={() => scrollToId("about")}
          >
            Neler Yapıyoruz?
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <img
            alt="image"
            src="/logo.png"
            style={{
              height: "auto",
              width: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Intro;
