import React from "react";
import { Stack, Button, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <div
      className="bg-black py-2 px-2 border-b-2 border-b-green-300"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="max-w-7xl mx-auto py-1"
        color="#FFFFFF"
      >
        <Typography variant="h6">Caio Ikejiri | Advogado</Typography>

        <Button
          variant="contained"
          href="https://wa.me/5512997402160"
          rel="noopener noreferrer"
          sx={{
            padding: "8px 16px",
          }}
        >
          Entre em contato
        </Button>
      </Stack>
    </div>
  );
};

export default Header;
