import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import ThemeComponent from "@/components/ThemeComponent/ThemeComponent";
import { BackgroundImages } from "@/components/BackgroundImages/BackgroundImages";

export const metadata = {
  title: "Siber Yavuzlar",
  description: "Siber Yavuzlar WEB Güvenliği Takımı",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeComponent>
          <Container maxWidth="xl">
            <Navbar />
          </Container>
          <Container maxWidth="xl">
            <BackgroundImages>{children}</BackgroundImages>
          </Container>
          <Container maxWidth="xl">
            <Footer />
          </Container>
        </ThemeComponent>
      </body>
    </html>
  );
}
