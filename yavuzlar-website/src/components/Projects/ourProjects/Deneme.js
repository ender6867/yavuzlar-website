import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../app/globals.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
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

export default function DenemeP() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 25,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {projects.map((project) => (
        <SwiperSlide
          style={{ width: "300px !important" }}
          className="swiper-slide"
        >
          <Card
            sx={{
              width: "100%",
              // maxWidth: "500px",
              borderRadius: "30px",
              backgroundColor: "transparent",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
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
                  sx={{
                    mt: "10px",
                    textAlign: "center",
                    maxWidth: "40ch",
                  }}
                  variant="body2"
                  color="white"
                >
                  {project.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
      {/* <Box className="slider-controler">
        <Box className="swiper-button-prev slider-arrow" />
        <Box className="swiper-button-next slider-arrow" />
        <Box sx={{ border: "1px solid white" }} className="swiper-pagination" />
      </Box> */}
    </Swiper>
  );
}
