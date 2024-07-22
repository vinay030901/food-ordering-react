import { useSelector } from "react-redux";
import RestaurantCard from "../Restaurant/RestaurantCard";
export default function Favorites() {
  const { auth } = useSelector((store) => store);
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex flex-wrap justify-center">
        {auth.favorites.map((item, i) => (
          <RestaurantCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
