"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/modules";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from "@mui/material";

const projects = [
  // {
  //   id: "1",
  //   title: "BLADIA",
  //   description:
  //     "Web uygulama güvenliğinin test edilebileceği, grafiksel arayüze sahip kapsamlı bir araçtır.",
  //   image: "/bladia.png",
  // },
  {
    id: "4",
    title: "CodeInLab",
    description:
      "Vulnlab, Web zafiyetlerinin uygulamalı olarak öğrenilebileceği laboratuvar ortamı sağlar..",
    image: "/logo.png",
  },
  {
    id: "2",
    title: "VulnLab",
    description:
      "Vulnlab, Web zafiyetlerinin uygulamalı olarak öğrenilebileceği laboratuvar ortamı sağlar..",
    image: "/vulnlab.png",
  },
  {
    id: "3",
    title: "CTFGo",
    description:
      "CTFGo, Golang programlama dili ile yazılmış bir CTF platformudur.",
    image: "/ctfgo.png",
  },
  {
    id: "5",
    title: "VulnWeb",
    description:
      "Web uygulama güvenliğinin test edilebileceği, grafiksel arayüze sahip kapsamlı bir araçtır.",
    image: "/logo.png",
  },
  // {
  //   id: "6",
  //   title: "CTFGo",
  //   description:
  //     "CTFGo, Golang programlama dili ile yazılmış bir CTF platformudur.",
  //   image: "/ctfgo.png",
  // },
];

export default function OurProjects() {
  const [activeSlide, setActiveSlide] = useState(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={false}
      slidesPerView={2}
      initialSlide={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 20,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      // pagination={{
      //   el: ".swiper-pagination",
      //   clickable: true,
      //   dynamicBullets: true,
      // }}
      // pagination={pagination}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
      onSlideChange={(swiperCore) => {
        const { realIndex } = swiperCore;

        setActiveSlide(realIndex);
      }}
      style={{ maxWidth: "1100px" }}
    >
      {projects.map((project, index) => (
        <SwiperSlide
          key={project.id}
          // style={{ width: "300px !important" }}
          className="swiper-slide"
        >
          <Card
            sx={{
              width: "100%",
              borderRadius: "20px",
              backgroundColor: "transparent",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              filter: activeSlide != index ? "blur(4px)" : "blur(0px)",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                py: "64px !important",
                gap: "40px",
                px: 0,
              }}
            >
              <Box
                sx={{
                  width: { xs: "150px", md: "250px" },
                  height: { xs: "150px", md: "250px" },
                }}
              >
                <CardMedia
                  sx={{ borderRadius: "20px" }}
                  component="img"
                  image={project.image}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",

                  "& .MuiDivider-root": {
                    borderColor: "#73CD07",
                  },
                }}
              >
                <img
                  src={"/gitHub.svg"}
                  alt="image"
                  height={60}
                  width={60}
                  style={{
                    position: "absolute",
                    right: "10%",
                  }}
                />

                <Box sx={{ width: "100%" }}>
                  <Divider />
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography
                  className="title"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  sx={{
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
      <Box className="slider-controler">
        <Box
          sx={{ color: "#73CD07 !important", px: "10px" }}
          className="swiper-button-prev slider-arrow"
        />
        <Box
          sx={{ color: "#73CD07 !important" }}
          className="swiper-button-next slider-arrow"
        />
        {/* <Box className="swiper-pagination" /> */}
      </Box>
    </Swiper>
  );
}
