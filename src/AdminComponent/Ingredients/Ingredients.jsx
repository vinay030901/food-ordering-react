import { Grid } from "@mui/material";
import IngredientsTable from "./IngredientsTable";
import IngredientCategoryTable from "./IngredientCategoryTable";

export default function Ingredients() {
  return (
    <div className="px-2">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <IngredientsTable />
        </Grid>
        <Grid item xs={12} lg={4}>
          <IngredientCategoryTable />
        </Grid>
      </Grid>
    </div>
  );
}
