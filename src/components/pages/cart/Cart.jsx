
import { Button, IconButton } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./Cart.css"

const Cart = () => {
  const {cart, clearCart, deleteProductById, getTotalPrice}=useContext(CartContext)
  let total = getTotalPrice()

  const clearCartWithAlert =()=>{
    Swal.fire({
      title: '¿Seguro que quieres vaciar el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Vaciar',
      denyButtonText: `No vaciar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Carrito vaciado', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se vació', '', 'info')
      }
    })
  }

  
  return (
    <div className="carrito">
      <h1>
        Carrito de compras
      </h1>
      {
        cart.map((product)=>(
          <div key={product.id} style={{border:"1px solid black", margin:"5px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h4>{product.name}</h4>
            <img src={product.image} alt={product.name} />
            <p>S/.{product.price}.00</p>
            <p>Cantidad:{product.quantity}</p>
            <IconButton onClick={()=>deleteProductById(product.id)}>
              <DeleteForeverIcon />
            </IconButton>
            
          </div>
        ))
      }
      {
        cart.length>0 && (
          <div className="final">
            <h3>El total a pagar es: {total}</h3>
            <div className="buttons">
            <Link to ="/">
              <Button variant="contained" color= "secondary" >
                  Seguir comprando
              </Button>
            </Link>
              <Link to ="/checkout">
              <Button variant="contained" color= "secondary" >
                  Finalizar compra
              </Button>
              </Link>
              <Button variant="contained" color= "secondary" onClick={clearCartWithAlert}>
                  Vaciar carrito
              </Button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart