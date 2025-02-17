import About from "@/components/About/About";
import Articles from "@/components/Articles/Articles";
import Cards from "@/components/Cards/Cards";
import Contact from "@/components/Contact/Contact";
import Intro from "@/components/Intro/Intro";
import Projects from "@/components/Projects/Projects";
import { Grid } from "@mui/material";

export const Homepage = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ height: "calc(100vh - 85px)", position: 'relative', display: 'flex' }}>
        <Intro />
      </Grid>
      <Grid item xs={12}>
        <Cards />
      </Grid>
      <Grid item xs={12}>
        <About />
      </Grid>
      <Grid item xs={12}>
        <Projects />
      </Grid>
      <Grid item xs={12}>
        <Articles />
      </Grid>
      <Grid item xs={12}>
        <Contact />
      </Grid>
    </Grid>
  );
};
export default Homepage;
