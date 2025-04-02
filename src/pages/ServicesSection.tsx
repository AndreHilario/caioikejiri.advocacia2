import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GavelIcon from "@mui/icons-material/Gavel";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CarCrashIcon from '@mui/icons-material/CarCrash';
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Ações Indenizatórias",
    description:
      "Se você sofreu algum prejuízo material ou foi submetido a alguma situação que tenha ultrapassado o mero dissabor, poderá ser indenizado.",
    icon: <GavelIcon style={{ color: "#A7F3D0", fontSize: "48px" }} />,
  },
  {
    id: 2,
    title: "Indicação Judicial de Condutor",
    description:
      "Está sendo penalizado por infrações de trânsito que não cometeu, mas perdeu o prazo para recorrer? É possível solicitar a transferência da titularidade das infrações judicialmente!",
    icon: <DriveEtaIcon style={{ color: "#A7F3D0", fontSize: "48px" }} />,
  },
  {
    id: 3,
    title: "Acidentes de Trânsito",
    description:
      "Além de pleitear danos materiais e morais, defendemos seus interesses na esfera criminal.",
    icon: <CarCrashIcon style={{ color: "#A7F3D0", fontSize: "48px" }} />,
  },
  {
    id: 4,
    title: "Inexigibilidade de ipva",
    description:
      "Se seu pedido de isenção foi injustamente negado ou se recebeu cobrança não estando mais na posse do veículo, o pedido poderá ser judicializado.",
    icon: <FileCopyIcon style={{ color: "#A7F3D0", fontSize: "48px" }} />,
  },
  {
    id: 5,
    title: "Defesa em ações de busca e apreensão",
    description:
      "Se o banco ajuizou ação de busca e apreensão do veículo, saiba que é possível reverter a situação caso tenha havido alguma nulidade.",
    icon: <ReportProblemIcon style={{ color: "#A7F3D0", fontSize: "48px" }} />,
  },
];

const ServicesSection: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenDialog = (service: Service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <Box
      sx={{
        py: 4,
        px: 4,
        background: "linear-gradient(to right, #000, #fff)",
        // backgroundColor: "#E0F7FA",
        textAlign: "center",
        minHeight: "80vh",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        color="#000"
        sx={{
          textShadow: '2px 2px 5px #A7F3D0', // Sombra verde
        }}
      >
        OUTROS SERVIÇOS PRESTADOS
      </Typography>


      <Grid container spacing={4} justifyContent="center" mt={1}>
        {services.map((service) => (
          <Grid key={service.id} item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                p: 3,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                backgroundColor: "#000",
                border: "2px groove #A7F3D0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "25vh",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                },
              }}
              onClick={() => handleOpenDialog(service)}
            >
              {service.icon}
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                {service.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Slide}
        keepMounted
        aria-labelledby="service-dialog-title"
        aria-describedby="service-dialog-description"
      >
        {selectedService && (
          <>
            <DialogTitle
              id="service-dialog-title"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {selectedService.title}
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Typography
                variant="body2"
                sx={{ color: "#000", lineHeight: "1.5", mt: 1 }}
              >
                {selectedService.description}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ServicesSection;
