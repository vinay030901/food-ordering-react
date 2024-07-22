import { Button, Card } from "@mui/material";

import PropTypes from "prop-types";

OrderCard.propTypes = {
  item: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired, // Add order prop validation
};
export default function OrderCard({ item, order }) {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img className="h-16 w-16" src={item.food.images[0]} alt="food image" />
        <div>
          <p>{item.food.name}</p>
          <p>${item.totalPrice}</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">{order.orderStatus}</Button>
      </div>
    </Card>
  );
}
