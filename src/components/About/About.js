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

export const About = () => {
  console.log("MAhmut");
  return (
    <Box sx={{ mt: "185px", position: "relative" }} className="about">
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
          {/* <Typography sx={{ maxWidth: "80ch" }}>
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
          </Typography> */}
          <Typography sx={{ maxWidth: "80ch" }}>
            Takım içi sunumlar ve görevler ile kişisel gelişim ve takım
            çalışmalarını artırıyor, edindiğimiz bilgi ve tecrübelerimizi
            pratiğe dökerek projeler geliştiriyoruz. Siber Güvenlik ve Yazılım
            alanlarındaki bilgi ve deneyimlerimizi, makaleler ve blog yazıları
            aracılığıyla paylaşarak, sektöre katkıda bulunuyoruz. Yaptığımız Web
            Uygulama Güvenliği Laboratuvarı projemiz{" "}
            <a
              href="https://github.com/Yavuzlar/VulnLab"
              style={{ color: "#73CD07" }}
            >
              VulnLab
            </a>{" "}
            ile <a href="https://www.blackhat.com/">Blackhat</a> konferansına
            katılma şansı yakaladık.
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

// import { Grid, Stack, Typography } from "@mui/material";
// import React from "react";
// import Count from "./Count/Count";

// const countInfo = [
//   {
//     number: "999",
//     name: "Üye",
//     image: "/team.png",
//   },
//   {
//     number: "6",
//     name: "Proje",
//     image: "/projects.png",
//   },
//   {
//     number: "50",
//     name: "Makale",
//     image: "/article.png",
//   },
//   {
//     number: "100",
//     name: "Sunum",
//     image: "/presentation.png",
//   },
// ];

// export const About = () => {
//   return (
//     <Grid container sx={{ mt: "185px" }} className="about">
//       <Grid item xs={12}>
//         <Typography className="title">Hakkımızda</Typography>
//         <Stack
//           spacing={2}
//           sx={{
//             mt: "30px",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//           }}
//         >
//           <Typography sx={{ maxWidth: "80ch" }}>
//             Yavuzlar; Siber Vatan projesi altında kurulan, web güvenliği, web
//             geliştirme ve siber istihbarat alanlarında çalışan ve projeler
//             üreten bir siber güvenlik takımıdır.
//           </Typography>
//           <Typography
//             sx={{
//               maxWidth: "90ch",
//             }}
//           >
//             Ülkemizde web güvenliği alanında ihtiyaç duyulan yetişmiş uzman
//             ihtiyacının karşılanmasına katkı sağlamak amacıyla Web Güvenliği
//             Uzmanı yetiştirmeyi ilke edinmiştir. Takım üyelerini geliştirmek ve
//             ülkemizin siber güvenlik sektöründeki yerli ürün yelpazesini
//             geliştirmek amacıyla çeşitli projeler yürütülmektedir.
//           </Typography>
//         </Stack>
//       </Grid>
//       <Grid
//         item
//         xs={12}
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", sm: "column", md: "row" },
//           alignItems: "center",
//           justifyContent: "center",
//           mt: "150px",
//           borderRadius: "30px",
//           backgroundColor: "transparent",
//           background: "rgba(255,255,255,0.1)",
//           backdropFilter: "blur(10px)",
//           "&:hover": {
//             border: "1px solid #8AE819",
//           },
//         }}
//       >
//         {countInfo.map((count, index) => (
//           <Grid
//             item
//             xs={12}
//             key={index}
//             sx={{
//               py: "30px",
//             }}
//           >
//             <Count {...count} />
//           </Grid>
//         ))}
//       </Grid>
//     </Grid>
//   );
// };
// export default About;
