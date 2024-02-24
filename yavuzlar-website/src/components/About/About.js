import Image from "next/image";
import securityImg from "../../../public/securityImg.svg";
import countImg from "../../../public/countImg.svg";
import Count from "./countComp/countComp";
import { Box, Typography, Stack, Grid } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";
// import { createTheme, colors, ThemeProvider } from "@mui/material/";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: colors.orange[500],
//     },
//     secondary: {
//       main: "#73CD07",
//     },
//   },
// });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "inline-block",
//     "&:hover $title": {
//       color: theme.palette.secondary.main,
//       transition: "color 0.3 ease",
//     },
//   },
//   title: { transition: "color 0.3 ease" },
// }));
// const AnimatedTitle = ({ childred }) => {
//   const classess = useStyles();
// };
export default function About() {
  return (
    <Grid container>
      <Box
        className="about"
        sx={{
          gap: "20px",
          mt: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Grid item xs={12} md={6}>
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
              Uzmanı yetiştirmeyi ilke edinmiştir. Takım üyelerini geliştirmek
              ve ülkemizin siber güvenlik sektöründeki yerli ürün yelpazesini
              geliştirmek amacıyla çeşitli projeler yürütülmektedir.
            </Typography>
          </Stack>
        </Grid>
        <Count />
      </Box>
    </Grid>
  );
}
