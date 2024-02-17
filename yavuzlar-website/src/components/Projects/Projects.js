import * as React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import OurProjects from "./ourProjects/ourProjects";
import "../../app/globals.css";

export default function Projects() {
  return (
    <Box>
      <Stack
        spacing={4}
        sx={{
          mt: "80px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography className="animatedTitle">Projelerimiz</Typography>
        <Typography sx={{ maxWidth: "90ch" }}>
          Projelerimizi oluştururken, ülkemizin siber güvenlik alanındaki
          istihdamına katkı sağlamak ve farkındalık oluşturmayı hedefliyoruz.
          Geliştirdiğimiz yazılımlar ile siber alanda milli güvenliğimizi, iç ve
          dış tehditlere karşı arttırmayı amaçlıyoruz.
        </Typography>
      </Stack>
      <Box sx={{ mb: "40px" }}>
        <OurProjects />
      </Box>
    </Box>
  );
}
