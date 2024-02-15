import React from "react";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Container,
  Divider,
} from "@mui/material";

const projects = [
  {
    title: "VulnLab",
    description:
      "Vulnlab, Web zafiyetlerinin uygulamalı olarak öğrenilebileceği laboratuvar ortamı sağlar..",
    image: "/Group5.svg",
  },
  {
    title: "CTFGo",
    description: "Bu proje hakkında kısa bir açıklama.",
    image: "/yavuzlarHorse.svg",
  },
  {
    title: "BLADIA",
    description: "Bu proje hakkında kısa bir açıklama.",
    image: "/vulnLab.svg",
  },
];

export default function OurProjects() {
  return (
    <Container>
      <Box sx={{ mt: "80px" }}>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "500px",
                  height: "542px",
                }}
              >
                <CardContent>
                  <Box>
                    {/* <CardMedia component="img" image={project.image} /> */}
                  </Box>
                  <Image
                    src={project.image}
                    alt="image"
                    width={250}
                    height={250}
                  />
                  <Box>
                    <Divider
                      sx={{ color: "green" }}
                      variant="fullWidth"
                      textAlign="right"
                    >
                      <Image
                        src={"/gitHub.svg"}
                        alt="image"
                        height={60}
                        width={60}
                      />
                    </Divider>
                    <Typography
                      sx={{ color: "green", textAlign: "center" }}
                      variant="h5"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center" }}
                      variant="body2"
                      color="textSecondary"
                    >
                      {project.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
