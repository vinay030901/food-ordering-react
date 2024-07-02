import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./components/Theme/DarkTheme"; // Adjust the import path as necessary
import { CssBaseline } from "@mui/material";

import CustomerRoute from "./Routers/CustomerRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./components/State/Authentication/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
