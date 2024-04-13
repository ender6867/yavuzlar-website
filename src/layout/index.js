
import { Container } from "@mui/material";
import Navbar from "@/layout/components/Navbar";
import Footer from "@/layout/components/Footer";
import ThemeComponent from "@/layout/components/ThemeComponent";

const Layout = ({ children }) => {
    return (
        <ThemeComponent>
            <Container maxWidth="mdlg">
                <Navbar />
            </Container>

            <Container maxWidth="mdlg">{children}</Container>

            <Container maxWidth="mdlg">
                <Footer />
            </Container>
        </ThemeComponent>
    )
}

export default Layout