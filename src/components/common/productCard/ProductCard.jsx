import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import {Link} from "react-router-dom"
  import "./ProductCard.css"

  const ProductCard = ({ item }) => {
    return (
      <Card sx={{ maxWidth: 345 }} className='Card'>
        <CardMedia
          sx={{ height: 140 }}
          image={item.image}
          name={`image ${item.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            S/. {item.price}.00
          </Typography>
        </CardContent>
        <CardActions>
            {
              item.stock > 0 ?
              <Link to={`/itemDetail/${item.id}`}>
              <Button size="small" variant="outlined">
                Ver detalle
              </Button>
              </Link> : 
                <Button variant="conatined" disabled color="secondary" >Sin stock</Button>
            }
        </CardActions>
      </Card>

    );
  };
  
  export default ProductCard;