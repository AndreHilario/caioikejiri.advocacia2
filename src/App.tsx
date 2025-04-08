import Header from "./components/header/Header";
import ExplainSection from "./pages/ExplainSection";
import Footer from "./pages/Footer";
import MainSection from "./pages/MainSection";
import { MuiThemeProvider } from "./providers/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <>
        <Header />
        <MainSection />
        <ExplainSection />
        <Footer />
      </>
    </MuiThemeProvider>
  );
}

export default App;
