"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../../app/globals.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Container,
  Divider,
  MobileStepper,
  useTheme,
  Button,
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

  // MOBILE STEPPER
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // END OF THE MOBILE STEPPER
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
                  // transform: `${
                  //   selectedId === project.id ? "scale(1.1)" : "scale(1)"
                  // }`,
                  // transition: "transform 1s ease-in-out",
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
                      className="animatedTitle"
                      sx={{
                        mt: "20px",
                        textAlign: "center",
                      }}
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
      <Box>
        <MobileStepper
          variant="dots"
          steps={3}
          color="green"
          position="static"
          activeStep={activeStep}
          sx={{
            maxWidth: "400",
            flexGrow: "1",
            backgroundColor: "transparent",
            color: "green",
            border: "1px solid green",
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 2}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
          }
        />
      </Box>
    </Container>
  );
}
