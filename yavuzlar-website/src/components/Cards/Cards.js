import {
  Grid,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import OneCard from "./cardComponent";

const cards = [
  {
    imgPath: "/Group5.svg",
    title: "Yenilikçi Projeler",
    description:
      "Bilgi birikimimizi ve tecrübelerimizi yenilikçi projeler üreterek değerlendiriyoruz.",
  },
  {
    imgPath: "/Group6.svg",
    title: "Takım İçi Eğitimler",
    description:
      "Tecrübelerimizi tüm takıma aktarabilmek için takım içi eğitimler düzenliyoruz.",
  },
  {
    imgPath: "/Group7.svg",
    title: "Dikey Uzmanlaşma",
    description: "Web Güvenliği alanında emin adımlarla ilerliyoruz.",
  },
];

export default function Cards() {
  return (
    <Box>
      <Grid container spacing={8}>
        {cards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <OneCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>

    // <Grid container my={4}>
    //   <Grid item>
    //     <Box> Item 1 </Box>
    //   </Grid>
    // </Grid>
    // <Container id="cards">
    //   <Grid container my={4} spacing={2}>
    //     {cards.map((card, index) => (
    //       <Box xs={12} sm={6} md={4} id="one-card" key={index}>
    //         <Image alt="image" src={card.imgPath} width={349} height={485} />
    //         <h1>{card.title}</h1>
    //       </Box>
    //     ))}
    //   </Grid>
    // </Container>
  );
}

// export default function Cards({ imgPath, title }) {
//   return (
//     <li>
//       <Image src={imgPath} alt="image" />
//       <h1>{title}</h1>
//     </li>
//   );
// }
