import { Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

const articles = [
  {
    id: "1",
    title: "Docker Escape",
    path: "https://book.siberyavuzlar.com/privileged/docker-escape",

    image: "/docker.png",
    logo: "/logo.png",
  },
  {
    id: "2",
    title: "Güvenli Kodlama (Secure Coding)",
    path: "https://book.siberyavuzlar.com/yazilim/guvenli-kodlama-secure-coding",
    image: "/articlesImg.png",
    logo: "/logo.png",
  },
  {
    id: "3",
    title: "Sanal Özel Ağlar (VPN)",
    path: "https://book.siberyavuzlar.com/ag-guevenligi-ve-gizliligi/vpn",
    image: "/articlesImg.png",
    logo: "/logo.png",
  },
  {
    id: "4",
    title: "Nmap",
    path: "https://book.siberyavuzlar.com/araclar/nmap",
    image: "/articlesImg.png",
    logo: "/logo.png",
  },
  {
    id: "5",
    title: "Two Factor Authentication Bypass",
    path: "https://book.siberyavuzlar.com/web-guevenligi/two-factor-authentication-bypass",
    image: "/articlesImg.png",
    logo: "/logo.png",
  },
];

export const Articles = () => {
  return (
    <Grid
      id="articles"
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
          <Link href={article.path} target="_blank" style={{ width: "100%" }}>
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
                <img
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
                <img
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
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
export default Articles;
