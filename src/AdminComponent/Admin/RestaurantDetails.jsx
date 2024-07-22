import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useDispatch, useSelector } from "react-redux";
import { updateRestaurantStatus } from "../../components/State/Restaurant/Action";

export default function RestaurantDetails() {
  const { restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleRestaurantStatus = () => {
    dispatch(
      updateRestaurantStatus({
        restaurantId: restaurant.usersRestaurants.id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  };
  return (
    <div className="lg:px-20 px-5 pb-10">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          {restaurant.usersRestaurants?.name}
        </h1>
        <div>
          <Button
            onClick={handleRestaurantStatus}
            size="large"
            variant="contained"
            className="py-[1rem] px-[2rem]"
            color={restaurant.usersRestaurants?.open ? "primary" : "error"}
          >
            {restaurant.usersRestaurants?.open ? "close" : "open"}
          </Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Restaurant</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Owner</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant.usersRestaurants?.owner.fullName}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Restaurant Name</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant.usersRestaurants?.name}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Cuisine Type</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant.usersRestaurants?.cuisineType}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Opening Hours</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant.usersRestaurants?.openingHours}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Status</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant.usersRestaurants?.open ? (
                      <span className="px-5 py-2 rounded-full bg-green-400 text-gray-950">
                        Open
                      </span>
                    ) : (
                      <span className="px-5 py-2 rounded-full bg-red-400 text-gray-950">
                        Closed
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Address</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Country</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant.usersRestaurants?.openingHours}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">City</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Owner Champ
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Postal Code</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Owner Champ
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Owner Champ
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Contact</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Email</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant.usersRestaurants?.contactInformation?.email}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Mobile</p>

                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant.usersRestaurants?.contactInformation?.mobile}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Social</p>
                  <div className="flex text-gray-400 items-center pb-3 gap-2">
                    <span className="pr-5">-</span>
                    <a
                      href={
                        restaurant.usersRestaurants?.contactInformation
                          ?.instagram
                      }
                    >
                      <InstagramIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a
                      href={
                        restaurant.usersRestaurants?.contactInformation?.twitter
                      }
                    >
                      <TwitterIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a href="/">
                      <LinkedInIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a href="/">
                      <FacebookIcon sx={{ fontSize: "3rem" }} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
