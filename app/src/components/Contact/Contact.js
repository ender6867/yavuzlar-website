"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isSubjectInputFocused, setIsSubjectInputFocused] = useState(false);
  const [isMessageInputFocused, setIsMessageInputFocused] = useState(false);

  return (
    <Box sx={{ mt: "120px", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <Box>
        <Typography className="title">İletişim</Typography>
      </Box>

      <Card
        sx={{
          textAlign: "center",
          backgroundColor: "transparent",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          mt: "30px",
          borderRadius: "30px",
          maxWidth: "860px"
        }}
      >
        <CardContent sx={{ p: '32px 64px' }}>
          <Grid
            container
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "18x", color: "white" }}>
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
                  "& .Mui-focused": {
                    color: "#fff !important",
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

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
              <Button
                fullWidth
                sx={{
                  // px: "180px",
                  maxWidth: "330px",
                  display: "flex",
                  backgroundColor: "transparent",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  color: "#73CD07",
                  borderRadius: "15px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  border: "1px solid transparent",
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
    </Box>
  );
};
export default Contact;
