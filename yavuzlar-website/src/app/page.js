import Image from "next/image";
import "./globals.css";
import Homepage from "./homePage/page";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Homepage />
    </main>
  );
}
