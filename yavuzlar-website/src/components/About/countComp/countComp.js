// import Image from "next/image";
// import { Box, Typography, Grid } from "@mui/material";

// const countInfo = [
//   {
//     number: "1",
//     name: "Üye",
//     image: "/team.png",
//   },
//   {
//     number: "2",
//     name: "Proje",
//     image: "/projects.png",
//   },
//   {
//     number: "3",
//     name: "Makale",
//     image: "/article.png",
//   },
//   {
//     number: "4",
//     name: "Sunum",
//     image: "/presentation.png",
//   },
// ];

// export default function Count() {
//   return (
//     <Grid container>
//       <Grid
//         item
//         sx={{
//           mt: "100px",
//           // display: "flex",
//           borderRadius: "30px",
//           padding: "30px",
//           // justifyContent: "space-between",
//           backgroundColor: "transparent",
//           background: "rgba(255,255,255,0.1)",
//           backdropFilter: "blur(10px)",
//           "&:hover": {
//             border: "2px solid #8AE819",
//           },
//         }}
//         xs={12}
//       >
//         <Grid container>
//           {countInfo.map((count, index) => (
//             <Grid item key={index} xs={12} md={3}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   px: "50px",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: "80px",
//                     mr: "50px",
//                   }}
//                   variant="h1"
//                 >
//                   {count.number}
//                 </Typography>

//                 <Box
//                   sx={
//                     {
//                       // maxWidth: 100,
//                       // width: "50px",
//                     }
//                   }
//                 >
//                   <Image src={count.image} alt="image" width={75} height={75} />
//                   <Typography
//                     sx={{
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: "30px",
//                     }}
//                   >
//                     {count.name}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";

const countInfo = [
  {
    number: "1",
    name: "Üye",
    image: "/team.png",
  },
  {
    number: "2",
    name: "Proje",
    image: "/projects.png",
  },
  {
    number: "3",
    name: "Makale",
    image: "/article.png",
  },
  {
    number: "4",
    name: "Sunum",
    image: "/presentation.png",
  },
];

export default function Count() {
  return (
    <Grid container>
      <Grid
        item
        sx={{
          mt: "100px",
          // display: "flex",
          borderRadius: "30px",
          padding: "30px",
          // justifyContent: "space-between",
          backgroundColor: "transparent",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          "&:hover": {
            border: "2px solid #8AE819",
          },
        }}
        xs={12}
      >
        <Grid container>
          {countInfo.map((count, index) => (
            <Grid item key={index} xs={12} md={3}>
              <Box
                sx={{
                  display: "flex",
                  px: "50px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "80px",
                    mr: "50px",
                  }}
                  variant="h1"
                >
                  {count.number}
                </Typography>

                <Box
                  sx={
                    {
                      // maxWidth: 100,
                      // width: "50px",
                    }
                  }
                >
                  <Image src={count.image} alt="image" width={75} height={75} />
                  <Typography
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "30px",
                    }}
                  >
                    {count.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
