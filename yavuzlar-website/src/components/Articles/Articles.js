import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const articles = [
  {
    id: "1",
    title: "Front-end Teknolojileri",
    path: "abcd-1",
    // image: "/articlesImg.png",
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
    <Grid container justifyContent={"center"} sx={{ mt: "235px" }}>
      <Grid item xs={12}>
        <Typography className="title">Son Yazılarımız</Typography>
      </Grid>
      {articles.map((article) => (
        <Grid
          item
          xs={12}
          md={10}
          key={article.id}
          sx={{
            mt: "30px",
            "&:hover": {
              border: "1px solid green",
            },
            borderRadius: "30px",
            height: "80px",
            backgroundColor: "transparent",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link href={article.path}>
            {/* <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  px: "80px",
                }}
              >
                <Stack
                  spacing={5}
                  direction="row"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={article.logo}
                    alt="article-logo-image"
                    width={55}
                    height={50}
                  />
                  <Typography color="#73CD07">{article.title}</Typography>
                </Stack>
              </Stack>
              <Stack sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <Image
                  src={article.image}
                  alt="articles-images"
                  width={318}
                  height={80}
                />
              </Stack>
            </Grid> */}
            <Stack
              // direction="row"
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
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "center",
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
            </Stack>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
export default Articles;
