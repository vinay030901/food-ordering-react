import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createIngredientCategory } from "../../components/State/Ingredients/Action";
import { useDispatch, useSelector } from "react-redux";

export default function CreateIngredientCategoryForm() {
  const dispatch = useDispatch();
  const { restaurant, ingredients } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    name: "",
    restaurantId: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      restaurantId: restaurant.usersRestaurants?.id,
    };
    dispatch(
      createIngredientCategory({
        data,
        jwt: localStorage.getItem("jwt"),
      })
    );
    console.log("ingredients: ", ingredients);
  };
  return (
    <div>
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredient Category
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="category"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          />
          <Button variant="contained" type="submit">
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
}
