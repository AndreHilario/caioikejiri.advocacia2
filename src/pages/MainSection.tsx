import React from "react";
import {
  Stack,
  Button,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  Theme,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import imagem from "../assets/image.png";
import { generateWhatsappLink } from "../utils/sendWhatsAppMessage";

const MainSectionDesktop: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "90vh",
        overflow: "hidden",
        pl: 12,
        pr: 12,
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12} md={6}>
          <Stack
            sx={{ height: "100%" }}
            justifyContent="center"
            spacing={4}
            px={4}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "black", fontSize: "1.8rem" }}
            >
              DIVÓRCIO SEM COMPLICAÇÕES!
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ color: "black", letterSpacing: "0.03em" }}
            >
              Resolva agora o seu Divórcio de maneira RÁPIDA e EFICAZ!
            </Typography>

            <Typography
              variant="h3"
              sx={{ fontWeight: "700", fontSize: "2.5rem", color: "black" }}
            >
              Seja ele amigável ou não, vamos te auxiliar!
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "gray", fontSize: "1rem" }}
            >
              Você infelizmente deve estar enfrentando um momento delicado e o
              processo de divórcio pode ser complicado e demorado!
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "gray", fontSize: "1rem" }}
            >
              A nossa equipe de advogados está pronta para auxiliar você nesse
              momento, garantindo seus direitos e protegendo aquilo que é mais
              valioso para você.
            </Typography>
            <Box>
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon style={{ marginRight: "3px" }} />}
                sx={{ width: "fit-content" }}
                href={generateWhatsappLink(
                  "5512992485894",
                  "Olá! Preciso do auxílio de um Advogado."
                )}
              >
                Fale comigo
              </Button>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <img
              src={imagem}
              alt="Imagem exemplo"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const MainSectionMobile: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        textAlign: "center",
        py: 3, // Aumentei o padding vertical
        px: 3, // Aumentei o padding horizontal
        minHeight: "80vh",
      }}
    >
      <Stack spacing={3} alignItems="center" justifyContent="center">
        {/* Título principal */}
        <Typography
          variant="h2" // Ajustei o tamanho da fonte
          fontWeight="bold"
          sx={{ color: "black", textAlign: "center" }} // Alinhamento à esquerda
        >
          DIVÓRCIO SEM COMPLICAÇÕES!
        </Typography>

        {/* Subtítulo */}
        <Typography
          variant="subtitle1" // Ajustei o tamanho da fonte
          fontWeight="bold"
          sx={{ color: "black", letterSpacing: "0.03em", textAlign: "center" }} // Alinhamento à esquerda
        >
          Resolva agora o seu Divórcio de maneira RÁPIDA e EFICAZ!
        </Typography>

        {/* Frase de destaque */}
        <Typography
          variant="h4" // Ajustei o tamanho da fonte
          sx={{ fontWeight: "700", color: "black", textAlign: "center" }} // Alinhamento à esquerda
        >
          Seja ele amigável ou não, vamos te auxiliar!
        </Typography>
        <Box sx={{ mt: 3 }}>
          <img
            src={imagem}
            alt="Advogada"
            style={{
              width: "100%",
              maxHeight: "300px", // Altura máxima da imagem
              borderRadius: "16px",
              objectFit: "cover",
              marginBottom: "20px", // Margem inferior para dar espaço
            }}
          />
        </Box>
        {/* Textos informativos */}
        <Typography
          variant="body2" // Ajustei o tamanho da fonte
          sx={{ color: "gray", textAlign: "center" }} // Alinhamento à esquerda
        >
          Você infelizmente deve estar enfrentando um momento delicado e o
          processo de divórcio pode ser complicado e demorado!
        </Typography>
        <Typography
          variant="body2" // Ajustei o tamanho da fonte
          sx={{ color: "gray", textAlign: "center" }} // Alinhamento à esquerda
        >
          A nossa equipe de advogados está pronta para auxiliar você nesse
          momento, garantindo seus direitos e protegendo aquilo que é mais
          valioso para você.
        </Typography>

        {/* Botão de contato */}
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          href={generateWhatsappLink(
            "5512992485894",
            "Olá! Preciso do auxílio de um Advogado."
          )}
        >
          Fale comigo
        </Button>
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
