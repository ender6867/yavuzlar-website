
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { Container} from "@mui/material";
import Footer from "@/components/Footer/Footer";
import ThemeComponent from "@/components/ThemeComponent/ThemeComponent";

// export const metadata = {
//   title: "Siber Yavuzlar",
//   description: "Siber Yavuzlar Web Güvenliği ve Yazılım Takımı",
// };

export default function RootLayout({ children }) {

  return (
    <html lang="en">
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
