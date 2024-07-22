import { Route, Routes } from "react-router-dom";
import CreateRestaurantForm from "../AdminComponent/CreateRestaurantForm/CreateRestaurantForm";
import Admin from "../AdminComponent/Admin/Admin";
import { useSelector } from "react-redux";

export default function AdminRoute() {
  const val = false;
  const { restaurant } = useSelector((store) => store);
  console.log(restaurant);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            !restaurant.usersRestaurants ? <CreateRestaurantForm /> : <Admin />
          }
        ></Route>
      </Routes>
    </div>
  );
}
