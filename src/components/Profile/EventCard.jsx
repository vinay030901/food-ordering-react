import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EventCard() {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        image="https://cdn.pixabay.com/photo/2019/07/29/05/52/burger-4369973_1280.jpg"
        sx={{ height: 345 }}
      />
      <CardContent>
        <Typography variant="h5">Indian Fast Fod</Typography>
        <Typography variant="body2">Get 50% off on your first order</Typography>
        <div className="py-2 space-y-2">
          <p>{"mumbai"}</p>
          <p className="text-sm text-blue-500">July 19, 2024 10:00 AM</p>
          <p className="text-sm text-red-500">July 21, 2024 9:00 PM</p>
        </div>
      </CardContent>
      {false && (
        <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}
