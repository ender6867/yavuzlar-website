"use client";
import * as React from "react";
import Link from "next/link";
import headerLogo from "../../../public/headerLogo.png";
// import Links from "./links/Links";
import "@/app/globals.css";
import Image from "next/image";
import { Box, Button, Container } from "@mui/material";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import { Select, Option } from "@mui/base";
export default function Navbar() {
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
  const [value, setValue] = React.useState(1);
  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton color="inherit" aria-label="logo">
              <Image
                alt="image"
                src={headerLogo}
                style={{ height: "62px", width: "auto" }}
              />
            </IconButton>
          </Box>
          <Box justifyContent="space-between">
            <Stack direction="row" spacing={2}>
              {navTabs.map((navTab) => (
                <Link sx={{}} href={navTab.path} textDecoration="none">
                  {navTab.title}
                </Link>
              ))}
              <Image src="/trFlag.svg" width={50} height={50} />

              <Select
                defaultValue={"Türkçe"}
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
              >
                <Option value={1}>Türkçe</Option>
                <Option value={2}>İngilizce</Option>
              </Select>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// <Box sx={{}}>
//   <Container maxWidth="xl">
//     <Box>
//       <Link id="headerLogo" href="/">
//         <Image
//           alt="image"
//           src={headerLogo}
//           style={{ height: "62px", width: "auto" }}
//           width={250}
//           height={62}
//         />
//       </Link>

//       <menu>
//         <div>
//           <Links />
//         </div>
//       </menu>
//     </Box>
//   </Container>
// </Box>
