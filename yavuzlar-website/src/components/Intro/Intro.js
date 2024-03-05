import Image from "next/image";
import introLogo from "../../../public/intro-logo.png";
// import "../../app/[lng]/globals.css";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
export default function Intro() {
  return (
    <Box
      sx={{ mt: "200px", gap: "100px", alignItems: "center", height: "100%;" }}
    >
      <Grid container>
        <Grid item xs={12} sm={8} md={7}>
          <Box
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
              <span> </span>
              için Beraber Çalışalım
            </Typography>

            <Typography sx={{ maxWidth: "58ch", mt: "75px" }}>
              Yavuzlar Takımı, Siber Vatan projesi kapsamında kurulan ve web
              güvenliği odaklı çalışan bir siber güvenlik takımıdır. Misyonumuz,
              her bir takım üyesinin alanında yetkin hale gelmesini sağlamak ve
              ülkemizin siber güvenlik sektöründeki yerli proje sayısını
              arttırmak amacıyla çeşitli projeler yürütmektir.
            </Typography>
            <Box>
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
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={5} id="introLogo">
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Image
              alt="image"
              src={introLogo}
              style={{
                height: "500px",
                width: "auto",
                mt: "0px",
                position: "relative",
              }}
              width={600}
              heigth={552.24}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
