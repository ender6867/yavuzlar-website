import { Box, Grid, Typography } from "@mui/material";
import ProjectSlider from "./ProjectSlider/ProjectSlider";

export const Projects = () => {
  return (
    <Box sx={{ mt: "185px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          gap: "32px",
        }}
      >
        <Typography className="title">Projelerimiz</Typography>

        <Typography sx={{ maxWidth: "90ch" }}>
          Projelerimizi oluştururken, ülkemizin siber güvenlik alanındaki
          istihdamına katkı sağlamak ve farkındalık oluşturmayı hedefliyoruz.
          Geliştirdiğimiz yazılımlar ile siber alanda milli güvenliğimizi, iç ve
          dış tehditlere karşı arttırmayı amaçlıyoruz.
        </Typography>
      </Box>

      <Grid item xs={12} sx={{ mt: "120px" }}>
        <ProjectSlider />
      </Grid>
    </Box>
  );
};
export default Projects;
