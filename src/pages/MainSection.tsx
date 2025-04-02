import React from "react";
import {
  Stack,
  Button,
  Typography,
  Box,
  Slide,
  useMediaQuery,
  Theme,
  Grid,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Slider from "react-slick";
import carrossel1 from "../assets/carrossel1.jpg";
import carrossel2 from "../assets/carrossel2.jpg";
import carrossel3 from "../assets/carrossel3.jpg";
import carrossel1HighRes from "../assets/carrossel1.jpg";
import carrossel2HighRes from "../assets/carrossel2.jpg";
import carrossel3HighRes from "../assets/carrossel3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSectionDesktop: React.FC = () => {
  const slideDuration = 500;

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Box className="bg-white" sx={{ height: "92vh", overflow: "hidden" }}>
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid item xs={12} md={6} className="flex justify-center">
          <Box className="w-full h-full">
            <Slider {...settings}>
              {[carrossel1, carrossel2, carrossel3].map((image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={image}
                    srcSet={`${image} 1x, ${
                      index === 0
                        ? carrossel1HighRes
                        : index === 1
                        ? carrossel2HighRes
                        : carrossel3HighRes
                    } 2x`}
                    alt={`Imagem ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "92vh",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="flex flex-col justify-between items-center"
          sx={{ height: "100%", padding: 4, margin: "0 auto" }}
        >
          <Box
            className="flex flex-col justify-between items-center"
            sx={{ height: "100%", margin: "0 auto" }}
          >
            <Slide direction="down" in={true} timeout={slideDuration * 2}>
              <Typography
                variant="button"
                sx={{
                  backgroundColor: "#34D399",
                  color: "#FFFFFF",
                  p: "4px 12px",
                  borderRadius: "16px",
                  textTransform: "none",
                  width: "40%",
                  textAlign: "center",
                }}
              >
                Assessoria Jurídica
              </Typography>
            </Slide>
            <Box>
              <Slide direction="down" in={true} timeout={slideDuration * 2}>
                <Typography
                  sx={{
                    typography: "h1",
                    textAlign: "center",
                  }}
                >
                  Defenda Seus Direitos no Trânsito
                </Typography>
              </Slide>

              <Slide direction="left" in={true} timeout={slideDuration * 3}>
                <Typography
                  sx={{
                    typography: "h3",
                    color: "#6B7280",
                    textAlign: "center",
                    mt: 4,
                  }}
                >
                  Recorra de Multas e das Penalidades de Suspensão <br />e de Cassação
                  da CNH
                </Typography>
              </Slide>
            </Box>
            <Slide direction="up" in={true} timeout={slideDuration * 3}>
              <Box
                className="flex flex-col flex-end items-center"
                sx={{ margin: "0 auto" }}
              >
                <Button
                  variant="contained"
                  href="https://wa.me/5512997402160"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    transition: "transform 0.2s ease-in-out",
                    padding: "8px 32px",
                  }}
                >
                  Entre em contato!
                </Button>
                <Typography
                  sx={{
                    typography: "h6",
                    color: "#6B7280",
                    textAlign: "center",
                    mt: 2,
                  }}
                >
                  Seu caso será analisado e você saberá se será possível
                  recorrer.
                </Typography>
              </Box>
            </Slide>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const MainSectionMobile: React.FC = () => {
  const slideDuration = 500;

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        textAlign: "center",
        py: 2,
        px: 2,
        minHeight: "70vh",
      }}
    >
      <Stack spacing={4} alignItems="center">
        <Slide direction="down" in={true} timeout={slideDuration}>
          <Typography
            variant="button"
            sx={{
              backgroundColor: "#34D399",
              color: "#FFFFFF",
              p: "4px 12px",
              borderRadius: "16px",
              textTransform: "none",
            }}
          >
            Assessoria Jurídica
          </Typography>
        </Slide>

        <Slide direction="down" in={true} timeout={slideDuration * 2}>
          <Typography
            sx={{
              typography: { xs: "h2", md: "h1" },
            }}
          >
            Defenda Seus Direitos no Trânsito
          </Typography>
        </Slide>

        <Slide direction="left" in={true} timeout={slideDuration * 3}>
          <Typography
            sx={{
              typography: { xs: "h6", md: "h3" },
              color: "#6B7280",
            }}
          >
            Recorra de Multas e das Penalidades de Suspensão e de Cassação da
            CNH
          </Typography>
        </Slide>

        <Slide direction="right" in={true} timeout={slideDuration * 3}>
          <Box sx={{ maxWidth: "95%", margin: "auto", mt: 5 }}>
            <Slider {...settings}>
              {[carrossel1, carrossel2, carrossel3].map((image, index) => (
                <div
                  key={index}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src={image}
                    srcSet={`${image} 1x, ${
                      index === 0
                        ? carrossel1HighRes
                        : index === 1
                        ? carrossel2HighRes
                        : carrossel3HighRes
                    } 2x`}
                    alt={`Imagem ${index + 1}`}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      objectFit: "cover",
                      height: "50vh",
                    }}
                  />
                  <Typography overflow={"hidden"}>. . .</Typography>
                </div>
              ))}
            </Slider>
          </Box>
        </Slide>

        <Slide direction="up" in={true} timeout={slideDuration * 3}>
          <Box
            className="flex flex-col flex-end items-center"
            sx={{ margin: "0 auto" }}
          >
            <Button
              variant="contained"
              href="https://wa.me/5512997402160"
              rel="noopener noreferrer"
              startIcon={<WhatsAppIcon />}
              sx={{
                transition: "transform 0.2s ease-in-out",
                padding: "8px 32px",
              }}
            >
              Entre em contato!
            </Button>
            <Typography
              sx={{
                typography: "h6",
                color: "#6B7280",
                textAlign: "center",
                mt: 2,
              }}
            >
              Seu caso será analisado e você saberá se será possível recorrer.
            </Typography>
          </Box>
        </Slide>
      </Stack>
    </Box>
  );
};

const MainSection: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return isMobile ? <MainSectionMobile /> : <MainSectionDesktop />;
};

export default MainSection;
