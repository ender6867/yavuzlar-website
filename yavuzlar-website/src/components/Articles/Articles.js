import { Box, Stack, Typography, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: "1",
    title: "Front-end Teknolojiler-1",
    path: "abcd-1",
    // image: "/articlesImg.png",
    image: "/deneme.jpg",
    logo: "/yavuzlarHorse.png",
  },
  {
    id: "2",
    title: "Front-end Teknolojileri-2",
    path: "abcd-2",
    image: "/articlesImg.png",
    logo: "/yavuzlarHorse.png",
  },
  {
    id: "3",
    title: "Front-end Teknolojiler-3",
    path: "abcd-3",
    image: "/articlesImg.png",
    logo: "/yavuzlarHorse.png",
  },
];

export default function Articles() {
  return (
    <Box
      sx={{
        mt: "85px",
      }}
    >
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography className="title">Son Yazılarımız</Typography>
        </Grid>

        {articles.map((article) => (
          <Grid
            item
            xs={12}
            md={10}
            sx={{
              mt: "30px",
              border: "0.3px solid green",
              borderRadius: "30px",
              height: "80px",
              backgroundColor: "transparent",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Link href={article.path} key={article.id}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Box
                  sx={{
                    mt: "15px",
                    ml: "30px",
                    overflow: "hidden",
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    direction="row"
                    spacing={5}
                  >
                    <Image
                      alt="logo"
                      src={article.logo}
                      width={55}
                      height={50}
                    />
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        overflow: "hidden",
                      }}
                      variant="h5"
                    >
                      {article.title}
                    </Typography>
                  </Stack>
                </Box>
                <Box id="deneme">
                  <Image
                    id="denemeImg"
                    alt="image"
                    src={article.image}
                    width={318}
                    height={80}
                  />
                </Box>
              </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
