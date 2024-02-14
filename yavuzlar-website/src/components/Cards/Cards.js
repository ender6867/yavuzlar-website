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

const cards = [
  {
    imgPath: "/Group5.svg",
    title: "Yenilikçi Projeler",
  },
  {
    imgPath: "/Group5.svg",
    title: "Yenilikçi Projeler2",
  },
  {
    imgPath: "/Group5.svg",
    title: "Yenilikçi Projeler3",
  },
];

export default function Cards() {
  return (
    <Box>
      <Grid container spacing={8}>
        {cards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                mt: "50px",
                backgroundColor: "transparent",
                border: "2px solid #8AE819",
                borderRadius: "30px",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <CardContent
                sx={{
                  py: "80px !important",
                }}
              >
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
