"use client";
import { Box, Container, Stack, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Animasyonlu olarak kaydırma
  });
};
const socialMedias = [
  {
    id: "1",
    name: "Linkedin",
    logo: "/LinkedInSocialLogo.png",
    link: "https://tr.linkedin.com/company/siberyavuzlar?trk=public_profile_volunteering-position_profile-section-card_full-click",
  },
  {
    id: "2",
    name: "X",
    logo: "/XSocialLogo.png",
    link: "https://twitter.com/siberyavuzlar",
  },
  {
    id: "3",
    name: "Instagram",
    logo: "/InstagramSocialLogo.png",
    link: "https://www.instagram.com/siberyavuzlar",
  },
  {
    id: "4",
    name: "GitHub",
    logo: "/GitHubSocialLogo.png",
    link: "https://github.com/Yavuzlar",
  },
  {
    id: "5",
    name: "Threads",
    logo: "/ThreadsSocialLogo.png",
    link: "https://www.threads.net/@siberyavuzlar",
  },
];

export default function Footer() {
  return (
    <Container>
      <Grid container sx={{ mt: "80px", mb: "50px" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            alt="image"
            src="/yavuzlarFooterImage.png"
            width={350}
            height={75}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mt: "150px",
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">
              © Copyrights 2021 Yavuzlar Web Takımı
            </Typography>
            <Stack direction="row" spacing={3}>
              {socialMedias.map((social) => (
                <Link href={social.link} key={social.id}>
                  <Image alt="image" src={social.logo} width={20} height={20} />
                </Link>
              ))}
              {/* <Button onClick={scrollToTop}>
                <Image src="/upLogo.png" width={40} height={40} />
              </Button> */}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

// <Stack sx={{ justifyContent: "space-between" }} direction="row">
//   <Typography variant="h6">
//     © Copyrights 2021 Yavuzlar Web Takımı
//   </Typography>
//   <Box>
//     <Stack direction="row" spacing={3}>
//       {socialMedias.map((social) => (
//         <Link href={social.link} key={social.id}>
//           <Image src={social.logo} width={20} height={20} />
//         </Link>
//       ))}
//       <Button onClick={scrollToTop}>
//         <Image src="/upLogo.png" width={40} height={40} />
//       </Button>
//     </Stack>
