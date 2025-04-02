import Header from "./components/header/Header";
import ExplainSection from "./pages/ExplainSection";
import FeaturesSection from "./pages/FeaturesSection";
import Footer from "./pages/Footer";
import MainSection from "./pages/MainSection";
import ServicesSection from "./pages/ServicesSection";
import { MuiThemeProvider } from "./providers/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <>
        <Header />
        <MainSection />
        <ExplainSection />
        <ServicesSection />
        <FeaturesSection />
        <Footer />
      </>
    </MuiThemeProvider>
  );
}

export default App;
