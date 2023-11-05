import { Button } from "@mui/material"
import CounterContainer from "../../common/counter/CounterContainer"
import "../itemDetailContainer/ItemDetail.css"
import { Link } from "react-router-dom"

const ItemDetail = ( {productSelected, onAdd, initial, showCounter} ) => {
  return (
    <div className="detail">
    
        <div >
            <img className='image'src={productSelected.image} alt={productSelected.name} />
        </div>
        
        <div className='cardContent'>
            <h2>{productSelected.name}</h2>
            <div>
                <p>Precio Unitario:</p>
                <p>S/. {productSelected.price}.00</p>
            </div>

            {
                initial && <h3 style={{textAlign:"center", color:"red", padding:"10px"}}>Ya tienes {initial} unidades </h3>
            }

            {
                showCounter ?             
                <div className='cantidad'>
                <p>Cantidad</p>
                <CounterContainer stock={productSelected.stock} onAdd={onAdd} initial={initial}/>
                </div>: 
                <div style={{display:"flex", justifyContent:"space-around"}}>
                <Link to="/">
                    <Button variant="contained" color= "secondary" >Seguir comprando</Button>
                </Link>
                <Link to="/cart">
                    <Button variant="contained" color= "secondary" >Terminar compra</Button>
                </Link>

                </div>
                }

        </div>
    </div>
  )
}

export default ItemDetail