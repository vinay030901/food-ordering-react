import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { useEffect } from "react";
import { getUsersOrders } from "../State/Order/Action";

export default function Orders() {
  const { order } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersOrders(jwt));
  }, [jwt, dispatch]);
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {order.orders.map((order) =>
          order.items.map((item, i) => (
            <OrderCard key={i} order={order} item={item} />
          ))
        )}
      </div>
    </div>
  );
}
