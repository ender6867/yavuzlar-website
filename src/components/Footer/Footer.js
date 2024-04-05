"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { ScrollTop } from "primereact/scrolltop";
import { useEffect, useState } from "react";

const socialMedias = [
  {
    id: "1",
    name: "GitHub",
    logo: "/github.png",
    link: "https://github.com/Yavuzlar",
  },
  {
    id: "2",
    name: "X",
    logo: "/x.png",
    link: "https://x.com/siberyavuzlar",
  },
  {
    id: "3",
    name: "Linkedin",
    logo: "/linkedin.png",
    link: "https://tr.linkedin.com/company/siberyavuzlar?trk=public_profile_volunteering-position_profile-section-card_full-click",
  },
  {
    id: "4",
    name: "Instagram",
    logo: "/instagram.png",
    link: "https://www.instagram.com/siberyavuzlar",
  },
  {
    id: "5",
    name: "Threads",
    logo: "/threads.png",
    link: "https://www.threads.net/@siberyavuzlar",
  },
];

export const Footer = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    setPageHeight(document.documentElement.scrollHeight - document.documentElement.clientHeight);

    window.addEventListener("scroll", () => {
      setScrollTop(document.documentElement.scrollTop);

      console.log("scrollTop", document.documentElement.scrollTop, document.documentElement.scrollHeight - document.documentElement.clientHeight);
    });

  }, []);

  return (
    <Box sx={{ py: '40px' }}>
      <Grid
        container
        spacing={5}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/footer-logo.png"
            alt="footer-image"
            width={350}
            height={75}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>
            {new Date().getFullYear() != 2020 ? " 2020 -" : null}{" "}
            {new Date().getFullYear()} © Yavuzlar Web Güvenliği ve Yazılım
            Takımı
          </Typography>

          <Box>
            {socialMedias.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                style={{ marginLeft: "30px" }}
              >
                <img
                  alt="social-images"
                  src={social.logo}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </Box>

          <ScrollTop
            style={{
              backgroundColor: "rgba(115, 205, 7, 0.6)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              color: "white",
              transition: "transform 0.2s",
              "&:hover button": {
                backgroundColor: "#f00",
              },
              ...(
                scrollTop >= pageHeight - 100
                  ? { transform: isMobile ? "translate(12px, -80px)" : "translateX(12px)" }
                  : { transform: "translate(0, 0)" }
              ),
            }}
            target="window"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
