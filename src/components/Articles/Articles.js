import { Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

const articles = [
  {
    id: "1",
    title: "IoT Güvenliği Nedir?",
    path: "https://docs.yavuzlar.org/diger/iot-security",
    image: "https://docs.yavuzlar.org/~gitbook/image?url=https:%2F%2F10693534-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FpHJ8OuTO6xpfwqkn7vmg%252Fuploads%252Fgit-blob-0957f77fc645bf9768b4c8c4c4bbf4edb499dd38%252Fiot2-768x432.png%3Falt=media&width=768&dpr=1&quality=100&sign=de74e3313297b4649aefa40d3a44b39420cc4a28da3006815cf4775b1c06c73c",
    logo: "/logo.png",
  },
  {
    id: "2",
    title: "SSH",
    path: "https://docs.yavuzlar.org/~gitbook/image?url=https:%2F%2F10693534-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FpHJ8OuTO6xpfwqkn7vmg%252Fuploads%252Fgit-blob-2c30a46aee51171fc9062b60a47a1e99f0796eb0%252Fssh_cover.jpeg%3Falt=media&width=768&dpr=1&quality=100&sign=ceb4fcfe57c2d005c42247ebd8229ea2a0d53cc6a59db6aa9a35647d1791e26a",
    image: "/docker.png",
    logo: "/logo.png",
  },
  {
    id: "3",
    title: "Docker Escape",
    path: "https://docs.yavuzlar.org/privileged/docker-escape",

    image: "/docker.png",
    logo: "/logo.png",
  },
  {
    id: "4",
    title: "Güvenli Kodlama (Secure Coding)",
    path: "https://docs.yavuzlar.org/yazilim/guvenli-kodlama-secure-coding",
    image: "/secure_coding_4.png",
    logo: "/logo.png",
  },
  {
    id: "5",
    title: "Sanal Özel Ağlar (VPN)",
    path: "https://docs.yavuzlar.org/ag-guevenligi-ve-gizliligi/vpn",
    image: "/vpn.jpg",
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
