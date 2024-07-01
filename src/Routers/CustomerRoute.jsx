import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import RestaurantDetails from "../components/Restaurant/RestaurantDetails";
import Cart from "../components/Cart/Cart";
import Profile from "../components/Profile/Profile";
import Auth from "../components/Auth/Auth";
export default function CustomerRoute() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:aregister" element={<Home />} />
        <Route
          path="/restaurant/:city/:title/:id"
          element={<RestaurantDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
      </Routes>
      <Auth />
    </div>
  );
}
