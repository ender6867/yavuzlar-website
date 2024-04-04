import { Grid } from "@mui/material";
import React from "react";
import OneCard from "./OneCard/OneCard";

const cards = [
  {
    imgPath: "/innovative.png",
    title: "Yenilikçi Projeler",
    description:
      "Bilgi birikimimizi ve tecrübelerimizi yenilikçi projeler üreterek değerlendiriyoruz.",
    tabImg: "/gitHub.svg",
  },
  {
    imgPath: "/laptop.png",
    title: "Takım İçi Eğitimler",
    description:
      "Tecrübelerimizi tüm takıma aktarabilmek için takım içi eğitimler düzenliyoruz.",
    tabImg: "/github.png",
  },
  {
    imgPath: "/rocket.png",
    title: "Dikey Uzmanlaşma",
    description: "Web Güvenliği alanında emin adımlarla ilerliyoruz.",
    tabImg: "/tab.png",
  },
];

export const Cards = () => {
  return (
    <Grid container spacing={8}>
      {cards.map((card, index) => (
        <Grid item xs={12} md={4} key={index}>
          <OneCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
