"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../../../app/globals.css";
import "./script.js";
// import "./Slider.css"; // CSS dosyasını dahil edin
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Divider,
  MobileStepper,
  useTheme,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

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

// const Slider = () => {
//   useEffect(() => {
//     const total = document.querySelectorAll(".slide").length;
//     const sliderWidth = document.querySelector(".slider").offsetWidth;
//     const slides = document.querySelectorAll(".slide");

//     const position = () => {
//       const half = document.querySelector(".active").dataset.index;
//       let sign, x, z, zindex, scaleX, scaleY, transformOrigin;
//       slides.forEach((slide, index) => {
//         scaleX = scaleY = 1;
//         transformOrigin = sliderWidth / 2;
//         if (index < half) {
//           sign = 1;
//           zindex = index + 1;
//           x = sliderWidth / 2 - 120 * (half - index + 1);
//           z = -120 * (half - index + 1);
//         } else if (index > half) {
//           sign = -1;
//           zindex = total - index;
//           x = sliderWidth / 2 + 120 * (index - half + 1);
//           z = -120 * (index - half + 1);
//         } else {
//           sign = 0;
//           zindex = total;
//           x = sliderWidth / 2;
//           z = 1;
//           scaleX = scaleY = 1.2;
//           transformOrigin = "initial";
//         }
//         slide.style.transform = `translate3d(${calculateX(
//           x,
//           sign,
//           300
//         )}px, 0, ${z}px) scale3d(${scaleX}, ${scaleY}, 1)`;
//         slide.style.zIndex = zindex;
//         slide.style.transformOriginX = `${transformOrigin}px`;
//       });
//     };

//     const calculateX = (position, sign, width) => {
//       switch (sign) {
//         case 1:
//         case 0:
//           return position - width / 2;
//         case -1:
//           return position - width / 2;
//         default:
//           return position;
//       }
//     };
//     const clickedImage = () => {
//       document.querySelector(".active").classList.remove("active");
//       this.classList.add("active");
//       position();
//     };

//     const recalculateSizes = () => {
//       position();
//     };

//     window.addEventListener("resize", recalculateSizes);
//     slides.forEach((slide) => slide.addEventListener("click", clickedImage));

//     return () => {
//       window.removeEventListener("resize", recalculateSizes);
//       slides.forEach((slide) =>
//         slide.removeEventListener("click", clickedImage)
//       );
//     };
//   }, []);

//   return (
//     <Box
//       className="slider"
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         width: "963px",
//       }}
//     >
//       <Box
//         className="slide"
//         sx={{
//           mt: "80px",
//         }}
//       >
//         <Grid container spacing={2}>
//           {projects.map((project) => (
//             <Grid item xs={12} sm={4} key={project.id}>
//               <Card
//                 sx={{
//                   // display: "flex",
//                   // alignItems: "center",
//                   // justifyContent: "center",
//                   // flexDirection: "column",
//                   width: "500px",
//                   // height: "542px",
//                   borderRadius: "30px",
//                   backgroundColor: "transparent",
//                   background: "rgba(255,255,255,0.1)",
//                   backdropFilter: "blur(10px)",

//                   // border: project.id === selectedId ? "1px solid green" : "",
//                   // transform: `${
//                   //   selectedId === project.id ? "scale(1.1)" : "scale(1)"
//                   // }`,
//                   // transition: "transform 1s ease-in-out",
//                 }}
//                 // onClick={() => handleChangeId(project.id)}
//               >
//                 <CardContent
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       mt: "60px",
//                       width: "250px",
//                       height: "250px",
//                     }}
//                   >
//                     <CardMedia component="img" image={project.image} />
//                   </Box>
//                   <Box sx={{ mt: "50px", width: "500px" }}>
//                     <Divider
//                       sx={{
//                         color: "green",
//                         maxWidth: "500px",
//                       }}
//                       variant="fullWidth"
//                       textAlign="right"
//                     >
//                       <Image
//                         src={"/gitHub.svg"}
//                         alt="image"
//                         height={60}
//                         width={60}
//                       />
//                     </Divider>
//                   </Box>

