import React from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  useMediaQuery,
  Theme,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const FooterDesktop: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        minHeight: "40vh",
        borderTop: "1px solid #fff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#000",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="row"
          display={"flex"}
          justifyContent="space-around"
          alignItems="center"
          sx={{ width: "100%", mb: 3, flexGrow: 1 }}
        >
          <Box textAlign="center">
            <Stack
              direction="column"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4">Caio Alves de Faria</Typography>
              <Typography variant="h4"> ADVOGADO | OAB/SP 517.011</Typography>
            </Stack>
          </Box>
          <Box textAlign="center">
            <Typography variant="body2" sx={{ p: 2, mt: 8 }}>
              <b>Conte conosco para te ajudar</b> <br />
              neste momento sensível, trabalhamos de forma  <br />humanizada e
              eficiente em prol dos seus direitos!
            </Typography>
            <Button
              variant="contained"
              href="https://wa.me/5512992485894"
              rel="noopener noreferrer"
              startIcon={
                <ChatBubbleOutlineIcon
                  style={{ fontSize: 15, marginRight: 2 }}
                />
              }
              sx={{
                transition: "transform 0.2s ease-in-out",
                padding: "10px 32px",
                mb: 2,
              }}
            >
              Agende agora uma reunião!
            </Button>
          </Box>
        </Stack>

        <Box sx={{ mb: 1, width: "100%" }} textAlign="center">
          <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
            © 2025 CaioAlves | Todos os direitos reservados
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const FooterMobile: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
        borderTop: "1px solid #fff",
      }}
    >
      <Box sx={{ py: 4 }}>
        <Typography variant="body2" sx={{ mb: 2, px: 4 }}>
          <b>Conte conosco para te ajudar</b> neste momento sensível,
          trabalhamos de forma humanizada e eficiente em prol dos seus direitos!
        </Typography>
        <Button
          variant="contained"
          href="https://wa.me/5512992485894"
          rel="noopener noreferrer"
          startIcon={
            <ChatBubbleOutlineIcon style={{ fontSize: 15, marginRight: 2 }} />
          }
          sx={{
            transition: "transform 0.2s ease-in-out",
            padding: "12px 32px",
          }}
        >
          Agende agora uma reunião!
        </Button>
      </Box>
      <Box mb={3}>
        <Box>
          <Typography fontSize={"15px"} sx={{ fontWeight: "bold" }}>
            CAIO ALVES DE FARIA | ADVOGADO
            <br />
            OAB/SP 517.011
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", pb: 2 }}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
            © 2025 CaioAlves | Todos os direitos reservados
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const Footer: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
