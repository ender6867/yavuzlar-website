
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import ThemeComponent from "@/components/ThemeComponent/ThemeComponent";

export const metadata = {
  title: "Yavuzlar",
  description: "Yavuzlar Web Güvenliği ve Yazılım Takımı",
  icons: {
    icon: '/yavuzlar-logo-siyah-stroke-kare.png',
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" translate="no">
      <body>
        <ThemeComponent>
          <Container maxWidth="mdlg">
            <Navbar />
          </Container>

          <Container maxWidth="mdlg">{children}</Container>

          <Container maxWidth="mdlg">
            <Footer />
          </Container>
        </ThemeComponent>
      </body>
    </html>
  );
}
