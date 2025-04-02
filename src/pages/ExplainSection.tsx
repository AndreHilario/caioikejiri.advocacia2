import React from "react";
import { Typography, Stack, Grid } from "@mui/material";
import { CheckCircle, AccessTime, DocumentScanner } from "@mui/icons-material";
import image from "../assets/explainImage.jpg";

const ExplainSection: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#000",
        textAlign: "center",
        minHeight: "50vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{ py: 8 }}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            mt: 2,
            color: "#FFFFFF",
          }}
        >
          Como Funciona?
        </Typography>

        <Stack
          spacing={2}
          sx={{
            px: 2,
            textAlign: "left",
            flexGrow: 1,
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircle sx={{ color: "#34D399", fontSize: 30 }} />
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              Se você foi surpreendido por uma multa de trânsito ou foi
              notificado sobre a suspensão ou cassação da sua CNH, saiba que
              muitas vezes é possível recorrer.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <DocumentScanner sx={{ color: "#34D399", fontSize: 30 }} />
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              Você envia o AIT (Auto de Infração de Trânsito) ou a Notificação
              de Penalidade e explica brevemente sua situação.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <AccessTime sx={{ color: "#34D399", fontSize: 30 }} />
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              Em pouco tempo receberá uma devolutiva e saberá se sua multa
              poderá ser anulada.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={image}
          alt="Ilustração de trânsito"
          style={{
            maxWidth: "100%",
            height: "100%",
            borderRadius: "8px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ExplainSection;
