import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: "1",
    title: "Front-end Teknolojiler-1",
    path: "abcd-1",
    image: "/articlesImg.png",
    logo: "/yavuzlarHorse.png",
  },
  {
    id: "2",
    title: "Front-end Teknolojileri-2",
    path: "abcd-2",
    image: "/articlesImg.png",
    logo: "/yavuzlarHorse.png",
  },
  {
    id: "3",
    title: "Front-end Teknolojiler-3",
    path: "abcd-3",
    image: "/articlesImg.png",
    logo: "/yavuzlarHorse.png",
  },
];

export default function Articles() {
  return (
    <Container sx={{ mt: "85px" }}>
      <Box>
        <Typography className="title">Son Yazılarımız</Typography>
        <Box sx={{ mt: "30px" }}>
          {articles.map((article) => (
            <Link href={article.path} key={article.id}>
              <Box
                sx={{
                  mt: "30px",
                  border: "0.3px solid green",
                  borderRadius: "30px",
                  height: "80px",
                  backgroundColor: "transparent",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Box
                    sx={{
                      mt: "15px",
                      ml: "30px",
                    }}
                  >
                    <Stack
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                      direction="row"
                      spacing={5}
                    >
                      <Image
                        alt="logo"
                        src={article.logo}
                        width={55}
                        height={50}
                      />
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                        variant="h5"
                      >
                        {article.title}
                      </Typography>
                    </Stack>
                  </Box>
                  <Image
                    alt="image"
                    src={article.image}
                    width={318}
                    height={80}
                  />
                </Stack>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

// export default function Articles() {
//   return (
//     <Container>
//       <Box sx={{ textAlign: "center" }}>
//         <Typography sx={{ color: "green" }} variant="h3">
//           Son Yazılarımız
//         </Typography>
//         <Box sx={{ mt: "30px" }}>
//           {articles.map((article, index) => (
//             <Box
//               key={index}
//               sx={{
//                 mt: "30px",
//                 textAlign: "center",
//                 border: "1px solid green",
//                 borderRadius: "30px",
//                 height: "80px",
//               }}
//             >
//               <Link
//                 sx={{ display: "flex", justifyContent: "center" }}
//                 href={"abcd"}
//               >
//                 {article.title}
//               </Link>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Container>
//   );
// }
