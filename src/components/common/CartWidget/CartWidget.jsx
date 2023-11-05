import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const {getTotalQuantity}= useContext(CartContext)
  let total=getTotalQuantity()
  return (
    <Link to ="/cart">
        <Badge badgeContent={total} showZero color="secondary">
            <ShoppingCartIcon color="action" />
        </Badge>
    </Link>
  )
}

export default CartWidget