import {NavBar} from "./components/navBar";
import { ThemeProvider } from "styled-components";
import { FONTS, COLORS } from "./theme";
import { WebsiteLogo } from "./components/websiteLogo";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <ThemeProvider theme={{fonts: FONTS, colors: COLORS}}>
      <WebsiteLogo />
      <NavBar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
