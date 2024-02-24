import * as React from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";

export default function Contact() {
  const [email, setEmail] = React.useState();
  const [subject, setSubject] = React.useState();
  const [message, setMessage] = React.useState();
  const [isEmailInputFocused, setIsEmailInputFocused] = React.useState(false);
  const [isSubjectInputFocused, setIsSubjectInputFocused] =
    React.useState(false);
  const [isMessageInputFocused, setIsMessageInputFocused] =
    React.useState(false);
  return (
    <Box sx={{ mt: "100px" }}>
      <Typography className="title">İLETİŞİM</Typography>
      <Card
        sx={{
          textAlign: "center",
          backgroundColor: "transparent",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          mt: "30px",
          borderRadius: "30px",
        }}
      >
        <CardContent sx={{ p: "4rem 0rem !important" }}>
          <Container>
            <Grid
              // sx={{ textAlign: "center", mt: "100px", height: "552px" }}
              container
              spacing={4}
            >
              <Grid item xs={12}>
                <Typography
                  sx={{ mt: "30px", fontSize: "18x", color: "green" }}
                >
                  Bilgilerinizi bırakın, en kısa sürede sizinle iletişime
                  geçeceğiz.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  InputProps={{ style: { color: "white" } }}
                  sx={{
                    "& .MuiFormLabel-root": {
                      color: "white",
                      zIndex: 99,
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#73CD07",
                        borderRadius: "30px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#73CD07",
                      },
                      "&.Mui-focused fieldset legend span": {
                        borderColor: "#73Cd07",
                        color: "#73CD07",
                      },
                    },
                  }}
                  color="success"
                  fullWidth
                  label="e-Posta"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsEmailInputFocused(true)}
                  onBlur={() => setIsEmailInputFocused(false)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{ style: { color: "white" } }}
                  sx={{
                    "& .MuiFormLabel-root": {
                      color: "white",
                      zIndex: 99,
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#73CD07",
                        borderRadius: "30px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#73CD07",
                      },
                      "&.Mui-focused fieldset legend span": {
                        borderColor: "#73Cd07",
                        color: "#73CD07",
                      },
                    },
                  }}
                  color="success"
                  fullWidth
                  label="Konu"
                  autoComplete="off"
                  onChange={(e) => setSubject(e.target.value)}
                  onFocus={() => setIsSubjectInputFocused(true)}
                  onBlur={() => setIsSubjectInputFocused(false)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{ style: { color: "white" } }}
                  sx={{
                    "& .MuiFormLabel-root": {
                      color: "white",
                      zIndex: 99,
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#73CD07",
                        borderRadius: "30px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#73CD07",
                      },
                      "&.Mui-focused fieldset legend span": {
                        borderColor: "#73Cd07",
                        color: "#73CD07",
                      },
                    },
                  }}
                  multiline
                  rows={5}
                  color="success"
                  fullWidth
                  label="Mesaj"
                  autoComplete="off"
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setIsMessageInputFocused(true)}
                  onBlur={() => setIsMessageInputFocused(false)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: "transparent",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    color: "green",
                    borderRadius: "15px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                  id="submitButton"
                >
                  GÖNDER
                </Button>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
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
