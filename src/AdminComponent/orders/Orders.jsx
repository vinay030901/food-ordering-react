import {
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import OrderTable from "./OrderTable";

const orderStatus = [
  { label: "All", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
];
export default function Orders() {
  const [filterValue, setFilterValue] = useState("");
  const handleFilter = (e, value) => {
    setFilterValue(value);
  };
  return (
    <div className="px-2 ">
      <Card className="p-5">
        <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
          Order Status
        </Typography>

        <FormControl>
          <RadioGroup
            onChange={handleFilter}
            row
            name="category"
            value={filterValue || "all"}
          >
            {orderStatus.map((item) => (
              <FormControlLabel
                key={item.label}
                value={item.value}
                control={<Radio />}
                label={item.label}
                sx={{ color: "gray" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <OrderTable />
      </Card>
    </div>
  );
}
