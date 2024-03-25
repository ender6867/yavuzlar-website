import { Box, Grid, Stack, Typography } from "@mui/material";
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
    <Box sx={{ mt: "185px" }} className="about">
      <Box>
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

          <Typography sx={{ maxWidth: "90ch" }}>
            Ülkemizde web güvenliği alanında ihtiyaç duyulan yetişmiş uzman
            ihtiyacının karşılanmasına katkı sağlamak amacıyla Web Güvenliği
            Uzmanı yetiştirmeyi ilke edinmiştir. Takım üyelerini geliştirmek ve
            ülkemizin siber güvenlik sektöründeki yerli ürün yelpazesini
            geliştirmek amacıyla çeşitli projeler yürütülmektedir.
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          p: "40px",
          mt: "120px",

          borderRadius: "30px",

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
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md
            >
              <Count {...count} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default About;
