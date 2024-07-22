import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./components/Theme/DarkTheme"; // Adjust the import path as necessary
import { CssBaseline } from "@mui/material";

import CustomerRoute from "./Routers/CustomerRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./components/State/Authentication/Action";
import { findCart } from "./components/State/Cart/Action";
import Routers from "./Routers/Routers";
import { getRestaurantByUserId } from "./components/State/Restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt, dispatch, jwt]);

  useEffect(() => {
    dispatch(getRestaurantByUserId(auth.jwt || jwt));
  }, [auth.jwt, dispatch, jwt]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
