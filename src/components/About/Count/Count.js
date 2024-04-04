"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";

export const Count = ({ number, name, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <Typography sx={{ fontSize: "4rem", cursor: "default", fontWeight: 700 }}>
        <CountUp enableScrollSpy={true} end={number} />
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={image} alt="image" width={60} height={60} />

        <Typography
          sx={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            fontWeight: 700,
            cursor: "default",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};
export default Count;

// "use client";
// import { Grid, Stack, Typography } from "@mui/material";
// import CountUp from "react-countup";
// import Image from "next/image";
// import React from "react";

// export const Count = ({ number, name, image }) => {
//   return (
//     <Grid container>
//       <Grid
//         item
//         xs={12}
//         sm={8}
//         md={6}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           margin: "0 auto",
//           justifyContent: "center",
//         }}
//       >
//         <Typography sx={{ fontSize: "120px" }}>
//           <CountUp enableScrollSpy={true} end={number} />
//         </Typography>
//         <Grid
//           item
//           xs={12}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             ml: "30px ",
//           }}
//         >
//           <Image src={image} alt="image" width={75} height={75} />
//           <Typography
//             sx={{
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "35px",
//             }}
//           >
//             {name}
//           </Typography>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };
// export default Count;
