import ExplainSection from "./pages/ExplainSection";
import Footer from "./pages/Footer";
import MainSection from "./pages/MainSection";
import { MuiThemeProvider } from "./providers/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <>
        <MainSection />
        <ExplainSection />
        <Footer />
      </>
    </MuiThemeProvider>
  );
}

export default App;
