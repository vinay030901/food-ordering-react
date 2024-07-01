import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./components/Theme/DarkTheme"; // Adjust the import path as necessary
import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/* <Cart /> */}
      {/* <Profile /> */}
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
