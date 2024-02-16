"use client";
import React, { useState } from "react";
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
    id: "1",
    title: "VulnLab",
    description:
      "Vulnlab, Web zafiyetlerinin uygulamalı olarak öğrenilebileceği laboratuvar ortamı sağlar..",
    image: "/vulnlabImg.png",
  },
  {
    id: "2",
    title: "BLADIA",
    description:
      "Web uygulama güvenliğinin test edilebileceği, grafiksel arayüze sahip kapsamlı bir araçtır.",
    image: "/bladiaImg.png",
  },
  {
    id: "3",
    title: "CTFGo",
    description:
      "CTFGo, Golang programlama dili ile yazılmış bir CTF platformudur.",
    image: "/ctfGoImg.png",
  },
];

export default function OurProjects() {
  const [selectedId, setSelectedId] = React.useState();

  const handleChangeId = (id) => {
    setSelectedId(id);
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "963px",
      }}
    >
      <Box
        sx={{
          mt: "80px",
        }}
      >
        <Grid container spacing={2}>
          {projects.map((project) => (
            <Grid item xs={12} sm={4} key={project.id}>
              <Card
                sx={{
                  // display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  // flexDirection: "column",
                  width: "500px",
                  // height: "542px",
                  borderRadius: "30px",
                  backgroundColor: "transparent",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: project.id === selectedId ? "1px solid green" : "",
                  zIndex: project.id === selectedId ? "100" : "-100",
                }}
                onClick={() => handleChangeId(project.id)}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      mt: "60px",
                      width: "250px",
                      height: "250px",
                    }}
                  >
                    <CardMedia component="img" image={project.image} />
                  </Box>
                  <Box sx={{ mt: "50px", width: "500px" }}>
                    <Divider
                      sx={{
                        color: "green",
                        maxWidth: "500px",
                      }}
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
                  </Box>

                  {/* <Image
                    src={project.image}
                    alt="image"
                    width={250}
                    height={250}
                  /> */}
                  <Box>
                    <Typography
                      sx={{
                        mt: "20px",
                        color: "#73CD07",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      variant="h5"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{ mt: "10px", textAlign: "center", maxWidth: "40ch" }}
                      variant="body2"
                      color="white"
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
