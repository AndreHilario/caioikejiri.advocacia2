import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShieldIcon from "@mui/icons-material/Shield";

const cardsData = [
  {
    icon: <CheckIcon sx={{ fontSize: 36, color: "#34D399" }} />,
    title: "Análise Completa",
    description:
      "Avaliação detalhada para identificar eventuais irregularidades na autuação.",
  },
  {
    icon: <PersonIcon sx={{ fontSize: 36, color: "#34D399" }} />,
    title: "Atendimento Personalizado",
    description: "Soluções ajustadas às necessidades do seu caso.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 36, color: "#34D399" }} />,
    title: "Agilidade no Contato",
    description:
      "Facilidade para obter uma avaliação rápida sem a burocracia de formulários.",
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 36, color: "#34D399" }} />,
    title: "Transparência",
    description:
      "Todo serviço é prestado de forma transparente para maior segurança dos seus interesses.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        py: 10,
        px: 3,
      }}
    >
      <Grid container spacing={4}>
        {cardsData.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Box
              sx={{
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                p: 3,
                textAlign: "left",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                },
                width: "100%",
                minHeight: "30vh"
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  color: "#34D399"
                }}
              >
                {card.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#6B7280",
                }}
              >
                {card.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
