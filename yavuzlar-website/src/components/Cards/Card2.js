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
import FlipCard from "./flipCard";

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

export default function Card2() {
  return (
    <Box>
      <Grid container spacing={8}>
        {cards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            {/* <OneCard {...card} /> */}
            <FlipCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
