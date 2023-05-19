"use client";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ProductItemProps } from "../types";

export default function ProductItemComponent(props:ProductItemProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmWwHAwfTQLrhed-UQo_tpTDaCv9n8WieB_lq7x7istaS5kBkSjGaYejQD3NyhcD-AZDZRevm30920k33du1wZDvNRL5qoz0QMFcBCqO3VS1kLLfZiFFwXXkw&usqp=CAE"
          alt="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Iphone 13 Promax
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarcticaf
          </Typography>
        </CardContent>

        <CardActions>
          <div>
            {/* <Button size="small">Thêm giỏ hàng</Button>
            <Button size="small">Mua ngay</Button> */}
          </div>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
