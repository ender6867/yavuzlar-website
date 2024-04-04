import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const articles = [
  {
    id: "1",
    title: "Front-end Teknolojileri Mahmut BEYAZGÜL ",
    path: "abcd-1",

    image: "/deneme.jpg",
    logo: "/logo.png",
  },
  {
    id: "2",
    title: "React Hooks",
    path: "abcd-2",
    image: "/articlesImg.png",
    logo: "/logo.png",
  },
  {
    id: "3",
    title: "Broken Access Control",
    path: "abcd-3",
    image: "/articlesImg.png",
    logo: "/logo.png",
  },
];

export const Articles = () => {
  return (
    <Grid
      container
      spacing={2.5}
      justifyContent={"center"}
      sx={{ mt: "120px", position: "relative" }}
    >
      <div className="gradientArticles" />
      <Grid item xs={12}>
        <Typography className="title">Son Yazılarımız</Typography>
      </Grid>

      {articles.map((article) => (
        <Grid item xs={12} key={article.id}>
          <Link href={article.path} style={{ width: "100%" }}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pl: { xs: "32px", sm: "32px", md: "32px" },
                width: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                height: "80px",

                backgroundColor: "transparent",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",

                border: "1px solid transparent",
                "&:hover": {
                  border: "1px solid #73CD07",
                },
              }}
            >
              <Stack
                direction="row"
                sx={{
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  gap: "32px",
                }}
              >
                <Image
                  src={article.logo}
                  alt="article-logo-image"
                  width={55}
                  height={50}
                />
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    overflow: "hidden",
                    // fontSize: "16px",
                  }}
                  variant="h5"
                >
                  {article.title}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: { xs: "none", sm: "flex", md: "flex" },
                  width: "320px",
                  height: "100%",
                  clipPath: "polygon(25% 0, 100% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={article.image}
                  alt="articles-images"
                  width={318}
                  height={80}
                />
              </Stack>
            </Grid>

            {/* <Stack
              direction="row"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  ml: "30px",
                  // overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                  }}
                  direction="row"
                  spacing={3}
                >
                  <Image alt="logo" src={article.logo} width={55} height={50} />
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
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <Image
                  alt="image"
                  src={article.image}
                  width={318}
                  height={80}
                />
              </Box>
            </Stack> */}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
export default Articles;
