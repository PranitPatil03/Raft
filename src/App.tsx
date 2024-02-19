import LandingPage from "./page/LandingPage";
import { ThemeProvider } from "@/components/theme-provider"
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LandingPage></LandingPage>
    </ThemeProvider>
  );
}

export default App;
