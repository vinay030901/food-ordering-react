import RestaurantCard from "../Restaurant/RestaurantCard";
export default function Favorites() {
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex flex-wrap justify-center">
        {[1, 1, 1].map((item, i) => (
          <RestaurantCard key={i} />
        ))}
      </div>
    </div>
  );
}
