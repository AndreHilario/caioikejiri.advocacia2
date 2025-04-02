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
              <Typography variant="h4">CAIO IKEJIRI</Typography>
              <Typography variant="h4"> ADVOGADO | OAB/SP: 511.392</Typography>
            </Stack>
          </Box>
          <Box textAlign="center">
            <Typography variant="h4" sx={{ p: 2 }}>
              DEFENDA SEUS DIREITOS
            </Typography>
            <Button
              variant="contained"
              href="https://wa.me/5512997402160"
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
              Entre em contato!
            </Button>
          </Box>
        </Stack>

        <Box sx={{ mb: 1, width: "100%" }} textAlign="center">
          <Box
            sx={{
              height: 2,
              width: "100%",
              background:
                "linear-gradient(to right, rgba(52, 211, 153, 0.2) 0%, #34D399 50%, rgba(52, 211, 153, 0.2) 100%)",
              mb: 1,
            }}
          />
          <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
            © 2025 CaioIkejiri | Todos os direitos reservados
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
      }}
    >
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, px: 4 }}>
          DEFENDA SEUS DIREITOS
        </Typography>
        <Button
          variant="contained"
          href="https://wa.me/5512997402160"
          rel="noopener noreferrer"
          startIcon={
            <ChatBubbleOutlineIcon style={{ fontSize: 15, marginRight: 2 }} />
          }
          sx={{
            transition: "transform 0.2s ease-in-out",
            padding: "8px 32px",
          }}
        >
          Entre em contato!
        </Button>
      </Box>
      <Box mb={3}>
        <Box>
          <Typography fontSize={"15px"} sx={{ fontWeight: "bold" }}>
            CAIO IKEJIRI | ADVOGADO
            <br />
            OAB/SP: 511.392
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", pb: 2 }}>
        <Box
          sx={{
            height: 2,
            width: "100%",
            background:
              "linear-gradient(to right, rgba(52, 211, 153, 0.2) 0%, #34D399 50%, rgba(52, 211, 153, 0.2) 100%)",
            mb: 1.5,
          }}
        />
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="caption" sx={{ color: "#A0A0A0" }}>
            © 2025 CaioIkejiri | Todos os direitos reservados
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
