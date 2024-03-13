"use client";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const Contact = () => {
  const [email, setEmail] = React.useState();
  const [subject, setSubject] = React.useState();
  const [message, setMessage] = React.useState();
  const [isEmailInputFocused, setIsEmailInputFocused] = React.useState(false);
  const [isSubjectInputFocused, setIsSubjectInputFocused] =
    React.useState(false);
  const [isMessageInputFocused, setIsMessageInputFocused] =
    React.useState(false);
  return (
    <Grid
      container
      sx={{
        mx: { xs: "0px", sm: "0px", md: "50px" },
        mt: "190px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography className="title">İletişim</Typography>
      </Grid>
      <Grid item xs={12} sx={{ px: { xs: "0px", sm: "0px", md: "200px" } }}>
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
            <Grid
              container
              spacing={4}
              sx={{
                px: { xs: "20px", sm: "px", md: "200px" },
              }}
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
                    // px: "180px",
                    display: "flex",
                    backgroundColor: "transparent",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    color: "#73CD07",
                    borderRadius: "15px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    "&:hover": {
                      border: "1px solid #73CD07",
                    },
                  }}
                  id="submitButton"
                >
                  GÖNDER
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Contact;
