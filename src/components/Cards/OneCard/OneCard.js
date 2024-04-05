"use client";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery
} from "@mui/material";

export const OneCard = ({ imgPath, title, description, tabImg }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        "&:hover": {
          "& .flex-box": { display: "flex" },
          "& .none-box": { display: "none" },
          "& .rotate-box": {
            transform: "rotateY(180deg)",
          },
          "& .MuiCard-root": {
            border: "2px solid #73CD07",
          },
        },
      }}
    >
      <Box
        className="rotate-box"
        sx={{
          height: "588px",
          transformStyle: "preserve-3d",
          transition: "all 0.6s ease",
        }}
      >
        <Card
          className={isMobile ? "none-box" : null}
          sx={{
            width: "100%",
            height: "100%",

            position: "absolute",

            borderRadius: "20px",
            border: "2px solid transparent",

            backgroundColor: "transparent",
            backfaceVisibility: "hidden",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <CardContent
            sx={{
              p: "120px 40px !important",
              gap: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "auto",
                  height: "240px",
                }}
                src={imgPath}
              />
            </Box>

            <Typography
              sx={{ fontSize: "2rem", fontWeight: 700, color: "#fff", textAlign: "center" }}
            >
              {title}
            </Typography>

            {isMobile ? (
              <img src={tabImg} alt="image" width={50} height={50} style={{ position: 'absolute', right: 0, bottom: 0, transform: 'translate(-16px, -8px)' }} />
            ) : (
              ""
            )}
          </CardContent>
        </Card>

        <Card
          className={isMobile ? "flex-box" : null}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",

            transform: "rotateY(180deg)",
            position: "absolute",

            borderRadius: "20px",
            border: "2px solid transparent",

            backgroundColor: "transparent",
            backfaceVisibility: "hidden",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            ...(isMobile ? { display: "none" } : {}),
          }}
        >
          <CardContent
            sx={{
              p: "120px 40px !important",
              gap: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "2rem", fontWeight: 700, color: "#73CD07" }}
            >
              {title}
            </Typography>

            <Typography sx={{ color: "#fff" }}>{description}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
export default OneCard;