//                   {/* <Image
//                     src={project.image}
//                     alt="image"
//                     width={250}
//                     height={250}
//                   /> */}
//                   <Box>
//                     <Typography
//                       className="animatedTitle"
//                       sx={{
//                         mt: "20px",
//                         textAlign: "center",
//                       }}
//                     >
//                       {project.title}
//                     </Typography>
//                     <Typography
//                       sx={{ mt: "10px", textAlign: "center", maxWidth: "40ch" }}
//                       variant="body2"
//                       color="white"
//                     >
//                       {project.description}
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <Box>
//         {/* <MobileStepper
//           variant="dots"
//           steps={3}
//           color="green"
//           position="static"
//           activeStep={activeStep}
//           sx={{
//             maxWidth: "400",
//             flexGrow: "1",
//             backgroundColor: "transparent",
//             color: "green",
//             border: "1px solid green",
//           }}
//           nextButton={
//             <Button
//               size="small"
//               onClick={handleNext}
//               disabled={activeStep === 2}
//             >
//               Next
//             </Button>
//           }
//           backButton={
//             <Button
//               size="small"
//               onClick={handleBack}
//               disabled={activeStep === 0}
//             >
//               Back
//             </Button>
//           }
//         /> */}
//       </Box>
//     </Box>
//   );
// };

// export default Slider;

// export default function OurProjects() {
//   const [selectedId, setSelectedId] = React.useState();

//   const handleChangeId = (id) => {
//     setSelectedId(id);
//   };

//   // MOBILE STEPPER
//   const theme = useTheme();

//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   // END OF THE MOBILE STEPPER
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         width: "963px",
//       }}
//     >
//       <Box
//         sx={{
//           mt: "80px",
//         }}
//       >
//         <Grid container spacing={2}>
//           {projects.map((project) => (
//             <Grid item xs={12} sm={4} key={project.id}>
//               <Card
//                 sx={{
//                   // display: "flex",
//                   // alignItems: "center",
//                   // justifyContent: "center",
//                   // flexDirection: "column",
//                   width: "500px",
//                   // height: "542px",
//                   borderRadius: "30px",
//                   backgroundColor: "transparent",
//                   background: "rgba(255,255,255,0.1)",
//                   backdropFilter: "blur(10px)",

//                   // border: project.id === selectedId ? "1px solid green" : "",
//                   // transform: `${
//                   //   selectedId === project.id ? "scale(1.1)" : "scale(1)"
//                   // }`,
//                   // transition: "transform 1s ease-in-out",
//                 }}
//                 // onClick={() => handleChangeId(project.id)}
//               >
//                 <CardContent
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       mt: "60px",
//                       width: "250px",
//                       height: "250px",
//                     }}
//                   >
//                     <CardMedia component="img" image={project.image} />
//                   </Box>
//                   <Box sx={{ mt: "50px", width: "500px" }}>
//                     <Divider
//                       sx={{
//                         color: "green",
//                         maxWidth: "500px",
//                       }}
//                       variant="fullWidth"
//                       textAlign="right"
//                     >
//                       <Image
//                         src={"/gitHub.svg"}
//                         alt="image"
//                         height={60}
//                         width={60}
//                       />
//                     </Divider>
//                   </Box>

