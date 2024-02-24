import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import React, { useRef, useState } from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../app/globals.css";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function FlipCard({ imgPath, title, description }) {
  return (
    // <Swiper
    //   effect={"flip"}
    //   grabCursor={true}
    //   pagination={true}
    //   navigation={true}
    //   modules={(EffectFlip, Pagination, Navigation)}
    // >
    //   <SwiperSlide>
    //     <Card
    //       sx={{
    //         mt: "250px",
    //         backgroundColor: "transparent",
    //         border: "2px solid #8AE819",
    //         borderRadius: "30px",
    //         alignItems: "center",
    //         textAlign: "center",
    //         position: "relative",
    //       }}
    //     >
    //       <CardContent
    //         sx={{
    //           py: "80px !important",
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             width: "100%",
    //             display: "flex",
    //             justifyContent: "center",
    //             mb: "80px",
    //           }}
    //         >
    //           <CardMedia
    //             sx={{
    //               width: "auto",
    //               height: "180px",
    //               maxHeight: "200px",
    //             }}
    //             component="img"
    //             image={imgPath}
    //           />
    //         </Box>
    //         <Typography color="white" variant="h3">
    //           {title}
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <Card
    //       sx={{
    //         mt: "250px",
    //         backgroundColor: "transparent",
    //         border: "2px solid #8AE819",
    //         borderRadius: "30px",
    //         alignItems: "center",
    //         textAlign: "center",
    //         position: "relative",
    //       }}
    //     >
    //       <CardContent
    //         sx={{
    //           py: "80px !important",
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             width: "100%",
    //             display: "flex",
    //             justifyContent: "center",
    //             mb: "80px",
    //             transform: "rotateY(180deg)",
    //             height: "235px",
    //             textAlign: "center",
    //             flexDirection: "column",
    //           }}
    //         >
    //           <Typography color="white">{description}</Typography>
    //         </Box>
    //       </CardContent>
    //     </Card>
    //   </SwiperSlide>
    // </Swiper>

    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={true}
      navigation={true}
      modules={[EffectFlip, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src={imgPath} />
      </SwiperSlide>
      <SwiperSlide>
        <Typography>{title}</Typography>
      </SwiperSlide>
    </Swiper>
  );
}
