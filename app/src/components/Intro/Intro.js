import { Box, Button, Grid, Typography } from "@mui/material";

export const Intro = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
        spacing={5}
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
          <Typography sx={{ fontWeight: "bold" }} variant="h3">
            <span style={{ color: "#73CD07" }}>Siber Vatan</span>
            {" "}
            <span>için Beraber Çalışalım</span>
          </Typography>

          <Typography sx={{ maxWidth: "58ch", mt: "75px" }}>
            Yavuzlar Takımı, Siber Vatan projesi kapsamında kurulan ve web
            güvenliği odaklı çalışan bir siber güvenlik takımıdır. Misyonumuz, her
            bir takım üyesinin alanında yetkin hale gelmesini sağlamak ve
            ülkemizin siber güvenlik sektöründeki yerli proje sayısını arttırmak
            amacıyla çeşitli projeler yürütmektir.
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

              borderRadius: "15px",
              padding: "15px",
              fontSize: "18px",

              border: "1px solid transparent",
              "&:hover": {
                border: "1px solid #73CD07",
              },
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
