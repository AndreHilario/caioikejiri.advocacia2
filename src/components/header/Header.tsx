import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { generateWhatsappLink } from "../../utils/sendWhatsAppMessage";

const Header: React.FC = () => {
  return (
    <div
      className="py-2 px-2 border-b-2 border-b-green-700"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#2E7D32"
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="max-w-7xl mx-auto"
        color="#FFFFFF"
      >
        <Typography variant="h6">Caio Alves | Advogado</Typography>

        <Button
          variant="contained"
          href={generateWhatsappLink(
            "5512992485894",
            "Olá! Preciso do auxílio de um Advogado."
          )}
          rel="noopener noreferrer"
          sx={{
            bgcolor: "#fff",
            color: "#000",
            fontSize: "15px"
          }}
        >
          Fale comigo
        </Button>
      </Stack>
    </div>
  );
};

export default Header;
