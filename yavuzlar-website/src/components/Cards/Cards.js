import {
  Grid,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    imgPath: "/Group5.svg",
    title: "Yenilikçi Projeler",
  },
  {
    imgPath: "/Group6.svg",
    title: "Takım İçi Eğitimler",
  },
  {
    imgPath: "/Group7.svg",
    title: "Dikey Uzmanlaşma",
  },
];

export default function Cards() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box>
      <Grid container spacing={8}>
        {cards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                mt: "250px",
                backgroundColor: "transparent",
                border: "2px solid #8AE819",
                borderRadius: "30px",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 1s",
                "&:hover": {
                  transform: "rotateY(180deg)",
                },
              }}
            >
              <CardContent
                sx={{
                  py: "80px !important",
                }}
              >
                {!isFlipped ? (
                  <>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        mb: "80px",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "auto",
                          height: "180px",
                          maxHeight: "200px",
                        }}
                        component="img"
                        // width="auto"
                        // height="485"
                        image={card.imgPath}
                      />
                    </Box>
                    <Typography color="white" variant="h3">
                      {card.title}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        mb: "80px",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <Typography>ARKA</Typography>
                    </Box>
                  </>
                )}
              </CardContent>
            </Card>
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
