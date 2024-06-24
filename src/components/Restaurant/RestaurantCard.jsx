import { Card, Chip, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function RestaurantCard() {
  let shouldExecute = true;
  return (
    <Card className="w-[18rem]">
      <div
        className={`${
          shouldExecute ? "cursor-pointer" : "cursor-not-allowed"
        } relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg"
          alt=""
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={shouldExecute ? "success" : "error"}
          label={shouldExecute ? "open" : "closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">Indian fast food</p>
          <p className="text-gray-500 text-sm">
            Craving it all? Dive into our global pool...
          </p>
          <div>
            <IconButton>
              {shouldExecute ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
