import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import ThemeComponent from "@/components/ThemeComponent/ThemeComponent";

export const metadata = {
  title: "Siber Yavuzlar",
  description: "Siber Yavuzlar WEB Güvenliği Takımı",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeComponent>
          <Navbar />
          <Container maxWidth="xl">{children}</Container>
          <Footer />
        </ThemeComponent>
      </body>
    </html>
  );
}
