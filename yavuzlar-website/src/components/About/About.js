import Image from "next/image";
import securityImg from "../../../public/securityImg.svg";
import countImg from "../../../public/countImg.svg";
import Count from "./countComp/countComp";
import { Box, Typography, Stack } from "@mui/material";

export default function About() {
  return (
    <Box
      id="about"
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
      <Typography variant="h2">Hakkımızda</Typography>
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography sx={{ maxWidth: "80ch" }}>
          Yavuzlar; Siber Vatan projesi altında kurulan, web güvenliği, web
          geliştirme ve siber istihbarat alanlarında çalışan ve projeler üreten
          bir siber güvenlik takımıdır.
        </Typography>
        <Typography
          sx={{
            maxWidth: "90ch",
          }}
        >
          Ülkemizde web güvenliği alanında ihtiyaç duyulan yetişmiş uzman
          ihtiyacının karşılanmasına katkı sağlamak amacıyla Web Güvenliği
          Uzmanı yetiştirmeyi ilke edinmiştir. Takım üyelerini geliştirmek ve
          ülkemizin siber güvenlik sektöründeki yerli ürün yelpazesini
          geliştirmek amacıyla çeşitli projeler yürütülmektedir.
        </Typography>
      </Stack>
      <Count />
    </Box>
  );
}
