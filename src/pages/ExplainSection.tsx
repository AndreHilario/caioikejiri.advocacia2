import React from "react";
import {
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Spa as SpaIcon,
  AccountBalance as LawyerIcon,
  FamilyRestroom as DivorceIcon,
} from "@mui/icons-material";
import image from "../assets/advImage.jpg";

const ExplainSection: React.FC = () => {
  // Array de objetos contendo os dados de cada accordion
  const accordionData = [
    {
      title: "Divórcio Judicial",
      icon: <DivorceIcon sx={{ verticalAlign: "middle", mr: 1 }} />,
      description: (
        <>
          O divórcio judicial é o meio legal para formalizar o fim do casamento.
          Ele pode acontecer de duas formas:
          <br />
          <b>- Divórcio Consensual:</b> Acordo mútuo, rápido e menos custoso.
          <br />
          <b>- Divórcio Litigioso:</b> Conflito, pode envolver disputas
          judiciais.
        </>
      ),
      backgroundColor: "#000", // Cor do primeiro accordion
    },
    {
      title: "Divórcio Extrajudicial",
      icon: <SpaIcon sx={{ verticalAlign: "middle", mr: 1 }} />,
      description: (
        <>
          O divórcio extrajudicial é o meio administrativo para por fim ao
          casamento sem intervenção judicial.
        </>
      ),
      backgroundColor: "#000", // Cor dos outros accordions
    },
    {
      title: "Importância de ter um Especialista",
      icon: <LawyerIcon sx={{ verticalAlign: "middle", mr: 1 }} />,
      description: (
        <>
          Contar com um <b>ADVOGADO ESPECIALIZADO</b> faz toda a diferença!
          Garantimos que todos os seus direitos sejam respeitados, evitando
          preocupações e potenciais prejuízos.
        </>
      ),
      backgroundColor: "#000", // Cor dos outros accordions
    },
  ];

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        minHeight: "70vh",
        py: 6,
        px: 2,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            mb: 4,
          }}
        >
          Tipos de Divórcio
        </Typography>

        <Card
          sx={{
            width: "100%",
            backgroundColor: "#000",
            color: "#fff",
            boxShadow: 3,
            mb: 4,
          }}
        >
          <CardContent>
            {/* Iterando sobre o array de dados para renderizar os accordions */}
            {accordionData.map((item, index) => (
              <Accordion
                key={index} // key é importante para performance do React
                sx={{
                  backgroundColor: item.backgroundColor,
                  color: "#fff",
                  mb: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls={`panel${index}-content`} // Acessibilidade
                  id={`panel${index}-header`} // Acessibilidade
                >
                  <Typography>
                    {item.icon} {/* Ícone do accordion */}
                    {item.title} {/* Título do accordion */}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ color: "#ddd" }}>
                    {item.description} {/* Descrição detalhada */}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </Card>

        <Button
          variant="contained"
          sx={{
            mt: 2,
          }}
        >
          Agende agora uma reunião sem compromisso
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderLeft: { md: "2px solid #388E3C" },
          borderTop: { xs: "2px solid #388E3C", md: "none" },
          mt: { xs: 4, md: 0 },
        }}
      >
        <img
          src={image}
          alt="Ilustração sobre divórcio"
          style={{
            maxWidth: "90%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ExplainSection;
