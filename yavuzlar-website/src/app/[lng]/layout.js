import { dir } from "i18next";
import "./globals.css";
import Footer from "../../components/footer/Footer";
import { Container } from "@mui/material";
import ThemeComponent from "../../components/layout/themeComponent";
import Navbar from "../../components/navbar/Navbar";

export const metadata = {
  title: "Siber Yavuzlar",
  description: "Siber Yavuzlar WEB Güvenliği Takımı",
};

const languages = ["en", "tr"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
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
