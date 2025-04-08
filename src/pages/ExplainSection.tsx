import React from "react";
import {
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Box,
  useMediaQuery,
  Theme,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Spa as SpaIcon,
  FamilyRestroom as DivorceIcon,
  Category,
} from "@mui/icons-material";
import image from "../assets/advImage.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { generateWhatsappLink } from "../utils/sendWhatsAppMessage";

const accordionData = [
  {
    title: "Divórcio Judicial",
    icon: (
      <DivorceIcon sx={{ verticalAlign: "middle", mr: 1, color: "#388E3C" }} />
    ),
    description: (
      <Typography variant="body2">
        O divórcio judicial é o meio legal para formalizar o fim do casamento.
        Ele pode acontecer de duas formas:{" "}
        <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
          <li>
            <b>Divórcio Consensual:</b> <b>Quando ambas as partes concordam</b>{" "}
            com o término e as condições (partilha de bens, guarda dos filhos e
            pensão). É mais rápido e menos custoso.
          </li>
          <li>
            <b>Divórcio Litigioso:</b> Quando{" "}
            <b>não há acordo entre as partes.</b> Nesse caso, o processo pode
            envolver disputas judiciais e exigir maior tempo e esforço para a
            resolução.
          </li>
        </ul>
      </Typography>
    ),
    backgroundColor: "#000", // Cor do primeiro accordion
  },
  {
    title: "Divórcio Extrajudicial",
    icon: <SpaIcon sx={{ verticalAlign: "middle", mr: 1, color: "#388E3C" }} />,
    description: (
      <>
        O divórcio extrajudicial é o meio administrativo para por fim ao
        casamento sem intervenção judicial.
      </>
    ),
    backgroundColor: "#000", // Cor dos outros accordions
  },
];

const accordionDataMobile = [
  {
    title:
      "Qual a importância de ter um especialista ao meu lado nesse momento?",
    icon: (
      <Category sx={{ verticalAlign: "middle", mr: 1, color: "#388E3C" }} />
    ),
    description: (
      <>
        <Typography variant="body1" paragraph>
          Contar com um <b>ADVOGADO ESPECIALIZADO</b> faz toda a diferença! A
          situação é já delicada por si só, você não precisa ter mais dores de
          cabeça com isso. Com o nosso auxílio, cuidaremos de todos os detalhes
          para resolver o seu problema de maneira mais ágil e eficiente
          possível!
        </Typography>
        <Typography variant="body1">
          Iremos garantir que todos os seus direitos serão respeitados, seja no
          presente, seja no futuro, e ainda, vamos evitar possíveis prejuízos.
        </Typography>
      </>
    ),
    backgroundColor: "#000", // Cor do primeiro accordion
  },
];

const ExplainSectionDesktop: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        py: 1,
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid item xs={12} md={6} sx={{ p: { xs: 2, md: 3 } }}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Tabs value={value} onChange={handleChange} textColor="inherit">
            <Tab label="Tipos de Divórcio" />
            <Tab label="Perguntas Frequentes" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Card
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              boxShadow: 3,
              mt: 1,
              height: "50vh",
            }}
          >
            <CardContent>
              {accordionData.map((item, index) => (
                <Accordion
                  key={index}
                  sx={{
                    backgroundColor: item.backgroundColor,
                    color: "#fff",
                    mb: 6,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography>
                      {item.icon}
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: 2,
                        maxHeight: "220px",
                        overflowY: "auto",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              boxShadow: 3,
              mt: 1,
              height: "50vh",
            }}
          >
            <CardContent>
              {accordionDataMobile.map((item, index) => (
                <Accordion
                  key={index}
                  sx={{
                    backgroundColor: item.backgroundColor,
                    color: "#fff",
                    mb: 6,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography>
                      {item.icon}
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: 2,
                        maxHeight: "220px",
                        overflowY: "auto",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContent>
          </Card>
        </TabPanel>
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
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt="Ilustração sobre divórcio"
          style={{
            maxWidth: "100%",
            maxHeight: "72vh",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
            objectFit: "cover",
          }}
        />
      </Grid>
    </Grid>
  );
};

const ExplainSectionMobile: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 4,
        textAlign: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" mb={2} mt={2}>
          Tipos de Divórcio
        </Typography>
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            sx={{ backgroundColor: item.backgroundColor, color: "#fff", mb: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>
                {item.icon} {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ color: "#000", backgroundColor: "#fff", padding: 1 }}
              >
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        {/* <Box sx={{ border: "1px solid #fff" }} mt={2} /> */}
        <Typography variant="h5" mt={6} mb={2}>
          Perguntas Frequentes
        </Typography>
        {accordionDataMobile.map((item, index) => (
          <Accordion
            key={index}
            sx={{ backgroundColor: item.backgroundColor, color: "#fff", mb: 6 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>
                {item.icon} {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ color: "#000", backgroundColor: "#fff", padding: 1 }}
              >
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
        <img
          src={image}
          alt="Ilustração sobre divórcio"
          style={{
            maxWidth: "100%",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon style={{ marginRight: "3px" }} />}
          sx={{ mt: 4, px: 3 }}
          href={generateWhatsappLink(
            "5512992485894",
            "Olá! Preciso do auxílio de um Advogado."
          )}
        >
          Fale comigo
        </Button>
      </Grid>
    </Grid>
  );
};

// Função de suporte para o TabPanel
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ExplainSection: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return isMobile ? <ExplainSectionMobile /> : <ExplainSectionDesktop />;
};

export default ExplainSection;
