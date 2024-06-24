import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./components/Theme/DarkTheme"; // Adjust the import path as necessary
import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