//                   {/* <Image
//                     src={project.image}
//                     alt="image"
//                     width={250}
//                     height={250}
//                   /> */}
//                   <Box>
//                     <Typography
//                       className="animatedTitle"
//                       sx={{
//                         mt: "20px",
//                         textAlign: "center",
//                       }}
//                     >
//                       {project.title}
//                     </Typography>
//                     <Typography
//                       sx={{ mt: "10px", textAlign: "center", maxWidth: "40ch" }}
//                       variant="body2"
//                       color="white"
//                     >
//                       {project.description}
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <Box>
//         {/* <MobileStepper
//           variant="dots"
//           steps={3}
//           color="green"
//           position="static"
//           activeStep={activeStep}
//           sx={{
//             maxWidth: "400",
//             flexGrow: "1",
//             backgroundColor: "transparent",
//             color: "green",
//             border: "1px solid green",
//           }}
//           nextButton={
//             <Button
//               size="small"
//               onClick={handleNext}
//               disabled={activeStep === 2}
//             >
//               Next
//             </Button>
//           }
//           backButton={
//             <Button
//               size="small"
//               onClick={handleBack}
//               disabled={activeStep === 0}
//             >
//               Back
//             </Button>
//           }
//         /> */}
//       </Box>
//     </Box>
//   );
// }

// export default function OurProjects() {
//   const [selectedId, setSelectedId] = React.useState();

//   const handleChangeId = (id) => {
//     setSelectedId(id);
//   };

//   // MOBILE STEPPER
//   const theme = useTheme();

//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   // END OF THE MOBILE STEPPER
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//       }}
//     >
//       <Box
//         sx={{
//           mt: "80px",
//         }}
//       >
//         <Grid container spacing={2}>
//           {projects.map((project) => (
//             <Grid item xs={12} sm={4} key={project.id}>
//               <Card
//                 sx={{
//                   // display: "flex",
//                   // alignItems: "center",
//                   // justifyContent: "center",
//                   // flexDirection: "column",
//                   // width: "500px",
//                   // height: "542px",
//                   borderRadius: "30px",
//                   backgroundColor: "transparent",
//                   background: "rgba(255,255,255,0.1)",
//                   backdropFilter: "blur(10px)",

//                   border: project.id === selectedId ? "1px solid green" : "",
//                   // transform: `${
//                   //   selectedId === project.id ? "scale(1.1)" : "scale(1)"
//                   // }`,
//                   // transition: "transform 1s ease-in-out",
//                 }}
//                 onClick={() => handleChangeId(project.id)}
//               >
//                 <CardContent
//                   sx={{
//                     py: "64px !important",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={project.image}
//                     sx={{
//                       width: "250px",
//                       height: "250px",
//                     }}
//                   />

//                   <Box sx={{ width: "500px" }}>
//                     <Divider
//                       sx={{
//                         color: "green",
//                         maxWidth: "500px",
//                       }}
//                       variant="fullWidth"
//                       textAlign="right"
//                     >
//                       <Image
//                         src={"/gitHub.svg"}
//                         alt="image"
//                         height={60}
//                         width={60}
//                       />
//                     </Divider>
//                   </Box>

//                   {/* <Image
//                     src={project.image}
//                     alt="image"
//                     width={250}
//                     height={250}
//                   /> */}
//                   <Box>
//                     <Typography
//                       className="animatedTitle"
//                       sx={{
//                         mt: "20px",
//                         textAlign: "center",
//                       }}
//                     >
//                       {project.title}
//                     </Typography>
//                     <Typography
//                       sx={{ mt: "10px", textAlign: "center", maxWidth: "40ch" }}
//                       variant="body2"
//                       color="white"
//                     >
//                       {project.description}
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <Box>
//         <MobileStepper
//           variant="dots"
//           steps={3}
//           color="green"
//           position="static"
//           activeStep={activeStep}
//           sx={{
//             maxWidth: "400",
//             flexGrow: "1",
//             backgroundColor: "transparent",
//             color: "green",
//             border: "1px solid green",
//           }}
//           nextButton={
//             <Button
//               size="small"
//               onClick={handleNext}
//               disabled={activeStep === 2}
//             >
//               Next
//             </Button>
//           }
//           backButton={
//             <Button
//               size="small"
//               onClick={handleBack}
//               disabled={activeStep === 0}
//             >
//               Back
//             </Button>
//           }
//         />
//       </Box>
//     </Box>
//   );
// }
