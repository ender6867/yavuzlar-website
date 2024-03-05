import { Grid, Box } from "@mui/material";
import OneCard from "./OneCard/OneCard";

const cards = [
  {
    imgPath: "/innovative.png",
    title: "Yenilikçi Projeler",
    description:
      "Bilgi birikimimizi ve tecrübelerimizi yenilikçi projeler üreterek değerlendiriyoruz.",
  },
  {
    imgPath: "/laptop.png",
    title: "Takım İçi Eğitimler",
    description:
      "Tecrübelerimizi tüm takıma aktarabilmek için takım içi eğitimler düzenliyoruz.",
  },
  {
    imgPath: "/rocket.png",
    title: "Dikey Uzmanlaşma",
    description: "Web Güvenliği alanında emin adımlarla ilerliyoruz.",
  },
];

export default function Cards() {
  return (
    <Box>
      <Grid container spacing={8}>
        {cards.map((card, index) => (
          <Grid item sx={{ display: "flex" }} xs={12} md={4} key={index}>
            <OneCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
