"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "VulnLab",
    description:
      "Web zafiyetlerinin uygulamalı olarak öğrenilebileceği web uygulama güvenliği laboratuvar ortamıdır.",
    image: "/vulnlab.png",
    gitImg: "/gitHub.svg",
    path: "http://yavuzlar.org/vulnlab",
  },
  {
    id: "2",
    title: "CodeInLab",
    description:
      "Yazılım dillerini pratik bir şekilde deneyimleyebilecekleri ve yazılım geliştirme becerilerini geliştirebilecekleri laboratuvar ortamıdır.",
    image: "/logo.png",
    gitImg: "/coming-soon3.png",
    path: "",
  },
  {
    id: "3",
    title: "CTFGo",
    description:
      "CTFgo, Go programlama dili ile geliştirilen Capture The Flag (CTF) platformudur.",
    image: "/ctfgo.png",
    gitImg: "/coming-soon3.png",
    path: "",
  },
  {
    id: "4",
    title: "VulnWeb",
    description:
      "Web uygulama güvenliği zafiyetlerinin pratiğinin yapılabileceği gerçek bir website simülasyon laboratuvarı.",
    image: "/logo.png",
    gitImg: "/coming-soon3.png",
    path: "",
  },
];

export default function OurProjects() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [activeSlide, setActiveSlide] = useState(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .swiper": {
          width: "100%",
          pb: "40px"
        },
        "& .swiper-wrapper": {
          // width: "100%",
          // transform: "translateX(0px) !important",
          // justifyContent: "center",
        },
        "& .swiper-slide": {
          // width: "100% !important",
          // maxWidth: "400px",
        },


        "& .swiper-pagination-bullet": {
          width: "24px",
          height: "24px",
          textAlign: "center",
          fontSize: "14px",
          lineHeight: "24px",
          color: "#fff",
          opacity: 1,
          border: "1px solid rgba(115, 205, 7, 1)",
          // background: "rgba(115, 205, 7, 0.4)",
        },

        "& .swiper-pagination": {
          position: "relative",
          mt: "16px",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          padding: "2px 40px",
          gap: "4px",
        },

        "& .swiper-pagination-bullet-active": {
          color: "#fff",
          border: "1px solid #73CD07",
          background: "rgba(115, 205, 7, 0.5)",
        },

        "& .slider-controller": {
          ...(
            isMobile ? {
              position: "absolute",
              width: "100%",
              mt: projects?.length > 7 ? "-32px" : "-24px",
            } : {}
          )
        }
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={isMobile ? 1 : 3}
        initialSlide={0}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        // pagination={{
        //   el: ".swiper-pagination",
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        pagination={pagination}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={(swiperCore) => {
          const {
            realIndex,
          } = swiperCore;

          setActiveSlide(realIndex);
        }}
      >
        {projects.map((project, index) => {
          // let mtValue = project.gitImg.startsWith("/coming") ? "53px" : "0px";
          let mtValue;

          isMobile
            ? (mtValue = project.gitImg.startsWith("/coming") ? "35px" : "0px")
            : (mtValue = project.gitImg.startsWith("/coming") ? "53px" : "0px");

          let hwValue = isMobile ? "40" : "60";

          let isSlideActive = (activeSlide == index) || (activeSlide == 0 ? index == 3 || index == 1 : activeSlide == projects.length - 1 ? index == 2 || index == 0 : index == activeSlide + 1 || index == activeSlide - 1)

          return (
            <SwiperSlide key={project.id} className="swiper-slide">
              <Card
                sx={{
                  display: isSlideActive ? "block" : "none",
                  width: "100%",
                  height: isMobile ? "480px" : "580px",
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
                    {project.path ? (
                      <Link
                        href={project.path}
                        target="_blank"
                        style={{
                          marginTop: mtValue,
                          position: "absolute",
                          right: "10%",
                        }}
                      >
                        <img
                          src={project.gitImg}
                          alt="image"
                          height={hwValue}
                          width={hwValue}
                        />
                      </Link>
                    ) : (
                      <img
                        src={project.gitImg}
                        alt="image"
                        height={hwValue}
                        width={hwValue}
                        style={{
                          marginTop: mtValue,
                          position: "absolute",
                          right: "10%",
                        }}
                      />
                    )}

                    <Box sx={{ width: "100%" }}>
                      <Divider />
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                  >
                    <Typography
                      className="title"
                      style={{
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
          );
        })}

        <Box className="slider-controller">
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
    </Box>
  );
}
