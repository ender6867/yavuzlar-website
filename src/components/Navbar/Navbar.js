"use client";
import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import navbarLogo from "../../../public/navbar-logo.png";
import { IconButton, ListItemButton } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

const drawerWidth = 240;

const navItems = [
  {
    id: "1",
    title: "Projelerimiz",
    path: "projects",
  },
  {
    id: "2",
    title: "Yazılarımız",
    path: "https://book.siberyavuzlar.com/",
  },
  {
    id: "3",
    title: "İletişim",
    path: "contact",
  },
];

const developers = () => {
  console.log(
    `This website is designed by %cBerru AYTEKİN%c,
  Front-end is developed by %cMahmut BEYAZGÜL%c,
  Back-end is developed by %cYusuf KÜÇÜKGÖKGÖZOĞLU%c,
  Thanks to %cMehmet Özler ÇELİK%c, %cTayfun ÜRKUT%c, %cEmre ARIKAN%c and %cResul ÇELİK%c for their support.
  `,
    "color: #73CD07;",
    "color: unset;",
    "color: #73CD07;",
    "color: unset;",
    "color: #73CD07;",
    "color: unset;",
    "color: #f00;",
    "color: unset;",
    "color: #f00;",
    "color: unset;",
    "color: #f00;",
    "color: unset;",
    "color: #f00;",
    "color: unset;"
  );
};

const Navbar = (props) => {
  useEffect(() => {
    developers();
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToId = (path) => {
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: 'start'});
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        YAVUZLAR
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            {item.path.startsWith("http") ? (
              <ListItemButton
                sx={{ textAlign: "center" }}
                href={item.path}
                target="_blank"
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            ) : (
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => scrollToId(item.path)}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
        {/* <LanguageSelect /> */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Fragment>
      <Box
        sx={{
          background: "transparent",
          boxShadow: "none",
          mt: "15px",
          height: 'auto',
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            px: "0 !important",
            height: "auto",
          }}
        >
          <Link href="/">
            <Image
              src={navbarLogo}
              alt="navbar-image"
              style={{
                height: "62px",
                width: "auto",
                position: "relative",
              }}
            />
          </Link>

          <List sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                },
              }}>
                {item.path.startsWith("http") ? (
                  <ListItemButton
                    sx={{ textAlign: "center", gap: '8px' }}
                    href={item.path}
                    target="_blank"
                  >
                    <OpenInNew />

                    <ListItemText primary={item.title} />
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => scrollToId(item.path)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
            {/* <ListItem><LanguageSelect /></ListItem> */}
          </List>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>

      <Drawer
        anchor="right"
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Fragment>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
