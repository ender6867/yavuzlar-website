import * as React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ textAlign: "center", mt: "100px", height: "552px" }}>
      <Typography sx={{ fontSize: "2rem" }}>İLETİŞİM</Typography>
      <Box
        sx={{
          textAlign: "center",
          display: "inline-block",
          backgroundColor: "transparent",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          mt: "30px",
          borderRadius: "30px",
          px: "138px",
        }}
      >
        <Typography sx={{ mt: "30px", fontSize: "18x" }}>
          Bilgilerinizi bırakın, en kısa sürede sizinle iletişime geçeceğiz.
        </Typography>
        <Box
          sx={{
            mt: "30px",
            width: 963,
            maxWidth: "100%",
            mb: "30px",
          }}
        >
          <Stack spacing={2}>
            <TextField color="success" fullWidth label="e-Posta" id="ePosta" />
            <TextField color="success" fullWidth label="Konu" id="subject" />
            <TextField
              multiline
              rows={5}
              color="success"
              fullWidth
              label="Mesaj"
              id="message"
            />
            <Button
              sx={{
                backgroundColor: "transparent",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
              variant="contained"
              id="submitButton"
            >
              GÖNDER
            </Button>{" "}
          </Stack>
        </Box>
      </Box>
    </Box>
  );

  //   const [name, setName] = React.useState("");
  //   const theme = createTheme({
  //     palette: {
  //       primary: {
  //         main: purple[500],
  //       },
  //       secondary: {
  //         main: "#73cd07",
  //       },
  //     },
  //   });

  //   return (
  //     <div>
  //       <Box
  //         component="form"
  //         sx={{
  //           "& > :not(style)": { m: 1, width: "500" },
  //         }}
  //         noValidate
  //         autoComplete="off"
  //       >
  //         <TextField
  //           id="outlined-controlled"
  //           label="E-Posta"
  //           value={name}
  //           onChange={(event) => {
  //             setName(event.target.value);
  //           }}
  //           color="secondary"
  //         />
  //         <TextField
  //           id="outlined-controlled"
  //           label="Konu"
  //           value={name}
  //           onChange={(event) => {
  //             setName(event.target.value);
  //           }}
  //         />
  //       </Box>
  //     </div>
  //   );
}

// export default function Contact() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }
