"use client";
// import * as React from "react";
// import Link from "next/link";
// import navbarLogo from "../../../public/navbarLogo.png";
// import menuButton from "../../../public/menuButton.svg";
// import "@/app/globals.css";
// import Image from "next/image";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   AppBar,
//   Toolbar,
//   Menu,
//   MenuItem,
//   MenuIcon,
//   IconButton,
//   Typography,
//   Stack,
//   Select,
//   Option,
// } from "@mui/material";

// export default function Navbar() {
//   const navTabs = [
//     {
//       id: "1",
//       title: "Anasayfa",
//       path: "/",
//     },
//     {
//       id: "2",
//       title: "Book",
//       path: "https://book.siberyavuzlar.com/",
//     },
//   ];

//   const [value, setValue] = React.useState(1);
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{ background: "transparent", boxShadow: "none" }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar
//           disableGutters
//           sx={{ display: "flex", justifyContent: "space-between" }}
//         >
//           <Grid container>
//             <Grid item xs={12} sm={8} md={6}>
//               <Box>
//                 <IconButton color="inherit" aria-label="logo">
//                   <Image
//                     alt="image"
//                     src={navbarLogo}
//                     style={{ height: "62px", width: "auto" }}
//                   />
//                 </IconButton>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={4} md={6}>
//               <Box
//                 sx={{ display: { xs: "none", md: "flex" } }}
//                 justifyContent="space-between"
//               >
//                 <Stack direction="row" spacing={2}>
//                   {navTabs.map((navTab) => (
//                     <Link sx={{}} href={navTab.path} textDecoration="none">
//                       {navTab.title}
//                     </Link>
//                   ))}
//                   <Image src="/trFlag.svg" width={50} height={50} />

//                   <Select
//                     defaultValue={"Türkçe"}
//                     value={value}
//                     onChange={(_, newValue) => setValue(newValue)}
//                   >
//                     <Option value={1}>Türkçe</Option>
//                     <Option value={2}>İngilizce</Option>
//                   </Select>
//                 </Stack>
//               </Box>
//             </Grid>
//             <Box sx={{ display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <Image src={menuButton} width={30} height={30} />
//               </IconButton>

//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {navTabs.map((navTab) => (
//                   <MenuItem key={navTab.id} onClick={handleCloseNavMenu}>
//                     <Link href={navTab.path} textAlign="center">
//                       {navTab.title}
//                     </Link>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Grid>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
import { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import ScrollToTop from "react-scroll-to-top";

import Image from "next/image";
import Link from "next/link";
import navbarLogo from "../../../public/navbar-logo.png";
import LanguageSelect from "./language/language";
import { Menu as MenuIcon } from "@mui/icons-material";

const navTabs = [
  {
    id: "1",
    title: "Anasayfa",
    path: "/",
  },
  {
    id: "2",
    title: "Book",
    path: "https://book.siberyavuzlar.com/",
  },
];
export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl" sx={{ mx: "auto" }}>
        <Toolbar
          // disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link href="/">
            <Image
              alt="image"
              src={navbarLogo}
              style={{ height: "62px", width: "auto" }}
            />
          </Link>
          <Stack>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navTabs.map((navTab) => (
                  <MenuItem key={navTab.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{navTab.title}</Typography>
                  </MenuItem>
                ))}
                <LanguageSelect />
              </Menu>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navTabs.map((navTab) => (
                <Link href={navTab.path} key={navTab.id}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {navTab.title}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <LanguageSelect />
            </Box>
          </Stack>
        </Toolbar>
        <ScrollToTop smooth color="green" />
      </Container>
    </AppBar>
  );
}
