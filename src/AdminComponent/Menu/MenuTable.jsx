import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteFoodAction,
  getMenuItemsByRestaurantId,
} from "../../components/State/Menu/Action";

export default function MenuTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { restaurant, menu } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        restaurantId: restaurant.usersRestaurants.id,
        jwt,
        vegetarian: false,
        seasonal: false,
        nonveg: true,
        food_category: "biryani",
      })
    );
  }, [dispatch, jwt, restaurant.usersRestaurants.id]);

  const handleDeleteFood = (foodId) => {
    dispatch(deleteFoodAction({ foodId, jwt }));
  };
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          onClick={() => navigate("/admin/restaurants/add-menu")}
          title={"Menu"}
          sx={{ pt: 2, alignItems: "center" }}
          action={
            <IconButton aria-label="settings">
              <CreateIcon />
            </IconButton>
          }
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">image</TableCell>
                <TableCell align="right">title</TableCell>
                <TableCell align="right">ingredients</TableCell>
                <TableCell align="right">price</TableCell>
                <TableCell align="right">availability</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu?.menuItems.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <Avatar src={item.images[0]}></Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>

                  <TableCell align="right">
                    {item.ingredients.map((ingredient) => (
                      <Chip label={ingredient.name} key={ingredient.id} />
                    ))}
                  </TableCell>
                  <TableCell align="right">{`₹${item.price}`}</TableCell>
                  <TableCell align="right">
                    {item.available === true ? "avialable" : "not available"}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleDeleteFood(item.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
