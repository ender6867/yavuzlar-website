"use client";
import { Grid, useMediaQuery } from "@mui/material";
import OneCard from "./OneCard/OneCard";

const cards = [
  {
    imgPath: "/innovative.png",
    title: "Yenilikçi Projeler",
    description: "Bilgi birikimimizi ve tecrübelerimizi yenilikçi projeler üreterek pekiştiriyoruz.",
    tabImg: "/tab.png",
  },
  {
    imgPath: "/laptop.png",
    title: "Takım İçi Eğitimler",
    description: "Tecrübelerimizi tüm takıma aktarabilmek için takım içi eğitimler düzenliyoruz.",
    tabImg: "/tab.png",
  },
  {
    imgPath: "/rocket.png",
    title: "Dikey Uzmanlaşma",
    description: "Web Güvenliği ve Yazılım alanlarında emin adımlarla ilerliyoruz.",
    tabImg: "/tab.png",
  },
];

export const Cards = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Grid container spacing={8} sx={{ ...(isMobile ? { mt: "150px" } : null) }}>
      {cards.map((card, index) => (
        <Grid item xs={12} md={4} key={index}>
          <OneCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
