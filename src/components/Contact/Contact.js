"use client";
import { SetMealSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const errorMessage = () =>
    toast.error("Lütfen tüm alanları doldurun!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      errorMessage();
      setError(true);
      toast.clearWaitingQueue();

      return;
    }

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!isValidEmail(email)) {
      toast.error("Lütfen geçerli bir e-posta adresi girin!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setError(true);
      return;
    }

    const mailtoLink = `mailto:cyberyavuzlar@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box
      id="contact"
      sx={{
        mt: "120px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="gradientContactLeft" />
      <div className="gradientContactRight" />
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
          maxWidth: "860px",
        }}
      >
        <CardContent
          sx={{ p: { xs: "32px 16px", sm: "32px 64px", md: "32px 64px" } }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "18x", color: "white" }}>
                Bilgilerinizi bırakın, en kısa sürede sizinle iletişime
                geçeceğiz.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                InputProps={{
                  style: { color: "white" },
                }}
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
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                fullWidth
                sx={{
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
                onClick={sendEmail}
              >
                GÖNDER
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {error && <ToastContainer limit={3} />}
    </Box>
  );
};
export default Contact;
