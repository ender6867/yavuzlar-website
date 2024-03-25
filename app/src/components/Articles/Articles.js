import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
    <Box sx={{ mt: "120px" }}>
      <Box>
        <Typography className="title">Son Yazılarımız</Typography>
      </Box>

      <Grid container spacing={2.5} sx={{ mt: '16px' }}>
        {articles.map((article) => (
          <Grid
            key={article.id}
            item
            xs={12}
          >
            <Link href={article.path} style={{ width: '100%' }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pl: "32px",
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
                <Box sx={{ overflow: "hidden", display: 'flex', alignItems: 'center', gap: '32px' }}>
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
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    width: '320px',
                    height: '100%',
                    clipPath: "polygon(25% 0, 100% 0%, 100% 100%, 0% 100%)"
                  }}
                >
                  <img
                    alt="image"
                    src={article.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Articles;
