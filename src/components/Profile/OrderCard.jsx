import { Button, Card } from "@mui/material";

export default function OrderCard() {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://cdn.pixabay.com/photo/2016/01/15/10/56/biryani-1141444_1280.jpg"
          alt="biryani image"
        />
        <div>
          <p>Biryani</p>
          <p>$399</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">completed</Button>
      </div>
    </Card>
  );
}
