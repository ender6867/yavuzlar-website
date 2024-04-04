"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import navbarLogo from "../../../public/navbar-logo.png";
import { Container, FormControl, MenuItem, Select, Stack } from "@mui/material";
import { Language, LanguageSelect } from "./LanguageSelect/LanguageSelect";
import { useRouter } from "next/router";

const drawerWidth = 240;

const navItems = [
  {
    id: "1",
    title: "Anasayfa ",
    path: "/",
  },
  {
    id: "2",
    title: "Neler Yapıyoruz?",
    path: "/",
  },
  {
    id: "3",
    title: "Projelerimiz",
    path: "/",
  },
  {
    id: "4",
    title: "Son Yazılarımız",
    path: "/",
  },
  {
    id: "5",
    title: "Book",
    path: "https://book.siberyavuzlar.com/",
  },
];

export const Navbar = (props) => {
  useEffect(() => {
    console.log(
      `This website is designed by %cBerru AYTEKİN%c,
  Front-end is developed by %cMahmut BEYAZGÜL%c,
  Back-end is developed by %cYusuf KÜÇÜKGÖKGÖZOĞLU%c,
  Thanks to %cMehmet Özler ÇELİK%c, %cEmre ARIKAN%c, %cResulÇELİK%c and %cTayfun ÜRKUT%c for their support.
  `,
      "color: #73CD07;",
      "color: unset;",
      "color: #73CD07;",
      "color: unset;",
      "color: #73CD07;",
      "color: unset;",
      "color: #73CD07;",
      "color: unset;",
      "color: #73CD07;",
      "color: unset;",
      "color: #73CD07;",
      "color: unset;"
    );
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // const router = useRouter();

  // const handleClick = (target) => {
  //   router.push(`#${target}`);
  // };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
            <ListItemButton
              sx={{ textAlign: "center" }}
              href={item.path}
              target={item.title.startsWith("Book") ? "_blank" : ""}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* <LanguageSelect /> */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        component="nav"
        sx={{
          background: "transparent",
          boxShadow: "none",
          mt: "15px",
          px: { xs: "0px", sm: "0px", md: "100px" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "row",
            justifyContent: "space-between",
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
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  href={item.path}
                  target={item.title.startsWith("Book") ? "_blank" : ""}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>{/* <LanguageSelect /> */}</ListItem>
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
      </AppBar>
      <nav>
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
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
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
